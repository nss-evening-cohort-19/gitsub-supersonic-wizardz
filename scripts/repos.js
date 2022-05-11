import { skeletonDomString, renderToDom } from "./utlities.js";

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

function startApp() {
  renderToDom("#mainPage", skeletonDomString);
  newRepoForm();
  //put rest of start up here
}

startApp();
