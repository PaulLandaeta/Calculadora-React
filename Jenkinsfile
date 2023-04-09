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
                sh 'curl http://host.docker.internal:80' // Verify service is up and running
                // Run tests for development environment
                // If tests pass, continue to next stage
            }
            post {
                success {
                  script {
                    env.BUILD_STATUS = 'SUCCESS'
                  }
                }
                failure {
                  script {
                    env.BUILD_STATUS = 'FAILURE'
                  }
                }
            }
        }
        stage('Deploy to QA') {
            when {
                environment name: 'BUILD_STATUS', value: 'SUCCESS'
            }
            steps {
                sh 'docker-compose -f docker-compose.dev.yml up -d'
                sh 'curl http://localhost:8080' // Verify service is up and running
                // Run tests for QA environment
                // If tests pass, continue to next stage
            }
            post {
                success {
                  script {
                    env.BUILD_STATUS = 'SUCCESS'
                  }
                }
                failure {
                  script {
                    env.BUILD_STATUS = 'FAILURE'
                  }
                }
            }
        }
        stage('Deploy to Production') {
            when {
                environment name: 'BUILD_STATUS', value: 'SUCCESS'
            }
            steps {
                sh 'docker-compose -f docker-compose.dev.yml up -d'
                sh 'curl http://localhost:8080' // Verify service is up and running
                // Run tests for production environment
            }
        }
    }
}
