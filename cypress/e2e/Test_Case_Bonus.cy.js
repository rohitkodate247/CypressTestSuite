// Test Case - Bonus
//User is able to navigate to the Almanac, able to find the background property and
//click on it. At the new page, the user is able to find the Demo section, when clicking
//on the HTML button, they will see the HTML source code.

describe('on the HTML button, they will see the HTML source code', () => {

    it('Take Home Test', () => {
        cy.clearCookies()
        cy.visit('https://css-tricks.com/'); // Visit the Website                       
        cy.contains('Almanac').click();      // Navigate to Almanac Tab
        cy.contains('background').scrollIntoView().click(); //Able to find Background Property
        cy.get('a[href="#aa-demo"]').scrollIntoView(); //Able to find the Demo Section                                          
        cy.origin('https://codepen.io/', () => { // Use Navigating to secondary origin with cy.visit
        cy.visit('/anon/embed/emBzRd?height=450&theme-id=1&slug-hash=emBzRd&default-tab=result') 
        cy.get('a[href="#html-box"]').click() // Click on HTML button
         }) // 
     })
});