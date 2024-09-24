import Allocations from "../../pages/teams/allocations";
describe("Area Filters", () => {
  const allocations = new Allocations();

  beforeEach(() => {
    cy.login();
    cy.fixture("allocations/areaFilters").as("filters");
  });

  it("should filter the records based on the area", function () {
    const { filter1 } = this.filters;
    allocations.dropdownFilters(filter1.type, filter1.value, filter1.index);
  });

  it("should display appropriate message if there are no records in the area", function () {
    const { filter2 } = this.filters;
    allocations.handNoRecordsFound(filter2.type, filter2.value);
  });
});
