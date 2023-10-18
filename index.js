import { tokenKey } from "./scripts/config.js";
import DOMHandler from "./scripts/dom_handler.js";
import HomePage from "./scripts/pages/home-page.js";
import LoginPage from "./scripts/pages/login-page.js";
import { login } from "./scripts/services/sessions-service.js";

async function init() {
  const token = sessionStorage.getItem(tokenKey);
  if (!token) return DOMHandler.load(LoginPage);
  const user = await getUser();
}
DOMHandler.load(HomePage);

login({ email: "marcolopez@mail.com", password: "123456" });
init();
