/// <reference types="Cypress"/>
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop') //plugin necesario para el evento de arrastrar y soltar




describe('Eventos del mouse',()=>{


    it('arrastrar y soltar (Drag and Drop)', ()=>{
        cy.visit('https://testpages.herokuapp.com/styled/drag-drop-javascript.html')
        cy.get('#draggable1').drag('#droppable1', {force:true})
    })


    it('arrastrar y soltar (Drag and Drop) 2', ()=>{
        cy.visit('https://testpages.herokuapp.com/styled/drag-drop-javascript.html')
        cy.wait(3000)
        cy.get('#draggable1').drag('#droppable1', {force:true})
        cy.wait(3000)
        cy.get('#draggable2').drag('#droppable1', {force:true})

    })

    //Mouse over invoke

    it('Mouse over', ()=>{
        cy.visit('https://testpages.herokuapp.com/styled/events/javascript-events.html')
        cy.get('#onmouseover').trigger('mouseover')
        })

        /*cuando el elemento web tiene el atributo html target="_blank" se abre una nueva ventana, 
        en caso que necesitemos verificar que abra en la misma ventana agregamos el metodo invoke con el fin 
        que se elimine el atributo target
        como en el siguiente ejemplo:
        cy.get('#5768).invoke('removeAttr', 'target').click()
        */   
       
        
        //mover un elemento con el mouse
        /* esto aplica para los elementos tipo "range"    
        */
        
        it('Mover mouse', ()=>{
            cy.visit('url')//la url no existe y no se encontro una con la misma funcionalida
            cy.get('#slider1 > .range > input').invoke('attr','value','80') 
            //el 80 es el valor del rango que queremos poner en el slider
            })

})