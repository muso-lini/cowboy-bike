"use strict"

const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu")

burgerBtn.addEventListener("click", function(){

navMenu.classList.toggle("active")
burgerBtn.classList.toggle("active")
});

document.addEventListener("click", function(event) {
    const target = event.target;
    
    // Проверяем, был ли клик по кнопке бургера
    const isClickInsideBurger = burgerBtn.contains(target);
    
    // Если кликнули КУДА УГОДНО, кроме самого бургера — закрываем меню
    if (!isClickInsideBurger) {
        navMenu.classList.remove('active');
        
        // Если у тебя на самой кнопке бургера тоже переключался класс active (для анимации крестика),
        // не забудь снять его и оттуда:
        burgerBtn.classList.remove('active'); 
    }
});

document.addEventListener("touchstart", function() {}, true);