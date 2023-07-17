/// <reference types="Cypress"/>
require('cypress-plugin-tab')




describe('Reto1',()=>{
    it('Reto', ()=>{
        cy.visit('https://testingqarvn.com.es')
        cy.contains('Prácticas QA').should('be.visible').trigger('mouseover') //esta instruccion permite pasar por encima del elemento sin dar click
        cy.contains('Radio Buttons').click()

        //ingresa los datos al formulario
        cy.get('[placeholder="Nombre:"]').type('Julieth').tab()
        .type('Osorio').tab()
        .type('ljosoriot@gmail.com').tab()
        .type('3007040282').tab()
        .type('Colombia').tab()
        //cy.get('[type="checkbox"]').check({force:true}).should('be.checked') //habilitar un checkbox, en este caso habilitaria todos 
       // cy.get('[type="checkbox"]').uncheck().should('not.be.checked') //NO habilitar un checkbox, en esta caso no habilita ninguno de la pag
       // cy.get('#wsf-1-field-36-row-1').check({force:true}).should('be.checked') //seleccionar un solo checkbox
        cy.get('[value="PHP"]').check({force:true}).should('be.checked')
       //radiobuttons
       cy.get('[value="WebdriverIO"]').check({force:true})
       cy.get('[type="submit"]').click()
       cy.get('p').should('be.visible').contains('Gracias por tu encuesta.')


    })
})