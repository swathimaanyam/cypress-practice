import 'cypress-axe';

describe('WCAG Compliance Test', () => {
  beforeEach(() => {
    //   cy.visit('https://dequeuniversity.com/demo/mars/'); // Replace with your app URL
    cy.visit('https://www.w3.org/WAI/demos/bad/');
    cy.injectAxe(); // Injects axe-core into the page
  });

  it('Should have no WCAG violations', () => {
    // cy.checkA11y();
    cy.checkA11yWithoutFail()
  });
});


