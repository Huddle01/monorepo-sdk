import axios from "axios";
export const __prod__ = process.env.NODE_ENV === "production";

export const hasuraUrl = __prod__
  ? process.env.HASURA_URL_PROD
  : process.env.HASURA_URL_DEV;

const api = axios.create({
  baseURL: hasuraUrl,
  headers: {
    "Content-Type": "application/json",
    "x-hasura-admin-secret": process.env.HASURA_DEV_ADMIN_SECRET || "",
  },
});
