import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import {Http} from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class DevopsService {
 

  constructor(private http:Http,private apiService:ApiService) { }


  get(method,params): Promise<any> {
    let url = this.apiService.api();
    console.log(url);
    return this.http
    .get(url,{
      params:{
        method:method,
        params:params
      }
    })
    .toPromise()
    .then(function(res){
      let data = res.json();
      console.log(data);
      return data;
    }).catch(this.handlerError);
  }

  post(method,params): Promise<any> {
    let url = this.apiService.api();
    console.log(url);
    return this.http
    .post(url,{
      params:{
        method:method,
        params:params
      }
    })
    .toPromise()
    .then(function(res){
      let data = res.json();
      console.log(data);
      return data;
    })
    .catch(this.handlerError);
  }


  showModal(title,content){
    document.getElementById("modal-close-outside").className = "uk-modal uk-open";
    document.getElementById("modal-close-outside").style.display = "block";
    document.getElementById("header_tip_top").innerHTML = title;
    document.getElementById("header_tip").innerHTML = content;
  }

  handlerError(error:any):Promise<any>{
    console.log("An error occurred",error);
    if(document.getElementById("progress")!==null){
      document.getElementById("progress").style.display="none";
    }


    document.getElementById("modal-close-outside").className = "uk-modal uk-open";
    document.getElementById("modal-close-outside").style.display = "block";
    document.getElementById("header_tip_top").innerHTML = "错误:";
    document.getElementById("header_tip").innerHTML = eval("("+error._body+")").data.msg;
    
    return Promise.reject(error.message || error);
  }
}
