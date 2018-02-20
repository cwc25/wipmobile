pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building'
                echo 'Install depedency...'
                sh '#!/bin/sh -l'
                sh 'npm install'
                echo 'Install Ionic and Cordova...'
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