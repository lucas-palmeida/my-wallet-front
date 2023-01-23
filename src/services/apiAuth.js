import axios from "axios"

const BASE_URL = "http://localhost:5000"

function login(body) {
    const promise = axios.post(`${BASE_URL}/sign-in`, body)
    return promise
}

function signUp(body) {
    const promise = axios.post(`${BASE_URL}/sign-up`, body)
    return promise
}

const apiAuth = { login, signUp } 
export default apiAuth