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
const urlCharacters = "https://rickandmortyapi.com/api/character";
const episodeContainer = document.getElementById("listContainer");
const btnLoad = document.getElementById("btnLoad");
printContent(urlRickMorty);
function printContent(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetch(url);
        const JSONdata = yield data.json();
        const episodes = JSONdata.results;
        episodes.forEach((episode) => {
            episodeContainer.insertAdjacentHTML("beforeend", `<li id="episode${episode.episode}" class="episodeList-item"><h4 episodeUrl="${episode.url}" class="text">${episode.episode}: ${episode.name}</h4></li>`);
            const clickEpisodes = document.getElementById(`episode${episode.episode}`);
            clickEpisodes.addEventListener("click", printEpisodeInfo);
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
        const displayInfo = `<p class="text">Name: ${episode.name}</p>
  <p class="text">Air Date: ${episode.air_date}</p>
  <p class="text">Episode: ${episode.episode}</p>`;
        const printEpisodeContainer = document.getElementById("mainContainer");
        printEpisodeContainer.innerHTML = displayInfo;
        const characters = episode.characters;
        characters.forEach((characters) => __awaiter(this, void 0, void 0, function* () {
            const data3 = yield fetch(characters);
            const characterInfo = yield data3.json();
            const displayImageCharacter = `<img src=${characterInfo.image} class="characterAvatar">`;
            console.log(characterInfo.image);
            printEpisodeContainer.insertAdjacentHTML("beforeend", displayImageCharacter);
        }));
    });
}
export {};
//# sourceMappingURL=script.js.map