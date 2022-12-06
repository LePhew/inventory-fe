pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'CI=False npm run build'
            }
        }
    }
}
