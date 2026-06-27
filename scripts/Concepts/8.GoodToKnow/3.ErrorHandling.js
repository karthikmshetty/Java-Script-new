/*
Error handling — when something goes wrong in your code, instead of crashing the whole program,
you catch the error and handle it gracefully
*/

/*
Three blocks — one line each:

try → "run this code, it might fail"
catch → "if it fails, handle it here"
finally → "always run this no matter what" (cleanup code)

*/


async function clickButton(page) {
  try {
    await page.click('#submit-btn');
    console.log("Button clicked successfully");

  } catch (error) {
    console.log("Button not found:", error.message);

  } finally {
    await page.screenshot({ path: 'result.png' }); // always take screenshot
  }
}