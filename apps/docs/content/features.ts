import React, { ComponentProps } from "react";

export type Feature = {
  name: string;
  description: string;
  page: "all" | "home" | "docs";
};

export type Features = Array<Feature>;

const FEATURES: Features = [
  {
    name: "SDKs",
    description: `Using webhooks get event updates like user joining/leaving, recording and more when someone joins your video calls`,
    page: "all",
  },
  {
    name: "IFrame",
    description: `Using webhooks get event updates like user joining/leaving, recording and more when someone joins your video calls`,
    page: "home",
  },
  {
    name: "APIs",
    description: `Using webhooks get event updates like user joining/leaving, recording and more when someone joins your video calls`,
    page: "home",
  },
  {
    name: "WebHooks",
    description: `Using webhooks get event updates like user joining/leaving, recording and more when someone joins your video calls`,
    page: "home",
  },

];

export const DOCS_FEATURES = FEATURES.filter(
  (f) => f.page === "docs" || f.page === "all"
);

export const HOME_FEATURES = FEATURES.filter(
  (f) => f.page === "home" || f.page === "all"
);

export default FEATURES;
