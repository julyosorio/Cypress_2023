require('cypress-plugin-tab')


describe('Tipo de funciones -> Enter', () =>{
    it('Enter', () =>{
        cy.visit('https://www.google.com/?hl=es')
        cy.title().should('eq', "Google")
        cy.wait(1500)
        //cy.get('#APjFqb').type("selenium")
        //en la siguiente linea se busca el elemento por el name 
        cy.get('[name="q"]').type("selenium.dev {enter}") 
        // en la anterior linea se escribe en el input el valor que se desea buscar y se envia la funcion Enter 
        cy.get('#rso > div.hlcw0c > div > div > div > div > div > div > div > div.yuRUbf > a > h3').click()
    })

    it('pageUp', () =>{
    //it.only('pageUp', () =>{ (al poner it.only() solo correra esa caso, cuando se tienen muchos casos y solo se requiere correr uno )
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.get('#wsf-1-sections-4').type("{pagedown}") // ir abajo de la pagina, no aplica para elementos tipo <img>
        cy.get('#menu-item-185').type('{pageup}')
    }
    )

    /*Para la funcion TAB hay que descargar el plugin con el comando 'npm install -D cypress-plugin-tab' y una vez instalado 
    se debe colocar al inicio de test la siguiente instruccion 'require('cypress-plugin-tab')'
    la funcion de TAB no puedo usar los assertions, esta funcion pasa al siguiente elemento del DOM
    */
    it('Funcion Tab', ()=>{
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.get('#wsf-1-field-21').type('Julieth').tab()
        .type('Osorio').tab()
        .type('ljosoriot@gmail.com')
    }
    )
//Opciones de Click
    it('Click sencillo', ()=>{
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.get('#wsf-1-field-21').type('Macarena')
        cy.get('#wsf-1-field-22').type('caro')
        cy.get('#wsf-1-field-23').type('correo@gmail.com')
        cy.get('#wsf-1-field-24').type('528968')
        cy.get('#wsf-1-field-28').type('direccion')
        cy.get('#wsf-1-field-27').should('be.visible').click()
        cy.get('p').should('be.visible')
    }
    )

    it('Click forzado - Force true', ()=>{
        cy.visit('https://testingqarvn.com.es')
        cy.get('#menu-item-314').should('be.visible').click({ force: false })

    })

    it('Click coordenadas x, y', ()=>{
        cy.visit('https://testingqarvn.com.es')
        cy.get('#menu-item-178').should('be.visible').click(10,30)

    })

})