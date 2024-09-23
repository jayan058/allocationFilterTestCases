Cypress.Commands.add("selectFromDropdown", (dropdownLabel, expectedValue) => {
  cy.get(`span.dropdown-button__label:contains(${dropdownLabel})`)
    .parents(".filter__item")
    .find("button")
    .click();
  cy.get(".dropdown-menu").contains(expectedValue).click();
  cy.applyFilterButtonClick();
});
