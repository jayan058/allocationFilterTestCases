Cypress.Commands.add("loginValidator", (fullName: string) => {
  cy.get(".avatar_module_avatar__title__3d7dc9bb")
    .first()
    .then((userName) => {
      cy.wrap(userName)
        .invoke("text")
        .then((myUserName) => {
          expect(myUserName).to.equal(fullName);
        });
    });
});
