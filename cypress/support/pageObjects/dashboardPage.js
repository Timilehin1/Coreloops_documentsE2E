const dashboardDrpdwn = "#radix-_r_7_";

class DashboardPage {
  clickDashboardDrpdwn() {
    cy.get(".flex-row.gap-6 > .inline-flex").click();
    //cy.get(dashboardDrpdwn).should("be.visible").click();
  }
}
export const dashboardPage = new DashboardPage();
