/// <reference types="Cypress"/>
require('cypress-plugin-tab')

describe('Ventanas modales',()=>{

    //para este ejemplo no hay sitios web de prueba
    it('alert', ()=>{
        cy.visit('url')

        //elemento que activa el alert o ventana modal
        cy.get('.btn-start').should('be.visible').click()
        //evento on() lo que hace es cargar un windows:alert

       /* esta es una forma de hacerlo, en el curso no funciono
       cy.on('window:alert', (str)=>{
            expect(str).to.equal("mensaje que se ve en la ventana")
            return true;
        })*/

        /* Segunda forma que si funciono en el curso*/
        cy.get('#modal').click({force:true})
   
    })
})