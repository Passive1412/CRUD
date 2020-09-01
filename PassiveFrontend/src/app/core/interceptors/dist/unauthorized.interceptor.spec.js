"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var unauthorized_interceptor_1 = require("./unauthorized.interceptor");
describe('UnauthorizedInterceptor', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({
        providers: [
            unauthorized_interceptor_1.UnauthorizedInterceptor
        ]
    }); });
    it('should be created', function () {
        var interceptor = testing_1.TestBed.inject(unauthorized_interceptor_1.UnauthorizedInterceptor);
        expect(interceptor).toBeTruthy();
    });
});
