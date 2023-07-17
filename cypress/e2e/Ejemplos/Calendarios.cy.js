/// <reference types="Cypress"/>
require('cypress-plugin-tab')


describe('Dates',()=>{
    it('', ()=>{
        cy.visit('https://testingqarvn.com.es/calendarios/')
        cy.get('#wsf-1-field-78').should('be.visible').type('Junio 10,2023').tab()
        
    })
})