import { BASE_URI, tokenKey } from "../config.js";

async function login(credentials = { email, password }) {
  const response = await fetch(`${BASE_URI}/login`, {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response.ok);
  const data = await response.json();
  if (!response.ok) {
    console.log(data);
    throw new error();
  }
  sessionStorage.setItem(tokenKey, data.token);
  return data;
}

async function logout() {
  const token = sessionStorage.getItem(tokenKey);
  const response = await fetch(`${BASE_URI}/logout`, {
    method: "DELETE",
    headers: {
      Authorization: `Token token=${token}`,
    },
  });
  console.log(response);
  let data;
  try {
    data = await response.json();
  } catch (error) {
    data = response.statusText;
  }
  if (!response.ok) {
    console.log(data);
    throw new error(data.errors);
  }
  sessionStorage.removeItem(tokenKey);
  return data;
}

export { login, logout };
