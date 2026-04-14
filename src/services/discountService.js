function calculateDiscount(price, percentage) {
  if (typeof price !== "number" || typeof percentage !== "number") {
    throw new Error("Price and percentage must be numbers");
  }

  if (price < 0) {
    throw new Error("Price cannot be negative");
  }

  if (percentage < 0 || percentage > 100) {
    throw new Error("Percentage must be between 0 and 100");
  }

  return (price * percentage) / 100;
}

function applyDiscount(price, percentage) {
  const discount = calculateDiscount(price, percentage);
  return price - discount;
}

function getCouponDiscountPercentage(couponCode) {
  const coupons = {
    SAVE10: 10,
    SAVE20: 20,
    FESTIVE30: 30,
  };

  return coupons[couponCode] || 0;
}

module.exports = {
  calculateDiscount,
  applyDiscount,
  getCouponDiscountPercentage,
};
