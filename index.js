import { login, logout } from "./scripts/services/sessions-service.js";

// login({ email: "marcolopez@mail.com", password: "123456" })
//   .then((user) => console.log(user))
//   .catch((error) => console.log(error));
const credentials = {
  email: "marcolopez@mail.com",
  password: "123456",
};
async function test() {
  try {
    const user = await login(credentials);
    const message = await logout();
    console.log(user)
    console.log(message);
  } catch (error) {
    console.error(error);
  }
}
test();
