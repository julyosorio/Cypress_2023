describe('Los Assertion',()=>{

    it('Assert',()=>{
        cy.visit('https://testingqarvn.com.es/datos-personales/')

        //assert para verificar si un campo es visible
        cy.get('#wsf-1-field-21').should('be.visible')
        //aqui se valida que el campo exista y escribe en el input
        cy.get('#wsf-1-field-21').should('be.visible').type('Julieth')

        //Assert para verificar si un campo esta habilitado 
        cy.get('#wsf-1-field-22').should("be.enabled")
        //en la siguiente linea verifica si el campo esta habilitado y escribe en el campo 
        cy.get('#wsf-1-field-22').should("be.enabled").type('Osorio Tafur')
    })

    //Assert contains
    it('Contains',()=>{
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.get('h2').contains('Datos Personales Básicos')
        
    })

        //Assert find
        it('Assert Find',()=>{
            cy.visit('https://testingqarvn.com.es/datos-personales/')
            cy.get('h2').contains('Datos Personales Básicos')
            cy.get('[data-type="text"]').find('[class="wsf-label"]').eq(0).should('be.visible') 
            //eq(0) es la primer posicion del arreglo de elementos que encontro en este caso encontro dos label con la misma clase
            .then(()=>{
                cy.get('[placeholder="Nombre:"]').should('be.visible').type('Macarena')
            })
            
        })

        //assert text
        it('Assert Text',()=>{
            cy.visit('https://testingqarvn.com.es/datos-personales/')
            cy.get('h2').contains('Datos Personales Básicos')
            cy.get('[data-type="text"]').find('[class="wsf-label"]').eq(0)
            .should('be.visible').then((label)=>{ //el .text() no aplica para input
                let texto=label.text()
                if(texto=='Nombre:'){
                cy.get('[placeholder="Nombre:"]').should('be.visible').type('Macarena')
                }else{
                    cy.log(texto)
                }

            })  
        })

          //assert text eliminando un caracter de la cadena 
          it('Assert Text',()=>{
            cy.visit('https://testingqarvn.com.es/datos-personales/')
            cy.get('h2').contains('Datos Personales Básicos')
            cy.get('[data-type="text"]').find('[class="wsf-label"]').eq(0)
            .should('be.visible').then((label)=>{ //el .text() no aplica para input
                let texto=label.text()
                texto = texto.slice(0,6) 
                /*con el slice decimos que queremos tomar desde la posicion 0, y 6 elementos eliminando 
                en este caso los : que tiene el label */
                if(texto=='Nombre'){
                cy.get('[placeholder="Nombre:"]').should('be.visible').type('Macarena')
                }else{
                    cy.log(texto)
                }

            })  
        })

        //Assert have contains
        
        it('Assert have',()=>{
            cy.visit('https://testingqarvn.com.es/datos-personales/')
            cy.get('h2').should('have.text','Datos Personales Básicos')

        })

        it('Assert contain',()=>{
            cy.visit('https://testingqarvn.com.es/datos-personales/')
            cy.get('h2').should('contain.text','Personales')

        })

        it('Assert class',()=>{
            cy.visit('https://testingqarvn.com.es/datos-personales/')
            cy.get('h2').should('contain.text','Personales')
            cy.get('#wsf-1-field-21').should('have.class', 'wsf-field').then(()=>{
                cy.get ('[placeholder="Nombre:"]').type('Matias')
            })

        })

        it('Assert AND',()=>{
            cy.visit('https://testingqarvn.com.es/datos-personales/')
            cy.get('h2').should('contain.text','Personales')
            cy.get('#wsf-1-field-21').should('be.visible').and('have.class', 'wsf-field').then(()=>{
                cy.get ('[placeholder="Nombre:"]').type('Matias')
            })

        })

        
        it('Assert Not*',()=>{
            cy.visit('https://testingqarvn.com.es/datos-personales/')
            cy.get('h2').should('contain.text','Personales')
            cy.get('#wsf-1-field-21').should('be.visible').and('not.have.class', 'wsf1-field')
            .then(()=>{
                cy.get ('[placeholder="Nombre:"]').type('Matias')
            })
        })

        //validando la cantidad de elementos que tenga y validando el css 
        it('length',()=>{
            cy.visit('https://testingqarvn.com.es/datos-personales/')
            cy.get('h2').contains('Datos Personales Básicos')
            cy.get('[class="wsf-field"]').should('have.length',4).and('have.css','font-size', '14px')
    

        })

        //contains desde el inicio
        it('contains desde el inicio',()=>{
            cy.visit('https://testingqarvn.com.es/datos-personales/')
            cy.get('h2').contains('Datos Personales Básicos')
            cy.contains('[class="wsf-label"]', 'Nombre:').should('be.visible').then(()=>{
                cy.get('[placeholder="Nombre:"').type('matias')
                cy.wait(3000)
                cy.contains('[type="submit"]', 'Submit').click()
                cy.get('p').should('have.text','Gracias por tu encuesta.')
            })
        })

        //invoke
        it.only('contains desde el inicio',()=>{
            cy.visit('https://testingqarvn.com.es/datos-personales/')
            cy.contains('[class="wsf-label"]', 'Nombre:').should('be.visible').then(()=>{
                cy.get('[name="field_21"]').invoke('attr', 'placeholder').should('contain','Nombre:') //localiza los elementos con atributo placeholder
                .then(()=>{
                    cy.get('#wsf-1-field-21').type('matias')
                    cy.get('#wsf-1-field-21').invoke('attr','style','color:red') //cambia el color de la fuente 
                    cy.get('#wsf-1-field-21').clear().type('Macarena').invoke('attr', 'style', 'color:green')
                })
            })
        })

})