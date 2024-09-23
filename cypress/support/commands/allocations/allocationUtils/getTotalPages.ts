Cypress.Commands.add("getTotalPages", () => {
  return cy
    .get(".lf-table__pagination-status")
    .invoke("text")
    .then((paginationText) => {
      const match = paginationText.match(/Page \d+ of (\d+)/);
      return parseInt(match ? match[1] : "1", 10);
    });
});
