import Player from "../src/player.js";

describe("Player", () => {
  let player
  beforeEach(()=> {
    player = new Player();
  }) 
  test("it will initialise a new Player class", () => {
    expect(typeof player).toBe("object")
  })

  test("it will be an instance of the Player class", () => {
    expect(player).toBeInstanceOf(Player)
  })
  test("it has a hand property", () => {
    expect(player.hand).toEqual([])
  })
  test("if given a picture card, this will return a value of 10", () => {
    player.hand = ["J"]
    player.updateTotal()
    expect(player.total).toEqual(10)
  })
  test("if given a picture card, and an Ace, it will return 21", () => {
    player.hand = ["A", "J"]
    player.updateTotal()
    expect(player.total).toEqual(21)
  })
  test("if given a king, a queen, and an ace it will return 21", () => {
    player.hand = ["A", "Q", "K"] 
    player.updateTotal()
    expect(player.total).toBe(21)
  })
  test("if given a nine,  an ace, and another ace", () => {
    player.hand = [9, "A", "A"]
    player.updateTotal()
    expect(player.total).toBe(21)
  })
})


