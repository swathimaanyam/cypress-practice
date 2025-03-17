describe('Cookie Handling Test - SauceDemo', () => {

    beforeEach(() => {
      // Visit the login page before each test
      cy.visit('https://www.saucedemo.com/');
    });
  
    it('Should verify cookies are set after login', () => {
      // Enter valid credentials and log in
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
  
      // Verify URL changed to dashboard
      cy.url().should('include', '/inventory.html');
  
      // Verify authentication session cookie exists
      cy.getCookies().should('not.be.empty'); // Check that the cookies exist
      cy.getCookie('session-username') // Verify the specific session cookie - Visit dev tools-Applications-Cookies to check the cookie value
        .should('exist')
        .and('have.property', 'value', 'standard_user'); // Ensure correct user

         // Refresh the page
    cy.reload();

    // Verify session is still maintained after refresh
    cy.url().should('include', '/inventory.html');
    cy.getCookie('session-username').should('exist');  
    });
  
    it('Should clear cookies after logout', () => {
      // Login first
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
  
      // Log out
      cy.get('#react-burger-menu-btn').click();
      cy.get('#logout_sidebar_link').click();
  
      // Verify user is redirected to login page
      cy.url().should('include', '/');
  
      // Verify all cookies are cleared
      cy.getCookies().should('be.empty');
    });
  
  });
  