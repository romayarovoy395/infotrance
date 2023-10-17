// @ts-check
const { test, expect } = require('@playwright/test');

test('login__auditor', async ({ page }) => {
  await page.goto('https://certification-test.stg.disoft.dev/login');
  await page
    .getByLabel('Електронна адреса')
    .fill('secretary@certification.test.ua');
  await page.getByLabel('Пароль').nth(0).fill('dianetdev');
  await page.getByText('Увійти').click();
  await expect(page).toHaveURL(
    'https://certification-test.stg.disoft.dev/statements'
  );
  await page.getByText('Створити заявку').click();
  await expect(page).toHaveURL(
    'https://certification-test.stg.disoft.dev/statements/create'
  );
});
