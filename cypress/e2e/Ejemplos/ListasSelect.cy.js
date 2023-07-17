/// <reference types="Cypress"/>

require('cypress-plugin-tab')


describe('Listas',()=>{
    it('Select', ()=>{
        cy.visit('https://testingqarvn.com.es/combobox-dependiente/')
        cy.get('#wsf-1-field-61').select('Windows').should('have.value','Windows')
        /* cuando tengo una lista con multiples opciones se hace de la siguiente manera:
         cy.get('#wsf-1-field-61').select('Windows', 'Linux', 'Apple', 'Unix')
         esto solo aplica para elementos HTML que sean <select>
        */

         //promesas then
         cy.get('#wsf-1-field-61').should('be.visible').select('Windows').should('have.value','Windows')
         .then(()=>{
            cy.get('#wsf-1-field-63').should('be.visible').select('Windows Server')
            cy.get('[type="submit"]').should('be.visible').click()
         })

    })

})