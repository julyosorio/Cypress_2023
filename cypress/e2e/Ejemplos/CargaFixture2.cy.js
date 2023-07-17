/// <reference types='Cypress'/>
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe('Fixture',()=>{
    it('arch json', ()=>{

        cy.fixture('Datos2').then( arrayData =>{
            arrayData.forEach(data => {
                const nombre = data.name
                const apellido = data.lastName
                const correo = data.email
        
             cy.visit('https://testingqarvn.com.es/datos-personales/')
             cy.get('#wsf-1-field-21').type(nombre)
             cy.get('#wsf-1-field-22').type(apellido)
             cy.get('#wsf-1-field-23').type(correo)
             cy.get('#wsf-1-field-24').type('3007040282')
             cy.get('#wsf-1-field-28').type('Colombia')
             cy.get('#wsf-1-field-27').click()
            });
         })
    })
})