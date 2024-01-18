import { Main, Info, Episode } from "./interfaces";

const urlRM = "https://rickandmortyapi.com/api/episode";

async function getTitlesEpisodes(): Promise<Main> {
  try {
    const titleEpisode = await fetch(urlRM);
    const data: Main = await titleEpisode.json();
    const episodes: Episode[] = data.results;

    episodes.forEach((episode) => {
      // console.log(episode);
      const episodeContainer = document.getElementById(
        "listContainer"
      ) as HTMLUListElement;
      const liEpisode = document.createElement("li");
      liEpisode.textContent = episode.name;
      episodeContainer.appendChild(liEpisode);
      liEpisode.classList.add("episodeList-item");
      // const h4text = document.createElement('h4');
      // h4text.classList.add('text');
    });

    return data;
  } catch (error) {
    throw new Error("fail");
  }
}

getTitlesEpisodes().then((dataResults) => {
  getMoreTitles(dataResults);
});

function getMoreTitles(dataResults: Main): void {
  const btnLoadEpisodes = document.getElementById(
    "btnLoad"
  ) as HTMLButtonElement;
  let isAlreadyLoad: boolean = true;
  btnLoadEpisodes.addEventListener("click", () => {
    if (isAlreadyLoad) {
      loadMoreTitles(dataResults);
      isAlreadyLoad = false;
    }
  });
}

async function loadMoreTitles(dataResults: Main) {
  try {
    if (dataResults.info.next) {
      const response = await fetch(dataResults?.info.next);
      const data: Main = await response.json();
      const episodes: Episode[] = data.results;

      episodes.forEach((episode) => {
        const episodeContainer = document.getElementById(
          "listContainer"
        ) as HTMLUListElement;
        const liEpisode = document.createElement("li");
        liEpisode.textContent = episode.name;
        episodeContainer.appendChild(liEpisode);
      });
      return data;
    }
  } catch (error) {
    throw new Error("fallo");
  }
}

// fetch(urlRM)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     const nameEpisode: Episodes[] = data.results;
//     nameEpisode.forEach((episode: Episodes) => {
//       console.log(episode.name);
//       const titleEpisode = episode.name;
//       episodeContainer.innerHTML += `<li class="episodeList-item">
//           <h4 class="text">${titleEpisode}</h4>
//         </li>`;
//     });
//   });

// {
//   data.forEach((element: any) => {
//     const htmlPosts = ` <a
//       href="#"
//       class="list-group-item py-3 lh-sm bg-rm02"
//       aria-current="true"
//     >
//       <div class="d-flex w-100 align-items-center justify-content-between">
//         <strong class="mb-1">${element}</strong>
//       </div>
//       <div class="col-10 mb-1 small">
//         Some placeholder content in a paragraph below the heading and date.
//       </div>
//     </a>`;
//     episodesDiv.innerHTML += htmlPosts;
//     console.log(element);
//   });
// });

//console.log(data.results.episode));

// fetch(urlUsers)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// fetch(urlComments)
//   .then((response) => response.json())
//   .then((data) => console.log(data));
