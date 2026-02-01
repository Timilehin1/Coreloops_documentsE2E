const dashboardDrpdwn = "#radix-_r_7_ > div > span";

class DashboardPage {
  clickDashboardDrpdwn() {
    cy.get(dashboardDrpdwn, "Dashboard").should("be.visible").click();
  }
}
export const dashboardPage = new DashboardPage();
