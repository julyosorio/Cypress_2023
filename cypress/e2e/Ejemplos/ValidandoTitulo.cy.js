/// <reference types="Cypress"/>

describe("Validando Titulo", () =>{

    it('Validar titulo', () => {
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.title().should('eq','Datos Personales | TestingQaRvn')

    });
}
)