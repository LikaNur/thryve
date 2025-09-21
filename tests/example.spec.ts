import { test, expect } from "@playwright/test";

test("game logic", async ({ page }) => {
  await page.goto("https://thryve-wheat.vercel.app/");

  await page.getByRole("textbox", { name: "Please enter your name" }).click();
  await page
    .getByRole("textbox", { name: "Please enter your name" })
    .fill("Li");
  await expect(page.getByText("Name must be at least 4")).toBeVisible();

  await page
    .getByRole("textbox", { name: "Please enter your name" })
    .fill("Lik");
  await page.getByRole("button", { name: "Start game" }).click();

  await page.getByText("Lik").click();
  await page.getByText("B", { exact: true }).click();
  await page.getByText("Correct: 0 · Errors: 0 ·").click();
  await page.getByText("D", { exact: true }).click();
  await page.getByRole("button", { name: "Match letters" }).click();
  await page
    .getByRole("alert")
    .filter({ hasText: "😔 Didn't match" })
    .isVisible();

  await page.getByRole("button", { name: "Match letters" }).click();
  await page
    .getByRole("alert")
    .filter({ hasText: "😍 You have a match" })
    .isVisible();

  await page.getByText("✅ Correct: 2❌ Errors:").isVisible();

  await page.getByRole("button", { name: "Play again" }).click();
  await page.getByRole("button", { name: "Toggle theme" }).click();
  await page.getByRole("menuitem", { name: "Light" }).click();
  await page.getByRole("button", { name: "Toggle theme" }).click();
  await page.getByRole("menuitem", { name: "Dark" }).click();
});
