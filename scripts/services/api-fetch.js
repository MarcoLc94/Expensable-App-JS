import { BASE_URI, tokenKey } from "../config.js";

export async function apiFetch(endPoint, { method, headers, body } = {}) {
  const token = sessionStorage.getItem(tokenKey);
  if (token) {
    headers = {
      Authorization: `Token token=${token}`,
      ...headers,
    };
  }
  if (body) {
    headers = {
      ...headers,
      "Content-Type": "application/json",
    };
  }
  const config = {
    method: method || (body ? "POST" : "GET"),
    headers: headers,
    body: body ? JSON.stringify(body) : null,
  };
  const response = await fetch(BASE_URI + endPoint, config);
  // En el repositorio nos mostrara el flujo con el archivo Posibles-respuestas.png
  let data;
  if (!response.ok) {
    try {
      data = await response.json();
    } catch (error) {
      throw new Error(response.statusText);
    }
    throw new Error(data.errors);
  }
  try {
    data = await response.json();
  } catch (error) {
    data = response.statusText;
  }
  return data;
}

export default { apiFetch };
