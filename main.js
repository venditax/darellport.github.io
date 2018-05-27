(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: fade_1, fade_2, fade_3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade_1", function() { return fade_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade_2", function() { return fade_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade_3", function() { return fade_3; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fade_1 = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('small => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-50%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('large => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-50%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500)
    ])
]);
var fade_2 = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade2', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('small => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-50%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(600)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('large => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-50%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('large => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-50%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500)
    ])
]);
var fade_3 = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade3', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('small => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-50%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(700)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('large => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-50%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500)
    ])
]);


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-myportfolio></app-myportfolio>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_myportfolio_myportfolio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/myportfolio/myportfolio.component */ "./src/app/components/myportfolio/myportfolio.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_myportfolio_myportfolio_component__WEBPACK_IMPORTED_MODULE_4__["MyportfolioComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/myportfolio/myportfolio.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/myportfolio/myportfolio.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Lato');\r\n@import url('https://fonts.googleapis.com/css?family=Shojumaru');\r\n@import url('https://fonts.googleapis.com/css?family=Open+Sans');\r\n#navigation{\r\n    background: #151516;\r\n}\r\nh5.text-secondary{\r\n    font-family: 'Shojumaru', cursive;\r\n}\r\n#home {\t\r\n\tcolor: #fff;\r\n    background: linear-gradient(-45deg, #990101,#005400, #010169, #774b06);\r\n    /* background: linear-gradient(-45deg, black,#111113, #1d1d1d, #353535); */\r\n\tbackground-size: 400% 400%;\r\n\t-webkit-animation: Gradient 15s ease infinite;\r\n\tanimation: Gradient 15s ease infinite;\r\n}\r\n#home .backg-black{\r\n    padding: 30px 0 100px 0;\r\n    background: rgba(4, 4, 4, 0.09);\r\n}\r\n#home img{\r\n    width: 250px;\r\n    height: 250px;\r\n    border-radius: 50%;\r\n    border: 5px solid #f26c4f;\r\n    margin-bottom: 20px;\r\n}\r\n@-webkit-keyframes Gradient {\r\n\t0% {background-position: 0% 50%}\r\n\t50% {background-position: 100% 50%}\r\n\t100% {background-position: 0% 50%}\r\n}\r\n@keyframes Gradient {\r\n\t0% {background-position: 0% 50%}\r\n\t50% {background-position: 100% 50%}\r\n\t100% {background-position: 0% 50%}\r\n}\r\np, h2, h3, h4, h5, a{\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\nh3{\r\n    text-shadow: 2px 2px #6b6b6b;\r\n}\r\nh1.display-4{\r\n    font-family: 'Lato', sans-serif;\r\n    color: #f26c4f;\r\n    font-size: 50px;\r\n}\r\n.text-secondary{\r\n    color: #a5a5a5 !important;\r\n}\r\na{\r\n    text-decoration: none;\r\n}\r\n#home h2{\r\n    font-size: 5rem;\r\n}\r\n#home h4{\r\n    font-weight: 400;\r\n}\r\n/* ABOUT */\r\n#about img{\r\n    height: 150px;\r\n}\r\n#about .album.py-5.bg-light{\r\n    background: url('/assets/img/gplaypattern.png')!important;\r\n}\r\n.card-header{\r\n    background: #3089c5;\r\n    color: #fff;\r\n}\r\n.card-img-top{\r\n    border-top-right-radius: unset;\r\n}\r\n/* EDUCATION */\r\n/* EXPERIECE */\r\n#education ul, #experience ul, #skills ul, #award ul{\r\n    list-style: none;\r\n}\r\n#education ul.my-list li, #experience ul.my-list li,  #skills ul.my-list li, #award ul.my-list li{\r\n    width: 75%;\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n    margin: 0 auto;\r\n    /* margin-top: 50px; */\r\n    border-radius: 3px;\r\n}\r\n#education ul.my-list li .list-content, #experience ul.my-list li .list-content, #skills ul.my-list li .list-content, #award ul.my-list li .list-content{\r\n    padding: 20px;\r\n}\r\n#education ul.education-details li, #experience ul.experience-details li, #skills ul.skills-details li, #award ul.award-details li{\r\n    box-shadow: none;\r\n    border-radius: none;\r\n    width: 100%;\r\n}\r\n/* SKILLS */\r\n/* AWARD */\r\n/* OFFER */\r\n#offer{\r\n    background-image: linear-gradient(to right top, #161616, #252525, #363535, #474646, #595757);\r\n    color: #fff;\r\n}\r\n#offer i{\r\n    font-size: 50px;\r\n}\r\n#offer p{\r\n    font-size: 20px;\r\n}\r\n/* PROJECT */\r\n#project{\r\n    padding-bottom: 50px;\r\n}\r\n#project h1{\r\n    margin-bottom: 50px;\r\n}\r\n/* HIRE ME */\r\n#hireme{\r\n    background: url('/assets/img/Offer.png');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    color: #fff;\r\n    padding-bottom: 30px;\r\n    height: 450px;\r\n}\r\n#hireme p{\r\n    margin-top: 100px;\r\n    margin-bottom: 50px;\r\n}\r\n#hireme .btn, .footer .btn{\r\n    background: #f26c4f;\r\n    color: #fff;\r\n    margin-top: 20px;\r\n}\r\n#hireme .btn:hover, .footer .btn:hover{\r\n    background: #fe603d;\r\n}\r\n#hireme .btn:focus, #hirem .btn.focus, .footer .btn:focus, .footer .btn.focus{\r\n    box-shadow: none;\r\n    background: #ff9b86;\r\n}\r\n/* MODAL */\r\n.modal-dialog{\r\n    max-width: 80%!important;\r\n}\r\n.modal-header{\r\n    background: #3089c5;\r\n    color: #fff;\r\n}\r\n/* FOOTER */\r\n.footer{\r\n    padding: 50px;\r\n    background-image: radial-gradient(circle, #2a2a2a, #252525, #202020, #1b1b1b, #161616);\r\n    color: #fff;\r\n}\r\n.footer h4{\r\n    font-size: 30px;\r\n    font-weight: 300;\r\n    margin-bottom: 20px;\r\n}\r\n/* MEDIA QUERIES */\r\n/*// Extra small devices (portrait phones, less than 576px)*/\r\n@media (max-width: 575.98px) { \r\n    #home h2{\r\n        font-size: 46px;\r\n    }\r\n    nav{\r\n        display: none;\r\n    }\r\n\r\n    /* MODAL */\r\n    .modal-dialog{\r\n        max-width: 100%!important;\r\n    }\r\n    ul.my-list{\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n    /* CARD */\r\n    .cardWrapper .card p{\r\n        position: relative;\r\n        top: 40px;\r\n        font-size: 14px;\r\n        margin-bottom: 0;\r\n        line-height: 1.3;\r\n    }\r\n    #project h1{\r\n        margin-bottom: 0px;\r\n    }\r\n    #secondCard{\r\n        margin-top: 0px;\r\n    }\r\n\r\n    /* FLOATING BUTTON */\r\n    #floating-button{\r\n        right: 9px;\r\n    }\r\n    .nd1, .nd3, .nd4, .nd5{\r\n        right: 18px;\r\n    }\r\n}\r\n/*// Small devices (landscape phones, 576px and up)*/\r\n@media (min-width: 576px) and (max-width: 767.98px) {\r\n    nav{\r\n        display: none;\r\n    }\r\n\r\n    /* MODAL */\r\n    .modal-dialog{\r\n        max-width: 95%!important;\r\n    }\r\n    ul.my-list{\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n    \r\n    /* CARD */\r\n    #project h1{\r\n        margin-bottom: 0px;\r\n    }\r\n    #secondCard{\r\n        margin-top: 0px;\r\n    }\r\n\r\n    #floating-button{\r\n        right: 9px;\r\n    }\r\n    .nd1, .nd3, .nd4, .nd5{\r\n        right: 18px;\r\n    }\r\n}\r\n/*// Medium devices (tablets, 768px and up)*/\r\n@media (min-width: 768px) and (max-width: 991.98px) {\r\n    #floating-button{\r\n        display: none;\r\n    }\r\n    .backg-black{\r\n        padding: 0!important;\r\n    }\r\n    /* CARD */\r\n    .cardWrapper h3{\r\n        font-size: 21px;\r\n    }\r\n    #about h4{\r\n        font-size: 19px;\r\n        min-height: 45px;\r\n    }\r\n    \r\n }\r\n/*// Large devices (desktops, 992px and up)*/\r\n@media (min-width: 992px) and (max-width: 1199.98px) { \r\n    #floating-button{\r\n        display: none;\r\n    }\r\n }\r\n/*// Extra large devices (large desktops, 1200px and up)*/\r\n@media (min-width: 1200px) {  \r\n    #floating-button{\r\n        display: none;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/components/myportfolio/myportfolio.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/myportfolio/myportfolio.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 box-shadow site-header sticky-top py-1\" id=\"navigation\">\n  <h5 class=\"my-0 mr-md-auto font-weight-normal text-secondary\">DP</h5>\n  <nav class=\"my-2 my-md-0 mr-md-3\">\n    <a class=\"p-2 text-secondary {{navlist}}\" *ngFor='let navlist of menuLists' href='#{{navlist}}'>{{navlist}}</a>\n  </nav>\n  <!-- <a class=\"btn btn-outline-primary\" href=\"#\">Sign up</a> -->\n</div>\n<div id=\"home\">\n <div class=\"backg-black\">\n    <div class=\"container\">\n        <div class=\"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center\">\n          <img src=\"{{profilepic}}\" alt=\"profile-pic\">\n            <h1 class=\"display-4\">Darell Porlares</h1>\n            <h4>SOFTWARE</h4>\n            <h2>DEVELOPER</h2>\n          </div>\n      </div>\n </div>\n</div>\n<div id=\"about\">\n  <div class=\"container\">\n    <!-- ABOUT ME -->\n    <div class=\"about px-3 py-3 pt-md-5 pb-md-4 mx-auto\">\n        <h1 class=\"display-4 text-center\">An Introduction About Me</h1>\n       <p class=\"text-justify\">Hi I'm Darell Porlares, a Software Developer with over 3 years of experience in Development. I have an experiences on creating a Website, Mobile or Standalone Systems. Has ability to perform in a team environment, solid understanding of MVC Architecture and Object Oriented design principles, clean and write structured documented code, understand existing code and accept new challenges when it comes to development.</p>\n      </div>\n<!-- CARD ABOUT ME -->\n   <div class=\"album py-5 bg-light\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-md-6 col-sm-6\">\n          <div class=\"card mb-4 box-shadow\">\n              <div class=\"card-header\">\n                  <h4 class=\"my-0 font-weight-normal text-center\">Education</h4>\n                </div>\n            <img class=\"card-img-top\" data-src=\"{{education}}\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <!-- <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->\n              <div class=\"d-flex justify-content-between align-items-center\">\n                <div class=\"btn-group\">\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-toggle=\"modal\" data-target=\"#education\" (click)=\"animateMe()\">View</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6 col-sm-6\">\n          <div class=\"card mb-4 box-shadow\">\n              <div class=\"card-header\">\n                  <h4 class=\"my-0 font-weight-normal text-center\">Experience</h4>\n                </div>\n            <img class=\"card-img-top\" data-src=\"{{experience}}\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <!-- <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->\n              <div class=\"d-flex justify-content-between align-items-center\">\n                <div class=\"btn-group\">\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-toggle=\"modal\" data-target=\"#experience\"(click)=\"animateMe()\">View</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6 col-sm-6\">\n          <div class=\"card mb-4 box-shadow\">\n              <div class=\"card-header\">\n                  <h4 class=\"my-0 font-weight-normal text-center\">Technical Skills</h4>\n                </div>\n            <img class=\"card-img-top\" data-src=\"{{skills}}\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <!-- <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->\n              <div class=\"d-flex justify-content-between align-items-center\">\n                <div class=\"btn-group\">\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-toggle=\"modal\" data-target=\"#skills\" (click)=\"animateMe()\">View</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6 col-sm-6\">\n          <div class=\"card mb-4 box-shadow\">\n              <div class=\"card-header\">\n                  <h4 class=\"my-0 font-weight-normal text-center\">Certification</h4>\n                </div>\n            <img class=\"card-img-top\" data-src=\"{{award}}\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <!-- <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->\n              <div class=\"d-flex justify-content-between align-items-center\">\n                <div class=\"btn-group\">\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-toggle=\"modal\" data-target=\"#award\" (click)=\"animateMe()\">View</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n    </div>\n  </div>\n  </div>\n</div>\n  <!-- CARD ABOUT ME -->\n<!-- END ABOUT -->\n<!-- WHAT I CAN OFFER YOU -->\n<div id=\"offer\">\n  <div class=\"container\">\n    <div class=\"about px-3 py-3 pt-md-5 pb-md-4 mx-auto\">\n        <h1 class=\"display-4 text-center\">What I Can Offer</h1>\n        <div class=\"row\">\n          <div class=\"col-md-6 text-center\">\n            <h2><i class=\"fa fa-code\"></i></h2>\n            <p>Write clean code structured and well documented code</p>\n            <p>Learn and accept new challenges</p>\n            <p>Able to work with minimum supervision</p>\n            <p>Strong problem solver and critical thinking skills</p>\n          </div>\n          <div class=\"col-md-6 text-center\">\n            <h2><i class=\"fa fa-code-fork\"></i></h2>\n            <p>Optimizing code of application to maximum speed</p>\n            <p>Understand REST API and design</p>\n            <p>Debug and modify codes</p>\n            <p>Experience in front-end and back-end programming language</p>\n          </div>\n        </div>\n      </div>\n      <!-- END WHAT I CAN OFFER YOU -->\n  </div>\n</div>\n<!-- PROJECT -->\n<div id=\"project\">\n  <div class=\"container\">\n      <div class=\"about px-3 py-3 pt-md-5 pb-md-4 mx-auto\">\n          <h1 class=\"display-4 text-center\">My Project</h1>\n          <div class=\"cardWrapper\">\n              <!-- first Row -->\n              <div class=\"row\">\n                  <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6 cardContainer\">\n                    <div class=\"card\">\n                      <div class=\"front\"><h3 class=\"cardTitle\">Inventory Website System</h3></div>\n                      <div class=\"back\">\n                        <div class=\"content\">\n                          <p>Developed an Inventory Website System using Laravel 5.3 Framework, AngularJS, Bootstrap, CC3, JavaScript/Jquery, Photoshop and PHP Programming Language.</p>\n                          <br/>\n                          <p id=\"happy\"></p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n      \n                   <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6 cardContainer\">\n                    <div class=\"card\">\n                      <div class=\"front\"><h3 class=\"cardTitle\">Facial Recognition</h3></div>\n                      <div class=\"back\">\n                        <div class=\"content\">\n                          <p>Developed a Stand Alone System where it can detect the personal information of the person who enters to that establishment using EmguCV, C#, Unity Engine, Visual Studio\n                            and Monodevelop.</p>\n                          <br/>\n                          <p id=\"laugh\"></p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n      \n                  <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6 cardContainer\">\n                    <div class=\"card\">\n                      <div class=\"front\"><h3 class=\"cardTitle\">Web Application</h3></div>\n                      <div class=\"back\">\n                        <div class=\"content\">\n                          <p>Developed Web Application for creating blueprint of an empty\n                            establishment using AngularJS, Bootstrap, PHP, CSS3,\n                            Javascrtip/Jquery and Laravel 5.3</p>\n                          <br/>\n                          <p id=\"sick\"></p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n      \n                  <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6 cardContainer\">\n                    <div class=\"card\">\n                      <div class=\"front\"><h3 class=\"cardTitle\">Mobile Application</h3></div>\n                      <div class=\"back\">\n                        <div class=\"content\">\n                          <p>Developed Mobile Application that is capable in cross platform\n                            (Android and IoS) using Command Prompt, Github, Cordova\n                            Ionic, Unity Game Engine, C#, AngularJS, HTML5 and CSS3</p>\n                          <br/>\n                          <p id=\"sad\"></p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n              </div>\n              <!-- first Row End -->\n          </div><!--cardWrapper Ends-->\n\n          <div class=\"cardWrapper\" id=\"secondCard\">\n            <!-- first Row -->\n            <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6 cardContainer\">\n                  <div class=\"card\">\n                    <div class=\"front\"><h3 class=\"cardTitle\">Cpanel Integration</h3></div>\n                    <div class=\"back\">\n                      <div class=\"content\">\n                        <p>Developed a website system for CPanel Integration using Bitvise\n                          for connecting the server, Sublime Text 3, JavaScript and PHP\n                          Programming Language</p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n    \n                 <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6 cardContainer\">\n                  <div class=\"card\">\n                    <div class=\"front\"><h3 class=\"cardTitle\">ASP.Net site that converted into PHP</h3></div>\n                    <div class=\"back\">\n                      <div class=\"content\">\n                        <p>Trace code from ASP.Net and converted it to PHP using Laravel\n                          5.3 Framework, Xampp, Composer, Command Prompt, Sublime\n                          text 3, HTML5, Jquery, CSS3, PHP Programming Language, C#\n                          and Visual Studio 2013</p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n    \n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6 cardContainer\">\n                  <div class=\"card\">\n                    <div class=\"front\"><h3 class=\"cardTitle\">CSV to Woocommerce Data</h3></div>\n                    <div class=\"back\">\n                      <div class=\"content\">\n                        <p>Developed a wordpress plugin where multiple CSV file will\n                          merge into one and converted it into the product of existing\n                          plugin of wordpress using Xampp,HTML5, JavaScript, Ajax, CSS3\n                          and PHP Programming Language.</p>\n                        <br/>\n                        <p id=\"sick\"></p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n    \n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6 cardContainer\">\n                  <div class=\"card\">\n                    <div class=\"front\"><h3 class=\"cardTitle\">Social Review</h3></div>\n                    <div class=\"back\">\n                      <div class=\"content\">\n                        <p>Developed wordpress plugin for social review of the page using PHP, JQuery, Javscript and Bootstrap,</p>\n                        <br/>\n                        <p id=\"sad\"></p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n            </div>\n            <!-- first Row End -->\n        </div><!--cardWrapper Ends-->\n\n      </div>\n  </div>\n</div>\n<!-- END PROJECT -->\n<!-- HIRE ME -->\n<div id=\"hireme\">\n  <div class=\"container\">\n      <div class=\"about px-3 py-3 pt-md-5 pb-md-4 mx-auto\">\n          <h1 class=\"display-4 text-center\">Contact Me</h1>\n          <p class=\"text-center\">You can send your email at <br>21darellporlares@gmail.com</p>\n          <div class=\"row\">\n            <div class=\"col-md-2\"></div>\n            <div class=\"col-md-8\">\n              <!-- <form>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                          <input type=\"text\" class=\"form-control\" id=\"companyName\" placeholder=\"Company Name\">\n                        </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n                        <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n                      </div>\n                  </div>\n                </div>\n                \n                    <div class=\"form-group\">\n                      <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" placeholder=\"Message\"></textarea>\n                    </div>\n                <div class=\"text-center\">\n                    <button type=\"submit\" class=\"btn\">Drop me a line</button>\n                </div>\n              </form> -->\n            </div>\n            <div class=\"col-md-2\"></div>\n          </div>\n      </div>\n  </div>\n</div>\n<!-- END HIRE ME -->\n\n<!-- Modal -->\n<!-- EDUCATION -->\n<div class=\"modal fade\" id=\"education\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Education</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <!-- EDUCATION BODY -->\n        <ul class=\"my-list\"> \n            <!-- [@fade]='state' (click)=\"animateMe()\"          -->\n          <li [@fade]='fade_1'>\n            <div class=\"list-content\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"position text-left\">Elementary</div>\n                  </div>\n                </div>\n              <hr>\n              <div class=\"education-content\">\n                <p class=\"company-details text-center font-weight-bold\">Maputi Elementary School</p>\n                <p class=\"text-center\">1995-2001</p>\n                <p class=\"text-center\">Maputi Banaybanay Davao Oriental</p>\n              </div>\n            </div>\n          </li>\n          <li [@fade2]='fade_1'>\n            <div class=\"list-content\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"position text-left\">Secondary</div>\n                </div>\n              </div>\n            <hr>\n            <div class=\"education-content\">\n              <p class=\"company-details text-center font-weight-bold\">Banaybanay National High School</p>\n              <p class=\"text-center\">2001-2005</p>\n              <p class=\"text-center\">Banaybanay Davao Oriental</p>\n            </div>\n          </div>\n          </li>\n          <li [@fade3]='fade_1'>\n            <div class=\"list-content\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"position text-left\">Tertiary</div>\n                  </div>\n                </div>\n              <hr>\n              <div class=\"education-content\">\n                <p class=\"company-details text-center font-weight-bold\">University of Mindanao</p>\n                <p class=\"text-center\">2008-2016</p>\n                <p class=\"text-center\">Matina, Davao City</p>\n                <p class=\"text-center\">BS in Information Technology</p>\n              </div>\n            </div>            \n          </li> \n        </ul>\n        <!-- END EDUCATION BODY -->\n      </div>\n    </div>\n  </div>\n</div>\n<!-- END EDUCATION -->\n<!-- EXPERIENCE -->\n<div class=\"modal fade\" id=\"experience\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Experience</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <ul class=\"my-list\">          \n            <!-- [@fade]='fade_1' -->\n          <li [@fade]='fade_1'>\n            <div class=\"list-content\">\n              <div class=\"experience-content\">\n                <p class=\"text-center font-weight-bold\" >PHP</p>\n                <p class=\"text-center\">Exp: 24 Months | Last Used : currently using</p>\n                <hr>\n                <p class=\"text-center font-weight-bold\">C#/ASP.net</p>\n                <p class=\"text-center\">Exp: 9 Months | Last Used : 11 months ago</p>\n                <hr>\n                <p class=\"text-center font-weight-bold\">Java</p>\n                <p class=\"text-center\">Exp: 4 Months | Last Used : 9 months ago</p>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- END EXPERIENCE -->\n<!-- SKILLS -->\n<div class=\"modal fade\" id=\"skills\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Technical Skills</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <ul class=\"my-list\">          \n          <li [@fade]='fade_1'>\n            <div class=\"list-content\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"company\">Programming Language</div>\n                  </div>\n                </div>\n              <hr>\n              <div class=\"skills-content\">  \n                <!-- SKILLS LIST  -->\n                <div class=\"row\">\n                  <div class=\"col-md-3\">\n                      <div class=\"title-skills-php\">\n                          <p class=\"text-center\">PHP</p>\n                      <div class=\"progress\">\n                          <div class=\"progress-bar bg-success\" id=\"phpskills\"style=\"width: 95%;\">95%</div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3\">\n                      <div class=\"title-skills-cs\">\n                          <p class=\"text-center\">C#</p>\n                      <div class=\"progress\">\n                          <div class=\"progress-bar bg-success\" id=\"csskills\"style=\"width: 85%;\">85%</div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3\">\n                      <div class=\"title-skills-asp\">\n                          <p class=\"text-center\">ASP.net</p>\n                      <div class=\"progress\">\n                          <div class=\"progress-bar bg-success\" id=\"aspskills\"style=\"width: 85%;\">85%</div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3\">\n                      <div class=\"title-skills-java\">\n                          <p class=\"text-center\">Java</p>\n                      <div class=\"progress\">\n                          <div class=\"progress-bar bg-success\" id=\"javaskills\"style=\"width: 80%;\">80%</div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3\">\n                      <div class=\"title-skills-vb\">\n                          <p class=\"text-center\">Visual Basic</p>\n                      <div class=\"progress\">\n                          <div class=\"progress-bar bg-success\" id=\"vbskills\"style=\"width: 80%;\">80%</div>\n                      </div>\n                    </div>\n                  </div>                \n                  </div>\n                <!-- END SKILLS LIST  -->\n              </div>\n            </div>\n          </li>\n    <li [@fade2]='fade_1'>\n        <div class=\"list-content\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"company\">Web Development</div>\n              </div>\n            </div>\n          <hr>\n          <div class=\"skills-content\">  \n            <!-- SKILLS LIST  -->\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                  <div class=\"title-skills-html\">\n                      <p class=\"text-center\">HTML5</p>\n                  <div class=\"progress\">\n                      <div class=\"progress-bar bg-success\" id=\"htmlskills\"style=\"width: 90%;\">90%</div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-3\">\n                  <div class=\"title-skills-css\">\n                      <p class=\"text-center\">CSS3</p>\n                  <div class=\"progress\">\n                      <div class=\"progress-bar bg-success\" id=\"cssskills\"style=\"width: 85%;\">85%</div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-3\">\n                <div class=\"title-skills-bootstrap\">\n                    <p class=\"text-center\">Bootstrap</p>\n                <div class=\"progress\">\n                    <div class=\"progress-bar bg-success\" id=\"bootstrapskills\"style=\"width: 85%;\">85%</div>\n                </div>\n              </div>\n            </div>      \n              <div class=\"col-md-3\">\n                  <div class=\"title-skills-jscript\">\n                      <p class=\"text-center\">Javascript</p>\n                  <div class=\"progress\">\n                      <div class=\"progress-bar bg-success\" id=\"jscriptskills\"style=\"width: 85%;\">85%</div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-3\">\n                  <div class=\"title-skills-jq\">\n                      <p class=\"text-center\">JQuery</p>\n                  <div class=\"progress\">\n                      <div class=\"progress-bar bg-success\" id=\"jqskills\"style=\"width: 85%;\">85%</div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-3\">\n                  <div class=\"title-skills-angular\">\n                      <p class=\"text-center\">Angular</p>\n                  <div class=\"progress\">\n                      <div class=\"progress-bar bg-success\" id=\"angularskills\"style=\"width: 85%;\">85%</div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-3\">\n                  <div class=\"title-skills-vue\">\n                      <p class=\"text-center\">VueJs</p>\n                  <div class=\"progress\">\n                      <div class=\"progress-bar bg-success\" id=\"vueskills\"style=\"width: 85%;\">85%</div>\n                  </div>\n                </div>\n              </div>         \n              </div>\n            <!-- END SKILLS LIST  -->\n          </div>\n        </div>\n      </li>\n  <li [@fade3]='fade_1'>\n      <div class=\"list-content\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"company\">Database</div>\n            </div>\n          </div>\n        <hr>\n        <div class=\"skills-content\">  \n          <!-- SKILLS LIST  -->\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"title-skills-mysql\">\n                    <p class=\"text-center\">MySQL</p>\n                <div class=\"progress\">\n                    <div class=\"progress-bar bg-success\" id=\"mysqlskills\"style=\"width: 80%;\">80%</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"title-skills-mssql\">\n                    <p class=\"text-center\">MSSQL</p>\n                <div class=\"progress\">\n                    <div class=\"progress-bar bg-success\" id=\"msqlskills\"style=\"width: 80%;\">80%</div>\n                </div>\n              </div>\n            </div>              \n            </div>\n          <!-- END SKILLS LIST  -->\n        </div>\n      </div>\n    </li>\n\n    <li>\n        <div class=\"list-content\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"company\">CMS</div>\n              </div>\n            </div>\n          <hr>\n          <div class=\"skills-content\">  \n            <!-- SKILLS LIST  -->\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                  <div class=\"title-skills-wordpress\">\n                      <p class=\"text-center\">Wordpress</p>\n                  <div class=\"progress\">\n                      <div class=\"progress-bar bg-success\" id=\"wordpressskills\"style=\"width: 90%;\">90%</div>\n                  </div>\n                </div>\n              </div>               \n              </div>\n            <!-- END SKILLS LIST  -->\n          </div>\n        </div>\n      </li>\n      <li>\n          <div class=\"list-content\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"company\">MVC</div>\n                </div>\n              </div>\n            <hr>\n            <div class=\"skills-content\">  \n              <!-- SKILLS LIST  -->\n              <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <div class=\"title-skills-laravel\">\n                        <p class=\"text-center\">Laravel 5</p>\n                    <div class=\"progress\">\n                        <div class=\"progress-bar bg-success\" id=\"laravelskills\"style=\"width: 90%;\">90%</div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"title-skills-ci\">\n                        <p class=\"text-center\">CodeIgniter</p>\n                    <div class=\"progress\">\n                        <div class=\"progress-bar bg-success\" id=\"ciskills\"style=\"width: 80%;\">80%</div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"title-skills-mvc5\">\n                        <p class=\"text-center\">ASP.net MVC 5</p>\n                    <div class=\"progress\">\n                        <div class=\"progress-bar bg-success\" id=\"mvc5skills\"style=\"width: 80%;\">80%</div>\n                    </div>\n                  </div>\n                </div>        \n                </div>\n              <!-- END SKILLS LIST  -->\n            </div>\n          </div>\n        </li>\n        <li>\n            <div class=\"list-content\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"company\">Mobile Development</div>\n                  </div>\n                </div>\n              <hr>\n              <div class=\"skills-content\">  \n                <!-- SKILLS LIST  -->\n                <div class=\"row\">\n                  <div class=\"col-md-3\">\n                      <div class=\"title-skills-ionic\">\n                          <p class=\"text-center\">Ionic Cordova</p>\n                      <div class=\"progress\">\n                          <div class=\"progress-bar bg-success\" id=\"ionicskills\"style=\"width: 85%;\">85%</div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3\">\n                      <div class=\"title-skills-unity\">\n                          <p class=\"text-center\">Unity 3d</p>\n                      <div class=\"progress\">\n                          <div class=\"progress-bar bg-success\" id=\"unityskills\"style=\"width: 80%;\">80%</div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3\">\n                      <div class=\"title-skills-androids\">\n                          <p class=\"text-center\">Android Studio</p>\n                      <div class=\"progress\">\n                          <div class=\"progress-bar bg-success\" id=\"androidsskills\"style=\"width: 70%;\">70%</div>\n                      </div>\n                    </div>\n                  </div>             \n                  </div>\n                <!-- END SKILLS LIST  -->\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- END SKILLS -->\n<!-- AWARD -->\n<div class=\"modal fade\" id=\"award\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Professional Developments and Certification</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <ul class=\"my-list\">          \n          <li [@fade]='fade_1'>\n            <div class=\"list-content\">\n              <div class=\"award-content\">\n                  <p class=\"text-center font-weight-bold\">Employee of the Month</p>\n                  <p class=\"text-center\">2017 June</p>\n                  <hr>\n                  <p class=\"text-center font-weight-bold\">Microsoft Database Certificate Passer</p>\n                  <p class=\"text-center\">2016 September</p>\n                  <hr>\n                  <p class=\"text-center font-weight-bold\">Computer Hardware Servicing NC2 Passer</p>\n                  <p class=\"text-center\">2015 October</p>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- END AWARD -->\n<!-- END MODAL -->\n \n<footer class=\"footer\">\n    <div class=\"container\">\n      <div class=\"text-center\">\n        <h4>Darell Porlares</h4>\n        <p>© 2018 Darell Porlares. All rights reserved.</p>\n      </div>\n    </div>\n  </footer>\n\n  <!-- FLOATING -->\n  <div id=\"container-floating\">\n    <div class=\"nd5 nds Home\" data-toggle=\"tooltip\" data-placement=\"left\"></div>\n    <div class=\"nd4 nds About\" data-toggle=\"tooltip\" data-placement=\"left\"><img class=\"reminder\">\n      <p class=\"letter\"><p class=\"letter\"><i class=\"fa fa-user-o\"></i></p>\n    </div>\n    <div class=\"nd3 nds Project\" data-toggle=\"tooltip\" data-placement=\"left\"><p class=\"letter\"><i class=\"fa fa-files-o\"></i></p></div>\n    <div class=\"nd1 nds Contact\" data-toggle=\"tooltip\" data-placement=\"left\"><img class=\"reminder\" src=\"{{contact}}\" />\n    </div>\n    <div id=\"floating-button\" data-toggle=\"tooltip\" data-placement=\"left\" data-original-title=\"Create\">\n      <p class=\"plus\">+</p>\n      <img class=\"edit\" src=\"{{bar}}\">\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/myportfolio/myportfolio.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/myportfolio/myportfolio.component.ts ***!
  \*****************************************************************/
