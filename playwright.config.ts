import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  workers:1,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',

  },

  projects: [
    // Runs first: creates authFile.json

    {
      name: 'setup',
      use: { ...devices['Desktop Chrome'] },
      testMatch: /.*\.setup\.ts/,
    },
    // Actual test projects depend on setup and reuse storage state
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], storageState: 'storageState.json' },
     // dependencies: ['setup'],
    },
    {
      name: 'chromiu--m',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], storageState: 'authFile.json' },
      dependencies: ['setup'],
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'], storageState: 'authFile.json' },
      dependencies: ['setup'],
    },
  ],
});