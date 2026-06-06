"use strict"

const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu")

burgerBtn.addEventListener("click", function(){

navMenu.classList.toggle("active")
burgerBtn.classList.toggle("active")
});

document.addEventListener("click", function(event) {
    const target = event.target;
    const isClickInsideBurger = burgerBtn.contains(target);
    if (!isClickInsideBurger) {
        navMenu.classList.remove('active');
        burgerBtn.classList.remove('active'); 
    }
});

window.addEventListener("scroll", function(event){
    if (navMenu.classList.contains("active")){
        navMenu.classList.remove('active');
        burgerBtn.classList.remove("active")
    }
})

document.addEventListener("touchstart", function() {}, true);