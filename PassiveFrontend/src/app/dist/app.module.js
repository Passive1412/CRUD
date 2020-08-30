"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var homepage_component_1 = require("./pages/homepage/homepage.component");
var login_component_1 = require("./pages/login/login.component");
var projects_component_1 = require("./pages/projects/projects.component");
var about_component_1 = require("./pages/about/about.component");
var contact_component_1 = require("./pages/contact/contact.component");
var profile_component_1 = require("./pages/profile/profile.component");
var not_found_component_1 = require("./pages/not-found/not-found.component");
var navigation_component_1 = require("./front/navigation/navigation.component");
var header_component_1 = require("./front/header/header.component");
var banners_component_1 = require("./front/banners/banners.component");
var gallery_component_1 = require("./pages/gallery/gallery.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                homepage_component_1.HomepageComponent,
                login_component_1.LoginComponent,
                projects_component_1.ProjectsComponent,
                about_component_1.AboutComponent,
                contact_component_1.ContactComponent,
                profile_component_1.ProfileComponent,
                not_found_component_1.NotFoundComponent,
                navigation_component_1.NavigationComponent,
                header_component_1.HeaderComponent,
                banners_component_1.BannersComponent,
                gallery_component_1.GalleryComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
