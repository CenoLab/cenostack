import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DevopsService } from './devops.service';
import { Developer } from '../domain/developer.domain';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {


  private developer:Developer;

  constructor(private router: Router,private devopsService:DevopsService) { }

  ngInit(){
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

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (localStorage.getItem('id') !== null &&
        localStorage.getItem("developerUsername")!==null &&
        localStorage.getItem("developerEmail")!==null &&
        localStorage.getItem("developerPhone")!==null &&
        localStorage.getItem("developerToken")!==null &&
        localStorage.getItem("lastModifyTime")!==null &&
        localStorage.getItem("createTime")
      ){
      this.developer = {
        id:<number><any>localStorage.getItem("id"),
        developerUsername:localStorage.getItem("developerUsername"),
        developerEmail: localStorage.getItem("developerEmail"),
        developerPhone:localStorage.getItem("developerPhone"),
        developerToken:localStorage.getItem("developerToken"),
        lastModifyTime:localStorage.getItem("lastModifyTime"),
        createTime:localStorage.getItem("createTime"),
      }
      return true;
    }
    else {
    
      localStorage.setItem('redirectUrl', url);
    
      this.router.navigate(['/login']);
    
      return false;
    }
  }

}
