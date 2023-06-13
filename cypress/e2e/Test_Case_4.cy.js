//Test Case 4-  User is able to click on the search icon and search for “cypress”

describe('User is able to click on the search icon and search for “cypress” ', () => {

    it('Take Home Test', () => {
        cy.visit('https://css-tricks.com/'); // Visit the Website                    
        cy.get('[class="search-and-account"]').type('Cypress');      //Click on Search Icon and Type Cypress
    })
});