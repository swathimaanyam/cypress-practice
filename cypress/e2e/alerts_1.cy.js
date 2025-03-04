/* Cypress automatically handles alerts and confirmations by clicking "OK" or "Cancel." 
    We can customize the behavior with cy.on('window:alert'), cy.on('window:confirm'), or cy.stub() for specific actions.*/
describe('Tests to handle the alerts', () => {
    it('Test to handle a JavaScript alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get('button[onclick="jsAlert()"]').click(); // click alert btn
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('I am a JS Alert'); // Validate alert boxtext
        });
    });

    it('Test to handle a JavaScript confirm box', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get('button[onclick="jsConfirm()"]').click();
        cy.on('window:confirm', (confirmText) => {
            expect(confirmText).to.equal('I am a JS Confirm'); // Validate the confirmation alert text
            return true; // Accept the confirm box
        });
        cy.get("#result").should('have.text', "You clicked: Ok");
    });
});
