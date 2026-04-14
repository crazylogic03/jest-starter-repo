const { applyDiscount } = require("./discountService");

function calculateCartTotal(items) {
  if (!Array.isArray(items)) {
    throw new Error("Items must be an array");
  }

  return items.reduce((total, item) => {
    if (
      !item ||
      typeof item.price !== "number" ||
      typeof item.quantity !== "number"
    ) {
      throw new Error("Each item must have valid price and quantity");
    }

    if (item.price < 0 || item.quantity < 0) {
      throw new Error("Price and quantity cannot be negative");
    }

    return total + item.price * item.quantity;
  }, 0);
}

function calculateFinalPrice(items, discountPercentage) {
  const total = calculateCartTotal(items);
  return applyDiscount(total, discountPercentage);
}

function canCheckout(items) {
  if (!Array.isArray(items)) {
    return false;
  }

  if (items.length === 0) {
    return false;
  }

  return items.every((item) => item.quantity > 0);
}

module.exports = {
  calculateCartTotal,
  calculateFinalPrice,
  canCheckout,
};
