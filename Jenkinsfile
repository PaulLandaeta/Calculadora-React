pipeline {
    agent any
    environment {
        DOCKER_DEV_COMPOSE_FILE = 'docker-compose-DEV.yml'
        DOCKER_QA_COMPOSE_FILE = 'docker-compose-qa.yml'
        DOCKER_PROD_COMPOSE_FILE = 'docker-compose-prod.yml'
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
        stage('Deploy to Development') {
            environment {
                DOCKER_COMPOSE_FILE = DOCKER_DEV_COMPOSE_FILE
            }
            steps {
                sh 'docker-compose -f ${DOCKER_COMPOSE_FILE} up -d'
                sh 'curl http://localhost:80' // Verify service is up and running
                // Run tests for development environment
                // If tests pass, continue to next stage
            }
        }
    }
}
