//Test Case 5- User is able to search for “cypress” and click on the “An Intro to Web Site Testing
//with Cypress” article and it loads successfully

describe('“An Intro to Web Site Testing ', () => {

    it('Take Home Test', () => {
        cy.visit('https://css-tricks.com/'); // Visit the Website                      
        cy.get('[class="search-and-account"]').type('Cypress');  // //Click on Search Icon and Type Cypress
        cy.contains('An Intro to Web Site Testing with ').should('exist').click();  //Verify if An Intro to Web Site Testing exist

    })
});