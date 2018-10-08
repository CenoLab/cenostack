import { Component, OnInit } from '@angular/core';
import { EnvVariable } from '../../domain/envVariale.domain';
import { MockService } from '../../mock/mock.service';
import { DevopsService } from '../../service/devops.service';
import { Log } from '../../domain/log.domain';
import { Developer } from '../../domain/developer.domain';
import { ContainerDto } from '../../domain/containerDto.domain';
import { GitProject } from '../../domain/gitProject.domain';
import { BuildCode } from '../../domain/codeBuild.domain';
import { DeployPackage } from '../../domain/deployPackage.domain';

@Component({
  selector: 'app-nodejs',
  templateUrl: './nodejs.component.html',
  styleUrls: ['./nodejs.component.css']
})
export class NodejsComponent implements OnInit {

  private envs:EnvVariable[];


  private timer;
  private progress:String;

  private tmpNum:Number = 4;
  private tmpKey:String = "var";
  private tmpValue:String = "value";



  private logs: Log[];

  private developer:Developer;

  private gitProjectDir:String[];
  private gitProjectBranchs:String[];
  private buildProjectBranchs:String[];
  private buildProjectVersion:String[];

  private containers:ContainerDto[];


  private buildProjectDir:String[];

  private gitProject:GitProject;
  private buildCode:BuildCode;
  private deployPackage:DeployPackage;

  constructor(private mockService:MockService,private devopsService:DevopsService) { }

  ngOnInit() {


    this.envs = this.mockService.getEnvs();


    this.gitProject = {
      gitPath:"",
      gitUser:"",
      gitPassword:"",
      gitCodePath:"/export/devops/code",
    };

    this.buildCode = {
      codePath:"/export/devops/code",
      buildPath:"/export/devops/build",
      gitPath:"null",
      gitBranch:"null",
      projectName:"null",
    };

    this.deployPackage = {
      buildPath: "/export/devops/build",
      containerName: "null",      
      projectName: "null",
      gitBranch:"null",
      buildVersion: "null",
      remoteDeployPath: "/export/servers/tomcat",
      remoteLogPath: "/export/services/log",
      jvmOptions: "null",
      env:"b2b_gcy",
    };

    this.logs = [{id:0,log:"读取日志中...",class:"orange"}];
    this.gitProjectDir = []
    this.gitProjectBranchs = [];
    
    this.containers = [];
    this.buildProjectDir = [];
    this.buildProjectBranchs = [];

    this.buildProjectVersion = [];


    this.progressInit("");
    this.initTab();
    this.changeTab("git");
  }

  initTab(){
    document.getElementById("git").style.display = "none";
    document.getElementById("build").style.display = "none";
    document.getElementById("deploy").style.display = "none";
  }

  changeTab(tab){
    this.initTab();
    document.getElementById(tab).style.display = "block";

    if(tab=="build"){
      this.getGitProjectDirs();
    }

    if(tab=="deploy"){
      //this.getContainers();
      //this.getBuildProjects();
    }
  }






