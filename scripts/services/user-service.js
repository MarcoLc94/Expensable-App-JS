import apiFetch from "./api-fetch.js";
import { tokenKey } from "../config.js";

async function createuser(
  newUser = {
    email,
    password,
    first_name,
    last_name,
    phone,
  }
) {
  const { token, ...user } = await apiFetch("/signup", { body: newUser });
  sessionStorage.setItem(tokenKey, user.token);
  return user;
}
async function updateUser(
  data = {
    email,
    first_name,
    last_name,
    phone,
  }
) {
  const { token, ...user } = await apiFetch("/profile", {
    body: data,
    method: "PATCH",
  });
  return user;
}
