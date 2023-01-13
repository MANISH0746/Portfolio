const mobile_menu_btn = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

function togglenavbar(){
    nav_header.classList.toggle('active')
}
mobile_menu_btn.addEventListener("click",() => togglenavbar());