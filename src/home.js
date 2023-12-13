function loadHome(){
    const divContainer = document.querySelector("#content");
    const bodyImage = document.createElement("img");
    bodyImage.src = "../img/restaurantInterior.jpeg";
    const bodyPara = document.createElement("p");
    bodyPara.textContent = 'Come down for some great food!';
    divContainer.appendChild(bodyImage);
    divContainer.appendChild(bodyPara);
}
export {loadHome};