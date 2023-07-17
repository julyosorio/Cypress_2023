/// <reference types='Cypress'/>
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe('Navgacion entre paginas',()=>{

    it('Back', ()=>{
        cy.visit('https://testingqarvn.com.es')
        cy.get('#menu-item-178').should('be.visible').click()
        cy.get('#menu-item-179').should('be.visible').click()
       cy.go('back') //ir a la pagina anterior
    })
    
        it.only('test', ()=>{
            cy.visit('https://testingqarvn.com.es/datos-personales/')
            cy.get('#wsf-1-field-21').type('Julieta')
            cy.screenshot('Capture of Field Name') //con este comando se toman capturas de pantalla !!! solo funciona cuando se ejecuta cypress con el comando run
            cy.reload() //funcion que refresca o actualiza la pag
            cy.get('#menu-item-178').should('be.visible').click()
            cy.go('back')

        })
    
})