import http from "./httpServices"
import { apiUrl } from "../config/config.json"

// const apiEndpoint = apiUrl + "/api";
const apiEndpoint = "http://localhost:4000/api"

export function getPayments() {
    return http.get(`${apiEndpoint}/payments` )
}

export function insertPayment(data) {
    return http.post(`${apiEndpoint}/payment`, data)
}

export function insertTicket(data) {
    return http.post(`${apiEndpoint}/ticket`, data)
}