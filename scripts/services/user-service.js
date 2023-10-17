import apiFetch from "./api-fetch.js";

async function createuser(newUser={
    email, password,
    first_name, last_name, phone,
}) {
    apiFetch("/signup",)
}