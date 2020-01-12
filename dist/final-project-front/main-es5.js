(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/facvourite/facvourite.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/facvourite/facvourite.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"leftSide\">\n  <div class=\"title\">\n    <h1> <em>Here are the movies you want to watch </em></h1>\n  </div>\n  <div class=\"clr-row\">\n    <div class=\"clr-col-lg-4 clr-col-md-5 clr-col-12\">\n\n      <div *ngFor=\"let movie of _movieService?.favorites\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <div class=\"card-block\">\n              <!-- <div *ngFor=\"let movie of _movieService?.favorites\">             -->\n              <span>{{movie.title}} <button (click)=\"_movieService.deleteFavorites(movie.title)\">🎬delete</button> <br>\n                <img src=\"https://image.tmdb.org/t/p/w154/{{movie.poster_path}}\"> <br> </span>\n\n              <span> Why I want to watch it? </span> <br>\n              <span> With whom I want to watch it? </span> <br>\n              <button> <a href=\"www.gmail.com\"> Email-Invitation </a></button> <br>\n              <button> <a href=\"www.facebook.com\"> Facebook-Invitation </a></button> <br>\n              <br> <br>\n            </div>\n          </div>\n\n        </div>\n      </div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<header class=\"header-6\">\n    <div class=\"branding\">\n        <a href=\"...\" class=\"nav-link\">\n            <a routerLink=\"logIn\"> <span class=\"title\"> BPA: Brad Pitt Admirers </span></a>\n        </a>\n    </div>\n    <form class=\"search\">\n        <input type=\"text\" [(ngModel)]=\"movieTitle\" name=\"first\" placeholder=\"Hollywood starts\">\n        <button (click)=\"fetch1()\">Click </button>\n    </form>\n\n    <div class=\"header-actions\">\n        <!-- <div *ngFor=\"let name of _userService.userId\">\n            {{name.firstName}}\n        </div> -->\n        <a href=\"javascript://\" class=\"nav-link nav-icon-text\">\n\n            <clr-icon shape=\"user\"></clr-icon>\n        </a>\n    </div>\n\n    <button class=\"button\" (click)=\"best()\">LogIn </button>\n\n    <button class=\"button\" (click)=\"best1()\">Register </button>\n\n    <button class=\"button\" (click)=\"_movieService.getFavorites()\">Get Favorites</button>\n\n</header>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-wrapper\">\r\n    <form class=\"login\">\r\n        <section class=\"title\">\r\n            <h3 class=\"welcome\">Welcome to</h3>\r\n            Brad Pitt Admirers! \r\n            <h5 class=\"hint\">The movie data base exclusivly about Brad Pitt</h5>\r\n        </section>\r\n\r\n        <div class=\"login-group\">\r\n\r\n            <clr-input-container>\r\n                    <label class=\"clr-sr-only\">Email</label>\r\n                    <input type=\"email\" name=\"email\" [(ngModel)]=\"form.email\" clrInput placeholder=\"Email\"/>\r\n            </clr-input-container>\r\n            \r\n            <clr-password-container>\r\n                <label class=\"clr-sr-only\">Password</label>\r\n                <input type=\"password\" name=\"password\" clrPassword placeholder=\"Password\" [(ngModel)]=\"form.password\" />\r\n            </clr-password-container>\r\n            \r\n            <button (click)=\"logIn()\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n        </div>\r\n    </form>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-wrapper\">\n    <form class=\"login\">\n        <section class=\"title\">\n            <h3 class=\"welcome\">Welcome to</h3>\n            Brad Pitt Admirers! \n            <h5 class=\"hint\">The movie data base exclusivly about Brad Pitt</h5>\n        </section>\n\n        <div class=\"login-group\">\n      \n<!-- \n            <clr-input-container>\n                    <label class=\"clr-sr-only\">Family Name</label>\n                    <input type=\"text\" name=\"userName\" [(ngModel)]=\"form.userName\" clrInput placeholder=\"Username\"/>\n            </clr-input-container> -->\n\n            <clr-input-container>\n                    <label class=\"clr-sr-only\">First Name</label>\n                    <input type=\"text\" name=\"firstName\" [(ngModel)]=\"form.firstName\" clrInput placeholder=\"First Name\"/>\n            </clr-input-container>\n\n            <clr-input-container>\n                <label class=\"clr-sr-only\">Second Name</label>\n                <input type=\"text\" name=\"secondName\" [(ngModel)]=\"form.secondName\" clrInput placeholder=\"Second Name\"/>\n        </clr-input-container>\n\n            <clr-input-container>\n                <label class=\"clr-sr-only\">Email</label>\n                <input type=\"email\" name=\"email\" [(ngModel)]=\"form.email\" clrInput placeholder=\"Email\"/>\n        </clr-input-container>\n            \n            <clr-password-container>\n                <label class=\"clr-sr-only\">Password</label>\n                <input type=\"password\" name=\"password\" clrPassword placeholder=\"Password\" [(ngModel)]=\"form.password\" />\n            </clr-password-container>\n            \n      \n            <button (click)=\"register()\" type=\"submit\" class=\"btn btn-primary\"> Submit</button>\n        </div>\n    </form>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reso/reso.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reso/reso.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div class = \"reso\">\n<div class=\"leftSide\">\n<p>Here are the results</p>\n<ul *ngFor=\"let movie of _movieService?.movies\">\n    <li>{{movie.title}} </li>\n    <button (click) = \"addToFavorites(movie)\"> ❤️</button>\n    <img src=\"https://image.tmdb.org/t/p/w154/{{movie.poster_path}}\">\n</ul>\n  \n<div class=\"middle\"> \n \n</div>\n<div class=\"rightSide\">\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/api.service.ts": 
        /*!********************************!*\
          !*** ./src/app/api.service.ts ***!
          \********************************/
        /*! exports provided: ApiService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function () { return ApiService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie.service */ "./src/app/movie.service.ts");
            var ApiService = /** @class */ (function () {
                function ApiService(_http, _movieService) {
                    this._http = _http;
                    this._movieService = _movieService;
                    this.apiKey = "883bb4c5b69e9a46b9fd762da7bd2471";
                    this.baseUrl = "https://api.themoviedb.org/3/";
                    this.imageBaseUrl = "https://image.tmdb.org/t/p/";
                    this.routes = {
                        movie: "movie/",
                        person: "search/person/",
                        movieSearch: "search/movie/"
                    };
                    this.posterSizes = [
                        "w92/",
                        "w154",
                        "w185",
                        "w342",
                        "w500",
                        "w780",
                        "original"
                    ];
                }
                ApiService.prototype.search = function (searchTerm) {
                    //return this._http.get(`${this.baseUrl}${this.routes.person}?api_key=${this.apiKey}&page=1&include_adult=false&query=${searchTerm}`)
                    return this._http.get("" + this.baseUrl + this.routes.movieSearch + "?api_key=" + this.apiKey + "&page=1&include_adult=false&query=" + searchTerm);
                };
                ApiService.prototype.getMovies = function (route) {
                    return this._http.get("" + this.baseUrl + this.routes[route] + "?api_key=" + this.apiKey + "&language=en-US&page=1");
                };
                ApiService.prototype.getMovieImagePath = function (poster_path) {
                    return this.imageBaseUrl + this.posterSizes[4] + poster_path;
                };
                return ApiService;
            }());
            ApiService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"] }
            ]; };
            ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ApiService);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _reso_reso_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reso/reso.component */ "./src/app/reso/reso.component.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _facvourite_facvourite_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./facvourite/facvourite.component */ "./src/app/facvourite/facvourite.component.ts");
            /* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
            var routes = [
                { path: 'reso', component: _reso_reso_component__WEBPACK_IMPORTED_MODULE_3__["ResoComponent"] },
                { path: '', redirectTo: 'register', pathMatch: 'full' },
                { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
                { path: 'logIn', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
                { path: 'facvourite', component: _facvourite_facvourite_component__WEBPACK_IMPORTED_MODULE_5__["FacvouriteComponent"] }
            ];
            //export const routing = RouterModule.forRoot(routes)
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'final-project-front';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm2015/clr-angular.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
            /* harmony import */ var _reso_reso_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reso/reso.component */ "./src/app/reso/reso.component.ts");
            /* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
            /* harmony import */ var _facvourite_facvourite_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./facvourite/facvourite.component */ "./src/app/facvourite/facvourite.component.ts");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
            /* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
            /* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./movie.service */ "./src/app/movie.service.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                        _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                        _reso_reso_component__WEBPACK_IMPORTED_MODULE_11__["ResoComponent"],
                        _facvourite_facvourite_component__WEBPACK_IMPORTED_MODULE_13__["FacvouriteComponent"],
                        _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
                    ],
                    providers: [_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"], _user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"], _movie_service__WEBPACK_IMPORTED_MODULE_16__["MovieService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/facvourite/facvourite.component.scss": 
        /*!******************************************************!*\
          !*** ./src/app/facvourite/facvourite.component.scss ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".title {\n  display: flex;\n  flex-wrap: wrap;\n  background-color: #A7F4E9;\n}\n\n.clr-row {\n  background-color: #FFFCE8;\n}\n\n.card-header {\n  background-color: white;\n  padding: 10px;\n}\n\n.card-block {\n  background-color: #DEFFF9;\n}\n\n.card-text {\n  background-color: #00D4B8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFjdm91cml0ZS9DOlxcVXNlcnNcXGZsb3JlXFxEb2N1bWVudHNcXFNvZnRzdGFja1xcTWVhblN0YWNrXFxmaW5hbC1wcm9qZWN0XFxmaW5hbC1wcm9qZWN0LWZyb250L3NyY1xcYXBwXFxmYWN2b3VyaXRlXFxmYWN2b3VyaXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mYWN2b3VyaXRlL2ZhY3ZvdXJpdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDREo7O0FESUE7RUFDRyx5QkFBQTtBQ0RIOztBRElBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0FDREo7O0FESUE7RUFDSSx5QkFBQTtBQ0RKOztBREtBO0VBQ0kseUJBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2ZhY3ZvdXJpdGUvZmFjdm91cml0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLnRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNBN0Y0RTlcclxufVxyXG5cclxuLmNsci1yb3cge1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGQ0U4XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWJsb2NrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0RFRkZGOTtcclxuXHJcbn1cclxuXHJcbi5jYXJkLXRleHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwRDRCOFxyXG59XHJcblxyXG4iLCIudGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBN0Y0RTk7XG59XG5cbi5jbHItcm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkNFODtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jYXJkLWJsb2NrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RFRkZGOTtcbn1cblxuLmNhcmQtdGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEQ0Qjg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/facvourite/facvourite.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/facvourite/facvourite.component.ts ***!
          \****************************************************/
        /*! exports provided: FacvouriteComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacvouriteComponent", function () { return FacvouriteComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
            /* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");
            var FacvouriteComponent = /** @class */ (function () {
                function FacvouriteComponent(_movieService, _apiService) {
                    this._movieService = _movieService;
                    this._apiService = _apiService;
                }
                FacvouriteComponent.prototype.ngOnInit = function () {
                    this._movieService.getFavorites();
                };
                FacvouriteComponent.prototype.deleteFavorites = function (movie) {
                    this._movieService.deleteFavorites(movie);
                };
                return FacvouriteComponent;
            }());
            FacvouriteComponent.ctorParameters = function () { return [
                { type: _movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"] },
                { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
            ]; };
            FacvouriteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-facvourite',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./facvourite.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/facvourite/facvourite.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./facvourite.component.scss */ "./src/app/facvourite/facvourite.component.scss")).default]
                })
            ], FacvouriteComponent);
            /***/ 
        }),
        /***/ "./src/app/header/header.component.scss": 
        /*!**********************************************!*\
          !*** ./src/app/header/header.component.scss ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".button {\n  color: white;\n  background-color: #002538;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcZmxvcmVcXERvY3VtZW50c1xcU29mdHN0YWNrXFxNZWFuU3RhY2tcXGZpbmFsLXByb2plY3RcXGZpbmFsLXByb2plY3QtZnJvbnQvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBQTtFQUNBLHlCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XHJcblxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjUzODtcclxufSIsIi5idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDI1Mzg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/header/header.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/header/header.component.ts ***!
          \********************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent(router, _api, _movieService, _userService) {
                    this.router = router;
                    this._api = _api;
                    this._movieService = _movieService;
                    this._userService = _userService;
                    this.movieTitle = '';
                    this.user = "";
                }
                HeaderComponent.prototype.fetch1 = function () {
                    var _this = this;
                    // populate  movie service
                    this._api.search(this.movieTitle)
                        .subscribe(function (res) {
                        console.log(res.results);
                        _this._movieService.movies = res.results;
                        _this._userService.getUserCred(_this.user);
                        //console.log("res:", res)
                        _this.router.navigate(['/reso']);
                    });
                };
                HeaderComponent.prototype.best = function () {
                    this.router.navigate(['/logIn']);
                };
                HeaderComponent.prototype.best1 = function () {
                    this.router.navigate(['/register']);
                };
                return HeaderComponent;
            }());
            HeaderComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
                { type: _movie_service__WEBPACK_IMPORTED_MODULE_4__["MovieService"] },
                { type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
            ]; };
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/login/login.component.scss": 
        /*!********************************************!*\
          !*** ./src/app/login/login.component.scss ***!
          \********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/login/login.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/login/login.component.ts ***!
          \******************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(router, _userService) {
                    this.router = router;
                    this._userService = _userService;
                    this.form = {
                        // fistName: "",
                        password: "",
                        email: ""
                    };
                }
                LoginComponent.prototype.logIn = function () {
                    var _this = this;
                    console.log(this.form);
                    this._userService.login(this.form).subscribe(function (res) {
                        console.log(res);
                        sessionStorage.setItem('token', res.token); //token is stored in sessionStorage
                        sessionStorage.setItem('userId', res.userId);
                        _this._userService.firstName = res.firstName;
                        _this._userService.isLoggedIn = true;
                        console.log(res.firstName);
                        _this.goToDash();
                    });
                };
                LoginComponent.prototype.goToDash = function () {
                    this.router.navigate(['/reso']);
                };
                LoginComponent.prototype.ngOnInit = function () {
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/movie.service.ts": 
        /*!**********************************!*\
          !*** ./src/app/movie.service.ts ***!
          \**********************************/
        /*! exports provided: MovieService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function () { return MovieService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var MovieService = /** @class */ (function () {
                function MovieService(_http, router) {
                    this._http = _http;
                    this.router = router;
                    this.movies = [];
                    this.favoriteUrl = "http://localhost:3000/api/appUsers";
                }
                MovieService.prototype.getFavorites = function () {
                    var _this = this;
                    this.router.navigate(['/facvourite']);
                    var userId = sessionStorage.getItem("userId");
                    var token = sessionStorage.getItem('token');
                    var URL = this.favoriteUrl + "/" + userId + "/favourites?access_token=" + token;
                    this._http.get(URL).subscribe(function (res) {
                        _this.favorites = res;
                        console.log("this.favorites:", _this.favorites);
                    });
                };
                MovieService.prototype.addToFavorites = function (movie) {
                    this.favoritedMovie = movie;
                    var userId = sessionStorage.getItem("userId");
                    var token = sessionStorage.getItem('token');
                    var URL = this.favoriteUrl + "/" + userId + "/favourites?access_token=" + token;
                    // this.favorites.push(movie);
                    return this._http.post(URL, { "title": movie.title, "poster_path": movie.poster_path, "appUserId": userId });
                };
                MovieService.prototype.deleteFavorites = function (movie) {
                    console.log(movie);
                    var userId = sessionStorage.getItem("userId");
                    var token = sessionStorage.getItem('token');
                    var URL = "http://localhost:3000/api/appUsers/" + userId + "/favourites/" + movie.id + "?access_token=" + token;
                    //const URL = `${this.favoriteUrl}/${userId}/favourites/${movie.id}?access_token=${token}`;
                    console.log("URL", URL);
                    var movieIndex = this.favorites.indexOf(movie);
                    this.favorites = this.favorites.splice(movieIndex, 1, 0);
                    this.movie.delete();
                    return this._http.delete(URL).subscribe(function (res) { });
                };
                return MovieService;
            }());
            MovieService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], MovieService);
            /***/ 
        }),
        /***/ "./src/app/register/register.component.scss": 
        /*!**************************************************!*\
          !*** ./src/app/register/register.component.scss ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/register/register.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/register/register.component.ts ***!
          \************************************************/
        /*! exports provided: RegisterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () { return RegisterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var RegisterComponent = /** @class */ (function () {
                function RegisterComponent(_userService, router) {
                    this._userService = _userService;
                    this.router = router;
                    this.form = {
                        firstName: "",
                        secondName: "",
                        password: "",
                        email: ""
                    };
                }
                RegisterComponent.prototype.register = function () {
                    var _this = this;
                    console.log(this.form);
                    this._userService.registerUser(this.form).subscribe(function (res) {
                        console.log(res);
                        sessionStorage.setItem('token', res.token); //token is stored in sessionStorage
                        sessionStorage.setItem('userId', res.userId);
                        _this._userService.firstName = res.firstName;
                        _this._userService.isLoggedIn = true;
                        _this.goToDash();
                    });
                };
                RegisterComponent.prototype.goToDash = function () {
                    this.router.navigate(['/reso']);
                };
                RegisterComponent.prototype.ngOnInit = function () {
                };
                return RegisterComponent;
            }());
            RegisterComponent.ctorParameters = function () { return [
                { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-register',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")).default]
                })
            ], RegisterComponent);
            /***/ 
        }),
        /***/ "./src/app/reso/reso.component.scss": 
        /*!******************************************!*\
          !*** ./src/app/reso/reso.component.scss ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".reso {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: space-between;\n  background-color: #00BFA9;\n  padding: 20px;\n}\n\n.leftSide {\n  display: flex;\n  flex-direction: column;\n  background-color: #00BFA9;\n  color: #006668;\n  width: auto;\n}\n\n.rightSide {\n  display: flex;\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzby9DOlxcVXNlcnNcXGZsb3JlXFxEb2N1bWVudHNcXFNvZnRzdGFja1xcTWVhblN0YWNrXFxmaW5hbC1wcm9qZWN0XFxmaW5hbC1wcm9qZWN0LWZyb250L3NyY1xcYXBwXFxyZXNvXFxyZXNvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXNvL3Jlc28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FDQ0E7O0FERUE7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDQ0Q7O0FERUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNDQSIsImZpbGUiOiJzcmMvYXBwL3Jlc28vcmVzby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNvIHtcclxuZGlzcGxheTogZmxleDtcclxuZmxleC13cmFwOiB3cmFwO1xyXG5hbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMDBCRkE5O1xyXG5wYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4ubGVmdFNpZGV7XHJcbiBkaXNwbGF5OiBmbGV4O1xyXG4gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuIGJhY2tncm91bmQtY29sb3I6ICMwMEJGQTk7XHJcbiBjb2xvcjogIzAwNjY2ODtcclxuIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4ucmlnaHRTaWRlIHtcclxuZGlzcGxheTogZmxleDtcclxubWFyZ2luLWxlZnQ6IGF1dG87XHJcblxyXG59IiwiLnJlc28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEJGQTk7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5sZWZ0U2lkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEJGQTk7XG4gIGNvbG9yOiAjMDA2NjY4O1xuICB3aWR0aDogYXV0bztcbn1cblxuLnJpZ2h0U2lkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/reso/reso.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/reso/reso.component.ts ***!
          \****************************************/
        /*! exports provided: ResoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResoComponent", function () { return ResoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
            /* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var ResoComponent = /** @class */ (function () {
                // movie: any;
                function ResoComponent(_movieService, _apiService, router, _http) {
                    this._movieService = _movieService;
                    this._apiService = _apiService;
                    this.router = router;
                    this._http = _http;
                }
                ResoComponent.prototype.ngOnInit = function () { };
                ResoComponent.prototype.addToFavorites = function (movie) {
                    var _this = this;
                    this._movieService.addToFavorites(movie).subscribe(function (res) {
                        console.log(res);
                        _this.goTofavs();
                    });
                };
                ResoComponent.prototype.goTofavs = function () {
                    this.router.navigate(['/facvourite']);
                };
                return ResoComponent;
            }());
            ResoComponent.ctorParameters = function () { return [
                { type: _movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"] },
                { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
            ]; };
            ResoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-reso',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reso.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reso/reso.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reso.component.scss */ "./src/app/reso/reso.component.scss")).default]
                })
            ], ResoComponent);
            /***/ 
        }),
        /***/ "./src/app/user.service.ts": 
        /*!*********************************!*\
          !*** ./src/app/user.service.ts ***!
          \*********************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var UserService = /** @class */ (function () {
                function UserService(_http, router) {
                    this._http = _http;
                    this.router = router;
                    this.baseUrl = "http://localhost:3000/api/";
                    this.appUserUrl = "appUsers/";
                    this.loginUrl = "appUsers/login";
                    this.logoutUrl = "appUsers/logout";
                    this.isLoggedIn = false;
                    this.firstName = "";
                    this.credentials = {};
                    this.token = sessionStorage.getItem("token");
                    this.UserUrl = "http://localhost:3000/api/appUsers";
                }
                UserService.prototype.registerUser = function (credentials) {
                    return this._http.post("" + this.baseUrl + this.appUserUrl, credentials);
                };
                UserService.prototype.login = function (credentials) {
                    return this._http.post("" + this.baseUrl + this.loginUrl, credentials);
                };
                //   getUserInfo(user){
                //     let currentUserId: string = sessionStorage.getItem('userId');
                //     const userId = sessionStorage.getItem("userId");
                //     const token = sessionStorage.getItem('token')
                //     return this._http.get(`http://localhost:3000/api/appUsers?access_token=${token}`)
                //  }
                // showUser(userInfo) {
                //   //return this._http.get(`${this.baseUrl}${this.routes.person}?api_key=${this.apiKey}&page=1&include_adult=false&query=${searchTerm}`)
                //   return this._http.get(`${this.baseUrl}/${userId}${this.routes.movieSearch}?api_key=${this.apiKey}&page=1&include_adult=false&query=${searchTerm}`)
                // }
                // logout(){
                //   return this._http.post(`${this.baseUrl}${this.logoutUrl}`, sessionStorage.getItem('token'), {headers: this.createHeader()})
                // }
                UserService.prototype.getUserCred = function (userId) {
                    return this._http.get("" + this.baseUrl + this.appUserUrl + userId, { headers: this.createHeader() });
                };
                UserService.prototype.createHeader = function () {
                    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', sessionStorage.getItem('token'));
                };
                return UserService;
            }());
            UserService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], UserService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\flore\Documents\Softstack\MeanStack\final-project\final-project-front\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map