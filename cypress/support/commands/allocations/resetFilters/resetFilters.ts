Cypress.Commands.add("resetFilters", () => {
  cy.get("button").each(($button) => {
    cy.wrap($button)
      .invoke("text")
      .then((buttonText) => {
        if (buttonText == "Reset") {
          cy.wrap($button).click();
        }
      });
  });
});
