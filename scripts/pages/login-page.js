import { input } from "../components/input.js";
import DOMHandler from "../dom_handler.js";
import { login } from "../services/sessions-service.js";
import STORE from "../store.js";
import HomePage from "./home-page.js";

function render() {
  const { loginError } = LoginPage.state;
  return `
  <main class="section">
  <section class="container">
   <h3 class="text-center heading--lg mb-4 js-title">Login</h3>
    <form class="flex flex-column gap-4 js-login-form">
     ${input({
       label: "email",
       id: "email",
       type: "email",
       placeholder: "testino@mail.com",
       required: true,
       value: "marcolopez@mail.com",
     })}
     ${input({
       label: "password",
       id: "password",
       type: "password",
       placeholder: "*******",
       required: true,
     })}
     ${loginError ? `<p class="text-center error-300">${loginError}</p>` : ""}
     
     <button class="button button--primary">Submit</button>
    </form>
  </section>
 </main>
  `;
}

function listenTitle() {
  const title = document.querySelector(".js-title");
  title.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("estoy haciendo click al titulo");
  });
}

function listenSubmit() {
  const buttonSub = document.querySelector(".js-login-form");
  buttonSub.addEventListener("submit", async (event) => {
    try {
      event.preventDefault();
      const { email, password } = event.target;
      const credentials = {
        email: email.value,
        password: password.value,
      };
      const user = await login(credentials);
      STORE.user = user;
      console.log(user);
      DOMHandler.load(HomePage);
    } catch (error) {
      console.log(error);
      LoginPage.state.loginError = error.message;
      DOMHandler.reload();
    }
  });
}

const LoginPage = {
  toString() {
    return render();
  },
  addListeners() {
    listenSubmit();
    listenTitle();
  },
  state: {
    loginError: null,
  },
};
export { LoginPage };
