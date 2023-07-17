/// <reference types='Cypress'/>
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe('Tiempos',()=>{
    Cypress.config("defaultCommandTimeout", 12000) //comando para configurar tiempo de carga de la web 

    it('test 1', ()=>{
        cy.visit('https://testingqarvn.com.es/datos-personales/')
    })

    it.only('test 2', ()=>{
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.get('#wsf-1-field-21').should('be.visible', {setTimeout:2000}).type('july') // tiempo de espera aunque siento que no funciono 
        cy.get('#wsf-1-field-22').type('lopez')
    })
})