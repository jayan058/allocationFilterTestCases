import Allocations from "../../pages/teams/allocations";
describe("Filter by name", () => {
  const allocations = new Allocations();
  beforeEach(() => {
    cy.login();
  });
  it("should check visibility of all the elements", () => {
    allocations.checkElementsVisibility();
  });
  it("should allow searching by name", () => {
    allocations.filterByName();
  });

  it("should display appropriate message when the wrong query is provided", () => {
    allocations.invalidSearchQuery();
  });
});
