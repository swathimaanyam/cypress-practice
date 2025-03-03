// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("checkA11yWithoutFail", () => {
    cy.checkA11y(null, null, (violations) => {
      if (violations.length > 0) {
        cy.task("log", `${violations.length} accessibility violation(s) detected:`);
  
        violations.forEach((v) => {
          cy.task("log", `- ${v.id}: ${v.impact} - ${v.description}`);
          cy.task("log", `  Affected elements: ${v.nodes.map(node => node.target).join(", ")}`);
        });
  
        // Prevent failure by using cy.wrap instead of assertions
        cy.wrap(null).then(() => {
          Cypress.log({
            name: "A11y Check",
            message: `${violations.length} violations found`,
            consoleProps: () => violations,
          });
        });
      }
    });
  });
  