import DashboardPage from "../../../pages/dashBoard";
import Teams from "../../../pages/teams/teams";
import Allocations from "../../../pages/teams/allocations";
import { decodeRefreshToken } from "../../../utils/jwtDecode";
Cypress.Commands.add("login", () => {
  const dashBoard = new DashboardPage();
  const teams = new Teams();
  const allocations = new Allocations();
  cy.visit("/");
  cy.setrefreshToken();
  dashBoard.clickWrongModalButton();
  const fullName = decodeRefreshToken(Cypress.env("refreshToken"));
  cy.loginValidator(fullName);
  teams.visitTeamsPage();
  teams.clickWrongModalButton();
  allocations.visitAllocationsPage();
});
