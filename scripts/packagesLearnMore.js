import packageData from "./packages.js"

export const learnMore = (thePackage) => {
  const domString = `
  <img src="${thePackage.logo}" alt="Product's Logo">
    <h1>${thePackage.name}</h1>
    <p id="description">${thePackage.description}</p>
    <p id="details">${thePackage.details}</p>
  `;
  renderToDom("#learnMoreBtn", domString);
}

  learnMore();
