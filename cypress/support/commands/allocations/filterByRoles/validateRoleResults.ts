Cypress.Commands.add("validateRoleResults", (selector, roles = [], index) => {
  cy.getTotalPages().then((totalPages) => {
    const iteratePages = (currentPage) => {
      cy.checkEachRole(selector, roles, index).then(() => {
        // Ensure to return here
        if (currentPage < totalPages) {
          console.log(currentPage);
          console.log(totalPages);

          cy.get(".lf-table__pagination-btn").contains("Next").click();
          cy.wait(500); // Wait for the page to load
          iteratePages(currentPage + 1); // Move to the next page
        }
      });
    };
    iteratePages(1); // Start with page 1
  });
});
