var global = {};
global.templates = document.querySelector(".templates");
global.cardsContainer = document.querySelector(".cards-container"); 
global.hNumber = 7;
global.vNumber = 8;
global.valueAttr = "data-value-attr";
global.cardValueSel = ".card-value";
global.cardClassSel = ".card";
global.cardBackClass = "card-back";
global.cardInnerClass = "card-inner";
global.selectCardClass = "selected-card";


function getPair(key) {
    for (var i = 0; i < this.pairs.length; ++i) {
        if(this.pairs[i].key === key) {
            return this.pairs[i];
        }
    }
    return null;
};
function addListener(key, listener) {
    var pair = this.getPair(key);
    if(!pair) {
        pair = {
            key: key,
            listeners: []
        }
        this.pairs.push(pair);
    }

    for(var i = 0; i < pair.listeners.length; ++i) {
        if(pair.listeners[i] === listener) {
            return;
        }
    }

    pair.listeners.push(listener);
};
function triggerListener(key, data) {
    var pair = this.getPair(key);
    if(pair) {
        for (var i = 0; i < pair.listeners.length; ++i) {
            pair.listeners[i](data);
        }
    }
};
function EventContainer() {
    this.pairs = [];

    this.getPair = getPair;
    this.addListener = addListener;
    this.triggerListener = triggerListener;
};
global.broker = new EventContainer();

global.matchedPairKey = "matchedPairKey";