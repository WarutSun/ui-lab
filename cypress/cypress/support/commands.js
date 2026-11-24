// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Custom Cypress commands will be added in Step 4.7.

// Log in on the QuickPizza admin page.
Cypress.Commands.add('adminLogin', (user, password) => {
  cy.visit('https://quickpizza.grafana.com/admin')

  // Wait until SvelteKit has initialized.
  cy.get('#svelte-announcer').should('exist')

  // Clear default values before typing.
  cy.get('#username').clear().type(user)
  cy.get('#password').clear().type(password, { log: false })

  cy.get('button[type="submit"]').click()
})
