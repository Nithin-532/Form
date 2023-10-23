const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
let error = document.querySelectorAll('.error');
const match = document.querySelector(".passwords-match")

// const input = document.querySelectorAll("input");
const submit = document.querySelector("#submit");
console.log(submit);

submit.addEventListener('click', function(e) {
  if (password.value !== confirmPassword.value) {
    error.forEach(div => {
      div.classList.add("find-error");
    })
    match.textContent = "Passwords didn't match!";
  } else {
    error.forEach(div => {
      div.classList.remove("find-error");
    })
    match.textContent = "";
  }
  e.preventDefault();
})