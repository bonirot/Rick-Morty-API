var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const urlRickMorty = "https://rickandmortyapi.com/api/episode";
const episodeContainer = document.getElementById("listContainer");
const asideEpisodes = document.getElementById("episodeContainer");
const btnLoad = document.getElementById("btnLoad");
printContent(urlRickMorty);
function printContent(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetch(url);
        const JSONdata = yield data.json();
        const episodes = JSONdata.results;
        episodes.forEach((episode) => {
            episodeContainer.insertAdjacentHTML("beforeend", `<li id="episode${episode.id}" class="episodeList-item"><h4 episodeUrl="${episode.url}" class="text">#${episode.id}: ${episode.name}</h4></li>`);
            const clickEpisodes = document.getElementById(`episode${episode.id}`);
            clickEpisodes.addEventListener("click", printEpisodeInfo);
        });
        const btnLoadDropdown = document.getElementById("btnLoadDropdown");
        btnLoadDropdown.addEventListener("click", () => {
            asideEpisodes.classList.toggle("episodeList");
        });
        if (JSONdata.info.next) {
            btnLoad.addEventListener("click", () => {
                printContent(JSONdata.info.next);
            }, { once: true });
        }
        else {
            btnLoad.remove();
        }
    });
}
function printEpisodeInfo(clickEvent) {
    return __awaiter(this, void 0, void 0, function* () {
        const target = clickEvent.target;
        const urlInfoEpisodes = target.getAttribute("episodeUrl");
        const data2 = yield fetch(urlInfoEpisodes);
        const episode = yield data2.json();
        const displayInfo = `<div d="infoCard" class="infoCard">
  <h1 class="episodeTitle text">${episode.name}</h1>
  <p class="text">Air Date: ${episode.air_date}</p>
  <p class="text">Episode: ${episode.episode}</p></div>`;
        const printEpisodeContainer = document.getElementById("mainContainer");
        printEpisodeContainer.innerHTML = displayInfo;
        const characters = episode.characters;
        characters.forEach((characters) => __awaiter(this, void 0, void 0, function* () {
            const data3 = yield fetch(characters);
            const characterInfo = yield data3.json();
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
            printEpisodeContainer.insertAdjacentHTML("beforeend", displayImageCharacter);
        }));
    });
}
export {};
//# sourceMappingURL=script.js.map