describe('Test landing page flow', () => {
  it('Correctly visits landing page', () => {
    cy.visit('localhost:3000')
  })
  it("correctly Identifies login button", ()=>{
    cy.contains("Log in")
    .click()
  })
})
/* 
describe('Auth0', function () {
    beforeEach(function () {
      cy.task('db:seed')
      cy.loginByAuth0Api(
        Cypress.env('qwerty1@gmail.com'),
        Cypress.env("Qwerty1@")
      )
    })
  
    it('shows onboarding', function () {
      cy.contains('Get Started').should('be.visible')
    })
  })
 */  