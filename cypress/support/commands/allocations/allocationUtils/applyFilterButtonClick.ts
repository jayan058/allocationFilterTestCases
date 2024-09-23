Cypress.Commands.add("applyFilterButtonClick", () => {
  cy.get("button").each(($button) => {
    cy.wrap($button)
      .invoke("text")
      .then((buttonText) => {
        if (buttonText == "Apply Filter") {
          cy.wrap($button).click();
        }
      });
  });
});
