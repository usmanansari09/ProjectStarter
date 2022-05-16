import axios from "axios";

const BASE_URL = "https://song-equities-tradi-30156.botics.co/rest-auth"; // your app back-end url

const authAPI = axios.create({
  baseURL: BASE_URL,
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});

function apiResetPasswordRequest(payload) {
  return authAPI.post(`/password/reset/`, payload);
}

export const api = {
  apiResetPasswordRequest,
};
