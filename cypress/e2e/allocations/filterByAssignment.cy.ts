import Allocations from "../../pages/teams/allocations";
describe("Google Authentication - Assignment Filters", () => {
  const allocations = new Allocations();

  beforeEach(() => {
    cy.login();
    cy.fixture("allocations/assignmentFilters").as("filters");
  });

  it("should filter the records based on the assignment", function () {
    const { filter1 } = this.filters;
    allocations.dropdownFilters(filter1.type, filter1.value, filter1.index);
  });
});
