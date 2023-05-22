import type { ExpoConfig } from "@expo/config-types";
import path from "path";
import dotenv from "dotenv";

const STAGE = process.env.STAGE ?? "production";
const envPath = path.resolve(__dirname, `.env.${STAGE}`);

dotenv.config({ path: envPath });

const config: ExpoConfig = {
  name: "Die With Us",
  scheme: "acme",
  slug: "die-with-us",
  web: {
    bundler: "metro",
  },
  extra: {
    STAGE,
    eas: {
      projectId: "f9d6a9e4-8958-4e0f-a68a-a70d5180879b",
    },
  },
  android: {
    package: "com.jrafaaael.diewithus",
  },
};

export default config;
