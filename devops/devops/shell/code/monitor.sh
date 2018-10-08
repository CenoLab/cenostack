#!/usr/bin/env bash

#获取cpu使用率
cpuUsage=`top -n 1 | awk -F '[ %]+' 'NR==3 {print $3}'`
#获取磁盘使用率
data_name="/dev/vda1"
diskUsage=`df -h | grep $data_name | awk -F '[ %]+' '{print $5}'`
#获取内存情况
mem_total=`free -m | awk -F '[ :]+' 'NR==2{print $2}'`
mem_used=`free -m | awk -F '[ :]+' 'NR==3{print $3}'`
#统计内存使用率
mem_used_persent=`awk 'BEGIN{printf "%.0f\n",('$mem_used'/'$mem_total')*100}'`


function check(){
      echo ${cpuUsage}
      echo ${diskUsage}
      echo ${mem_used_persent}
}
function main(){
        check
}
main

192.168.112.6
192.168.112.112
192.168.112.3
192.168.112.111