"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var jwt_interceptor_1 = require("./jwt.interceptor");
describe('JwtInterceptor', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({
        providers: [
            jwt_interceptor_1.JwtInterceptor
        ]
    }); });
    it('should be created', function () {
        var interceptor = testing_1.TestBed.inject(jwt_interceptor_1.JwtInterceptor);
        expect(interceptor).toBeTruthy();
    });
});
