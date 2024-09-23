import { defineConfig } from "cypress";
import * as dotenv from "dotenv";
import { plugins } from "cypress-social-logins";
const googleSocialLogin = plugins.GoogleSocialLogin;

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  e2e: {
    baseUrl: "https://qa.vyaguta.lftechnology.com.np",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      on("task", {
        GoogleSocialLogin: googleSocialLogin,
      });
      // implement node event listeners here
    },
    env: {
      refreshToken: process.env.REFRESH_TOKEN,
    },
  },
});
