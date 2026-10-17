import "./styles.css";
import {loadHomePage} from './home.js'
import { loadMenuPage } from "./menu.js";
import { loadContactPage } from "./contact.js";

const container = document.querySelector("#content");

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const contactBtn = document.querySelector("#contact");


homeBtn.addEventListener("click", () => {
    console.log("Home is running!");
    switchPage(loadHomePage)
})


menuBtn.addEventListener("click", () => {
    console.log("Menu is running!");
    switchPage(loadMenuPage)
})

contactBtn.addEventListener("click", () => {
    console.log("Contact is running!");
    switchPage(loadContactPage)
})

function switchPage(pageFunction) {
    container.replaceChildren()
    pageFunction();
}
loadHomePage();