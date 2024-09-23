class Teams {
  clickWrongModalButton() {
    cy.get(".cursor-pointer.align-self-center").click();
  }
  visitTeamsPage() {
    cy.visit(
      "/teams/projects/list?order=asc&statusIds=4,5&sortBy=projectName&size=40",
    );
  }
}

export default Teams;
