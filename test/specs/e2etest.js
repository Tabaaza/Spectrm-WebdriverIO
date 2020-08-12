const LoginPage = require('../pageobjects/login.page');
const Selectors = require('../pageobjects/selectors.page');
const NavigationPage = require('../pageobjects/navigation.page');
const CreatingConvi = require('../pageobjects/createnew.page');



describe('Spectrm Login Page', () => {
    

    it('Should login with valid credentials', () => {
        LoginPage.open();
        LoginPage.login(<username>, <password>);
        expect(Selectors.LogoutSelecotr).toBeExisting();
        expect(Selectors.LogoutSelecotr).toHaveTextContaining(
            'Logout');
        //console.log("Sadly im Waiting 11000");
        console.log("Should login with valid credentials': Completed");
    });
    it('Should navigate to Structure -> Conversation', () => {
        NavigationPage.GoToConversationPage();
        expect(Selectors.CreateNewPageTitle).toBeExisting();
        expect(Selectors.CreateNewPageTitle).toHaveTextContaining(
            'Overview');
        console.log("Should navigate to Structure -> Conversation: Completed");
    });
    it('Should Click on Create New', () => {

        // Sending all the data as string TODO move all data to variable page
        CreatingConvi.CreateNewConvo('Virtual Assistant Shopper - Automated creation.', 'TestTag', "Hi @FirstName ! I'm Glow's virtual shopper assistant.", 
            'How can I help you today?');
        // make popup edit message appear
        expect(Selectors.EditMessagePopupselector).toBeExisting();
        expect(Selectors.EditMessagePopupselector).toHaveTextContaining(
            'Edit Message');
        // Filling the PopUp form
        CreatingConvi.QuickReplyFormFilling();
        //Adding Text to the quick replay
        CreatingConvi.AddMessageToQuickReply();
        // Save the conversation
        CreatingConvi.SaveTheCOnvirsation();
        console.log("Saved now waiting to see!")
    });
    it('Should Have new conversation in Conversation -> Draft ', () => {
        //Make sure we are on the Covirsation page always before run this test 
        NavigationPage.ConversationSelector.click();
        browser.pause(1000)
        // Go to Draft tab
        NavigationPage.GoToDraftTab();
        // Make sure the Conversatio the we created is really exists
        expect(Selectors.FirstDraftConvirsationItem).toHaveTextContaining(
            'Automated creation.');
    });
    it('Should Delete the Automated Conversation ', () => {
        //Make sure we are on the Coversation page always before run this test 
        NavigationPage.ConversationSelector.click();
        // Go to Draft tab
        NavigationPage.GoToDraftTab();
        // Deleting the conversation that we created 
        NavigationPage.DeteleConvirsation();
        // make sure that we delete the conversation
        expect(NavigationPage.DraftTabSelector).toHaveTextContaining(
            'Draft (3)')
    });
    
});


