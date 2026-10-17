

export function loadMenuPage() {
const container = document.querySelector("#content");

const menuTitle = document.createElement("h1");
menuTitle.textContent = "Our Menu";
container.appendChild(menuTitle);

const menuDetails = document.createElement("p");
menuDetails.textContent = "Discover our delicious dishes.";
container.appendChild(menuDetails);
}