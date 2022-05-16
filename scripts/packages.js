import { skeletonDomString, renderToDom, searchSetup } from "./utlities.js";

//define all your functions here
export const packageData = [
  {
    id: 1,
    name: "Circle CI",
    logo: "https://avatars.githubusercontent.com/ml/7?s=140&v=4",
    description: "Automatically build, test, and deploy your project in minutes",
    details: "The world’s best software teams deliver quality code, confidently, with CircleCI. CircleCI’s free plan offers more build minutes than any free plan out there. Up to 6,000 build minutes/month and 30 jobs at a time."
  },
  {
    id: 2,
    name: "CodeFactor",
    logo: "https://avatars.githubusercontent.com/ml/704?s=140&v=4",
    description: "Automated code review for GitHub",
    details: "CodeFactor instantly performs Code Review with every GitHub Commit or PR. Zero setup time. Get actionable feedback within seconds. Customize rules, get refactoring tips and ignore irrelevant issues."
  },
  {
    id: 3,
    name: "PullRequest",
    logo: "https://avatars.githubusercontent.com/ml/437?s=140&v=4",
    description: "Expert On-Demand Code Review as a Service",
    details: "Increase velocity and reduce technical debt through code review by world-class engineers backed by automation. PullRequest provides code review with inline comments directly on your pull requests in GitHub."
  },
  {
    id: 4,
    name: "BuildPulse",
    logo: "https://avatars.githubusercontent.com/ml/4950?s=140&v=4",
    description: "Automatically detect, track, and rank flaky tests so you can regain trust in your test suite",
    details: "BuildPulse automatically detects flaky tests and highlights the most disruptive ones so you know exactly where to focus first for maximum impact."
  },
  {
    id: 5,
    name: "GuardRails",
    logo: "https://avatars.githubusercontent.com/ml/2860?s=140&v=4",
    description: "GuardRails provides continuous security feedback for modern development teams",
    details: "GuardRails scans new code changes as they occur in your repositories. For pull requests, we will post comments whenever security issues are detected. For branches, you will be able to see reports in your dashboard."
  }, 
  {
    id: 6,
    name: "CommitCheck",
    logo: "https://avatars.githubusercontent.com/ml/4693?s=140&v=4",
    description: "CommitCheck ensures your commit messages are consistent and contain all required information",
    details: "CommitCheck ensures your commit messages are consistent and contain all required information. You can check that commits contain a JIRA number or ensure commits don't contain WIP."
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
        <p id="readMore--${item.id}" class="hidden">${item.details}</p>
        <button type="button" id="readMoreBtn--${item.id}" class="btn btn-primary">Read More</button>
       </div>
      </div>`
  };
  renderToDom("#uploadedContent", domString);
  };

// NEW PACKAGE FORM
const addPackageForm = () => {
  const domString = `
  <h4>Add a New Package</h4>
  <form id="packageForm">
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

// --------SEARCH FUNCTION---------//

const searchBar = (e) => {
  const inputValue = e.target.value.toLowerCase();
  const results = packageData.filter(result => result.name.toLowerCase().includes(inputValue));
  packageOptions(results);
};

// -------EVENT LISTENERS------- //
const packageEventListeners = () => {
  // LOGIC FOR FORM SUBMIT
  const form = document.querySelector("#packageForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newEntryObj = {
    id: packageData.length + 1,
    name: document.querySelector("#name").value,
    logo: document.querySelector("#logo").value,
    description: document.querySelector("#description").value,
    details: document.querySelector("#details").value,
    }

    packageData.unshift(newEntryObj);
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

  // READ MORE BTN CLICK
  document.querySelector("#uploadedContent").addEventListener("click", (e) => {
    console.log(e.target.id);
    if (e.target.id.includes("readMoreBtn")) {
      const [method, id] = e.target.id.split("--");
      const learnMore = document.querySelector(`#readMore--${id}`);
      learnMore.classList.toggle("hidden");
      e.target.textContent === "Read More" 
      ? e.target.textContent = "Read Less"
      : e.target.textContent = "Read More"
    };
  });

  // SEARCH BAR
  document.querySelector("#search-field").addEventListener("keyup", searchBar);
}

function startApp() {
  renderToDom(`#mainPage`, skeletonDomString);
  //put rest of start up here
  addPackageForm();
  searchSetup();
  packageOptions(packageData);
  packageEventListeners();
}

startApp()
