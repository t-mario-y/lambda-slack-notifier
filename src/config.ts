import envSchema from "env-schema";
import ApplicationConfigSchema from "./schemas/ApplicationConfig.json";
import { ApplicationConfig } from "./types/ApplicationConfig";

export const createConfig = (): ApplicationConfig => {
  const schema = ApplicationConfigSchema;
  return envSchema({ schema }) as ApplicationConfig;
};
