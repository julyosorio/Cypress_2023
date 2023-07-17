class ProjectDos{

    goToNextPage(){
        cy.visit('https://testingqarvn.com.es/datos-personales/')
            cy.get('#wsf-1-field-21').type('Julieta')
            cy.reload() //funcion que refresca o actualiza la pag
            cy.get('#menu-item-178').should('be.visible').click()
            cy.go('back')
    }
}
export default ProjectDos