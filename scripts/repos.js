import { skeletonDomString, renderToDom } from "./utlities.js";

const repos = [
  {
    id: 1,
    name: "random-repo-name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "adventure-time",
    description:
      "Twelve- year-old Finn battles evil in the Land of Ooo. Assisted by his magical dog, Jake, Finn roams the Land of Ooo righting wrongs and battling evil.",
  },
  {
    id: 3,
    name: "mass-effect",
    description:
      "The franchise depicts a distant future where humanity and several alien civilizations have colonized the known universe using technology left behind by advanced precursor civilizations",
  },
  {
    id: 4,
    name: "fall-out-four",
    description: `In the year 2287, ten years after 210 years after "The Great War", which caused catastrophic nuclear devastation across the United States.`,
  },
];

//define all your functions here
const newRepoForm = () => {
  const domString = `<h3>Create a new repository</h3>
  <form>
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

const repoCards = () => {
  let domString = "";
  let date = new Date().toLocaleDateString();
  for (const repo of repos) {
    domString += `
    <div class="list-group">
  <a href="#" class="list-group-item list-group-item-action aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">${repo.name}</h5>
      <small id="date" class="text-muted">${date}</small>
      <button id="delete--${repo.id}" type="button" class="text-muted btn btn-danger">X</button>
    </div>
    <p class="mb-1">${repo.description}</p>
    <small class="text-muted">And some small print.</small>
  </a>
</div>`;
  }
  renderToDom("#uploadedContent", domString);
};

const eventlisteners = () => {
  const formBtn = () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let newRepo = {
        id: repos.length + 1,
        name: document.getElementById("repoName").value,
        description: document.getElementById("formDescription").value,
      };
      console.log(newRepo);
      repos.push(newRepo);
      repoCards(repos);
    });
  };

  const deleteBtn = () => {
    document
      .querySelector("#uploadedContent")
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
};
function startApp() {
  renderToDom("#mainPage", skeletonDomString);
  newRepoForm();
  title();
  repoCards();
  eventlisteners();
  //put rest of start up here
}

startApp();
