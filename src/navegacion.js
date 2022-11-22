window.addEventListener('DOMContentLoaded', navegacion, false);
window.addEventListener('hashchange', navegacion, false);

function navegacion() {
    if(location.hash.startsWith('#inicio')) {
        console.log('estamos en el inicio');
        home();
    }else if(location.hash.startsWith('#about')) {
        about();
        console.log('estamos en about');
    }else if(location.hash.startsWith('#productos')) {
        productos();
    }else if(location.hash.startsWith('#contacto')) {
        contacto();
    }else if(location.hash.startsWith('#levadura-en-la-alimentacion-animal')) {
        levadura();
    }
}


function home() {
    menu.classList.remove('inactive');
    boxMenu.classList.add('inactive');
    mainHome.classList.remove('inactive');
    footer.classList.remove('inactive');
    sectionAbout.classList.add('inactive');
    sectionProducts.classList.add('inactive');
    sectionContact.classList.add('inactive');
    sectionLevadura.classList.add('inactive');
}
function about() {
    menu.classList.remove('inactive');
    boxMenu.classList.add('inactive');
    mainHome.classList.add('inactive');
    footer.classList.remove('inactive');
    sectionAbout.classList.remove('inactive');
    sectionProducts.classList.add('inactive');
    sectionContact.classList.add('inactive');
    sectionLevadura.classList.add('inactive');
}
function productos() {
    menu.classList.remove('inactive');
    boxMenu.classList.add('inactive');
    mainHome.classList.add('inactive');
    footer.classList.remove('inactive');
    sectionAbout.classList.add('inactive');
    sectionProducts.classList.remove('inactive');
    sectionContact.classList.add('inactive');
    sectionLevadura.classList.add('inactive');
}
function contacto() {
    menu.classList.remove('inactive');
    boxMenu.classList.add('inactive');
    mainHome.classList.add('inactive');
    footer.classList.remove('inactive');
    sectionAbout.classList.add('inactive');
    sectionProducts.classList.add('inactive');
    sectionContact.classList.remove('inactive');
    sectionLevadura.classList.add('inactive');
}

function levadura() {
    menu.classList.remove('inactive');
    boxMenu.classList.add('inactive');
    mainHome.classList.add('inactive');
    footer.classList.remove('inactive');
    sectionAbout.classList.add('inactive');
    sectionProducts.classList.add('inactive');
    sectionContact.classList.add('inactive');
    sectionLevadura.classList.remove('inactive');
}