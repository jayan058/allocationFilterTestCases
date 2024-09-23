Cypress.Commands.add("removeAllRoles", () => {
  cy.get(".filter__item").each(($button) => {
    if (
      !$button.hasClass("cursor-pointer") &&
      !$button.hasClass("dropdown-button")
    ) {
      cy.wrap($button)
        .find("span")
        .then((roleElement) => {
          cy.wrap(roleElement)
            .invoke("text")
            .then((roleText) => {
              if (roleText == "Role") {
                cy.wrap($button).click();
                cy.get(".dropdown-select__indicators").click();
                cy.get(".dropdown-button__value")
                  .eq(0)
                  .should("contain.text", `All`);
              }
            });
        });
    }
  });
});
Cypress.Commands.add("removeRole", (roles) => {
  roles.forEach((role) => {
    cy.get(".filter__item").eq(0).click();
    cy.get(".dropdown-select__multi-value")
      .contains(role)
      .siblings(".dropdown-select__multi-value__remove")
      .click();
  });
  cy.get(".filter__item").eq(0).click();
  cy.get(".dropdown-select__multi-value").should("not.exist");
});
