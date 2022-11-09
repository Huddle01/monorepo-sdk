import axios from "axios";
import crypto from "crypto";
import type { NextApiRequest, NextApiResponse } from "next";
import { hasuraUrl, __prod__ } from "../../../helpers";
import { CREATE_API_KEY_FOR_ADDRESS } from "../../../helpers/graphql";
import { createSdkApiKey } from "../../../helpers/validators";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { body } = req;
    if (!body) {
      throw new Error("No Body Provided");
    }

    const { address } = createSdkApiKey.parse(body);

    const apiKey = crypto.randomBytes(32).toString("hex");

    const resp = await axios.post(
      hasuraUrl,
      {
        query: CREATE_API_KEY_FOR_ADDRESS,
        variables: {
          object: {
            address: address.toLowerCase(),
            apiKey,
          },
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-hasura-admin-secret": __prod__
            ? process.env.NEXT_PUBLIC_HASURA_SECRET_PROD
            : process.env.NEXT_PUBLIC_HASURA_SECRET_DEV,
        },
      }
    );

    const { data, status } = resp;

    if (status > 299 && data.errors) {
      console.error(data.errors);
      throw new Error("Error Creating API Key");
    }

    res.status(201).json({
      message: "API Key Created",
      apiKey,
    });

    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ statusCode: 500, message: "Internal Server Error" });

    return;
  }
}
