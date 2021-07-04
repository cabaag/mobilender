import axios from "axios";

const instance = axios.create({
  baseURL: "https://reqres.in/",
  timeout: 30000,
});

export default instance;
