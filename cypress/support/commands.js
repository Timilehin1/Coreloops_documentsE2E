Cypress.Commands.add("createProject", (projectName) => {
  cy.get("button").contains("+").click();
  cy.get("input").first().type(projectName);
  cy.contains("Save").click();
  cy.contains(projectName).should("exist");
});

Cypress.Commands.add("login", () => {
  cy.session("coreloops-session", () => {
    cy.visit("/");
    cy.get('input[data-slot="input"]').type(Cypress.env("email"));
    cy.get('button[data-slot="button"]').click();
    // Manual OTP ONCE
    cy.wait(40000);
    cy.get('button[data-slot="button"]').click();
    cy.get("#radix-_r_7_").contains("Dashboard");
  });
});
