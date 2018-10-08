import { Component, OnInit } from '@angular/core';
import { DevopsService } from '../../service/devops.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private devopsService:DevopsService) { }

  ngOnInit() {
    if(localStorage.getItem("developerUsername")!==null){
      document.getElementById("profile_name").innerHTML=localStorage.getItem("developerUsername");
      document.getElementById("profile_logout_bt").innerHTML = "退出登录";
    }else{
      document.getElementById("profile_name").style.display="none";
      document.getElementById("profile_logout_bt").style.display = "none";
    }
  }

  logout(){
    if (localStorage.getItem('id') !== null &&
        localStorage.getItem("developerUsername")!==null &&
        localStorage.getItem("developerEmail")!==null &&
        localStorage.getItem("developerPhone")!==null &&
        localStorage.getItem("developerToken")!==null &&
        localStorage.getItem("lastModifyTime")!==null &&
        localStorage.getItem("createTime")
    ){
        localStorage.clear();
        this.router.navigate(['/login']);
    }
  }

}
