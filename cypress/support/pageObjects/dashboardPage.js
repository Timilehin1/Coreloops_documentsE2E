const dashboardDrpdwn = "#radix-_r_7_ > .flex";

class DashboardPage {
  getDashboardDrpdwn() {
    cy.get(dashboardDrpdwn).should("be.visible").click();
  }
}
export const dashboardPage = new DashboardPage();
