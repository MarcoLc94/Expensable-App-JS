function login(credentials = { email, password }) {
  fetch(URL_BASE / login, options);
}

login({ email: "marcolopez@mail.com", password: "123456789" });
