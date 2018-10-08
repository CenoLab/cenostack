#!/usr/bin/env bash

function scpService(){
     if [ -f $1/$2/$3/$4/$2.war ];then

         echo -e "$7 | scp $1/$2/$3/$4/$2.war $5@$6:$8/"
         echo $7 | scp $1/$2/$3/$4/$2.war $5@$6:$8/

         echo -e "echo $7 | scp /export/devops/shell/code/tomcat_control.sh  $5@$6:$8/"
         echo $7 | scp /export/devops/shell/code/tomcat_control.sh  $5@$6:$8/

         echo -e "echo $7 | scp /export/devops/shell/code/tomcat_port.sh  $5@$6:$8/"
         echo $7 | scp /export/devops/shell/code/tomcat_port.sh  $5@$6:$8/

         echo -e "echo $7 | scp /export/devops/shell/code/tomcat_env.sh  $5@$6:$8/"
         echo $7 | scp /export/devops/shell/code/tomcat_env.sh  $5@$6:$8/

         echo -e "echo $7 | scp /export/devops/shell/code/tomcat_env.sh  $5@$6:$8/"
         echo $7 | scp /export/devops/shell/code/monitor.sh  $5@$6:$8/

         echo -e "$7 | sudo ssh $5@$6 \"sudo bash $8/tomcat_control.sh deploy $8/$2.war\""
         echo $7 | sudo ssh $5@$6 "sudo bash $8/tomcat_control.sh deploy $8/$2.war $8/$2"
     else
         echo $1/$2/$3/$4/$2.war not found!
     fi
}


# /export/devops/build
# b2b-service-finance
# feature-ka-20180731-bash-test
# 2018_08_24_18_04_33
# root
# localhost
# yangxingfeng
# /export/services
# /export/services/log
BUILD_PATH=$1
PROJECT_DIR=$2
PROJECT_BRANCH=$3
PROJECT_VERSION=$4

CONTAINER_USER=$5
CONTAINER_HOST=$6
CONTAINER_PWD=$7

REMOTE_DEPLOY_PATH=$8

cd $BUILD_PATH
scpService $1 $2 $3 $4 $5 $6 $7 $8


