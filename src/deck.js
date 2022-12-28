export default class Deck {
  constructor() {
    const suit = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    this.cards = [...suit, ...suit, ...suit, ...suit].sort(
      () => Math.random() - 0.5
    );
  }
  dealCard() {
    return this.cards.pop();
  }
}
