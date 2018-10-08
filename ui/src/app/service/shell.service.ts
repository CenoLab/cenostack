import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})


export class ShellService {

  constructor(private http:Http,private apiService:ApiService) { }

  execShell(command):Promise<any> {
    const url = this.apiService.execShell();
    console.log(url);
    return this.http
    .get(url,{
      params:command
    })
    .toPromise()
    .then(function(res){
      let data = res.json();
      console.log(data);
      return data;
    }).catch(this.handlerError);
    
  }


  handlerError(error:any):Promise<any>{
    console.log("An error occurred",error);
    return Promise.reject(error.message || error);
  }
}
