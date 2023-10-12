// @ts-check
const { test, expect } = require('@playwright/test');

test('first__Test', async ({ page }) => {
  await page.goto('https://certification-test.stg.disoft.dev/login');
  await page
    .getByLabel('Електронна адреса')
    .fill('secretary@certification.test.ua');
  await page.getByLabel('Пароль').fill('dianetdev');
  await page.locator('button').click();
});
