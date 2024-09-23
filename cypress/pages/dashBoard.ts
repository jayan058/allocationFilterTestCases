class DashboardPage {
  clickWrongModalButton() {
    cy.get(
      ".releaseNote_module_releaseNoteModal__header_Close__d63012a8",
    ).click();
  }
}

export default DashboardPage;
