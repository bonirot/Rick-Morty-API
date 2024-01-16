// RICK AND MORTY

const episodesDiv = document.getElementById("episodesDiv");

const urlRM = "https://rickandmortyapi.com/api/episode";

fetch(urlRM)
  .then((response) => response.json())
  .then((episodes) => console.log(episodes));

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
