const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const { defineConfig } = require("cypress");

const envPath = fs.existsSync(path.join(__dirname, '.env'))
  ? path.join(__dirname, '.env')
  : path.join(__dirname, '.env.example');

dotenv.config({ path: envPath });

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://meroshare.cdsc.com.np/", 
    env:{...process.env},
  },
});
