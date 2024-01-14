// RICK AND MORTY

const episodesDiv = document.getElementById("episodesDiv");

const urlRM = "https://rickandmortyapi.com/api/episode";

const urlPosts = "http://localhost:3000/posts";
const urlUsers = "http://localhost:3000/users";
const urlComments = "http://localhost:3000/comments";

fetch(urlRM)
  .then((response) => response.json())
  .then((data) => console.log(data));
// data.forEach((element) => {
//   const htmlPosts = ` <a
//   href="#"
//   class="list-group-item d-flex gap-3 py-3"
//   aria-current="true" data-bs-toggle="modal" data-bs-target="#staticBackdrop">

//   <!-- Modal -->
//   <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//     <div class="modal-dialog">
//       <div class="modal-content">
//         <div class="modal-header">
//           <h1 class="modal-title fs-5" id="staticBackdropLabel">${post.title}</h1>
//           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//         </div>
//         <div class="modal-body">
//         ${post.body}
//         </div>
//         <div class="modal-footer">
//           <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//           <button type="button" class="btn btn-primary">Understood</button>
//         </div>
//       </div>
//     </div>
//   </div>
//   <!-- Modal -->

//   <img
//   src="src/chat-right-dots.svg"
//   alt="twbs"
//   width="32"
//   height="32"
//   class="flex-shrink-0"
//   />
//   <div class="d-flex gap-2 w-100 justify-content-between">
//   <div>
//   <h6 id="titlePost" class="mb-0">${post.title}</h6>
//   <p class="mb-0 opacity-75">
//   ${post.body}
//   </p>
//   </div>
//   <small class="opacity-50 text-nowrap">now</small>
//   </div>
//   </a>`;
//   divContainer.innerHTML += htmlPosts;

// fetch(urlUsers)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// fetch(urlComments)
//   .then((response) => response.json())
//   .then((data) => console.log(data));
