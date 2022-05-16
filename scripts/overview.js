import { skeletonDomString, renderToDom, createId } from "./utlities.js";

//define all your functions here

const mpData = [
  {
    id: 1,
    contentTitle: "Best Project Ever",
    contentDescription: `There's so much here`,
    favorite: false,
    details: {
      fileType: 'JAVASCRIPT',
      starred: 47,
      forked: 32,
    }
  },
  {
    id: 2,
    contentTitle: "A Great Runner Up",
    contentDescription: `Full of decent bits`,
    favorite: false,
    details: {
      fileType: 'CSS',
      starred: 22,
      forked: 2,
    }
  },
  {
    id: 3,
    contentTitle: "Best Project Ever",
    contentDescription: `There's so much here`,
    favorite: false,
    details: {
      fileType: 'HTML',
      starred: 99,
      forked: 4,
    }
  },
  {
    id: 4,
    contentTitle: "A Great Runner Up",
    contentDescription: `Full of decent bits`,
    favorite: false,
    details: {
      fileType: 'JAVASCRIPT',
      starred: 99,
      forked: 4,
    }
  },
];

const renderTheCards = () => {
  let domString = ``;
  for (const article of mpData) {
    domString += `<div class="card mpCard" style="width: 25rem;">
  <div class="card-body">
    <p class="card-title"><i class="fa-solid fa-book"></i> <strong>${article.contentTitle}</strong></p>
    <p class="card-text"><sup>${article.contentDescription}</sup></p>
    <div id="cardDetails" class="details">
    <ul>
    <li> <sup><i class="fa-solid fa-code"></i> ${article.details.fileType}</sup></li>
    <li> <sup><i class="fa-regular fa-star"></i> ${article.details.starred}</sup></li>
    <li> <sup><i class="fa-solid fa-code-fork"></i> ${article.details.forked}</sup></li>
    </ul>
    <a href="#" id="delete--${article.id}" class="btn btn-outline-dark btn-sm">X</a>
    </div>
  </div>
</div>`;
  }
  renderToDom("#uploadedContent", domString);
};
const renderTheForm = () => {
  let domString = `
  <h3>Create New Project</h3>
      <h6>Project Name</h6>
    <form id="createNewForm">
    <div class="input-group input-group-sm mb-3">
      <input
     type="text"
     id="articleTitle"
     class="form-control"
     aria-label="Sizing example input"
     placeholder="Make it good!"
     aria-describedby="inputGroup-sizing-sm"
      />
    </div>
    <h6>Description</h6>
    <div class="input-group input-group-sm mb-3">
      <input type="text" id="articleDesc" class="form-control" aria-label="Sizing example input" placeholder="Be descriptive" aria-describedby="inputGroup-sizing-sm"/>
    </div>
    <button type="submit" class="btn btn-primary justify-content-md-end btn-sm">Create</button>
     </form>
  
  `;
  renderToDom("#uploadContent", domString);
};
const eventListeners = () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fileTypes = ['JAVASCRIPT', 'HTML', 'CSS'];
    const newArticle = {
      id: createId(mpData),
      contentTitle: document.querySelector("#articleTitle").value,
      contentDescription: document.querySelector("#articleDesc").value,
      favorite: false,
      details: {
        fileType: fileTypes[Math.floor(Math.random() * fileTypes.length)],
        starred: Math.floor(Math.random()*100),
        forked: Math.floor(Math.random()*100),
      }
    };
    mpData.push(newArticle);
    renderTheCards(mpData);
    form.reset();
  });

  document.querySelector("#uploadedContent").addEventListener("click", (e) => {
    const [method, id] = e.target.id.split("--");

    let index = mpData.findIndex((taco) => taco.id === parseInt(id));
    if (e.target.id.includes("delete")) {
      mpData.splice(index, 1);
      renderTheCards(mpData);
      console.log(mpData);
    }
  });
};
function startApp() {
  renderToDom("#mainPage", skeletonDomString);
  //put rest of start up here
  renderTheCards();
  renderTheForm();
  eventListeners();
}

startApp();
