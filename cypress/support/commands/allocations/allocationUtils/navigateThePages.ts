Cypress.Commands.add("navigateThePages", (index, query) => {
  cy.getTotalPages().then((totalPages) => {
    const iteratePages = (currentPage) => {
      cy.checkRecordsOnPageForDropdown(index, query);
      if (currentPage < totalPages) {
        cy.get(".lf-table__pagination-btn").contains("Next").click();
        cy.wait(500); // Wait for the page to load
        iteratePages(currentPage + 1); // Move to the next page
      }
    };
    iteratePages(1); // Start with page 1
  });
});
