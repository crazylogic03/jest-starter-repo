const {isValidEmail,isStrongPassword,isNonEmptyString} = require("./src/utils/validators")

test(("valid email"),()=>{
    expect(isValidEmail("   ")).toBe(false)
    expect(isValidEmail("               ")).toBe(false)
    expect(isValidEmail("")).toBe(false)
})

