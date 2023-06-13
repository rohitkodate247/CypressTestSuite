//Test Case 1 - User is able to navigate to Newsletter 

describe('User is able to navigate to Newsletter ', () => {

    it('Take Home Test', () => {
        cy.visit('https://css-tricks.com/'); // Visit the Website
        cy.contains('Newsletter').click(); // Click on Newsletter
    })
});