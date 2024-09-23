Cypress.Commands.add("selectRoles", (roles = []) => {
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
              roles.forEach((role) => {
                if (roleText == "Role") {
                  cy.wrap($button).click();
                  cy.contains(".dropdown-select__option", role).click();
                  cy.applyFilterButtonClick();
                  cy.wait(1000);
                }
              });
              cy.get(".dropdown-button__value")
                .eq(0)
                .should("contain.text", `${roles.length} Selected`);
            });
        });
    }
  });
});
