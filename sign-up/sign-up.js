const signupFormElement = document.getElementById("signup-form");

signupFormElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirm-password")
    .value.trim();
  const user = {
    username,
    email,
    password,
  };
  if (username === "") {
    alert("Please enter a username");
  } else if (email === "") {
    alert("Please enter an email");
  } else if (password === "") {
    alert("Please enter a password");
  } else if (password.length < 8) {
    alert("Password must be at least 8 characters long");
  } else if (password.length > 20) {
    alert("Password must be at most 20 characters long");
  } else if (confirmPassword !== password) {
    alert("Passwords do not match");
  } else {
    localStorage.setItem("user", JSON.stringify(user));
    alert("Account created successfully!");
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirm-password").value = "";
  }
});
