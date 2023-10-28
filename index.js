import { tokenKey } from "./scripts/config.js";
import DOMHandler from "./scripts/dom_handler.js";
import HomePage from "./scripts/pages/home-page.js";
import { getUser } from "./scripts/services/user-service.js";
import { LoginPage } from "./scripts/pages/login-page.js";
import STORE from "./scripts/store.js";

async function init() {
  try {
    const token = sessionStorage.getItem(tokenKey);
    if (!token) return DOMHandler.load(LoginPage);
    const user = await getUser();
    STORE.user = user;
    STORE.fetchCategories();
    DOMHandler.load(HomePage);
  } catch (error) {
    sessionStorage.removeItem(tokenKey);
    console.log(error);
    DOMHandler.load(LoginPage);
  }
}
init();
