import { skeletonDomString, renderToDom, searchSetup, createId } from "./utlities.js";

let projects = [
  {
    id: 0,
    name: "Pet Adoption",
    description: "Front end project for the Indian River Humane Society",
    time: 1652224873,
    privateStatus: false,
  },
  {
    id: 1,
    name: "Sorting Hat",
    description:
      "Individual project for NSS evening cohort 19, basic CRUD functions",
    time: 1652134873,
    privateStatus: false,
  },
  {
    id: 2,
    name: "Word counter",
    description:
      "simple word counter, learning how to target elements on the DOM",
    time: 1652234873,
    privateStatus: false,
  },
  {
    id: 3,
    name: "Spanish flashcards",
    description: "flashcard app for some common regular and irregular verbs",
    time: 1650234873,
    privateStatus: true,
  },
  {
    id: 4,
    name: "Ear training app",
    description: "basic relative pitch examples on the client side",
    time: 1620234873,
    privateStatus: true,
  },
];

function projectsOnDom(taco) {
  const timeStamp = Math.round(Date.now() / 1000);
  let headerString = `<div class="card project-card">
  <div class="card-header project-header" id="project-header">
    <div>${projects.length} Open ~ 0 closed</div>
    <div id="sort-div">
      <div class="dropdown-center" id="sort-btn">
        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownCenterBtn" data-bs-toggle="dropdown" aria-expanded="false">
        Sort
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownCenterBtn" id="sort">
          <li><a class="dropdown-item" href="#" id="newest">by newest activity</a></li>
          <li><a class="dropdown-item" href="#" id="oldest">by oldest activity</a></li>
          <li><a class="dropdown-item" href="#" id="alphabetical">by title ascending</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div id="dataDiv"></div>
  </div>`;

  let projectsString = "";

  for (const project of taco) {
    let timeAgo = timeStamp - project.time;
    let timeUnits = "seconds";
    if (timeAgo >= 60 && timeAgo < 3600) {
      timeAgo = Math.round(timeAgo / 60);
      if (timeAgo === 1) {
        timeUnits = "minute";
      } else {
        timeUnits = "minutes";
      }
    } else if (timeAgo >= 3600 && timeAgo < 86400) {
      timeAgo = Math.round(timeAgo / 3600);
      if (timeAgo === 1) {
        timeUnits = "hour";
      } else {
        timeUnits = "hours";
      }
    } else if (timeAgo > 86400) {
      timeAgo = Math.round(timeAgo / 86400);
      if (timeAgo === 1) {
        timeUnits = "day";
      } else {
        timeUnits = "days";
      }
    }

    let privateLabel = "";
    if (project.privateStatus === true) {
      privateLabel = "private";
    }

    projectsString += `<li class="list-group-item d-flex justify-content-between align-items-center">
    <small style="width: 25%;">
      <div class="fw-bold">
        ${project.name}
        <span class="badge bg-secondary rounded-pill">${privateLabel}</span>
      </div>
      🕓 Updated ${timeAgo} ${timeUnits} ago
    </small>
    <small class="text-truncate" style="width: 60%;">
    ${project.description}
    </small>
    <div>
      ...
    </div>
  </li>`;
  }
  renderToDom(`#uploadedContent`, headerString);
  renderToDom("#dataDiv", projectsString);
}

function formSetup() {
  const formString = `
<form id="projectForm">
<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label">Project Board Name</label>
<input type="text" class="form-control"  id="nameInput" required>
</div>
<div class="mb-3">
<label for="exampleFormControlTextarea1" class="form-label">Description</label>
<textarea class="form-control" rows="3" id="descriptionInput" required></textarea>
<hr>
<button type="submit" class="btn btn-success">Create Project</button>
</div>
</form>
`;
  renderToDom(`#uploadContent`, formString);
}

const search = (event) => {
  const userInput = event.target.value.toLowerCase();
  const searchResult = projects.filter(
    (taco) =>
      taco.name.toLowerCase().includes(userInput) ||
      taco.description.toLowerCase().includes(userInput)
  );
  projectsOnDom(searchResult);
};

function sortAndRender(taco) {
    let dataCopy = [...projects];
    function newest(a, b) {
      if (a.time > b.time) {
        return -1;
      }
      if (a.time < b.time) {
        return 1;
      }
      return 0;
    }
    function oldest(a, b) {
      if (a.time < b.time) {
        return -1;
      }
      if (a.time > b.time) {
        return 1;
      }
      return 0;
    }
    function alphabetical(a, b) {
      if (a.name.charAt(0) < b.name.charAt(0)) {
        return -1;
      }
      if (a.name.charAt(0) > b.name.charAt(0)) {
        return 1;
      }
      return 0;
    }
    if (taco === "newest") {
      dataCopy.sort(newest);
    }
    if (taco === "oldest") {
      dataCopy.sort(oldest);
    }
    if (taco === "alphabetical") {
      dataCopy.sort(alphabetical);
    }
    projectsOnDom(dataCopy);
    eventListeners();
}

function eventListeners() {
  document.querySelector("#projectForm").addEventListener("submit", (e) => {
    const timestamp = Math.round(Date.now() / 1000);
    e.preventDefault(); // this goes in EVERY form submit to prevent page reload
    const newProjectObject = {
      id: createId(projects),
      name: document.querySelector("#nameInput").value,
      description: document.querySelector("#descriptionInput").value,
      time: timestamp,
      privateStatus: false,
    };
    projects.push(newProjectObject);
    projectsOnDom(projects);
    document.querySelector("#projectForm").reset();
    console.log(newProjectObject)
  });
  document.querySelector("#search-field").addEventListener("keyup", search);
  document.querySelector("#sort").addEventListener("click", (e) => {
    sortAndRender(e.target.id);
  });
}

function startApp() {
  renderToDom(`#mainPage`, skeletonDomString);
  formSetup();
  searchSetup();
  projectsOnDom(projects);
  eventListeners();
}

startApp();
