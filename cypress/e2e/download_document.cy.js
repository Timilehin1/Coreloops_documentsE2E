/// <reference types="cypress" />
import { addDocumentPage } from "../support/pageObjects/addDocumentPage";

describe("Download Document", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/documents");
  });

  it("Download Document", () => {
    addDocumentPage.clickDownloadDocumentBtn();
    addDocumentPage.verifyDownloadSuccess();
  });
});
