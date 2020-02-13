function initCard(h, v, cardTemplate, value) {
    var card = global.cardsContainer
        .appendChild(cardTemplate.cloneNode(true));
    var cardValue = card.querySelector(".card-value");
    cardValue.textContent = value;
    cardValue.setAttribute(global.valueAttr, value);
};

function generateNumbers() {
    var arr = new Array(global.hNumber * global.vNumber);

    var len = Math.floor(0.5*arr.length);
    for(var i = 0; i < len; ++i) {
        arr[i] = i;
        arr[len + i] = i;
    }

    if(arr % 2 === 1) {
        arr[arr.length - 1] = len - i;
    }

    arr.sort(function (a, b) { return 0.5 - Math.random(); });
    
    return arr;
};

function initCards() {
    var cardTemplate = global.templates
        .querySelector(".card")
        .cloneNode(true);
    var numbersArr = generateNumbers();
    for(var i = 0; i < global.hNumber; ++i) {
        for(var j = 0; j < global.vNumber; ++j) {
            initCard(i, j, cardTemplate, numbersArr[i*global.vNumber + j]); 
        }    
    }
};
initCards();
