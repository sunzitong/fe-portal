#!/usr/bin/env groovy

env.PROJECT_NAME = 'web-portal'

pipeline {
    agent any  // 在任何可用的代理上执行这个 Pipeline 或其任意 stage
    stages {
      stage('Preparation'){
        steps {
          // TODO 根据不同的环境加载不同的配置文件
          sh "cp /mydata/jenkins/environments/${env.PROJECT_NAME}/env.js /mydata/workspace/${env.PROJECT_NAME}/config/env.js"
        }
      }
      stage('Build') {
        steps {
          dir("/mydata/workspace/${env.PROJECT_NAME}"){
            sh 'npm install'
            sh 'npm run build'
          }
        }
      }
      stage('Deploy') {
        when {
          expression {
            currentBuild.result == null || currentBuild.result == 'SUCCESS'
          }
        }
        steps {
          dir("/mydata/workspace/${env.PROJECT_NAME}"){
            sh 'npm run start'
            sh 'npm run start-task'
          }
          cleanWs()
        }
      }
    }
    post {
        success {
            echo '交付流程执行成功！'
        }
        failure {
            echo '交付流程执行失败。'
        }
    }
}
