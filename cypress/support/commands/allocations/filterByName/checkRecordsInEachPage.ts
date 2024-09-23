Cypress.Commands.add("checkRecordsOnPage", (query: string) => {
  cy.get(".lf-table__row").each(($row) => {
    cy.wrap($row)
      .find(".employee__fullname")
      .then((employeeNameContainer) => {
        cy.wrap(employeeNameContainer)
          .invoke("text")
          .then((actualName) => {
            const actualNameLower = actualName.toLowerCase();
            const queryLower = query.toLowerCase();

            expect(actualNameLower).to.include(queryLower);
          });
      });
  });
});
