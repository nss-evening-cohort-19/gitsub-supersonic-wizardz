import { skeletonDomString, renderToDom } from "./utlities.js";

//define all your functions here
const packageData = [
  {
    id: 1,
    logo: "https://avatars.githubusercontent.com/ml/7?s=140&v=4",
    name: "Circle CI",
    hook: "Automatically build, test. and deploy your project in minutes",
    details: ""
  },
  {
    id: 2,
    logo: "https://avatars.githubusercontent.com/ml/704?s=140&v=4",
    name: "CodeFactor",
    hook: "Automated code review for GitHub",
    details: ""
  },
  {
    id: 3,
    logo: "https://avatars.githubusercontent.com/ml/437?s=140&v=4",
    name: "PullRequest",
    hook: "Expert On-Demand Code Review as a Service",
    details: ""
  },
  {
    id: 4,
    logo: "https://avatars.githubusercontent.com/ml/4950?s=140&v=4",
    name: "BuildPulse",
    hook: "Automatically detect, track, and rank flaky tests so you can regain trust in your test suite",
    details: ""
  },
  {
    id: 5,
    logo: "https://avatars.githubusercontent.com/ml/2860?s=140&v=4",
    name: "GuardRails",
    hook: "GuardRails provides continuous security feedback for modern development teams",
    details: ""
  }, 
  {
    id: 6,
    logo: "https://avatars.githubusercontent.com/ml/4693?s=140&v=4",
    name: "CommitCheck",
    hook: "CommitCheck ensures your commit messages are consistent and contain all required information",
    details: ""
  }
]
const packageOptions = (array) => {
  let domString = ""
  for (const item of array) {
    domString += `<div class="row package-cards">
     <div class="col-sm-6">
       <div class="card">
         <div class="card-body">
           <h5 class="card-title">${item.name}</h5>
           <p class="card-text">${item.hook}</p>
           <a href="#" class="btn btn-success">Learn More</a>
         </div>
       </div>
     </div>
   </div>`
  }
  renderToDom("#uploadedContent", domString);
  }

const newProjectForm = () => {
  const domString = `
  <div>
  <h4>Create a New Project</h4>
  <h6>Coordinate, track, and update your work in one place, so projects stay transparent and on schedule</h6>
  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Project Board Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="My Cool New Project">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Description</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<hr>
<button class="btn btn-success" type="submit">Create Project</button>
</div>`;
renderToDom("#uploadContent", domString);
}

function startApp() {
  renderToDom(`#mainPage`, skeletonDomString);
  //put rest of start up here
  packageOptions(packageData);
  newProjectForm();
}

startApp()
