/// <reference types="Cypress"/>
require('cypress-plugin-tab')
import 'cypress-file-upload'




describe('Carga de archivos',()=>{
    it('carga de archivo', ()=>{
        const archivo = 'img1.png'
        cy.visit('https://testingqarvn.com.es/upload-files/')
        cy.get('#wsf-1-field-94').attachFile(archivo)
    })
})