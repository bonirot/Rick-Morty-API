var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const urlRM = "https://rickandmortyapi.com/api/episode";
function getTitlesEpisodes() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const titleEpisode = yield fetch(urlRM);
            const data = yield titleEpisode.json();
            const episodes = data.results;
            episodes.forEach((episode) => {
                const episodeContainer = document.getElementById("listContainer");
                const liEpisode = document.createElement("li");
                liEpisode.textContent = episode.name;
                episodeContainer.appendChild(liEpisode);
                liEpisode.classList.add("episodeList-item");
            });
            return data;
        }
        catch (error) {
            throw new Error("fail");
        }
    });
}
getTitlesEpisodes().then((dataResults) => {
    getMoreTitles(dataResults);
});
function getMoreTitles(dataResults) {
    const btnLoadEpisodes = document.getElementById("btnLoad");
    let isAlreadyLoad = true;
    btnLoadEpisodes.addEventListener("click", () => {
        if (isAlreadyLoad) {
            loadMoreTitles(dataResults);
            isAlreadyLoad = false;
        }
    });
}
function loadMoreTitles(dataResults) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (dataResults.info.next) {
                const response = yield fetch(dataResults === null || dataResults === void 0 ? void 0 : dataResults.info.next);
                const data = yield response.json();
                const episodes = data.results;
                episodes.forEach((episode) => {
                    const episodeContainer = document.getElementById("listContainer");
                    const liEpisode = document.createElement("li");
                    liEpisode.textContent = episode.name;
                    episodeContainer.appendChild(liEpisode);
                });
                return data;
            }
        }
        catch (error) {
            throw new Error("fallo");
        }
    });
}
export {};
//# sourceMappingURL=script.js.map