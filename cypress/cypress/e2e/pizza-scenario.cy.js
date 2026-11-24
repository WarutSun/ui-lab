
// QP-01 A custom pizza reaches the admin list
// Goal: Verify that a custom pizza keeps its restrictions,
// rating requires login, and the admin sees the new pizza.

// Generate a unique pizza name for each run
function stamp() {
  const d = new Date()
  const two = (n) => String(n).padStart(2, '0')

  return d.getFullYear() +
    two(d.getMonth() + 1) +
    two(d.getDate()) + '-' +
    two(d.getHours()) +
    two(d.getMinutes()) +
    two(d.getSeconds())
}

describe('QP-01 A custom pizza reaches the admin list', () => {
  it('follows the steps of QP-01', () => {

    // Step 1: Open QuickPizza
    cy.visit('https://quickpizza.grafana.com')

    cy.get('h1')
      .should(
        'have.text',
        'Looking to break out of your pizza routine?'
      )

    // Step 2: Turn on Advanced
    cy.contains('label', 'Advanced').click()

    cy.contains('label', 'Max Calories per Slice')
      .should('be.visible')

    cy.contains('label', 'Excluded tools')
      .should('be.visible')

    cy.contains('label', 'Must be vegetarian')
      .should('be.visible')

    cy.contains('label', 'Custom Pizza Name')
      .should('be.visible')

    // Step 3: Fill in restrictions and pizza name
    const pizzaName = 'Lab Pizza ' + stamp()

    cy.log('Pizza name: ' + pizzaName)

    cy.contains('label', 'Max Calories per Slice')
      .siblings('input')
      .clear()
      .type('600')
      .should('have.value', '600')

    cy.get('select')
      .select('Knife')

    cy.contains('option', 'Knife')
      .should('be.selected')

    cy.get('#default-checkbox')
      .check()
      .should('be.checked')

    cy.get('input#pizza-name')
      .type(pizzaName)
      .should('have.value', pizzaName)

    // Step 4: Request a pizza and inspect API
    cy.intercept('POST', '/api/pizza').as('pizza')

    cy.get('button[name="pizza-please"]').click()

    cy.wait('@pizza')
      .its('response.statusCode')
      .should('eq', 200)

    // Compare API request and response with the page
    cy.get('@pizza').then(({ request, response }) => {
      expect(request.body.maxCaloriesPerSlice)
        .to.equal(600)

      const { pizza, calories } = response.body

      // Verify the recommended tool
      cy.contains('#recommendations p', 'Tool:')
        .should('have.text', 'Tool: ' + pizza.tool)

      // Verify the calories
      cy.contains('#recommendations p', 'Calories per slice:')
        .should('have.text', 'Calories per slice: ' + calories)

      // Save the tool for Step 7
      cy.wrap(pizza.tool).as('tool')

      cy.log('Recommended tool: ' + pizza.tool)
      cy.log('Calories per slice: ' + calories)
    })

    // Verify the pizza name
    cy.get('#recommendations')
      .should('contain', 'Name: ' + pizzaName)

    // Verify Knife is excluded
    cy.contains('#recommendations p', 'Tool:')
      .should('not.contain', 'Knife')

    // Verify calories do not exceed 600
    cy.contains('#recommendations p', 'Calories per slice:')
      .invoke('text')
      .then((text) => {
        const calories = Number(
          text.replace('Calories per slice:', '')
        )

        expect(calories).to.be.at.most(600)
      })

    // Screenshot after Step 4
    cy.screenshot('qp01-step4-recommendation')

    // Step 5: Rate without logging in
    cy.get('button[name="rate-5"]').click()

    cy.get('#rate-result')
      .should('have.text', 'Please log in first.')

    // Screenshot after Step 5
    cy.screenshot('qp01-step5-login-needed')

    // Step 6: Log in as admin
    cy.adminLogin('admin', 'admin')

    cy.contains('Latest pizza recommendations')
      .should('be.visible')

    // Step 7: Find the pizza in the admin list
    cy.get('@tool').then((tool) => {
      cy.contains('li', pizzaName)
        .should('contain', '(tool=' + tool + ',')
    })

    // Screenshot after Step 7
    cy.screenshot('qp01-step7-admin-list')

  })
})
