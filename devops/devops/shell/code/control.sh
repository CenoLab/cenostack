#!/usr/bin/env bash

export CATALINA_HOME=/export/servers/tomcat

config(){
        # $1 user
        # $2 host
        # $3 pwd
        # $4 containerName
        echo -e "$3 | scp /export/devops/config/$4/server.xml $1@$2:$CATALINA_HOME/config/"
        echo $3 | scp /export/devops/config/$4/server.xml $1@$2:$CATALINA_HOME/conf/
}

restart() {
        echo -e "$3 | sudo ssh $1@$2 \"sudo bash $CATALINA_HOME/tomcat_control.sh restart\""
        echo $3 | sudo ssh $1@$2 "sudo bash $CATALINA_HOME/tomcat_control.sh restart"
}

monitor(){
        echo $3 | sudo ssh $1@$2 "sudo bash $CATALINA_HOME/monitor.sh"
}

stop() {
       echo -e "$3 | sudo ssh $1@$2 \"sudo bash $CATALINA_HOME/tomcat_control.sh stop\""
       echo $3 | sudo ssh $1@$2 "sudo bash $CATALINA_HOME/tomcat_control.sh stop"
}

checkhealth() {
       echo -e "$3 | sudo ssh $1@$2 \"sudo bash $CATALINA_HOME/tomcat_control.sh checkhealth\""
       echo $3 | sudo ssh $1@$2 "sudo bash $CATALINA_HOME/tomcat_control.sh checkhealth"
}

help() {
        echo "${0} <monitor|config|start|stop|restart|status>"
        return 1
}

case "${1}" in

    monitor)
        monitor $2 $3 $4 $5
        ;;
    config)
        config $2 $3 $4 $5
        ;;
    restart)
        restart $2 $3 $4 $5
        ;;
    stop)
        stop $2 $3 $4 $5
        ;;
    status|health|checkhealth)
        checkhealth $2 $3 $4 $5
        ;;
    restart)
        stop && start
        ;;
    *)
        help
        ;;
esac


