/// <reference types="cypress" />

import { addProjectPage } from "../support/pageObjects/addProjectPage";
import { dashboardPage } from "../support/pageObjects/dashboardPage";

let random = Math.floor(Math.random() * 1000000);
const projectName = "TimiAutomation" + random;

describe("Setup a project", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/dashboard");
  });

  it("verify user can create a project", () => {
    cy.get(".flex-row.gap-6 > .inline-flex").click();
    addProjectPage.clickAddProjectIcon();
    cy.pause();
    addProjectPage.enterProjectName(projectName);
    addProjectPage.enterProjectRefNumber(random);
    addProjectPage.clickSaveProjectBtn();
    addProjectPage.verifyProjectCreated(projectName);
  });

  /* it("Create a project", () => {
    addProjectPage.clickAddProjectIcon();
    cy.pause();
    addProjectPage.enterProjectName(projectName);
    addProjectPage.enterProjectRefNumber(random);
    cy.pause();
    addProjectPage.clickSaveProjectBtn();
    addProjectPage.verifyProjectCreated();
  })*/
});

//Create a project
//edit a project
//delete a project
