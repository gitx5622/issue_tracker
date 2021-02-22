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
                stage('Testing') {
                    steps {
                        sh 'npm test'
                    }
                    post{
                        always{
                            echo "Running up test"
                        }
                        success{
                            echo "Test paased"
                        }
                        failure{
                            echo "Test failed"
                        }
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
                        sh "docker-compose up"
                    }
                }

    }
}