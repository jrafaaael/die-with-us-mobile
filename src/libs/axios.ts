import axios from "axios";

const API_URL = process.env.API_URL;

export const rq = axios.create({
  baseURL: API_URL,
});
