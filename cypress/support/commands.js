// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/*Cypress.Commands.add("login", () => {
  cy.visit("/");

  cy.get('input[data-slot="input"]').type("qa@coreloops.ai");

  // 2FA workaround assumption: session already trusted
  cy.contains("Dashboard", { timeout: 20000 }).should("be.visible");
}); */

/*Cypress.Commands.add("login", () => {
  cy.visit("/");
  cy.get('input[data-slot="input"]').type("qa@coreloops.ai");
  cy.get('button[data-slot="button"]').should("be.visible").click();
  // Manual OTP entry here once
  cy.wait(2000);
  cy.get('button[data-slot="button"]').should("be.visible").click();
  cy.get("#radix-_r_7_ > div > span").contains("Dashboard");
});*/

Cypress.Commands.add("createProject", (projectName) => {
  cy.get("button").contains("+").click();
  cy.get("input").first().type(projectName);
  cy.contains("Save").click();
  cy.contains(projectName).should("exist");
});

Cypress.Commands.add("login", () => {
  cy.session("coreloops-session", () => {
    cy.visit("/");
    cy.get('input[data-slot="input"]').type(Cypress.env("EMAIL"));
    cy.get('button[data-slot="button"]').should("be.visible").click();
    // Manual OTP entry here once
    cy.wait(20000);
    cy.get('button[data-slot="button"]').should("be.visible").click();
    cy.get("#radix-_r_7_ > div > span").contains("Dashboard");
  });
});
