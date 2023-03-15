import axios from "axios";
const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_API_BASE_URL}`,
  withCredentials: true,
});
console.log(baseURL);
export { instance };
