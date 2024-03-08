const submitEl = document.querySelector("form");
submitEl.addEventListener("submit", function (e) {
  e.preventDefault();
  const usernameEl = document.querySelector("#Uname");
  console.log(usernameEl.value);
});
