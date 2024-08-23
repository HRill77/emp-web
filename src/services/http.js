import axios from "axios";

const http = axios.create({
    baseURL: `${window.location.origin}/api`
})

export default http;