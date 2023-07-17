/// <reference types="Cypress"/>
require('cypress-plugin-tab')



describe('Referencias a windows',()=>{

    it('propiedades charset', ()=>{
        cy.visit('https://testingqarvn.com.es')
        cy.document().should('have.property', 'charset').and('eq','UTF-8')
        cy.title().should('eq','TestingQaRvn | Mundo del Testing')
   
    })


    //validar url 
    it.only('url', ()=>{
        cy.visit('https://testingqarvn.com.es')
        cy.url().should('include','testingqarvn.com.es')//valida solo una parte de la url
        cy.url().should('eq','https://testingqarvn.com.es/') //valida la url completa
   
    })
})