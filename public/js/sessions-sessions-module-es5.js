function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sessions-sessions-module"], {
  /***/
  "./src/app/routes/sessions/403.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/routes/sessions/403.component.ts ***!
    \**************************************************/

  /*! exports provided: Error403Component */

  /***/
  function srcAppRoutesSessions403ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Error403Component", function () {
      return Error403Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/components/error-code/error-code.component */
    "./src/app/shared/components/error-code/error-code.component.ts");

    var Error403Component = /*#__PURE__*/function () {
      function Error403Component() {
        _classCallCheck(this, Error403Component);
      }

      _createClass(Error403Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Error403Component;
    }();

    Error403Component.ɵfac = function Error403Component_Factory(t) {
      return new (t || Error403Component)();
    };

    Error403Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Error403Component,
      selectors: [["app-error-403"]],
      decls: 1,
      vars: 2,
      consts: [["code", "403", 3, "title", "message"]],
      template: function Error403Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "error-code", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Permission denied!")("message", "You do not have permission to access the requested data.");
        }
      },
      directives: [_shared_components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_1__["ErrorCodeComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Error403Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-error-403',
          template: "\n    <error-code\n      code=\"403\"\n      [title]=\"'Permission denied!'\"\n      [message]=\"'You do not have permission to access the requested data.'\"\n    ></error-code>\n  "
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/routes/sessions/404.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/routes/sessions/404.component.ts ***!
    \**************************************************/

  /*! exports provided: Error404Component */

  /***/
  function srcAppRoutesSessions404ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Error404Component", function () {
      return Error404Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/components/error-code/error-code.component */
    "./src/app/shared/components/error-code/error-code.component.ts");

    var Error404Component = /*#__PURE__*/function () {
      function Error404Component() {
        _classCallCheck(this, Error404Component);
      }

      _createClass(Error404Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Error404Component;
    }();

    Error404Component.ɵfac = function Error404Component_Factory(t) {
      return new (t || Error404Component)();
    };

    Error404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Error404Component,
      selectors: [["app-error-404"]],
      decls: 1,
      vars: 2,
      consts: [["code", "404", 3, "title", "message"]],
      template: function Error404Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "error-code", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Page not found!")("message", "This is not the web page you are looking for.");
        }
      },
      directives: [_shared_components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_1__["ErrorCodeComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Error404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-error-404',
          template: "\n    <error-code\n      code=\"404\"\n      [title]=\"'Page not found!'\"\n      [message]=\"'This is not the web page you are looking for.'\"\n    ></error-code>\n  "
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/routes/sessions/500.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/routes/sessions/500.component.ts ***!
    \**************************************************/

  /*! exports provided: Error500Component */

  /***/
  function srcAppRoutesSessions500ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Error500Component", function () {
      return Error500Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/components/error-code/error-code.component */
    "./src/app/shared/components/error-code/error-code.component.ts");

    var Error500Component = /*#__PURE__*/function () {
      function Error500Component() {
        _classCallCheck(this, Error500Component);
      }

      _createClass(Error500Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Error500Component;
    }();

    Error500Component.ɵfac = function Error500Component_Factory(t) {
      return new (t || Error500Component)();
    };

    Error500Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Error500Component,
      selectors: [["app-error-500"]],
      decls: 1,
      vars: 2,
      consts: [["code", "500", 3, "title", "message"]],
      template: function Error500Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "error-code", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Server went wrong!")("message", "Just kidding, looks like we have an internal issue, please try refreshing.");
        }
      },
      directives: [_shared_components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_1__["ErrorCodeComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Error500Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-error-500',
          template: "\n    <error-code\n      code=\"500\"\n      [title]=\"'Server went wrong!'\"\n      [message]=\"'Just kidding, looks like we have an internal issue, please try refreshing.'\"\n    >\n    </error-code>\n  "
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/routes/sessions/sessions-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/routes/sessions/sessions-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: SessionsRoutingModule */

  /***/
  function srcAppRoutesSessionsSessionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionsRoutingModule", function () {
      return SessionsRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _403_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./403.component */
    "./src/app/routes/sessions/403.component.ts");
    /* harmony import */


    var _404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./404.component */
    "./src/app/routes/sessions/404.component.ts");
    /* harmony import */


    var _500_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./500.component */
    "./src/app/routes/sessions/500.component.ts");

    var routes = [{
      path: '403',
      component: _403_component__WEBPACK_IMPORTED_MODULE_2__["Error403Component"],
      data: {
        title: '403 Forbidden',
        titleI18n: '403 Forbidden'
      }
    }, {
      path: '404',
      component: _404_component__WEBPACK_IMPORTED_MODULE_3__["Error404Component"],
      data: {
        title: '404 Not Found',
        titleI18n: '404 Not Found'
      }
    }, {
      path: '500',
      component: _500_component__WEBPACK_IMPORTED_MODULE_4__["Error500Component"],
      data: {
        title: '500 Error',
        titleI18n: '500 Error'
      }
    }];

    var SessionsRoutingModule = function SessionsRoutingModule() {
      _classCallCheck(this, SessionsRoutingModule);
    };

    SessionsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SessionsRoutingModule
    });
    SessionsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SessionsRoutingModule_Factory(t) {
        return new (t || SessionsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SessionsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/routes/sessions/sessions.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/routes/sessions/sessions.module.ts ***!
    \****************************************************/

  /*! exports provided: SessionsModule */

  /***/
  function srcAppRoutesSessionsSessionsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionsModule", function () {
      return SessionsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _sessions_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./sessions-routing.module */
    "./src/app/routes/sessions/sessions-routing.module.ts");
    /* harmony import */


    var _403_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./403.component */
    "./src/app/routes/sessions/403.component.ts");
    /* harmony import */


    var _404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./404.component */
    "./src/app/routes/sessions/404.component.ts");
    /* harmony import */


    var _500_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./500.component */
    "./src/app/routes/sessions/500.component.ts");

    var COMPONENTS = [_404_component__WEBPACK_IMPORTED_MODULE_4__["Error404Component"], _403_component__WEBPACK_IMPORTED_MODULE_3__["Error403Component"], _500_component__WEBPACK_IMPORTED_MODULE_5__["Error500Component"]];
    var COMPONENTS_DYNAMIC = [];

    var SessionsModule = function SessionsModule() {
      _classCallCheck(this, SessionsModule);
    };

    SessionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SessionsModule
    });
    SessionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SessionsModule_Factory(t) {
        return new (t || SessionsModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _sessions_routing_module__WEBPACK_IMPORTED_MODULE_2__["SessionsRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SessionsModule, {
        declarations: [_404_component__WEBPACK_IMPORTED_MODULE_4__["Error404Component"], _403_component__WEBPACK_IMPORTED_MODULE_3__["Error403Component"], _500_component__WEBPACK_IMPORTED_MODULE_5__["Error500Component"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _sessions_routing_module__WEBPACK_IMPORTED_MODULE_2__["SessionsRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _sessions_routing_module__WEBPACK_IMPORTED_MODULE_2__["SessionsRoutingModule"]],
          declarations: [].concat(COMPONENTS, COMPONENTS_DYNAMIC),
          entryComponents: COMPONENTS_DYNAMIC
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=sessions-sessions-module-es5.js.map