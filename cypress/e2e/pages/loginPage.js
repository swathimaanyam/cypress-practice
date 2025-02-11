class loginPage{
    elements = {
        email: () => cy.get("#user_email"),
        password: () => cy.get("#password-input"),
        submitButton: ()=> cy.get(".btn-primary ")
    }

    login(email,password){
        this.elements.email().type(Cypress.env('CYPRESS_VALID_USERNAME'));
        this.elements.password().type(Cypress.env('CYPRESS_VALID_PASSWORD'), {log : false});
        this.elements.submitButton().click()
    }
}
module.exports= new loginPage();