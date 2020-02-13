global.broker.addListener(global.matchedPairKey, function(data) {
    data.elements.first.remove();
    data.elements.second.remove();
});

function BoardState() {
    this.selected = [];
};
BoardState.prototype.add = function(card) {
    this.selected.push(card);
};
BoardState.prototype.processCards = function() {
    var c1 = this.selected[0];
    var c2 = this.selected[1];

    var v1 = 
        c1.querySelector(global.cardValueSel).getAttribute(global.valueAttr);
    var v2 = 
        c2.querySelector(global.cardValueSel).getAttribute(global.valueAttr);

    if(v1 === v2) {
        setTimeout(function() {
            c1.remove();
            c2.remove();
        }, 2000);
    } else {
        setTimeout(function() {
            c1.classList.remove(global.selectCardClass);
            c2.classList.remove(global.selectCardClass);
        }, 1000);
    }
    this.selected = [];
};
var boardState = new BoardState();

function toggleCardSelection(card, isAdd) {
    if(isAdd) {
        card.classList.add(global.selectCardClass);
        boardState.add(card);
    } else {
        card.classList.remove(global.selectCardClass);
    }
};
global.cardsContainer.addEventListener("click", function(e) {
    var t = e.target;
    if(t && t.classList.contains(global.cardBackClass) && boardState.selected.length < 2) {
        var card = t.closest(global.cardClassSel);
        toggleCardSelection(card, true);
    }
});
global.cardsContainer.addEventListener("transitionend", function(e) {
    var t = e.target;
    if(t && t.classList.contains(global.cardInnerClass)) {
        if(boardState.selected.length === 2) {
            boardState.processCards();
        }
    }
});