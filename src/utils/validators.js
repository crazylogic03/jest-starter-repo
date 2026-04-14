function isValidEmail(email) {
  if (typeof email !== "string") {
    return false;
  }

  const trimmedEmail = email.trim();

  if (trimmedEmail.length === 0) {
    return false;
  }

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
}

function isStrongPassword(password) {
  if (typeof password !== "string") {
    return false;
  }

  if (password.length < 8) {
    return false;
  }

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasDigit = /[0-9]/.test(password);

  return hasUpperCase && hasLowerCase && hasDigit;
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

module.exports = {
  isValidEmail,
  isStrongPassword,
  isNonEmptyString,
};
