pipeline{
     agent any

     tools{nodejs 'node'}

     stages{
        stage('cypress parallel test suite'){ //aqui se le puede poner la descripcion que se quiera 
            parallel{

                //la cantidad de instancias que se tengan en jenkins se tienen esclavos
                stage('slave 1'){
                    agent{
                        label 'agent_1' //nombre la etiqueta que se configuro en jenkins
                    }
                    steps{
                        git url: '' //url del repositorio github
                        bat'npm install' //si el repo no tiene la caprtena de node_modules se pone esta linea para que instale los modulos de node
                        bat 'npm update'
                        bat 'npx cypress run --spec "cypress\e2e\Ejemplos\Assert.cy.js" --parallel' //puede correr instancias en paralelo
                    }
                }
            }
        }
     }
}