export const __prod__ = process.env.NODE_ENV === "production";

export const hasuraUrl = __prod__
  ? process.env.HASURA_URL_PROD
  : process.env.HASURA_URL_DEV;
