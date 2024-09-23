import Allocations from "../../pages/teams/allocations";
describe("Google Authentication", () => {
  const allocations = new Allocations();
  beforeEach(() => {
    cy.login();
  });

  it("should filter the records based on the area", () => {
    allocations.dropdownFilters("Area", "DevOps", 1);
  });

  it("should display appropriate message if there are no in the area", () => {
    allocations.handNoRecordsFound("Area", "Administration", 1);
  });
});
