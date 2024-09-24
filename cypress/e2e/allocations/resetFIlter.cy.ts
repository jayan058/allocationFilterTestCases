import Allocations from "../../pages/teams/allocations";
describe("Reset filters", () => {
  const allocations = new Allocations();
  beforeEach(() => {
    cy.login();
  });
  it("should reset all the filters", () => {
    cy.wait(1000);
    allocations.resetFilters();
  });
});
