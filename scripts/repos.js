import { skeletonDomString, renderToDom } from "./utlities.js";

//define all your functions here

function startApp() {
  renderToDom("#mainPage", skeletonDomString)
  //put rest of start up here
}

startApp()
