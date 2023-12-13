function loadMenu(){
    const divContainer = document.querySelector("#content");
    const menuContainer = document.createElement('div');
    menuContainer.id = 'menuContainer';
    const menuList = document.createElement('ul');
    for(let i = 0; i < 3; i++){
        const listItem = document.createElement('li');
        listItem.textContent = 'Some food here';
        menuList.appendChild(listItem);
    }
    menuContainer.appendChild(menuList);
    divContainer.appendChild(menuContainer);
}
export {loadMenu};