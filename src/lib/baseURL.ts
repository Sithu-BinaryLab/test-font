import axios from "axios";

// "http://main.croucher.localhost/api";
// export const backendURL = "http://192.168.0.203:3000";

export const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const clientAccessToken = process.env.NEXT_PUBLIC_CLIENT_ACCESS_TOKEN;
export const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
export const clientSecretToken = process.env.NEXT_PUBLIC_CLIENT_SECRET_TOKEN;
export const baseURL = axios.create({
  baseURL: backendURL,
});