const { test, expect } = require("@jest/globals");
const towerOfHanoi = require("./towerOfHanoi")


test("When there no disk, function return '0'",() => {
  
    expect(towerOfHanoi(0)).toBe(0)
 
})

test("When there are 3 disk, function return '7'",() => {
  
    expect(towerOfHanoi(3)).toBe(7)
 
})
