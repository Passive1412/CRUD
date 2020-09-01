"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var environment_1 = require("src/environments/environment");
var AuthService = /** @class */ (function () {
    function AuthService(router, http) {
        this.router = router;
        this.http = http;
        this.apiUrl = environment_1.environment.apiUrl + "api/account";
        this._user = new rxjs_1.BehaviorSubject(null);
        this.user$ = this._user.asObservable();
        window.addEventListener('storage', this.storageEventListener.bind(this));
    }
    AuthService.prototype.storageEventListener = function (event) {
        var _this = this;
        if (event.storageArea === localStorage) {
            if (event.key === 'logout-event') {
                this.stopTokenTimer();
                this._user.next(null);
            }
            if (event.key === 'login-event') {
                this.stopTokenTimer();
                this.http.get(this.apiUrl + "/user").subscribe(function (x) {
                    _this._user.next({
                        username: x.username,
                        role: x.role,
                        originalUserName: x.originalUserName
                    });
                });
            }
        }
    };
    AuthService.prototype.ngOnDestroy = function () {
        window.removeEventListener('storage', this.storageEventListener.bind(this));
    };
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        return this.http
            .post(this.apiUrl + "/Login", { username: username, password: password })
            .pipe(operators_1.map(function (x) {
            _this._user.next({
                username: x.username,
                role: x.role,
                originalUserName: x.originalUserName
            });
            _this.setLocalStorage(x);
            _this.startTokenTimer();
            return x;
        }));
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.http
            .post(this.apiUrl + "/Logout", {})
            .pipe(operators_1.finalize(function () {
            _this.clearLocalStorage();
            _this._user.next(null);
            _this.stopTokenTimer();
            _this.router.navigate(['Login']);
        }))
            .subscribe();
    };
    AuthService.prototype.refreshToken = function () {
        var _this = this;
        var refreshToken = localStorage.getItem('refresh_token');
        if (!refreshToken) {
            this.clearLocalStorage();
            return rxjs_1.of(null);
        }
        return this.http
            .post(this.apiUrl + "/refresh-token", { refreshToken: refreshToken })
            .pipe(operators_1.map(function (x) {
            _this._user.next({
                username: x.username,
                role: x.role,
                originalUserName: x.originalUserName
            });
            _this.setLocalStorage(x);
            _this.startTokenTimer();
            return x;
        }));
    };
    AuthService.prototype.setLocalStorage = function (x) {
        localStorage.setItem('access_token', x.accessToken);
        localStorage.setItem('refresh_token', x.refreshToken);
        localStorage.setItem('login-event', 'login' + Math.random());
    };
    AuthService.prototype.clearLocalStorage = function () {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.setItem('logout-event', 'logout' + Math.random());
    };
    AuthService.prototype.getTokenRemainingTime = function () {
        var accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            return 0;
        }
        var jwtToken = JSON.parse(atob(accessToken.split('.')[1]));
        var expires = new Date(jwtToken.exp * 1000);
        return expires.getTime() - Date.now();
    };
    AuthService.prototype.startTokenTimer = function () {
        var _this = this;
        var timeout = this.getTokenRemainingTime();
        this.timer = rxjs_1.of(true)
            .pipe(operators_1.delay(timeout), operators_1.tap(function () { return _this.refreshToken().subscribe(); }))
            .subscribe();
    };
    AuthService.prototype.stopTokenTimer = function () {
        var _a;
        (_a = this.timer) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
