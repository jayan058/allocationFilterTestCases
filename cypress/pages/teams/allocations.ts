class Allocations {
  clickWrongModalButton() {
    cy.get(".cursor-pointer.align-self-center").click();
  }
  visitAllocationsPage() {
    cy.visit(
      "/teams/projects/allocations/list?date=2024-09-19&sortBy=name&order=asc",
    );
  }
  checkElementsVisibility() {
    cy.checkVisibilityOfElements();
  }
  filterByName() {
    cy.filterByName("a");
  }
  invalidSearchQuery() {
    cy.handleInvalidQuery("Invalid Name");
  }
  filterByRoles(roles) {
    cy.selectRoles(roles);
  }
  validateRoleResults(selector: string, roles, index: number) {
    cy.validateRoleResults(selector, roles, index);
  }
  checkIfSelectedRoleIsVisible(roles) {
    cy.selectRoles(roles);
    cy.checkIfSelectedRoleIsVisible(roles);
  }
  removeAllRoles(roles) {
    cy.selectRoles(roles);
    cy.removeAllRoles();
  }
  removesSelectedRoles(roles) {
    cy.selectRoles(roles);
    cy.removeRole(roles);
  }
  dropdownFilters(dropdownLabel, expectedValue, index) {
    cy.selectFromDropdown(dropdownLabel, expectedValue);
    cy.wait(1000);
    cy.navigateThePages(index, expectedValue);
  }
  handNoRecordsFound(dropdownLabel, expectedValue, index) {
    cy.selectFromDropdown(dropdownLabel, expectedValue);
    cy.wait(1000);
    cy.noRecordsFound();
  }
}

export default Allocations;
