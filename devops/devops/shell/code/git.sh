#!/usr/bin/env bash

function getCurrentTimeStamp(){
     currentTime=`date "+%Y-%m-%d %H:%M:%S"`
     currentTimeStamp=`date -d "$currentTime" +%s`
     echo $currentTimeStamp
}

function gitClone()
{
   echo -e "\033[32m git $1 not found. cloneing... from $1  \033[0m"
   git clone $1
}

function gitPull()
{
   cd $1
   echo -e "\033[32m git $1 found. pulling... from $1  \033[0m"
   git pull
   cd ..
}



function gitCloneAll()
{
   if [ -d $2 ];then
        gitPull  $2
    else
        gitClone http://$3:$4@$2
    fi

}


CODE_PATH=$1
GIT_PATH=$2
GIT_USER=$3
GIT_PWD=$4

cd $CODE_PATH
gitCloneAll $CODE_PATH $GIT_PATH $GIT_USER $GIT_PWD