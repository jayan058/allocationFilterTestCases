Cypress.Commands.add("checkRecordsOnPage", (query: string) => {
  cy.get(".lf-table__row").each(($row) => {
    cy.wrap($row)
      .find(".employee__fullname")
      .then((employeeNameContainer) => {
        cy.wrap(employeeNameContainer)
          .invoke("text")
          .then((actualName) => {
            expect(actualName).to.satisfy(
              (name: string) =>
                name.includes(query) || name.includes(query.toUpperCase()),
            );
          });
      });
  });
});
