///<reference types='Cypress'/>
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')
import ProjectOne from '../../support/POM/Project1/Project1'
import ProjectDos from '../../support/POM/Project1/Project2'


describe('Page object Models',()=>{
    const projectOne = new ProjectOne()
    const projectDos = new ProjectDos()


    it('test 1', ()=>{
       projectOne.goToForm('Alcides', 'Osorio', 'osorio@gmail.com', '3007040282','Direccion1')
    })

    
    it('test 2', ()=>{
        projectOne.goToFormTab('Carmen','Tafur','carmen@gmail.com','30002514','Direccion2')
    })

    it('test 3', ()=>{
        projectDos.goToNextPage()
    })
})