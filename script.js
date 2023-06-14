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
  if (
    passwordConfirm !== password ||
    password.length < 8 ||
    password.length > 20
  ) {
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

  let errors = 0;

  try {
    validateName(userInputs.firstName.value);
    userInputs.firstName.classList.add("success");
  } catch (error) {
    userInputs[error.input].classList.add("error");
    errors = 1;
  }

  try {
    validateEmail(userInputs.email.value);
    userInputs.email.classList.add("success");
  } catch (error) {
    userInputs[error.input].classList.add("error");
    errors = 1;
  }

  try {
    validatePassword(userInputs.password.value);
    userInputs.password.classList.add("success");
  } catch (error) {
    userInputs[error.input].classList.add("error");
    errors = 1;
  }

  try {
    validatePasswordConfirm(userInputs.passwordConfirm.value);
    userInputs.passwordConfirm.classList.add("success");
  } catch (error) {
    userInputs[error.input].classList.add("error");
    errors = 1;
  }

  if (errors > 0) {
    alert("Verifique o(s) campo(s) inválido(s) e tente novamente.");
  } else {
    alert(`Todos os campos foram preenchidos corretamente!

(Dados não coletados, esse é apenas um projeto fictício para estudo)`);
  }
});
