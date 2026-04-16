const {sum , subtract , multiply , divide} = require('./src/utils/math')

test("add two numbers",()=>{
    expect(sum(1,4)).toBe(5)
})


test("subtract two numbers",()=>{
    expect(subtract(43,13)).toBe(30)
})

test("subtract two numbers",()=>{
    expect(subtract(43,13)).toBe(30)
})


test("MUltiply two numbers",()=>{
    expect(multiply(23,2)).toBe(46)
})

test("Division of two numbers",()=>{
    expect(divide(2,1)).toBe(2)
    expect(() => divide(5, 0)).toThrow("Division by zero is not allowed")
    expect(divide(1,2)).toBe(0.5)
    
})