/*! exports provided: MyportfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyportfolioComponent", function() { return MyportfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animations */ "./src/app/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyportfolioComponent = /** @class */ (function () {
    function MyportfolioComponent() {
        this.profilepic = 'assets/img/prof-pic.jpg';
        this.education = 'assets/img/education1.jpg';
        this.experience = 'assets/img/experience1.jpg';
        this.skills = 'assets/img/desktop-mobile.jpg';
        this.bar = 'assets/img/skills/menu.png';
        this.contact = 'assets/img/skills/smartphone-call.png';
        this.award = 'assets/img/award.jpg';
        this.html = 'assets/img/skills/HTML_Logo.png';
        this.css = 'assets/img/skills/CSS3.png';
        // ANIMATION
        this.fade_1 = 'fade_1';
        this.view_experience = "fade_1";
    }
    MyportfolioComponent.prototype.ngOnInit = function () {
        this.menuLists = [
            'Home',
            'About',
            'Project',
            'Contact'
        ];
        // ANIMATION
        this.animateMe();
    };
    MyportfolioComponent.prototype.animateMe = function () {
        this.fade_1 = (this.fade_1 === 'small' ? 'large' : 'small');
    };
    MyportfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myportfolio',
            template: __webpack_require__(/*! ./myportfolio.component.html */ "./src/app/components/myportfolio/myportfolio.component.html"),
            styles: [__webpack_require__(/*! ./myportfolio.component.css */ "./src/app/components/myportfolio/myportfolio.component.css")],
            animations: [
                _animations__WEBPACK_IMPORTED_MODULE_1__["fade_1"],
                _animations__WEBPACK_IMPORTED_MODULE_1__["fade_2"],
                _animations__WEBPACK_IMPORTED_MODULE_1__["fade_3"],
            ]
        }),
        __metadata("design:paramtypes", [])
    ], MyportfolioComponent);
    return MyportfolioComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Portfolio\darellportfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map