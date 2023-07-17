pipeline{
     agent any

     tools{nodejs 'node'}

     stages{
        stage('cypress parallel test suite'){ //aqui se le puede poner la descripcion que se quiera 
            parallel{

                //la cantidad de instancias que se tengan en jenkins se tienen esclavos
                stage('Slave 1'){
                    agent{
                        label 'agent1_One' //nombre la etiqueta que se configuro en jenkins
                    }
                    steps{
                        git url: 'https://github.com/julyosorio/Cypress_2023.git' //url del repositorio github
                        bat'npm install' //si el repo no tiene la caprtena de node_modules se pone esta linea para que instale los modulos de node
                        bat 'npm update'
                        bat 'npx cypress run  --parallel' //puede correr instancias en paralelo
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
}