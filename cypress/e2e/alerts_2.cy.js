// Cypress.on('uncaught:exception', (err, runnable) => {
//     return false; // Prevents test failure due to cross-origin script errors
// });

describe('Handling Alerts on DemoQA', () => {
    beforeEach(() => {
         // Block requests to external ads or unwanted scripts
    cy.intercept('**/ads/**', { statusCode: 200, body: '' }).as('ads'); // Block ad network requests

        cy.visit('https://demoqa.com/alerts');
    });
    it('Handles a delayed alert', () => {
        // cy.origin('https://demoqa.com', () => {
            cy.wait(7000);
            cy.get('#timerAlertButton').click();

            cy.on('window:alert', (text) => {
                expect(text).to.equal('This alert appeared after 5 seconds');
            });
        });
    });
// });




    // it('Handles a delayed alert without using wait', () => {
    //     cy.origin('https://demoqa.com', () => {
    //         cy.get('#timerAlertButton').click();

    //         // Listen for alert dynamically
    //         cy.on('window:alert', (text) => {
    //             expect(text).to.equal('This alert appeared after 5 seconds');
    //         });
    //     });
    // });
    // it('Handles a confirm alert', () => {
    //   cy.get('#confirmButton').click();
    //   cy.on('window:confirm', () => true); // Accept alert
    //   cy.contains('You selected Ok').should('be.visible');
    // });

    // it('Handles a prompt', () => {
    //   cy.window().then((win) => {
    //     cy.stub(win, 'prompt').returns('Testing Cypress');
    //     cy.get('#promtButton').click();
    //   });
    //   cy.contains('You entered Testing Cypress').should('be.visible');
    // });

