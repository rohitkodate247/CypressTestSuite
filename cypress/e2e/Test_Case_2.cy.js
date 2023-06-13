//Test Case 2 - At the article screen, user is able to click on the first article and it successfully loads

describe('At the article screen, user is able to click on the first article and it successfully loads ', () => {

    it('Take Home Test', () => {
        cy.visit('https://css-tricks.com/'); // Visit the Website
        cy.contains('Articles').click();   // Navigate to Articles Tab 
        cy.get('[class="article-card article"]').first().click(); // User will be able to click on the first article
    })
});