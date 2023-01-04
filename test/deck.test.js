import Deck from "../src/deck.js";

describe("Deck", () => {
  test("it will initialise a new Deck object", () => {
    const newDeck = new Deck();
    expect(typeof newDeck).toBe("object");
  });

  test("it will be an instance of the Deck class", () => {
    const newDeck = new Deck();
    expect(newDeck).toBeInstanceOf(Deck);
  });

  test("number of cards in the deck will be 52", () => {
    const newDeck = new Deck();
    const length = newDeck.cards.length;
    expect(length).toEqual(52);
  });
  test("it contains an array", () => {
    const newDeck = new Deck();
    expect(newDeck.cards).toEqual(expect.arrayContaining([]));
  });
});

describe("deal card method", () => {
  test("When dealt a card, it will give one card", () => {
    const newDeck = new Deck();
    const card = [newDeck.dealCard()];
    expect(card.length).toEqual(1);
  });
});

