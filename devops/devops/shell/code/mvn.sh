#!/usr/bin/env bash


function getCurrentTimeStamp(){
     currentTime=`date "+%Y_%m_%d_%H_%M_%S"`
     echo $currentTime
}

function checkOut(){
    cd $1
    git checkout $2
    cd ..
}

function mvnSyncCompileAll(){
    cd $1
    mvn clean package -Dmaven.test.skip=true #&
    cd ..
}

function findPackage(){
    find $1/$2 -name $3
}


function movePackage(){

    OLD_IFS="$IFS"
    IFS="/"
    array=($5)
    IFS="$OLD_IFS"

    mkdir $3/$4
    mkdir $3/$4/${array[1]}
    TIME=`getCurrentTimeStamp`
    mkdir $3/$4/${array[1]}/$TIME
    mv `find $1/$2 -name $4.war` $3/$4/${array[1]}/$TIME

    # unzip
    if [ -f $3/$4/${array[1]}/$TIME/$4.war ];then
        echo "unzip -oq $3/$4/${array[1]}/$TIME/$4.war -d $3/$4/${array[1]}/$TIME/$4"
        unzip -oq $3/$4/${array[1]}/$TIME/$4.war -d $3/$4/${array[1]}/$TIME/$4
    fi
}

function buildPackage(){
    # 1. checkout
    checkOut $2 $3
    # 2. mvn package
    mvnSyncCompileAll $2
    # 3. find project.war
    findPackage $1 $2 $5
    # 4. mv project.war -> build_path
    movePackage $1 $2 $4 $5 $3
}

CODE_PATH=$1
GIT_PATH=$2
GIT_BRANCH=$3
BUILD_PATH=$4
PROJECT_NAME=$5

cd $CODE_PATH
buildPackage $CODE_PATH $GIT_PATH $GIT_BRANCH $BUILD_PATH $PROJECT_NAME


