//const cypress = require("cypress")

//const cypress = require("cypress");
//const { describe } = require("mocha");

//const cypress = require("cypress")


// describe('My First Test', () => {
//     it('verify the title', () => {
//     cy.visit('https://www.google.com/')
//     cy.title().should('eq','Google')
//     })
   
//     it('verify the title', () => {
//         cy.visit('https://www.facebook.com/')
//         cy.title().should('eq','Facebook')
//         })
//   })

describe('validate the login functionality',()=>{
    it.only('login test',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('._1_3w1N').click()
         cy.get('input[class="_2IX_2- VJZDxU"]').type('abhiarnikar725@gmail.com')
         cy.get('input[class="_2IX_2- _3mctLh VJZDxU"]').type('abhi@1234')
         cy.contains('._1D1L_j > ._2KpZ6l').click()
         cy.get('input[class="_2IX_2- VJZDxU"]').type('abhiarnikar725@gmail.com')
          cy.get('input[class="_2IX_2- _3mctLh VJZDxU"]').type('abhi@1234')
    })
})