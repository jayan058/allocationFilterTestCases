import Allocations from "../../pages/teams/allocations";
describe("Google Authentication", () => {
  const allocations = new Allocations();
  beforeEach(() => {
    cy.login();
  });
  it.skip("should check visibility of all the elements", () => {
    allocations.checkElementsVisibility();
  });
  it.skip("should filter the result on the basis of the roles selected", () => {
    cy.fixture("allocations/roles").then((data) => {
      const roles = data.roles;
      allocations.filterByRoles(roles);
      allocations.validateRoleResults(".lf-table__row", roles, 2);
    });
  });
  it.skip("should see if the selected roles appear inside the contanior", () => {
    cy.fixture("allocations/roles").then((data) => {
      const roles = data.roles;
      allocations.checkIfSelectedRoleIsVisible(roles);
    });
  });
  it.skip("should remove all the selected roles at once", () => {
    cy.fixture("allocations/roles").then((data) => {
      const roles = data.roles;
      allocations.removeAllRoles(roles);
    });
  });
  it("should remove only clicked roles", () => {
    cy.fixture("allocations/roles").then((data) => {
      const roles = data.roles;
      allocations.removesSelectedRoles(roles);
    });
  });
});
