import http from "./httpServices";
import { apiUrl } from "../config/config.json";

// const apiEndpoint = apiUrl + "/api";
const apiEndpoint = "http://localhost:4000/api";

export function UpdateDetails(data,id) { 
    return http.put(`${apiEndpoint}/static/${id}`,data );
  }

  export function getDetails() {
    return http.get(`${apiEndpoint}/statics`);
  } 

  export function getPendingDetails() {
    return http.get(`${apiEndpoint}/pending/statics`);
  } 

  export function getApprovedDetails() {
    return http.get(`${apiEndpoint}/approved/statics`);
  } 

  export function updateDetails(data,id) {
    return http.put(`${apiEndpoint}/static/${id}`, data);
  }

  export function insertEvents(data) { 
    return http.post(`${apiEndpoint}/event`,data );
  }

  export function getEvents() {
    return http.get(`${apiEndpoint}/events`);
  }

  export function getPendingEvents() {
    return http.get(`${apiEndpoint}/pending/events`);
  }

  export function getApprovedEvents() {
    return http.get(`${apiEndpoint}/approved/events`);
  }

  export function updateEvent(data,id) {
    return http.put(`${apiEndpoint}/event/${id}`, data);
  }

  export function insertGuests(data) { 
    return http.post(`${apiEndpoint}/guest`,data );
  }
  
  export function getGuests() {
    return http.get(`${apiEndpoint}/guests`);
  }

  export function getPendingGuests() {
    return http.get(`${apiEndpoint}/pending/guests`);
  }

  export function getApprovedGuests() {
    return http.get(`${apiEndpoint}/approved/guests`);
  }

  export function updateGuest(data,id) {
    return http.put(`${apiEndpoint}/guest/${id}`, data);
  }