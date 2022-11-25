logoMenuHamburguesa.addEventListener('click', menuDesplegable);
menuClose.addEventListener('click', menuBoxClose);

//buttonHomeMenu.addEventListener('click', () => {
//    location.hash = '#inicio';
//});

logoNav.addEventListener('click', () => {
    location.hash = '#inicio';
});

inicio.addEventListener('click', () => {
    location.hash = '#inicio';
} )

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
    //menu.classList.add('inactive');
    boxMenu.classList.remove('inactive');
    logoMenuHamburguesa.classList.add('inactive');
    menuClose.classList.remove('inactive');
    //mainHome.classList.add('inactive');
    //footer.classList.add('inactive');
    location.hash = '';
}
function menuBoxClose() {
    //menu.classList.remove('inactive');
    boxMenu.classList.add('inactive');
    logoMenuHamburguesa.classList.remove('inactive');
    menuClose.classList.add('inactive');
    //mainHome.classList.remove('inactive');
    //footer.classList.remove('inactive');
}