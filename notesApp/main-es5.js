function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _pages_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/notes-list/notes-list.component */
    "./src/app/pages/notes-list/notes-list.component.ts");
    /* harmony import */


    var _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/main-layout/main-layout.component */
    "./src/app/pages/main-layout/main-layout.component.ts");
    /* harmony import */


    var _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/note-details/note-details.component */
    "./src/app/pages/note-details/note-details.component.ts");

    var routes = [{
      path: '',
      component: _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__["MainLayoutComponent"],
      children: [{
        path: '',
        component: _pages_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_2__["NotesListComponent"]
      }, {
        path: 'new',
        component: _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_4__["NoteDetailsComponent"]
      }, {
        path: ':id',
        component: _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_4__["NoteDetailsComponent"]
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'notesApp';
      this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSearch"];
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pages_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/notes-list/notes-list.component */
    "./src/app/pages/notes-list/notes-list.component.ts");
    /* harmony import */


    var _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/main-layout/main-layout.component */
    "./src/app/pages/main-layout/main-layout.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./note-card/note-card.component */
    "./src/app/note-card/note-card.component.ts");
    /* harmony import */


    var _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/note-details/note-details.component */
    "./src/app/pages/note-details/note-details.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _pages_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_6__["NotesListComponent"], _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_7__["MainLayoutComponent"], _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_9__["NoteCardComponent"], _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_10__["NoteDetailsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _pages_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_6__["NotesListComponent"], _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_7__["MainLayoutComponent"], _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_9__["NoteCardComponent"], _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_10__["NoteDetailsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/note-card/note-card.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/note-card/note-card.component.ts ***!
    \**************************************************/

  /*! exports provided: NoteCardComponent */

  /***/
  function srcAppNoteCardNoteCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoteCardComponent", function () {
      return NoteCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = ["truncator"];
    var _c1 = ["bodyText"];

    var NoteCardComponent = /*#__PURE__*/function () {
      function NoteCardComponent(renderer) {
        _classCallCheck(this, NoteCardComponent);

        this.renderer = renderer;
        this.deleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(NoteCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //show the truncator if there is a overflow
          var style = window.getComputedStyle(this.bodyText.nativeElement, null);
          var viewableHieght = parseInt(style.getPropertyValue("height"), 10);

          if (this.bodyText.nativeElement.scrollHeight > viewableHieght) {
            //si hay overflow se mostrara
            this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
          } else {
            this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
          }
        }
      }, {
        key: "onXButtomClic",
        value: function onXButtomClic() {
          this.deleteEvent.emit();
        }
      }]);

      return NoteCardComponent;
    }();

    NoteCardComponent.ɵfac = function NoteCardComponent_Factory(t) {
      return new (t || NoteCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    NoteCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NoteCardComponent,
      selectors: [["app-note-card"]],
      viewQuery: function NoteCardComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.truncator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.bodyText = _t.first);
        }
      },
      inputs: {
        title: "title",
        body: "body",
        link: "link"
      },
      outputs: {
        deleteEvent: "delete"
      },
      decls: 13,
      vars: 3,
      consts: [[1, "note-card-cointainer"], ["container", ""], [3, "routerLink"], [1, "note-card-content"], [1, "note-card-title"], [1, "note-card-body"], ["bodyText", ""], [1, "fade-out-truncation"], ["truncator", ""], [1, "x-button", 3, "click"]],
      template: function NoteCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoteCardComponent_Template_div_click_12_listener() {
            return ctx.onXButtomClic();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.link);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.body);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700\");\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  font-size: 18 px !important;\n  overflow: hidden;\n}\n.note-card-cointainer[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n  border-radius: 5px;\n  box-shadow: 0px 2px 15px 2px rgba(0, 0, 0, 0.068);\n  transition: box-shadow 0.2s ease-out;\n}\n.note-card-cointainer[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0.068);\n}\n.note-card-cointainer[_ngcontent-%COMP%]:hover   .x-button[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n  transition-delay: 0.35s;\n}\n.note-card-cointainer[_ngcontent-%COMP%]   .note-card-content[_ngcontent-%COMP%] {\n  padding: 25px;\n  color: #555;\n}\n.note-card-cointainer[_ngcontent-%COMP%]   .note-card-content[_ngcontent-%COMP%]   .note-card-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  color: #a59ad7;\n}\n.note-card-cointainer[_ngcontent-%COMP%]   .note-card-content[_ngcontent-%COMP%]   .note-card-body[_ngcontent-%COMP%] {\n  position: relative;\n  max-height: 80px;\n  overflow: hidden;\n}\n.note-card-cointainer[_ngcontent-%COMP%]   .note-card-content[_ngcontent-%COMP%]   .note-card-body[_ngcontent-%COMP%]   .fade-out-truncation[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: none;\n  bottom: 0;\n  height: 50%;\n  width: 100%;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 50%, white 100%);\n}\n.x-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  height: 34px;\n  width: 34px;\n  background: #fff3f3;\n  background-image: url('delete_icon.svg');\n  background-repeat: no-repeat;\n  background-position: center;\n  border-radius: 4px;\n  transition: opacity 0.2s ease-out, transform 0.2s ease-out;\n  opacity: 0;\n  transform: scale(0.35);\n}\n.x-button[_ngcontent-%COMP%]:hover {\n  background-color: #ffe9e9;\n}\n.x-button[_ngcontent-%COMP%]:active {\n  background-color: #ffdfdf;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90ZS1jYXJkL0M6XFxVc2Vyc1xcVDU0MHBcXERlc2t0b3BcXFByb3llY3RvcyBhbmd1bGFyXFxub3RlIGFwcFxcbm90ZXNBcHAvc3JjXFxtYWluLXN0eWxlcy5zY3NzIiwic3JjL2FwcC9ub3RlLWNhcmQvbm90ZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ub3RlLWNhcmQvQzpcXFVzZXJzXFxUNTQwcFxcRGVza3RvcFxcUHJveWVjdG9zIGFuZ3VsYXJcXG5vdGUgYXBwXFxub3Rlc0FwcC9zcmNcXGFwcFxcbm90ZS1jYXJkXFxub3RlLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1EscUVBQUE7QUE2QlIsZUFBQTtBQUVBO0VBQ0ksWUFBQTtFQUdBLDJCQUFBO0VBQ0EsZ0JBQUE7QUMvQko7QUNIQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0VBRUEsb0NBQUE7QURLSjtBQ0hJO0VBQ0ksZUFBQTtFQUNBLGdEQUFBO0FES1I7QUNGUTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUVBLHVCQUFBO0FER1o7QUNFSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FEQVI7QUNFUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNGNUJIO0FDNEJUO0FDR1E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUREWjtBQ0dZO0VBQ0csa0JBQUE7RUFFQSxvQkFBQTtFQUVBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDJHQUFBO0FESGY7QUNVQTtFQUNJLGtCQUFBO0VBRUEsU0FBQTtFQUNBLFdBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLG1CRnhETztFRXlEUCx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFFQSxrQkFBQTtFQUNBLDBEQUFBO0VBSUEsVUFBQTtFQUNBLHNCQUFBO0FEZEo7QUNpQkk7RUFDSSx5QkFBQTtBRGZSO0FDa0JJO0VBQ0kseUJBQUE7QURoQlIiLCJmaWxlIjoic3JjL2FwcC9ub3RlLWNhcmQvbm90ZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IGEgR29vZ2xlIEZvbnRcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDcwMCcpO1xyXG5cclxuLy8gU2V0IHlvdXIgYnJhbmQgY29sb3JzXHJcbiRwdXJwbGU6ICNhNTlhZDc7XHJcbiRwaW5rOiAjZmU3NmMyO1xyXG4kYmx1ZTogIzM3YzdmMjtcclxuXHJcbiRsaWdodC1yZWQ6I2ZmZjNmMztcclxuXHJcbiRsaWdodDojZmFmY2ZmO1xyXG5cclxuXHJcbi8vIGdsb2JhbCB2YXJpYWJsZXNcclxuJGZhbWlseS1zYW5zLXNlcmlmOiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xyXG5cclxuJHByaW1hcnk6ICRwdXJwbGU7XHJcbiRsaW5rOiAkYmx1ZTtcclxuXHJcblxyXG4vLyBjb21wb25lbnQgdmFyaWFibGVzXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICRsaWdodDtcclxuJGNvbnRyb2wtYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kaW5wdXQtYmFja2dyb3VuZC1jb2xvcjojZjNmNWZhO1xyXG4kaW5wdXQtc2hhZG93OiBub25lO1xyXG5cclxuXHJcblxyXG5cclxuLypnbG9iYWwgc3R5bGUqL1xyXG5cclxuaHRtbCwgYm9keXtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAvL0ZvbnQgc2l6ZVxyXG4gICAgZm9udC1zaXplOiAxOCBweCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDcwMFwiKTtcbi8qZ2xvYmFsIHN0eWxlKi9cbmh0bWwsIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTggcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm5vdGUtY2FyZC1jb2ludGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDE1cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNjgpO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnMgZWFzZS1vdXQ7XG59XG4ubm90ZS1jYXJkLWNvaW50YWluZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDY4KTtcbn1cbi5ub3RlLWNhcmQtY29pbnRhaW5lcjpob3ZlciAueC1idXR0b24ge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjM1cztcbn1cbi5ub3RlLWNhcmQtY29pbnRhaW5lciAubm90ZS1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAyNXB4O1xuICBjb2xvcjogIzU1NTtcbn1cbi5ub3RlLWNhcmQtY29pbnRhaW5lciAubm90ZS1jYXJkLWNvbnRlbnQgLm5vdGUtY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjYTU5YWQ3O1xufVxuLm5vdGUtY2FyZC1jb2ludGFpbmVyIC5ub3RlLWNhcmQtY29udGVudCAubm90ZS1jYXJkLWJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC1oZWlnaHQ6IDgwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubm90ZS1jYXJkLWNvaW50YWluZXIgLm5vdGUtY2FyZC1jb250ZW50IC5ub3RlLWNhcmQtYm9keSAuZmFkZS1vdXQtdHJ1bmNhdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCkgNTAlLCB3aGl0ZSAxMDAlKTtcbn1cblxuLngtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEycHg7XG4gIHJpZ2h0OiAxMnB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIHdpZHRoOiAzNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmM2YzO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2RlbGV0ZV9pY29uLnN2Zyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1vdXQsIHRyYW5zZm9ybSAwLjJzIGVhc2Utb3V0O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuMzUpO1xufVxuLngtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTllOTtcbn1cbi54LWJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZmRmO1xufSIsIkBpbXBvcnQgJy4uLy4uL21haW4tc3R5bGVzLnNjc3MnO1xyXG5cclxuXHJcbi5ub3RlLWNhcmQtY29pbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxNXB4IDJweCByZ2JhKGJsYWNrLCAwLjA2OCk7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzIGVhc2Utb3V0O1xyXG5cclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDRweCByZ2JhKGJsYWNrLCAwLjA2OCk7XHJcblxyXG5cclxuICAgICAgICAueC1idXR0b257XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcblxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjM1cztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5ub3RlLWNhcmQtY29udGVudHtcclxuICAgICAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjNTU1O1xyXG5cclxuICAgICAgICAubm90ZS1jYXJkLXRpdGxle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBjb2xvcjogJHB1cnBsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ub3RlLWNhcmQtYm9keXtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAgICAgLmZhZGUtb3V0LXRydW5jYXRpb257XHJcbiAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEod2hpdGUsMCkwJSwgcmdiYSh3aGl0ZSwgMC44KTUwJSwgd2hpdGUgMTAwJSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4ueC1idXR0b257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gICAgdG9wOiAxMnB4O1xyXG4gICAgcmlnaHQ6IDEycHg7XHJcblxyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgd2lkdGg6IDM0cHg7XHJcblxyXG4gICAgYmFja2dyb3VuZDogJGxpZ2h0LXJlZDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvZGVsZXRlX2ljb24uc3ZnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2Utb3V0LCB0cmFuc2Zvcm0gMC4ycyBlYXNlLW91dDtcclxuICAgIDtcclxuICAgIFxyXG5cclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMzUpO1xyXG4gICAgXHJcblxyXG4gICAgJjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGxpZ2h0LXJlZCwgMiUpO1xyXG4gICAgfVxyXG5cclxuICAgICY6YWN0aXZle1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkbGlnaHQtcmVkLCA0JSk7XHJcbiAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoteCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-note-card',
          templateUrl: './note-card.component.html',
          styleUrls: ['./note-card.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        body: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        link: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        deleteEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['delete']
        }],
        truncator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['truncator', {
            "static": true
          }]
        }],
        bodyText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['bodyText', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/main-layout/main-layout.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/main-layout/main-layout.component.ts ***!
    \************************************************************/

  /*! exports provided: MainLayoutComponent */

  /***/
  function srcAppPagesMainLayoutMainLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function () {
      return MainLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MainLayoutComponent = /*#__PURE__*/function () {
      function MainLayoutComponent() {
        _classCallCheck(this, MainLayoutComponent);
      }

      _createClass(MainLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainLayoutComponent;
    }();

    MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) {
      return new (t || MainLayoutComponent)();
    };

    MainLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainLayoutComponent,
      selectors: [["app-main-layout"]],
      decls: 6,
      vars: 0,
      consts: [[1, "layout-box"], [1, "top-bar"], [1, "pages-content"]],
      template: function MainLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Note Mate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700\");\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  font-size: 18 px !important;\n  overflow: hidden;\n}\n.layout-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n}\n.layout-box[_ngcontent-%COMP%]   .pages-content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  overflow-y: scroll;\n}\n.top-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 68px;\n  background: linear-gradient(to right, #fe76c2, #37c7f2);\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);\n  display: flex;\n  flex-shrink: 0;\n  justify-content: center;\n  align-items: center;\n}\n.top-bar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi1sYXlvdXQvQzpcXFVzZXJzXFxUNTQwcFxcRGVza3RvcFxcUHJveWVjdG9zIGFuZ3VsYXJcXG5vdGUgYXBwXFxub3Rlc0FwcC9zcmNcXG1haW4tc3R5bGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21haW4tbGF5b3V0L21haW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9tYWluLWxheW91dC9DOlxcVXNlcnNcXFQ1NDBwXFxEZXNrdG9wXFxQcm95ZWN0b3MgYW5ndWxhclxcbm90ZSBhcHBcXG5vdGVzQXBwL3NyY1xcYXBwXFxwYWdlc1xcbWFpbi1sYXlvdXRcXG1haW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNRLHFFQUFBO0FBNkJSLGVBQUE7QUFFQTtFQUNJLFlBQUE7RUFHQSwyQkFBQTtFQUNBLGdCQUFBO0FDL0JKO0FDSEE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7QURLSjtBQ0ZJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FESVI7QUNBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdURBQUE7RUFFQSxnREFBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0VBS0EsdUJBQUE7RUFDQSxtQkFBQTtBREhKO0FDS0k7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBREhSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgYSBHb29nbGUgRm9udFxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzo0MDAsNzAwJyk7XHJcblxyXG4vLyBTZXQgeW91ciBicmFuZCBjb2xvcnNcclxuJHB1cnBsZTogI2E1OWFkNztcclxuJHBpbms6ICNmZTc2YzI7XHJcbiRibHVlOiAjMzdjN2YyO1xyXG5cclxuJGxpZ2h0LXJlZDojZmZmM2YzO1xyXG5cclxuJGxpZ2h0OiNmYWZjZmY7XHJcblxyXG5cclxuLy8gZ2xvYmFsIHZhcmlhYmxlc1xyXG4kZmFtaWx5LXNhbnMtc2VyaWY6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XHJcblxyXG4kcHJpbWFyeTogJHB1cnBsZTtcclxuJGxpbms6ICRibHVlO1xyXG5cclxuXHJcbi8vIGNvbXBvbmVudCB2YXJpYWJsZXNcclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0O1xyXG4kY29udHJvbC1ib3JkZXItd2lkdGg6IDJweDtcclxuJGlucHV0LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiNmM2Y1ZmE7XHJcbiRpbnB1dC1zaGFkb3c6IG5vbmU7XHJcblxyXG5cclxuXHJcblxyXG4vKmdsb2JhbCBzdHlsZSovXHJcblxyXG5odG1sLCBib2R5e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIC8vRm9udCBzaXplXHJcbiAgICBmb250LXNpemU6IDE4IHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzo0MDAsNzAwXCIpO1xuLypnbG9iYWwgc3R5bGUqL1xuaHRtbCwgYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAxOCBweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubGF5b3V0LWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5sYXlvdXQtYm94IC5wYWdlcy1jb250ZW50IHtcbiAgZmxleC1ncm93OiAxO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi50b3AtYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjhweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmU3NmMyLCAjMzdjN2YyKTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXNocmluazogMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udG9wLWJhciBoMSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyNHB4O1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uL21haW4tc3R5bGVzLnNjc3MnO1xyXG5cclxuXHJcbi5sYXlvdXQtYm94e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgXHJcblxyXG4gICAgLnBhZ2VzLWNvbnRlbnR7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIH1cclxufVxyXG5cclxuLnRvcC1iYXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjhweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCggdG8gcmlnaHQsICRwaW5rLCAkYmx1ZSk7XHJcblxyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKGJsYWNrLCAwLjE1KTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gICAgXHJcblxyXG4gICAgLy9DZW50cmFyIGxvcyBoaWpvc1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGgxe1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-layout',
          templateUrl: './main-layout.component.html',
          styleUrls: ['./main-layout.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/note-details/note-details.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/note-details/note-details.component.ts ***!
    \**************************************************************/

  /*! exports provided: NoteDetailsComponent */

  /***/
  function srcAppPagesNoteDetailsNoteDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoteDetailsComponent", function () {
      return NoteDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_node_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/node.models */
    "./src/app/shared/node.models.ts");
    /* harmony import */


    var src_app_shared_notes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/notes.service */
    "./src/app/shared/notes.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var NoteDetailsComponent = /*#__PURE__*/function () {
      function NoteDetailsComponent(notesService, router, route) {
        _classCallCheck(this, NoteDetailsComponent);

        this.notesService = notesService;
        this.router = router;
        this.route = route;
      }

      _createClass(NoteDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          //saber si se esta agregando o editando
          this.route.params.subscribe(function (params) {
            _this.note = new src_app_shared_node_models__WEBPACK_IMPORTED_MODULE_1__["Note"]();

            if (params.id) {
              _this.note = _this.notesService.get(params.id);
              _this.noteId = params.id;
              _this["new"] = false;
            } else {
              _this["new"] = true;
            }
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          if (this["new"]) {
            //guardar las notas
            this.notesService.add(form.value);
          } else {
            this.notesService.update(this.noteId, form.value.title, form.value.body);
          }

          this.router.navigateByUrl('/');
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.router.navigateByUrl('/');
        }
      }]);

      return NoteDetailsComponent;
    }();

    NoteDetailsComponent.ɵfac = function NoteDetailsComponent_Factory(t) {
      return new (t || NoteDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    NoteDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NoteDetailsComponent,
      selectors: [["app-note-details"]],
      decls: 20,
      vars: 3,
      consts: [[1, "form-container"], [3, "ngSubmit"], ["noteForm", "ngForm"], [1, "field"], [1, "label"], [1, "control"], ["type", "text", "name", "title", "required", "", 1, "input", 3, "ngModel"], ["name", "body", 1, "textarea", 3, "ngModel"], [1, "field", "is-grouped", "is-pulled-right"], ["type", "button", 1, "button", "is-text", 3, "click"], ["type", "submit", 1, "button", "is-success", 3, "disabled"]],
      template: function NoteDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NoteDetailsComponent_Template_form_ngSubmit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return ctx.onSubmit(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "textarea", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoteDetailsComponent_Template_button_click_15_listener() {
            return ctx.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cancelar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Guardar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.note.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.note.body);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: [".form-container[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: auto;\n  margin-top: 35px;\n}\n\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-color: red;\n}\n\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%]:focus, textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]:focus {\n  box-shadow: 0px 0px 0px 2px rgba(255, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90ZS1kZXRhaWxzL0M6XFxVc2Vyc1xcVDU0MHBcXERlc2t0b3BcXFByb3llY3RvcyBhbmd1bGFyXFxub3RlIGFwcFxcbm90ZXNBcHAvc3JjXFxhcHBcXHBhZ2VzXFxub3RlLWRldGFpbHNcXG5vdGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbm90ZS1kZXRhaWxzL25vdGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0FDQUo7O0FER0k7RUFDQyxpQkFBQTtBQ0FMOztBRENLO0VBQ0ksZ0RBQUE7QUNDVCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGUtZGV0YWlscy9ub3RlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbn1cclxuaW5wdXQsIHRleHRhcmVhe1xyXG4gICAgJi5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICAgJjpmb2N1c3tcclxuICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4IHJnYmEocmVkLCAwLjEpO1xyXG4gICAgIH1cclxuICAgICBcclxuICAgIH1cclxufVxyXG4iLCIuZm9ybS1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDM1cHg7XG59XG5cbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCwgdGV4dGFyZWEubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG59XG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQ6Zm9jdXMsIHRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCByZ2JhKDI1NSwgMCwgMCwgMC4xKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoteDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-note-details',
          templateUrl: './note-details.component.html',
          styleUrls: ['./note-details.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_shared_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/notes-list/notes-list.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/notes-list/notes-list.component.ts ***!
    \**********************************************************/

  /*! exports provided: NotesListComponent */

  /***/
  function srcAppPagesNotesListNotesListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotesListComponent", function () {
      return NotesListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var src_app_shared_notes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/notes.service */
    "./src/app/shared/notes.service.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../note-card/note-card.component */
    "./src/app/note-card/note-card.component.ts");

    var _c0 = ["filterInput"];

    function NotesListComponent_app_note_card_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-note-card", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("delete", function NotesListComponent_app_note_card_9_Template_app_note_card_delete_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var note_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.deleteNote(note_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var note_r2 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("link", ctx_r1.generateNoteURL(note_r2))("@itemAnim", undefined)("title", note_r2.title)("body", note_r2.body);
      }
    }

    var NotesListComponent = /*#__PURE__*/function () {
      function NotesListComponent(notesService) {
        _classCallCheck(this, NotesListComponent);

        this.notesService = notesService;
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSearch"];
        this.notes = new Array();
        this.filteredNote = new Array();
      }

      _createClass(NotesListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //todas las notas
          this.notes = this.notesService.getAll();
          this.filteredNote = this.notesService.getAll();
        }
      }, {
        key: "deleteNote",
        value: function deleteNote(note) {
          var noteId = this.notesService.getId(note);
          this.notesService["delete"](noteId); // this.filter(this.filterInputElRef.nativeElement.value);

          this.filter('');
        }
      }, {
        key: "generateNoteURL",
        value: function generateNoteURL(note) {
          var noteId = this.notesService.getId(note);
          return noteId;
        }
      }, {
        key: "filter",
        value: function filter(query) {
          var _this2 = this;

          query = query.toLowerCase().trim();
          var allResults = new Array(); //partir en query 

          var terms = query.split(' '); //dividir en spaces
          // quitar duplicados

          terms = this.removeDuplicates(terms); //complile all the resultados

          terms.forEach(function (term) {
            var results = _this2.relevantNotes(term);

            allResults = [].concat(_toConsumableArray(allResults), _toConsumableArray(results));
          }); //no mostrar el mismo resultado varias veces

          var uniqueResults = this.removeDuplicates(allResults);
          this.filteredNote = uniqueResults; //Organizar por relevancia

          this.sortByRelevancy(allResults);
        }
      }, {
        key: "removeDuplicates",
        value: function removeDuplicates(arr) {
          var uniqueResults = new Set(); // loop the array

          arr.forEach(function (e) {
            return uniqueResults.add(e);
          });
          return Array.from(uniqueResults);
        }
      }, {
        key: "relevantNotes",
        value: function relevantNotes(query) {
          query = query.toLowerCase().trim();
          var relevantNotes = this.notes.filter(function (note) {
            if (note.title && note.title.toLowerCase().includes(query)) {
              return true;
            }

            if (note.body && note.body.toLowerCase().includes(query)) {
              return true;
            }

            return false;
          });
          return relevantNotes;
        }
      }, {
        key: "sortByRelevancy",
        value: function sortByRelevancy(searchResults) {
          var _this3 = this;

          var noteCountObj = {};
          searchResults.forEach(function (note) {
            var noteId = _this3.notesService.getId(note);

            if (noteCountObj[noteId]) {
              noteCountObj[noteId] += 1;
            } else {
              noteCountObj[noteId] = 1;
            }
          });
          this.filteredNote = this.filteredNote.sort(function (a, b) {
            var aId = _this3.notesService.getId(a);

            var bId = _this3.notesService.getId(b);

            var aCount = noteCountObj[aId];
            var bCount = noteCountObj[bId];
            return bCount - aCount;
          });
        }
      }]);

      return NotesListComponent;
    }();

    NotesListComponent.ɵfac = function NotesListComponent_Factory(t) {
      return new (t || NotesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_notes_service__WEBPACK_IMPORTED_MODULE_3__["NotesService"]));
    };

    NotesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotesListComponent,
      selectors: [["app-notes-list"]],
      viewQuery: function NotesListComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.filterInputElRef = _t.first);
        }
      },
      decls: 12,
      vars: 3,
      consts: [[1, "main-container"], [1, "search-bar-container"], [1, "field"], [1, "control", "has-icons-left"], ["type", "text", "placeholder", "Filter", 1, "input", 3, "keyup"], ["filterInput", ""], [1, "icon", "is-small", "is-left"], [3, "icon"], [1, "notes-list"], [3, "link", "title", "body", "delete", 4, "ngFor", "ngForOf"], ["routerLink", "new", 1, "button", "floating-add-button", "is-primary"], [3, "link", "title", "body", "delete"]],
      template: function NotesListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function NotesListComponent_Template_input_keyup_4_listener($event) {
            return ctx.filter($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NotesListComponent_app_note_card_9_Template, 1, 4, "app-note-card", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "+ Agregar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@listAnim", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredNote);
        }
      },
      directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_7__["NoteCardComponent"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700\");\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  font-size: 18 px !important;\n  overflow: hidden;\n}\n.main-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 500px;\n  margin: auto;\n  padding-top: 50px;\n}\n.notes-list[_ngcontent-%COMP%] {\n  margin-top: 35px;\n  margin-bottom: 70px;\n}\napp-note-card[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 25px;\n}\n.floating-add-button[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  width: 500px;\n  border-radius: 0;\n  box-shadow: 0px 0px 15px 5px rgba(165, 154, 215, 0.2);\n  height: 68px;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90ZXMtbGlzdC9DOlxcVXNlcnNcXFQ1NDBwXFxEZXNrdG9wXFxQcm95ZWN0b3MgYW5ndWxhclxcbm90ZSBhcHBcXG5vdGVzQXBwL3NyY1xcbWFpbi1zdHlsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvbm90ZXMtbGlzdC9ub3Rlcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ub3Rlcy1saXN0L0M6XFxVc2Vyc1xcVDU0MHBcXERlc2t0b3BcXFByb3llY3RvcyBhbmd1bGFyXFxub3RlIGFwcFxcbm90ZXNBcHAvc3JjXFxhcHBcXHBhZ2VzXFxub3Rlcy1saXN0XFxub3Rlcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNRLHFFQUFBO0FBNkJSLGVBQUE7QUFFQTtFQUNJLFlBQUE7RUFHQSwyQkFBQTtFQUNBLGdCQUFBO0FDL0JKO0FDSEE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FES0o7QUNBQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QURHSjtBQ0NBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FERUo7QUNDQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0VBRUEscURBQUE7RUFFQSxZQUFBO0VBQ0EsZUFBQTtBRERKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbm90ZXMtbGlzdC9ub3Rlcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IGEgR29vZ2xlIEZvbnRcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDcwMCcpO1xyXG5cclxuLy8gU2V0IHlvdXIgYnJhbmQgY29sb3JzXHJcbiRwdXJwbGU6ICNhNTlhZDc7XHJcbiRwaW5rOiAjZmU3NmMyO1xyXG4kYmx1ZTogIzM3YzdmMjtcclxuXHJcbiRsaWdodC1yZWQ6I2ZmZjNmMztcclxuXHJcbiRsaWdodDojZmFmY2ZmO1xyXG5cclxuXHJcbi8vIGdsb2JhbCB2YXJpYWJsZXNcclxuJGZhbWlseS1zYW5zLXNlcmlmOiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xyXG5cclxuJHByaW1hcnk6ICRwdXJwbGU7XHJcbiRsaW5rOiAkYmx1ZTtcclxuXHJcblxyXG4vLyBjb21wb25lbnQgdmFyaWFibGVzXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICRsaWdodDtcclxuJGNvbnRyb2wtYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kaW5wdXQtYmFja2dyb3VuZC1jb2xvcjojZjNmNWZhO1xyXG4kaW5wdXQtc2hhZG93OiBub25lO1xyXG5cclxuXHJcblxyXG5cclxuLypnbG9iYWwgc3R5bGUqL1xyXG5cclxuaHRtbCwgYm9keXtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAvL0ZvbnQgc2l6ZVxyXG4gICAgZm9udC1zaXplOiAxOCBweCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDcwMFwiKTtcbi8qZ2xvYmFsIHN0eWxlKi9cbmh0bWwsIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTggcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4ubm90ZXMtbGlzdCB7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XG59XG5cbmFwcC1ub3RlLWNhcmQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLmZsb2F0aW5nLWFkZC1idXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDUwMHB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggNXB4IHJnYmEoMTY1LCAxNTQsIDIxNSwgMC4yKTtcbiAgaGVpZ2h0OiA2OHB4O1xuICBmb250LXNpemU6IDI0cHg7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vbWFpbi1zdHlsZXMuc2Nzcyc7XHJcblxyXG5cclxuLm1haW4tY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcblxyXG4gICAgXHJcbn1cclxuXHJcbi5ub3Rlcy1saXN0e1xyXG4gICAgbWFyZ2luLXRvcDogMzVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XHJcbn1cclxuXHJcblxyXG5hcHAtbm90ZS1jYXJke1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4uZmxvYXRpbmctYWRkLWJ1dHRvbntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG5cclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCA1cHggcmdiYSgkcHVycGxlLCAwLjIpO1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6IDY4cHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcblxyXG59Il19 */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('itemAnim', [//entrar niamtion
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [//iniciar
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          height: 0,
          opacity: 0,
          transform: 'scale(0.85)',
          'margin-bottom': 0,
          // expandir las propiedades del padding
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0
        }), //animar el espacio heght y margen
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          height: '*',
          'margin-bottom': '*',
          paddingTop: '*',
          paddingBottom: '*',
          paddingRight: '*',
          paddingLeft: '*'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(68)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(50, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          //primera scala
          transform: 'scale(1.85)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(50, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          // volver a scala normal
          transform: 'scale(1)',
          opacity: 0.75
        })), // down and fade
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('120ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          transform: 'scale(0.68)',
          opacity: 0
        })), // animar el espacio
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('150ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          height: 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0,
          'margin-bottom': 0
        }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('listAnim', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          opacity: 0,
          height: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])(100, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.2s ease')])], {
          optional: true
        })])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-notes-list',
          templateUrl: './notes-list.component.html',
          styleUrls: ['./notes-list.component.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('itemAnim', [//entrar niamtion
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [//iniciar
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            height: 0,
            opacity: 0,
            transform: 'scale(0.85)',
            'margin-bottom': 0,
            // expandir las propiedades del padding
            paddingTop: 0,
            paddingBottom: 0,
            paddingRight: 0,
            paddingLeft: 0
          }), //animar el espacio heght y margen
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            height: '*',
            'margin-bottom': '*',
            paddingTop: '*',
            paddingBottom: '*',
            paddingRight: '*',
            paddingLeft: '*'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(68)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(50, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            //primera scala
            transform: 'scale(1.85)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(50, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            // volver a scala normal
            transform: 'scale(1)',
            opacity: 0.75
          })), // down and fade
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('120ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            transform: 'scale(0.68)',
            opacity: 0
          })), // animar el espacio
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('150ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            height: 0,
            paddingTop: 0,
            paddingBottom: 0,
            paddingRight: 0,
            paddingLeft: 0,
            'margin-bottom': 0
          }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('listAnim', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 0,
            height: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])(100, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.2s ease')])], {
            optional: true
          })])])]
        }]
      }], function () {
        return [{
          type: src_app_shared_notes_service__WEBPACK_IMPORTED_MODULE_3__["NotesService"]
        }];
      }, {
        filterInputElRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['filterInput']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/node.models.ts":
  /*!***************************************!*\
    !*** ./src/app/shared/node.models.ts ***!
    \***************************************/

  /*! exports provided: Note */

  /***/
  function srcAppSharedNodeModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Note", function () {
      return Note;
    });

    var Note = function Note() {
      _classCallCheck(this, Note);
    };
    /***/

  },

  /***/
  "./src/app/shared/notes.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/notes.service.ts ***!
    \*****************************************/

  /*! exports provided: NotesService */

  /***/
  function srcAppSharedNotesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotesService", function () {
      return NotesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotesService = /*#__PURE__*/function () {
      function NotesService() {
        _classCallCheck(this, NotesService);

        this.notes = new Array();
      }

      _createClass(NotesService, [{
        key: "getAll",
        value: function getAll() {
          return this.notes;
        }
      }, {
        key: "get",
        value: function get(id) {
          return this.notes[id];
        }
      }, {
        key: "getId",
        value: function getId(note) {
          return this.notes.indexOf(note);
        }
      }, {
        key: "add",
        value: function add(note) {
          var newLength = this.notes.push(note);
          var index = newLength - 1;
          return index;
        }
      }, {
        key: "update",
        value: function update(id, title, body) {
          var note = this.notes[id];
          note.title = title;
          note.body = body;
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          this.notes.splice(id, 1);
        }
      }]);

      return NotesService;
    }();

    NotesService.ɵfac = function NotesService_Factory(t) {
      return new (t || NotesService)();
    };

    NotesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NotesService,
      factory: NotesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\T540p\Desktop\Proyectos angular\note app\notesApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map