describe('Datos personales', () => {

    it('test1: Ingresar al formulario', () => {
        cy.visit('https://testingqarvn.com.es/datos-personales/')
    });

    it('test2: Ingresar datos al formulario', () => {
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.get('#wsf-1-field-21').type('Julieth')
        cy.get('#wsf-1-field-22').type('Osorio')
        cy.get('#wsf-1-field-23').type('ljosoriot@gmail.com')
        cy.get('#wsf-1-field-24').type('3007040282')
        cy.get('#wsf-1-field-28').type('Colombia')
        cy.get('#wsf-1-field-27').click()
    });
}
)