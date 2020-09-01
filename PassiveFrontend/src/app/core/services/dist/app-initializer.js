"use strict";
exports.__esModule = true;
exports.appInitializer = void 0;
function appInitializer(authService) {
    return function () {
        return new Promise(function (resolve) {
            console.log('refresh token on app start up');
            authService.refreshToken().subscribe().add(resolve);
        });
    };
}
exports.appInitializer = appInitializer;
