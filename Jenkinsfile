#!/usr/bin/env groovy

env.PROJECT_NAME = 'web-portal'
env.ADMIN_EMAIL = 'it@kakamf.com'
env.PACKAGE_DIR = '/mydata/jenkins/packages/'
env.INSTANCE_NAME = 'cybereits-web-portal'

env.ZIP_FILENAME_ALPHA = 'web-portal-alpha.tar.gz'
env.REMOVE_SERVER_ALPHA = 'kkmf@47.93.124.209'

env.ZIP_FILENAME_PROD = 'web-portal-prod.tar.gz'
env.REMOTE_SERVER_PROD = 'deploy@www.cybereits.com'

pipeline {
    // 在任何可用的代理上执行这个 Pipeline 或其任意 stage
    agent any
    
    stages {

      // 准备阶段
      stage('Preparation'){
        steps {
          // 复制项目所需的配置文件
          sh "cp /mydata/jenkins/environments/${env.PROJECT_NAME}/env.js ./config/env.js"
        }
      }
  
      // 为 alpha 分支交付
      stage('Deliver for alpha') {
        when {
          branch 'alpha'
          expression { currentBuild.result == null || currentBuild.result == 'SUCCESS' }
        }

        steps {
          sh "npm install"
          sh "npm run build"
          // 压缩文件
          sh "tar -cvzf ${env.PACKAGE_DIR}${env.ZIP_FILENAME_ALPHA} ./config ./dist ./client ./bin ./public ./server ./HashMapping.json ./manifest.json ./package-lock.json ./package.json "
          // 上传压缩文件到测试服务器
          sh "scp ${env.PACKAGE_DIR}${env.ZIP_FILENAME_ALPHA} ${REMOVE_SERVER_ALPHA}:/home/wwwroot"
          
          // 执行测试服务器的部署脚本
          sh "ssh ${REMOVE_SERVER_ALPHA} 'cd /home/wwwroot; \
          mkdir ${env.PROJECT_NAME} -p; \
          tar -zxvf ${env.ZIP_FILENAME_ALPHA} -C ${env.PROJECT_NAME}; \
          cd ${env.PROJECT_NAME}; \
          npm install --production; \
          pm2 delete ${env.INSTANCE_NAME}; \
          npm run alpha'"
        }
      }
    
      // 为 production 分支交付
      stage('Deliver for master') {
        when {
          branch 'master'
          expression { currentBuild.result == null || currentBuild.result == 'SUCCESS' }
        }
        
        steps {
          sh "npm install"
          sh "npm run build"
          sh "tar -cvzf ${env.PACKAGE_DIR}${env.ZIP_FILENAME_PROD} ./config ./dist ./client ./bin ./public ./server ./HashMapping.json ./manifest.json ./package-lock.json ./package.json "
          sh "scp -P 65499 ${env.PACKAGE_DIR}${env.ZIP_FILENAME_PROD} ${REMOTE_SERVER_PROD}:/home/deploy"
          sh "ssh -p 65499 ${REMOTE_SERVER_PROD} 'cd /home/deploy; \
          mkdir ${env.PROJECT_NAME} -p; \
          tar -zxvf ${env.ZIP_FILENAME_PROD} -C ${env.PROJECT_NAME}; \
          cd ${env.PROJECT_NAME}; \
          npm install --production; \
          pm2 delete ${env.INSTANCE_NAME}; \
          npm run start'"
        }
      }

    }

    post {
        success {
            mail to: env.ADMIN_EMAIL,
                subject: "✅ ${currentBuild.fullDisplayName}",
                body: "详情请查看 ${env.BUILD_URL}"
        }
        failure {
            mail to: env.ADMIN_EMAIL,
                subject: "❌ ${currentBuild.fullDisplayName}",
                body: "构建时出错，具体错误请查看 ${env.BUILD_URL}"
        }
    }
}