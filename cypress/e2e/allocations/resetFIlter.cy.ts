import Allocations from "../../pages/teams/allocations";
describe("Google Authentication", () => {
  const allocations = new Allocations();
  beforeEach(() => {
    cy.login();
  });
  it("should reset all the filters", () => {
    cy.wait(1000);
    allocations.resetFilters();
  });
});
