import axios from "axios"

const BASE_URL = "http://localhost:5000";

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function getEntries(token) {
    const promise = axios.get(`${BASE_URL}/balance`, createConfig(token))
    return promise
}

function setEntry(form, token) {
    const promise = axios.post(`${BASE_URL}/new-entry`, form, createConfig(token))
    return promise
}

function setOutput(form, token) {
    const promise = axios.post(`${BASE_URL}/new-entry`, form, createConfig(token))
    return promise
}

const apiBalance = { getEntries, setEntry, setOutput }
export default apiBalance;