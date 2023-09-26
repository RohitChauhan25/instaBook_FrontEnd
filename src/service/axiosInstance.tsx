import axios from "axios";

const reqres = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

export default reqres;
