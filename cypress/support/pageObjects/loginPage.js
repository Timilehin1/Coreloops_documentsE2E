const emailField = 'input[data-slot="input"]';
const loginBtn = 'button[data-slot="button"]';
const codeField = 'input[data-slot="input"]';
const invalidEmailErrorMsg = ".grid > .font-semibold";

class LoginPage {
  inputEmailAddress(email) {
    cy.get(emailField).should("be.visible").type(email);
  }
  clickLogin() {
    cy.get(loginBtn).should("be.visible").click();
  }
  enterSecureCode(code) {
    cy.get(codeField).should("be.visible").type(code);
  }

  invalidEmailError() {
    cy.get(invalidEmailErrorMsg).contains("Uh oh! Something went wrong!");
  }
}
export const loginPage = new LoginPage();
