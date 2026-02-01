# Coreloops_documentsE2E

This repository includes automated end-to-end testing implemented with Cypress, focusing on critical user workflows to ensure reliability, data integrity, and a smooth user experience.

2FA Handling Strategy
The application uses email-based 2FA. Since Cypress does not support automating third-party OAuth email UIs reliably, the test suite retrieves the OTP securely via IMAP using a Cypress task. This mirrors real-world enterprise automation patterns while maintaining test stability and security.

## Prerequisites

Before running the tests, ensure you have the following installed:

- Node.js (v18 or later)
- npm (v9 or later)
- Cypress (v13 or later)



## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2. Install the dependencies:

```bash
npm install
```

## Running the Tests

To run the tests in headless mode, use the following command:

```bash
npm test
```

To open the Cypress Test Runner, use:

```bash
npx cypress open
```

## Configuration

The test configuration is located in the `cypress.config.js` file. You can modify the following settings:

- `baseUrl`: The base URL of the application under test.
- `env`: Environment variables such as `username`, `password`, and `email` for authentication and 2FA.

## Test Structure

The tests are organized in the `cypress/e2e` directory. Each test file corresponds to a specific feature or workflow. The main test files include:

- `login.cy.js`: Tests for the login functionality.
- `document_

## Project Structure

│
├── cypress/
│   ├── e2e/
│   │   ├── auth/
│   │   │   └── login.cy.js
│   │   ├── documents/
│   │   │   ├── manual-document.cy.js
│   │   │   ├── document-upload.cy.js
│   │   │   ├── document-approval.cy.js
│   │
│   ├── fixtures/
│   │   ├── test-files/
│   │   │   ├── invoice.pdf
│   │   │   ├── receipt.png
│   │   │   ├── invalid.txt
│   │
│   ├── support/
│   │   ├── commands.js
│   │   └── e2e.js
│
├── .github/workflows/cypress.yml
├── cypress.config.js
├── package.json
├── README.md
└── QA_REPORT.md
