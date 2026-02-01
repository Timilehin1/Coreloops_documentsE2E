const addProjectBtn = ".flex-row.gap-6 > .inline-flex";
const projectNameField = '[name="name"]';
const projectRefField = '[name="number"]';
const saveProjectBtn = ".justify-end > .bg-primary";

class AddProjectPage {
  clickAddProjectIcon() {
    cy.get(addProjectBtn).click();
  }

  enterProjectName(name) {
    cy.get(projectNameField).should("be.visible").type(name);
  }

  enterProjectRefNumber(number) {
    cy.get(projectRefField).should("be.visible").type(number);
  }

  clickSaveProjectBtn() {
    cy.get(saveProjectBtn).should("be.visible").click();
  }

  verifyProjectCreated(projectName) {
    // Check if project with this name exists in UI
    cy.contains(projectName).should("be.visible");
  }
}
export const addProjectPage = new AddProjectPage();
