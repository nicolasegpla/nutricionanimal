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
    boxMenu.classList.add('inactive');
    logoMenuHamburguesa.classList.remove('inactive');
    menuClose.classList.add('inactive');
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
});

botonLyscellMasInformacion.addEventListener('click', () => {
    location.hash = '#levadura-animal-lyscell';
});

botonRumenyeastMasInformacion.addEventListener('click', () => {
    location.hash = '#levadura-animal-rumenyeast';
});
botonHomeLevadura.addEventListener('click',() => {
    location.hash = '#levadura-en-la-alimentacion-animal';
});
botonWhatsappBarNav.addEventListener('click', goToPageWhatsapp);
botonWhatsappFlotante.addEventListener('click', goToPageWhatsapp);
botonWhatsappFooter.addEventListener('click', goToPageWhatsapp);
linkWhatsappFooter.addEventListener('click', goToPageWhatsapp);
LinkMapsFooter.addEventListener('click', goMaps);


function menuDesplegable() {
    //menu.classList.add('inactive');
    boxMenu.classList.remove('inactive');
    logoMenuHamburguesa.classList.add('inactive');
    menuClose.classList.remove('inactive');
    //mainHome.classList.add('inactive');
    //footer.classList.add('inactive');
    //location.hash = '';
}
function menuBoxClose() {
    //menu.classList.remove('inactive');
    boxMenu.classList.add('inactive');
    logoMenuHamburguesa.classList.remove('inactive');
    menuClose.classList.add('inactive');
    //mainHome.classList.remove('inactive');
    //footer.classList.remove('inactive');
}

function goToPageWhatsapp(){
    window.open ('https://wa.link/tzd3s5');
}
function goMaps() {
    window.open ('https://www.google.com/maps/place/Distrines+-+Insumos+de+cerveza/@4.6269142,-74.0991848,16.63z/data=!4m5!3m4!1s0x8e3f9ed3ef14ddd1:0xa1803601e22ec176!8m2!3d4.6281022!4d-74.0975057?hl=es');
}
