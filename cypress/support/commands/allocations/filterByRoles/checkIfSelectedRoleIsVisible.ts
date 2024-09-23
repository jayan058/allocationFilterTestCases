Cypress.Commands.add("checkIfSelectedRoleIsVisible", (roles) => {
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
                roles.forEach((role) => {
                  cy.get(".dropdown-select__control").should("contain", role);
                });
              }
            });
        });
    }
  });
});
