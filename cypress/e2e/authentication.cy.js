///<reference types="cypress"/>
import { loginPage } from "../support/pageObjects/loginPage";
import { dashboardPage } from "../support/pageObjects/dashboardPage";

describe("Authentication Tests", () => {
  beforeEach("login", () => {
    cy.visit("/");
  });

  it("Verify user is unable to login with invalid email", () => {
    loginPage.inputEmailAddress(Cypress.env("invalidEmail"));
    loginPage.clickLogin();
    loginPage.invalidEmailError();
  });

  it("Verify user is unable to login with incorrect secure code", () => {
    loginPage.inputEmailAddress(Cypress.env("invalidEmail"));
    loginPage.clickLogin();
    loginPage.enterSecureCode(Cypress.env("invalidCode"));
    loginPage.clickLogin();
    loginPage.invalidEmailError();
  });

  it.only("Verify user is unable to login with valid credentials", () => {
    loginPage.inputEmailAddress(Cypress.env("email"));
    loginPage.clickLogin();
    cy.wait(20000); // Wait for manual OTP entry
    loginPage.clickLogin();
    dashboardPage.clickDashboardDrpdwn();
  });
});
