menuHamburguesa.addEventListener('click', menuDesplegable);
menuClose.addEventListener('click', menuBoxClose);

buttonHomeMenu.addEventListener('click', () => {
    location.hash = '#inicio';
});

logoNav.addEventListener('click', () => {
    location.hash = '#inicio';
});

quienesSomos.addEventListener('click', () => {
    location.hash = '#about';
});

productosMenu.addEventListener('click', () => {
    location.hash = '#productos';
});

contactoMenu.addEventListener('click', () => {
    location.hash = '#contacto';
});

levaduraMenu.addEventListener('click', () => {
    location.hash = '#levadura-en-la-alimentacion-animal';
})



function menuDesplegable() {
    menu.classList.add('inactive');
    boxMenu.classList.remove('inactive');
    //mainHome.classList.add('inactive');
    //footer.classList.add('inactive');
    location.hash = '';
}
function menuBoxClose() {
    menu.classList.remove('inactive');
    boxMenu.classList.add('inactive');
    //mainHome.classList.remove('inactive');
    //footer.classList.remove('inactive');
}