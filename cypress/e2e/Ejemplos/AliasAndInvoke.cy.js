/// <reference types="Cypress"/>
require('cypress-plugin-tab')

describe('Manejo de los Alias',()=>{


    it('Alias 1 + invoke', ()=>{
        cy.visit('https://testingqarvn.com.es/datos-personales/')

        cy.get('#wsf-1-field-21').should('be.visible').as('input_Nombre')
        cy.get('@input_Nombre').type('Juana')
        //FUNCION INVOKE
        cy.get('h2').invoke('text').as('info') // invoke('text') valida el texto que tiene el elemento
        cy.get('@info').should('contain', 'Datos Personales Básicos')
        //con este invoke lo que se busca es cambiar el estilo css del elemento localizado
        cy.get('@input_Nombre').invoke('attr','style','color:Blue; font-size:50px')
        //invoke para ocultar elementos 
        cy.get('@input_Nombre').invoke('hide')
        cy.wait(2000)
        cy.get('@input_Nombre').invoke('show')
       cy.get('#wsf-1-field-22').invoke('hide', '5s')//mostrar por 5 segundos el elemento
        /* Con la funcion invoke y el atributo removeAttr se permite eliminar un atributo html 
        del elemento localizado --- invoke('removeAttr', 'nombre del atributo que se desde eliminar del elemento')*/
       cy.get('#rescuadro').invoke('removeAttr', 'target').click() 
        
    })
})