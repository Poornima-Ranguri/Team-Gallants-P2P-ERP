const usernameElement = document.getElementById("username");
const passwordElement = document.getElementById("password");
const loginButtonElement = document.getElementById("login-form");

function showToast(message, type) {
  const toast = document.getElementById("toast");
  const messageElement = toast.querySelector(".message");
  const closeBtn = toast.querySelector(".close-btn");
  messageElement.textContent = message;
  toast.className = "toast";
  toast.classList.add("show");
  toast.classList.add(type);
  const timeoutId = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
  closeBtn.onclick = () => {
    toast.classList.remove("show");
    clearTimeout(timeoutId);
  };
}

loginButtonElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = usernameElement.value.trim();
  const password = passwordElement.value.trim();
  if (username === "") {
    alert("Please enter a username");
  } else if (password === "") {
    alert("Please enter a password");
  } else {
    const user = {
      username,
      password,
    };

    let gettingUser = JSON.parse(localStorage.getItem("user"));
    console.log(gettingUser);
    console.log(gettingUser.username);

    if (gettingUser === null) {
      showToast("User not found!", "error");
    } else if (gettingUser.username !== username) {
      showToast("Username not found!", "error");
    } else if (gettingUser.password !== password) {
      showToast("Incorrect password!", "error");
    } else {
      showToast("Login successful!", "success");
      usernameElement.value = "";
      passwordElement.value = "";
      setTimeout(() => {
        window.location.href = "../index.html";
      }, 3000);
    }
  }
});
