"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, authService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.busy = false;
        this.username = '';
        this.password = '';
        this.loginError = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.authService.user$.subscribe(function (x) {
            if (_this.route.snapshot.url[0].path === 'login') {
                var accessToken = localStorage.getItem('access_token');
                var refreshToken = localStorage.getItem('refresh_token');
                if (x && accessToken && refreshToken) {
                    var returnUrl = _this.route.snapshot.queryParams['returnUrl'] || '';
                    _this.router.navigate([returnUrl]);
                }
            } // optional touch-up: if a tab shows login page, then refresh the page to reduce duplicate login
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (!this.username || !this.password) {
            return;
        }
        this.busy = true;
        var returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
        this.authService
            .login(this.username, this.password)
            .pipe(operators_1.finalize(function () { return (_this.busy = false); }))
            .subscribe(function () {
            _this.router.navigate([returnUrl]);
        }, function () {
            _this.loginError = true;
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        var _a;
        (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
