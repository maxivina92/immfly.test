# IMMFLY Playwright Test Automation
IMMFLY Playwright Test Automation
This repository contains Playwright test cases written in TypeScript for IMMFLY. It includes tests for sorting product lists by various options (e.g., price low to high, product name). The tests include a UI assertion followed by a small verification of sorting.

Prerequisites
Before running the tests, make sure you have the following installed:

Node.js (version 16 or later recommended)
npm (comes with Node.js)
Playwright
Installation
Follow these steps to get the project up and running:

Clone the repository:

git clone https://github.com/maxivina92/immfly.test.git
cd <project_directory>
Install dependencies:

npm install
This will install

Playwright
TypeScript
Other necessary testing dependencies
Install Playwright Browsers:

 npx playwright install
Running the Tests
Run Tests in Headless Mode
Headless mode means that the browser runs in the background without opening a UI. To run the tests in headless mode, use the following command:

npx playwright test --project=chromium --headless
Run Tests with a Browser Window (Non-headless Mode)
If you want to see the tests run in a browser window (non-headless mode), use the following command:

npx playwright test --project=chromium

This will install

- Playwright
- TypeScript
- Other necessary testing dependencies

3. **Install Playwright Browsers**:

   ```bash
    npx playwright install

## Running the Tests

### Run Tests in Headless Mode

Headless mode means that the browser runs in the background without opening a UI. To run the tests in headless mode, use the following command:

    npx playwright test --project=chromium --headless

## Run Tests with a Browser Window (Non-headless Mode)

If you want to see the tests run in a browser window (non-headless mode), use the following command:

```bash
npx playwright test --project=chromium

