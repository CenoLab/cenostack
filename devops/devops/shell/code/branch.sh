#!/usr/bin/env bash

function getCurrentTimeStamp(){
     currentTime=`date "+%Y-%m-%d %H:%M:%S"`
     currentTimeStamp=`date -d "$currentTime" +%s`
     echo $currentTimeStamp
}


function gitbranch()
{
   cd $1/$2
   git branch -r
   cd ..
}






CODE_PATH=$1
GIT_PROJECT_NAME=$2

cd $CODE_PATH
gitbranch $CODE_PATH $GIT_PROJECT_NAME