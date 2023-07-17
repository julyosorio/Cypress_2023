/// <reference types='Cypress'/>
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe('prueba',()=>{
    it('snippes', ()=>{
        cy.visit('https://testingqarvn.com.es')
    })
})

//Para la creacion de snippes (plantillas de codigo)
/* 
en la pagina oficial de visual studio code hay una guia

ctrl + shift + P

configure user snippes/ javascript.json -> en este archivo configuramos lo que queremos que sea plantilla 
como por ejemplo el describe() , etc

*/
