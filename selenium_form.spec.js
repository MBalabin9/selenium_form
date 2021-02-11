// Open https://the-internet.herokuapp.com/login

// Please automate next test cases:
// 1. Login with valid creds (tomsmith/SuperSecretPassword!) and assert you successfully logged in
// 2. Login with invalid creds and check validation error
// 3. Logout from app and assert you successfully logged out

//Cypress Lesson 2 Solution 

describe('My Login Test', () => {
    it('with valid creds', () => {
      cy.visit('https://the-internet.herokuapp.com/login')

      cy.get('input[name="username"]').type('tomsmith')
      cy.get('input[name="password"]').type('SuperSecretPassword!')

      cy.get('button[type="submit"]').click()

      cy.wait(1000);

      cy.get('.flash.success').contains('You logged into a secure area!').should('exist')
    })

    it('with invalid Username and Pass creds', () => {
      cy.visit('https://the-internet.herokuapp.com/login')

      cy.get('input[name="username"]').type('wrongtomsmith')
      cy.get('input[name="password"]').type('NotSuperSecretPassword!')

      cy.get('button[type="submit"]').click()

      cy.wait(1000);

      cy.get('.flash.error').contains('Your username is invalid!').should('exist')

    })

    it('with invalid Pass only creds', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
  
        cy.get('input[name="username"]').type('tomsmith')
        cy.get('input[name="password"]').type('NotSuperSecretPassword!')
  
        cy.get('button[type="submit"]').click()
  
        cy.wait(1000);
  
        cy.get('.flash.error').contains('Your password is invalid!').should('exist')
  
      })

      it('with logout message', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
  
        cy.get('input[name="username"]').type('tomsmith')
        cy.get('input[name="password"]').type('SuperSecretPassword!')
  
        cy.get('button[type="submit"]').click()
  
        cy.wait(1000);
  
        cy.get('.button.secondary.radius').click()

        cy.wait(1000);

        cy.get('.flash.success').contains('You logged out of the secure area!').should('exist')
  
      })
  })