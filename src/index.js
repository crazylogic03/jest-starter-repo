const { sum, divide } = require("./utils/math");
const { isValidEmail, isStrongPassword } = require("./utils/validators");
const { registerUser, loginUser } = require("./services/authService");
const {
  calculateCartTotal,
  calculateFinalPrice,
  canCheckout,
} = require("./services/cartService");
const { getCouponDiscountPercentage } = require("./services/discountService");

console.log("=== Math ===");
console.log("Sum:", sum(10, 5));
console.log("Divide:", divide(20, 4));

console.log("\n=== Validators ===");
console.log("Valid Email:", isValidEmail("student@demo.com"));
console.log("Strong Password:", isStrongPassword("Password123"));

console.log("\n=== Auth Service ===");
console.log(
  "Register User:",
  registerUser({
    name: "Aditya",
    email: "aditya@example.com",
    password: "StrongPass1",
  }),
);

console.log("Login User:", loginUser("student@demo.com", "Password123"));

console.log("\n=== Cart Service ===");
const items = [
  { name: "Book", price: 500, quantity: 2 },
  { name: "Pen", price: 20, quantity: 3 },
];

console.log("Cart Total:", calculateCartTotal(items));

const discountPercentage = getCouponDiscountPercentage("SAVE10");
console.log("Final Price:", calculateFinalPrice(items, discountPercentage));
console.log("Can Checkout:", canCheckout(items));
