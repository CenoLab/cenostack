#!/usr/bin/env bash


get(){

    # 查询部署目录下项目对应环境的端口
    # $1 DEPLOY_PATH
    # $2 PROJECT_NAME
    # $3 ENV
    grep -r server.port $1/$2/WEB-INF/classes/application-$3.properties |awk -F = '{print $2}'
}


help() {
        echo "${0} <get>"
        return 1
}

DEPLOY_PATH=$2
PROJECT_NAME=$3
ENV=$4

case "${1}" in
    get)
        get $2 $3 $4
        ;;
    *)
        help
        ;;
esac


