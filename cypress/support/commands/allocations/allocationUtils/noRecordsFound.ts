Cypress.Commands.add("noRecordsFound", () => {
  cy.get("body").then(($body) => {
    if (
      $body.find(".empty_module_emptyContainer__message__6c9d7a84").length > 0
    ) {
      cy.get(".empty_module_emptyContainer__message__6c9d7a84").should(
        "be.visible",
      );
    }
  });
});
