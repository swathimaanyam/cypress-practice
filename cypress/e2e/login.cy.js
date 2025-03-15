import loginPage from './pages/loginPage'
import { validUser } from '../fixtures/users.json'

describe('login functionality', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl') + "/users/log_in")
    })
    // it('check accessibility violations', () =>{
    //     cy.injectAxe()
    //     cy.checkA11y()
    // })

    it('valid login with ENV variables', () => {
        // loginPage.login(Cypress.env('email'), Cypress.env('password'));
        cy.get('input[type="checkbox"]').first()//.debug()
        // .contains(" Show password")
        .trigger('mousedown').debug()
    })

    it('valid login with fixtures', () => {
        cy.fixture('users').then((data) => {
            const { email, password } = data.validUser;
            cy.log(email) //TO LOG DATA TO TEST RUNNER ONLY
            cy.window().then(win => win.console.log('hi')); // TO LOG DATA TO BROWSER LOG
            loginPage.login(email, password);
            // cy.url().should("contain", "/member");
        })
    })
    it('valid login using intercept function', () => {
        cy.viewport('iphone-x');
        cy.intercept('GET', '**/users/log_in').as('x');
        cy.visit(Cypress.env('baseUrl') + "/users/log_in")
        loginPage.login(Cypress.env('email'), Cypress.env('password'))
        // cy.wait('@x').its(response.statusCode).should('eq',200); - not working   
        cy.wait('@x').then((data) => {
            expect(data.response.statusCode).to.eq(200);
        });
    })

    it('invalid login with fixtures', () => {
        cy.fixture('users').then((data) => {
            const { email, password } = data.invalidUser;
            loginPage.login(email, password);
            cy.get("#alert_error").should('be.visible');
        })
    })

    // it.only('Sends a test email after execution', () => {
    //     cy.task('sendEmail', {
    //       to: '***@***.com',
    //       subject: 'Cypress Test Completed',
    //       text: 'Your Cypress test has finished running successfully.',
    //     }).then((response) => {
    //       cy.log(response);
    //     });
    //   });
})