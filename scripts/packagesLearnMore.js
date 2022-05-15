import packageData from "./packages.js"

export const learnMore = () => {
  const domString = `
  <div>
  <img src="${packageData.logo}" alt="Product's Logo">
    <h1>${packageData.name}</h1>
    <p id="description">${packageData.description}</p>
    <p id="details">${packageData.details}</p>
  </div>
  `;
  renderToDom("#learnMoreBtn", domString);
}

  learnMore();
