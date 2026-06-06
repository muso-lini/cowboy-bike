"use strict"

const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu")

burgerBtn.addEventListener("click", function(){

navMenu.classList.toggle("active")

});

document.addEventListener("click", function(event){
    const target = event.target;
    const isClickInsideBurger = burgerBtn.contains(target);
    
    // Проверяем: кликнули ли мы НА само меню или внутрь него?
    const isClickInsideMenu = navMenu.contains(target);

    // Если клик был И НЕ по бургеру, И НЕ по меню...
    if (!isClickInsideBurger && !isClickInsideMenu) {
        // ...значит, кликнули снаружи! Убираем класс active, чтобы закрыть меню
        navMenu.classList.remove('active');
    }
}
)
document.addEventListener("touchstart", function() {}, true);