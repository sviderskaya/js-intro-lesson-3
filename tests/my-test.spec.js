const { test, expect } = require("@playwright/test");

test("main page", async ({ page }) => {
  await page.goto("https://www.google.com/");

  await expect(page.getByRole("img", { name: "Google" })).toBeVisible();

  await expect(page.getByLabel("Увійти")).toBeVisible();
});

test('Search for "Playwright" and check search results', async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.fill('[name="q"]', "Playwright");
  await page.press('[name="q"]', "Enter");
  await expect(
    page.getByRole("link", { name: "Playwright: Fast and reliable" })
  ).toBeVisible();
});

test("search for Playwringht", async ({ page }) => {
  await page.goto("https://www.google.com/");

  await page
    .getByLabel("Пошук", { exact: true })
    .pressSequentially("Playwright");

  await page.getByLabel("Пошук", { exact: true }).press("Enter");

  await expect(
    page.getByRole("link", { name: "Playwright: Fast and reliable" })
  ).toBeVisible();
});

test("open Google doodles page", async ({ page }) => {
  await page.goto("https://www.google.com/");

  await page.getByRole("button", { name: "Пошук Google" }).press("Enter");

  await page.getByRole("button", { name: "Мені пощастить" }).click();

  await expect(
    page.getByRole("link", { name: "Google doodles" })
  ).toBeVisible();
});

test("search by image link", async ({ page }) => {
  await page.goto("https://www.google.com/");

  await page.getByLabel("Пошук за зображенням").click();

  await page.getByPlaceholder("Paste image link").click();

  await page
    .getByPlaceholder("Paste image link")
    .pressSequentially(
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fharshasuraweera.medium.com%2Fintroduction-to-microsoft-playwright-and-its-features-part-0-1acde194fcce&psig=AOvVaw3AY74OhQ-vaoF9M4KewLWf&ust=1702664244391000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjl693Ej4MDFQAAAAAdAAAAABAD"
    );

  await expect(page.getByRole("button", { name: "Search" })).toBeVisible();

  await page.getByRole("button", { name: "Search" }).click({ force: true });
});
