Cypress.Commands.add("checkResetFilters", () => {
  cy.get(".dropdown-button__value").each(($el) => {
    cy.wrap($el)
      .invoke("text")
      .then((filterText) => {
        expect(filterText).to.equal("All");
      });
  });

  cy.get("input[name='select-date']")
    .invoke("val")
    .then((todaysDate) => {
      const today = new Date();
      const formattedToday = today.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
      expect(todaysDate).to.equal(formattedToday);
    });
  cy.get("input[placeholder='Search by Name']")
    .invoke("val")
    .then((nameAfterReset) => {
     
      expect(nameAfterReset).to.equal("");
    });
});
