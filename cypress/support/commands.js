// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('TextoVisible', (selector, valor) => { 
    cy.get(selector).should('be.visible').type(valor)
})


Cypress.Commands.add('Formulario_DatosPersonales', (name, lastName,email, phone, country) =>{
    cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.get('#wsf-1-field-21').type(name)
        cy.get('#wsf-1-field-22').type(lastName)
        cy.get('#wsf-1-field-23').type(email)
        cy.get('#wsf-1-field-24').type(phone)
        cy.get('#wsf-1-field-28').type(country)
        cy.get('#wsf-1-field-27').click()
})

Cypress.Commands