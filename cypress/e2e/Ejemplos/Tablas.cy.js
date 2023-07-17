/// <reference types="Cypress"/>

const { constant } = require('cypress/types/lodash')

require('cypress-plugin-tab')

describe('Tablas',()=>{
    it('elemento hijos', ()=>{
        cy.visit('https://demoqa.com/webtables')
        cy.get('.rt-tr').children('.rt-td').should('contain', 'Cierra').click({force:true})
   
    })

    it('eq', ()=>{
        cy.visit('https://demoqa.com/webtables')
        cy.get('[type="button"]').eq(1).should('be.visible').click() 
        //la funcion eq sirve para ubicarnos en el elemento por medio de los indices

    })

    it('filter', ()=>{
        cy.visit('https://demoqa.com/webtables')
        cy.get('[type="button"]').filter('.a').should('be.visible').click() 
        /*la funcion filter lo que hace es filtrar los elementos de acuerdo con la clase(como en este caso)
         o otro atributo */

    })

    it('filter', ()=>{
        cy.visit('https://demoqa.com/webtables')
        cy.get('[type="button"]').find('.btn-2').first().click()
        /* La funcion find lo que hace es buscar un elemento por el atributo que se le envie en el argumento
        en esta caso se busca un boton que contenga la clase btn-2*/

        //.first() es una funcion que permite encontrar el primer elemento que coincida con la busqueda por el atributo que se requiera
        //.last() es la funcion que permite encontrar al ultimo elemento que coincida con la busqueda por el atributo
       

    })


    it('NextAll ', ()=>{
        cy.visit('https://demoqa.com/webtables')
        cy.get('[type="button"]').nextAll()
        /* la funcion nextAll() seleccionar todos*/ 
    })

    it('elemnto padre ', ()=>{
        cy.visit('https://demoqa.com/webtables')
        cy.get('[type="button"]').parent().should('have.class','btn-group')
        /* funcion parent() busca el elemento padre del elemento que se esta buscando
        el should esta verificando que la clase del elemnto encontrado sea el que buscamos. */ 
    })


    it('obtener el valor de un campo', ()=>{
        cy.visit('url')
        const datos = []
        let cantidad =0
        
        cy.get('[role="row"] td').each(($el, index, $list)=>{ //aqui empezamos a recorrer las filas de la tabla 
            datos[index]=$el.text()

        }).then(()=>{
            for(let i =0; i<= datos.length;i++){
                //funcion Number que toma todos los campos numericos
                if(Number(datos[i])){
                    cantidad+=Number(datos[i]) //aqui se suman todos los valores que sean tipo numerico de cada fila con +=
                    //tambien se puede sumar asi cantidad= cantidad+Number(datos[i])
                }
            }
            expect(cantidad).to.eq(456) //expect es una funcion que tambien sirve para verificar
        })
    })

    it('valor de un campo en especifico',()=>{
        cy.visit('url de prueba')

        const campo=cy.get('[role="row"]')
        campo.each(($el,index,$list)=>{

            const dato =$el.text()
            if(dato.includes('valor que se desea buscar')){
                campo.eq(index).next().next().then((e)=>{
                    const valor=e.text()
                    cy.log(valor)
                    expect(valor)

                })
            }
        })

    })


})