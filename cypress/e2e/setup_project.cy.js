/// <reference types="cypress" />

import { addProjectPage } from "../support/pageObjects/addProjectPage";

let random = Math.floor(Math.random() * 1000000);
const projectName = "TimiAutomation" + random;

describe("Setup a project", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/dashboard");
  });

  it("verify user can create a project", () => {
    addProjectPage.clickAddProjectIcon();
    addProjectPage.enterProjectName(projectName);
    addProjectPage.enterProjectRefNumber(random);
    addProjectPage.clickSaveProjectBtn();
    addProjectPage.verifyProjectCreated(projectName);
  });

  it("verify user can edit a project", () => {
    addProjectPage.clickProjectOptions(projectName);
    addProjectPage.clickEditProject();
    const updatedProjectName = projectName + "_Updated";
    addProjectPage.enterProjectName(updatedProjectName);
    addProjectPage.clickSaveProjectBtn();
    addProjectPage.verifyProjectCreated(updatedProjectName);
  });

  it("verify user can delete a project", () => {
    const updatedProjectName = projectName + "_Updated";
    addProjectPage.clickProjectOptions(updatedProjectName);
    addProjectPage.clickDeleteProject();
    addProjectPage.confirmDeleteProject();
    addProjectPage.verifyProjectDeleted(updatedProjectName);
  });
});
