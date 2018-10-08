(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["main"], {

        /***/
        "./src/$$_lazy_route_resource lazy recursive":
        /*!**********************************************************!*\
          !*** ./src/$$_lazy_route_resource lazy namespace object ***!
          \**********************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function() {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function() { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

            /***/
        }),

        /***/
        "./src/app/app.component.css":
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "body{\n    padding: 0;\n    margin: 0;\n}"

            /***/
        }),

        /***/
        "./src/app/app.component.html":
        /*!************************************!*\
          !*** ./src/app/app.component.html ***!
          \************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n<div class=\"col-md-12\" style=\"padding: 0;margin: 0;height: 95%;background: transparent;\">\n  <router-outlet></router-outlet>\n</div>\n"

            /***/
        }),

        /***/
        "./src/app/app.component.ts":
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            var AppComponent = /** @class */ (function() {
                function AppComponent() {
                    this.title = 'devops';
                }
                AppComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-root',
                        template: __webpack_require__( /*! ./app.component.html */ "./src/app/app.component.html"),
                        styles: [__webpack_require__( /*! ./app.component.css */ "./src/app/app.component.css")]
                    })
                ], AppComponent);
                return AppComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/app.module.ts":
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
            /* harmony import */
            var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */
            var _devops_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./devops/header/header.component */ "./src/app/devops/header/header.component.ts");
            /* harmony import */
            var _devops_left_left_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./devops/left/left.component */ "./src/app/devops/left/left.component.ts");
            /* harmony import */
            var _devops_center_center_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./devops/center/center.component */ "./src/app/devops/center/center.component.ts");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
            /* harmony import */
            var _app_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./app.routes */ "./src/app/app.routes.ts");
            /* harmony import */
            var _devops_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./devops/dashboard/dashboard.component */ "./src/app/devops/dashboard/dashboard.component.ts");
            /* harmony import */
            var _devops_services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./devops/services/services.component */ "./src/app/devops/services/services.component.ts");
            /* harmony import */
            var _devops_containers_containers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./devops/containers/containers.component */ "./src/app/devops/containers/containers.component.ts");
            /* harmony import */
            var _devops_deploy_deploy_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./devops/deploy/deploy.component */ "./src/app/devops/deploy/deploy.component.ts");
            /* harmony import */
            var _devops_webssh_webssh_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ./devops/webssh/webssh.component */ "./src/app/devops/webssh/webssh.component.ts");
            /* harmony import */
            var _angular_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
            /* harmony import */
            var _devops_new_container_new_container_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ./devops/new-container/new-container.component */ "./src/app/devops/new-container/new-container.component.ts");
            /* harmony import */
            var _service_api_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! ./service/api.service */ "./src/app/service/api.service.ts");
            /* harmony import */
            var _devops_eurake_eurake_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! ./devops/eurake/eurake.component */ "./src/app/devops/eurake/eurake.component.ts");
            /* harmony import */
            var _login_login_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! ./login/login.module */ "./src/app/login/login.module.ts");
            /* harmony import */
            var _core_core_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! ./core/core.module */ "./src/app/core/core.module.ts");
            /* harmony import */
            var _profile_profile_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__( /*! ./profile/profile.module */ "./src/app/profile/profile.module.ts");
            /* harmony import */
            var _devops_nodejs_nodejs_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__( /*! ./devops/nodejs/nodejs.component */ "./src/app/devops/nodejs/nodejs.component.ts");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };







            // 这里引入在根路由组件里面定义的路由配置













            var rootRouterModule = _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_7__["rootRouterConfig"]);
            var AppModule = /** @class */ (function() {
                function AppModule() {}
                AppModule = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                        declarations: [
                            _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                            _devops_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                            _devops_left_left_component__WEBPACK_IMPORTED_MODULE_4__["LeftComponent"],
                            _devops_center_center_component__WEBPACK_IMPORTED_MODULE_5__["CenterComponent"],
                            _devops_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                            _devops_services_services_component__WEBPACK_IMPORTED_MODULE_9__["ServicesComponent"],
                            _devops_containers_containers_component__WEBPACK_IMPORTED_MODULE_10__["ContainersComponent"],
                            _devops_deploy_deploy_component__WEBPACK_IMPORTED_MODULE_11__["DeployComponent"],
                            _devops_nodejs_nodejs_component__WEBPACK_IMPORTED_MODULE_20__["NodejsComponent"],
                            _devops_webssh_webssh_component__WEBPACK_IMPORTED_MODULE_12__["WebsshComponent"],
                            _devops_new_container_new_container_component__WEBPACK_IMPORTED_MODULE_14__["NewContainerComponent"],
                            _devops_eurake_eurake_component__WEBPACK_IMPORTED_MODULE_16__["EurakeComponent"]
                        ],
                        imports: [
                            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                            _angular_http__WEBPACK_IMPORTED_MODULE_13__["HttpModule"],
                            _app_routes__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                            _login_login_module__WEBPACK_IMPORTED_MODULE_17__["LoginModule"],
                            _core_core_module__WEBPACK_IMPORTED_MODULE_18__["CoreModule"],
                            _profile_profile_module__WEBPACK_IMPORTED_MODULE_19__["ProfileModule"],
                            _core_core_module__WEBPACK_IMPORTED_MODULE_18__["CoreModule"]
                        ],
                        providers: [_service_api_service__WEBPACK_IMPORTED_MODULE_15__["ApiService"]],
                        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
                    })
                ], AppModule);
                return AppModule;
            }());



            /***/
        }),

        /***/
        "./src/app/app.routes.ts":
        /*!*******************************!*\
          !*** ./src/app/app.routes.ts ***!
          \*******************************/
        /*! exports provided: rootRouterConfig, AppRoutingModule */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "rootRouterConfig", function() { return rootRouterConfig; });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
            /* harmony import */
            var _devops_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./devops/dashboard/dashboard.component */ "./src/app/devops/dashboard/dashboard.component.ts");
            /* harmony import */
            var _devops_services_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./devops/services/services.component */ "./src/app/devops/services/services.component.ts");
            /* harmony import */
            var _devops_containers_containers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./devops/containers/containers.component */ "./src/app/devops/containers/containers.component.ts");
            /* harmony import */
            var _devops_deploy_deploy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./devops/deploy/deploy.component */ "./src/app/devops/deploy/deploy.component.ts");
            /* harmony import */
            var _devops_webssh_webssh_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./devops/webssh/webssh.component */ "./src/app/devops/webssh/webssh.component.ts");
            /* harmony import */
            var _devops_new_container_new_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./devops/new-container/new-container.component */ "./src/app/devops/new-container/new-container.component.ts");
            /* harmony import */
            var _devops_eurake_eurake_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./devops/eurake/eurake.component */ "./src/app/devops/eurake/eurake.component.ts");
            /* harmony import */
            var _login_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./login/login/login.component */ "./src/app/login/login/login.component.ts");
            /* harmony import */
            var _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./service/auth-guard.service */ "./src/app/service/auth-guard.service.ts");
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _profile_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./profile/profile/profile.component */ "./src/app/profile/profile/profile.component.ts");
            /* harmony import */
            var _devops_nodejs_nodejs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ./devops/nodejs/nodejs.component */ "./src/app/devops/nodejs/nodejs.component.ts");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };













            var rootRouterConfig = [{
                    path: '',
                    component: _devops_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"]
                },
                // ...
                {
                    path: 'dashboard',
                    component: _devops_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"]
                },
                {
                    path: 'services',
                    canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]],
                    component: _devops_services_services_component__WEBPACK_IMPORTED_MODULE_2__["ServicesComponent"]
                },
                {
                    path: 'deploy',
                    canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]],
                    component: _devops_deploy_deploy_component__WEBPACK_IMPORTED_MODULE_4__["DeployComponent"]
                },
                {
                    path: 'nodejs',
                    canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]],
                    component: _devops_nodejs_nodejs_component__WEBPACK_IMPORTED_MODULE_12__["NodejsComponent"]
                },
                {
                    path: 'containers',
                    canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]],
                    component: _devops_containers_containers_component__WEBPACK_IMPORTED_MODULE_3__["ContainersComponent"]
                },
                {
                    path: 'wessh',
                    canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]],
                    component: _devops_webssh_webssh_component__WEBPACK_IMPORTED_MODULE_5__["WebsshComponent"]
                },
                {
                    path: 'add-container',
                    canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]],
                    component: _devops_new_container_new_container_component__WEBPACK_IMPORTED_MODULE_6__["NewContainerComponent"]
                },
                {
                    path: 'eurake',
                    component: _devops_eurake_eurake_component__WEBPACK_IMPORTED_MODULE_7__["EurakeComponent"]
                },
                {
                    path: 'login',
                    component: _login_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
                },
                {
                    path: 'profile',
                    component: _profile_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"]
                }
            ];
            var AppRoutingModule = /** @class */ (function() {
                function AppRoutingModule() {}
                AppRoutingModule = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"])({
                        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(rootRouterConfig)],
                        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
                    })
                ], AppRoutingModule);
                return AppRoutingModule;
            }());



            /***/
        }),

        /***/
        "./src/app/core/core.module.ts":
        /*!*************************************!*\
          !*** ./src/app/core/core.module.ts ***!
          \*************************************/
        /*! exports provided: CoreModule */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };
            var __param = (undefined && undefined.__param) || function(paramIndex, decorator) {
                return function(target, key) { decorator(target, key, paramIndex); }
            };


            var CoreModule = /** @class */ (function() {
                function CoreModule(parentModule) {
                    if (parentModule) {
                        throw new Error('CoreModule is already loaded.');
                    }
                }
                CoreModule = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
                        imports: [
                            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                        ]
                    }),
                    __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
                    __metadata("design:paramtypes", [CoreModule])
                ], CoreModule);
                return CoreModule;
            }());



            /***/
        }),

        /***/
        "./src/app/devops/center/center.component.css":
        /*!****************************************************!*\
          !*** ./src/app/devops/center/center.component.css ***!
          \****************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = ""

            /***/
        }),

        /***/
        "./src/app/devops/center/center.component.html":
        /*!*****************************************************!*\
          !*** ./src/app/devops/center/center.component.html ***!
          \*****************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<p>\n  center works!\n</p>\n"

            /***/
        }),

        /***/
        "./src/app/devops/center/center.component.ts":
        /*!***************************************************!*\
          !*** ./src/app/devops/center/center.component.ts ***!
          \***************************************************/
        /*! exports provided: CenterComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "CenterComponent", function() { return CenterComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            var CenterComponent = /** @class */ (function() {
                function CenterComponent() {}
                CenterComponent.prototype.ngOnInit = function() {};
                CenterComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-center',
                        template: __webpack_require__( /*! ./center.component.html */ "./src/app/devops/center/center.component.html"),
                        styles: [__webpack_require__( /*! ./center.component.css */ "./src/app/devops/center/center.component.css")]
                    }),
                    __metadata("design:paramtypes", [])
                ], CenterComponent);
                return CenterComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/devops/containers/containers.component.css":
        /*!************************************************************!*\
          !*** ./src/app/devops/containers/containers.component.css ***!
          \************************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = ""

            /***/
        }),

        /***/
        "./src/app/devops/containers/containers.component.html":
        /*!*************************************************************!*\
          !*** ./src/app/devops/containers/containers.component.html ***!
          \*************************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<app-left></app-left>\n<div class=\"col-md-11\" style=\"padding: 1em;height:5%;display:table-cell;vertical-align:middle;font-weight:bolder;color: #fff;background: transparent;z-index:99;\">\n  <ul class=\"uk-breadcrumb\">\n    <li><a href=\"#\">DevOps</a></li>\n    <li><a href=\"#\">容器</a></li>\n    <li><span>列表</span></li>\n  </ul>\n</div>\n<div class=\"col-md-11\" style=\"padding: 1em;background: transparent;height: 90%;\">\n\n  <div id=\"left_container_list\" class=\"col-md-12\" style=\"padding: 1em;background: #fff;height: 100%;overflow: auto;border-radius: 6px;\">\n\n    <div class=\"col-md-12\" style=\"margin-top:0em;margin-bottom: 2em;\">\n\n      <div id=\"progress\" class=\"uk-margin\">\n        <div class=\"uk-form-controls\">\n          <progress id=\"js-progressbar\" class=\"uk-progress\" [value]=\"progress\" max=\"100\"></progress>\n          <p id=\"progress_p\">部署中... 请稍候...</p>\n        </div>\n      </div>\n\n      <ul class=\"uk-tab\" uk-tab>\n        <li class=\"uk-active\">\n          <a href=\"#container\"> 容器 </a>\n        </li>\n      </ul>\n      <div class=\"col-md-12\" style=\"padding: 1em;\">\n        <div class=\"col-md-12\" style=\"padding:0;margin:0;overflow: auto;\">\n          <table class=\"uk-table uk-table-divider\">\n\n            <thead>\n              <tr>\n                <th>容器名称</th>\n                <th>地址</th>\n                <th>说明</th>\n                <th>服务数量</th>\n                <th>内存</th>\n                <th>cpu</th>\n                <th>磁盘</th>\n\n                <th></th>\n              </tr>\n            </thead>\n            <!-- <tfoot>\n              <tr>\n                  <th>容器名称</th>\n                  <th>地址</th>\n                  <th>服务数量</th>\n                  <th>状态</th>\n                  <th>内存</th>\n                  <th>cpu</th>\n                  <th>磁盘</th>\n                  <th>启动时间</th>\n                  <th>运行时长</th>\n                  <th>操作</th>\n              </tr>\n          </tfoot> -->\n            <tbody>\n\n              <tr *ngFor=\"let container of containers\">\n                <th><span class=\"cc-span cc-span-normal\">Docker</span>&nbsp;{{container.container.name}}</th>\n                <th>{{container.container.address}}</th>\n                <th>{{container.container.desc}}</th>\n                <th>\n                  <a (click)=\"showServices(container.container.name)\" class=\"uk-link-muted\" (mouseenter)=\"serviceCntMouseEnter(container.container.name)\"\n                    uk-tooltip=\"点击查看服务列表\">{{container.container.serviceCnt}}</a>\n                </th>\n                <th style=\"color:green;\">{{container.containerOther.mem}}%</th>\n                <th style=\"color:green;\">{{container.containerOther.cpu}}%</th>\n                <th style=\"color:green;\">{{container.containerOther.disk}}%</th>\n\n                <th>\n                  <button id=\"bt_detail\" class=\"cc-button\" disabled=\"disabled\">详情</button>&nbsp;\n                  <button id=\"bt_status\" (click)=\"checkStatus(container.container.name,'bt_reconfig')\" class=\"cc-button cc-button-ring-blue\">状态</button>&nbsp;\n                  <button id=\"bt_reconfig\" (click)=\"reConfig(container.container.name,'bt_reconfig')\" class=\"cc-button cc-button-ring-blue\">配置</button>&nbsp;\n                  <button id=\"bt_restart\" (click)=\"reStart(container.container.name,'bt_restart')\" class=\"cc-button cc-button-ring-blue\">重启</button>&nbsp;\n                  <button id=\"bt_stop\" (click)=\"stop(container.container.name,'bt_stop')\" class=\"cc-button cc-button-ring-blue\">停止</button>&nbsp;\n                </th>\n              </tr>\n\n            </tbody>\n          </table>\n        </div>\n        <div id=\"modal-overflow\" uk-modal>\n          <div class=\"uk-modal-dialog\">\n\n            <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n\n            <div class=\"uk-modal-header\">\n              <h2 class=\"uk-modal-title\">日志</h2>\n            </div>\n\n            <div class=\"uk-modal-body\" uk-overflow-auto>\n              <li *ngFor=\"let log of logs\" style=\"margin-top:0.5em;\">\n                <p class={{log.class}}>{{log.log}}</p>\n              </li>\n            </div>\n\n            <div class=\"uk-modal-footer uk-text-right\">\n              <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Cancel</button>\n              <button class=\"uk-button uk-button-primary\" type=\"button\">Save</button>\n            </div>\n\n          </div>\n        </div>\n\n        <!-- <ul class=\"uk-pagination\" uk-margin>\n          <li><a href=\"#\"><span uk-pagination-previous></span></a></li>\n          <li><a href=\"#\">1</a></li>\n          <li class=\"uk-disabled\"><span>...</span></li>\n          <li><a href=\"#\">4</a></li>\n          <li><a href=\"#\">5</a></li>\n          <li><a href=\"#\">6</a></li>\n          <li class=\"uk-active\"><span>7</span></li>\n          <li><a href=\"#\">8</a></li>\n          <li><a href=\"#\">9</a></li>\n          <li><a href=\"#\">10</a></li>\n          <li class=\"uk-disabled\"><span>...</span></li>\n          <li><a href=\"#\">20</a></li>\n          <li><a href=\"#\"><span uk-pagination-next></span></a></li>\n      </ul> -->\n      </div>\n    </div>\n  </div>\n  <div id=\"right_service_list\" class=\"col-md-0\" style=\"padding: 0;padding-left:1em;background: transparent;height: 100%;overflow: auto;display: none;\">\n      <div class=\"col-md-12\" style=\"padding: 2em;background: #fff;height: 100%;overflow: auto;border-radius: 6px;\">\n          <ul class=\"uk-tab\" uk-tab>\n              <li class=\"uk-active\">\n                <a href=\"#container\"> 服务列表 </a>\n              </li>\n              \n                <span (click)=\"closeServiceList()\" style=\"color:#888;float: right;\" class=\"glyphicon glyphicon-remove\"></span>\n            \n            </ul>  \n          <ul>\n            <li *ngFor=\"let service of services\" style=\"margin-top:0.5em;\">\n              <p>{{service.codeBuild.projectName}}</p>\n            </li>\n          </ul>\n      </div>\n  </div>\n\n</div>\n<div class=\"col-md-11\" style=\"padding: 1em;background: transparent;height:5%;text-align: center;\">\n  <span style=\"color:#aaa;\">CENOSTACK.COM 构建敏捷团队</span>&nbsp;&nbsp;\n  <a href=\"Mailto:ecrd-kapioneer@jd.com\" style=\"color:#eee;\">@ecrd-kapioneer</a>&nbsp;&nbsp;\n  <span style=\"color:#aaa;\">V1.7.11 Alpha</span>\n  <span>\n    <span class=\"fa fa-github fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n    <span class=\"fa fa-qq fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n    <span class=\"fa fa-weixin fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n    <span class=\"fa fa-weibo fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n  </span>\n</div>"

            /***/
        }),

        /***/
        "./src/app/devops/containers/containers.component.ts":
        /*!***********************************************************!*\
          !*** ./src/app/devops/containers/containers.component.ts ***!
          \***********************************************************/
        /*! exports provided: ContainersComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "ContainersComponent", function() { return ContainersComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _service_devops_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../service/devops.service */ "./src/app/service/devops.service.ts");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };


            var ContainersComponent = /** @class */ (function() {
                function ContainersComponent(devopsService) {
                    this.devopsService = devopsService;
                }
                ContainersComponent.prototype.ngOnInit = function() {
                    this.page = { page: 0, num: 100 };
                    this.containers = [];
                    this.getContainerList();
                    this.logs = [{ id: 0, log: "读取日志中...", class: "orange" }];
                    this.services = [];
                    this.progressInit("");
                };
                ContainersComponent.prototype.getContainerList = function() {
                    var _this = this;
                    this.developer = {
                        id: localStorage.getItem('id'),
                        developerUsername: localStorage.getItem("developerUsername"),
                        developerEmail: localStorage.getItem("developerEmail"),
                        developerPhone: localStorage.getItem("developerPhone"),
                        developerToken: localStorage.getItem("developerToken"),
                        lastModifyTime: localStorage.getItem("lastModifyTime"),
                        createTime: localStorage.getItem("createTime")
                    };
                    var method = "api.container.listContainer";
                    var params = {
                        developer: this.developer,
                        page: this.page
                    };
                    this.devopsService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            for (var _i = 0, _a = res.data.data; _i < _a.length; _i++) {
                                var msg = _a[_i];
                                _this.containers.push({
                                    container: msg.container,
                                    containerOther: msg.containerOther,
                                });
                            }
                        } else {
                            for (var _b = 0, _c = res.data.data; _b < _c.length; _b++) {
                                var msg = _c[_b];
                                _this.containers.push({
                                    container: msg.container,
                                    containerOther: msg.containerOther,
                                });
                            }
                        }
                    });
                };
                ContainersComponent.prototype.reConfig = function(data, id) {
                    var _this = this;
                    var method = "api.services.reConfigJavaTomcatService";
                    this.developer = {
                        id: localStorage.getItem('id'),
                        developerUsername: localStorage.getItem("developerUsername"),
                        developerEmail: localStorage.getItem("developerEmail"),
                        developerPhone: localStorage.getItem("developerPhone"),
                        developerToken: localStorage.getItem("developerToken"),
                        lastModifyTime: localStorage.getItem("lastModifyTime"),
                        createTime: localStorage.getItem("createTime")
                    };
                    var params = {
                        developer: this.developer,
                        containerName: data
                    };
                    this.progressStart("配置中...", id);
                    this.devopsService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            _this.progressOver("配置成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看日志</a>", id);
                            for (var _i = 0, _a = res.data.data; _i < _a.length; _i++) {
                                var msg = _a[_i];
                                _this.logs.push({ id: 0, log: msg, class: "red" });
                            }
                        } else {
                            _this.progressOver("配置成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看日志</a>", id);
                            for (var _b = 0, _c = res.data.data; _b < _c.length; _b++) {
                                var msg = _c[_b];
                                _this.logs.push({ id: 0, log: msg, class: "red" });
                            }
                        }
                    });
                };
                ContainersComponent.prototype.reStart = function(data, id) {
                    var _this = this;
                    var method = "api.services.reStartJavaTomcatService";
                    this.developer = {
                        id: localStorage.getItem('id'),
                        developerUsername: localStorage.getItem("developerUsername"),
                        developerEmail: localStorage.getItem("developerEmail"),
                        developerPhone: localStorage.getItem("developerPhone"),
                        developerToken: localStorage.getItem("developerToken"),
                        lastModifyTime: localStorage.getItem("lastModifyTime"),
                        createTime: localStorage.getItem("createTime")
                    };
                    var params = {
                        developer: this.developer,
                        containerName: data
                    };
                    this.progressStart("重启中...", id);
                    this.devopsService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            _this.progressOver("重启成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看日志</a>", id);
                            for (var _i = 0, _a = res.data.data; _i < _a.length; _i++) {
                                var msg = _a[_i];
                                _this.logs.push({ id: 0, log: msg, class: "red" });
                            }
                        } else {
                            _this.progressOver("重启成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看日志</a>", id);
                            for (var _b = 0, _c = res.data.data; _b < _c.length; _b++) {
                                var msg = _c[_b];
                                _this.logs.push({ id: 0, log: msg, class: "red" });
                            }
                        }
                    });
                };
                ContainersComponent.prototype.stop = function(data, id) {
                    var _this = this;
                    var method = "api.services.stopJavaTomcatService";
                    this.developer = {
                        id: localStorage.getItem('id'),
                        developerUsername: localStorage.getItem("developerUsername"),
                        developerEmail: localStorage.getItem("developerEmail"),
                        developerPhone: localStorage.getItem("developerPhone"),
                        developerToken: localStorage.getItem("developerToken"),
                        lastModifyTime: localStorage.getItem("lastModifyTime"),
                        createTime: localStorage.getItem("createTime")
                    };
                    var params = {
                        developer: this.developer,
                        containerName: data
                    };
                    this.progressStart("停止中...", id);
                    this.devopsService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            _this.progressOver("停止成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看日志</a>", id);
                            for (var _i = 0, _a = res.data.data; _i < _a.length; _i++) {
                                var msg = _a[_i];
                                _this.logs.push({ id: 0, log: msg, class: "red" });
                            }
                        } else {
                            _this.progressOver("停止成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看日志</a>", id);
                            for (var _b = 0, _c = res.data.data; _b < _c.length; _b++) {
                                var msg = _c[_b];
                                _this.logs.push({ id: 0, log: msg, class: "red" });
                            }
                        }
                    });
                };
                ContainersComponent.prototype.checkStatus = function(data, id) {
                    var _this = this;
                    var method = "api.services.checkJavaTomcatService";
                    this.developer = {
                        id: localStorage.getItem('id'),
                        developerUsername: localStorage.getItem("developerUsername"),
                        developerEmail: localStorage.getItem("developerEmail"),
                        developerPhone: localStorage.getItem("developerPhone"),
                        developerToken: localStorage.getItem("developerToken"),
                        lastModifyTime: localStorage.getItem("lastModifyTime"),
                        createTime: localStorage.getItem("createTime")
                    };
                    var params = {
                        developer: this.developer,
                        containerName: data
                    };
                    this.progressStart("检查中...", id);
                    this.devopsService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            _this.progressOver("检查成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看</a>", id);
                            for (var _i = 0, _a = res.data.data; _i < _a.length; _i++) {
                                var msg = _a[_i];
                                _this.logs.push({ id: 0, log: msg, class: "red" });
                            }
                        } else {
                            _this.progressOver("检查成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看</a>", id);
                            for (var _b = 0, _c = res.data.data; _b < _c.length; _b++) {
                                var msg = _c[_b];
                                _this.logs.push({ id: 0, log: msg, class: "red" });
                            }
                        }
                    });
                };
                ContainersComponent.prototype.serviceCntMouseEnter = function(data) {
                    var _this = this;
                    this.services = [];
                    var method = "api.services.listServices";
                    var params = { containerName: data };
                    this.devopsService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            for (var _i = 0, _a = res.data.data; _i < _a.length; _i++) {
                                var msg = _a[_i];
                                _this.services.push({
                                    gitProject: msg.gitProject,
                                    codeBuild: msg.buildCode,
                                    deployPackage: msg.deployPackage,
                                    serviceOther: null,
                                });
                            }
                        } else {
                            for (var _b = 0, _c = res.data.data; _b < _c.length; _b++) {
                                var msg = _c[_b];
                                _this.services.push({
                                    gitProject: msg.gitProject,
                                    codeBuild: msg.buildCode,
                                    deployPackage: msg.deployPackage,
                                    serviceOther: null,
                                });
                            }
                        }
                    });
                };
                ContainersComponent.prototype.showServices = function(data) {
                    document.getElementById("left_container_list").className = "col-md-9";
                    document.getElementById("right_service_list").style.display = "block";
                    document.getElementById("right_service_list").className = "col-md-3";
                };
                ContainersComponent.prototype.closeServiceList = function() {
                    document.getElementById("left_container_list").className = "col-md-12";
                    document.getElementById("right_service_list").style.display = "none";
                    document.getElementById("right_service_list").className = "col-md-0";
                };
                ContainersComponent.prototype.progressInit = function(msg) {
                    clearInterval(this.timer);
                    this.progress = "0";
                    document.getElementById("progress").style.display = "none";
                    document.getElementById("progress_p").innerHTML = msg;
                };
                ContainersComponent.prototype.progressStart = function(msg, id) {
                    var _this = this;
                    this.logs = [];
                    document.getElementById("progress").style.display = "block";
                    document.getElementById("progress_p").innerHTML = msg;
                    // document.getElementById(id).style.display = "none";
                    var n = 0;
                    this.timer = setInterval(function() {
                        if (n < 97) {
                            _this.progress = n.toString();
                            document.getElementById("progress_p").innerHTML = msg + "(" + _this.progress + ")...";
                            n += Math.floor(Math.random() * 3 + 0);
                        }
                    }, 100);
                };
                ContainersComponent.prototype.progressOver = function(msg, id) {
                    clearInterval(this.timer);
                    // document.getElementById(id).style.display = "block";
                    this.progress = "100";
                    document.getElementById("progress_p").innerHTML = msg;
                };
                ContainersComponent.prototype.ngOnDestroy = function() {
                    if (this.timer) {
                        clearInterval(this.timer);
                    }
                };
                ContainersComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-containers',
                        template: __webpack_require__( /*! ./containers.component.html */ "./src/app/devops/containers/containers.component.html"),
                        styles: [__webpack_require__( /*! ./containers.component.css */ "./src/app/devops/containers/containers.component.css")]
                    }),
                    __metadata("design:paramtypes", [_service_devops_service__WEBPACK_IMPORTED_MODULE_1__["DevopsService"]])
                ], ContainersComponent);
                return ContainersComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/devops/dashboard/dashboard.component.css":
        /*!**********************************************************!*\
          !*** ./src/app/devops/dashboard/dashboard.component.css ***!
          \**********************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = ".orange {\n  color: orange;\n}\n\n.green {\n  color: green;\n}\n\n.red {\n  color: red;\n}\n\n* {\n  outline: none;\n}\n\ninput::-webkit-input-placeholder {\n  /* placeholder颜色  */\n  color: #333;\n  /* placeholder字体大小  */\n  font-size: 12px;\n  /* placeholder位置  */\n  text-align: left;\n}\n\n.spinner {\n  width: 20px;\n  height: 20px;\n  margin: 0px 0px;\n  background-color: #fff;\n  border-radius: 100%;\n  -webkit-animation: scaleout 1.0s infinite ease-in-out;\n  animation: scaleout 1.0s infinite ease-in-out;\n}\n\n@-webkit-keyframes scaleout {\n  0% {\n    -webkit-transform: scale(0.0)\n  }\n\n  100% {\n    -webkit-transform: scale(1.0);\n    opacity: 0;\n  }\n}\n\n@keyframes scaleout {\n  0% {\n    transform: scale(0.0);\n    -webkit-transform: scale(0.0);\n  }\n\n  100% {\n    transform: scale(1.0);\n    -webkit-transform: scale(1.0);\n    opacity: 0;\n  }\n}\n\nli {\n  list-style-type: none;\n}\n\n.uk-background-muted{\n  border: solid 1px #fff;\n}\n\n.uk-background-muted:hover{\n  border: solid 1px #39f;\n}"

            /***/
        }),

        /***/
        "./src/app/devops/dashboard/dashboard.component.html":
        /*!***********************************************************!*\
          !*** ./src/app/devops/dashboard/dashboard.component.html ***!
          \***********************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<app-left></app-left>\n<div class=\"col-md-11\" style=\"padding: 1em;height:5%;font-weight:bolder;background: transparent;color: #fff;z-index:99;display:table-cell;vertical-align:middle;\">\n  <ul class=\"uk-breadcrumb\">\n    <li><a href=\"#\">DevOps</a></li>\n    <li><span>DashBoard</span></li>\n  </ul>\n</div>\n<div class=\"col-md-11\" style=\"background: transparent;padding:0;height: 90%;\">\n\n  <div class=\"col-md-4\" style=\"padding: 2em;background: transparent;height: 100%;padding:1em;padding-right:0.5em;\">\n    <div class=\"col-md-12\" style=\"background:#fff;height:100%;padding:2em;border-radius: 6px;\">\n      <ul class=\"uk-tab\" uk-tab>\n        <li class=\"uk-active\">\n          <a href=\"#container\"> 概览 </a>\n        </li>\n      </ul>\n      <div class=\"col-md-12\" style=\"text-align:center;\">\n        <div class=\"uk-child-width-1-2@s\" uk-grid>\n          <div>\n            <div class=\"uk-primary uk-background-muted uk-padding\">\n              <h3>服务</h3>\n              <p><span id=\"serviceCount\"></span>个服务正在运行</p>\n            </div>\n          </div>\n          <div>\n            <div class=\"uk-primary uk-background-muted uk-padding\">\n              <h3>容器</h3>\n              <p><span id=\"containerCount\"></span>个容器正在运行</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"uk-child-width-1-2@s\" uk-grid>\n          <div>\n            <div class=\"uk-primary uk-background-muted uk-padding\">\n              <h3>构建</h3>\n              <p><span id=\"buildCount\"></span>个版本构建</p>\n            </div>\n          </div>\n          <div>\n            <div class=\"uk-primary uk-background-muted uk-padding\">\n              <h3>拉取</h3>\n              <p><span id=\"gitCount\"></span>个项目代码</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4\" style=\"padding: 2em;background: transparent;height: 100%;padding:1em;padding-left:0.5em;padding-right:0.5em;\">\n    <div class=\"col-md-12\" style=\"background:#fff;height:100%;padding:2em;border-radius: 6px;\">\n      <ul class=\"uk-tab\" uk-tab>\n        <li class=\"uk-active\">\n          <a href=\"#container\"> 我的 </a>\n        </li>\n      </ul>\n      <div class=\"col-md-12\" style=\"text-align:center;\">\n\n        <div class=\"col-md-12\" style=\"background:#f8f8f8;padding:1em;\">\n          <h4 class=\"col-md-2\" style=\"padding:0;margin:0;\">服务</h4>\n          <p class=\"col-md-5\" style=\"padding:0;margin:0;\"><span id=\"myServiceCount\"></span>个服务正在运行</p>\n          <a class=\"col-md-5\" href=\"services\"><button class=\"uk-button uk-button-default\">查看</button></a>\n        </div>\n\n        <div class=\"col-md-12\" style=\"background:#f8f8f8;padding:1em;margin-top:1em;\">\n          <h4 class=\"col-md-2\" style=\"padding:0;margin:0;\">服务</h4>\n          <p class=\"col-md-5\" style=\"padding:0;margin:0;\"><span id=\"myContainerCount\"></span>个容器正在运行</p>\n          <a class=\"col-md-5\" href=\"containers\"><button class=\"uk-button uk-button-default\">查看</button></a>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"col-md-4\" style=\"padding: 2em;background: transparent;height: 100%;padding:1em;padding-left: 0.5em;\">\n    <div class=\"col-md-12\" style=\"background:#fff;height:100%;padding:2em;border-radius: 6px;\">\n      <ul class=\"uk-tab\" uk-tab>\n        <li class=\"uk-active\">\n          <a href=\"#container\"> devops 记录 </a>\n        </li>\n      </ul>\n      <ul class=\"uk-list\" style=\"height:85%;overflow:auto;\">\n        <li *ngFor=\"let log of devLogs\"  (click)=\"showLogDetail(log.id)\"><span id=\"log-span-{{log.id}}\" class=\"fa fa-caret-right cc-span\"></span><span class=\"cc-span cc-span-minor\">{{log.name}}</span><span class=\"cc-span cc-span-normal\">{{log.time}}</span><span\n            class=\"cc-span cc-span-{{log.command}}\">{{log.command}}</span><span class=\"cc-span cc-span-normal\">{{log.arg}}</span>\n            <div class=\"col-md-12\" style=\"display:none;padding-left:1.6em;padding-right:1.6em;\" id=\"toggle-log-{{log.id}}\">\n              <div class=\"col-md-12 cc-span-normal\" style=\"padding:0;margin:0;padding:1em;\">\n             \n              <p class=\"col-md-12\" style=\"padding:0;margin:0;margin-top:1em;\"><span style=\"font-weight:bolder;\">操作类型</span>: &nbsp;{{log.command}} {{log.arg}}</p>\n              <p class=\"col-md-12\" style=\"padding:0;margin:0;margin-top:1em;\"><span style=\"font-weight:bolder;\">详情</span>: &nbsp;{{log.content}}</p>\n              </div>\n              <p class=\"col-md-6 cc-span cc-span-git\" style=\"padding:0;margin:0;text-align: center;padding-top:0.2em;padding-bottom:0.2em;\">用户:{{log.name}}</p>\n              <p class=\"col-md-6 cc-span cc-span-git\" style=\"padding:0;margin:0;text-align: center;padding-top:0.2em;padding-bottom:0.2em;\">时间:{{log.time}}</p>\n             \n            </div>  \n            \n        </li>\n            \n      </ul>\n       \n      <button (click)=\"loadMoreLogs()\" class=\"cc-button cc-button-ring-blue\" style=\"margin-top:1em;\">加载更多</button>\n    </div>\n  </div>\n\n\n\n\n\n</div>\n<div class=\"col-md-11\" style=\"padding: 1em;background: transparent;height:5%;text-align: center;\">\n  <span style=\"color:#aaa;\">CENOSTACK.COM 构建敏捷团队</span>&nbsp;&nbsp;\n  <a href=\"Mailto:ecrd-kapioneer@jd.com\" style=\"color:#eee;\">@ecrd-kapioneer</a>&nbsp;&nbsp;\n  <span style=\"color:#aaa;\">V1.7.11 Alpha</span>\n  <span>\n    <span class=\"fa fa-github fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n    <span class=\"fa fa-qq fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n    <span class=\"fa fa-weixin fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n    <span class=\"fa fa-weibo fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n  </span>\n</div>"

            /***/
        }),

        /***/
        "./src/app/devops/dashboard/dashboard.component.ts":
        /*!*********************************************************!*\
          !*** ./src/app/devops/dashboard/dashboard.component.ts ***!
          \*********************************************************/
        /*! exports provided: DashboardComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _service_devops_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../service/devops.service */ "./src/app/service/devops.service.ts");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };


            var SHELL_BASE_PATH = "/export/devops/devops/shell/code/";
            var DashboardComponent = /** @class */ (function() {
                function DashboardComponent(devopsService) {
                    this.devopsService = devopsService;
                }
                DashboardComponent.prototype.ngOnInit = function() {
                    this.getServiceCount();
                    this.getContainerCount();
                    this.getMyContainerCount();
                    this.getMyServiceCount();
                    this.getBuildCount();
                    this.getCodeCount();
                    this.devLogs = [];
                    this.page = {
                        page: 0,
                        num: 8
                    };
                    this.getDevLogs(this.page);
                };
                DashboardComponent.prototype.showLogDetail = function(id) {
                    if (document.getElementById("toggle-log-" + id).style.display == "none") {
                        document.getElementById("toggle-log-" + id).style.display = "block";
                        document.getElementById("log-span-" + id).className = "fa fa-caret-down cc-span";
                    } else {
                        document.getElementById("toggle-log-" + id).style.display = "none";
                        document.getElementById("log-span-" + id).className = "fa fa-caret-right cc-span";
                    }
                };
                DashboardComponent.prototype.getDevLogs = function(page) {
                    var _this = this;
                    var method = "api.devlog.list";
                    var params = {
                        page: page
                    };
                    this.devopsService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            for (var _i = 0, _a = res.data.data; _i < _a.length; _i++) {
                                var msg = _a[_i];
                                _this.devLogs.push({
                                    id: msg.id,
                                    name: msg.username,
                                    time: msg.lastModifyTime,
                                    command: msg.command,
                                    arg: msg.args,
                                    content: msg.content,
                                    desc: msg.ddesc,
                                    result: "",
                                });
                            }
                        } else {
                            for (var _b = 0, _c = res.data.data; _b < _c.length; _b++) {
                                var msg = _c[_b];
                                _this.devLogs.push({
                                    id: msg.id,
                                    name: msg.username,
                                    time: msg.lastModifyTime,
                                    command: msg.command,
                                    arg: msg.args,
                                    content: msg.content,
                                    desc: msg.ddesc,
                                    result: "",
                                });
                            }
                        }
                    });
                };
                DashboardComponent.prototype.loadMoreLogs = function() {
                    this.page.page = this.page.page + 1;
                    this.getDevLogs({
                        page: this.page.page * this.page.num,
                        num: 8
                    });
                };
                DashboardComponent.prototype.getBuildCount = function() {
                    var _this = this;
                    var method = "api.build.count";
                    var params = {};
                    this.devopsService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            _this.buildCount = res.data.data;
                            document.getElementById("buildCount").innerHTML = res.data.data;
                        } else {
                            _this.buildCount = res.data.data;
                            document.getElementById("buildCount").innerHTML = res.data.data;
                        }
                    });
                };
                DashboardComponent.prototype.getCodeCount = function() {
                    var _this = this;
                    var method = "api.git.count";
                    var params = {};
                    this.devopsService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            _this.gitCount = res.data.data;
                            document.getElementById("gitCount").innerHTML = res.data.data;
                        } else {
                            _this.gitCount = res.data.data;
                            document.getElementById("gitCount").innerHTML = res.data.data;
                        }
                    });
                };
                DashboardComponent.prototype.getServiceCount = function() {
                    var _this = this;
                    var method = "api.service.count";
                    var params = {};
                    this.devopsService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            _this.myServiceCount = res.data.data;
                            document.getElementById("serviceCount").innerHTML = res.data.data;
                        } else {
                            _this.myServiceCount = res.data.data;
                            document.getElementById("serviceCount").innerHTML = res.data.data;
                        }
                    });
                };
                DashboardComponent.prototype.getMyServiceCount = function() {
                    var _this = this;
                    var method = "api.service.count.me";
                    this.developer = {
                        id: localStorage.getItem('id'),
                        developerUsername: localStorage.getItem("developerUsername"),
                        developerEmail: localStorage.getItem("developerEmail"),
                        developerPhone: localStorage.getItem("developerPhone"),
                        developerToken: localStorage.getItem("developerToken"),
                        lastModifyTime: localStorage.getItem("lastModifyTime"),
                        createTime: localStorage.getItem("createTime")
                    };
                    var params = {
                        developer: this.developer
                    };
                    this.devopsService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            _this.myServiceCount = res.data.data;
                            document.getElementById("myServiceCount").innerHTML = res.data.data;
                        } else {
                            _this.myServiceCount = res.data.data;
                            document.getElementById("myServiceCount").innerHTML = res.data.data;
                        }
                    });
                };
                DashboardComponent.prototype.getContainerCount = function() {
                    var _this = this;
                    var method = "api.container.count";
                    var params = {};
                    this.devopsService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            _this.myServiceCount = res.data.data;
                            document.getElementById("containerCount").innerHTML = res.data.data;
                        } else {
                            _this.myServiceCount = res.data.data;
                            document.getElementById("containerCount").innerHTML = res.data.data;
                        }
                    });
                };
                DashboardComponent.prototype.getMyContainerCount = function() {
                    var _this = this;
                    var method = "api.container.count.me";
                    this.developer = {
                        id: localStorage.getItem('id'),
                        developerUsername: localStorage.getItem("developerUsername"),
                        developerEmail: localStorage.getItem("developerEmail"),
                        developerPhone: localStorage.getItem("developerPhone"),
                        developerToken: localStorage.getItem("developerToken"),
                        lastModifyTime: localStorage.getItem("lastModifyTime"),
                        createTime: localStorage.getItem("createTime")
                    };
                    var params = {
                        developer: this.developer
                    };
                    this.devopsService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            _this.myServiceCount = res.data.data;
                            document.getElementById("myContainerCount").innerHTML = res.data.data;
                        } else {
                            _this.myServiceCount = res.data.data;
                            document.getElementById("myContainerCount").innerHTML = res.data.data;
                        }
                    });
                };
                DashboardComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-dashboard',
                        template: __webpack_require__( /*! ./dashboard.component.html */ "./src/app/devops/dashboard/dashboard.component.html"),
                        styles: [__webpack_require__( /*! ./dashboard.component.css */ "./src/app/devops/dashboard/dashboard.component.css")]
                    }),
                    __metadata("design:paramtypes", [_service_devops_service__WEBPACK_IMPORTED_MODULE_1__["DevopsService"]])
                ], DashboardComponent);
                return DashboardComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/devops/deploy/deploy.component.css":
        /*!****************************************************!*\
          !*** ./src/app/devops/deploy/deploy.component.css ***!
          \****************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "\nli {\n\n    list-style-type:none;\n    \n    }"

            /***/
        }),

        /***/
        "./src/app/devops/deploy/deploy.component.html":
        /*!*****************************************************!*\
          !*** ./src/app/devops/deploy/deploy.component.html ***!
          \*****************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<app-left></app-left>\n<div class=\"col-md-11\" style=\"padding: 1em;height:5%;display:table-cell;vertical-align:middle;font-weight:bolder;background: transparent;color: #fff;z-index:99;\">\n \n    <ul class=\"uk-breadcrumb\">\n        <li><a href=\"#\">DevOps</a></li>\n        <li><a href=\"#\">服务</a></li>\n        <li><a href=\"#\">Java</a></li>\n        <li><span>部署</span></li>\n    </ul>\n</div>\n<div class=\"col-md-11\" style=\"padding: 1em;background: transparent;height:90%;\">\n\n  <div class=\"col-md-12\" style=\"padding: 0;background: #fff;padding-bottom: 2em;height:100%;overflow: auto;border-radius: 6px;\">\n    <div class=\"col-md-12\">\n      <div class=\"col-md-12\" style=\"margin-top:1em;margin-bottom: 2em;\">\n\n          <div id=\"progress\" class=\"uk-margin\">\n              <div class=\"uk-form-controls\">\n                  <progress id=\"js-progressbar\" class=\"uk-progress\" [value]=\"progress\" max=\"100\"></progress>\n                  <p id=\"progress_p\">部署中... 请稍候...</p>\n              </div>\n          </div>\n       \n\n        <ul class=\"uk-tab\" uk-tab>\n          <li (click)=\"changeTab('git')\" class=\"uk-active\">\n            <a href=\"#git\"> 代码 </a>\n          </li>\n          <li (click)=\"changeTab('build')\">\n            <a href=\"#build\"> 构建 </a>\n          </li>\n          <li (click)=\"changeTab('deploy')\">\n            <a href=\"#deploy\"> 部署 </a>\n          </li>\n        </ul>\n        <div id=\"git\" class=\"uk-form-horizontal uk-margin-large\">\n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">git地址</label>\n            <div class=\"uk-form-controls\">\n              <input (keyup)=\"gitPathChange($event)\" class=\"uk-input\" type=\"text\" placeholder=\"请输入git地址\">\n            </div>\n          </div>\n\n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">git用户名</label>\n            <div class=\"uk-form-controls\">\n              <input (keyup)=\"gitUserChange($event)\" class=\"uk-input\" type=\"text\" placeholder=\"请输入git用户名\">\n            </div>\n          </div>\n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">git密码</label>\n            <div class=\"uk-form-controls\">\n              <input (keyup)=\"gitPasswordChange($event)\" class=\"uk-input\" type=\"password\" placeholder=\"请输入git密码\">\n            </div>\n          </div>\n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">本地代码地址</label>\n            <div class=\"uk-form-controls\">\n              <input (keyup)=\"gitCodePathChange($event)\" class=\"uk-input\" type=\"text\" readonly=\"readonly\" value=\"/export/devops/code/\"\n                placeholder=\"本地代码地址\">\n            </div>\n          </div>\n          <button (click)=\"updateCode()\" class=\"uk-button uk-button-primary\">\n            拉取\n          </button>\n        \n          <div id=\"modal-overflow\" uk-modal style=\"z-index:999;\">\n            <div class=\"uk-modal-dialog\">\n\n              <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n\n              <div class=\"uk-modal-header\">\n                <h2 class=\"uk-modal-title\">日志</h2>\n              </div>\n\n              <div class=\"uk-modal-body\" uk-overflow-auto>\n                <li *ngFor=\"let log of logs\" style=\"margin-top:0.5em;\">\n                  <p class={{log.class}}>{{log.log}}</p>\n                </li>\n              </div>\n\n              <div class=\"uk-modal-footer uk-text-right\">\n                <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Cancel</button>\n                <button class=\"uk-button uk-button-primary\" type=\"button\">Save</button>\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n\n\n        <div id=\"build\" class=\"uk-form-horizontal uk-margin-large\" style=\"margin-top:2em;\">\n\n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">本地代码地址</label>\n            <div class=\"uk-form-controls\">\n              <input class=\"uk-input\" type=\"text\" readonly=\"readonly\" value=\"/export/devops/code/\" placeholder=\"本地代码地址\">\n            </div>\n          </div>\n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">build 地址</label>\n            <div class=\"uk-form-controls\">\n              <input class=\"uk-input\" type=\"text\" readonly=\"readonly\" value=\"/export/devops/build/\" placeholder=\"build 地址:\">\n            </div>\n          </div>\n\n          <div class=\"uk-margin\">\n\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">git目录</label>\n            <div class=\"uk-form-controls\">\n              <select (mouseup)=\"buildGitProjectChange($event)\" class=\"uk-select\">\n                <option *ngFor=\"let dir of gitProjectDir\" value=\"{{dir}}\">\n                  {{dir}}\n                </option>\n              </select>\n            </div>\n          </div>\n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">分支</label>\n            <div class=\"uk-form-controls\">\n              <select (mouseup)=\"buildGitBranchChange($event)\" class=\"uk-select\">\n                <option *ngFor=\"let branch of gitProjectBranchs\" value=\"{{branch}}\">\n                  {{branch}}\n                </option>\n              </select>\n            </div>\n          </div>\n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">项目名</label>\n            <div class=\"uk-form-controls\">\n              <input class=\"uk-input\" [value]=\"buildCode.projectName\" type=\"text\" placeholder=\"项目名\">\n            </div>\n          </div>\n\n\n          <button (click)=\"codeBuild()\" class=\"uk-button uk-button-primary\">\n            构建\n          </button>\n         \n          <div id=\"modal-overflow\" uk-modal style=\"z-index:999;\">\n            <div class=\"uk-modal-dialog\">\n\n              <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n\n              <div class=\"uk-modal-header\">\n                <h2 class=\"uk-modal-title\">日志</h2>\n              </div>\n\n              <div class=\"uk-modal-body\" uk-overflow-auto>\n                <li *ngFor=\"let log of logs\" style=\"margin-top:0.5em;\">\n                  <p class={{log.class}}>{{log.log}}</p>\n                </li>\n              </div>\n\n              <div class=\"uk-modal-footer uk-text-right\">\n                <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Cancel</button>\n                <button class=\"uk-button uk-button-primary\" type=\"button\">Save</button>\n              </div>\n\n            </div>\n          </div>\n\n\n        </div>\n\n\n        <div id=\"deploy\" class=\"uk-form-horizontal uk-margin-large\" style=\"margin-top:2em;\">\n\n\n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">build 地址</label>\n            <div class=\"uk-form-controls\">\n              <input class=\"uk-input\" type=\"text\" readonly=\"readonly\" [value]=\"deployPackage.buildPath\" placeholder=\"build 地址:\">\n            </div>\n          </div>\n\n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">容器</label>\n            <div class=\"uk-form-controls\">\n              <select (mouseup)=\"buildContainerChange($event)\" class=\"uk-select\">\n                <option *ngFor=\"let container of containers\" value=\"{{container.container.name}}\">\n                  {{container.container.name}}\n                </option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">项目</label>\n            <div class=\"uk-form-controls\">\n              <select (mouseup)=\"buildProjectChange($event)\" class=\"uk-select\">\n                <option *ngFor=\"let project of buildProjectDir\" value=\"{{project}}\">\n                  {{project}}\n                </option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">构建分支</label>\n            <div class=\"uk-form-controls\">\n\n              <select (mouseup)=\"buildProjectBranchChange($event)\" class=\"uk-select\">\n                <option *ngFor=\"let branch of buildProjectBranchs\" value=\"{{branch}}\">\n                  {{branch}}\n                </option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">构建版本</label>\n            <div class=\"uk-form-controls\">\n\n              <select (mouseup)=\"buildProjectVersionChange($event)\" class=\"uk-select\">\n                <option *ngFor=\"let version of buildProjectVersion\" value=\"{{version}}\">\n                  {{version}}\n                </option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">容器部署目录</label>\n            <div class=\"uk-form-controls\">\n              <input [value]=\"deployPackage.remoteDeployPath\" class=\"uk-input\" type=\"text\" value=\"\" placeholder=\"容器部署目录\">\n            </div>\n          </div>\n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">运行日志目录</label>\n            <div class=\"uk-form-controls\">\n              <input [value]=\"deployPackage.remoteLogPath\" class=\"uk-input\" type=\"text\" placeholder=\"运行日志目录\">\n            </div>\n          </div>\n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">JVM 参数</label>\n            <div class=\"uk-form-controls\">\n              <input [value]=\"deployPackage.jvmOptions\" class=\"uk-input\" type=\"text\" placeholder=\" JVM 参数\">\n            </div>\n          </div>\n          \n          <div class=\"uk-margin\">\n              <label class=\"uk-form-label\" for=\"form-horizontal-text\">环境</label>\n              <div class=\"uk-form-controls uk-form-controls-text\">\n                  <label><input class=\"uk-radio\" type=\"radio\" name=\"env\">&nbsp;&nbsp;&nbsp;生产&nbsp;[prod]</label><br>\n                  <label><input class=\"uk-radio\" type=\"radio\" name=\"env\">&nbsp;&nbsp;&nbsp;预发&nbsp;[gray]</label><br>\n                  <label><input class=\"uk-radio\" type=\"radio\" name=\"env\">&nbsp;&nbsp;&nbsp;其它<input class=\"uk-input\" type=\"text\" name=\"env\" placeholder=\"其它\"/></label><br>\n                  \n              </div>\n          </div>\n\n          \n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">其他选项</label>\n            <div class=\"uk-form-controls\">\n              <div class=\"uk-margin uk-grid-small uk-child-width-auto uk-grid\">\n                <label>\n                  <input class=\"uk-checkbox\" type=\"checkbox\">&nbsp;&nbsp;&nbsp;部署Tomcat</label>\n                <label>\n                  <input class=\"uk-checkbox\" type=\"checkbox\">&nbsp;&nbsp;&nbsp;部署监控</label>\n                  <label>\n                      <input class=\"uk-checkbox\" type=\"checkbox\">&nbsp;&nbsp;&nbsp;部署Nginx</label>\n              </div>\n            </div>\n          </div>\n          <button (click)=\"packageDeploy()\" class=\"uk-button uk-button-primary\">\n            部署\n          </button>\n         \n          <div id=\"modal-overflow\" uk-modal style=\"z-index:999;\">\n            <div class=\"uk-modal-dialog\">\n\n              <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n\n              <div class=\"uk-modal-header\">\n                <h2 class=\"uk-modal-title\">日志</h2>\n              </div>\n\n              <div class=\"uk-modal-body\" uk-overflow-auto>\n                <li *ngFor=\"let log of logs\" style=\"margin-top:0.5em;\">\n                  <p class={{log.class}}>{{log.log}}</p>\n                </li>\n              </div>\n\n              <div class=\"uk-modal-footer uk-text-right\">\n                <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Cancel</button>\n                <button class=\"uk-button uk-button-primary\" type=\"button\">Save</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"col-md-11\" style=\"padding: 1em;background: transparent;height:5%;text-align: center;\">\n  <span style=\"color:#aaa;\">CENOSTACK.COM 构建敏捷团队</span>&nbsp;&nbsp;\n  <a href=\"Mailto:ecrd-kapioneer@jd.com\" style=\"color:#eee;\">@ecrd-kapioneer</a>&nbsp;&nbsp;\n  <span style=\"color:#aaa;\">V1.7.11 Alpha</span>\n  <span>\n    <span class=\"fa fa-github fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n    <span class=\"fa fa-qq fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n    <span class=\"fa fa-weixin fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n    <span class=\"fa fa-weibo fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n  </span>\n</div>\n"

            /***/
        }),

        /***/
        "./src/app/devops/deploy/deploy.component.ts":
        /*!***************************************************!*\
          !*** ./src/app/devops/deploy/deploy.component.ts ***!
          \***************************************************/
        /*! exports provided: DeployComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "DeployComponent", function() { return DeployComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _service_devops_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../service/devops.service */ "./src/app/service/devops.service.ts");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };


            var DeployComponent = /** @class */ (function() {
                function DeployComponent(devopsService) {
                    this.devopsService = devopsService;
                }
                DeployComponent.prototype.ngOnInit = function() {
                    this.gitProject = {
                        gitPath: "",
                        gitUser: "",
                        gitPassword: "",
                        gitCodePath: "/export/devops/code",
                    };
                    this.buildCode = {
                        codePath: "/export/devops/code",
                        buildPath: "/export/devops/build",
                        gitPath: "null",
                        gitBranch: "null",
                        projectName: "null",
                    };
                    this.deployPackage = {
                        buildPath: "/export/devops/build",
                        containerName: "null",
                        projectName: "null",
                        gitBranch: "null",
                        buildVersion: "null",
                        remoteDeployPath: "/export/servers/tomcat",
                        remoteLogPath: "/export/services/log",
                        jvmOptions: "null",
                        env: "b2b_gcy",
                    };
                    this.logs = [{ id: 0, log: "读取日志中...", class: "orange" }];
                    this.gitProjectDir = [];
                    this.gitProjectBranchs = [];
                    this.containers = [];
                    this.buildProjectDir = [];
                    this.buildProjectBranchs = [];
                    this.buildProjectVersion = [];
                    this.progressInit("");
                    this.initTab();
                    this.changeTab("git");
                };
                DeployComponent.prototype.initTab = function() {
                    document.getElementById("git").style.display = "none";
                    document.getElementById("build").style.display = "none";
                    document.getElementById("deploy").style.display = "none";
                };
                DeployComponent.prototype.changeTab = function(tab) {
                    this.initTab();
                    document.getElementById(tab).style.display = "block";
                    if (tab == "build") {
                        this.getGitProjectDirs();
                    }
                    if (tab == "deploy") {
                        this.getContainers();
                        this.getBuildProjects();
                    }
                };
                DeployComponent.prototype.updateCode = function() {
                    var _this = this;
                    this.logs = [];
                    this.progressStart("拉取中...");
                    var method = "api.git.updateCode";
                    this.developer = {
                        id: localStorage.getItem('id'),
                        developerUsername: localStorage.getItem("developerUsername"),
                        developerEmail: localStorage.getItem("developerEmail"),
                        developerPhone: localStorage.getItem("developerPhone"),
                        developerToken: localStorage.getItem("developerToken"),
                        lastModifyTime: localStorage.getItem("lastModifyTime"),
                        createTime: localStorage.getItem("createTime")
                    };
                    var params = {
                        developer: this.developer,
                        gitProject: this.gitProject
                    };
                    this.devopsService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            _this.progressOver("拉取成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看日志</a>");
                            for (var _i = 0, _a = res.data.data; _i < _a.length; _i++) {
                                var msg = _a[_i];
                                _this.logs.push({ id: 0, log: msg, class: "green" });
                            }
                        } else {
                            _this.progressOver("拉取成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看日志</a>");
                            for (var _b = 0, _c = res.data.data; _b < _c.length; _b++) {
                                var msg = _c[_b];
                                _this.logs.push({ id: 0, log: msg, class: "red" });
                            }
                        }
                    });
                };
                DeployComponent.prototype.codeBuild = function() {
                    var _this = this;
                    this.logs = [];
                    this.progressStart("构建中...");
                    var method = "api.git.buildMavenCode";
                    this.developer = {
                        id: localStorage.getItem('id'),
                        developerUsername: localStorage.getItem("developerUsername"),
                        developerEmail: localStorage.getItem("developerEmail"),
                        developerPhone: localStorage.getItem("developerPhone"),
                        developerToken: localStorage.getItem("developerToken"),
                        lastModifyTime: localStorage.getItem("lastModifyTime"),
                        createTime: localStorage.getItem("createTime")
                    };
                    var params = {
                        developer: this.developer,
                        buildCode: this.buildCode
                    };
                    this.devopsService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            _this.progressOver("构建成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看日志</a>");
                            for (var _i = 0, _a = res.data.data; _i < _a.length; _i++) {
                                var msg = _a[_i];
                                _this.logs.push({ id: 0, log: msg, class: "green" });
                            }
                        } else {
                            _this.progressOver("构建成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看日志</a>");
                            for (var _b = 0, _c = res.data.data; _b < _c.length; _b++) {
                                var msg = _c[_b];
                                _this.logs.push({ id: 0, log: msg, class: "red" });
                            }
                        }
                    });
                };
                DeployComponent.prototype.packageDeploy = function() {
                    var _this = this;
                    this.logs = [];
                    this.progressStart("部署中...");
                    var method = "api.git.deployJavaPackage";
                    this.developer = {
                        id: localStorage.getItem('id'),
                        developerUsername: localStorage.getItem("developerUsername"),
                        developerEmail: localStorage.getItem("developerEmail"),
                        developerPhone: localStorage.getItem("developerPhone"),
                        developerToken: localStorage.getItem("developerToken"),
                        lastModifyTime: localStorage.getItem("lastModifyTime"),
                        createTime: localStorage.getItem("createTime")
                    };
                    var params = {
                        developer: this.developer,
                        deployPackage: this.deployPackage
                    };
                    this.devopsService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            _this.progressOver("部署成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看日志</a>");
                            for (var _i = 0, _a = res.data.data; _i < _a.length; _i++) {
                                var msg = _a[_i];
                                _this.logs.push({ id: 0, log: msg, class: "green" });
                            }
                        } else {
                            _this.progressOver("部署成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看日志</a>");
                            for (var _b = 0, _c = res.data.data; _b < _c.length; _b++) {
                                var msg = _c[_b];
                                _this.logs.push({ id: 0, log: msg, class: "red" });
                            }
                        }
                    });
                };
                DeployComponent.prototype.getGitProjectDirs = function() {
                    var _this = this;
                    this.logs = [];
                    this.gitProjectDir = [];
                    this.developer = {
                        id: localStorage.getItem('id'),
                        developerUsername: localStorage.getItem("developerUsername"),
                        developerEmail: localStorage.getItem("developerEmail"),
                        developerPhone: localStorage.getItem("developerPhone"),
                        developerToken: localStorage.getItem("developerToken"),
                        lastModifyTime: localStorage.getItem("lastModifyTime"),
                        createTime: localStorage.getItem("createTime")
                    };
                    var method = "api.git.projectDirs";
                    var params = {
                        developer: this.developer,
                        buildCode: this.buildCode
                    };
                    this.devopsService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            for (var _i = 0, _a = res.data.data; _i < _a.length; _i++) {
                                var msg = _a[_i];
                                _this.gitProjectDir.push(msg);
                                _this.logs.push({ id: 0, log: msg, class: "green" });
                            }
                        } else {
                            for (var _b = 0, _c = res.data.data; _b < _c.length; _b++) {
                                var msg = _c[_b];
                                _this.gitProjectDir.push(msg);
                                _this.logs.push({ id: 0, log: msg, class: "red" });
                            }
                        }
                    });
                };
                DeployComponent.prototype.getGitProgectBranchs = function() {
                    var _this = this;
                    this.logs = [];
                    this.gitProjectBranchs = [];
                    this.developer = {
                        id: localStorage.getItem('id'),
                        developerUsername: localStorage.getItem("developerUsername"),
                        developerEmail: localStorage.getItem("developerEmail"),
                        developerPhone: localStorage.getItem("developerPhone"),
                        developerToken: localStorage.getItem("developerToken"),
                        lastModifyTime: localStorage.getItem("lastModifyTime"),
                        createTime: localStorage.getItem("createTime")
                    };
                    var method = "api.git.projectBranchs";
                    var params = {
                        developer: this.developer,
                        buildCode: this.buildCode
                    };
                    this.devopsService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            for (var _i = 0, _a = res.data.data; _i < _a.length; _i++) {
                                var msg = _a[_i];
                                _this.gitProjectBranchs.push(msg);
                                _this.logs.push({ id: 0, log: msg, class: "green" });
                            }
                        } else {
                            for (var _b = 0, _c = res.data.data; _b < _c.length; _b++) {
                                var msg = _c[_b];
                                _this.gitProjectBranchs.push(msg);
                                _this.logs.push({ id: 0, log: msg, class: "red" });
                            }
                        }
                    });
                };
                DeployComponent.prototype.getContainers = function() {
                    var _this = this;
                    this.logs = [];
                    this.containers = [];
                    this.developer = {
                        id: localStorage.getItem('id'),
                        developerUsername: localStorage.getItem("developerUsername"),
                        developerEmail: localStorage.getItem("developerEmail"),
                        developerPhone: localStorage.getItem("developerPhone"),
                        developerToken: localStorage.getItem("developerToken"),
                        lastModifyTime: localStorage.getItem("lastModifyTime"),
                        createTime: localStorage.getItem("createTime")
                    };
                    var method = "api.container.listContainer";
                    var params = {
                        developer: this.developer,
                        page: { page: 0, num: 100 }
                    };
                    this.devopsService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            for (var _i = 0, _a = res.data.data; _i < _a.length; _i++) {
                                var msg = _a[_i];
                                _this.containers.push({
                                    container: msg.container,
                                    containerOther: msg.containerOther,
                                });
                                _this.logs.push({ id: 0, log: msg, class: "green" });
                            }
                        } else {
                            for (var _b = 0, _c = res.data.data; _b < _c.length; _b++) {
                                var msg = _c[_b];
                                _this.containers.push({
                                    container: msg.container,
                                    containerOther: msg.containerOther,
                                });
                                _this.logs.push({ id: 0, log: msg, class: "red" });
                            }
                        }
                    });
                };
                DeployComponent.prototype.getBuildProjects = function() {
                    var _this = this;
                    this.logs = [];
                    this.buildProjectDir = [];
                    this.developer = {
                        id: localStorage.getItem('id'),
                        developerUsername: localStorage.getItem("developerUsername"),
                        developerEmail: localStorage.getItem("developerEmail"),
                        developerPhone: localStorage.getItem("developerPhone"),
                        developerToken: localStorage.getItem("developerToken"),
                        lastModifyTime: localStorage.getItem("lastModifyTime"),
                        createTime: localStorage.getItem("createTime")
                    };
                    var method = "api.deploy.projects";
                    var params = {
                        developer: this.developer,
                        deployPackage: this.deployPackage
                    };
                    this.devopsService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            for (var _i = 0, _a = res.data.data; _i < _a.length; _i++) {
                                var msg = _a[_i];
                                _this.buildProjectDir.push(msg);
                                _this.logs.push({ id: 0, log: msg, class: "green" });
                            }
                        } else {
                            for (var _b = 0, _c = res.data.data; _b < _c.length; _b++) {
                                var msg = _c[_b];
                                _this.buildProjectDir.push(msg);
                                _this.logs.push({ id: 0, log: msg, class: "red" });
                            }
                        }
                    });
                };
                DeployComponent.prototype.getBuildProjectBranchs = function() {
                    var _this = this;
                    this.logs = [];
                    this.buildProjectBranchs = [];
                    this.developer = {
                        id: localStorage.getItem('id'),
                        developerUsername: localStorage.getItem("developerUsername"),
                        developerEmail: localStorage.getItem("developerEmail"),
                        developerPhone: localStorage.getItem("developerPhone"),
                        developerToken: localStorage.getItem("developerToken"),
                        lastModifyTime: localStorage.getItem("lastModifyTime"),
                        createTime: localStorage.getItem("createTime")
                    };
                    var method = "api.deploy.project.branchs";
                    var params = {
                        developer: this.developer,
                        deployPackage: this.deployPackage
                    };
                    this.devopsService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            for (var _i = 0, _a = res.data.data; _i < _a.length; _i++) {
                                var msg = _a[_i];
                                _this.buildProjectBranchs.push(msg);
                                _this.logs.push({ id: 0, log: msg, class: "green" });
                            }
                        } else {
                            for (var _b = 0, _c = res.data.data; _b < _c.length; _b++) {
                                var msg = _c[_b];
                                _this.buildProjectBranchs.push(msg);
                                _this.logs.push({ id: 0, log: msg, class: "red" });
                            }
                        }
                    });
                };
                DeployComponent.prototype.getBuildProjectVersion = function() {
                    var _this = this;
                    this.logs = [];
                    this.buildProjectVersion = [];
                    this.developer = {
                        id: localStorage.getItem('id'),
                        developerUsername: localStorage.getItem("developerUsername"),
                        developerEmail: localStorage.getItem("developerEmail"),
                        developerPhone: localStorage.getItem("developerPhone"),
                        developerToken: localStorage.getItem("developerToken"),
                        lastModifyTime: localStorage.getItem("lastModifyTime"),
                        createTime: localStorage.getItem("createTime")
                    };
                    var method = "api.deploy.project.version";
                    var params = {
                        developer: this.developer,
                        deployPackage: this.deployPackage
                    };
                    this.devopsService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            for (var _i = 0, _a = res.data.data; _i < _a.length; _i++) {
                                var msg = _a[_i];
                                _this.buildProjectVersion.push(msg);
                                _this.logs.push({ id: 0, log: msg, class: "green" });
                            }
                        } else {
                            for (var _b = 0, _c = res.data.data; _b < _c.length; _b++) {
                                var msg = _c[_b];
                                _this.buildProjectVersion.push(msg);
                                _this.logs.push({ id: 0, log: msg, class: "red" });
                            }
                        }
                    });
                };
                DeployComponent.prototype.gitPathChange = function(event) {
                    this.gitProject.gitPath = event.target.value;
                };;
                DeployComponent.prototype.gitUserChange = function(event) {
                    this.gitProject.gitUser = event.target.value;
                };;
                DeployComponent.prototype.gitPasswordChange = function(event) {
                    this.gitProject.gitPassword = event.target.value;
                };;
                DeployComponent.prototype.gitCodePathChange = function(event) {
                    this.gitProject.gitCodePath = event.target.value;
                };;
                DeployComponent.prototype.buildGitProjectChange = function(event) {
                    this.buildCode.gitPath = event.target.value;
                    this.buildCode.projectName = event.target.value;
                    this.getGitProgectBranchs();
                };;
                DeployComponent.prototype.buildGitBranchChange = function(event) {
                    this.buildCode.gitBranch = event.target.value;
                };;
                DeployComponent.prototype.buildProjectChange = function(event) {
                    this.deployPackage.projectName = event.target.value;
                    this.getBuildProjectBranchs();
                };;
                DeployComponent.prototype.buildProjectBranchChange = function(event) {
                    this.deployPackage.gitBranch = event.target.value;
                    this.getBuildProjectVersion();
                };
                DeployComponent.prototype.buildProjectVersionChange = function(event) {
                    this.deployPackage.buildVersion = event.target.value;
                };
                DeployComponent.prototype.buildContainerChange = function(event) {
                    this.deployPackage.containerName = event.target.value;
                };
                DeployComponent.prototype.progressInit = function(msg) {
                    clearInterval(this.timer);
                    this.progress = "0";
                    document.getElementById("progress").style.display = "none";
                    document.getElementById("progress_p").innerHTML = msg;
                };
                DeployComponent.prototype.progressStart = function(msg) {
                    var _this = this;
                    document.getElementById("progress").style.display = "block";
                    document.getElementById("progress_p").innerHTML = msg;
                    var n = 0;
                    this.timer = setInterval(function() {
                        if (n < 97) {
                            _this.progress = n.toString();
                            document.getElementById("progress_p").innerHTML = msg + "(" + _this.progress + ")...";
                            n += Math.floor(Math.random() * 3 + 0);
                        }
                    }, 100);
                };
                DeployComponent.prototype.progressOver = function(msg) {
                    clearInterval(this.timer);
                    this.progress = "100";
                    document.getElementById("progress_p").innerHTML = msg;
                };
                DeployComponent.prototype.ngOnDestroy = function() {
                    if (this.timer) {
                        clearInterval(this.timer);
                    }
                };
                DeployComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-deploy',
                        template: __webpack_require__( /*! ./deploy.component.html */ "./src/app/devops/deploy/deploy.component.html"),
                        styles: [__webpack_require__( /*! ./deploy.component.css */ "./src/app/devops/deploy/deploy.component.css")]
                    }),
                    __metadata("design:paramtypes", [_service_devops_service__WEBPACK_IMPORTED_MODULE_1__["DevopsService"]])
                ], DeployComponent);
                return DeployComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/devops/eurake/eurake.component.css":
        /*!****************************************************!*\
          !*** ./src/app/devops/eurake/eurake.component.css ***!
          \****************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = ""

            /***/
        }),

        /***/
        "./src/app/devops/eurake/eurake.component.html":
        /*!*****************************************************!*\
          !*** ./src/app/devops/eurake/eurake.component.html ***!
          \*****************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<app-left></app-left>\n<div class=\"col-md-11\" style=\"padding: 1em;height:5%;display:table-cell;vertical-align:middle;font-weight:bolder;background: transparent;color: #fff;z-index:9999;\">\n    <ul class=\"uk-breadcrumb\">\n        <li><a href=\"#\">DevOps</a></li>\n        <li><a href=\"#\">工具</a></li>\n        <li><span>Eurake</span></li>\n    </ul>\n  </div>\n  <div class=\"col-md-11\" style=\"padding: 1em;background: transparent;height: 90%;\">\n  \n    <div class=\"col-md-12\" style=\"padding: 1em;background: #fff;height: 100%;border-radius: 6px;\">\n        <div class=\"col-md-12\" style=\"margin-top:1em;margin-bottom: 2em;height: 100%;\">\n            <ul class=\"uk-tab\" uk-tab>\n              <li class=\"uk-active\">\n                <a href=\"#container\"> Eurake </a>\n              </li>\n            </ul>\n            <div class=\"col-md-12\" style=\"padding: 1em;height: 90%;padding: 0;margin:0;\">\n              <div class=\"col-md-12\" style=\"padding:0em;background: #fff;width: 100%;height: 100%;margin: 0;\">\n                <iframe class=\"col-md-12\" style=\"border:none;height:auto;height: 100%;width: 100%;padding: 0;margin: 0;\" src=\"http://116.196.82.213:82/\"></iframe>\n              </div>\n            </div>\n          </div>\n    </div>\n  \n  </div>\n  \n  <div class=\"col-md-11\" style=\"padding: 1em;background: transparent;height:5%;text-align: center;\">\n    <span style=\"color:#aaa;\">CENOSTACK.COM 构建敏捷团队</span>&nbsp;&nbsp;\n    <a href=\"Mailto:ecrd-kapioneer@jd.com\" style=\"color:#eee;\">@ecrd-kapioneer</a>&nbsp;&nbsp;\n    <span style=\"color:#aaa;\">V1.7.11 Alpha</span>\n    <span>\n      <span class=\"fa fa-github fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n      <span class=\"fa fa-qq fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n      <span class=\"fa fa-weixin fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n      <span class=\"fa fa-weibo fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n    </span>\n  </div>\n  "

            /***/
        }),

        /***/
        "./src/app/devops/eurake/eurake.component.ts":
        /*!***************************************************!*\
          !*** ./src/app/devops/eurake/eurake.component.ts ***!
          \***************************************************/
        /*! exports provided: EurakeComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "EurakeComponent", function() { return EurakeComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            var EurakeComponent = /** @class */ (function() {
                function EurakeComponent() {}
                EurakeComponent.prototype.ngOnInit = function() {};
                EurakeComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-eurake',
                        template: __webpack_require__( /*! ./eurake.component.html */ "./src/app/devops/eurake/eurake.component.html"),
                        styles: [__webpack_require__( /*! ./eurake.component.css */ "./src/app/devops/eurake/eurake.component.css")]
                    }),
                    __metadata("design:paramtypes", [])
                ], EurakeComponent);
                return EurakeComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/devops/header/header.component.css":
        /*!****************************************************!*\
          !*** ./src/app/devops/header/header.component.css ***!
          \****************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "#header-div{\n    background: transparent;\n    color: #000;margin:0;\n    padding: 0;\n    height: 5%;\n    line-height: 5%;\n}\n\n@-webkit-keyframes logo {\n    from {\n        -webkit-transform: rotate(0deg);\n    }\n    to {\n        -webkit-transform: rotate(360deg);\n    }\n}\n\n@keyframes logo {\n    from {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n    }\n    to {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}\n\n#logo{\n    color:#ce592b;\n    font-size: 2em;\n    height: 100%;\n    display:table-cell;\n    vertical-align:middle;\n    /* -webkit-animation: logo 2s linear 2s 5 alternate; */\n    /* animation: logo 2s linear infinite; */\n}"

            /***/
        }),

        /***/
        "./src/app/devops/header/header.component.html":
        /*!*****************************************************!*\
          !*** ./src/app/devops/header/header.component.html ***!
          \*****************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<div class=\"col-md-12\" id=\"header-div\" style=\"height:5%;background:transparent;font-size: 1em;\">\n\n        <a href=\"dashboard\"><div class=\"col-md-1\" style=\"height:100%;text-align: center;font-weight: bolder;display:table;\">\n                <span id=\"logo\" class=\"glyphicon glyphicon-cog\"></span>\n                <span style=\"height: 100%;display:table-cell;vertical-align:middle;\">\n                        <span style=\"color:#aaa;font-size: 1.5em;\">Dev</span>\n                        <span style=\"color:#ce592b;font-size: 1.5em;\">Ops</span>\n                </span>\n        </div>\n        </a>\n        <div class=\"col-md-9\">\n               \n        </div>\n        <div class=\"col-md-1\" style=\"height:100%;display:table;\">\n                \n                <span class=\"fa fa-user-circle\" style=\"display:table-cell;vertical-align:middle;color:#888;\"></span>&nbsp;\n                <a id=\"profile_name\" href=\"/profile\" style=\"display:table-cell;vertical-align:middle;color:#888;font-weight: bolder;\">devops</a>&nbsp;\n                \n        </div>\n        <div class=\"col-md-1\" style=\"height:100%;display:table;\">\n                <span class=\"fa fa-sign-out\" style=\"display:table-cell;vertical-align:middle;color:#888;\"></span>&nbsp;\n                <a id=\"profile_logout_bt\" (click)=\"logout()\" style=\"display:table-cell;vertical-align:middle;color:#888;font-weight: bolder;\">退出登录</a>\n        </div>\n        <div id=\"header_modal\" id=\"modal-close-outside\" uk-modal class=\"uk-modal uk-open\" style=\"z-index:999;display:none;border-radius: 6px;\">\n                <div class=\"uk-modal-dialog uk-modal-body\" style=\"border-radius: 6px;\">\n                        <button class=\"uk-modal-close-outside\" type=\"button\" uk-close></button>\n                        <h2 id=\"header_tip_top\" class=\"uk-modal-title\">错误:</h2>\n                        <h3 id=\"header_tip\">Outside</h3>\n                </div>\n        </div>\n</div>"

            /***/
        }),

        /***/
        "./src/app/devops/header/header.component.ts":
        /*!***************************************************!*\
          !*** ./src/app/devops/header/header.component.ts ***!
          \***************************************************/
        /*! exports provided: HeaderComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _service_devops_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../service/devops.service */ "./src/app/service/devops.service.ts");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };



            var HeaderComponent = /** @class */ (function() {
                function HeaderComponent(router, devopsService) {
                    this.router = router;
                    this.devopsService = devopsService;
                }
                HeaderComponent.prototype.ngOnInit = function() {
                    if (localStorage.getItem("developerUsername") !== null) {
                        document.getElementById("profile_name").innerHTML = localStorage.getItem("developerUsername");
                        document.getElementById("profile_logout_bt").innerHTML = "退出登录";
                    } else {
                        document.getElementById("profile_name").style.display = "none";
                        document.getElementById("profile_logout_bt").style.display = "none";
                    }
                };
                HeaderComponent.prototype.logout = function() {
                    if (localStorage.getItem('id') !== null &&
                        localStorage.getItem("developerUsername") !== null &&
                        localStorage.getItem("developerEmail") !== null &&
                        localStorage.getItem("developerPhone") !== null &&
                        localStorage.getItem("developerToken") !== null &&
                        localStorage.getItem("lastModifyTime") !== null &&
                        localStorage.getItem("createTime")) {
                        localStorage.clear();
                        this.router.navigate(['/login']);
                    }
                };
                HeaderComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-header',
                        template: __webpack_require__( /*! ./header.component.html */ "./src/app/devops/header/header.component.html"),
                        styles: [__webpack_require__( /*! ./header.component.css */ "./src/app/devops/header/header.component.css")]
                    }),
                    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_devops_service__WEBPACK_IMPORTED_MODULE_1__["DevopsService"]])
                ], HeaderComponent);
                return HeaderComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/devops/left/left.component.css":
        /*!************************************************!*\
          !*** ./src/app/devops/left/left.component.css ***!
          \************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "\n#left-l-nav{\n    display: block;color: #aaa;height: 3em;line-height: 3em;\n    padding: 0;\n    padding-left: 1em;\n    margin:0; \n    font-weight: bolder;\n}\n\n#left-nav{\n    display: block;color: #888;height: 3em;line-height: 3em;\n    padding: 0;\n    padding-left: 2em;\n    margin:0; \n}\n\n#left-nav:hover{\n    background-image: linear-gradient(90deg,#1861D5 0,#3080FE 100%);\n    border-radius: 6px;\n    box-shadow: 0 0 0 rgba(0,0,0,.1);\n    color: #fff;\n    display: block;\n    height: 3em;line-height: 3em;\n}\n\n#left-nav-active{\n    background: gray;\n    padding-left: 1em;\n    display: block;color: #fff;font-size:1.2em;height: 3em;line-height: 3em;\n}\n"

            /***/
        }),

        /***/
        "./src/app/devops/left/left.component.html":
        /*!*************************************************!*\
          !*** ./src/app/devops/left/left.component.html ***!
          \*************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<div class=\"col-md-1\" style=\"background: transparent;height: 100%;padding: 0;\">\n   \n  <ul class=\"col-md-12\" style=\"display: inline-block;margin:0;padding:0;padding-left:1em;\">\n      <a href=\"/dashboard\"><li id=\"left-l-nav\" style=\"color:#888;\"></li></a>\n      <li id=\"left-l-nav\" uk-toggle=\"target: #toggle-java\"><span class=\"glyphicon glyphicon-random\"></span>&nbsp;后端服务 <span style=\"float:right;font-size:0.5em;margin-top:1em;padding-right:1em;\" class=\"glyphicon glyphicon-menu-down\"></span></li>\n      <ul id=\"toggle-java\" style=\"padding:0;margin:0;\">\n          <a href=\"/deploy\"><li id=\"left-nav\">部署服务</li></a>\n          <a href=\"/services\"><li id=\"left-nav\">服务列表</li></a>\n      </ul>\n\n      <li id=\"left-l-nav\" uk-toggle=\"target: #toggle-node\"><span class=\"glyphicon glyphicon-random\"></span>&nbsp;前端服务 <span style=\"float:right;font-size:0.5em;margin-top:1em;padding-right:1em;\" class=\"glyphicon glyphicon-menu-down\"></span></li>\n      <ul id=\"toggle-node\" style=\"padding:0;margin:0;\">\n          <a href=\"/nodejs\"><li id=\"left-nav\">部署服务</li></a>\n          <a href=\"/services\"><li id=\"left-nav\">服务列表</li></a>\n      </ul>\n\n      <li id=\"left-l-nav\" uk-toggle=\"target: #toggle-container\"><span class=\"fa fa-cubes\"></span>&nbsp;容器 <span style=\"float:right;font-size:0.5em;margin-top:1em;padding-right:1em;\" class=\"glyphicon glyphicon-menu-down\"></span></li>\n      <ul id=\"toggle-container\" style=\"padding:0;margin:0;\">\n          <a href=\"/add-container\"><li id=\"left-nav\">添加容器</li></a>\n          <a href=\"/containers\"><li id=\"left-nav\">容器列表</li></a>\n      </ul>\n      <li id=\"left-l-nav\" uk-toggle=\"target: #toggle-tools\"><span class=\"glyphicon glyphicon-briefcase\"></span>&nbsp;工具 <span style=\"float:right;font-size:0.5em;margin-top:1em;padding-right:1em;\" class=\"glyphicon glyphicon-menu-down\"></span></li>\n      <ul id=\"toggle-tools\" style=\"padding:0;margin:0;\">\n          <a href=\"/wessh\"><li id=\"left-nav\">跳板机</li></a>\n          <a href=\"/eurake\"><li id=\"left-nav\">Eurake</li></a>\n      </ul>\n  </ul>\n</div>\n"

            /***/
        }),

        /***/
        "./src/app/devops/left/left.component.ts":
        /*!***********************************************!*\
          !*** ./src/app/devops/left/left.component.ts ***!
          \***********************************************/
        /*! exports provided: LeftComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "LeftComponent", function() { return LeftComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            var LeftComponent = /** @class */ (function() {
                function LeftComponent() {}
                LeftComponent.prototype.ngOnInit = function() {};
                LeftComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-left',
                        template: __webpack_require__( /*! ./left.component.html */ "./src/app/devops/left/left.component.html"),
                        styles: [__webpack_require__( /*! ./left.component.css */ "./src/app/devops/left/left.component.css")]
                    }),
                    __metadata("design:paramtypes", [])
                ], LeftComponent);
                return LeftComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/devops/new-container/new-container.component.css":
        /*!******************************************************************!*\
          !*** ./src/app/devops/new-container/new-container.component.css ***!
          \******************************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = ""

            /***/
        }),

        /***/
        "./src/app/devops/new-container/new-container.component.html":
        /*!*******************************************************************!*\
          !*** ./src/app/devops/new-container/new-container.component.html ***!
          \*******************************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<app-left></app-left>\n<div class=\"col-md-11\" style=\"padding: 1em;height:5%;display:table-cell;vertical-align:middle;font-weight:bolder;background: transparent;color: #fff;z-index:99;\">\n    <ul class=\"uk-breadcrumb\">\n        <li><a href=\"#\">DevOps</a></li>\n        <li><a href=\"#\">容器</a></li>\n        <li><span>新增</span></li>\n    </ul>\n</div>\n<div class=\"col-md-11\" style=\"padding: 1em;background: transparent;height: 90%;\">\n  <div class=\"col-md-12\" style=\"background: #fff;height: 100%;border-radius: 6px;\">\n    <div class=\"col-md-12\" style=\"margin-top:2em;margin-bottom: 2em;\">\n      <ul class=\"uk-tab\" uk-tab>\n        <li class=\"uk-active\">\n          <a href=\"#container\"> 添加容器 </a>\n        </li>\n        <li>\n          <a href=\"#container\"> 创建容器 </a>\n        </li>\n      </ul>\n      <div class=\"col-md-12\" style=\"padding: 1em;\">\n        <div class=\"uk-margin\">\n          <input (keyup)=\"nameChange($event)\" class=\"uk-input\" type=\"text\" placeholder=\"容器名称\">\n        </div>\n        <div class=\"uk-margin\">\n          <input (keyup)=\"addressChange($event)\" class=\"uk-input\" type=\"text\" placeholder=\"地址\">\n        </div>\n        <div class=\"uk-margin\">\n          <input (keyup)=\"portChange($event)\" class=\"uk-input\" type=\"text\" placeholder=\"端口\">\n        </div>\n        <div class=\"uk-margin\">\n          <input (keyup)=\"userChange($event)\" class=\"uk-input\" type=\"text\" placeholder=\"用户名\">\n        </div>\n        <div class=\"uk-margin\">\n          <input (keyup)=\"pwdChange($event)\" class=\"uk-input\" type=\"text\" placeholder=\"密码\">\n        </div>\n        <div class=\"uk-margin\">\n          <textarea (keyup)=\"descChange($event)\" class=\"uk-textarea\" rows=\"5\" placeholder=\"备注\"></textarea>\n        </div>\n\n        <button (click)=\"addContainer()\" class=\"cc-button cc-button-ring-blue\">添加</button>&nbsp;\n        <a class=\"cc-button cc-button-ring-blue\" href=\"#modal-overflow\" uk-toggle>使用必读</a>\n\n        <div id=\"modal-overflow\" uk-modal>\n          <div class=\"uk-modal-dialog\">\n\n            <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n\n            <div class=\"uk-modal-header\">\n              <h2 class=\"uk-modal-title\">使用必读</h2>\n            </div>\n\n            <div class=\"uk-modal-body\" uk-overflow-auto>\n              <p>如果您点开了这个就说明您需要添加容器。那么，请遵守以下几点：</p>\n              <p>1. 容器名称请不要用中文与特殊字符(-_)除外。</p>\n              <p>2. 该地址，端口，用户名，密码，请确认能ssh成功。</p>\n              <p>3. 若地址为局域网地址，请确认该地址可以从devops平台部署地址访问。</p>\n            </div>\n\n            <div class=\"uk-modal-footer uk-text-right\">\n              <button class=\"uk-button uk-button-primary uk-modal-close\" type=\"button\">我知道了</button>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"col-md-11\" style=\"padding: 1em;background: transparent;height:5%;text-align: center;\">\n  <span style=\"color:#aaa;\">CENOSTACK.COM 构建敏捷团队</span>&nbsp;&nbsp;\n  <a href=\"Mailto:ecrd-kapioneer@jd.com\" style=\"color:#eee;\">@ecrd-kapioneer</a>&nbsp;&nbsp;\n  <span style=\"color:#aaa;\">V1.7.11 Alpha</span>\n  <span>\n    <span class=\"fa fa-github fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n    <span class=\"fa fa-qq fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n    <span class=\"fa fa-weixin fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n    <span class=\"fa fa-weibo fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n  </span>\n</div>\n"

            /***/
        }),

        /***/
        "./src/app/devops/new-container/new-container.component.ts":
        /*!*****************************************************************!*\
          !*** ./src/app/devops/new-container/new-container.component.ts ***!
          \*****************************************************************/
        /*! exports provided: NewContainerComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "NewContainerComponent", function() { return NewContainerComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _service_devops_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../service/devops.service */ "./src/app/service/devops.service.ts");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };


            var NewContainerComponent = /** @class */ (function() {
                function NewContainerComponent(containerService) {
                    this.containerService = containerService;
                }
                NewContainerComponent.prototype.ngOnInit = function() {
                    this.container = {
                        name: "",
                        address: "",
                        port: "",
                        user: "",
                        pwd: "",
                        desc: "",
                        serviceCnt: 0,
                    };
                };
                NewContainerComponent.prototype.addContainer = function() {
                    var _this = this;
                    var method = "api.container.addContainer";
                    this.developer = {
                        id: localStorage.getItem('id'),
                        developerUsername: localStorage.getItem("developerUsername"),
                        developerEmail: localStorage.getItem("developerEmail"),
                        developerPhone: localStorage.getItem("developerPhone"),
                        developerToken: localStorage.getItem("developerToken"),
                        lastModifyTime: localStorage.getItem("lastModifyTime"),
                        createTime: localStorage.getItem("createTime")
                    };
                    var params = {
                        developer: this.developer,
                        container: this.container
                    };
                    this.containerService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            _this.containerService.showModal("添加成功:", res.data.data.name);
                        } else {
                            _this.containerService.showModal("添加成功:", res.data.data.name);
                        }
                    });
                };
                NewContainerComponent.prototype.pwdChange = function(event) {
                    this.container.pwd = event.target.value;
                };;
                NewContainerComponent.prototype.nameChange = function(event) {
                    this.container.name = event.target.value;
                };;
                NewContainerComponent.prototype.addressChange = function(event) {
                    this.container.address = event.target.value;
                };;
                NewContainerComponent.prototype.portChange = function(event) {
                    this.container.port = event.target.value;
                };;
                NewContainerComponent.prototype.userChange = function(event) {
                    this.container.user = event.target.value;
                };;
                NewContainerComponent.prototype.descChange = function(event) {
                    this.container.desc = event.target.value;
                };;
                NewContainerComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-new-container',
                        template: __webpack_require__( /*! ./new-container.component.html */ "./src/app/devops/new-container/new-container.component.html"),
                        styles: [__webpack_require__( /*! ./new-container.component.css */ "./src/app/devops/new-container/new-container.component.css")]
                    }),
                    __metadata("design:paramtypes", [_service_devops_service__WEBPACK_IMPORTED_MODULE_1__["DevopsService"]])
                ], NewContainerComponent);
                return NewContainerComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/devops/nodejs/nodejs.component.css":
        /*!****************************************************!*\
          !*** ./src/app/devops/nodejs/nodejs.component.css ***!
          \****************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = ""

            /***/
        }),

        /***/
        "./src/app/devops/nodejs/nodejs.component.html":
        /*!*****************************************************!*\
          !*** ./src/app/devops/nodejs/nodejs.component.html ***!
          \*****************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<app-left></app-left>\n<div class=\"col-md-11\" style=\"padding: 1em;height:5%;display:table-cell;vertical-align:middle;font-weight:bolder;background: transparent;color: #fff;z-index:99;\">\n    <ul class=\"uk-breadcrumb\">\n        <li><a href=\"#\">DevOps</a></li>\n        <li><a href=\"#\">服务</a></li>\n        <li><a href=\"#\">NodeJS</a></li>\n        <li><span>部署</span></li>\n    </ul>\n</div>\n<div class=\"col-md-11\" style=\"padding: 1em;background: transparent;height:90%;\">\n\n  <div class=\"col-md-12\" style=\"padding: 0;background: #fff;padding-bottom: 2em;height:100%;overflow: auto;border-radius: 6px;\">\n    <div class=\"col-md-12\">\n      <div class=\"col-md-12\" style=\"margin-top:1em;margin-bottom: 2em;\">\n\n        <div id=\"progress\" class=\"uk-margin\">\n          <div class=\"uk-form-controls\">\n            <progress id=\"js-progressbar\" class=\"uk-progress\" [value]=\"progress\" max=\"100\"></progress>\n            <p id=\"progress_p\">部署中... 请稍候...</p>\n          </div>\n        </div>\n\n\n        <ul class=\"uk-tab\" uk-tab>\n          <li (click)=\"changeTab('git')\" class=\"uk-active\">\n            <a href=\"#git\"> 代码 </a>\n          </li>\n          <li (click)=\"changeTab('build')\">\n            <a href=\"#build\"> 构建 </a>\n          </li>\n          <li (click)=\"changeTab('deploy')\">\n            <a href=\"#deploy\"> 部署 </a>\n          </li>\n        </ul>\n        <div id=\"git\" class=\"uk-form-horizontal uk-margin-large\">\n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">git地址</label>\n            <div class=\"uk-form-controls\">\n              <input (keyup)=\"gitPathChange($event)\" class=\"uk-input\" type=\"text\" placeholder=\"请输入git地址\">\n            </div>\n          </div>\n\n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">git用户名</label>\n            <div class=\"uk-form-controls\">\n              <input (keyup)=\"gitUserChange($event)\" class=\"uk-input\" type=\"text\" placeholder=\"请输入git用户名\">\n            </div>\n          </div>\n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">git密码</label>\n            <div class=\"uk-form-controls\">\n              <input (keyup)=\"gitPasswordChange($event)\" class=\"uk-input\" type=\"password\" placeholder=\"请输入git密码\">\n            </div>\n          </div>\n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">本地代码地址</label>\n            <div class=\"uk-form-controls\">\n              <input (keyup)=\"gitCodePathChange($event)\" class=\"uk-input\" type=\"text\" readonly=\"readonly\" value=\"/export/devops/code/\"\n                placeholder=\"本地代码地址\">\n            </div>\n          </div>\n          <button (click)=\"updateCode()\" class=\"uk-button uk-button-primary\">\n            拉取\n          </button>\n\n          <div id=\"modal-overflow\" uk-modal style=\"z-index:999;\">\n            <div class=\"uk-modal-dialog\">\n\n              <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n\n              <div class=\"uk-modal-header\">\n                <h2 class=\"uk-modal-title\">日志</h2>\n              </div>\n\n              <div class=\"uk-modal-body\" uk-overflow-auto>\n                <li *ngFor=\"let log of logs\" style=\"margin-top:0.5em;\">\n                  <p class={{log.class}}>{{log.log}}</p>\n                </li>\n              </div>\n\n              <div class=\"uk-modal-footer uk-text-right\">\n                <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Cancel</button>\n                <button class=\"uk-button uk-button-primary\" type=\"button\">Save</button>\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n\n\n        <div id=\"build\" class=\"uk-form-horizontal uk-margin-large\" style=\"margin-top:2em;\">\n\n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">本地代码地址</label>\n            <div class=\"uk-form-controls\">\n              <input class=\"uk-input\" type=\"text\" readonly=\"readonly\" value=\"/export/devops/code/\" placeholder=\"本地代码地址\">\n            </div>\n          </div>\n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">build 地址</label>\n            <div class=\"uk-form-controls\">\n              <input class=\"uk-input\" type=\"text\" readonly=\"readonly\" value=\"/export/devops/build/\" placeholder=\"build 地址:\">\n            </div>\n          </div>\n\n          <div class=\"uk-margin\">\n\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">git目录</label>\n            <div class=\"uk-form-controls\">\n              <select (mouseup)=\"buildGitProjectChange($event)\" class=\"uk-select\">\n                <option *ngFor=\"let dir of gitProjectDir\" value=\"{{dir}}\">\n                  {{dir}}\n                </option>\n              </select>\n            </div>\n          </div>\n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">分支</label>\n            <div class=\"uk-form-controls\">\n              <select (mouseup)=\"buildGitBranchChange($event)\" class=\"uk-select\">\n                <option *ngFor=\"let branch of gitProjectBranchs\" value=\"{{branch}}\">\n                  {{branch}}\n                </option>\n              </select>\n            </div>\n          </div>\n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">项目名</label>\n            <div class=\"uk-form-controls\">\n              <input class=\"uk-input\" [value]=\"\" type=\"text\" placeholder=\"项目名\">\n            </div>\n          </div>\n\n\n          <button (click)=\"codeBuild()\" class=\"uk-button uk-button-primary\">\n            构建\n          </button>\n\n          <div id=\"modal-overflow\" uk-modal style=\"z-index:999;\">\n            <div class=\"uk-modal-dialog\">\n\n              <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n\n              <div class=\"uk-modal-header\">\n                <h2 class=\"uk-modal-title\">日志</h2>\n              </div>\n\n              <div class=\"uk-modal-body\" uk-overflow-auto>\n                <li *ngFor=\"let log of logs\" style=\"margin-top:0.5em;\">\n                  <p class={{log.class}}>{{log.log}}</p>\n                </li>\n              </div>\n\n              <div class=\"uk-modal-footer uk-text-right\">\n                <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Cancel</button>\n                <button class=\"uk-button uk-button-primary\" type=\"button\">Save</button>\n              </div>\n\n            </div>\n          </div>\n\n\n        </div>\n\n\n        <div id=\"deploy\" class=\"uk-form-horizontal uk-margin-large\" style=\"margin-top:2em;\">\n\n\n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">build 地址</label>\n            <div class=\"uk-form-controls\">\n              <input class=\"uk-input\" type=\"text\" readonly=\"readonly\" [value]=\"\" placeholder=\"build 地址:\">\n            </div>\n          </div>\n\n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">容器</label>\n            <div class=\"uk-form-controls\">\n              <select (mouseup)=\"buildContainerChange($event)\" class=\"uk-select\">\n                <option *ngFor=\"let container of containers\" value=\"{{container.container.name}}\">\n                  {{container.container.name}}\n                </option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">项目</label>\n            <div class=\"uk-form-controls\">\n              <select (mouseup)=\"buildProjectChange($event)\" class=\"uk-select\">\n                <option *ngFor=\"let project of buildProjectDir\" value=\"{{project}}\">\n                  {{project}}\n                </option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">构建分支</label>\n            <div class=\"uk-form-controls\">\n\n              <select (mouseup)=\"buildProjectBranchChange($event)\" class=\"uk-select\">\n                <option *ngFor=\"let branch of buildProjectBranchs\" value=\"{{branch}}\">\n                  {{branch}}\n                </option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">构建版本</label>\n            <div class=\"uk-form-controls\">\n\n              <select (mouseup)=\"buildProjectVersionChange($event)\" class=\"uk-select\">\n                <option *ngFor=\"let version of buildProjectVersion\" value=\"{{version}}\">\n                  {{version}}\n                </option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">容器部署目录</label>\n            <div class=\"uk-form-controls\">\n              <input [value]=\"\" class=\"uk-input\" type=\"text\" value=\"\" placeholder=\"容器部署目录\">\n            </div>\n          </div>\n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">运行日志目录</label>\n            <div class=\"uk-form-controls\">\n              <input [value]=\"\" class=\"uk-input\" type=\"text\" placeholder=\"运行日志目录\">\n            </div>\n          </div>\n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">环境变量</label>\n            <div class=\"uk-form-controls\">\n\n              <p uk-margin>\n                <a class=\"uk-button uk-button-default\" href=\"#modal-group-env\" uk-toggle>环境变量</a>\n              </p>\n\n              <div id=\"modal-group-env\" uk-modal style=\"border-radius: 6px;\">\n                <div class=\"uk-modal-dialog\" style=\"border-radius: 6px;\">\n\n                  <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n\n                  <div class=\"uk-modal-header\" style=\"border-top-left-radius: 6px;border-top-right-radius: 6px;\">\n                    <h2 class=\"uk-modal-title\">环境变量</h2>\n                  </div>\n\n                  <div class=\"uk-modal-body\" uk-overflow-auto style=\"border-radius: 6px;\">\n\n                    <table class=\"uk-table uk-table-justify uk-table-divider\">\n                      <thead>\n                        <tr>\n                          <th></th>\n                          <th style=\"font-weight:bolder;\">变量名称</th>\n                          <th></th>\n                          <th style=\"font-weight:bolder;\">变量值</th>\n                          <th></th>\n                        </tr>\n                      </thead>\n                      <tfoot>\n                        <tr>\n                            <td>新增</td>\n                          <td>\n                            <div class=\"uk-margin\">\n                              <input (keyup)=\"envKeyChange($event)\" class=\"uk-input uk-form-width-medium uk-form-small\" style=\"border:none;\" type=\"text\" placeholder=\"变量名称\">\n                            </div>\n                          </td>\n                          <td>:</td>\n                          <td>\n                            <div class=\"uk-margin\">\n                              <input (keyup)=\"envValueChange($event)\" class=\"uk-input uk-form-width-medium uk-form-small\" style=\"border:none;\" type=\"text\" placeholder=\"变量值\">\n                            </div>\n                          </td>\n                         <a><td (click)=\"addVar()\"><span style=\"color:dodgerblue;\" class=\"glyphicon glyphicon-plus-sign\"></span></td></a>\n                        </tr>\n                      </tfoot>\n                      <tbody>\n                          <tr *ngFor=\"let env of envs\" style=\"margin-top:0.5em;\">\n                              <td>{{env.num}}</td>\n                              <td>{{env.key}}</td>\n                              <td>:</td>\n                              <td>{{env.value}}</td>\n                              <a><td (click)=\"removeVar(env.num)\"><span style=\"color:dodgerblue;\" class=\"glyphicon glyphicon-minus-sign\"></span></td></a>\n                          </tr>\n                      </tbody>\n                    </table>\n\n                  </div>\n\n                  <div class=\"uk-modal-footer uk-text-right\" style=\"border-bottom-left-radius: 6px;border-bottom-right-radius: 6px;\">\n                    <button class=\"uk-button uk-button-primary uk-modal-close\" type=\"button\">Save</button>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n\n          </div>\n          <div class=\"uk-margin\">\n            <label class=\"uk-form-label\" for=\"form-horizontal-text\">其他选项</label>\n            <div class=\"uk-form-controls\">\n              <div class=\"uk-margin uk-grid-small uk-child-width-auto uk-grid\">\n                <label>\n                  <input class=\"uk-checkbox\" type=\"checkbox\">&nbsp;&nbsp;&nbsp;部署Tomcat</label>\n                <label>\n                  <input class=\"uk-checkbox\" type=\"checkbox\">&nbsp;&nbsp;&nbsp;部署监控</label>\n                <label>\n                  <input class=\"uk-checkbox\" type=\"checkbox\">&nbsp;&nbsp;&nbsp;部署Nginx</label>\n              </div>\n            </div>\n          </div>\n          <button (click)=\"packageDeploy()\" class=\"uk-button uk-button-primary\">\n            部署\n          </button>\n\n          <div id=\"modal-overflow\" uk-modal style=\"z-index:999;\">\n            <div class=\"uk-modal-dialog\">\n\n              <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n\n              <div class=\"uk-modal-header\">\n                <h2 class=\"uk-modal-title\">日志</h2>\n              </div>\n\n              <div class=\"uk-modal-body\" uk-overflow-auto>\n                <li *ngFor=\"let log of logs\" style=\"margin-top:0.5em;\">\n                  <p class={{log.class}}>{{log.log}}</p>\n                </li>\n              </div>\n\n              <div class=\"uk-modal-footer uk-text-right\">\n                <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Cancel</button>\n                <button class=\"uk-button uk-button-primary\" type=\"button\">Save</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"col-md-11\" style=\"padding: 1em;background: transparent;height:5%;text-align: center;\">\n  <span style=\"color:#aaa;\">CENOSTACK.COM 构建敏捷团队</span>&nbsp;&nbsp;\n  <a href=\"Mailto:ecrd-kapioneer@jd.com\" style=\"color:#eee;\">@ecrd-kapioneer</a>&nbsp;&nbsp;\n  <span style=\"color:#aaa;\">V1.7.11 Alpha</span>\n  <span>\n    <span class=\"fa fa-github fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n    <span class=\"fa fa-qq fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n    <span class=\"fa fa-weixin fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n    <span class=\"fa fa-weibo fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n  </span>\n</div>"

            /***/
        }),

        /***/
        "./src/app/devops/nodejs/nodejs.component.ts":
        /*!***************************************************!*\
          !*** ./src/app/devops/nodejs/nodejs.component.ts ***!
          \***************************************************/
        /*! exports provided: NodejsComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "NodejsComponent", function() { return NodejsComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _domain_envVariale_domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../domain/envVariale.domain */ "./src/app/domain/envVariale.domain.ts");
            /* harmony import */
            var _mock_mock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../mock/mock.service */ "./src/app/mock/mock.service.ts");
            /* harmony import */
            var _service_devops_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../service/devops.service */ "./src/app/service/devops.service.ts");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };




            var NodejsComponent = /** @class */ (function() {
                function NodejsComponent(mockService, devopsService) {
                    this.mockService = mockService;
                    this.devopsService = devopsService;
                    this.tmpNum = 4;
                    this.tmpKey = "var";
                    this.tmpValue = "value";
                }
                NodejsComponent.prototype.ngOnInit = function() {
                    this.envs = this.mockService.getEnvs();
                    this.gitProject = {
                        gitPath: "",
                        gitUser: "",
                        gitPassword: "",
                        gitCodePath: "/export/devops/code",
                    };
                    this.buildCode = {
                        codePath: "/export/devops/code",
                        buildPath: "/export/devops/build",
                        gitPath: "null",
                        gitBranch: "null",
                        projectName: "null",
                    };
                    this.deployPackage = {
                        buildPath: "/export/devops/build",
                        containerName: "null",
                        projectName: "null",
                        gitBranch: "null",
                        buildVersion: "null",
                        remoteDeployPath: "/export/servers/tomcat",
                        remoteLogPath: "/export/services/log",
                        jvmOptions: "null",
                        env: "b2b_gcy",
                    };
                    this.logs = [{ id: 0, log: "读取日志中...", class: "orange" }];
                    this.gitProjectDir = [];
                    this.gitProjectBranchs = [];
                    this.containers = [];
                    this.buildProjectDir = [];
                    this.buildProjectBranchs = [];
                    this.buildProjectVersion = [];
                    this.progressInit("");
                    this.initTab();
                    this.changeTab("git");
                };
                NodejsComponent.prototype.initTab = function() {
                    document.getElementById("git").style.display = "none";
                    document.getElementById("build").style.display = "none";
                    document.getElementById("deploy").style.display = "none";
                };
                NodejsComponent.prototype.changeTab = function(tab) {
                    this.initTab();
                    document.getElementById(tab).style.display = "block";
                    if (tab == "build") {
                        this.getGitProjectDirs();
                    }
                    if (tab == "deploy") {
                        //this.getContainers();
                        //this.getBuildProjects();
                    }
                };
                NodejsComponent.prototype.updateCode = function() {
                    var _this = this;
                    this.logs = [];
                    this.progressStart("拉取中...");
                    var method = "api.git.updateCode";
                    this.developer = {
                        id: localStorage.getItem('id'),
                        developerUsername: localStorage.getItem("developerUsername"),
                        developerEmail: localStorage.getItem("developerEmail"),
                        developerPhone: localStorage.getItem("developerPhone"),
                        developerToken: localStorage.getItem("developerToken"),
                        lastModifyTime: localStorage.getItem("lastModifyTime"),
                        createTime: localStorage.getItem("createTime")
                    };
                    var params = {
                        developer: this.developer,
                        gitProject: this.gitProject
                    };
                    this.devopsService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            _this.progressOver("拉取成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看日志</a>");
                            for (var _i = 0, _a = res.data.data; _i < _a.length; _i++) {
                                var msg = _a[_i];
                                _this.logs.push({ id: 0, log: msg, class: "green" });
                            }
                        } else {
                            _this.progressOver("拉取成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看日志</a>");
                            for (var _b = 0, _c = res.data.data; _b < _c.length; _b++) {
                                var msg = _c[_b];
                                _this.logs.push({ id: 0, log: msg, class: "red" });
                            }
                        }
                    });
                };
                NodejsComponent.prototype.codeBuild = function() {
                    var _this = this;
                    this.logs = [];
                    this.progressStart("构建中...");
                    var method = "api.git.buildNodeCode";
                    this.developer = {
                        id: localStorage.getItem('id'),
                        developerUsername: localStorage.getItem("developerUsername"),
                        developerEmail: localStorage.getItem("developerEmail"),
                        developerPhone: localStorage.getItem("developerPhone"),
                        developerToken: localStorage.getItem("developerToken"),
                        lastModifyTime: localStorage.getItem("lastModifyTime"),
                        createTime: localStorage.getItem("createTime")
                    };
                    var params = {
                        developer: this.developer,
                        buildCode: this.buildCode
                    };
                    this.devopsService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            _this.progressOver("构建成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看日志</a>");
                            for (var _i = 0, _a = res.data.data; _i < _a.length; _i++) {
                                var msg = _a[_i];
                                _this.logs.push({ id: 0, log: msg, class: "green" });
                            }
                        } else {
                            _this.progressOver("构建成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看日志</a>");
                            for (var _b = 0, _c = res.data.data; _b < _c.length; _b++) {
                                var msg = _c[_b];
                                _this.logs.push({ id: 0, log: msg, class: "red" });
                            }
                        }
                    });
                };
                NodejsComponent.prototype.packageDeploy = function() {
                    var _this = this;
                    this.logs = [];
                    this.progressStart("部署中...");
                    var method = "api.git.deployNodePackage";
                    this.developer = {
                        id: localStorage.getItem('id'),
                        developerUsername: localStorage.getItem("developerUsername"),
                        developerEmail: localStorage.getItem("developerEmail"),
                        developerPhone: localStorage.getItem("developerPhone"),
                        developerToken: localStorage.getItem("developerToken"),
                        lastModifyTime: localStorage.getItem("lastModifyTime"),
                        createTime: localStorage.getItem("createTime")
                    };
                    var params = {
                        developer: this.developer,
                        deployPackage: this.deployPackage
                    };
                    this.devopsService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            _this.progressOver("部署成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看日志</a>");
                            for (var _i = 0, _a = res.data.data; _i < _a.length; _i++) {
                                var msg = _a[_i];
                                _this.logs.push({ id: 0, log: msg, class: "green" });
                            }
                        } else {
                            _this.progressOver("部署成功<a href='#modal-overflow' style='color:blue;' uk-toggle>查看日志</a>");
                            for (var _b = 0, _c = res.data.data; _b < _c.length; _b++) {
                                var msg = _c[_b];
                                _this.logs.push({ id: 0, log: msg, class: "red" });
                            }
                        }
                    });
                };
                NodejsComponent.prototype.getGitProjectDirs = function() {
                    var _this = this;
                    this.logs = [];
                    this.gitProjectDir = [];
                    this.developer = {
                        id: localStorage.getItem('id'),
                        developerUsername: localStorage.getItem("developerUsername"),
                        developerEmail: localStorage.getItem("developerEmail"),
                        developerPhone: localStorage.getItem("developerPhone"),
                        developerToken: localStorage.getItem("developerToken"),
                        lastModifyTime: localStorage.getItem("lastModifyTime"),
                        createTime: localStorage.getItem("createTime")
                    };
                    var method = "api.git.projectDirs";
                    var params = {
                        developer: this.developer,
                        buildCode: this.buildCode
                    };
                    this.devopsService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            for (var _i = 0, _a = res.data.data; _i < _a.length; _i++) {
                                var msg = _a[_i];
                                _this.gitProjectDir.push(msg);
                                _this.logs.push({ id: 0, log: msg, class: "green" });
                            }
                        } else {
                            for (var _b = 0, _c = res.data.data; _b < _c.length; _b++) {
                                var msg = _c[_b];
                                _this.gitProjectDir.push(msg);
                                _this.logs.push({ id: 0, log: msg, class: "red" });
                            }
                        }
                    });
                };
                NodejsComponent.prototype.getGitProgectBranchs = function() {
                    var _this = this;
                    this.logs = [];
                    this.gitProjectBranchs = [];
                    this.developer = {
                        id: localStorage.getItem('id'),
                        developerUsername: localStorage.getItem("developerUsername"),
                        developerEmail: localStorage.getItem("developerEmail"),
                        developerPhone: localStorage.getItem("developerPhone"),
                        developerToken: localStorage.getItem("developerToken"),
                        lastModifyTime: localStorage.getItem("lastModifyTime"),
                        createTime: localStorage.getItem("createTime")
                    };
                    var method = "api.git.projectBranchs";
                    var params = {
                        developer: this.developer,
                        buildCode: this.buildCode
                    };
                    this.devopsService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            for (var _i = 0, _a = res.data.data; _i < _a.length; _i++) {
                                var msg = _a[_i];
                                _this.gitProjectBranchs.push(msg);
                                _this.logs.push({ id: 0, log: msg, class: "green" });
                            }
                        } else {
                            for (var _b = 0, _c = res.data.data; _b < _c.length; _b++) {
                                var msg = _c[_b];
                                _this.gitProjectBranchs.push(msg);
                                _this.logs.push({ id: 0, log: msg, class: "red" });
                            }
                        }
                    });
                };
                NodejsComponent.prototype.getContainers = function() {
                    var _this = this;
                    this.logs = [];
                    this.containers = [];
                    this.developer = {
                        id: localStorage.getItem('id'),
                        developerUsername: localStorage.getItem("developerUsername"),
                        developerEmail: localStorage.getItem("developerEmail"),
                        developerPhone: localStorage.getItem("developerPhone"),
                        developerToken: localStorage.getItem("developerToken"),
                        lastModifyTime: localStorage.getItem("lastModifyTime"),
                        createTime: localStorage.getItem("createTime")
                    };
                    var method = "api.container.listContainer";
                    var params = {
                        developer: this.developer,
                        page: { page: 0, num: 100 }
                    };
                    this.devopsService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            for (var _i = 0, _a = res.data.data; _i < _a.length; _i++) {
                                var msg = _a[_i];
                                _this.containers.push({
                                    container: msg.container,
                                    containerOther: msg.containerOther,
                                });
                                _this.logs.push({ id: 0, log: msg, class: "green" });
                            }
                        } else {
                            for (var _b = 0, _c = res.data.data; _b < _c.length; _b++) {
                                var msg = _c[_b];
                                _this.containers.push({
                                    container: msg.container,
                                    containerOther: msg.containerOther,
                                });
                                _this.logs.push({ id: 0, log: msg, class: "red" });
                            }
                        }
                    });
                };
                NodejsComponent.prototype.getBuildProjects = function() {
                    var _this = this;
                    this.logs = [];
                    this.buildProjectDir = [];
                    this.developer = {
                        id: localStorage.getItem('id'),
                        developerUsername: localStorage.getItem("developerUsername"),
                        developerEmail: localStorage.getItem("developerEmail"),
                        developerPhone: localStorage.getItem("developerPhone"),
                        developerToken: localStorage.getItem("developerToken"),
                        lastModifyTime: localStorage.getItem("lastModifyTime"),
                        createTime: localStorage.getItem("createTime")
                    };
                    var method = "api.deploy.projects";
                    var params = {
                        developer: this.developer,
                        deployPackage: this.deployPackage
                    };
                    this.devopsService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            for (var _i = 0, _a = res.data.data; _i < _a.length; _i++) {
                                var msg = _a[_i];
                                _this.buildProjectDir.push(msg);
                                _this.logs.push({ id: 0, log: msg, class: "green" });
                            }
                        } else {
                            for (var _b = 0, _c = res.data.data; _b < _c.length; _b++) {
                                var msg = _c[_b];
                                _this.buildProjectDir.push(msg);
                                _this.logs.push({ id: 0, log: msg, class: "red" });
                            }
                        }
                    });
                };
                NodejsComponent.prototype.getBuildProjectBranchs = function() {
                    var _this = this;
                    this.logs = [];
                    this.buildProjectBranchs = [];
                    this.developer = {
                        id: localStorage.getItem('id'),
                        developerUsername: localStorage.getItem("developerUsername"),
                        developerEmail: localStorage.getItem("developerEmail"),
                        developerPhone: localStorage.getItem("developerPhone"),
                        developerToken: localStorage.getItem("developerToken"),
                        lastModifyTime: localStorage.getItem("lastModifyTime"),
                        createTime: localStorage.getItem("createTime")
                    };
                    var method = "api.deploy.project.branchs";
                    var params = {
                        developer: this.developer,
                        deployPackage: this.deployPackage
                    };
                    this.devopsService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            for (var _i = 0, _a = res.data.data; _i < _a.length; _i++) {
                                var msg = _a[_i];
                                _this.buildProjectBranchs.push(msg);
                                _this.logs.push({ id: 0, log: msg, class: "green" });
                            }
                        } else {
                            for (var _b = 0, _c = res.data.data; _b < _c.length; _b++) {
                                var msg = _c[_b];
                                _this.buildProjectBranchs.push(msg);
                                _this.logs.push({ id: 0, log: msg, class: "red" });
                            }
                        }
                    });
                };
                NodejsComponent.prototype.getBuildProjectVersion = function() {
                    var _this = this;
                    this.logs = [];
                    this.buildProjectVersion = [];
                    this.developer = {
                        id: localStorage.getItem('id'),
                        developerUsername: localStorage.getItem("developerUsername"),
                        developerEmail: localStorage.getItem("developerEmail"),
                        developerPhone: localStorage.getItem("developerPhone"),
                        developerToken: localStorage.getItem("developerToken"),
                        lastModifyTime: localStorage.getItem("lastModifyTime"),
                        createTime: localStorage.getItem("createTime")
                    };
                    var method = "api.deploy.project.version";
                    var params = {
                        developer: this.developer,
                        deployPackage: this.deployPackage
                    };
                    this.devopsService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            for (var _i = 0, _a = res.data.data; _i < _a.length; _i++) {
                                var msg = _a[_i];
                                _this.buildProjectVersion.push(msg);
                                _this.logs.push({ id: 0, log: msg, class: "green" });
                            }
                        } else {
                            for (var _b = 0, _c = res.data.data; _b < _c.length; _b++) {
                                var msg = _c[_b];
                                _this.buildProjectVersion.push(msg);
                                _this.logs.push({ id: 0, log: msg, class: "red" });
                            }
                        }
                    });
                };
                NodejsComponent.prototype.gitPathChange = function(event) {
                    this.gitProject.gitPath = event.target.value;
                };;
                NodejsComponent.prototype.gitUserChange = function(event) {
                    this.gitProject.gitUser = event.target.value;
                };;
                NodejsComponent.prototype.gitPasswordChange = function(event) {
                    this.gitProject.gitPassword = event.target.value;
                };;
                NodejsComponent.prototype.gitCodePathChange = function(event) {
                    this.gitProject.gitCodePath = event.target.value;
                };;
                NodejsComponent.prototype.buildGitProjectChange = function(event) {
                    this.buildCode.gitPath = event.target.value;
                    this.buildCode.projectName = event.target.value;
                    this.getGitProgectBranchs();
                };;
                NodejsComponent.prototype.buildGitBranchChange = function(event) {
                    this.buildCode.gitBranch = event.target.value;
                };;
                NodejsComponent.prototype.buildProjectChange = function(event) {
                    this.deployPackage.projectName = event.target.value;
                    this.getBuildProjectBranchs();
                };;
                NodejsComponent.prototype.buildProjectBranchChange = function(event) {
                    this.deployPackage.gitBranch = event.target.value;
                    this.getBuildProjectVersion();
                };
                NodejsComponent.prototype.buildProjectVersionChange = function(event) {
                    this.deployPackage.buildVersion = event.target.value;
                };
                NodejsComponent.prototype.buildContainerChange = function(event) {
                    this.deployPackage.containerName = event.target.value;
                };
                NodejsComponent.prototype.removeVar = function(data) {
                    for (var i = 0; i < this.envs.length;) {
                        if (this.envs[i].num == data) {
                            this.envs.splice(i, 1);
                        } else {
                            i++;
                        }
                    }
                };
                NodejsComponent.prototype.addVar = function() {
                    this.envs.push(new _domain_envVariale_domain__WEBPACK_IMPORTED_MODULE_1__["EnvVariable"](this.tmpNum, this.tmpKey, this.tmpValue));
                    this.tmpNum = this.tmpNum + 1;
                };
                NodejsComponent.prototype.envKeyChange = function(event) {
                    this.tmpKey = event.target.value;
                };;
                NodejsComponent.prototype.envValueChange = function(event) {
                    this.tmpValue = event.target.value;
                };;
                NodejsComponent.prototype.progressInit = function(msg) {
                    clearInterval(this.timer);
                    this.progress = "0";
                    document.getElementById("progress").style.display = "none";
                    document.getElementById("progress_p").innerHTML = msg;
                };
                NodejsComponent.prototype.progressStart = function(msg) {
                    var _this = this;
                    document.getElementById("progress").style.display = "block";
                    document.getElementById("progress_p").innerHTML = msg;
                    var n = 0;
                    this.timer = setInterval(function() {
                        if (n < 97) {
                            _this.progress = n.toString();
                            document.getElementById("progress_p").innerHTML = msg + "(" + _this.progress + ")...";
                            n += Math.floor(Math.random() * 3 + 0);
                        }
                    }, 100);
                };
                NodejsComponent.prototype.progressOver = function(msg) {
                    clearInterval(this.timer);
                    this.progress = "100";
                    document.getElementById("progress_p").innerHTML = msg;
                };
                NodejsComponent.prototype.ngOnDestroy = function() {
                    if (this.timer) {
                        clearInterval(this.timer);
                    }
                };
                NodejsComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-nodejs',
                        template: __webpack_require__( /*! ./nodejs.component.html */ "./src/app/devops/nodejs/nodejs.component.html"),
                        styles: [__webpack_require__( /*! ./nodejs.component.css */ "./src/app/devops/nodejs/nodejs.component.css")]
                    }),
                    __metadata("design:paramtypes", [_mock_mock_service__WEBPACK_IMPORTED_MODULE_2__["MockService"], _service_devops_service__WEBPACK_IMPORTED_MODULE_3__["DevopsService"]])
                ], NodejsComponent);
                return NodejsComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/devops/services/services.component.css":
        /*!********************************************************!*\
          !*** ./src/app/devops/services/services.component.css ***!
          \********************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = ""

            /***/
        }),

        /***/
        "./src/app/devops/services/services.component.html":
        /*!*********************************************************!*\
          !*** ./src/app/devops/services/services.component.html ***!
          \*********************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<app-left></app-left>\n<div class=\"col-md-11\" style=\"padding: 1em;height:5%;display:table-cell;vertical-align:middle;font-weight:bolder;background: transparent;color: #fff;z-index:99;\">\n    <ul class=\"uk-breadcrumb\">\n        <li><a href=\"#\">DevOps</a></li>\n        <li><a href=\"#\">服务</a></li>\n        <li><a href=\"#\">Java</a></li>\n        <li><span>列表</span></li>\n    </ul>\n</div>\n<div class=\"col-md-11\" style=\"padding: 1em;background: transparent;height: 90%;\">\n\n  <div class=\"col-md-12\" style=\"padding: 1em;background: #fff;height: 100%;overflow: auto;border-radius: 6px;\">\n    <div class=\"col-md-12\" style=\"margin-top:1em;margin-bottom: 2em;\">\n      <ul class=\"uk-tab\" uk-tab>\n        <li class=\"uk-active\">\n          <a href=\"#container\"> 服务列表 </a>\n        </li>\n      </ul>\n      <div class=\"col-md-12\" style=\"padding:0;margin:0;overflow: auto;\">\n        <table class=\"uk-table uk-table-divider\">\n\n          <thead>\n            <tr>\n              <th>服务名称</th>\n              <th>主机</th>\n              <th>环境</th>\n              <th>端口</th>\n              <!-- <th>本地代码目录</th> -->\n              <!-- <th>本地构建目录</th> -->\n              <th>分支 | 版本</th>\n              <!-- <th>远程部署目录</th> -->\n              <th></th>\n            </tr>\n          </thead>\n          <tbody>\n\n            <tr *ngFor=\"let service of services\">\n                <th><span class=\"cc-span cc-span-normal\">Java</span>&nbsp;{{service.codeBuild.projectName}}</th>\n                <th>{{service.deployPackage.containerName}}</th>\n                <th>{{service.serviceOther.port}}</th>\n                <th>{{service.serviceOther.env}}</th>\n                <!-- <th>{{service.codeBuild.codePath}}</th> -->\n                <!-- <th>{{service.codeBuild.buildPath}}</th> -->\n                <th>{{service.codeBuild.gitBranch}} | {{service.serviceOther.version}}</th>\n                <!-- <th>{{service.deployPackage.remoteDeployPath}}</th> -->\n                <th>\n                    <button (click)=\"moveService(service.serviceOther.serviceId)\" class=\"cc-button\" disabled=\"disabled\">迁移</button>&nbsp;\n                    <button (click)=\"removeService(service.serviceOther.serviceId)\" class=\"cc-button\" disabled=\"disabled\">卸载</button>\n                </th>\n            </tr>\n\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"col-md-11\" style=\"padding: 1em;background: transparent;height:5%;text-align: center;\">\n  <span style=\"color:#aaa;\">CENOSTACK.COM 构建敏捷团队</span>&nbsp;&nbsp;\n  <a href=\"Mailto:ecrd-kapioneer@jd.com\" style=\"color:#eee;\">@ecrd-kapioneer</a>&nbsp;&nbsp;\n  <span style=\"color:#aaa;\">V1.7.11 Alpha</span>\n  <span>\n    <span class=\"fa fa-github fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n    <span class=\"fa fa-qq fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n    <span class=\"fa fa-weixin fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n    <span class=\"fa fa-weibo fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n  </span>\n</div>\n"

            /***/
        }),

        /***/
        "./src/app/devops/services/services.component.ts":
        /*!*******************************************************!*\
          !*** ./src/app/devops/services/services.component.ts ***!
          \*******************************************************/
        /*! exports provided: ServicesComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _service_devops_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../service/devops.service */ "./src/app/service/devops.service.ts");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };


            var ServicesComponent = /** @class */ (function() {
                function ServicesComponent(devopsService) {
                    this.devopsService = devopsService;
                }
                ServicesComponent.prototype.ngOnInit = function() {
                    this.services = [];
                    this.page = { page: 0, num: 100 };
                    this.deployPackage = {
                        buildPath: "/export/devops/build",
                        containerName: "null",
                        projectName: "null",
                        gitBranch: "null",
                        buildVersion: "null",
                        remoteDeployPath: "/export/servers/tomcat",
                        remoteLogPath: "/export/services/log",
                        jvmOptions: "-",
                        env: "b2b_gcy",
                    };
                    this.getDeployPackage();
                };
                ServicesComponent.prototype.getDeployPackage = function() {
                    var _this = this;
                    this.developer = {
                        id: localStorage.getItem('id'),
                        developerUsername: localStorage.getItem("developerUsername"),
                        developerEmail: localStorage.getItem("developerEmail"),
                        developerPhone: localStorage.getItem("developerPhone"),
                        developerToken: localStorage.getItem("developerToken"),
                        lastModifyTime: localStorage.getItem("lastModifyTime"),
                        createTime: localStorage.getItem("createTime")
                    };
                    var method = "api.services.listDeploy";
                    var params = {
                        developer: this.developer,
                        page: this.page
                    };
                    this.devopsService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            for (var _i = 0, _a = res.data.data; _i < _a.length; _i++) {
                                var msg = _a[_i];
                                _this.services.push({
                                    gitProject: msg.gitProject,
                                    codeBuild: msg.buildCode,
                                    deployPackage: msg.deployPackage,
                                    serviceOther: msg.serviceOther,
                                });
                            }
                        } else {
                            for (var _b = 0, _c = res.data.data; _b < _c.length; _b++) {
                                var msg = _c[_b];
                                _this.services.push({
                                    gitProject: msg.gitProject,
                                    codeBuild: msg.buildCode,
                                    deployPackage: msg.deployPackage,
                                    serviceOther: msg.serviceOther,
                                });
                            }
                        }
                    });
                };
                ServicesComponent.prototype.removeService = function(id) {
                    this.devopsService.showModal("提示", id);
                    this.developer = {
                        id: localStorage.getItem('id'),
                        developerUsername: localStorage.getItem("developerUsername"),
                        developerEmail: localStorage.getItem("developerEmail"),
                        developerPhone: localStorage.getItem("developerPhone"),
                        developerToken: localStorage.getItem("developerToken"),
                        lastModifyTime: localStorage.getItem("lastModifyTime"),
                        createTime: localStorage.getItem("createTime")
                    };
                    var method = "api.services.removeService";
                    var params = {
                        developer: this.developer,
                        serviceId: id
                    };
                    // this.devopsService.get(method,params).then(res=>{
                    //   if(res.data.state==true){
                    //     this.devopsService.showModal("成功","服务卸载成功");
                    //   }else{
                    //     this.devopsService.showModal("成功","服务卸载成功");
                    //   }
                    // });
                };
                ServicesComponent.prototype.moveService = function(id) {
                    this.devopsService.showModal("提示", id);
                    this.developer = {
                        id: localStorage.getItem('id'),
                        developerUsername: localStorage.getItem("developerUsername"),
                        developerEmail: localStorage.getItem("developerEmail"),
                        developerPhone: localStorage.getItem("developerPhone"),
                        developerToken: localStorage.getItem("developerToken"),
                        lastModifyTime: localStorage.getItem("lastModifyTime"),
                        createTime: localStorage.getItem("createTime")
                    };
                    var method = "api.services.moveService";
                    var params = {
                        developer: this.developer,
                        serviceId: id
                    };
                    // this.devopsService.get(method,params).then(res=>{
                    //   if(res.data.state==true){
                    //     this.devopsService.showModal("成功","服务卸载成功");
                    //   }else{
                    //     this.devopsService.showModal("成功","服务卸载成功");
                    //   }
                    // });
                };
                ServicesComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-services',
                        template: __webpack_require__( /*! ./services.component.html */ "./src/app/devops/services/services.component.html"),
                        styles: [__webpack_require__( /*! ./services.component.css */ "./src/app/devops/services/services.component.css")]
                    }),
                    __metadata("design:paramtypes", [_service_devops_service__WEBPACK_IMPORTED_MODULE_1__["DevopsService"]])
                ], ServicesComponent);
                return ServicesComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/devops/webssh/webssh.component.css":
        /*!****************************************************!*\
          !*** ./src/app/devops/webssh/webssh.component.css ***!
          \****************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "button{\n    padding: 1em;\n    background: green;\n    color: #fff;\n    font-weight: bolder;\n    border: none;\n}"

            /***/
        }),

        /***/
        "./src/app/devops/webssh/webssh.component.html":
        /*!*****************************************************!*\
          !*** ./src/app/devops/webssh/webssh.component.html ***!
          \*****************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<app-left></app-left>\n<div class=\"col-md-11\" style=\"padding: 1em;height:5%;display:table-cell;vertical-align:middle;font-weight:bolder;background: transparent;z-index:9999;\">\n    <ul class=\"uk-breadcrumb\">\n        <li><a href=\"#\">DevOps</a></li>\n        <li><a href=\"#\">工具</a></li>\n        <li><span>Console</span></li>\n    </ul>\n</div>\n<div class=\"col-md-11\" style=\"padding: 1em;background: transparent;height: 90%;\">\n  <div class=\"col-md-12\" style=\"background: #fff;height: 100%;border-radius: 6px;\">\n    <div class=\"col-md-12\" style=\"margin-top:2em;margin-bottom: 2em;height: 100%;\">\n      <ul class=\"uk-tab\" uk-tab>\n        <li class=\"uk-active\">\n          <a href=\"#container\"> Console </a>\n        </li>\n      </ul>\n      <div class=\"col-md-12\" style=\"height: 90%;padding: 0;margin: 0;\">\n        <div class=\"col-md-12\" style=\"padding:0em;background: #fff;padding-top: 0em;width: 100%;height: 90%;margin: 0;\">\n          <iframe class=\"col-md-12\" style=\"border:none;height:auto;height: 100%;width: 100%;padding: 0;margin: 0;\" src=\"http://116.196.82.213:81/\"></iframe>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"col-md-11\" style=\"padding: 1em;background: transparent;height:5%;text-align: center;\">\n  <span style=\"color:#aaa;\">CENOSTACK.COM 构建敏捷团队</span>&nbsp;&nbsp;\n  <a href=\"Mailto:ecrd-kapioneer@jd.com\" style=\"color:#eee;\">@ecrd-kapioneer</a>&nbsp;&nbsp;\n  <span style=\"color:#aaa;\">V1.7.11 Alpha</span>\n  <span>\n    <span class=\"fa fa-github fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n    <span class=\"fa fa-qq fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n    <span class=\"fa fa-weixin fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n    <span class=\"fa fa-weibo fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n  </span>\n</div>\n"

            /***/
        }),

        /***/
        "./src/app/devops/webssh/webssh.component.ts":
        /*!***************************************************!*\
          !*** ./src/app/devops/webssh/webssh.component.ts ***!
          \***************************************************/
        /*! exports provided: WebsshComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "WebsshComponent", function() { return WebsshComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            // import { Terminal } from 'xterm';
            // import {fit} from 'xterm/lib/addons/fit/fit';
            // import {terminadoAttach} from 'xterm/lib/addons/terminado/terminado';
            var WebsshComponent = /** @class */ (function() {
                // xterm:Terminal;
                // socket:WebSocket;
                function WebsshComponent() {}
                WebsshComponent.prototype.ngOnInit = function() {
                    // // Terminal.applyAddon(fit);
                    // // Terminal.applyAddon(terminadoAttach);  // Apply the `terminado` addon
                    // this.xterm = new Terminal();
                    // this.socket = new WebSocket('wss://terminado.example.com/websocket');
                    // // fit(this.xterm);
                    // // terminadoAttach(this.xterm,this.socket,true,true);
                    // this.xterm.open(document.getElementById('terminal'));
                    // this.xterm.write('Hello from \x1B[1;3;31mGCY DevOps \x1B[0m $ ')
                };
                WebsshComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-webssh',
                        template: __webpack_require__( /*! ./webssh.component.html */ "./src/app/devops/webssh/webssh.component.html"),
                        styles: [__webpack_require__( /*! ./webssh.component.css */ "./src/app/devops/webssh/webssh.component.css")]
                    }),
                    __metadata("design:paramtypes", [])
                ], WebsshComponent);
                return WebsshComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/domain/envVariale.domain.ts":
        /*!*********************************************!*\
          !*** ./src/app/domain/envVariale.domain.ts ***!
          \*********************************************/
        /*! exports provided: EnvVariable */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "EnvVariable", function() { return EnvVariable; });
            var EnvVariable = /** @class */ (function() {
                function EnvVariable(num, key, value) {
                    this.num = num;
                    this.key = key;
                    this.value = value;
                }
                return EnvVariable;
            }());



            /***/
        }),

        /***/
        "./src/app/login/login.module.ts":
        /*!***************************************!*\
          !*** ./src/app/login/login.module.ts ***!
          \***************************************/
        /*! exports provided: LoginModule */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
            /* harmony import */
            var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./login/login.component */ "./src/app/login/login/login.component.ts");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };



            var LoginModule = /** @class */ (function() {
                function LoginModule() {}
                LoginModule = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
                        imports: [
                            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                        ],
                        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]]
                    })
                ], LoginModule);
                return LoginModule;
            }());



            /***/
        }),

        /***/
        "./src/app/login/login/login.component.css":
        /*!*************************************************!*\
          !*** ./src/app/login/login/login.component.css ***!
          \*************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = ""

            /***/
        }),

        /***/
        "./src/app/login/login/login.component.html":
        /*!**************************************************!*\
          !*** ./src/app/login/login/login.component.html ***!
          \**************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<div class=\"col-md-12\" style=\"padding: 1em;height:5%;line-height:2em;font-weight:bolder;background: transparent;color: #fff;z-index:99;\">\n \n</div>\n<div class=\"col-md-4\" style=\"padding: 1em;background: transparent;height: 90%;\"></div>\n<div class=\"col-md-4\" style=\"padding: 1em;background: transparent;height: 90%;padding-top: 5em;\">\n  <div class=\"col-md-12\" style=\"background: #fff;border-radius: 6px;\">\n    <div class=\"col-md-12\" style=\"margin-top:2em;margin-bottom: 2em;\">\n      <ul class=\"uk-tab\" uk-tab>\n        <li class=\"uk-active\">\n          <a href=\"#container\"> 用户登录 </a>\n        </li>\n        <li>\n          <a href=\"#container\"> 用户注册 </a>\n        </li>\n      </ul>\n      <div class=\"col-md-12\" style=\"padding: 1em;\">\n\n        <article class=\"uk-article\">\n\n          <h1 class=\"uk-article-title\" style=\"color:#bbb;\">登录</h1>\n      \n      </article>\n        \n\n        <div class=\"uk-margin\">\n          <input (keyup)=\"userNameChange($event)\" class=\"uk-input\" type=\"text\" placeholder=\"用户名\">\n        </div>\n        <div class=\"uk-margin\">\n          <input (keyup)=\"userPasswordChange($event)\" class=\"uk-input\" type=\"password\" placeholder=\"密码\">\n        </div>\n       \n\n        <button (click)=\"login()\" class=\"uk-button uk-button-primary\">登录</button>&nbsp;\n      \n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"col-md-4\" style=\"padding: 1em;background: transparent;height: 90%;\"></div>\n\n\n<div class=\"col-md-11\" style=\"padding: 1em;background: transparent;height:5%;text-align: center;\">\n  <span style=\"color:#aaa;\">CENOSTACK.COM 构建敏捷团队</span>&nbsp;&nbsp;\n  <a href=\"Mailto:ecrd-kapioneer@jd.com\" style=\"color:#eee;\">@ecrd-kapioneer</a>&nbsp;&nbsp;\n  <span style=\"color:#aaa;\">V1.7.11 Alpha</span>\n  <span>\n    <span class=\"fa fa-github fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n    <span class=\"fa fa-qq fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n    <span class=\"fa fa-weixin fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n    <span class=\"fa fa-weibo fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n  </span>\n</div>\n"

            /***/
        }),

        /***/
        "./src/app/login/login/login.component.ts":
        /*!************************************************!*\
          !*** ./src/app/login/login/login.component.ts ***!
          \************************************************/
        /*! exports provided: LoginComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _service_devops_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../service/devops.service */ "./src/app/service/devops.service.ts");
            /* harmony import */
            var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
            /* harmony import */
            var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };




            var LoginComponent = /** @class */ (function() {
                function LoginComponent(router, devopsService) {
                    this.router = router;
                    this.devopsService = devopsService;
                }
                LoginComponent.prototype.ngOnInit = function() {
                    this.userLogin = {
                        userName: "",
                        password: ""
                    };
                    this.developer = {
                        id: 1,
                        developerUsername: "null",
                        developerEmail: "null",
                        developerPhone: "null",
                        developerToken: "null",
                        lastModifyTime: "null",
                        createTime: "null"
                    };
                };
                LoginComponent.prototype.userNameChange = function(event) {
                    this.userLogin.userName = event.target.value;
                };;
                LoginComponent.prototype.userPasswordChange = function(event) {
                    this.userLogin.password = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__["Md5"].hashStr(event.target.value);
                };;
                LoginComponent.prototype.login = function() {
                    var _this = this;
                    var method = "api.developer.login";
                    var params = { userLogin: this.userLogin };
                    this.devopsService.get(method, params).then(function(res) {
                        if (res.data.state == true) {
                            console.log(res.data.data);
                            _this.developer = {
                                id: res.data.data.id,
                                developerUsername: res.data.data.developerUsername,
                                developerEmail: res.data.data.developerEmail,
                                developerPhone: res.data.data.developerPhone,
                                developerToken: res.data.data.developerToken,
                                lastModifyTime: res.data.data.lastModifyTime,
                                createTime: res.data.data.createTime
                            };
                            localStorage.setItem("id", _this.developer.id.toString());
                            localStorage.setItem("developerUsername", _this.developer.developerUsername.toString());
                            localStorage.setItem("developerEmail", _this.developer.developerEmail.toString());
                            localStorage.setItem("developerPhone", _this.developer.developerPhone.toString());
                            localStorage.setItem("developerToken", _this.developer.developerToken.toString());
                            localStorage.setItem("lastModifyTime", _this.developer.lastModifyTime.toString());
                            localStorage.setItem("createTime", _this.developer.createTime.toString());
                            _this.router.navigate([localStorage.getItem("redirectUrl")]);
                        } else {
                            _this.developer = {
                                id: res.data.data.id,
                                developerUsername: res.data.data.developerUsername,
                                developerEmail: res.data.data.developerEmail,
                                developerPhone: res.data.data.developerPhone,
                                developerToken: res.data.data.developerToken,
                                lastModifyTime: res.data.data.lastModifyTime,
                                createTime: res.data.data.createTime
                            };
                            localStorage.setItem("id", _this.developer.id.toString());
                            localStorage.setItem("developerUsername", _this.developer.developerUsername.toString());
                            localStorage.setItem("developerEmail", _this.developer.developerEmail.toString());
                            localStorage.setItem("developerPhone", _this.developer.developerPhone.toString());
                            localStorage.setItem("developerToken", _this.developer.developerToken.toString());
                            localStorage.setItem("lastModifyTime", _this.developer.lastModifyTime.toString());
                            localStorage.setItem("createTime", _this.developer.createTime.toString());
                            if (localStorage.getItem("redirectUrl") !== null) {
                                _this.router.navigate([localStorage.getItem("redirectUrl")]);
                            } else {
                                _this.router.navigate(['dashboard']);
                            }
                        }
                    });
                };
                LoginComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-login',
                        template: __webpack_require__( /*! ./login.component.html */ "./src/app/login/login/login.component.html"),
                        styles: [__webpack_require__( /*! ./login.component.css */ "./src/app/login/login/login.component.css")]
                    }),
                    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_devops_service__WEBPACK_IMPORTED_MODULE_1__["DevopsService"]])
                ], LoginComponent);
                return LoginComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/mock/mock.service.ts":
        /*!**************************************!*\
          !*** ./src/app/mock/mock.service.ts ***!
          \**************************************/
        /*! exports provided: MockService */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "MockService", function() { return MockService; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _domain_envVariale_domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../domain/envVariale.domain */ "./src/app/domain/envVariale.domain.ts");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };


            var MockService = /** @class */ (function() {
                function MockService() {}
                MockService.prototype.getEnvs = function() {
                    var envs = [];
                    envs.push(new _domain_envVariale_domain__WEBPACK_IMPORTED_MODULE_1__["EnvVariable"](1, 'PORT', '8231'));
                    envs.push(new _domain_envVariale_domain__WEBPACK_IMPORTED_MODULE_1__["EnvVariable"](2, 'GROUP', 'b2b_gcy'));
                    envs.push(new _domain_envVariale_domain__WEBPACK_IMPORTED_MODULE_1__["EnvVariable"](3, 'API_HOST', 'gw-gcy.b2b-gcy.jcloudec.com'));
                    envs.push(new _domain_envVariale_domain__WEBPACK_IMPORTED_MODULE_1__["EnvVariable"](4, 'LANG', 'zh_CN.UTF-8'));
                    envs.push(new _domain_envVariale_domain__WEBPACK_IMPORTED_MODULE_1__["EnvVariable"](5, 'STATIC_DOMAIN', 'static-gcy.b2b-gcy.jcloudec.com'));
                    return envs;
                };
                MockService = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
                        providedIn: 'root'
                    }),
                    __metadata("design:paramtypes", [])
                ], MockService);
                return MockService;
            }());



            /***/
        }),

        /***/
        "./src/app/profile/left/left.component.css":
        /*!*************************************************!*\
          !*** ./src/app/profile/left/left.component.css ***!
          \*************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "\n#left-l-nav{\n    display: block;color: #aaa;height: 3em;line-height: 3em;\n    padding: 0;\n    padding-left: 1em;\n    margin:0; \n    font-weight: bolder;\n}\n\n#left-nav{\n    display: block;color: #888;height: 3em;line-height: 3em;\n    padding: 0;\n    padding-left: 2em;\n    margin:0; \n}\n\n#left-nav:hover{\n    background-image: linear-gradient(90deg,#1861D5 0,#3080FE 100%);\n    border-radius: 6px;\n    box-shadow: 0 0 0 rgba(0,0,0,.1);\n    color: #fff;\n    display: block;\n    height: 3em;line-height: 3em;\n}\n\n#left-nav-active{\n    background: gray;\n    padding-left: 1em;\n    display: block;color: #fff;font-size:1.2em;height: 3em;line-height: 3em;\n}\n"

            /***/
        }),

        /***/
        "./src/app/profile/left/left.component.html":
        /*!**************************************************!*\
          !*** ./src/app/profile/left/left.component.html ***!
          \**************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<div class=\"col-md-1\" style=\"background: transparent;height: 100%;padding: 0;\">\n    <!-- <p class=\"col-md-12\" style=\"height:4em;line-height:4em;color:#fff;background:rgb(74, 74, 74);text-align:center;font-weight:bolder;margin:0;padding:0;\">概览</p>\n    <ul class=\"col-md-12\" style=\"display: inline-block;padding: 0;margin:0;\">\n      <a href=\"/dashboard\"><li id=\"left-nav\"><span class=\"glyphicon glyphicon-dashboard\"></span> &nbsp;&nbsp;批量发布</li></a>\n    </ul> -->\n  <!-- <p class=\"col-md-12 uk-primary\" style=\"height:5%;line-height:4em;color:#fff;text-align:center;font-weight:bolder;margin:0;padding:0;\">DEVOPS</p> -->\n  \n  <ul class=\"col-md-12\" style=\"display: inline-block;margin:0;padding:0;padding-left:1em;\">\n      <a href=\"/dashboard\"><li id=\"left-l-nav\" style=\"color:#888;\"></li></a>\n      <li id=\"left-l-nav\" uk-toggle=\"target: #toggle-java\"><span class=\"glyphicon glyphicon-user\"></span>&nbsp;个人中心 <span style=\"float:right;font-size:0.5em;margin-top:1em;\" class=\"glyphicon glyphicon-menu-down\"></span></li>\n      <ul id=\"toggle-java\" style=\"padding:0;margin:0;\">\n          <a href=\"/profile\"><li id=\"left-nav\">个人信息</li></a>\n          <a href=\"/profile\"><li id=\"left-nav\">退出登录</li></a>\n      </ul>\n  </ul>\n</div>\n"

            /***/
        }),

        /***/
        "./src/app/profile/left/left.component.ts":
        /*!************************************************!*\
          !*** ./src/app/profile/left/left.component.ts ***!
          \************************************************/
        /*! exports provided: LeftComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "LeftComponent", function() { return LeftComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            var LeftComponent = /** @class */ (function() {
                function LeftComponent() {}
                LeftComponent.prototype.ngOnInit = function() {};
                LeftComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'profile-left',
                        template: __webpack_require__( /*! ./left.component.html */ "./src/app/profile/left/left.component.html"),
                        styles: [__webpack_require__( /*! ./left.component.css */ "./src/app/profile/left/left.component.css")]
                    }),
                    __metadata("design:paramtypes", [])
                ], LeftComponent);
                return LeftComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/profile/profile-routing.module.ts":
        /*!***************************************************!*\
          !*** ./src/app/profile/profile-routing.module.ts ***!
          \***************************************************/
        /*! exports provided: ProfileRoutingModule */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
            /* harmony import */
            var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./profile/profile.component */ "./src/app/profile/profile/profile.component.ts");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };



            var routes = [{
                path: '',
                component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"]
            }];
            var ProfileRoutingModule = /** @class */ (function() {
                function ProfileRoutingModule() {}
                ProfileRoutingModule = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
                        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
                    })
                ], ProfileRoutingModule);
                return ProfileRoutingModule;
            }());



            /***/
        }),

        /***/
        "./src/app/profile/profile.module.ts":
        /*!*******************************************!*\
          !*** ./src/app/profile/profile.module.ts ***!
          \*******************************************/
        /*! exports provided: ProfileModule */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
            /* harmony import */
            var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./profile/profile.component */ "./src/app/profile/profile/profile.component.ts");
            /* harmony import */
            var _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./profile-routing.module */ "./src/app/profile/profile-routing.module.ts");
            /* harmony import */
            var _left_left_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./left/left.component */ "./src/app/profile/left/left.component.ts");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };





            var ProfileModule = /** @class */ (function() {
                function ProfileModule() {}
                ProfileModule = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
                        imports: [
                            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                            _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileRoutingModule"]
                        ],
                        declarations: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"], _left_left_component__WEBPACK_IMPORTED_MODULE_4__["LeftComponent"]]
                    })
                ], ProfileModule);
                return ProfileModule;
            }());



            /***/
        }),

        /***/
        "./src/app/profile/profile/profile.component.css":
        /*!*******************************************************!*\
          !*** ./src/app/profile/profile/profile.component.css ***!
          \*******************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = ""

            /***/
        }),

        /***/
        "./src/app/profile/profile/profile.component.html":
        /*!********************************************************!*\
          !*** ./src/app/profile/profile/profile.component.html ***!
          \********************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<profile-left></profile-left>\n\n<div class=\"col-md-11\" style=\"padding: 1em;height:5%;display:table-cell;vertical-align:middle;font-weight:bolder;background: transparent;color: #fff;z-index:99;\">\n  <ul class=\"uk-breadcrumb\">\n    <li><a href=\"/dashboard\">DevOps</a></li>\n    <li><a href=\"/profile\">个人中心</a></li>\n    <li><span>个人信息</span></li>\n  </ul>\n</div>\n<div class=\"col-md-11\" style=\"padding: 1em;background: transparent;height: 90%;\">\n  <div class=\"col-md-12\" style=\"background: #fff;height: 100%;border-radius: 6px;\">\n    <div class=\"col-md-12\" style=\"margin-top:2em;margin-bottom: 2em;\">\n      <ul class=\"uk-tab\" uk-tab>\n        <li class=\"uk-active\">\n          <a href=\"#container\"> 个人中心 </a>\n        </li>\n      </ul>\n      <div class=\"col-md-12\" style=\"padding: 1em;\">\n\n        <article class=\"uk-article\">\n          <h1 class=\"uk-article-title\" style=\"color:#999;\" id=\"profile_user\">devops</h1>\n          <h2 id=\"profile_email\" style=\"color:#999;padding: 0;margin: 0;\">yangxingfeng@jd.com</h2>\n          <h2 id=\"profile_phone\" style=\"color:#999;padding: 0;margin: 0;\">15122372903</h2>\n\n        </article>\n\n\n        <button (click)=\"logout()\" class=\"uk-button uk-button-primary\" style=\"margin-top:2em;\">退出登录</button>&nbsp;\n\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"col-md-11\" style=\"padding: 1em;background: transparent;height:5%;text-align: center;\">\n  <span style=\"color:#aaa;\">CENOSTACK.COM 构建敏捷团队</span>&nbsp;&nbsp;\n  <a href=\"Mailto:ecrd-kapioneer@jd.com\" style=\"color:#eee;\">@ecrd-kapioneer</a>&nbsp;&nbsp;\n  <span style=\"color:#aaa;\">V1.7.11 Alpha</span>\n  <span>\n    <span class=\"fa fa-github fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n    <span class=\"fa fa-qq fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n    <span class=\"fa fa-weixin fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n    <span class=\"fa fa-weibo fa-1x\" style=\"color:#aaa;margin-left: 1em;\"></span>\n  </span>\n</div>"

            /***/
        }),

        /***/
        "./src/app/profile/profile/profile.component.ts":
        /*!******************************************************!*\
          !*** ./src/app/profile/profile/profile.component.ts ***!
          \******************************************************/
        /*! exports provided: ProfileComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };


            var ProfileComponent = /** @class */ (function() {
                function ProfileComponent(router) {
                    this.router = router;
                }
                ProfileComponent.prototype.ngOnInit = function() {
                    document.getElementById("profile_user").innerHTML = localStorage.getItem("developerUsername");
                    document.getElementById("profile_email").innerHTML = localStorage.getItem("developerEmail");
                    document.getElementById("profile_phone").innerHTML = localStorage.getItem("developerPhone");
                };
                ProfileComponent.prototype.logout = function() {
                    if (localStorage.getItem('id') !== null &&
                        localStorage.getItem("developerUsername") !== null &&
                        localStorage.getItem("developerEmail") !== null &&
                        localStorage.getItem("developerPhone") !== null &&
                        localStorage.getItem("developerToken") !== null &&
                        localStorage.getItem("lastModifyTime") !== null &&
                        localStorage.getItem("createTime")) {
                        localStorage.clear();
                        this.router.navigate(['/login']);
                    }
                };
                ProfileComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-profile',
                        template: __webpack_require__( /*! ./profile.component.html */ "./src/app/profile/profile/profile.component.html"),
                        styles: [__webpack_require__( /*! ./profile.component.css */ "./src/app/profile/profile/profile.component.css")]
                    }),
                    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
                ], ProfileComponent);
                return ProfileComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/service/api.service.ts":
        /*!****************************************!*\
          !*** ./src/app/service/api.service.ts ***!
          \****************************************/
        /*! exports provided: ApiService */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            var ApiService = /** @class */ (function() {
                function ApiService() {
                    this.BASE_URL = "http://116.196.82.213";
                    // private BASE_URL:string = "http://localhost"
                    this.BASE_PORT = "8089";
                    this.BASE_APP = "devops";
                    this.BASE_NAMESPACE = "";
                }
                ApiService.prototype.getBaseUrl = function() {
                    return this.BASE_URL + ":" + this.BASE_PORT + "/";
                };
                ApiService.prototype.execShell = function() {
                    return this.getBaseUrl() + this.BASE_APP + "/ops";
                };
                ApiService.prototype.api = function() {
                    return this.getBaseUrl() + "api";
                };
                ApiService = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
                        providedIn: 'root'
                    }),
                    __metadata("design:paramtypes", [])
                ], ApiService);
                return ApiService;
            }());



            /***/
        }),

        /***/
        "./src/app/service/auth-guard.service.ts":
        /*!***********************************************!*\
          !*** ./src/app/service/auth-guard.service.ts ***!
          \***********************************************/
        /*! exports provided: AuthGuardService */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
            /* harmony import */
            var _devops_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./devops.service */ "./src/app/service/devops.service.ts");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };



            var AuthGuardService = /** @class */ (function() {
                function AuthGuardService(router, devopsService) {
                    this.router = router;
                    this.devopsService = devopsService;
                }
                AuthGuardService.prototype.ngInit = function() {
                    this.developer = {
                        id: 1,
                        developerUsername: "null",
                        developerEmail: "null",
                        developerPhone: "null",
                        developerToken: "null",
                        lastModifyTime: "null",
                        createTime: "null"
                    };
                };
                AuthGuardService.prototype.canActivate = function(route, state) {
                    var url = state.url;
                    return this.checkLogin(url);
                };
                AuthGuardService.prototype.checkLogin = function(url) {
                    if (localStorage.getItem('id') !== null &&
                        localStorage.getItem("developerUsername") !== null &&
                        localStorage.getItem("developerEmail") !== null &&
                        localStorage.getItem("developerPhone") !== null &&
                        localStorage.getItem("developerToken") !== null &&
                        localStorage.getItem("lastModifyTime") !== null &&
                        localStorage.getItem("createTime")) {
                        this.developer = {
                            id: localStorage.getItem("id"),
                            developerUsername: localStorage.getItem("developerUsername"),
                            developerEmail: localStorage.getItem("developerEmail"),
                            developerPhone: localStorage.getItem("developerPhone"),
                            developerToken: localStorage.getItem("developerToken"),
                            lastModifyTime: localStorage.getItem("lastModifyTime"),
                            createTime: localStorage.getItem("createTime"),
                        };
                        return true;
                    } else {
                        localStorage.setItem('redirectUrl', url);
                        this.router.navigate(['/login']);
                        return false;
                    }
                };
                AuthGuardService = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
                        providedIn: 'root'
                    }),
                    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _devops_service__WEBPACK_IMPORTED_MODULE_2__["DevopsService"]])
                ], AuthGuardService);
                return AuthGuardService;
            }());



            /***/
        }),

        /***/
        "./src/app/service/devops.service.ts":
        /*!*******************************************!*\
          !*** ./src/app/service/devops.service.ts ***!
          \*******************************************/
        /*! exports provided: DevopsService */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "DevopsService", function() { return DevopsService; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./api.service */ "./src/app/service/api.service.ts");
            /* harmony import */
            var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };



            var DevopsService = /** @class */ (function() {
                function DevopsService(http, apiService) {
                    this.http = http;
                    this.apiService = apiService;
                }
                DevopsService.prototype.get = function(method, params) {
                    var url = this.apiService.api();
                    console.log(url);
                    return this.http
                        .get(url, {
                            params: {
                                method: method,
                                params: params
                            }
                        })
                        .toPromise()
                        .then(function(res) {
                            var data = res.json();
                            console.log(data);
                            return data;
                        }).catch(this.handlerError);
                };
                DevopsService.prototype.post = function(method, params) {
                    var url = this.apiService.api();
                    console.log(url);
                    return this.http
                        .post(url, {
                            params: {
                                method: method,
                                params: params
                            }
                        })
                        .toPromise()
                        .then(function(res) {
                            var data = res.json();
                            console.log(data);
                            return data;
                        })
                        .catch(this.handlerError);
                };
                DevopsService.prototype.showModal = function(title, content) {
                    document.getElementById("modal-close-outside").className = "uk-modal uk-open";
                    document.getElementById("modal-close-outside").style.display = "block";
                    document.getElementById("header_tip_top").innerHTML = title;
                    document.getElementById("header_tip").innerHTML = content;
                };
                DevopsService.prototype.handlerError = function(error) {
                    console.log("An error occurred", error);
                    if (document.getElementById("progress") !== null) {
                        document.getElementById("progress").style.display = "none";
                    }
                    document.getElementById("modal-close-outside").className = "uk-modal uk-open";
                    document.getElementById("modal-close-outside").style.display = "block";
                    document.getElementById("header_tip_top").innerHTML = "错误:";
                    document.getElementById("header_tip").innerHTML = eval("(" + error._body + ")").data.msg;
                    return Promise.reject(error.message || error);
                };
                DevopsService = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
                        providedIn: 'root'
                    }),
                    __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
                ], DevopsService);
                return DevopsService;
            }());



            /***/
        }),

        /***/
        "./src/environments/environment.ts":
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * In development mode, for easier debugging, you can ignore zone related error
             * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
             * below file. Don't forget to comment it out in production mode
             * because it will have a performance impact when errors are thrown
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.


            /***/
        }),

        /***/
        "./src/main.ts":
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
            /* harmony import */
            var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */
            var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./environments/environment */ "./src/environments/environment.ts");




            if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
                .catch(function(err) { return console.log(err); });


            /***/
        }),

        /***/
        0:
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/
            (function(module, exports, __webpack_require__) {

            module.exports = __webpack_require__( /*! /home/yangxingfeng/project/devops/ui/src/main.ts */ "./src/main.ts");


            /***/
        })

    },
    [
        [0, "runtime", "vendor"]
    ]
]);
//# sourceMappingURL=main.js.map