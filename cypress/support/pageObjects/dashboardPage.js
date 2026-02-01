const dashboardDrpdwn = "#radix-_r_7_";

class DashboardPage {
  getDashboardDrpdwn() {
    cy.get(dashboardDrpdwn).should("be.visible");
  }
}
export const dashboardPage = new DashboardPage();
