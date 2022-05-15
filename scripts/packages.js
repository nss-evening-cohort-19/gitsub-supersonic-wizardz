import { skeletonDomString, renderToDom } from "./utlities.js";

//define all your functions here
export const packageData = [
  {
    id: 1,
    name: "Circle CI",
    logo: "https://avatars.githubusercontent.com/ml/7?s=140&v=4",
    description: "Automatically build, test, and deploy your project in minutes",
    details: "You are the coolest cat in the world"
  },
  {
    id: 2,
    name: "CodeFactor",
    logo: "https://avatars.githubusercontent.com/ml/704?s=140&v=4",
    description: "Automated code review for GitHub",
    details: "You are the coolest cat in the world"
  },
  {
    id: 3,
    name: "PullRequest",
    logo: "https://avatars.githubusercontent.com/ml/437?s=140&v=4",
    description: "Expert On-Demand Code Review as a Service",
    details: "You are the coolest cat in the world"
  },
  {
    id: 4,
    name: "BuildPulse",
    logo: "https://avatars.githubusercontent.com/ml/4950?s=140&v=4",
    description: "Automatically detect, track, and rank flaky tests so you can regain trust in your test suite",
    details: "You are the coolest cat in the world"
  },
  {
    id: 5,
    name: "GuardRails",
    logo: "https://avatars.githubusercontent.com/ml/2860?s=140&v=4",
    description: "GuardRails provides continuous security feedback for modern development teams",
    details: "You are the coolest cat in the world"
  }, 
  {
    id: 6,
    name: "CommitCheck",
    logo: "https://avatars.githubusercontent.com/ml/4693?s=140&v=4",
    description: "CommitCheck ensures your commit messages are consistent and contain all required information",
    details: "You are the coolest cat in the world"
  }
]

// ------HTML COMPONENTS------ //
// PACKAGE CARDS
const packageOptions = (array) => {
  let domString = ""
  for (const item of array) {
    domString += `<div class="card w-50">
       <div class="card-body">
        <button type="button" id="delete--${item.id}" class="btn btn-danger btn-sm delete-btn">X</button>
        <div class="container">
          <img src="${item.logo}" alt="Product's Logo" class="logo-img">
          <h5 class="card-title product-name">${item.name}</h5>
        </div>
        <p class="card-text">${item.description}</p>
        <p id="learnMore" class="hidden">${item.details}</p>
        <button type="button" id="learnMoreBtn" class="btn btn-primary">Read More</button>
       </div>
      </div>`
  };
  renderToDom("#uploadedContent", domString);
  };

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
     <label for="exampleFormControlInput1" class="form-label">URL of Package's Logo</label>
     <input type="text" class="form-control" id="logo" placeholder="https://avatars.githubusercontent.com/ml/4950?s=140&v=4">
     </div>
    <div class="mb-3">
     <label for="exampleFormControlInput1" class="form-label">Hook Statement About Package</label>
     <input type="text" class="form-control" id="description" placeholder="Please explain your package's features">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Full Description of Package</label>
      <textarea class="form-control" id="details" rows="3"></textarea>
    </div>
    <hr>
    <button class="btn btn-success" type="submit">Add Package</button>
  </form>`;
renderToDom("#uploadContent", domString);
}

// -------EVENT LISTENERS------- //
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
    details: document.querySelector("#details").value,
    }

    packageData.push(newEntryObj);
    packageOptions(packageData);

    form.reset();
  });
  
  // DELETE BUTTON ON CARD
  document.querySelector("#uploadedContent, .delete-btn").addEventListener("click", (e) => {
    if (e.target.id.includes("delete")) {
      const [method, id] = e.target.id.split("--");
      const deleted = packageData.findIndex(pkg => pkg.id === parseInt(id));
      packageData.splice(deleted, 1);
      packageOptions(packageData);
    };
  });

  // LEARN MORE BTN CLICK
  // document.querySelector("#uploadedContent, .hidden").addEventListener("click", (e) => {
  //   console.log(e.target.id);
  //   if (e.target.id.includes("learnMoreBtn")) {
  //     const learnMore = document.querySelector(`#learnMore--${packageData.id}`);
  //     console.log(learnMore);
  //     // learnMore.classList.toggle("hidden");  //   //   const learnMore = packageData.find(pkg => pkg.id === parseInt(id));
  // //   //   console.log(learnMore);
  // //   //   learnMore.classList.toggle("hidden");
  //   };
  // });
  
  const learnMore = document.querySelector("#learnMore");
  const learnMoreBtn = document.querySelector("#learnMoreBtn");
  learnMoreBtn.addEventListener("click", () => {
    learnMore.classList.toggle("hidden");
  });
}

function startApp() {
  renderToDom(`#mainPage`, skeletonDomString);
  //put rest of start up here
  newProjectForm();
  // learnMoreBtn();
  packageOptions(packageData);
  packageEventListeners();
}

startApp()
