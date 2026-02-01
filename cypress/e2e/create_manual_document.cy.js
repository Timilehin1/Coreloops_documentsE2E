/// <reference types="cypress" />
import { addDocumentPage } from "../support/pageObjects/addDocumentPage";

//Create manual document -approve document,
// mark document as paid,
// sync documents and
//  download documents
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

  it("Mark Document as Paid", () => {
    addDocumentPage.verifyDocumentTable();
    addDocumentPage.selectDocument();
    addDocumentPage.approveDocument();
    cy.wait(2000);
    addDocumentPage.clickMarkAsPaidBtn();
    addDocumentPage.verifyDocumentStatus("Paid");
  });

  it("Sync Document", () => {
    addDocumentPage.clickSyncDocumentBtn();
    addDocumentPage.verifySyncSuccess();
  });

  it("Download Document", () => {
    addDocumentPage.clickDownloadDocumentBtn();
    addDocumentPage.verifyDownloadSuccess();
  });
});
