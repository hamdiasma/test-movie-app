declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    KEY_API?: string;
    BASE_URL?: string;
    BASE_IMG_URL?: string;
  }
}
