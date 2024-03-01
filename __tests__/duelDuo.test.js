const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:3000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
});

test('See if bot moves from choices to duo', async () => {
  await driver.get("http://localhost:3000");
  await driver.findElement(By.id('draw')).click()
  await driver.findElement(By.id('choices'))
  await driver.findElement(By.className('bot-card'))
  await driver.findElement(By.className('bot-btn')).click()
});

test('draw button should give the id "choices"', async () => {
  await driver.get("http://localhost:3000");
  await driver.findElement(By.id('draw')).click()
  const choices = await driver.findElement(By.id('choices'))
  const displayed = await choices.isDisplayed()
  expect(displayed).toBe(true)
});