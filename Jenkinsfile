#!/usr/bin/env groovy

env.PROJECT_NAME = 'fe-portal'
env.ADMIN_EMAIL = 'it@kakamf.com'
env.PACKAGE_DIR = '/mydata/jenkins/packages/'

env.ZIP_FILENAME_ALPHA = 'fe-portal-alpha.tar.gz'
env.REMOVE_SERVER_ALPHA = 'kkmf@alpha.kakamf.com'

env.ZIP_FILENAME_PROD = 'fe-portal-prod.tar.gz'
env.REMOTE_SERVER_PROD = 'deploy@www.cybereits.com'

pipeline {
    // 在任何可用的代理上执行这个 Pipeline 或其任意 stage
    agent any
    
    stages {
  
      // 为 alpha 分支交付
      stage('Deliver for alpha') {
        when {
          branch 'alpha'
          expression { currentBuild.result == null || currentBuild.result == 'SUCCESS' }
        }

        steps {
          // 复制项目所需的配置文件
          sh "cp /mydata/jenkins/environments/${env.PROJECT_NAME}/alpha.json ./src/config/env.json"
          sh "npm install"
          sh "IS_ALPHA=true npm run build"
          // 上传 dist 目录的文件到 oss 服务器
          sh "upload-cli dir ./dist -b cybereits-alpha -p dist/${env.PROJECT_NAME}/ -i -e index.html"
          // 压缩文件
          sh "tar -cvzf ${env.PACKAGE_DIR}${env.ZIP_FILENAME_ALPHA} ./dist"
          // 上传压缩文件到测试服务器
          sh "scp ${env.PACKAGE_DIR}${env.ZIP_FILENAME_ALPHA} ${REMOVE_SERVER_ALPHA}:/home/wwwroot"
          
          // 执行测试服务器的部署脚本
          sh "ssh ${REMOVE_SERVER_ALPHA} 'cd /home/wwwroot; \
          rm -rf ./${env.PROJECT_NAME}; \
          tar -zxvf ${env.ZIP_FILENAME_ALPHA} -C .; \
          mv ./dist/ ./${env.PROJECT_NAME}'"
        }
      }
    
      // 为 production 分支交付
      stage('Deliver for master') {
        when {
          branch 'master'
          expression { currentBuild.result == null || currentBuild.result == 'SUCCESS' }
        }

        steps {
          // 复制项目所需的配置文件
          sh "cp /mydata/jenkins/environments/${env.PROJECT_NAME}/production.json ./src/config/env.json"
          sh "npm install"
          sh "npm run build"
          // 上传 dist 目录的文件到 oss 服务器
          sh "upload-cli dir ./dist -b cybereits-prod -p dist/${env.PROJECT_NAME}/ -i -e index.html"
          // 压缩文件
          sh "tar -cvzf ${env.PACKAGE_DIR}${env.ZIP_FILENAME_PROD} ./dist"
          // 将压缩后的目录传递给正式环境
          sh "scp -P 65499 ${env.PACKAGE_DIR}${env.ZIP_FILENAME_PROD} ${REMOTE_SERVER_PROD}:/home/deploy"
          // 执行正式环境的部署脚本
          sh "ssh -p 65499 ${REMOTE_SERVER_PROD} 'cd /home/deploy; \
          rm -rf ${env.PROJECT_NAME}; \
          tar -zxvf ${env.ZIP_FILENAME_PROD} -C .; \
          mv ./dist/ ./${env.PROJECT_NAME}'"
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
