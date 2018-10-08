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


