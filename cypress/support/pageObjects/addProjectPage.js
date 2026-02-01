const addProjectBtn = ".flex-row.gap-6 > .inline-flex";
const projectNameField = '[name="name"]';
const projectRefField = '[name="number"]';
const saveProjectBtn = ".justify-end > .bg-primary";
const successToast = ".toast-message";

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
    cy.get(successToast).should("be.visible");
  }

  verifyProjectCreated(projectName) {
    // Check if project with this name exists in UI
    cy.contains(projectName).should("not.be.visible");
  }
  clickProjectOptions(projectName) {
    cy.contains(projectName)
      .parent()
      .within(() => {
        cy.get(".options-button").click();
      });
  }

  clickEditProject() {
    cy.get(".edit-project-option").click();
  }

  clickDeleteProject() {
    cy.get(".delete-project-option").click();
  }

  confirmDeleteProject() {
    cy.get(".confirm-delete-button").click();
    cy.get(successToast).should("be.visible");
  }
  verifyProjectDeleted(updatedProjectName) {
    cy.contains(updatedProjectName).should("not.exist");
  }
}
export const addProjectPage = new AddProjectPage();
