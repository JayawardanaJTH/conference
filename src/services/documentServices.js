import http from "./httpServices";
import { apiUrl } from "../config/config.json";

// const apiEndpoint = apiUrl + "/api";
const apiEndpoint = "http://localhost:4000/api";

export function insertDocument(formData) {  
    return http.post(`${apiEndpoint}/document`, formData,{ 
      headers: { 
        "content-type": "multipart/form-data", 
      }, } );
  }

  export function getDocuments() {
    return http.get(`${apiEndpoint}/documents`);
  }

  export function getPendingDocuments() {
    return http.get(`${apiEndpoint}/pending/documents`);
  }

  export function getApprovedWorkshops() {
    return http.get(`${apiEndpoint}/approved/workshops`);
  }

  export function getApprovedResearches() {
    return http.get(`${apiEndpoint}/approved/researches`);
  }

  export function updateDocuments(data,id) {
    return http.put(`${apiEndpoint}/document/${id}`, data);
  }