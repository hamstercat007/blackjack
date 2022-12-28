export default class Player {
  constructor() {
    this.hand = []
  }
  summedValues() {
    let summedValues = this.hand.sort().reduce((a, b) => {
      if (b === "Q" || b === "K" || b === "J" )  {
        b = 10 
      } 
      if ((b === "A") && (a === 10 || a === 0 ))  {
        b = 11
      }
      if (b === "A" && a < 10 ) {
        b = 1
      }
      return a + b
    }, 0)
    console.log("Total: ", summedValues)
  }
}