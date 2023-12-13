import {loadHome} from './home.js';
import {loadMenu} from './menu.js';
import {openContact} from './contact.js';
const divContainer = document.querySelector("#content");
const header = document.createElement('h1');
header.id = 'mainHeader';
const menuButton = document.createElement('button');
menuButton.id = 'menuButton';
menuButton.textContent = 'Menu';
const homeButton = document.createElement("button");
homeButton.id = "homeButton"
homeButton.textContent = 'Home';
const contactButton = document.createElement("button");
contactButton.id = 'contactButton'
const buttonsDiv = document.createElement('div');
buttonsDiv.id = 'buttonsDiv';
homeButton.classList.add('menuButtons');
menuButton.classList.add('menuButtons');
contactButton.classList.add('menuButtons');
buttonsDiv.appendChild(homeButton);
buttonsDiv.appendChild(menuButton);
buttonsDiv.appendChild(contactButton);
contactButton.textContent = 'Contact us';
header.textContent = "Good restaurant";
header.appendChild(buttonsDiv);
divContainer.appendChild(header);
loadHome();

homeButton.addEventListener('click', function(){
    divContainer.textContent = '';
    divContainer.appendChild(header);
    loadHome();
});

menuButton.addEventListener('click', function(){
    divContainer.textContent = '';
    divContainer.appendChild(header);
    loadMenu();
})

contactButton.addEventListener('click', function(){
    divContainer.textContent = '';
    divContainer.appendChild(header);
    openContact();
})
