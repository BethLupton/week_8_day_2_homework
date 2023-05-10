describe('Basket', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Should have pre-populated comments', () => {
        const commentListItems = cy.get('#item-list')
        commentListItems.should('have.length', 2)
    })

    // it('should be able to add comment', () => {
    //     cy.get('#name-input').type("Murphy")
    //     cy.get('#comment-input').type("Your move creep")
    //     cy.get('#comment-form').submit()
    //     const commentListItems = cy.get('#comment-list > li')
    //     commentListItems.should('have.length', 3)
    // })
})