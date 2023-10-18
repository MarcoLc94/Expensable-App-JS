import { BASE_URI, tokenKey } from "../config.js";
import { apiFetch } from "./api-fetch.js"

async function login(credentials = { email, password }) {
  const { token, ...user } = await apiFetch("/login", { body: credentials });
  sessionStorage.setItem(tokenKey, token);
  return user;
}

async function logout() {
<<<<<<< HEAD
    const response = await apiFetch("/logout", {method: "DELETE"})
    
//   const token = sessionStorage.getItem(tokenKey);
//   const response = await fetch(`${BASE_URI}/logout`, {
//     method: "DELETE",
//     headers: {
//       Authorization: `Token token=${token}`,
//     },
//   });
//   console.log(response);
//   let data;
//   try {
//     data = await response.json();
//   } catch (error) {
//     data = response.statusText;
//   }
//   if (!response.ok) {
//     console.log(data);
//     throw new error(data.errors);
//   }
=======
  const response = apiFetch("/logout", { method: "DELETE" });
  // const token = sessionStorage.getItem(tokenKey);
  // const response = await fetch(`${BASE_URI}/logout`, {
  //   method: "DELETE",
  //   headers: {
  //     Authorization: `Token token=${token}`,
  //   },
  // });
  // // console.log(response);
  // let data;
  // try {
  //   data = await response.json();
  // } catch (error) {
  //   data = response.statusText;
  // }
  // if (!response.ok) {
  //   console.log(data);
  //   throw new error(data.errors);
  // }
>>>>>>> 6f12cd2 (lol)
  sessionStorage.removeItem(tokenKey);
  return response;
}

export { login, logout };
