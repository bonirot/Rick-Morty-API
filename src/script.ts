import { Main, Info, Episode, Character } from "./interfaces";

const urlRickMorty = "https://rickandmortyapi.com/api/episode";
const episodeContainer = document.getElementById(
  "listContainer"
) as HTMLUListElement;
const btnLoad = document.getElementById("btnLoad") as HTMLButtonElement;

//CÓDIGO MARÍA

printContent(urlRickMorty);

async function printContent(url: string): Promise<void> {
  const data = await fetch(url);
  const JSONdata: Main = await data.json();
  const episodes: Episode[] = JSONdata.results;

  episodes.forEach((episode) => {
    episodeContainer.insertAdjacentHTML(
      "beforeend",
      `<li id="episode${episode.episode}" class="episodeList-item"><h4 episodeUrl="${episode.url}" class="text">${episode.episode}: ${episode.name}</h4></li>`
    );
    const clickEpisodes = document.getElementById(
      `episode${episode.episode}`
    ) as HTMLLIElement;
    clickEpisodes.addEventListener("click", printEpisodeInfo);
  });

  if (JSONdata.info.next) {
    btnLoad.addEventListener(
      "click",
      () => {
        printContent(JSONdata.info.next);
      },
      { once: true }
    );
  } else {
    btnLoad.remove();
  }
}

//Print Info Episodes

async function printEpisodeInfo(clickEvent: MouseEvent) {
  const target = clickEvent.target as HTMLHeadingElement;
  const urlInfoEpisodes = target.getAttribute("episodeUrl")!; // ! significa va a existis sí o sí, siempre
  const data2 = await fetch(urlInfoEpisodes);
  const episode: Episode = await data2.json();
  const displayInfo = `<p class="text">Name: ${episode.name}</p>
  <p class="text">Air Date: ${episode.air_date}</p>
  <p class="text">Episode: ${episode.episode}</p>`;
  const printEpisodeContainer = document.getElementById(
    "mainContainer"
  ) as HTMLDivElement;
  printEpisodeContainer.innerHTML = displayInfo;
  const characters = episode.characters;
  characters.forEach(async (characters) => {
    const data3 = await fetch(characters);
    const characterInfo: Character = await data3.json();
    const displayImageCharacter = `<img src=${characterInfo.image} class="characterAvatar">`;
    console.log(characterInfo.image);
    printEpisodeContainer.insertAdjacentHTML(
      "beforeend",
      displayImageCharacter
    );
  });
}

// async function getTitlesEpisodes(): Promise<Main> {
//   try {
//     const titleEpisode = await fetch(urlRM);
//     const data: Main = await titleEpisode.json();
//     const episodes: Episode[] = data.results;

//     episodes.forEach((episode) => {
//       // console.log(episode);
//       const episodeContainer = document.getElementById(
//         "listContainer"
//       ) as HTMLUListElement;
//       const liEpisode = document.createElement("li");
//       const h4text = document.createElement("h4");

//       episodeContainer.appendChild(liEpisode);
//       liEpisode.classList.add("episodeList-item");
//       liEpisode.appendChild(h4text);
//       h4text.textContent = episode.name;
//       h4text.classList.add("text");
//     });

//     return data;
//   } catch (error) {
//     throw new Error("fail");
//   }
// }

// getTitlesEpisodes()
//   .then((dataResults) => {
//     console.log(dataResults);
//     getMoreTitles(dataResults);
//   })
//   .then((dataResults) => {
//     console.log(dataResults);
//   });

// function getMoreTitles(dataResults: Main): void {
//   const btnLoadEpisodes = document.getElementById(
//     "btnLoad"
//   ) as HTMLButtonElement;
//   let isAlreadyLoad: boolean = true;
//   btnLoadEpisodes.addEventListener("click", () => {
//     if (isAlreadyLoad) {
//       loadMoreTitles(dataResults);
//       isAlreadyLoad = false;
//     }
//   });
// }

// async function loadMoreTitles(dataResults: Main): Promise<Main> {
//   try {
//     const response = await fetch(dataResults?.info.next);
//     const data: Main = await response.json();
//     const episodes: Episode[] = data.results;

//     episodes.forEach((episode) => {
//       const episodeContainer = document.getElementById(
//         "listContainer"
//       ) as HTMLUListElement;
//       // const liEpisode = document.createElement("li");
//       // liEpisode.textContent = episode.name;
//       // episodeContainer.appendChild(liEpisode);
//       const liEpisode = document.createElement("li");
//       const h4text = document.createElement("h4");

//       episodeContainer.appendChild(liEpisode);
//       liEpisode.classList.add("episodeList-item");
//       liEpisode.appendChild(h4text);
//       h4text.textContent = episode.name;
//       h4text.classList.add("text");
//     });
//     return data;
//   } catch (error) {
//     throw new Error("fallo");
//   }
// }

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
