import { skeletonDomString, renderToDom } from "./utlities.js";

//define all your functions here

function startApp() {
  renderToDom(`#bodyDiv`, skeletonDomString)
  //put rest of start up here
}

startApp()
console.log("This is the overview page. The page should have rendered and this should have logged.")
