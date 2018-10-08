#!/usr/bin/env bash


get(){
    echo $3 | sudo ssh $1@$2 "sudo bash $4/tomcat_port.sh get $4 $5 $6"
}


help() {
        echo "${0} <get>"
        return 1
}

CONTAINER_USER=$2
CONTAINER_HOST=$3
CONTAINER_PWD=$4
DEPLOY_PATH=$5
PROJECT_NAME=$6
ENV=$7

case "${1}" in
    get)
        get $2 $3 $4 $5 $6 $7
        ;;
    *)
        help
        ;;
esac


