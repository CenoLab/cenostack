import { Component, OnInit } from '@angular/core';
import { ShellService } from '../../service/shell.service';
import { Log } from '../../domain/log.domain';
import { DevopsService } from '../../service/devops.service';
import { Developer } from '../../domain/developer.domain';
import { Page } from '../../domain/page.domain';
import { DevopsLog } from '../../domain/devLog.domain';

const SHELL_BASE_PATH = "/export/devops/devops/shell/code/";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  private developer:Developer;

  private serviceCount:String;
  private containerCount:String;
  private myServiceCount:String;
  private myContainerCount:String;
  private buildCount:String;
  private gitCount:String;

  private page:Page;

  private devLogs:DevopsLog[];

  constructor(private devopsService: DevopsService) { }

  ngOnInit() {
    this.getServiceCount();
    this.getContainerCount();
    this.getMyContainerCount();
    this.getMyServiceCount();
    this.getBuildCount();
    this.getCodeCount();

    this.devLogs = [];

    this.page = {
      page:0,
      num:8
    }

    this.getDevLogs(this.page);
  
  }

  showLogDetail(id){
    if(document.getElementById("toggle-log-"+id).style.display=="none"){
      document.getElementById("toggle-log-"+id).style.display="block";
      document.getElementById("log-span-"+id).className="fa fa-caret-down cc-span";
      
    }else{
      document.getElementById("toggle-log-"+id).style.display="none";
      document.getElementById("log-span-"+id).className="fa fa-caret-right cc-span";
    }
  }

  getDevLogs(page){
    let method ="api.devlog.list"
    let params = {
      page:page
    }
    this.devopsService.get(method,params).then(res=>{
      if(res.data.state==true){
        for (let msg of res.data.data) {
          this.devLogs.push({
            id:msg.id,
            name:msg.username,
            time:msg.lastModifyTime,
            command:msg.command,
            arg:msg.args,
            content:msg.content,
            desc:msg.ddesc,
            result:"",
          });
       }
      }else{
        for (let msg of res.data.data) {
          this.devLogs.push({
            id:msg.id,
            name:msg.username,
            time:msg.lastModifyTime,
            command:msg.command,
            arg:msg.args,
            content:msg.content,
            desc:msg.ddesc,
            result:"",
          });
       }
      }
    });
  }

  loadMoreLogs(){
    this.page.page = <number>this.page.page+1;
  
    this.getDevLogs({
      page:<number>this.page.page*<number>this.page.num,
      num:8
    });
  }

  getBuildCount(){
    let method ="api.build.count"
    let params = {
    };
    this.devopsService.get(method,params).then(res=>{
      if(res.data.state==true){
        this.buildCount = res.data.data;
        document.getElementById("buildCount").innerHTML = res.data.data;
      }else{
        this.buildCount = res.data.data;
        document.getElementById("buildCount").innerHTML = res.data.data;
      }
    });
  }
  getCodeCount(){
    let method ="api.git.count"
    let params = {
    };
    this.devopsService.get(method,params).then(res=>{
      if(res.data.state==true){
        this.gitCount = res.data.data;
        document.getElementById("gitCount").innerHTML = res.data.data;
      }else{
        this.gitCount = res.data.data;
        document.getElementById("gitCount").innerHTML = res.data.data;
      }
    });
  }

  getServiceCount(){
    let method ="api.service.count"
    let params = {
    };
    this.devopsService.get(method,params).then(res=>{
      if(res.data.state==true){
        this.myServiceCount = res.data.data;
        document.getElementById("serviceCount").innerHTML = res.data.data;
      }else{
        this.myServiceCount = res.data.data;
        document.getElementById("serviceCount").innerHTML = res.data.data;
      }
    });
  }
 
  getMyServiceCount(){
    let method ="api.service.count.me"
    this.developer = {
      id:<number><any>localStorage.getItem('id'),
      developerUsername:localStorage.getItem("developerUsername"),
      developerEmail:localStorage.getItem("developerEmail"),
      developerPhone:localStorage.getItem("developerPhone"),
      developerToken:localStorage.getItem("developerToken"),
      lastModifyTime:localStorage.getItem("lastModifyTime"),
      createTime:localStorage.getItem("createTime")
    }
    let params = {
      developer:this.developer
    };
    this.devopsService.get(method,params).then(res=>{
      if(res.data.state==true){
        this.myServiceCount = res.data.data;
        document.getElementById("myServiceCount").innerHTML = res.data.data;
      }else{
        this.myServiceCount = res.data.data;
        document.getElementById("myServiceCount").innerHTML = res.data.data;
      }
    });
  }

  getContainerCount(){
    let method ="api.container.count"
    let params = {
    };
    this.devopsService.get(method,params).then(res=>{
      if(res.data.state==true){
        this.myServiceCount = res.data.data;
        document.getElementById("containerCount").innerHTML = res.data.data;
      }else{
        this.myServiceCount = res.data.data;
        document.getElementById("containerCount").innerHTML = res.data.data;
      }
    });
  }

  getMyContainerCount(){
    let method ="api.container.count.me"
    this.developer = {
      id:<number><any>localStorage.getItem('id'),
      developerUsername:localStorage.getItem("developerUsername"),
      developerEmail:localStorage.getItem("developerEmail"),
      developerPhone:localStorage.getItem("developerPhone"),
      developerToken:localStorage.getItem("developerToken"),
      lastModifyTime:localStorage.getItem("lastModifyTime"),
      createTime:localStorage.getItem("createTime")
    }
    let params = {
      developer:this.developer
    };
    this.devopsService.get(method,params).then(res=>{
      if(res.data.state==true){
        this.myServiceCount = res.data.data;
        document.getElementById("myContainerCount").innerHTML = res.data.data;
      }else{
        this.myServiceCount = res.data.data;
        document.getElementById("myContainerCount").innerHTML = res.data.data;
      }
    });
  }


}
