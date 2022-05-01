/// <reference types="cypress" />

describe('traverse method in cypress',()=>{
     //next()
     it('To get the next sibling DOM element within elements, use the .next() command',()=>{
         cy.visit('https://en.wikipedia.org/wiki/Main_Page')
         cy.get('#n-contents').next().should('have.text','Current events')
     })

     //prev()
     it('To get the previous sibling DOM element within elements, use the .prev() command',()=>{
         cy.visit('https://en.wikipedia.org/wiki/Main_Page')
         cy.get('#n-contents').prev().should('have.text','Main page')
     })
     //nextAll()
     it('To get all of the next sibling DOM elements within elements, use the .nextAll() command',()=>{
         cy.visit('https://en.wikipedia.org/wiki/Main_Page')
         cy.get('#n-contents').nextAll().should('have.length',5)
     })
     //prevAll()
     it('To get all previous sibling DOM elements within elements, use the .prevAll() command',()=>{
        cy.visit('https://en.wikipedia.org/wiki/Main_Page')
        cy.get('#n-sitesupport').prevAll().should('have.length',6)
     })

    //prevUntill()
    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command',()=>{
        cy.visit('https://en.wikipedia.org/wiki/Main_Page')
        cy.get('#n-sitesupport').prevUntil('#n-currentevents').should('have.length',3)
        cy.get('#n-sitesupport').prevUntil('#n-currentevents').eq(2).should('have.text','Random article')
        
    })

    //nextUntill()
    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command',()=>{
        cy.visit('https://en.wikipedia.org/wiki/Main_Page')
        cy.get('#n-contents').nextUntil('#n-sitesupport').should('have.length',4)
        cy.get('#n-contents').nextUntil('#n-sitesupport').eq(3).should('have.text','Contact us')
        
    })
    //siblings()
    it('To get all sibling DOM elements of elements, use the .siblings() command',()=>{
        cy.visit('https://en.wikipedia.org/wiki/Main_Page')
        cy.get('#n-contents').siblings().should('have.length',6)
    })
    //closest()
      it('To get the closest ancestor DOM element, use the .closest() command',()=>{
        cy.visit('https://en.wikipedia.org/wiki/Main_Page')
        cy.contains('About Wikipedia').closest('li').should('have.class','mw-list-item')
      })  
      //first()
      it('To get the first DOM element within elements, use the .first() command',()=>{
        cy.visit('https://en.wikipedia.org/wiki/Main_Page')
        cy.get('.vector-menu-content-list').children().first().should('have.class','mw-list-item')
      })   
      
      //last()
      it('To get the last DOM element within elements,use the .last() command',()=>{
        cy.visit('https://en.wikipedia.org/wiki/Main_Page')
        cy.get('.vector-menu-content-list').children().last().should('have.class','mw-list-item')
      })

      //eq()
      it('To get a DOM element at a specific index, use the .eq() command',()=>{
        cy.visit('https://en.wikipedia.org/wiki/Main_Page')
        cy.get('.vector-menu-content-list').children().eq(5).should('have.class','mw-list-item')
        cy.get('.vector-menu-content-list').children().eq(3).should('have.class','mw-list-item')
      })
      //filter()
      it('To get DOM elements that match a specific selector, use the .filter() command',()=>{
        cy.visit('https://en.wikipedia.org/wiki/Main_Page')
        cy.get('.vector-menu-content-list').children().filter('#t-specialpages').should('have.text','Special pages')
      })
      //not()
      it.only('To remove DOM element(s) from the set of elements, use the .not() command',()=>{
        cy.visit('https://en.wikipedia.org/wiki/Main_Page')
        cy.get('.vector-menu-content-list').children().not('#n-currentevents').should('have.text','Current events')
      })
})