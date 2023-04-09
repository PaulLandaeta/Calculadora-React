pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/PaulLandaeta/Calculadora-React.git'
            }
        }
        stage('Build Backend') {
            steps {
                sh 'cd backend && mvn clean install'
            }
        }
        stage('Build Frontend') {
            steps {
                sh 'cd frontend && npm install && npm run build'
            }
        }
        stage('Dockerize') {
            steps {
                sh 'docker build -t myimage:latest .'
            }
        }
        stage('Push to Registry') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'mycreds', passwordVariable: 'PASSWORD', usernameVariable: 'USERNAME')]) {
                    sh "docker login -u $USERNAME -p $PASSWORD myregistry.com"
                    sh 'docker push myregistry.com/myimage:latest'
                }
            }
        }
        stage('Deploy to Staging') {
            steps {
                sh 'ssh user@staging-server "docker-compose down && docker-compose up -d"'
            }
        }
        stage('Deploy to Production') {
            steps {
                sh 'ssh user@production-server "docker-compose down && docker-compose up -d"'
            }
        }
    }
}
