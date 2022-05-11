import { skeletonDomString, renderToDom } from "./utlities.js";

let projects = [
  {
    id:0,
    name: "Test",
    description: "testing how my data will work",
    time: 0
  },
  {
    id:1,
    name: "Experiment",
    description: "testing how my data will work, maybe a description will be too long what will happen",
    time: 0
  },
  {
    id:2,
    name: "Foray",
    description: "testing how my precious data will fail unexpectedly",
    time: 0
  }
]

// let timestamp = Math.round(Date.now() / 1000);

function projectsOnDom() {
  let headerString = `<div class="card" style="width: 100%;" class="project-card">
  <div class="card-header">
    ${projects.length} Open, 0 closed
  </div>
  <div id="dataDiv"></div>
</div>`

  let projectsString = ""

  for (const project of projects) {
    projectsString += `<li class="list-group-item d-flex justify-content-between align-items-center">
    <small>
      <div class="fw-bold">
        ${project.name}
        <span class="badge bg-primary rounded-pill">private</span>
      </div>
      Created ${project.time} seconds ago
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
const displayString = `
<div class="card" style="width: 100%;" class="project-card">
  <div class="card-header">
    Open, closed
  </div>
  <div id="dataDiv"></div>
</div>
`

const formString = `<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label">Project Board Name</label>
<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
<label for="exampleFormControlTextarea1" class="form-label">Description</label>
<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>`

function startApp() {
  renderToDom(`#mainPage`, skeletonDomString);
  renderToDom(`#uploadContent`, formString);
  projectsOnDom();
  //put rest of start up here
}

startApp()
