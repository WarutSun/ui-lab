
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  // Same page size as Robot Framework
  viewportWidth: 1280,
  viewportHeight: 1600,

  // Retry commands for up to 10 seconds
  defaultCommandTimeout: 10000,

  // Record videos during headless test runs
  video: true,

  e2e: {
    setupNodeEvents(on, config) {
      // No additional events required
    },
  },
})
