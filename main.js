var global = {};
global.templates = document.querySelector(".templates");
global.cardsContainer = document.querySelector(".cards-container"); 
global.hNumber = 7;
global.vNumber = 8;

function initCard(h, v, cardTemplate) {
    global.cardsContainer
        .appendChild(cardTemplate.cloneNode(true));
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
