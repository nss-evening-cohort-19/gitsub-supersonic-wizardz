import { skeletonDomString, renderToDom, searchSetup } from "./utlities.js";

const repos = [
  {
    id: 1,
    name: "random-repo-name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    favorite: false,
  },
  {
    id: 2,
    name: "adventure-time",
    description:
      "Twelve- year-old Finn battles evil in the Land of Ooo. Assisted by his magical dog, Jake, Finn roams the Land of Ooo righting wrongs and battling evil.",
    favorite: false,
  },
  {
    id: 3,
    name: "mass-effect",
    description:
      "The franchise depicts a distant future where humanity and several alien civilizations have colonized the known universe using technology left behind by advanced precursor civilizations",
    favorite: false,
  },
  {
    id: 4,
    name: "fall-out-four",
    description: `In the year 2287, ten years after 210 years after "The Great War", which caused catastrophic nuclear devastation across the United States.`,
    favorite: false,
  },
];

//define all your functions here
const newRepoForm = () => {
  const domString = `<h3>Create a new repository</h3>
  <form id="spCreate">
  <div class="form-floating">
    <input
      class="form-control"
      placeholder="Repository Name"
      id="repoName"
      type="text"
    ></input>
    <label for="repoName">Repository Name</label>
  </div>
  <h6>Great repository names are short and memorable. Need inspiration? How about <em>special-winner</em>?</h6>
  <div class="form-floating">
    <input
      class="form-control"
      placeholder="Description"
      id="formDescription" style="height: 100px"
      type="text"></input>
    <label for="formDescription">Description</label>
  </div>
  
  <hr>
  <button type="submit" class="btn btn-primary">Create Repository</button>
  </form>
  `;
  renderToDom("#uploadContent", domString);
};

const title = () => {
  const domString = `<h3>Repositories</h3>`;
  renderToDom("#titleDiv", domString);
};

const repoCards = (array) => {
  let domString = "";
  let date = new Date().toLocaleDateString();
  for (const repo of array) {
    domString += `
    <div id="repoCardContainer" class="card w-100">
  <div class="card-body">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="card-title">${repo.name}</h5>
      <small id="date" class="text-muted">${date}</small>
      <button id="delete--${
        repo.id
      }" type="button" class="text-muted btn btn-danger deleteButton">X</button>
    </div>
    <p class="card-text">${repo.description}</p>
    <button id="favorite--${repo.id}" type="button" class="btn btn-light">
    <i id="favorite--${repo.id}"  class="fa-solid fa-heart ${
      repo.favorite ? "heartRed" : ""
    }"></i>
    <span id="favorite--${repo.id}"  class="text-muted">Favorite</span>
    </button>
  </div>
</div>`;
  }
  renderToDom("#uploadedContent", domString);
};

const search = (e) => {
  const userInput = e.target.value.toLowerCase();
  const searchResult = repos.filter(
    (repo) =>
      repo.name.toLowerCase().includes(userInput) ||
      repo.description.toLowerCase().includes(userInput)
  );
  repoCards(searchResult);
};

const eventlisteners = () => {
  const formBtn = () => {
    const form = document.querySelector("#spCreate");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let newRepo = {
        id: repos.length + 1,
        name: document.getElementById("repoName").value,
        description: document.getElementById("formDescription").value,
        favorite: false,
      };
      console.log(newRepo);
      repos.push(newRepo);
      repoCards(repos);
      form.reset();
    });
  };

  document.querySelector("#search-field").addEventListener("keyup", search);

  const favoriteBtn = () => {
    document
      .querySelector("#uploadedContent")
      .addEventListener("click", (e) => {
        const [method, favoriteCard] = e.target.id.split("--");
        const idOfCard = repos.findIndex(
          (repository) => repository.id === parseInt(favoriteCard)
        );
        // console.log(favoriteCard);
        if (e.target.id.includes("favorite")) {
          repos[idOfCard].favorite ^= true;
          console.log(repos[idOfCard].favorite);
          // document.querySelector("#icon").style.color = "red";
          repoCards(repos);
          // console.log("You clicked to favorite");
        }
      });
  };

  const deleteBtn = () => {
    document
      .querySelector("#uploadedContent, .deleteButton")
      .addEventListener("click", (e) => {
        if (e.target.id.includes("delete")) {
          const [method, deleteCard] = e.target.id.split("--");
          const idOfCard = repos.findIndex(
            (repository) => repository.id === parseInt(deleteCard)
          );
          // if (e.target.id.includes("delete")) {
          repos.splice(idOfCard, 1);
          repoCards(repos);
        }
      });
  };
  formBtn();
  deleteBtn();
  favoriteBtn();
};
function startApp() {
  renderToDom("#mainPage", skeletonDomString);
  newRepoForm();
  title();
  repoCards(repos);
  searchSetup();
  eventlisteners();
  //put rest of start up here
}

startApp();
