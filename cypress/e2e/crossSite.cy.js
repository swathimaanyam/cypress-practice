
//   describe("Test to copy one site search string to another", () => {
//     it("Copy search string", () => {
//       cy.visit("https://www.amazon.com/");
//       cy.get('#nav-bb-search')
//     //   cy.get('.nav-search-field')
//               .type("shoes")
//               cy.get('.nav-bb-button')
//               .click()
//         // cy.get("#nav-search-submit-button").click();
//         // // Continue to search results
//         cy.get('[data-csa-c-content-id="|pill/1/1/1"] > .a-spacing-micro > .a-list-item > .a-link-normal > .a-size-base') // Replace with the actual search results selector
//             .should('be.visible')
//             .invoke('text')
//             .then((text) => {
//                 cy.log("Search Results Text: " + text);
//             });
//             cy.visit("https://www.myntra.com/")
//             cy.get("data-reactid='873'").type("shoes")
//     })
// })

describe("Amazon Search Test", () => {
    it("Searches for shoes on Amazon", () => {
        cy.visit("https://www.amazon.com/");
        // Type "shoes" in the search bar and submit
        cy.get("#twotabsearchtextbox", { timeout: 20000 }).should("be.visible").type("shoes{enter}");

        // Verify search results are displayed
        cy.url().should("include", "k=shoes"); // Verify that the search has the correct query params
        cy.get('[data-component-type="s-search-result"]').should("be.visible"); // Ensure search results appear

        // Continue to search results
        cy.get('[data-csa-c-content-id="|pill/1/1/1"] > .a-spacing-micro > .a-list-item > .a-link-normal > .a-size-base') // Replace with the actual search results selector
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                cy.log("Search Results Text: " + text);
            });

        // cy.visit("https://www.myntra.com/")
        //             cy.get("data-reactid='873'").type("shoes")
        // cy.origin("https://www.myntra.com", { timeout: 20000 }, () => {
        //     cy.visit("/", { timeout: 20000 });
        // })
    });
});
