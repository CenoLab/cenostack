import { Component, OnInit } from '@angular/core';
import { DeployPackage } from '../../domain/deployPackage.domain';
import { Page } from '../../domain/page.domain';
import { DevopsService } from '../../service/devops.service';
import { DeployedService } from '../../domain/deployedService.domain';
import { Developer } from '../../domain/developer.domain';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  private services:DeployedService[];
  private page:Page;
  private deployPackage:DeployPackage;

  private developer:Developer;

  constructor(private devopsService:DevopsService) { }

  ngOnInit() {
    this.services = [];
    
    this.page = {page:0,num:100};
    this.deployPackage = {
      buildPath: "/export/devops/build",
      containerName: "null",      
      projectName: "null",
      gitBranch:"null",
      buildVersion: "null",
      remoteDeployPath: "/export/servers/tomcat",
      remoteLogPath: "/export/services/log",
      jvmOptions: "-",
      env:"b2b_gcy",
    };
    
    this.getDeployPackage();
  }


  getDeployPackage(){

    this.developer = {
      id:<number><any>localStorage.getItem('id'),
      developerUsername:localStorage.getItem("developerUsername"),
      developerEmail:localStorage.getItem("developerEmail"),
      developerPhone:localStorage.getItem("developerPhone"),
      developerToken:localStorage.getItem("developerToken"),
      lastModifyTime:localStorage.getItem("lastModifyTime"),
      createTime:localStorage.getItem("createTime")
    }


    let method ="api.services.listDeploy"
    let params = {
      developer:this.developer,
      page:this.page
    };
    this.devopsService.get(method,params).then(res=>{
      if(res.data.state==true){
        for (let msg of res.data.data) {
          this.services.push({
              gitProject:msg.gitProject,
              codeBuild:msg.buildCode,
              deployPackage:msg.deployPackage,
              serviceOther:msg.serviceOther,
          });
        } 
      }else{
        for (let msg of res.data.data) {
          this.services.push({
            gitProject:msg.gitProject,
            codeBuild:msg.buildCode,
            deployPackage:msg.deployPackage,
            serviceOther:msg.serviceOther,
          });
      } 
      }
    });
  }

  removeService(id){
    this.devopsService.showModal("提示",id);

    this.developer = {
      id:<number><any>localStorage.getItem('id'),
      developerUsername:localStorage.getItem("developerUsername"),
      developerEmail:localStorage.getItem("developerEmail"),
      developerPhone:localStorage.getItem("developerPhone"),
      developerToken:localStorage.getItem("developerToken"),
      lastModifyTime:localStorage.getItem("lastModifyTime"),
      createTime:localStorage.getItem("createTime")
    }

    let method ="api.services.removeService"
    let params = {
      developer:this.developer,
      serviceId:id
    };
    // this.devopsService.get(method,params).then(res=>{
    //   if(res.data.state==true){
    //     this.devopsService.showModal("成功","服务卸载成功");
    //   }else{
    //     this.devopsService.showModal("成功","服务卸载成功");
    //   }
    // });
  }

  moveService(id){
    this.devopsService.showModal("提示",id);

    this.developer = {
      id:<number><any>localStorage.getItem('id'),
      developerUsername:localStorage.getItem("developerUsername"),
      developerEmail:localStorage.getItem("developerEmail"),
      developerPhone:localStorage.getItem("developerPhone"),
      developerToken:localStorage.getItem("developerToken"),
      lastModifyTime:localStorage.getItem("lastModifyTime"),
      createTime:localStorage.getItem("createTime")
    }

    let method ="api.services.moveService"
    let params = {
      developer:this.developer,
      serviceId:id
    };
    // this.devopsService.get(method,params).then(res=>{
    //   if(res.data.state==true){
    //     this.devopsService.showModal("成功","服务卸载成功");
    //   }else{
    //     this.devopsService.showModal("成功","服务卸载成功");
    //   }
    // });
  }

}
