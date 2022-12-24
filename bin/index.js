#!/usr/bin/env node

import Deck from "../src/deck.js";
console.log("Hello!");

/*create a class constructor with a deck of cards with 52 cards
Number cards are worth their face value (2-10)  
Jacks, queens, and kings are worth 10 each 
Aces are worth either 1 or 11 (player chooses) 
*/

const newDeck = new Deck();
console.log(newDeck);
let card = newDeck.dealCard();
console.log("new card:", card);
console.log(newDeck);
