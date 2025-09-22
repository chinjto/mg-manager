describe('Starting test', () => {
  before(() => {
    cy.task('clearScreenshots');
  });
  it('Visits the web app', () => {
    cy.visit('/')
    cy.get('.layout-topbar').invoke('css', 'position', 'absolute')
    cy.get('.layout-sidebar').invoke('css', 'position', 'absolute')
    cy.get('.layout-wrapper').screenshot('app')
    cy.get('.layout-topbar').invoke('css', 'position', null)
    cy.get('.layout-sidebar').invoke('css', 'position', null)
    cy.get('.layout-topbar').screenshot('layout/topbar')
    cy.get('.layout-sidebar').screenshot('layout/sidebar')
  })
})
