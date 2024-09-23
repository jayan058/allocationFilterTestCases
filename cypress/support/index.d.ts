declare namespace Cypress {
  interface Chainable {
    setrefreshToken(): Chainable<Element>;
    loginValidator(fullName: string): Chainable<Element>;
    checkVisibilityOfElements(): Chainable<Element>;
    filterByName(query: string): Chainable<Element>;
    checkRecordsOnPage(query: string): Chainable<Element>;
    getTotalPages();
    navigateAndCheckAllPages(query: string): Chainable<Element>;
    handleInvalidQuery(query: string): Chainable<Element>;
    typeInputName(name: string): Chainable<Element>;
    selectRoles(roles: []): Chainable<Element>;
    validateRoleResults(
      selector: string,
      roles: [],
      index: number,
    ): Chainable<Element>;
    checkEachRole(selector: string, roles, index: number);
    checkIfSelectedRoleIsVisible(roles: []): Chainable<Element>;
    removeRole(roles: []): Chainable<Element>;
    removeAllRoles(): Chainable<Element>;
    selectFromDropdown(
      dropdownLabel: string,
      expectedValue: string,
    ): Chainable<Element>;
    applyFilterButtonClick(): Chainable<Element>;
    checkRecordsOnPageForDropdown(
      index: number,
      query: string,
    ): Chainable<Element>;
    navigateThePages(index: number, query: string): Chainable<Element>;
    noRecordsFound(): Chainable<Element>;
    login(): Chainable<Element>;
  }
}
