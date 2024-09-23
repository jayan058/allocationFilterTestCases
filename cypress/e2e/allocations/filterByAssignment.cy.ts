import Allocations from "../../pages/teams/allocations";
describe("Google Authentication", () => {
  const allocations = new Allocations();
  beforeEach(() => {
    cy.login();
  });

  it("filter the records based on the area", () => {
    allocations.dropdownFilters("Assignment", "Assigned", 6);
  });
});
