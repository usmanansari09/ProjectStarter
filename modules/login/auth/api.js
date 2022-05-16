import axios from "axios";

const BASE_URL = "https://song-equities-tradi-30156.botics.co"; // your app back-end url

const authAPI = axios.create({
  baseURL: BASE_URL,
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});

function apiLoginRequest(payload) {
  return authAPI.post(`/rest-auth/login/`, payload);
}

export const api = {
  apiLoginRequest,
};
