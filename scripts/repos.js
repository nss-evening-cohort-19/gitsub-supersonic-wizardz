import { skeletonDomString, renderToDom, searchSetup } from "./utlities.js";

const repos = [
  {
    id: 1,
    name: "random-repo-name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    favorite: false,
    contributors: [
      { username: "shalane-proctor", commits: 25, comments: 5, branches: 10 },
      { username: "PennCreative", commits: 26, comments: 9, branches: 17 },
      { username: "patrick24cr", commits: 29, comments: 7, branches: 9 },
      { username: "scamp925", commits: 19, comments: 12, branches: 13 },
    ],
  },
  {
    id: 2,
    name: "adventure-time",
    description:
      "Twelve- year-old Finn battles evil in the Land of Ooo. Assisted by his magical dog, Jake, Finn roams the Land of Ooo righting wrongs and battling evil.",
    favorite: false,
    contributors: [
      { username: "shalane-proctor", commits: 22, comments: 9, branches: 12 },
      { username: "patrick24cr", commits: 17, comments: 3, branches: 13 },
    ],
  },
  {
    id: 3,
    name: "mass-effect",
    description:
      "The franchise depicts a distant future where humanity and several alien civilizations have colonized the known universe using technology left behind by advanced precursor civilizations",
    favorite: false,
    contributors: [
      { username: "shalane-proctor", commits: 25, comments: 5, branches: 10 },
      { username: "scamp925", commits: 38, comments: 6, branches: 9 },
      { username: "patrick24cr", commits: 16, comments: 0, branches: 14 },
    ],
  },
  {
    id: 4,
    name: "fall-out-four",
    description: `In the year 2287, ten years after 210 years after "The Great War", which caused catastrophic nuclear devastation across the United States.`,
    favorite: false,
    contributors: [
      { username: "drteresavasquez", commits: 50, comments: 21, branches: 32 },
      { username: "PennCreative", commits: 30, comments: 8, branches: 10 },
    ],
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
<h6 style="text-align: center; margin: 20px;">Contributors</h6>
  <div class="row g-4">
  <div class="col-sm">
    <input id="username0" type="text" class="form-control" placeholder="UserName">
  </div>
  <div class="col-sm">
    <input id="username1" type="text" class="form-control" placeholder="UserName">
  </div>
  <div class="col-sm">
    <input id="username2" type="text" class="form-control" placeholder="UserName">
  </div>
  <div class="col-sm">
    <input id="username3" type="text" class="form-control" placeholder="UserName">
  </div>
</div>
  <hr>
  <button type="submit" class="btn btn-primary">Create Repository</button>
  </form>
  `;
  renderToDom("#uploadContent", domString);
};

const title = () => {
  const domString = `<div class="d-flex w-100 justify-content-between"">
  <h3>Repositories</h3>
    <div id="filterContainer">
      <button type="button" class="btn btn-light" id="favorite">
        <i id="favorite" class="fa-solid fa-heart"></i>
      </button>
      <button type="button" class="btn btn-light" id="all">All</button>
    </div>
  </div>`;
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
    <p class="text-muted">Contributors: <small id="date" class="text-muted">${
      repo.contributors[0].username
    },</small>
    <small id="date" class="text-muted">${repo.contributors[1].username}</small>
    </p>
    
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
        contributors: [
          {
            username: document.getElementById("username0").value,
            commits: Math.floor(Math.random() * 50),
            comments: Math.floor(Math.random() * 50),
            branches: Math.floor(Math.random() * 50),
          },
          {
            username: document.getElementById("username1").value,
            commits: Math.floor(Math.random() * 50),
            comments: Math.floor(Math.random() * 50),
            branches: Math.floor(Math.random() * 50),
          },
        ],
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

  const favoriteFilter = () => {
    document
      .querySelector("#filterContainer")
      .addEventListener("click", (e) => {
        if (e.target.id === "favorite") {
          const favs = repos.filter((repo) => repo.favorite === 1);
          repoCards(favs);
        } else if (e.target.id === "all") {
          console.log("clicked");
          repoCards(repos);
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
  favoriteFilter();
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
