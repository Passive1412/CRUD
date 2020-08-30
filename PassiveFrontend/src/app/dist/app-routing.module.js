"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var homepage_component_1 = require("./pages/homepage/homepage.component");
var login_component_1 = require("./pages/login/login.component");
var projects_component_1 = require("./pages/projects/projects.component");
var about_component_1 = require("./pages/about/about.component");
var contact_component_1 = require("./pages/contact/contact.component");
var profile_component_1 = require("./pages/profile/profile.component");
var gallery_component_1 = require("./pages/gallery/gallery.component");
var not_found_component_1 = require("./pages/not-found/not-found.component");
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: homepage_component_1.HomepageComponent },
    { path: 'About', component: about_component_1.AboutComponent },
    { path: 'Contact', component: contact_component_1.ContactComponent },
    { path: 'Gallery', component: gallery_component_1.GalleryComponent },
    { path: 'Projects', component: projects_component_1.ProjectsComponent },
    { path: 'Profile', component: profile_component_1.ProfileComponent },
    { path: 'Login', component: login_component_1.LoginComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
