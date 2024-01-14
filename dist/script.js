"use strict";
const episodesDiv = document.getElementById("episodesDiv");
const urlRM = "https://rickandmortyapi.com/api/episode";
const urlPosts = "http://localhost:3000/posts";
const urlUsers = "http://localhost:3000/users";
const urlComments = "http://localhost:3000/comments";
fetch(urlRM)
    .then((response) => response.json())
    .then((data) => console.log(data));
//# sourceMappingURL=script.js.map