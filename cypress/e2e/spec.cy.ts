describe('Starting test', () => {
  it('Visits the web app', () => {
    cy.visit('/')
    cy.get('app-root')
  })
})
