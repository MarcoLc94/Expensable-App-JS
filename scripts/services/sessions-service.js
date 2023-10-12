const BASE_URI = "https://expensable-api.herokuapp.com"
async function login(credentials = {email, password}){
    const response = await fetch(`${BASE_URI}/login`, {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: {
            "Content-Type" : "application/json"
        }
    })
    console.log(response)
}

export { login }