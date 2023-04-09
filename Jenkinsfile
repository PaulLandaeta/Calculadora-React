pipeline {
    agent any
    parameters {
        choice(name: 'ENVIRONMENT', choices: ['DEV', 'QA', 'PROD'], description: 'Choose environment to deploy')
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/PaulLandaeta/Calculadora-React.git'
            }
        }
        stage('Build Frontend') {
            steps {
                sh 'npm install && npm run build'
            }
        }
        stage('Dockerize') {
            steps {
                script {
                    def dockerComposeFile = "docker-compose-${params.ENVIRONMENT}.yml"
                    sh "docker-compose -f ${dockerComposeFile} up -d"
                }
            }
        }
    }
}
