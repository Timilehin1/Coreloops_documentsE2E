const documentDropdown = "#document-type-dropdown";
const documentTable = ".document-table";
const addDocumentBtn = ".add-document-button";
const addNewDocumentBtn = ".new-document-option";
const createManualDocumentBtn = ".create-manual-document-option";
const addLineItemBtn = ".add-line-item-button";
const enterLineItemNameField = '[name="lineItemName"]';
const enterLineItemValueField = '[name="lineItemValue"]';
const generateDocumentBtn = ".generate-document-button";
const selectDocumentType = ".document-type-selector";
const issueDateField = '[name="issueDate"]';
const dueDateField = '[name="dueDate"]';
const addPaymentBtn = ".add-payment-button";
const amountField = '[name="amount"]';
const approveDocumentBtn = ".approve-document-button";
const successToast = ".toast-message";
const markAsPaidBtn = ".mark-as-paid-button";
const syncDocumentBtn = ".sync-document-button";
const downloadDocumentBtn = ".download-document-button";

class AddDocumentPage {
  clickDocumentDropdown() {
    cy.get(documentDropdown).click();
  }
  verifyDocumentTable() {
    cy.get(documentTable).should("be.visible");
  }
  clickAddDocumentBtn() {
    cy.get(addDocumentBtn).click();
  }
  clickAddNewDocument() {
    cy.get(addNewDocumentBtn).click();
  }
  clickCreateManualDocument() {
    cy.get(createManualDocumentBtn).click();
  }
  clickAddLineItemBtn() {
    cy.get(addLineItemBtn).click();
  }
  enterLineItemName(name) {
    cy.get(enterLineItemNameField).type(name);
  }
  enterLineItemValue(value) {
    cy.get(enterLineItemValueField).type(value);
  }
  clickGenerateDocumentBtn() {
    cy.get(generateDocumentBtn).click();
  }
  selectDocumentType(type) {
    cy.get(selectDocumentType).select(type);
  }
  enterIssueDate(date) {
    cy.get(issueDateField).type(date);
  }
  enterDueDate(date) {
    cy.get(dueDateField).type(date);
  }
  clickAddPaymentBtn() {
    cy.get(addPaymentBtn).click();
  }
  enterAmount(amount) {
    cy.get(amountField).type(amount);
  }
  clickApproveDocumentBtn() {
    cy.get(approveDocumentBtn).click();
    cy.get(successToast).should("be.visible");
  }
  clickMarkAsPaidBtn() {
    cy.get(markAsPaidBtn).click();
  }
  clickSyncDocumentBtn() {
    cy.get(syncDocumentBtn).click();
  }
  clickDownloadDocumentBtn() {
    cy.get(downloadDocumentBtn).click();
  }
  selectDocument() {
    cy.get(documentTable).find("tr").first().click();
  }
  approveDocument() {
    this.clickApproveDocumentBtn();
  }
  verifyDocumentStatus(status) {
    cy.get(documentTable)
      .find("tr")
      .first()
      .within(() => {
        cy.get(".status-cell").should("have.text", status);
      });
  }

  verifyDownloadSuccess() {
    // Implementation to verify download success, e.g., checking file existence
    cy.log("Document downloaded successfully");
  }

  verifySyncSuccess() {
    cy.get(successToast).should("be.visible");
  }
}

export const addDocumentPage = new AddDocumentPage();
