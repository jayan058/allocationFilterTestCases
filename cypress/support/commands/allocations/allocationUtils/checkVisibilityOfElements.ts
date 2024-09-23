Cypress.Commands.add("checkVisibilityOfElements", () => {
  cy.fixture("allocations/elementsForFIlteringAllocations").then((data) => {
    const { visibleElements, specialElement } = data;
    visibleElements.forEach((selector) => {
      cy.get(selector).should("be.visible");
    });
    cy.get(specialElement.selector)
      .should("be.visible")
      .and("have.length", specialElement.length);
  });
});
