import { Main, Info, Episode, Character } from "./interfaces";

const urlRickMorty = "https://rickandmortyapi.com/api/episode";
const episodeContainer = document.getElementById(
  "listContainer"
) as HTMLUListElement;
const asideEpisodes = document.getElementById(
  "episodeContainer"
) as HTMLDivElement;
const btnLoad = document.getElementById("btnLoad") as HTMLButtonElement;

//FUNCTION TO PRINT ALL THE EPISODE TITLES

printContent(urlRickMorty);

async function printContent(url: string): Promise<void> {
  const data = await fetch(url);
  const JSONdata: Main = await data.json();
  const episodes: Episode[] = JSONdata.results;

  episodes.forEach((episode) => {
    episodeContainer.insertAdjacentHTML(
      "beforeend",
      `<li id="episode${episode.id}" class="episodeList-item"><h4 episodeUrl="${episode.url}" class="text">#${episode.id}: ${episode.name}</h4></li>`
    );
    const clickEpisodes = document.getElementById(
      `episode${episode.id}`
    ) as HTMLLIElement;
    clickEpisodes.addEventListener("click", printEpisodeInfo);
  });
  const btnLoadDropdown = document.getElementById(
    "btnLoadDropdown"
  ) as HTMLButtonElement;

  btnLoadDropdown.addEventListener("click", () => {
    asideEpisodes.classList.toggle("episodeList");
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
  const urlInfoEpisodes = target.getAttribute("episodeUrl")!;
  const data2 = await fetch(urlInfoEpisodes);
  const episode: Episode = await data2.json();
  const displayInfo = `<div d="infoCard" class="infoCard">
  <h1 class="episodeTitle text">${episode.name}</h1>
  <p class="text">Air Date: ${episode.air_date}</p>
  <p class="text">Episode: ${episode.episode}</p></div>`;
  const printEpisodeContainer = document.getElementById(
    "mainContainer"
  ) as HTMLDivElement;
  printEpisodeContainer.innerHTML = displayInfo;

  const characters = episode.characters;
  characters.forEach(async (characters) => {
    const data3 = await fetch(characters);
    const characterInfo: Character = await data3.json();
    const displayImageCharacter = `<div class="characterCards-container">
      <img
        src=${characterInfo.image}
        class="characterCards-avatar"
      />
      <div class="characterCards-info">
        <h3 class="text nameText">${characterInfo.name}</h3>
        <p class="text">Status: ${characterInfo.status}</p>
        <p class="text">Species: ${characterInfo.species}</p>
        <p class="text">Gender: ${characterInfo.gender}</p>
      </div>
    </div>`;
    printEpisodeContainer.insertAdjacentHTML(
      "beforeend",
      displayImageCharacter
    );
  });
}
