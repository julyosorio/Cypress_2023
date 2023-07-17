/// <reference types='Cypress'/>
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe('Comandos personalizados',()=>{

before(()=>{
    cy.visit('https://testingqarvn.com.es/datos-personales/')
})

    it.only('Demo 1', ()=>{
        //utilizando las siglas cy.TextoVisible() me va poner el comando que esta en el archivo commands.js
        cy.TextoVisible('input#wsf-1-field-21', 'Macarenita')
        
    })

    it('test con valores esperados ', ()=>{
        //utilizando el comando cy.Formulario_DatosPersonales() creado en el archivo commands.js
        cy.Formulario_DatosPersonales('Matias', 'Osorio', 'matiOsorio@gmail.com', '3007040282', 'USA')
        cy.get('p').should('be.visible').contains('Gracias por tu encuesta.')
        
    })

    
    
    it('test error en email', ()=>{
        cy.Formulario_DatosPersonales('elena', 'Ramirez', 'elena','3002745','direccion1')
        cy.get('#wsf-1-invalid-feedback-23').should('be.visible').as('mensajeError').then(()=>{
         cy.get('@mensajeError').should('have.text','Please provide a valid email.')
        })
    })

})