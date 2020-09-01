"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.CoreModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var auth_service_1 = require("./services/auth.service");
var app_initializer_1 = require("./services/app-initializer");
var jwt_interceptor_1 = require("./interceptors/jwt.interceptor");
var unauthorized_interceptor_1 = require("./interceptors/unauthorized.interceptor");
var CoreModule = /** @class */ (function () {
    function CoreModule(core) {
        if (core) {
            throw new Error('Core Module can only be imported to AppModule.');
        }
    }
    CoreModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [common_1.CommonModule],
            providers: [
                {
                    provide: core_1.APP_INITIALIZER,
                    useFactory: app_initializer_1.appInitializer,
                    multi: true,
                    deps: [auth_service_1.AuthService]
                },
                { provide: http_1.HTTP_INTERCEPTORS, useClass: jwt_interceptor_1.JwtInterceptor, multi: true },
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: unauthorized_interceptor_1.UnauthorizedInterceptor,
                    multi: true
                },
            ]
        }),
        __param(0, core_1.Optional()), __param(0, core_1.SkipSelf())
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
