import type { ExpoConfig } from "@expo/config-types";

const config: ExpoConfig = {
  name: "Die With Us",
  scheme: "acme",
  slug: "die-with-us",
  web: {
    bundler: "metro",
  },
  extra: {
    eas: {
      projectId: "f9d6a9e4-8958-4e0f-a68a-a70d5180879b",
    },
  },
  android: {
    package: "com.jrafaaael.diewithus",
  },
};

export default config;
