let user;

describe('My Login Test', () => {
    //Basic Level
    it('Visit Login Page', () => {
      cy.visit('https://react-redux.realworld.io/#/login')

      cy.get('form fieldset.form-group:nth-child(1) input').type('rememberme103@mail.com')
      cy.get('form fieldset.form-group:nth-child(2) input').type('1234567890')

      cy.get('.btn').click()

      cy.wait(2000);

      cy.get('.navbar').contains('RememberMe100').should('exist')
    })


    //Advanced Level
    // Faker Setup is shown on "plugins/index.js" as it should be on Cypress
    before(function () {
        cy.task("freshUser").then((object) => {
            user = object;
        });
    });

    it('Sign up with faker', () => {
        cy.visit('https://react-redux.realworld.io/#/register')

        cy.get('form fieldset.form-group:nth-child(1) input').type(user.username)
        cy.get('form fieldset.form-group:nth-child(2) input').type(user.email)
        cy.get('form fieldset.form-group:nth-child(3) input').type('1234567890')

        cy.get('.btn').click()

        cy.get('.navbar').contains(user.username).should('exist');
    })
  });