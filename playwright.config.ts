import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  
  // Reporter to use. Use List reporter for step output, JSON for a detailed report
  reporter: [
    ['list'], // Step-by-step output in the console
    ['json', { outputFile: 'test-report.json' }] // Detailed JSON report
  ],

  // Shared settings for all the projects below.
  use: {
    // Base URL
    baseURL: 'https://highlifeshop.com/',

    // Locale setting for tests
    locale: 'en-GB',

    // Collect trace when retrying the failed test
    trace: 'on-first-retry',

    // Screenshot on failure
    screenshot: 'only-on-failure',

    // Launch options
    launchOptions: {
      headless: true, // Run tests headless
      timeout: 5000, // Launch timeout of 5 seconds
    },

    // Viewport size for all tests
    viewport: { width: 1280, height: 720 },
  },

  // Configure projects for major browsers
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  // Timeout for each test
  timeout: 60000, // Maximum timeout for each test is 60 seconds

  // Expect timeout
  expect: {
    timeout: 20000, // Timeout for expect assertions is 20 seconds
  },
});
