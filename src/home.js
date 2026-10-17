export function loadHomePage() {
const container = document.querySelector("#content");

const homeTitle = document.createElement("h1");
homeTitle.textContent = "Welcome to The Cozy Table";

const intro = document.createElement("p");
intro.textContent = "Delicious food, warm memories.";

const hero = document.createElement("div");
hero.classList.add("hero");
hero.appendChild(homeTitle);
hero.appendChild(intro);
container.appendChild(hero);

const about = document.createElement("div");
about.classList.add("about");
const aboutTitle = document.createElement("h2");
aboutTitle.textContent = "A Little About Us";
about.appendChild(aboutTitle);
const desc = document.createElement("p");
desc.textContent = "Fresh ingredients, unforgettable flavors.";
about.appendChild(desc);
container.appendChild(about);

const hours = document.createElement("div");
hours.classList.add("hours");
const hoursTitle = document.createElement("h2");
hoursTitle.textContent = "Opening Hours";
hours.appendChild(hoursTitle);
const hoursTime = document.createElement("p");
hoursTime.textContent = "Open Daily: 10 AM – 9 PM";
hours.appendChild(hoursTime);
container.appendChild(hours);
}