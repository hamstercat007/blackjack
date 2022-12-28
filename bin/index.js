#!/usr/bin/env node

import Deck from "../src/deck.js";
import Player from "../src/player.js"

/*create a class constructor with a deck of cards with 52 cards
Number cards are worth their face value (2-10)  
Jacks, queens, and kings are worth 10 each 
Aces are worth either 1 or 11 (player chooses) 

create an empty array for the player's hand, 
deal the cards twice
evaluate the numbers, using a sum method

If there's a picture card, then the Ace is 11, making 21. 1 picture card + Ace, then Ace is 11. 
If king, a queen, and an ace  is 1. 2 picture cards + Ace, then Ace is 1.
Given that I have a nine, an ace, and another ace, this will be 21.  
*/

const newDeck = new Deck();
const newPlayer = new Player()
newPlayer.hand.push(newDeck.dealCard(), newDeck.dealCard())
console.log("player's hand: ", newPlayer.hand.sort())
newPlayer.summedValues()
console.log("What would you like to do? Hit or stand?")