const hamburgerButton = document.getElementsByClassName("hamburger-button")[0];
const sideNav = document.getElementsByClassName("sidenav")[0];

sideNav.style.position = "fixed";

let isActive = false;

hamburgerButton.addEventListener("click", (e) => {
    
    if(isActive){
        sideNav.style.position = "fixed";
        sideNav.classList.remove("show");
        isActive = false;
    } else {
        sideNav.style.position = "absolute";
        sideNav.classList.add("show");
        isActive = true;
    }

})