Cypress.Commands.add("checkEachRole", (selector, roles, index) => {
  return cy.get(selector).each(($row) => {
    cy.wrap($row)
      .find("td")
      .eq(index)
      .then(($col) => {
        const colText = $col.text();
        const containsRole = roles.some((role) => colText.includes(role));
        expect(containsRole).to.be.true;
      });
  });
});
