var global = {};
global.templates = document.querySelector(".templates");
global.cardsContainer = document.querySelector(".cards-container"); 
global.hNumber = 7;
global.vNumber = 8;
global.selectCardClass = "selected-card";

function toggleCardSelection(card, isAdd) {
    if(isAdd) {
        card.classList.add(global.selectCardClass);
    } else {
        card.classList.remove(global.selectCardClass);
    }
};

function initCard(h, v, cardTemplate) {
    var card = global.cardsContainer
        .appendChild(cardTemplate.cloneNode(true));
    card.addEventListener("click", function() {
        toggleCardSelection(card, true);
    });
};

function initCards() {
    var cardTemplate = global.templates
        .querySelector(".card")
        .cloneNode(true);
    for(var i = 0; i < global.hNumber; ++i) {
        for(var j = 0; j < global.vNumber; ++j) {
            initCard(i, j, cardTemplate); 
        }    
    }
};
initCards();
