import { Component, OnInit } from '@angular/core';
import { DevopsService } from '../../service/devops.service';
import { Page } from '../../domain/page.domain';
import { Log } from '../../domain/log.domain';
import { DeployedService } from '../../domain/deployedService.domain';
import { ContainerDto } from '../../domain/containerDto.domain';
import { Developer } from '../../domain/developer.domain';

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.css']
})
export class ContainersComponent implements OnInit {

  private containers:ContainerDto[]
  private page:Page

  private developer:Developer;

  private timer;
  private progress:String;
  private logs: Log[];
  private services:DeployedService[];

  constructor(private devopsService:DevopsService) { }

  ngOnInit() {
    this.page = {page:0,num:100};
    this.containers = [];
    this.getContainerList();

    this.logs = [{id:0,log:"读取日志中...",class:"orange"}];
    this.services = [];

    this.progressInit("");
  }

  getContainerList(){

    this.developer = {
      id:<number><any>localStorage.getItem('id'),
      developerUsername:localStorage.getItem("developerUsername"),
      developerEmail:localStorage.getItem("developerEmail"),
      developerPhone:localStorage.getItem("developerPhone"),
      developerToken:localStorage.getItem("developerToken"),
      lastModifyTime:localStorage.getItem("lastModifyTime"),
      createTime:localStorage.getItem("createTime")
    }

    let method ="api.container.listContainer"
    let params = {
      developer:this.developer,
      page:this.page
    };
    this.devopsService.get(method,params).then(res=>{
      if(res.data.state==true){
        for (let msg of res.data.data) {
          this.containers.push({
              container:msg.container,
              containerOther:msg.containerOther,
          });
        } 
      }else{
        for (let msg of res.data.data) {
          this.containers.push({
            container:msg.container,
            containerOther:msg.containerOther,
        });
        } 
      }
    });
  }


  reConfig(data,id){
    let method ="api.services.reConfigJavaTomcatService"
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
      developer:this.developer,
      containerName:data
    };
    this.progressStart("配置中...",id);
    this.devopsService.get(method,params).then(res=>{
      if(res.data.state==true){
        this.progressOver("配置成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看日志</a>",id);
        for (let msg of res.data.data) {
          this.logs.push({id:0,log:msg,class:"red"});
        } 
      }else{
        this.progressOver("配置成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看日志</a>",id);
        for (let msg of res.data.data) {
          this.logs.push({id:0,log:msg,class:"red"});
        } 
      }
    });
  }


  reStart(data,id){
    let method ="api.services.reStartJavaTomcatService"
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
      developer:this.developer,
      containerName:data
    };
    this.progressStart("重启中...",id);
    this.devopsService.get(method,params).then(res=>{
      if(res.data.state==true){
        this.progressOver("重启成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看日志</a>",id);
        for (let msg of res.data.data) {
          this.logs.push({id:0,log:msg,class:"red"});
        } 
      }else{
        this.progressOver("重启成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看日志</a>",id);
        for (let msg of res.data.data) {
          this.logs.push({id:0,log:msg,class:"red"});
        } 
      }
    });
  }


  stop(data,id){
    let method ="api.services.stopJavaTomcatService"
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
      developer:this.developer,
      containerName:data
    };
    this.progressStart("停止中...",id);
    this.devopsService.get(method,params).then(res=>{
      if(res.data.state==true){
        this.progressOver("停止成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看日志</a>",id);
        for (let msg of res.data.data) {
          this.logs.push({id:0,log:msg,class:"red"});
        } 
      }else{
        this.progressOver("停止成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看日志</a>",id);
        for (let msg of res.data.data) {
          this.logs.push({id:0,log:msg,class:"red"});
        } 
      }
    });
  }


  
  checkStatus(data,id){
    let method ="api.services.checkJavaTomcatService"
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
      developer:this.developer,
      containerName:data
    };
    this.progressStart("检查中...",id);
    this.devopsService.get(method,params).then(res=>{
      if(res.data.state==true){
        this.progressOver("检查成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看</a>",id);
        for (let msg of res.data.data) {
          this.logs.push({id:0,log:msg,class:"red"});
        } 
      }else{
        this.progressOver("检查成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看</a>",id);
        for (let msg of res.data.data) {
          this.logs.push({id:0,log:msg,class:"red"});
        } 
      }
    });
  }

  serviceCntMouseEnter(data){
    this.services = [];
    let method ="api.services.listServices"
    let params = {containerName:data};
    this.devopsService.get(method,params).then(res=>{
      if(res.data.state==true){
        for (let msg of res.data.data) {
          this.services.push({
              gitProject:msg.gitProject,
              codeBuild:msg.buildCode,
              deployPackage:msg.deployPackage,
              serviceOther:null,
          });
        } 
      }else{
        for (let msg of res.data.data) {
          this.services.push({
            gitProject:msg.gitProject,
            codeBuild:msg.buildCode,
            deployPackage:msg.deployPackage,
            serviceOther:null,
          });
      } 
      }
    });
  }


  showServices(data){

      document.getElementById("left_container_list").className = "col-md-9";
      document.getElementById("right_service_list").style.display="block";
      document.getElementById("right_service_list").className="col-md-3";
    
  }
  closeServiceList(){
    document.getElementById("left_container_list").className = "col-md-12";
    document.getElementById("right_service_list").style.display="none";
    document.getElementById("right_service_list").className="col-md-0";
  }


  progressInit(msg){
    clearInterval(this.timer);
    this.progress = "0";
    document.getElementById("progress").style.display= "none";
    document.getElementById("progress_p").innerHTML = msg;
  }

  progressStart(msg,id){
    this.logs = [];
    document.getElementById("progress").style.display= "block";
    document.getElementById("progress_p").innerHTML = msg;
    // document.getElementById(id).style.display = "none";
    var n:number = 0 
    this.timer = setInterval(()=>{
      if(n<97){
        this.progress = n.toString();
        document.getElementById("progress_p").innerHTML = msg+"("+this.progress+")..."
        n+=Math.floor(Math.random()*3+0);
      }
    },100);
  }

  progressOver(msg,id){
        clearInterval(this.timer);
        // document.getElementById(id).style.display = "block";
        this.progress = "100";
        document.getElementById("progress_p").innerHTML = msg;

  }

  ngOnDestroy(){
    if(this.timer){
      clearInterval(this.timer);
    }
  }

}
