import { defineConfig } from 'cypress'

export default defineConfig({
  defaultCommandTimeout: 15000,
  screenshotOnRunFailure: false,
  video: false,
  videoUploadOnPasses: false,

  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
  }
})
