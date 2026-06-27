/*
 Classes are blueprints for creating objects. 'constructor' initializes the object, 
 'extends' allows one class to inherit from another, and 'super' calls the parent constructor. 
 
 In Playwright, I use classes heavily in the Page Object Model — 
 each page has its own class with locators and actions, making tests clean and reusable."

*/

/*
   ---- NOTE ----
   In JS, file name matching class name is just a clean convention, not a rule. 
   But always follow it in your project — it makes your code easy to navigate and
    interviewers will see you follow best practices

*/


// Now we are learning inheritence , constructor , objects etc..


//Basepage
 export default class BaseClass {

    constructor(page){
     this.page = page;
    }

    async navigateToUrl(url){
      await this.page.goto(url);
    }
 }

// Child class for Login page
class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = '#username';
    this.passwordInput = '#password';
    this.loginButton   = '#login-btn';
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}

// Using it in test

// import LoginPage from './LoginPage.js';    you can import like this in test spec
const loginPage = new LoginPage(page);
await loginPage.navigate('https://myapp.com/login');
await loginPage.login('admin', 'password123');




// ----------------  Very Important Note -------------------
// If you export with module.exports → import with require
module.exports = BasePage;
const BasePage = require('./BasePage');  // ✅

// If you export with export default → import with import
export default class BasePage {}
import BasePage from './BasePage';       // ✅

// NEVER mix them
export default class BasePage {}
const BasePage = require('./BasePage');  // ❌ wrong



/* 'function' keyword rule — simple:

----- Where -----                 ----- How to write -----
Outside a class (standalone)          async function navigateToUrl()
Inside a class (method)               async navigateToUrl()

*/

