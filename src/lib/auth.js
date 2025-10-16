// src/lib/auth.js

// Save token
export const setAuthToken = (token) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("token", token);
  }
};

// Retrieve token
export const getAuthToken = () => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem("token");
  }
  return null;
};

// Remove token
export const removeAuthToken = () => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem("token");
  }
};

// Check if user is logged in (returns boolean)
export const checkUserSession = async () => {
  if (typeof window === "undefined") return false;

  // simulate short delay for splash animation
  await new Promise((resolve) => setTimeout(resolve, 800));

  const token = getAuthToken();
  return !!token; // true if token exists
};
