const {isValidEmail,isStrongPassword,isNonEmptyString} = require("./src/utils/validators")

test(("valid email"),()=>{
    expect(isValidEmail("   ")).toBe(false)
    expect(isValidEmail("               ")).toBe(false)
    expect(isValidEmail("")).toBe(false)
})

test(("strong password"),()=>{
    expect(isStrongPassword("")).toBe(false)
    expect(isStrongPassword("12345678")).toBe(false)
    expect(isStrongPassword("abcdefgh")).toBe(false)
    expect(isStrongPassword("ABCDEFGH")).toBe(false)
    expect(isStrongPassword("Abcdefgh")).toBe(false)
    expect(isStrongPassword("Abcdefg1")).toBe(true)
})

test(("non empty string"),()=>{
    expect(isNonEmptyString("   ")).toBe(false)
    expect(isNonEmptyString("               ")).toBe(false)
    expect(isNonEmptyString("")).toBe(false)
    expect(isNonEmptyString("Hello")).toBe(true)
})  