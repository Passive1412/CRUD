"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UnauthorizedInterceptor = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var environment_1 = require("src/environments/environment");
var UnauthorizedInterceptor = /** @class */ (function () {
    function UnauthorizedInterceptor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    UnauthorizedInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(operators_1.catchError(function (err) {
            if (err.status === 401) {
                _this.authService.clearLocalStorage();
                _this.router.navigate(['login'], {
                    queryParams: { returnUrl: _this.router.routerState.snapshot.url }
                });
            }
            if (!environment_1.environment.production) {
                console.error(err);
            }
            var error = (err && err.error && err.error.message) || err.statusText;
            return rxjs_1.throwError(error);
        }));
    };
    UnauthorizedInterceptor = __decorate([
        core_1.Injectable()
    ], UnauthorizedInterceptor);
    return UnauthorizedInterceptor;
}());
exports.UnauthorizedInterceptor = UnauthorizedInterceptor;
