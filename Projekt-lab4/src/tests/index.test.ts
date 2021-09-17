import { Fibonacci } from ".";

const fib = new Fibonacci();
const fib0 = fib.calculate(0);
const fib69 = fib.calculate(69);

if (fib0 === 0) {
}

// import * as puppeteer from "puppeteer";
// async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//   await page.goto("http://localhost:8080/");
//   await page.screenshot({ path: "screen.png" });
//   await page.waitForSelector("#mat-input-0");
//   await browser.close();
// };
