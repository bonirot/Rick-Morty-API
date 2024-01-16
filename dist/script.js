"use strict";
const episodesDiv = document.getElementById("episodesDiv");
const urlRM = "https://rickandmortyapi.com/api/episode";
fetch(urlRM)
    .then((response) => response.json())
    .then((episodes) => console.log(episodes));
//# sourceMappingURL=script.js.map