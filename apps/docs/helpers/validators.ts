import { z } from "zod";

export const createSdkApiKey = z.object({
  address: z
    .string({
      required_error: "Address is required",
      invalid_type_error: "Address must be a string",
      description: "Wallet Address",
    })
    .refine((val) => val.length <= 255, {
      message: "Address can't be more than 255 characters",
    }),
});

export type createSdkApiKeySchema = z.infer<typeof createSdkApiKey>;