  updateCode(){
   
    this.logs = [];
    this.progressStart("拉取中...");
    let method ="api.git.updateCode"
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
      gitProject:this.gitProject
    };
    this.devopsService.get(method,params).then(res=>{
      if(res.data.state==true){
        this.progressOver("拉取成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看日志</a>");
        for (let msg of res.data.data) {
          this.logs.push({id:0,log:msg,class:"green"});
        } 
      }else{
        this.progressOver("拉取成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看日志</a>");
        for (let msg of res.data.data) {
          this.logs.push({id:0,log:msg,class:"red"});
        } 
      }
    });
  }

  codeBuild(){
   this.logs = [];

    this.progressStart("构建中...");
    let method ="api.git.buildNodeCode"
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
      buildCode:this.buildCode
    };
    this.devopsService.get(method,params).then(res=>{
      if(res.data.state==true){
        this.progressOver("构建成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看日志</a>")
        for (let msg of res.data.data) {
          this.logs.push({id:0,log:msg,class:"green"});
        } 
      }else{
        this.progressOver("构建成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看日志</a>")
        for (let msg of res.data.data) {
          this.logs.push({id:0,log:msg,class:"red"});
        } 
      }
    });
  }

  packageDeploy(){
    this.logs = [];

    this.progressStart("部署中...");
    let method ="api.git.deployNodePackage"
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
      deployPackage:this.deployPackage
    };
    this.devopsService.get(method,params).then(res=>{
      if(res.data.state==true){
        this.progressOver("部署成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看日志</a>")
        for (let msg of res.data.data) {
          this.logs.push({id:0,log:msg,class:"green"});
        } 
      }else{
        this.progressOver("部署成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看日志</a>")
        for (let msg of res.data.data) {
          this.logs.push({id:0,log:msg,class:"red"});
        } 
      }
    });
  }




  getGitProjectDirs(){
    this.logs = [];

    this.gitProjectDir = [];

    this.developer = {
      id:<number><any>localStorage.getItem('id'),
      developerUsername:localStorage.getItem("developerUsername"),
      developerEmail:localStorage.getItem("developerEmail"),
      developerPhone:localStorage.getItem("developerPhone"),
      developerToken:localStorage.getItem("developerToken"),
      lastModifyTime:localStorage.getItem("lastModifyTime"),
      createTime:localStorage.getItem("createTime")
  }

    let method ="api.git.projectDirs"
    let params = {
      developer:this.developer,
      buildCode:this.buildCode
    };
    this.devopsService.get(method,params).then(res=>{
      if(res.data.state==true){
        for (let msg of res.data.data) {
          this.gitProjectDir.push(msg);
          this.logs.push({id:0,log:msg,class:"green"});
        } 
      }else{
        for (let msg of res.data.data) {
          this.gitProjectDir.push(msg);
          this.logs.push({id:0,log:msg,class:"red"});
        } 
      }
    });
  }


  getGitProgectBranchs(){
    this.logs = [];

    this.gitProjectBranchs = [];
    this.developer = {
      id:<number><any>localStorage.getItem('id'),
      developerUsername:localStorage.getItem("developerUsername"),
      developerEmail:localStorage.getItem("developerEmail"),
      developerPhone:localStorage.getItem("developerPhone"),
      developerToken:localStorage.getItem("developerToken"),
      lastModifyTime:localStorage.getItem("lastModifyTime"),
      createTime:localStorage.getItem("createTime")
  }
    let method ="api.git.projectBranchs"
    let params = {
      developer:this.developer,
      buildCode:this.buildCode
    };
    this.devopsService.get(method,params).then(res=>{
      if(res.data.state==true){
        for (let msg of res.data.data) {
          this.gitProjectBranchs.push(msg);
          this.logs.push({id:0,log:msg,class:"green"});
        } 
      }else{
        for (let msg of res.data.data) {
          this.gitProjectBranchs.push(msg);
          this.logs.push({id:0,log:msg,class:"red"});
        } 
      }
    });
  }




  getContainers(){
    this.logs = [];

    this.containers = [];
    this.developer = {
      id:<number><any>localStorage.getItem('id'),
      developerUsername:localStorage.getItem("developerUsername"),
      developerEmail:localStorage.getItem("developerEmail"),
      developerPhone:localStorage.getItem("developerPhone"),
      developerToken:localStorage.getItem("developerToken"),
      lastModifyTime:localStorage.getItem("lastModifyTime"),
      createTime:localStorage.getItem("createTime")
    };

    let method ="api.container.listContainer";
    let params = {
      developer:this.developer,
      page:{page:0,num:100}
    };

    this.devopsService.get(method,params).then(res=>{
      if(res.data.state==true){
        for (let msg of res.data.data) {
          this.containers.push({
            container:msg.container,
            containerOther:msg.containerOther,
        });
          this.logs.push({id:0,log:msg,class:"green"});
        } 
      }else{
        for (let msg of res.data.data) {
          this.containers.push({
            container:msg.container,
            containerOther:msg.containerOther,
        });
          this.logs.push({id:0,log:msg,class:"red"});
        } 
      }
    });
  }
  
  getBuildProjects(){
    this.logs = [];

    this.buildProjectDir = [];

    this.developer = {
      id:<number><any>localStorage.getItem('id'),
      developerUsername:localStorage.getItem("developerUsername"),
      developerEmail:localStorage.getItem("developerEmail"),
      developerPhone:localStorage.getItem("developerPhone"),
      developerToken:localStorage.getItem("developerToken"),
      lastModifyTime:localStorage.getItem("lastModifyTime"),
      createTime:localStorage.getItem("createTime")
  }

    let method ="api.deploy.projects"
    let params = {
      developer:this.developer,
      deployPackage:this.deployPackage
    };
    
    this.devopsService.get(method,params).then(res=>{
      if(res.data.state==true){
        for (let msg of res.data.data) {
          this.buildProjectDir.push(msg);
          this.logs.push({id:0,log:msg,class:"green"});
        } 
      }else{
        for (let msg of res.data.data) {
          this.buildProjectDir.push(msg);
          this.logs.push({id:0,log:msg,class:"red"});
        } 
      }
    });
  }

  getBuildProjectBranchs(){
    this.logs = [];

    this.buildProjectBranchs = [];
    this.developer = {
      id:<number><any>localStorage.getItem('id'),
      developerUsername:localStorage.getItem("developerUsername"),
      developerEmail:localStorage.getItem("developerEmail"),
      developerPhone:localStorage.getItem("developerPhone"),
      developerToken:localStorage.getItem("developerToken"),
      lastModifyTime:localStorage.getItem("lastModifyTime"),
      createTime:localStorage.getItem("createTime")
  }
    let method ="api.deploy.project.branchs"
    let params = {
      developer:this.developer,
      deployPackage:this.deployPackage
    };
    
    this.devopsService.get(method,params).then(res=>{
      if(res.data.state==true){
        for (let msg of res.data.data) {
          this.buildProjectBranchs.push(msg);
          this.logs.push({id:0,log:msg,class:"green"});
        } 
      }else{
        for (let msg of res.data.data) {
          this.buildProjectBranchs.push(msg);
          this.logs.push({id:0,log:msg,class:"red"});
        } 
      }
    });
  }

  getBuildProjectVersion(){
    this.logs = [];

    this.buildProjectVersion = [];
    this.developer = {
      id:<number><any>localStorage.getItem('id'),
      developerUsername:localStorage.getItem("developerUsername"),
      developerEmail:localStorage.getItem("developerEmail"),
      developerPhone:localStorage.getItem("developerPhone"),
      developerToken:localStorage.getItem("developerToken"),
      lastModifyTime:localStorage.getItem("lastModifyTime"),
      createTime:localStorage.getItem("createTime")
  }
    let method ="api.deploy.project.version"
    let params = {
      developer:this.developer,
      deployPackage:this.deployPackage
    };
    
    this.devopsService.get(method,params).then(res=>{
      if(res.data.state==true){
        for (let msg of res.data.data) {
          this.buildProjectVersion.push(msg);
          this.logs.push({id:0,log:msg,class:"green"});
        } 
      }else{
        for (let msg of res.data.data) {
          this.buildProjectVersion.push(msg);
          this.logs.push({id:0,log:msg,class:"red"});
        } 
      }
    });
  }













  gitPathChange(event:KeyboardEvent) {
    this.gitProject.gitPath = (<HTMLInputElement>event.target).value;
  };
  gitUserChange(event:KeyboardEvent) {
    this.gitProject.gitUser = (<HTMLInputElement>event.target).value;
  };
  gitPasswordChange(event:KeyboardEvent) {
    this.gitProject.gitPassword = (<HTMLInputElement>event.target).value;
  };
  gitCodePathChange(event:KeyboardEvent) {
    this.gitProject.gitCodePath = (<HTMLInputElement>event.target).value;
  };



  buildGitProjectChange(event:MouseEvent) {
    this.buildCode.gitPath = (<HTMLSelectElement>event.target).value;
    this.buildCode.projectName = (<HTMLSelectElement>event.target).value;
    this.getGitProgectBranchs();
  };

  buildGitBranchChange(event:MouseEvent) {
    this.buildCode.gitBranch = (<HTMLSelectElement>event.target).value;
  };

  buildProjectChange(event:MouseEvent) {
    this.deployPackage.projectName = (<HTMLSelectElement>event.target).value;
    this.getBuildProjectBranchs();
  };

  buildProjectBranchChange(event:MouseEvent) {
    this.deployPackage.gitBranch = (<HTMLSelectElement>event.target).value;
    this.getBuildProjectVersion();
  }


  buildProjectVersionChange(event:MouseEvent) {
    this.deployPackage.buildVersion = (<HTMLSelectElement>event.target).value;
  }

  buildContainerChange(event:MouseEvent) {
    this.deployPackage.containerName = (<HTMLSelectElement>event.target).value;
  }













  removeVar(data){
    for(var i = 0; i < this.envs.length; ) {
      if(this.envs[i].num == data) {
       this.envs.splice(i, 1);
      } else {
         i++;  
      }
    }
  }
  addVar(){
    this.envs.push(new EnvVariable(this.tmpNum,this.tmpKey,this.tmpValue));
    this.tmpNum=<number>this.tmpNum+1;
  }
  envKeyChange(event:KeyboardEvent) {
    this.tmpKey = (<HTMLInputElement>event.target).value;
  };
  envValueChange(event:KeyboardEvent) {
    this.tmpValue = (<HTMLInputElement>event.target).value;
  };








  progressInit(msg){
    clearInterval(this.timer);
    this.progress = "0";
    document.getElementById("progress").style.display= "none";
    document.getElementById("progress_p").innerHTML = msg;
  }

  progressStart(msg){
    document.getElementById("progress").style.display= "block";
    document.getElementById("progress_p").innerHTML = msg;
    var n:number = 0 
    this.timer = setInterval(()=>{
      if(n<97){
        this.progress = n.toString();
        document.getElementById("progress_p").innerHTML = msg+"("+this.progress+")..."
        n+=Math.floor(Math.random()*3+0);
      }
    },100);
  }

  progressOver(msg){
        clearInterval(this.timer);
        this.progress = "100";
        document.getElementById("progress_p").innerHTML = msg;

  }

  ngOnDestroy(){
    if(this.timer){
      clearInterval(this.timer);
    }
  }
}
