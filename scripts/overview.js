import { skeletonDomString, renderToDom } from "./utlities.js";

//define all your functions here
const mpData = [
  {
    id: 1,
    contentTitle: "Best Project Ever",
    contentDescription: `There's so much here`,
    favorite: false,
  },
  {
    id: 2,
    contentTitle: "A Great Runner Up",
    contentDescription: `Full of decent bits`,
    favorite: false,
  },
];

const renderTheCards = () => {
  let domString = ``;
  for (const article of mpData) {
    domString += `<div class="card" style="width: 40rem;">
  <div class="card-body">
    <h5 class="card-title">${article.contentTitle}</h5>
    <p class="card-text">${article.contentDescription}</p>
    <a href="#" id="delete--${article.id}" class="btn btn-danger">Delete</a>
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
      <input
     type="text"
     id="articleDesc"
     class="form-control"
     aria-label="Sizing example input"
     placeholder="Be descriptive"
     aria-describedby="inputGroup-sizing-sm"
      />
    </div>
    <button type="submit" class="btn btn-primary justify-content-md-end btn-sm">Create</button>
     </form>
  
  `;
  renderToDom('#uploadContent', domString)
};
const eventListeners = () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newArticle = {
      id: mpData.length + 1,
      contentTitle: document.querySelector('#articleTitle').value,
      contentDescription: document.querySelector('#articleDesc').value,
      favorite: false,
    }
    console.log(newArticle);
    console.log(mpData);
    mpData.push(newArticle);
    renderTheCards(mpData);
    form.reset()
  });

  document.querySelector('#uploadedContent').addEventListener('click', (e) => {
    const [method, id] = e.target.id.split('--');

    let index = mpData.findIndex(taco => taco.id === parseInt(id));
    if (e.target.id.includes('delete')) {
      mpData.splice(index, 1);
      renderTheCards(mpData);
      console.log(mpData)

    }
  })
}
function startApp() {
  renderToDom("#mainPage", skeletonDomString);
  //put rest of start up here
  renderTheCards();
  renderTheForm();
  eventListeners();
}

startApp();
