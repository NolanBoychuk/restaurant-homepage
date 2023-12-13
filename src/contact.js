function openContact(){
    const divContainer = document.querySelector("#content");
    const contactContainer = document.createElement('p');
    contactContainer.textContent = 'Here is some contact information';
    divContainer.appendChild(contactContainer);
};
export {openContact};