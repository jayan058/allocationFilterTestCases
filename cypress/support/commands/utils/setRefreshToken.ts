Cypress.Commands.add("setrefreshToken", () => {
  const refreshToken = Cypress.env("refreshToken");
  cy.setCookie("refreshToken", refreshToken);
});
