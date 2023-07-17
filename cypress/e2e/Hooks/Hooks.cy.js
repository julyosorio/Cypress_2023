/// <reference types='Cypress'/>
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe('HOOKS',()=>{

    //hook al inicio de la suit de pruebas, solo se ejecuta una vez 
    before(()=>{

    })

//hook que se repite al inicio de cada test
beforeEach(()=>{
    cy.visit('https://testingqarvn.com.es')
    cy.get('#menu-item-179').trigger('mouseover').then(()=>{
        cy.get('#menu-item-218').click()
    })
})
//Hook que se repite al final de cada test
afterEach(()=>{
    cy.get('#wsf-1-field-27').click()
    cy.get('p').should('be.visible').contains('Gracias por tu encuesta.')
    cy.wait(1500)


})
//hook que se ejecuta al final de la suit de prueba 
after(()=>{
    cy.visit('https://testingqarvn.com.es')
})

    it('test1', () => {
        cy.get('#wsf-1-field-21').type('Julieth')
        cy.get('#wsf-1-field-22').type('Osorio')
        cy.get('#wsf-1-field-23').type('ljosoriot@gmail.com')
        cy.get('#wsf-1-field-24').type('3007040282')
        cy.get('#wsf-1-field-28').type('Colombia')
    });


    
    it('test2', () => {
        cy.get('#wsf-1-field-21').type('Maria Jose')
        cy.get('#wsf-1-field-22').type('Ramirez')
        cy.get('#wsf-1-field-23').type('ljosoriot@gmail.com')
        cy.get('#wsf-1-field-24').type('3007040282')
        cy.get('#wsf-1-field-28').type('Colombia')
    });

    it('test3', () => {
        cy.get('#wsf-1-field-21').type('Macarena')
        cy.get('#wsf-1-field-22').type('Osorio')
        cy.get('#wsf-1-field-23').type('ljosoriot@gmail.com')
        cy.get('#wsf-1-field-24').type('3007040282')
        cy.get('#wsf-1-field-28').type('Colombia')
    });


    it('test4', () => {
        cy.get('#wsf-1-field-21').type('Matias')
        cy.get('#wsf-1-field-22').type('Osorio')
        cy.get('#wsf-1-field-23').type('ljosoriot@gmail.com')
        cy.get('#wsf-1-field-24').type('3007040282')
        cy.get('#wsf-1-field-28').type('Colombia')
    });
})