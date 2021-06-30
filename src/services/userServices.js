import http from "./httpServices";
import { apiUrl } from "../config/config.json";

// const apiEndpoint = apiUrl + "/api";
const apiEndpoint = "http://localhost:4000/api";


export function signUp(info) {
    const data = { 
        username: info.username, 
        email: info.email,
        password: info.password,
        type: info.type 
    };
    return http.post(`${apiEndpoint}/user`, data );
  }

  export function getUsers() {
    return http.get(`${apiEndpoint}/users` );
  }
  