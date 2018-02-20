pipeline {
    agent {
        docker {
            image 'node:6-alpine'
        }
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building'
                echo 'Install depedency...'
                sh 'npm install'
                echo 'Install Ionic and Cordova...'
                sh 'npm install -g ionic cordova'
                echo 'Build App...'
                sh 'ionic cordova build android --prod --release'

            }
        }
        stage('Test') {
            steps {
                echo 'Testing'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying'
            }
        }
    }
}