import axios from "axios";

const api = axios.create({
  baseURL: "https://flight-radar1.p.rapidapi.com",
  // headers: {
  //   "x-rapidapi-key": "12c2022078msh338fda3b256abf8p1a0608jsn879dddf1a854",
  //   "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  // },
});

export default api;
