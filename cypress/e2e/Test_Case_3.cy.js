//Test Case 3 - At the article screen, user is able to click on “Older”

describe('At the article screen, user is able to click on “Older” ', () => {

    it('Take Home Test', () => {
        cy.visit('https://css-tricks.com/'); // Visit the Website                
        cy.contains('Articles').click();      // Navigate to Articles Tab
        cy.scrollTo('bottom')               // Scoll to Bottom of Webpage
        cy.get('[class="rotate-270 pagination-arrow"]').click(); // Click on Older -> Since the Arrow is attached to Older, the user may click on Arrow/Older
    })
});