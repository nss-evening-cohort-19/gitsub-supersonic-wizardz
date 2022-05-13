import { skeletonDomString, renderToDom } from "./utlities.js";

//define all your functions here
const packageData = [
  {
    id: 1,
    name: "Circle CI",
    logo: "https://avatars.githubusercontent.com/ml/7?s=140&v=4",
    description: "Automatically build, test. and deploy your project in minutes",
    details: ""
  },
  {
    id: 2,
    name: "CodeFactor",
    logo: "https://avatars.githubusercontent.com/ml/704?s=140&v=4",
    description: "Automated code review for GitHub",
    details: ""
  },
  {
    id: 3,
    name: "PullRequest",
    logo: "https://avatars.githubusercontent.com/ml/437?s=140&v=4",
    description: "Expert On-Demand Code Review as a Service",
    details: ""
  },
  {
    id: 4,
    name: "BuildPulse",
    logo: "https://avatars.githubusercontent.com/ml/4950?s=140&v=4",
    description: "Automatically detect, track, and rank flaky tests so you can regain trust in your test suite",
    details: ""
  },
  {
    id: 5,
    name: "GuardRails",
    logo: "https://avatars.githubusercontent.com/ml/2860?s=140&v=4",
    description: "GuardRails provides continuous security feedback for modern development teams",
    details: ""
  }, 
  {
    id: 6,
    name: "CommitCheck",
    logo: "https://avatars.githubusercontent.com/ml/4693?s=140&v=4",
    description: "CommitCheck ensures your commit messages are consistent and contain all required information",
    details: ""
  }
]

// ------HTML COMPONENTS------ //
// PACKAGE CARDS
const packageOptions = (array) => {
  let domString = ""
  for (const item of array) {
    domString += `<div class="row package-cards">
     <div class="col-sm-6">
       <div class="card">
       <div class="card-body">
           <button type="button" id="delete--${item.id}" class="btn btn-danger btn-sm float-right">X</button>
           <img src="${item.logo}" alt="Product's Logo">
           <h5 class="card-title">${item.name}</h5>
           <p class="card-text">${item.description}</p>
           <a href="#" class="btn btn-success">Learn More</a>
         </div>
       </div>
     </div>
   </div>`
  }
  renderToDom("#uploadedContent", domString);
  }

// NEW PACKAGE FORM
const newProjectForm = () => {
  const domString = `
  <h4>Add a New Package</h4>
  <form>
    <div class="mb-3">
     <label for="exampleFormControlInput1" class="form-label">New Package Name</label>
     <input type="text" class="form-control" id="name" placeholder="e.g. GuardRails">
     </div>
    <div class="mb-3">
     <label for="exampleFormControlInput1" class="form-label">URL of Product's Logo</label>
     <input type="text" class="form-control" id="logo" placeholder="https://avatars.githubusercontent.com/ml/4950?s=140&v=4">
     </div>
    <div class="mb-3">
     <label for="exampleFormControlInput1" class="form-label">Description</label>
     <input type="text" class="form-control" id="description" placeholder="Please explain your package's features">
    </div>
    <hr>
    <button class="btn btn-success" type="submit">Add Package</button>
  </form>`;
renderToDom("#uploadContent", domString);
}

// -------EVENT LISTENERS------- //
// FORM SUBMIT
const packageEventListeners = () => {
  // LOGIC FOR FORM SUBMIT
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newEntryObj = {
    id: packageData.length + 1,
    name: document.querySelector("#name").value,
    logo: document.querySelector("#logo").value,
    description: document.querySelector("#description").value,
    details: ""
    }

    packageData.push(newEntryObj);
    packageOptions(packageData);

    form.reset();
  });
  
  // DELETE BUTTON ON CARD
  document.querySelector("#uploadedContent").addEventListener("click", (e) => {
    if (e.target.id.includes("delete")) {
      const [method, id] = e.target.id.split("--");
      const deleted = packageData.findIndex(pkg => pkg.id === parseInt(id));
      packageData.splice(deleted, 1);
      packageOptions(packageData);
    }
  });
}

function startApp() {
  renderToDom(`#mainPage`, skeletonDomString);
  //put rest of start up here
  newProjectForm();
  packageOptions(packageData);
  packageEventListeners();
}

startApp()
