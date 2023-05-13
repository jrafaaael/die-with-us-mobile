import axios from "axios";

export const rq = axios.create({
  baseURL: "http://192.168.0.184:3000/",
});
