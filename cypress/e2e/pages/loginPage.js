class loginPage{
    elements = {
        email: () => cy.get("#user_email"),
        password: () => cy.get("#password-input"),
        submitButton: ()=> cy.get(".btn-primary ")
    }

    login(email,password){
        this.elements.email().type(email);
        this.elements.password().type(password, {log : false});
        this.elements.submitButton().should('not.be.disabled').click()
    }
}
module.exports= new loginPage();