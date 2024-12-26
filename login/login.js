const usernameElement = document.getElementById("username");
const passwordElement = document.getElementById("password");
const loginButtonElement = document.getElementById("login-form");

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
      alert("User not found!");
    } else if (gettingUser.username !== username) {
      alert("Username not found!");
    } else if (gettingUser.password !== password) {
      alert("Incorrect password!");
    } else {
      alert("Login successful!");
      usernameElement.value = "";
      passwordElement.value = "";
    }
  }
});
