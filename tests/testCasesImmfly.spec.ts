import { test, expect } from '@playwright/test';
import { sortByOptions } from 'utils/locators';

test.describe("Tests cases for IMMFLY", () => {
  // Use beforeEach to set up the page for each individual test
    test.beforeEach(async ({ page }) => {
    // Go to the webpage
    await page.goto('cafe/'); 
    // Accept the cookies
    await expect(page
    .getByRole('button', {name: "ALLOW ALL"})
    ).toBeVisible();
    await page
    .getByText("ALLOW ALL")
    .click();
    // Waiting on the load state
    await page.waitForSelector('.loading-mask', {state: 'hidden'});
    // Verify that the Sort By is visible
    await 
    expect(page
        .locator('ul')
        .filter({hasText:'Default'}))
        .toBeVisible();
    // Click on it
    await page
    .locator('ul')
    .filter({hasText:'Default'})
    .click();
});

test.afterEach(async ({ page }) => {
    // Close the page after each test
    await page.close();
});

test("Verify that the sort by dropdown contains the proper values", async ({ page }) => {
    // Verify that the options are present in the dropdown
    for (const option of sortByOptions) {
        await expect(page
            .locator('li', { hasText: option }))
            .toBeVisible();
    }
});

test('Verify that after selecting one of the options, the results are displayed properly', async ({page}) => {
     // Choose the specific option
     const lowerToHigherPrice = sortByOptions[3]; // This is 'Price Low to High'
    
     // Click on the option dynamically
    await page
    .locator('li', { hasText: lowerToHigherPrice })
    .click();
    
    // Wait for the new option to load
    await page.waitForSelector('.loading-mask', {state: 'hidden'});
    
    // Verify that the selection is correct
    await expect(page
        .locator('ul', { hasText: lowerToHigherPrice }))
        .toBeVisible();

    // Locator for the price values
    const priceLocators = page.locator('.price-wrapper');

    // Extract the price values from each of the price-wrapper elements
    const prices = await priceLocators.evaluateAll(elements =>
        elements
            .map(element => {
                const price = element.getAttribute('data-price-amount');
                const priceValue = price ? parseFloat(price) : NaN;
                return isNaN(priceValue) || priceValue === 0 ? null : priceValue;
            })
            // Filtering that we are not getting neither a '0' or string
            .filter(price => price !== null)
    );

    // Ensure there is at least one valid price
    await expect(prices.length).toBeGreaterThan(0);

    // Find the first price (it will be at index 0)
    const firstPrice = prices[0];

    // Find the minimum price in the list
    const minPrice = Math.min(...prices);
    
    // Assert that the first price is the lowest price
    await expect(firstPrice).toBe(minPrice);
});
});