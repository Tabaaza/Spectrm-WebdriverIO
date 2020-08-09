/**
 * sub page containing specific selectors and methods for a specific page
 */
class Navigation {
    /**
     * define selectors using getter methods
     */
    get StructureSelector () { return $('//*[@id=\"navigation\"]/s-navigation/div/ul/li[2]/s-navigation-item/div[1]/span') }
    get ConversationSelector () { return $('//*[@id="navigation"]/s-navigation/div/ul/li[2]/s-navigation-item/div[2]/ul/li[1]') }
    get DraftTabSelector () { return $('//*[@id="module-smessageanchor-overview"]/div/div[3]/div[2]/div/md-nav-bar/div/nav/ul/li[2]')}
    get DeteleConvirsationSelector () { return $('//*[@id="module-smessageanchor-overview"]/div/div[3]/s-list/div/div[3]/div/div[2]/div[5]/div/ng-include/span/span/button[3]')}
    get ConfirmDeleteSelector () { return $('//html/body/div[8]/md-dialog/md-dialog-actions/button[2]')}

    /**
     * a method to encapsule automation code to interact with the page
     */
    GoToConversationPage () {
        this.StructureSelector.click()
        browser.pause(700)
        this.ConversationSelector.click()
        browser.pause(2000)
        
    }
    GoToDraftTab (){
        this.DraftTabSelector.click()
        // wait to load
        browser.pause(2000)
    }
    DeteleConvirsation(){
        this.DeteleConvirsationSelector.click();
        browser.pause(700)
        this.ConfirmDeleteSelector.click()
        browser.pause(2500)
    }

}

module.exports = new Navigation();
