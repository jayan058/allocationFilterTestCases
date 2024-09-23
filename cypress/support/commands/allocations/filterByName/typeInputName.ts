Cypress.Commands.add("typeInputName", (query: string) => {
  cy.get("input[placeholder='Search by Name']").type(query).type("{enter}");
});
