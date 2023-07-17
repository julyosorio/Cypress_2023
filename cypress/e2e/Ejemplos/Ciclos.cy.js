/// <reference types="Cypress"/>
require('cypress-plugin-tab')


describe('Ciclos',()=>{
    it('For', ()=>{
        for(let i=0; i<=10; i++){
            let j= 5
            cy.log('numero: '+i)
            cy.log(j+'x'+i+'='+j*i)
        }
    })
   
 
    it('For each', ()=>{
        cy.visit('https://testingqarvn.com.es')
        /* Como no existe un ejemplo en la web para este caso solo vamos a poner el ejemplo 
        (.productName) son varios elementos con la misma clase */

        /*each tiene 3 variables por defecto $el, index y $list */
        cy.get('.productName').each(($el,index,$list)=>{

            let vestido = $el.text()
            if(vestido.includes('Blouse')){
                //wrap, es una funcion que toma un elemento en especifico
                cy.wrap($el).click()                                                                                                                                                                                                                                                                                               
            }
        })
})


    it('each 2', ()=>{
        cy.visit('https://testingqarvn.com.es')

        const datos = [] //un arreglo 

        cy.get('.productname').each(($el,index,$list)=>{
            datos[index]=$el.text()
        }).then(()=>{
            for(let x=0; x<=datos.length; x++){
                cy.get('#center_column .product-name').eq(x).click({force:true}) //hace click sobre el primer elemento de la lista
                cy.get('#quantity').should('be.visible').clear().type('4') //cambia el valor del input
                cy.get('#group1').select('M').should('have.value','2') //selecciona un valor de la lista select
                cy.get('.excusive > span').should('be.visible').click({force:true}) 
                cy.get('#id_btn').click({force:true})
                cy.get('.icon-home').should('be.visible').click()//hace click sobre el boton inicio y vuelve a la lista de elementos para recorrer
            }
        })
    })

})