import axios from "axios";

const api = axios.create({
    baseURL: "https://get-the-look-backend-production.up.railway.app"
});

export default api;