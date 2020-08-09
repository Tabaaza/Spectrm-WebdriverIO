const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('//*[@id="module-ssecurity-login"]/div/form/section[1]/div/s-text-input/div/span[1]/input') }
    get inputPassword () { return $('//*[@id="module-ssecurity-login"]/div/form/section[2]/div/s-text-input/div/span[1]/input') }
    get btnSubmit () { return $('//*[@id="module-ssecurity-login"]/div/form/section[3]/div/button/span') }

    /**
     * a method to encapsule automation code to interact with the page
     */
    login (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
        browser.pause(11000) // waiting the Application to be loaded, yeah it's flaky could be handled with better understanding of the software backend. 
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
