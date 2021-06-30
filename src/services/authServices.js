import http from "./httpServices";
import { apiUrl } from "../config/config.json";

// const apiEndpoint = apiUrl + "/api/auth";
const apiEndpoint = "http://localhost:4000/api/auth";

export async function signIn(auth) {
  const data = { 
    email: auth.email,
    password: auth.password 
  };
  const { data: jwt } = await http.post(apiEndpoint, data );
  localStorage.setItem('token', jwt.token);
  localStorage.setItem('id', jwt.id);
  localStorage.setItem('username', jwt.username);
  localStorage.setItem('type', jwt.type);
  localStorage.setItem('role', jwt.role);
  return jwt;
}

export function signOut() {
  localStorage.removeItem('token');
  localStorage.removeItem('id');
  localStorage.removeItem('username');
  localStorage.removeItem('type');
  localStorage.removeItem('role');
}

export function getJwt() {
  return localStorage.getItem('token');
}

http.setJwt(getJwt());

export function getCurrentUser() {
  try {
    const username = localStorage.getItem('username');
    return username;
  } catch (EX) {
    return null;
  }
}

export function getCurrentUserId() {
  try {
    const id = localStorage.getItem('id')
    return id;
  } catch (EX) {
    return null;
  }
}

export default {
  signIn,
  signOut,
  getCurrentUser,
  getCurrentUserId
};
