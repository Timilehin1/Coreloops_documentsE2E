/// <reference types="cypress" />
import { addDocumentPage } from "../support/pageObjects/addDocumentPage";

describe("Download Document", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/documents");
  });

  it("Download Document", () => {
    addDocumentPage.verifyDocumentTable();
    addDocumentPage.selectDocument();
    addDocumentPage.clickDownloadDocumentBtn();
    addDocumentPage.verifyDownloadSuccess();
  });
});
