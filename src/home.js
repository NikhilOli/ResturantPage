export function loadHomePage() {
const container = document.querySelector("#content");

const homeTitle = document.createElement("h1");
homeTitle.textContent = "Welcome to The Cozy Table";
container.appendChild(homeTitle);

const intro = document.createElement("p");
intro.textContent = "Delicious food, warm memories.";
container.appendChild(intro);
}