import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../../domain/userLogin.domain';
import { DevopsService } from '../../service/devops.service';
import {Md5} from 'ts-md5/dist/md5';
import { Router } from '@angular/router';
import { Developer } from '../../domain/developer.domain';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private userLogin:UserLogin;
  private developer:Developer;

  constructor(private router: Router,private devopsService:DevopsService) { }

  ngOnInit() {

    this.userLogin = {
      userName:"",
      password:""
    }
    this.developer = {
      id:1,
      developerUsername:"null",
      developerEmail:"null",
      developerPhone:"null",
      developerToken:"null",
      lastModifyTime:"null",
      createTime:"null"
    }
  }

  userNameChange(event:KeyboardEvent) {
    this.userLogin.userName = (<HTMLInputElement>event.target).value;
  };

  userPasswordChange(event:KeyboardEvent) {
    this.userLogin.password = Md5.hashStr((<HTMLInputElement>event.target).value);
  };

  login(){
    let method ="api.developer.login"
    let params = {userLogin:this.userLogin}
    this.devopsService.get(method,params).then(res=>{
      if(res.data.state==true){
        console.log(res.data.data);
        this.developer = {
          id:res.data.data.id,
          developerUsername:res.data.data.developerUsername,
          developerEmail:res.data.data.developerEmail,
          developerPhone:res.data.data.developerPhone,
          developerToken:res.data.data.developerToken,
          lastModifyTime:res.data.data.lastModifyTime,
          createTime:res.data.data.createTime
        }
        localStorage.setItem("id",this.developer.id.toString());
        localStorage.setItem("developerUsername",this.developer.developerUsername.toString());
        localStorage.setItem("developerEmail",this.developer.developerEmail.toString());
        localStorage.setItem("developerPhone",this.developer.developerPhone.toString());
        localStorage.setItem("developerToken",this.developer.developerToken.toString());
        localStorage.setItem("lastModifyTime",this.developer.lastModifyTime.toString());
        localStorage.setItem("createTime",this.developer.createTime.toString());


        this.router.navigate([localStorage.getItem("redirectUrl")]);
      }else{
        this.developer = {
          id:res.data.data.id,
          developerUsername:res.data.data.developerUsername,
          developerEmail:res.data.data.developerEmail,
          developerPhone:res.data.data.developerPhone,
          developerToken:res.data.data.developerToken,
          lastModifyTime:res.data.data.lastModifyTime,
          createTime:res.data.data.createTime
        }
        localStorage.setItem("id",this.developer.id.toString());
        localStorage.setItem("developerUsername",this.developer.developerUsername.toString());
        localStorage.setItem("developerEmail",this.developer.developerEmail.toString());
        localStorage.setItem("developerPhone",this.developer.developerPhone.toString());
        localStorage.setItem("developerToken",this.developer.developerToken.toString());
        localStorage.setItem("lastModifyTime",this.developer.lastModifyTime.toString());
        localStorage.setItem("createTime",this.developer.createTime.toString());

        if(localStorage.getItem("redirectUrl")!==null){
          this.router.navigate([localStorage.getItem("redirectUrl")]);
        }else{
          this.router.navigate(['dashboard']);
        }
      }
    });
  }

}
