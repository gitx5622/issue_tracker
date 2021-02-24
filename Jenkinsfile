pipeline {
        environment {
            registry = "gits5622/issue_tracker"
            registryCredential = 'docker-hub'
            dockerImage = ''
            }
        agent any
        stages {
                stage('Cloning our Git') {
                    steps {
                    git 'https://github.com/gitx5622/issue_tracker.git'
                    }
                }
                stage('Building our image') {
                    steps{
                        script {
                        dockerImage = docker.build registry
                        }
                    }
                }
                 stage('Deploy our image') {
                                    steps{
                                        script {
                                        docker.withRegistry( '', registryCredential ) {
                                        dockerImage.push()
                                            }
                                        }
                                    }
                                }

                stage ('Running tha Application'){
                    steps{
                        sh "docker run -p 3000:80 gits5622/issue_tracker:latest"
                    }
                }

    }
}