function validateName(firstName) {
  if (!firstName.match(/^[a-zA-Z]{2,}$/)) {
    const error = new Error();
    error.input = "firstName";
    throw error;
  }
}

function validateEmail(email) {
  if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
    const error = new Error();
    error.input = "email";
    throw error;
  }
}

function validatePassword(password) {
  if (password.length < 8 || password.length > 20) {
    const error = new Error();
    error.input = "password";
    throw error;
  }
}

function validatePasswordConfirm(passwordConfirm) {
  const password = document.querySelector("#password").value;
  if (passwordConfirm !== password) {
    const error = new Error();
    error.input = "passwordConfirm";
    throw error;
  }
}

function resetInputStyles(inputs) {
  Object.entries(inputs).forEach(([key, value]) => {
    value.classList.remove("success", "error");
  });
}

const userInputs = {
  firstName: document.querySelector("#firstName"),
  email: document.querySelector("#email"),
  password: document.querySelector("#password"),
  passwordConfirm: document.querySelector("#passwordConfirm"),
};

const form = document.querySelector("form");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  resetInputStyles(userInputs);

  try {
    validateName(userInputs.firstName.value);
    userInputs.firstName.classList.add("success");
    validateEmail(userInputs.email.value);
    userInputs.email.classList.add("success");
    validatePassword(userInputs.password.value);
    userInputs.password.classList.add("success");
    validatePasswordConfirm(userInputs.passwordConfirm.value);
    userInputs.passwordConfirm.classList.add("success");
    alert("Todos os campos foram preenchidos corretamente!");
  } catch (error) {
    userInputs[error.input].classList.add("error");
    alert("Verifique o(s) campo(s) inválido(s) e tente novamente.");
  }
});
