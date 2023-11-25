// @ts-check
const { test, expect } = require('@playwright/test');

test('login__auditor__validate__vincode', async ({ page }) => {
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
  await page.locator('.otp-field-box--0').fill("W")
  await page.locator('.otp-field-box--1').fill("B")
  await page.locator('.otp-field-box--2').fill("A")
  await page.locator('.otp-field-box--3').fill("G")
  await page.locator('.otp-field-box--4').fill("T")
  await page.locator('.otp-field-box--5').fill("6")
  await page.locator('.otp-field-box--6').fill("1")
  await page.locator('.otp-field-box--7').fill("0")
  await page.locator('.otp-field-box--8').fill("0")
  await page.locator('.otp-field-box--9').fill("0")
  await page.locator('.otp-field-box--10').fill("9")
  await page.locator('.otp-field-box--11').fill("D")
  await page.locator('.otp-field-box--12').fill("3")
  await page.locator('.otp-field-box--13').fill("9")
  await page.locator('.otp-field-box--14').fill("8")
  await page.locator('.otp-field-box--15').fill("3")
  await page.locator('.otp-field-box--16').fill("1")
  await page.getByRole('button', {name:'Далі'}).click();
  await expect(page.getByText('Невірний формат')).toBeHidden();
});
test('login__auditor__unvalidate__vincode', async ({ page }) => {
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
  await page.locator('.otp-field-box--0').fill("!")
  await page.locator('.otp-field-box--1').fill("$")
  await page.locator('.otp-field-box--2').fill("%")
  await page.locator('.otp-field-box--3').fill("$")
  await page.locator('.otp-field-box--4').fill("&")
  await page.locator('.otp-field-box--5').fill(" ")
  await page.locator('.otp-field-box--6').fill(" ")
  await page.locator('.otp-field-box--7').fill(" ")
  await page.locator('.otp-field-box--8').fill(" ")
  await page.getByRole('button', {name:'Далі'}).click();
  await expect(page.getByText('Невірний формат')).toBeVisible();
});
