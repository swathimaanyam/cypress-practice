import loginPage from './pages/loginPage'

describe('login functionality', () => {
    beforeEach(() => {
        cy.visit("/users/log_in")
    })
    it('valid login with ENV variables', () => {
        loginPage.login(Cypress.env('CYPRESS_VALID_USERNAME'), Cypress.env('CYPRESS_VALID_PASSWORD'));
    })
})