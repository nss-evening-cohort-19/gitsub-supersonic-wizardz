import { skeletonDomString, renderToDom } from "./utlities.js";

let projects = [
  {
    id:0,
    name: "Test",
    description: "testing how my data will work",
    time: 1652224873
  },
  {
    id:1,
    name: "Experiment",
    description: "testing how my data will work, maybe a description will be too long what will happen",
    time: 1652134873
  },
  {
    id:2,
    name: "Foray",
    description: "testing how my precious data will fail unexpectedly",
    time: 1652234873
  }
]

function projectsOnDom() {
  const timeStamp = Math.round(Date.now() / 1000);
  let headerString = `<div class="card" style="width: 100%;" class="project-card">
  <div class="card-header">
    ${projects.length} Open, 0 closed
  </div>
  <div id="dataDiv"></div>
</div>`

  let projectsString = ""

  for (const project of projects) {
    let timeAgo = timeStamp - project.time;
    let timeUnits = 'seconds'
    if (timeAgo >= 60 && timeAgo < 3600) {
      timeAgo = Math.round(timeAgo / 60);
      if (timeAgo === 1) {
        timeUnits = 'minute';
      } else {
        timeUnits = 'minutes';
      }
    } else if (timeAgo >= 3600 && timeAgo < 86400) {
      timeAgo = Math.round(timeAgo / 3600);
      if (timeAgo === 1) {
        timeUnits = 'hour';
      } else {
        timeUnits = 'hours';
      }
    } else if (timeAgo > 86400) {
      timeAgo = Math.round(timeAgo / 86400);
      if (timeAgo === 1) {
        timeUnits = 'day';
      } else {
        timeUnits = 'days';
      }
    }
    projectsString += `<li class="list-group-item d-flex justify-content-between align-items-center">
    <small>
      <div class="fw-bold">
        ${project.name}
        <span class="badge bg-primary rounded-pill">private</span>
      </div>
      Created ${timeAgo} ${timeUnits} ago
    </small>
    <small class="text-truncate" style="width: 50%;">
    ${project.description}
    </small>
    <div>
      (options)
    </div>
  </li>`
  }
  renderToDom(`#uploadedContent`, headerString);
  renderToDom("#dataDiv", projectsString)
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
`
renderToDom(`#uploadContent`, formString);
}

function searchSetup() {
  const searchString = `
  <form>
  <div class="form-container" id="form-container">
    <div class="row g-3 align-items-center">
      <div class="col-auto">
        <input type="text" class="form-control" id="search-field" aria-label="search-field" required placeholder="🔍 Search all">
     </div>
    </div>
  </div>
</form>
  `
  renderToDom(`#searchBar`, searchString )
}

function eventListeners() {
  document.querySelector('#projectForm').addEventListener('submit', (e) => {
    const timestamp = Math.round(Date.now() / 1000);
    e.preventDefault(); // this goes in EVERY form submit to prevent page reload
    
    const newProjectObject = {
      id: 0,
      name: document.querySelector("#nameInput").value,
      description: document.querySelector("#descriptionInput").value,
      time: timestamp
    }
    projects.push(newProjectObject);
    projectsOnDom(projects)
    document.querySelector('#projectForm').reset();
});
}

function startApp() {
  renderToDom(`#mainPage`, skeletonDomString);
  formSetup();
  searchSetup();
  projectsOnDom();
  eventListeners();
  //put rest of start up here
}

startApp()
