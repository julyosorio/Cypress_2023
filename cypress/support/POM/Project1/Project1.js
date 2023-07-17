class ProjectOne{

   
    goToForm(name, lastName,email, phone, country){
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.get('#wsf-1-field-21').type(name)
        cy.get('#wsf-1-field-22').type(lastName)
        cy.get('#wsf-1-field-23').type(email)
        cy.get('#wsf-1-field-24').type(phone)
        cy.get('#wsf-1-field-28').type(country)
        cy.get('#wsf-1-field-27').click()
        cy.get('p').should('be.visible').contains('Gracias por tu encuesta.')

    }

    goToFormTab(name, lastName,email, phone, country){
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.get('#wsf-1-field-21').type(name).tab()
        .type(lastName).tab()
        .type(email).tab()
        .type(phone).tab()
        .type(country).tab()
        .click()
        cy.get('p').should('be.visible').contains('Gracias por tu encuesta.')

    }
   
  
}
export default ProjectOne