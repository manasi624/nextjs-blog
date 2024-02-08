import { test, expect } from "@playwright/test";
import { autoflow } from "@autoflowlabs/playwright"
import Login from "@/app/login/page";

const FRONT_END_BASE = "https://myblog-vert-zeta.vercel.app";



const userEmail = "admin2@example.com";
const userPassword = "admin123";


test.describe("Blog App", () => {
  test("Login with valid credentials", async ({ page }) => {
    await page.goto(`${FRONT_END_BASE}/login`);
    await autoflow(`Fill the 'email' with a ${userEmail}'`, { page, test }, {cacheBypass:true, flowType: "action"});
    await autoflow(`Fill the 'password' with ${userPassword}'`, { page, test });
    await autoflow(`click on the Login button`, { page, test });
    await page.waitForTimeout(5000);
    await page.waitForURL(`${FRONT_END_BASE}/posts`);
  });

  test("Restricted Access page", async ({page}) => {
    await page.goto(`${FRONT_END_BASE}/posts`);
    await page.waitForTimeout(1000);
    const notification = await autoflow("is there Login Needed message on screen ?", {page, test}, {flowType: "assert"});
    expect(notification).toBe(true);
    await page.goto(`${FRONT_END_BASE}/login`);
  })

  test("Login with invalid credentials", async ({ page }) => {
    await page.goto(`${FRONT_END_BASE}/login`);
    await autoflow(`Fill the 'email' with 'invalidemail@example.com'`, { page, test }, { cacheBypass: true, flowType: "action" });
    await autoflow(`Fill the 'password' with 'invalidpassword'`, { page, test });
    await autoflow(`Click on the Login button`, { page, test });

    await page.waitForTimeout(1000);

    await page.waitForURL(`${FRONT_END_BASE}/login`)
    const errorMsg = await autoflow("is there Invalid Credentials message or popup on screen ?", { page, test }, {flowType: "assert"});
    expect(errorMsg).toEqual(true);

  })
});
