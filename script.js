AOS.init({
    duration: 1500,

});

const hamburgerIcon = document.getElementById("hamburger-icon");
const close = document.getElementById("close");
const navItemsResponsive = document.getElementById("nav-items-responsive");
const navResponsiveItem = document.querySelectorAll("#nav-responsive-item");


hamburgerIcon.addEventListener('click' ,showMenu);
close.addEventListener('click' ,closeMenu);


function showMenu(){
    if(navItemsResponsive.style.display==='none'){
        navItemsResponsive.style.display='block';
        close.style.display = 'block'

    }else{
        navItemsResponsive.style.display='none';
        close.style.display = 'none'

    }

}
function closeMenu(){
    if(navItemsResponsive.style.display==='block'){
        navItemsResponsive.style.display='none';
        close.style.display = 'none'

    }
}


for (let index = 0; index < navResponsiveItem.length; index++) {
    navResponsiveItem[index].addEventListener('click', removeNavBarByScreenSize);    
}


function removeNavBarByScreenSize() {
    if(screen.width <= 425){
        navItemsResponsive.style.display='none';
        close.style.display = 'none'

    }
}
