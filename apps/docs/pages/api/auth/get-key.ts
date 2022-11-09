import axios from "axios";
import crypto from "crypto";
import type { NextApiRequest, NextApiResponse } from "next";
import { hasuraUrl, __prod__ } from "../../../helpers";
import { GET_API_KEY_FOR_ADDRESS } from "../../../helpers/graphql";
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

    const resp = await axios.post<{
      data: {
        SdkApiKeys: {
          id: string;
          address: string;
          apiKey: string;
        }[];
      };
    }>(
      hasuraUrl,
      {
        query: GET_API_KEY_FOR_ADDRESS,
        variables: {
          where: {
            address: {
              _eq: address.toLowerCase(),
            },
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

    if (status > 299) {
      console.log(`Got Status Code: ${status}`);
      throw new Error("Error Getting API Key");
    }

    if (data.data.SdkApiKeys.length === 0) {
      res.status(200).json({
        message: "API Key Not Found",
        created: false,
      });

      return;
    }

    res.status(200).json({
      message: "API Key Found",
      created: true,
      apiKey: data.data.SdkApiKeys[0].apiKey,
    });

    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({
      statusCode: 500,
      message: "Internal Server Error",
      error: error.message,
    });

    return;
  }
}
