#!/usr/bin/env bash


export CATALINA_HOME=/export/servers/tomcat

deploy(){
      if [ -f $1 ];then
        echo "unzip -oq $1 -d $2"
        unzip -oq $1 -d $2
      fi
}

changeConfig(){
    sed -i "s/SHUTDOWN_PORT/${SHUTDOWN_PORT}/g" $CATALINA_BASE/conf/server.xml
    sed -i "s/HTTP_PORT/${PORT}/g" $CATALINA_BASE/conf/server.xml
    sed -i "s#DOC_BASE#${DOC_BASE}#g" $CATALINA_BASE/conf/Catalina/localhost/ROOT.xml
}

restart(){
    stop
    stop
    stop

    start
}

start() {
        $CATALINA_HOME/bin/startup.sh -config $CATALINA_HOME/conf/server.xml
}

stop() {
        checkhealth || return 0
        $CATALINA_HOME/bin/shutdown.sh -config $CATALINA_HOME/conf/server.xml
        sleep 3
        (checkhealth || return 0) | awk '{print $2}' | xargs kill -9
        sleep 1
        checkhealth && return 1 || return 0
}

checkhealth() {
        ps -ef | grep -v grep | grep $CATALINA_HOME/conf/server.xml
}

help() {
        echo "${0} <deploy|start|stop|restart|status>"
        return 1
}

case "${1}" in
    deploy)
        deploy $2 $3
        ;;
    start)
        start
        ;;
    restart)
        restart
        ;;
    stop)
        stop
        ;;
    status|health|checkhealth)
        checkhealth
        ;;
    restart)
        stop && start
        ;;
    *)
        help
        ;;
esac





source /etc/profile
[ -f default_env.sh ] && source default_env.sh

[ $PORT ] || PORT=8001

apihost=$API_HOST

#Setting environment variables
set_env_var(){
        #eg. JAVA_BIN /export/servers/jdk1.8.0_20/bin
        if [  -z "$JAVA_BIN" ];then

                export JAVA_BIN=/export/servers/jdk/bin

        else
                echo "JAVA_BIN value is $JAVA_BIN "
                JAVA_BIN="JAVA_BIN=$JAVA_BIN"
                export $JAVA_BIN

        fi

        if [  -z "$NODE_HOME" ];then

                export NODE_HOME=/export/servers/node/bin

        else
                echo "NODE_HOME value is $NODE_HOME "
                NODE_HOME="NODE_HOME=$NODE_HOME"
                export $NODE_HOME

        fi

        export PATH=$NODE_HOME:$JAVA_BIN:$PATH

        env
}

#Setting environment variables
set_env_var



cd xxx-view

base_path=$(pwd)
package_name=$(awk -F'"' '$2=="name"{print $4}' start.json)

