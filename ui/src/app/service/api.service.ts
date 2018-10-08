import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL:string = "http://116.196.82.213"
  // private BASE_URL:string = "http://localhost"
  private BASE_PORT:string = "8089"
  private BASE_APP:string = "devops"
  private BASE_NAMESPACE:string = ""


  constructor() { }

  getBaseUrl():string{
    return this.BASE_URL+":"+this.BASE_PORT+"/";
  }


  execShell():string{
    return this.getBaseUrl()+this.BASE_APP+"/ops";
  }


  api():string{
    return this.getBaseUrl()+"api";
  }

}
