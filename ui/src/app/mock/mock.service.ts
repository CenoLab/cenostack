import { Injectable } from '@angular/core';
import { EnvVariable } from '../domain/envVariale.domain';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }


  getEnvs():EnvVariable[]{
    let envs:EnvVariable[] = [];


    envs.push(new EnvVariable(1,'PORT','8231'));
    envs.push(new EnvVariable(2,'GROUP','b2b_gcy'));
    envs.push(new EnvVariable(3,'API_HOST','gw-gcy.b2b-gcy.jcloudec.com'));
    envs.push(new EnvVariable(4,'LANG','zh_CN.UTF-8'));
    envs.push(new EnvVariable(5,'STATIC_DOMAIN','static-gcy.b2b-gcy.jcloudec.com'));
    return envs;
  }
}
