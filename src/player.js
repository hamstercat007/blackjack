import promptSync from "prompt-sync";

const prompt = promptSync({ sigint: true });

export default class Player {
  constructor() {
    this.hand = [];
    this.total = 0
  }

  updateTotal() {
    let arr = [];
    this.hand.forEach(item => {
      // move the Ace to the end or array
      if (item == 'A') {
        arr.push(item)
      }else{
        arr.unshift(item)
      }
    });
    this.total = arr.reduce((a, b) => {
      if (b === "Q" || b === "K" || b === "J") {
        b = 10;
      }

      else if (b === "A" && (a === 10 || a === 0)) {
        b = 11;
      } else if (b === "A" && a === 20) {
        b = 1;
      } else if (a === 9 && b === "A") {
        b = 11;
      } else if (b === "A" && a < 10) {
        let answer = prompt(
          "What would you like the Ace value to be? 1 or 11? "
        );
        let awaitingResponse = true;
        while (awaitingResponse) {
          if (answer === "1" || answer === "11") {
            b = Number(answer);
            awaitingResponse = false;
          } else {
            answer = prompt(
              "I don't recognise that input. Please enter 1 or 11"
            );
          }
        }
      } else if (b === "A" && a > 10) {
        b = 1;
      }
      return a + b;
    }, 0);
  }
}
