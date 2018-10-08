#!/usr/bin/env bash


set(){

    # 查询部署目录下项目对应环境的端口
    # $1 DEPLOY_PATH
    # $2 PROJECT_NAME
    # $3 ENV
    if [ -f $1/$2/WEB-INF/classes/META-INF/*/webMvcContext.xml ];then
        sed -i "s/:application-gray.properties/:application-$3.properties/g" $1/$2/WEB-INF/classes/META-INF/*/webMvcContext.xml
    fi

    if [ -f $1/$2/WEB-INF/classes/payclient.properties ];then
        sed -i "s#^cafile=.*#cafile=$1/$2/WEB-INF/classes/merchant.jks#g" $1/$2/WEB-INF/classes/payclient.properties
    fi

    if [ -f $1/$2/WEB-INF/classes/payclient_quick.properties ];then
        sed -i "s#^cafile=.*#cafile=$1/$2/WEB-INF/classes/merchant.jks#g" $1/$2/WEB-INF/classes/payclient_quick.properties
    fi

    sed -i "s/spring.profiles.active=.*/spring.profiles.active=$3/g" $1/$2/WEB-INF/classes/application.properties
    #    sed -i "s/^server.port=.*/server.port=`grep -r server.port $1/$2/WEB-INF/classes/application-$3.properties | awk -F = '{print $2}'`/g" $1/$2/WEB-INF/classes/application-$3.properties
    echo "" >> $1/$2/WEB-INF/classes/application.properties
    echo "spring.jmx.enabled=false" >> $1/$2/WEB-INF/classes/application.properties
}

help() {
        echo "${0} <set>"
        return 1
}

DEPLOY_PATH=$2
PROJECT_NAME=$3
ENV=$4

case "${1}" in
    set)
        set $2 $3 $4
        ;;
    *)
        help
        ;;
esac


