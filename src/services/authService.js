const {
  isValidEmail,
  isStrongPassword,
  isNonEmptyString,
} = require("../utils/validators");

function registerUser(user) {
  if (!user || typeof user !== "object") {
    return {
      success: false,
      message: "User data is required",
    };
  }

  const { name, email, password } = user;

  if (!isNonEmptyString(name)) {
    return {
      success: false,
      message: "Name is required",
    };
  }

  if (!isValidEmail(email)) {
    return {
      success: false,
      message: "Invalid email",
    };
  }

  if (!isStrongPassword(password)) {
    return {
      success: false,
      message: "Password is not strong enough",
    };
  }

  return {
    success: true,
    message: "User registered successfully",
  };
}

function loginUser(email, password) {
  const validEmail = "student@demo.com";
  const validPassword = "Password123";

  if (!isValidEmail(email)) {
    return {
      success: false,
      message: "Invalid email format",
    };
  }

  if (!isNonEmptyString(password)) {
    return {
      success: false,
      message: "Password is required",
    };
  }

  if (email !== validEmail || password !== validPassword) {
    return {
      success: false,
      message: "Invalid credentials",
    };
  }

  return {
    success: true,
    message: "Login successful",
  };
}

module.exports = {
  registerUser,
  loginUser,
};
