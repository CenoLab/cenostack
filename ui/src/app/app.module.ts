import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './devops/header/header.component';
import { LeftComponent } from './devops/left/left.component';
import { CenterComponent } from './devops/center/center.component';

import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { rootRouterConfig, AppRoutingModule } from './app.routes'; // 这里引入在根路由组件里面定义的路由配置
import { DashboardComponent } from './devops/dashboard/dashboard.component';
import { ServicesComponent } from './devops/services/services.component';
import { ContainersComponent } from './devops/containers/containers.component';
import { DeployComponent } from './devops/deploy/deploy.component';
import { WebsshComponent } from './devops/webssh/webssh.component';
import { HttpModule } from '@angular/http';
import { NewContainerComponent } from './devops/new-container/new-container.component';
import { ApiService } from './service/api.service';
import { EurakeComponent } from './devops/eurake/eurake.component';
import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';
import { ProfileModule } from './profile/profile.module';
import { NodejsComponent } from './devops/nodejs/nodejs.component';
import { KanbanComponent } from './project/kanban/kanban.component';
import { NewprojectComponent } from './project/newproject/newproject.component';
import { ProjectlistComponent } from './project/projectlist/projectlist.component';
import { DragulaModule, DragulaService } from 'ng2-dragula';
import { ChatComponent } from './chartbox/chat/chat.component';
import { ChatlistComponent } from './chartbox/chatlist/chatlist.component';



let rootRouterModule: ModuleWithProviders = RouterModule.forRoot(rootRouterConfig);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftComponent,
    CenterComponent,
    DashboardComponent,
    ServicesComponent,
    ContainersComponent,
    DeployComponent,
    NodejsComponent,
    WebsshComponent,
    NewContainerComponent,
    KanbanComponent,
    NewprojectComponent,
    ProjectlistComponent,
    ChatComponent,
    ChatlistComponent,
    EurakeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    LoginModule,
    CoreModule,
    ProfileModule,
    CoreModule,
    DragulaModule
  ],
  providers: [ApiService, DragulaService],
  bootstrap: [AppComponent]
})

export class AppModule {
 }
