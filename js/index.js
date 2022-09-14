// menutoggle
let menu = document.querySelector(".menu-pop");
let burger = document.getElementById('menuToggle');

burger.addEventListener("click", function() {
    menu.classList.add ("open");
})
menu.addEventListener("click", function() {
    menu.classList.remove ("open");
})