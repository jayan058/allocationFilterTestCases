Cypress.Commands.add(
  "checkRecordsOnPageForDropdown",
  (index: number, query: string) => {
    cy.get(".lf-table__row").each(($row) => {
      cy.wrap($row)
        .find("td")
        .eq(index)
        .then((containor) => {
          cy.wrap(containor)
            .invoke("text")
            .then((containorText) => {
              expect(containorText).to.satisfy(
                (containorText: string) =>
                  containorText.includes(query) ||
                  containorText.includes(query.toUpperCase()),
              );
            });
        });
    });
  },
);
