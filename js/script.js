"use strict"

const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu");

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



/*//////////////////////////////////////////////////////////////////////////////////////*/




let events = [];

    function renderCards(cards) {
        const eventContainer = document.querySelector(".events__content");
        eventContainer.innerHTML = "";

        cards.forEach((event, index) => {
            const cardHTML = `
            <div class="events__card" style="animation-delay: ${index * 0.1}s">
                <p class="imagetitle">${event.category}</p>
                <img src="${event.image}" alt="${event.title}" class="events__card__image">
                <p class="events__card__eyebrow eyebrow">${event.category}</p>
                <h3 class="events__horse__title">${event.title}</h3>
                <a href="https://www.google.com/" class="events__card__url url--purple">Buy Tickets <img src="./img/icons/arrow-purpule.svg" alt="purple arrow"></a>
            </div>
            `;
            eventContainer.insertAdjacentHTML('beforeend', cardHTML);
        });
    }

    async function loadEvents() {
        const response = await fetch("./weeeb/data/events.json");
        events = await response.json();
        renderCards(events);
    }


    const buttons = document.querySelectorAll(".filter__button");
    buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        buttons.forEach((button) => button.classList.remove("filter__active"));
        btn.classList.add("filter__active");
        const selectedCategory = btn.dataset.category;
        console.log(selectedCategory)
        if (selectedCategory === "All") {
            renderCards(events)
        } else{
        const filteredEvents = events.filter((event) => event.type === selectedCategory);
        renderCards(filteredEvents)
        }
        
    });
    })



loadEvents();


