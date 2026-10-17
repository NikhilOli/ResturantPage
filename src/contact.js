

export function loadContactPage() {
const container = document.querySelector("#content");

const contactTitle = document.createElement("h1");
contactTitle.textContent = "Contact Us";
container.appendChild(contactTitle);

const p1 = document.createElement("p");
p1.textContent = "We'd love to hear from you!";
container.appendChild(p1);
const p2 = document.createElement("p");
p2.textContent = "Address: Kumaripati, Lalitpur, Nepal";
container.appendChild(p2);
const p3 = document.createElement("p");
p3.textContent = "Phone: +977 9800000000";
container.appendChild(p3);
const p4 = document.createElement("p");
p4.textContent = "Opening Hours: 10 AM - 9 PM";
container.appendChild(p4);
}