/// <reference types="cypress" />
import { addDocumentPage } from "../support/pageObjects/addDocumentPage";
describe("Mark Document as Paid", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/documents");
  });

  it("Mark Document as Paid", () => {
    addDocumentPage.verifyDocumentTable();
    addDocumentPage.selectDocument();
    addDocumentPage.approveDocument();
    cy.wait(2000);
    addDocumentPage.clickMarkAsPaidBtn();
    addDocumentPage.verifyDocumentStatus("Paid");
  });
});
