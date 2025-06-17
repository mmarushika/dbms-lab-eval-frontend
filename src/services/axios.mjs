import axios from "axios";

let url = "http://localhost:8000/api";
export const api = axios.create({
    baseURL: url,
});
