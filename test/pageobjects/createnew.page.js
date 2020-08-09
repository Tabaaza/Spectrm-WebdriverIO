/**
 * sub page containing specific selectors and methods for a specific page
 */
class CreateNew {
    /**
     * define selectors using getter methods
     */

    get CreateNewButtonSelector () { return $('//*[@id="module-smessageanchor-overview"]/div/div[3]/div[1]/div/div') }
    get ConvoTitleTextboxSelector () { return $('//*[@id="message-queue"]/div[1]/div[1]/div[1]/div/h2')}
    get TagsTextBoxSelector () { return $('//html/body/div[4]/div[2]/div[2]/div/div/div[1]/div[1]/div[2]/div/div/s-tags/div/md-chips/md-chips-wrap/div/div/md-autocomplete/md-autocomplete-wrap/input')}
    get AddMsgTextBoxSelector () { return $('//*[@id="message-input-area"]/div/ng-include/div/div[1]')}
    get VariablePickerSelector () { return $('//*[@id="message-input-area"]/div/ng-include/div/div[2]/span[1]/i')}
    get SelectVariableSlector () { return $('//*[@id="panel-anchor"]/div/div/div/ul/li[1]/ng-include/div')}
    get AddMsgButtonSelector () { return $('//*[@id="creator-container-actions"]/s-message-collection-action-box/div/div/s-message-input-box/div/div[2]/div/div[2]/button/span')}
    get InsertQuickActionSelector () { return $('//html/body/div[4]/div[2]/div[2]/div/div/div[1]/s-message-log/div/s-message/div[4]/div[2]/div/div/md-fab-speed-dial/md-fab-trigger/button')}
    get QuickReplaySelector () { return $('//html/body/div[4]/div[2]/div[2]/div/div/div[1]/s-message-log/div/s-message/div[4]/div[2]/div/div/md-fab-speed-dial/md-fab-actions/div[3]/button/md-icon')}
    
    
    // Edit Message Popup form Selectors
    get QRTitletextBoxselector () { return $('//*[@id="edit-message"]/form/div[2]/div/div/div[1]/s-dynamic-form/s-dynamic-form-row/section/ng-transclude/s-cta-collection/div/div[1]/ul/li[1]/div/div[2]/div/s-cta/div/section[1]/div[2]/div/ng-include/div[1]/div[1]')}
    get QRTitletextBoxselector2 () { return $('//*[@id="edit-message"]/form/div[2]/div/div/div[1]/s-dynamic-form/s-dynamic-form-row/section/ng-transclude/s-cta-collection/div/div[1]/ul/li[2]/div/div[2]/div/s-cta/div/section[1]/div[2]/div/ng-include/div[1]/div[1]')}
    get QRTitletextBoxselector3 () { return $('//*[@id="edit-message"]/form/div[2]/div/div/div[1]/s-dynamic-form/s-dynamic-form-row/section/ng-transclude/s-cta-collection/div/div[1]/ul/li[3]/div/div[2]/div/s-cta/div/section[1]/div[2]/div/ng-include/div[1]/div[1]')}
    get QRActionDropDownlistSelector () { return $('//html/body/div[2]/div[2]/md-dialog/form/div[2]/div/div/div[1]/s-dynamic-form/s-dynamic-form-row/section/ng-transclude/s-cta-collection/div/div[1]/ul/li/div/div[2]/div/s-cta/div/section[2]/div[2]/s-action-collection/div[2]/s-action/div[1]/s-select/div/div/md-select/md-select-value/span[1]')}
    get QRMessageTextBoxSelector () { return $('//html/body/div[2]/div[2]/md-dialog/form/div[2]/div/div/div[1]/s-dynamic-form/s-dynamic-form-row/section/ng-transclude/s-cta-collection/div/div[1]/ul/li/div/div[2]/div/s-cta/div/section[2]/div[2]/s-action-collection/div[2]/s-action/div[2]/ng-switch/div/div[2]/s-message-select/s-select/div/div/div/ng-include/md-autocomplete/md-autocomplete-wrap/input')}
    get QRAddButtonReplySelector () { return $('//*[@id="edit-message"]/form/div[2]/div/div/div[1]/s-dynamic-form/s-dynamic-form-row/section/ng-transclude/s-cta-collection/div/div[1]/ul/li/div/div[2]/div/s-cta/div/section[2]/div[2]/s-action-collection/div[2]/div/button')}
    get QRAddNewQuickReplySelector () { return $('//html/body/div[2]/div[2]/md-dialog/form/div[2]/div/div/div[1]/s-dynamic-form/s-dynamic-form-row/section/ng-transclude/s-cta-collection/div/div[2]/a')}
    get QRCacelButtonSelector () { return $('//html/body/div[2]/div[2]/md-dialog/form/div[3]/div[2]/button[1]')}
    get QRAddButtonFormSelector () { return $('//*[@id="edit-message"]/form/div[3]/div[2]/button[2]')}


