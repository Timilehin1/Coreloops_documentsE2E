# E2E Test Automation – Coreloops Document Management

This repository contains an end-to-end (E2E) test automation framework for the **Coreloops Document Management System**, built using **Cypress** and the **Page Object Model (POM)** pattern.

The framework validates critical document workflows including manual document creation, document upload, approval, and payment flows. Due to 2FA constraints, authentication is handled using a **session-based login strategy**, which aligns with real-world E2E testing best practices.

---

## Prerequisites

- Node.js (v16+ recommended)
- npm (v8+ recommended)
- Cypress (installed locally via npm)
- Access to the Coreloops QA environment

---

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/coreloops-e2e-tests.git
cd coreloops-e2e-tests
```

Install dependencies:

```bash
npm install
```

---

## Project Structure

``
.
├── cypress/
│ ├── e2e/ # Test specs (workflows)
│ ├── fixtures/ # Test data and files (PDF, CSV, images)
│ ├── pages/ # Page Object Models
│ ├── support/
│ │ ├── commands.js # Custom Cypress commands
│ │ └── e2e.js # Global hooks
├── cypress.config.js # Cypress configuration
├── cypress.env.json # Environment variables (local only)
├── package.json # Dependencies and scripts
└── README.md # Project documentation

````

---

## Usage

This framework covers the following workflows:

* Manual document creation
* Document upload (PDF, image, CSV)
* Document approval
* Marking documents as paid

Tests are written using:

* **Page Object Model** for maintainability
* **Reusable custom commands**
* **Clear assertions on UI and API behavior**

---

## Running Tests

### Open Cypress Test Runner (headed mode)

```bash
npx cypress open
````

### Run tests in headless mode (Chrome)

```bash
npx cypress run --browser chrome
```

---

## Environment Variables

Environment variables should **not be hardcoded**.

### Local setup (recommended)

Create a `cypress.env.json` file at the project root:

```json
{
  "EMAIL": "*******.com",
  "EMAIL_PASSWORD": "********"
}
```

> ⚠️ This file should be added to `.gitignore`.

You can access variables in tests using:

```js
Cypress.env("email");
```

---

## Authentication Strategy (2FA Handling)

The Coreloops platform uses **email-based 2FA**, which cannot be reliably automated due to Gmail security restrictions.

### Adopted Strategy

- Login is handled via the UI
- OTP is entered **manually once**
- Cypress `cy.session()` is used to cache the authenticated session
- Subsequent tests reuse the session without re-triggering login

This approach reflects **industry best practices** for E2E testing on 2FA-protected applications.

### Example

```js
cy.session("coreloops-session", () => {
  cy.visit("/");
  // login steps
});
```

---

---

## Utilities & Custom Commands

### Custom Commands

Located in `cypress/support/commands.js`, including:

- `cy.login()` – session-based authentication helper
- Common navigation helpers
- Reusable document actions

---

## Key Features

- ✅ Page Object Model (POM)
- ✅ Session-based authentication
- ✅ Negative & positive test coverage
- ✅ UI + API assertions
- ✅ Modular and maintainable test structure
- ✅ CI-ready execution

---

## CI/CD

This framework is designed to run in CI environments (e.g. GitHub Actions).

Typical CI steps:

1. Install dependencies
2. Inject environment variables as secrets
3. Run Cypress in headless mode
4. Generate test results

Example:

```bash
npx cypress run --browser chrome
```

---

## Contributing

This repository was created as part of a **QA technical assessment**.

---
