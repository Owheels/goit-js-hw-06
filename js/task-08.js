const formLogin = document.querySelector(".login-form");
const emailInput = formLogin.elements["email"];
const passwordInput = formLogin.elements["password"];
formLogin.addEventListener("submit", formProcessing);
function formProcessing(evt) {
  evt.preventDefault();
  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Please complete all fields.");
  } else {
      const {
        elements: { login, password },
      } = evt.currentTarget;
    const user = {};
    user[emailInput.name] = emailInput.value;
      user[passwordInput.name] = passwordInput.value;
      console.dir(user);
      formLogin.reset();
    };
}