Cypress.Commands.add("filterByName", (query: string) => {
  cy.typeInputName(query);
  cy.wait(1000); // Wait for search results to load
  cy.navigateAndCheckAllPages(query);
});