    // Quick Reply Selector
    get FirstQuickReplaySelector () {return $('//html/body/div[4]/div[2]/div[2]/div/div/div[1]/s-message-log/div/s-message/div[5]/s-message-part/div/ng-switch/s-content-group/ng-switch/s-cta-collection-view/div[1]/div[1]')}
    get SecondQuickReplaySelector () {return $('//html/body/div[4]/div[2]/div[2]/div/div/div[1]/s-message-log/div/s-message/div[5]/s-message-part/div/ng-switch/s-content-group/ng-switch/s-cta-collection-view/div[1]/div[2]')}
    get ThirdQuickReplaySelector () {return $('//html/body/div[4]/div[2]/div[2]/div/div/div[1]/s-message-log/div/s-message/div[5]/s-message-part/div/ng-switch/s-content-group/ng-switch/s-cta-collection-view/div[2]/div[3]')}
    get QuickReplySmallArrowRight () { return $('//html/body/div[4]/div[2]/div[2]/div/div/div[1]/s-message-log/div/s-message/div[5]/s-message-part/div/ng-switch/s-content-group/ng-switch/s-cta-collection-view/div[3]')}

    // Save Button Selector
    get SaveButtonSelector () { return $('//*[@id="creator-container-actions"]/s-message-collection-action-box/div/div/s-message-input-box/div/div[2]/div/div[2]/s-split-button')}

    /**
     * a method to encapsule automation code to interact with the page
     */
    CreateNewConvo (ConvoName, Tags, msg1, msg3 ) {
        this.CreateNewButtonSelector.click();
        browser.pause(1000);
        this.ConvoTitleTextboxSelector.clearValue();
        this.ConvoTitleTextboxSelector.setValue(ConvoName);
        this.TagsTextBoxSelector.setValue(Tags);
        this.AddMsgTextBoxSelector.setValue(msg1);
        browser.pause(300);
        this.AddMsgButtonSelector.click();
        browser.pause(300);
        this.AddMsgTextBoxSelector.setValue(msg3);
        this.AddMsgButtonSelector.click();

        // Insert Quick Action
        this.InsertQuickActionSelector.moveTo(); // moving the mouse to hover over the "+" floating button to enable the list.
        browser.pause(300)
        this.QuickReplaySelector.click()
        browser.pause(1500);

        
    }

    QuickReplyFormFilling () { 
        // Will be very basic for this time, we could use some logic to fill it with diffrenet cases
        // Adding frist quick action
        this.QRTitletextBoxselector.setValue('Show new trends');
        this.QRAddButtonReplySelector.click();
        browser.pause(500);
        // this.QRActionDropDownlistSelector.selectByIndex(<Number>) or this.this.QRActionDropDownlistSelector.selectByVisibleText("Trigger a message")
        // Adding 2nd quick action
        this.QRAddNewQuickReplySelector.click();
        browser.pause(1500);
        this.QRTitletextBoxselector2.setValue('Most wanted!');
        this.QRAddButtonReplySelector.click();
        // Adding 3rd quick action
        this.QRAddNewQuickReplySelector.click();
        browser.pause(1000);
        this.QRTitletextBoxselector3.setValue('Browse promotions!');
        this.QRAddButtonReplySelector.click();
        // Click on Add after to finish editing and subit
        this.QRAddButtonFormSelector.click();
        browser.pause(1500);
    

    }

    AddMessageToQuickReply () {
        
        this.FirstQuickReplaySelector.click();
        this.AddMsgTextBoxSelector.setValue("Browse promotions Message");
        this.AddMsgButtonSelector.click();
        this.SecondQuickReplaySelector.click();
        this.AddMsgTextBoxSelector.setValue("Most wanted Message");
        this.AddMsgButtonSelector.click();
        //this.QuickReplySmallArrowRight.click();
        //browser.pause(700);
        this.ThirdQuickReplaySelector.click();
        this.AddMsgTextBoxSelector.setValue("Great! These are the summer essentials for this year! ☀️");
        this.AddMsgButtonSelector.click();
        browser.pause(1500);


    }

    SaveTheCOnvirsation () {
        this.SaveButtonSelector.click();
        browser.pause(1500);
    }

}

module.exports = new CreateNew();
