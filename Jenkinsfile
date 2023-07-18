pipeline{

    //este es un pipeline declarativo
     agent any // el agent es el que permite especificar el lugar donde se va a estar ejecutando 'nodo' ver documentacion de jenkins agent 

     parameters{
        string(name:"SPEC", defaultValue:"cypress/e2e/**/**", description:"Ej: cypress/e2e/**/*.cy.js")
        choice(name:"BROWSER", choice:['chrome'], description:"Seleccione un navegador")
     }
     options{
        // los options permiten configurar extras como: formatos a los logs

        ansiColor('xterm') //necesitamos esta opcion para que el log tenga una vista mas entendible 
     }

     stages{
//los stages son las pasos que se van a ejecutar

        stage('cypress parallel test suite'){ //aqui se le puede poner la descripcion que se quiera 
            parallel{
                //la cantidad de instancias que se tengan en jenkins se tienen esclavos
                stage('Slave 1'){
                    agent{
                        label 'agent1_One' //nombre la etiqueta que se configuro en jenkins
                    }
                    steps{
                        git url: 'https://github.com/julyosorio/Cypress_2023.git'//url del repositorio github
                        bat 'npm i' 
                        bat 'npm install' //si el repo no tiene la caprtena de node_modules se pone esta linea para que instale los modulos de node
                        bat 'npm update'
                        bat 'npx cypress run --parallel' //puede correr instancias en paralelo
                    }
                }
                  stage('Slave 2'){
                    agent{
                        label 'agent1_Two' //nombre la etiqueta que se configuro en jenkins
                    }
                    steps{
                        git url: 'https://github.com/julyosorio/Cypress_2023.git' //url del repositorio github
                        
                        bat'npm install' //si el repo no tiene la caprtena de node_modules se pone esta linea para que instale los modulos de node
                        bat 'npm update'
                        bat 'npx cypress run  --parallel' //puede correr instancias en paralelo
                    }
                }
                  stage('Slave 3'){
                    agent{
                        label 'agent1_Three' //nombre la etiqueta que se configuro en jenkins
                    }
                    steps{
                        git url: 'https://github.com/julyosorio/Cypress_2023.git' //url del repositorio github
                        bat'npm install' //si el repo no tiene la caprtena de node_modules se pone esta linea para que instale los modulos de node
                        bat 'npm update'
                        bat 'npx cypress run  --parallel' //puede correr instancias en paralelo
                    }
                }
            }
        }
     }
     post{
        always{
          
        }
     }
}