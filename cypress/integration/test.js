// const cypress = require("cypress");
// const { describe } = require("mocha");

describe('practice',() =>{
    it('google test',() =>{
        cy.visit('https://www.google.com/')
        cy.get('.gLFyf').type('automation step by step{enter}')
        cy.contains('Videos').click()
    })
})