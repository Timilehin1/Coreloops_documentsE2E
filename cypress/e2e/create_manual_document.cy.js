/// <reference types="cypress" />
import { addDocumentPage } from "../support/pageObjects/addDocumentPage";

describe("Create Manual Document", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/documents");
  });

  it("Create Manual Document", () => {
    addDocumentPage.addDocument();
    addDocumentPage.addNewDocument();
    addDocumentPage.clickCreateManualDocument();
    addDocumentPage.clickAddLineItemBtn();
    addDocumentPage.addLineItem();
    addDocumentPage.enterLineItemName("Test Item");
    addDocumentPage.enterLineItemValue("50");
    addDocumentPage.generateDocument();
    addDocumentPage.selectDocumentType("Invoice");
    addDocumentPage.enterIssueDate("2024-06-01");
    addDocumentPage.enterDueDate("2024-06-15");
    addDocumentPage.addPayment();
    addDocumentPage.enterAmount("100");
    addDocumentPage.approveDocument();
  });

  it("Sync Document", () => {
    addDocumentPage.clickSyncDocumentBtn();
    addDocumentPage.verifySyncSuccess();
  });
});
