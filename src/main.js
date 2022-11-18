menuHamburguesa.addEventListener('click', menuDesplegable);
menuClose.addEventListener('click', menuBoxClose);


function menuDesplegable() {
    menu.classList.add('inactive');
    boxMenu.classList.remove('inactive');
}
function menuBoxClose() {
    menu.classList.remove('inactive');
    boxMenu.classList.add('inactive');
}