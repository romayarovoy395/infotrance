const { test, expect } = require('@playwright/test');

test('select__select', async({page})=>{
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
      'https://certification-test.stg.disoft.dev/statement/create'
    );
    await page.getByTestId('list-67').click();
})