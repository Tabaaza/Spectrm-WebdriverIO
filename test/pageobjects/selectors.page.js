const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SelectorePage extends Page {
    /**
     * define selectors using getter methods 
     * Mostly used to verify existence of selector
     */
    get LogoutSelecotr () { return $('//*[@id="navigation"]/s-navigation/div/div[2]/a[1]/span') }
    get CreateNewPageTitle () { return $('//*[@id="header"]/div/s-headline/h2')}
    get MsgInConvoSelecotr () { return $('//html/body/div[4]/div[2]/div[2]/div/div/div[1]/s-message-log/div/s-message/div[2]/s-message-part/div/ng-switch/s-content-group/ng-switch/div/span/div/span')}
    get EditMessagePopupselector () { return $('//*[@id="edit-message"]/form/div[1]')}     
    get FirstDraftConvirsationItem  () { return $('//*[@id="module-smessageanchor-overview"]/div/div[3]/s-list/div/div[3]/div/div[2]/div[2]/div/ng-include/span/span/span/span')}                            
}

module.exports = new SelectorePage();
