/// <reference types='Cypress'/>
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe('Carga Fixture',()=>{

    before(()=>{
        cy.fixture('Datos').then((data)=>{
            globalThis.data=data
        })

    })
    it('arch json', ()=>{
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.get('#wsf-1-field-21').type(data.name)
        cy.get('#wsf-1-field-22').type(data.lastName)
        cy.get('#wsf-1-field-23').type(data.email)
        cy.get('#wsf-1-field-24').type('3007040282')
        cy.get('#wsf-1-field-28').type('Colombia')
        cy.get('#wsf-1-field-27').click()
    })
})