pipeline {
    agent any
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
            steps {
                sh 'docker-compose -f docker-compose.dev.yml up -d'
                sh 'curl http://localhost:80' // Verify service is up and running
                // Run tests for development environment
                // If tests pass, continue to next stage
            }
        }
    }
}