set_static_domain(){
        if [[ -n ${1} ]];then
                weppack_domain="\/\/${1}"
        else
                weppack_domain=""
        fi
        if [[ "$package_name" == "b2b-photo-space-view"  ]];then
                html_dir="./template/html/"
                if [[ -d ${html_dir} ]];then
                        grep ".html" -rl ./template/html/* | xargs sed -i "/\/\/staticServer/s/\/\/staticServer/${weppack_domain}/g"
                fi
        else
                webpack_assets="./webpack-assets.json"
                befor_replace_num=`cat ${webpack_assets}|grep -o '//_b2b_static_server_'|wc -l`
                if [[ -f ${webpack_assets} ]];then
                        sed -i "/\/\/_b2b_static_server_/s/\/\/_b2b_static_server_/${weppack_domain}/g" ${webpack_assets}
                        after_replace_num=`cat ${webpack_assets}|grep -o ${weppack_domain}|wc -l`
                fi
        fi
}

start() {
        [ $STATIC_DOMAIN ] || {
        if [ $GROUP = b2b_gray ];then
                STATIC_DOMAIN=static.b2b-v2gray.jcloudec.com
        elif [ $GROUP = b2b_prod ];then
                STATIC_DOMAIN=static.b2b-v2prod.jcloudec.com
        elif [ $GROUP = b2b_pre1 ];then
            STATIC_DOMAIN=static.b2b-v2-pre1.jcloudec.com
        elif [ $GROUP = b2b_pre2 ];then
            STATIC_DOMAIN=static.b2b-v2-pre2.jcloudec.com
        else
                STATIC_DOMAIN=static.b2b-v2.jcloudec.com
        fi
        }
        set_static_domain $STATIC_DOMAIN
        start_json="./start.json"
        properties_port=`cat $start_json | grep 'PORT' |awk -F ':' 'NR==1{print $2}'|awk -F ',' '{print $1}'`
        LANG=C sed -i "s#${properties_port}#${PORT}#g" $start_json
        sed -i "s/gw.eureka.com/${apihost}/g" ./src/config.js
        [ "$package_name" == "b2b-decoration-view" ] && sed -i "s/gw.eureka.com/${apihost}/g" ./dao/global.js
        stop
        pm2 start start.json
}

stop() {
        check_pm2_process
        process_id1=$(netstat -lntp |awk '{print $4,$7}'|grep ":$PORT"|awk '{print $2}'|awk -F '/' '{print $1}')
        for (( n=1;i<=3;i++ ))
        do
                pm2 show $package_name && {
                        pm2 stop $package_name
                        pm2 delete $package_name
                }
                #rm -rf ~/.pm2
                sleep 3
                kill_process_id || return 0
        done
}


kill_process_id(){
        echo $PORT
        check_single_instance
        if [ -z "$exec_lab" ];then
                process_id=$(netstat -lntp |awk '{print $4,$7}'|grep ":$PORT"|awk '{print $2}'|awk -F '/' '{print $1}')
                if [ -n "$process_id"  ];then
                        node_process_id=$process_id
                        kill_node_process
                        return 0
                else
                        echo "come in else branch"
                        node_process_id=$process_id1
                        kill_node_process
                        return 1
                fi
        fi

}

kill_node_process(){
        process_pid=$(ps -ef |grep $node_process_id|grep -v grep  |awk -v var=$def_app_name  '{if($9 ~ var) {print $2}}')
        array_pid=${process_pid// /}
        for id in ${array_pid[@]}
        do

                if [  -n "$id"  ];then
                        kill -9 $id >/dev/null 2>&1
                        kill -9 $id >/dev/null 2>&1
                fi
        done
}

check_pm2_process(){
        pm2num=$(ps -ef |grep pm2 |grep -v grep |awk '{if($8 ~ "PM2") {print $1,$2,$NF}}'|awk   '{if($1 ~ "admin") {print $2,$NF}}'|wc -l)
        if [[ $pm2num -lt  1 ]];then
                if [  -d "/home/admin" ];then
                        cd /home/admin
                             pm2 -v
                        cd -
                else
                        echo "The /home/admin path doesn't exist"
                fi
        else
                echo "Pm2 process exists"

        fi

}

check_single_instance(){

        services=$(pm2 list|awk '{print $2}'|grep -v '^$'|grep -v 'App'|grep -v 'pm2'|uniq)
        echo ${services// / }
        arr_service=(${services// / })

        service_count=$(pm2 list|awk '{print $2}'|grep -v '^$'|grep -v 'App'|grep -v 'pm2'|uniq|wc -l)
        echo $service_count

        echo $package_name
        if [[  $service_count -gt 0  ]];then
                echo "${#arr_service[@]}"

                if [[ ${#arr_service[@]} -eq 1   ]];then
                        lab=$(echo "${arr_service[@]}" | grep -wq "$package_name" &&  echo "Yes" || echo "No")
                        echo "$lab"
                        if [  "$lab" == "Yes"  ];then
                                pm2 kill
                                sleep 1
                                                check_pm2_process
                                                exec_lab=1
                        fi
                fi
        else
                pm2 kill
                sleep 1
                check_pm2_process
                exec_lab=1

        fi
}


checkhealth() {
         netstat -lntp | awk '{print $4}' | grep ":$PORT$" >/dev/null 2>&1
}

help() {
        echo "${0} <start|stop|restart|status>"
        exit 1
}

case "${1}" in
    start)
        start
        ;;
    stop)
        stop
        ;;
    status|health|checkhealth)
        checkhealth
        ;;
    restart)
        stop && start
        ;;
    *)
        help
        ;;
esac


