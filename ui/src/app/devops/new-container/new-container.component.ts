import { Component, OnInit } from '@angular/core';
import { DevopsService } from '../../service/devops.service';
import { Container } from '../../domain/container.domain';
import { Developer } from '../../domain/developer.domain';


@Component({
  selector: 'app-new-container',
  templateUrl: './new-container.component.html',
  styleUrls: ['./new-container.component.css']
})
export class NewContainerComponent implements OnInit {


  private developer:Developer;
  private container:Container;

  constructor(private containerService:DevopsService) { }

  ngOnInit() {
    this.container = {
      name:"",
      address:"",
      port:"",
      user:"",
      pwd:"",
      desc:"",
      serviceCnt:0,
    }
  }

  addContainer(){
    let method ="api.container.addContainer"
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
      container:this.container
    };
    this.containerService.get(method,params).then(res=>{
      if(res.data.state==true){
        this.containerService.showModal("添加成功:",res.data.data.name);
      }else{
        this.containerService.showModal("添加成功:",res.data.data.name);
      }
    });
  }


  pwdChange(event:KeyboardEvent) {
    this.container.pwd = (<HTMLInputElement>event.target).value;
  };
  nameChange(event:KeyboardEvent) {
    this.container.name = (<HTMLInputElement>event.target).value;
  };
  addressChange(event:KeyboardEvent) {
    this.container.address = (<HTMLInputElement>event.target).value;
  };
  portChange(event:KeyboardEvent) {
    this.container.port = (<HTMLInputElement>event.target).value;
  };
  userChange(event:KeyboardEvent) {
    this.container.user = (<HTMLInputElement>event.target).value;
  };
  descChange(event:KeyboardEvent) {
    this.container.desc = (<HTMLInputElement>event.target).value;
  };
}
