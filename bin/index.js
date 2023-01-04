#!/usr/bin/env node

import Deck from "../src/deck.js";
import Player from "../src/player.js";
import promptSync from "prompt-sync";

const deck = new Deck();
const player = new Player();
const prompt = promptSync({ sigint: true });

player.hand.push(deck.dealCard(), deck.dealCard());
console.log("player's hand: ", player.hand.sort());

player.updateTotal()

while (player.total < 21) {
  let answer = prompt("What would you like to do? Hit or stand?  ");
  if (answer.toLowerCase() === "hit") {
    player.hand.push(deck.dealCard());
    console.log("player's hand: ", player.hand.sort());
    player.updateTotal()
    console.log(player.total);
  } else if (answer.toLowerCase() === "stand") {
    console.log("I choose to stand");
    console.log(player.total);
    break;
  } else {
    console.log("I didn't recognise that input, please enter hit or stand");
  }
}

if (player.total === 21) {
  console.log("You've hit the jackpot of 21 - you are a winner");
}
if (player.total > 21) {
  console.log("Game over, you've exceeded 21");
}
