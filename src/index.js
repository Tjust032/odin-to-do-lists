console.log("Testing testing 1 2 3");

import "./styles.css";
import { loadHomepage } from "./home.js";
import { loadMenuPage } from "./menu.js";
import { loadContactPage } from "./contact.js";

loadHomepage();

const contentDiv = document.querySelector('#content');
const homeButton = document.querySelector('#homeButton');
const menuButton = document.querySelector('#menuButton');
const contactButton = document.querySelector('#contactButton');

homeButton.addEventListener('click', () => {
    console.log('Switching to home...');
    contentDiv.replaceChildren();
    loadHomepage();
})

menuButton.addEventListener('click', () => {
    console.log('Switching to menu...');
    contentDiv.replaceChildren();
    loadMenuPage();
})

contactButton.addEventListener('click', () => {
    console.log('Switching to contact page...');
    contentDiv.replaceChildren();
    loadContactPage();
})