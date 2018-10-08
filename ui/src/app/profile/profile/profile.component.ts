import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    document.getElementById("profile_user").innerHTML=localStorage.getItem("developerUsername");
    document.getElementById("profile_email").innerHTML=localStorage.getItem("developerEmail");
    document.getElementById("profile_phone").innerHTML= localStorage.getItem("developerPhone");
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
