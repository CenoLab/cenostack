import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './devops/dashboard/dashboard.component';
import { ServicesComponent } from './devops/services/services.component';
import { ContainersComponent } from './devops/containers/containers.component';
import { DeployComponent } from './devops/deploy/deploy.component';
import { WebsshComponent } from './devops/webssh/webssh.component';
import { NewContainerComponent } from './devops/new-container/new-container.component';
import { EurakeComponent } from './devops/eurake/eurake.component';
import { LoginComponent } from './login/login/login.component';
import { AuthGuardService } from './service/auth-guard.service';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile/profile.component';
import { NodejsComponent } from './devops/nodejs/nodejs.component';
import { KanbanComponent } from './project/kanban/kanban.component';
import { ChatComponent } from './chartbox/chat/chat.component';


export const rootRouterConfig: Routes = [
    {
        path:'',
        component:DashboardComponent
    },
    // ...
    {
        path: 'dashboard',    // http://localhost:4200/dashboard
        component: DashboardComponent
    },
    {
        path: 'services',    // http://localhost:4200/services
        canActivate: [AuthGuardService],
        component: ServicesComponent
    },
    {
        path: 'deploy',    // http://localhost:4200/deploy
        canActivate: [AuthGuardService],
        component: DeployComponent
    },
    {
        path: 'nodejs',    // http://localhost:4200/deploy
        canActivate: [AuthGuardService],
        component: NodejsComponent
    },
    {
        path: 'containers',    // http://localhost:4200/containers
        canActivate: [AuthGuardService],
        component: ContainersComponent
    },
    {
        path: 'wessh',    // http://localhost:4200/containers
        canActivate: [AuthGuardService],
        component: WebsshComponent
    },
    {
        path: 'add-container',    // http://localhost:4200/containers
        canActivate: [AuthGuardService],
        component: NewContainerComponent
    },
    {
        path:'eurake',
        component:EurakeComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'profile',
        component:ProfileComponent
    },{
        path:'kanban',
        component:KanbanComponent
    },{
        path:'chat',
        component:ChatComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(rootRouterConfig)],
    exports: [RouterModule]
})
export class AppRoutingModule { }