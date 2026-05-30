import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 1,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    headless: false,
    launchOptions: {
      //slowMo: 1000,
    },

  },

  projects: [
    
    
    // Runs first: creates authFile.json

    /* {
      name: 'setup',
      use: { ...devices['Desktop Chrome'] },
      testMatch: /.*\.setup\.ts/,
    },
    // Actual test projects depend on setup and reuse storage state
    {
      name: 'chromiu----m',
      use: { ...devices['Desktop Chrome'], storageState: 'storageState.json' },
      dependencies: ['setup'],
    }, */
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

  ],
});