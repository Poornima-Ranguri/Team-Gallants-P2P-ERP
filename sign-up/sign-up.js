const signupFormElement = document.getElementById("signup-form");
const toastElement = document.getElementById("toast");

// function showToast(message, type) {
//   toastElement.textContent = message;
//   toastElement.className = `toast ${type}`;
//   //show toast
//   setTimeout(() => {
//     toastElement.classList.add("show");
//   }, 100);
//   //hide toast
//   setTimeout(() => {
//     toastElement.classList.remove("show");
//   }, 3000);
// }

function showToast(message, type) {
  const toast = document.getElementById("toast");
  const messageElement = toast.querySelector(".message");
  const closeBtn = toast.querySelector(".close-btn");

  messageElement.textContent = message;

  toast.className = "toast";

  toast.classList.add("show");
  toast.classList.add(type);

  // Auto hide after 3 seconds
  const timeoutId = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

  // Close button handler
  closeBtn.onclick = () => {
    toast.classList.remove("show");
    clearTimeout(timeoutId);
  };
}

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
    showToast("Please enter a username", "error");
  } else if (email === "") {
    showToast("Please enter an email", "error");
  } else if (password === "") {
    showToast("Please enter a password", "error");
  } else if (password.length < 8) {
    showToast("Password must be at least 8 characters long", "error");
  } else if (password.length > 20) {
    showToast("Password must be at most 20 characters long", "error");
  } else if (confirmPassword !== password) {
    showToast("Passwords do not match", "error");
  } else {
    localStorage.setItem("user", JSON.stringify(user));
    showToast("Account created successfully!", "success");
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirm-password").value = "";
    setTimeout(() => {
      window.location.href = "../login/login.html";
    }, 3000);
  }
});
