import { skeletonDomString, renderToDom } from "./utlities.js";

const repos = [
  {
    name: "random-repo-name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "adventure-time",
    description:
      "Twelve- year-old Finn battles evil in the Land of Ooo. Assisted by his magical dog, Jake, Finn roams the Land of Ooo righting wrongs and battling evil.",
  },
  {
    name: "mass-effect",
    description:
      "The franchise depicts a distant future where humanity and several alien civilizations have colonized the known universe using technology left behind by advanced precursor civilizations",
  },
  {
    name: "fall-out-four",
    description: `In the year 2287, ten years after 210 years after "The Great War", which caused catastrophic nuclear devastation across the United States.`,
  },
];

//define all your functions here
const newRepoForm = () => {
  const domString = `<h3>Create a new repository</h3>
  <form>
  <div class="form-floating">
    <textarea
      class="form-control"
      placeholder="Repository Name"
      id="floatingTextarea"
    ></textarea>
    <label for="floatingTextarea">Repository Name</label>
  </div>
  <h6>Great repository names are short and memorable. Need inspiration? How about <em>special-winner</em>?</h6>
  <div class="form-floating">
    <textarea
      class="form-control"
      placeholder="Description"
      id="floatingTextarea2" style="height: 100px"></textarea>
    <label for="floatingTextarea2">Description</label>
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
    </div>
    <p class="mb-1">${repo.description}</p>
    <small class="text-muted">And some small print.</small>
  </a>
</div>`;
  }
  renderToDom("#uploadedContent", domString);
};

function startApp() {
  renderToDom("#mainPage", skeletonDomString);
  newRepoForm();
  title();
  repoCards();
  //put rest of start up here
}

startApp();
