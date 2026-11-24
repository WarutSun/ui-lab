
// Goal: Fill in the Selenium web form and verify submission.

describe('Selenium Web Form', () => {
  it('fills and submits the form', () => {
    cy.visit('https://www.selenium.dev/selenium/web/web-form.html')

    cy.get('#my-text-id')
      .type('Hello Cypress')
      .should('have.value', 'Hello Cypress')

    cy.get('select[name="my-select"]')
      .select('Two')
      .should('have.value', '2')

    cy.get('button[type="submit"]').click()

    cy.title().should('eq', 'Web form - target page')
    cy.get('#message').should('have.text', 'Received!')
  })
})
