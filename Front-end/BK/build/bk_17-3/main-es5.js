function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/check/check.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/check/check.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCheckCheckComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <app-topbar></app-topbar> -->\n<div class=\"app-topbar\">\n   \n      <mat-toolbar>        \n            <div class=\"left\"><img src=\"/../../assets/logo-wbg.svg\"></div>      \n      </mat-toolbar>\n    </div>\n<div class=\"container-fluid imagefull_mobile\">\n\n\n    <div class=\"row  show112\" style=\"text-align: left;\">\n        <div class=\"col-md-12 col-xs-12\">\n           \n      <button type=\"submit\" class=\"back_button_arraow\" (click)=\"check()\" ><img src=\"../../assets/arrowLeft.png\"></button>\n        </div>\n       </div>\n   <div class=\"row\">\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-md-8 col-xs-12\">\n                <div class=\"row\" style=\"text-align: left;\">                \n                    <div class=\"col-md-12 col-xs-12\">\n                        <div class=\"set\">\n                        <h3 class=\"style\">\n                        <!-- Water <br class=\"show112\">Summary -->\n                        {{ 'Report.heading2' | translate }}\n                        </h3>\n                        <h2 class=\"show111\">\n                            \n                                {{data.utlity_enter}}, {{data.city}}, {{data.country}} - {{data.postcode}}\n                        \n                        </h2>\n\n                        <h4 class=\"subheading\">\n                            {{ 'Report.subheading2' | translate }}\n                      \n                        </h4> \n                        </div>\n                    </div>\n                </div>\n                <!-- start water safety -->\n                <div class=\"border_table \" id=\"border_table\">\n\n\n\n                          <div class=\"row col-class\" *ngFor=\"let table of tables; let i = index\">    \n                          <div class=\"col-md-3 align_center\">\n                                              \n                              <div class=\"headings_box\">\n                              <h3>\n                                  {{'Report.'+table.table |translate}}\n                              </h3>\n                              </div>\n                          </div>          \n                          <div class=\"col-md-9 col-xs-12 align_center\">                                                            \n                              <table mat-table [dataSource]=\"table.data\" class=\"mat-elevation-z8\" id=\"table\">            \n\n                              <!-- Substance Column -->\n                              <ng-container matColumnDef=\"Substance\" class=\"head_css\">\n                              <th mat-header-cell *matHeaderCellDef class=\"head_css\"> {{ 'Report.Substance' | translate }} </th>\n                              <td mat-cell *matCellDef=\"let element\" class=\"header_title\" >                 \n                                <!-- (click)=\"openConfirmationDialog(element.Substance)\" -->\n                                <!-- {{element.Substance}}  -->\n\n                                {{'Report.'+element.Substance |translate}}\n                              </td>\n                              </ng-container>\n\n                              <ng-container matColumnDef=\"unit\">\n                                <th mat-header-cell *matHeaderCellDef> Unit </th>\n                                <td mat-cell *matCellDef=\"let element\" class=\"header_title\"> \n                \n                                  {{ element.Unit==undefined||element.Unit==''?('Report.Not reported' |translate ):element.Unit}} </td>\n                                </ng-container>\n\n                              <!-- Name Column -->\n                              <ng-container matColumnDef=\"Before\">\n                              <th mat-header-cell *matHeaderCellDef>{{ 'Report.Before' | translate }}</th>\n                              <td mat-cell *matCellDef=\"let element\">\n\n\n                                  {{element.Zone==undefined ||element.Zone== \"NaN\"?('Report.Not reported' |translate ):element.Zone}}\n\n                                  \n                              \n\n                              </td>\n                              </ng-container>\n\n                              <!-- Limit_range Column -->\n                              <ng-container matColumnDef=\"Limit_range\" >\n                              <th mat-header-cell *matHeaderCellDef > {{ 'Report.Limit_range' | translate }}    </th>\n                              <td mat-cell *matCellDef=\"let element\"  > \n                                \n                                \n                                  <!-- {{element.Max==undefined ||element.Max== \"NaN\" ||element.Max==''?'None':element.Max}}-->\n                                  \n\n                                  \n                                  {{\n                                    (element.Recommended =='' || element.Recommended == undefined)&& (element.Max=='' || element.Max == undefined)?('Report.Not reported' |translate ):\n                                \n                                (\n                                    element.Recommended !=''&& element.Max!=''?\n                                    (\n                                      element.Unit==''||element.Unit==undefined?element.Recommended +' - '+element.Max:element.Recommended +' - '+element.Max \n                                    ):\n\n                                    (\n                                        element.Recommended =='' && element.Max!=''?\n                                        element.Max                               \n                                        \n                                        :\n                                        element.Recommended\n                                        \n\n                                    )\n                                    \n                                  \n                                )\n                                \n                                \n                            }}\n\n\n                              </td>\n                              </ng-container>\n\n                              <!-- Report Column -->\n                              <ng-container matColumnDef=\"After\">\n                              <th mat-header-cell *matHeaderCellDef> {{ 'Report.After' | translate }} </th>\n                              <td mat-cell *matCellDef=\"let element\">\n\n                                  {{element.Filtering==undefined ||element.Filtering== \"NaN\" ||element.Filtering==''?('Report.Not reported' |translate ):element.Filtering}}\n\n                                  </td>\n                              </ng-container>\n\n                              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                              </table>            \n\n                          </div>\n\n                          </div>\n\n\n\n                <!-- </div> -->\n\n                <!-- end water safety -->\n                </div>\n                <div class=\"col-md-2\"></div>\n                <div class=\"row  show111\" style=\"text-align: center;\">\n                    <div class=\"col-md-12\">\n                          <button class=\"button_reset\" type=\"submit\" (click)=\"check()\" > {{ 'Report.Go_back' | translate }}</button>\n                    </div>\n                </div>\n   </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/comfirmation/comfirmation.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comfirmation/comfirmation.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComfirmationComfirmationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <app-topbar></app-topbar> -->\n\n<div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6 col-xs-12\">\n    \n        <div class=\"image\">\n            <div class=\"margin_left\">\n                <h1>\n                    {{ 'conformation.heading1' | translate }}\n                     <br> {{ 'conformation.heading2' | translate }} <br>  {{ 'conformation.heading3' | translate }}\n                </h1>\n    <br>\n    <br>\n                <button class=\"button_reset\" type=\"submit\" (click)=\"okay()\" [disabled]=\"!data.postcode\">Back</button>\n            </div>\n\n            \n        </div>\n    <div class=\"col-md-3\"></div>  \n    \n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/createprofile/createprofile.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/createprofile/createprofile.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCreateprofileCreateprofileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<!-- <app-topbar></app-topbar> -->\n\n<div class=\"app-topbar\">\n    \n<!-- <header>\n    <div class=\"row\">\n      <div class=\"col-sm-4 col-md-4\">  \n        <label>  \n          <select #langSelect (change)=\"function1(lang_data=translate.use(langSelect.value),langSelect.value)\">\n            <option *ngFor=\"let lang of translate.getLangs()\"  [value]=\"lang\" [selected]=\"lang === translate.currentLang\">{{ lang }}</option>\n          </select>\n        </label>\n      </div>\n \n  \n    <div class=\"col-sm-6 col-md-6 \">   \n      <h2 style=\"color:white;font-size:25px;margin-left:10%\">\n        {{ 'HOME.TITLE' | translate }}</h2>   \n     </div>\n  <div class=\"col-sm-2 col-md-2\">\n  <div style=\"float:right\">\n    <a ><i class=\"fa fa-shopping-cart\"></i></a> &nbsp;&nbsp;\n    <a ><i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;\n  </div>\n   \n  </div>\n  \n  </div>\n  </header> -->\n  \n  <mat-toolbar>\n    \n        <div class=\"left\"><img src=\"/../../assets/logo-wbg.svg\"></div>\n\n  \n  </mat-toolbar>\n</div>\n<div class=\"container\" >\n    <div class=\"row margin_top\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"col-md-6 col-xs-12 col-sm-12\">\n\n            <img src=\"../../assets/background@2x.png\" >\n            <h1>           \n\n                {{ 'HOME.heading1' | translate }}<br>{{ 'HOME.heading2' | translate }}\n            </h1>\n            <p>\n\n                {{ 'HOME.subheading1' | translate }}  \n            </p>\n            <form class=\"form\">\n                <input type=\"text\"  autocomplete=\"off\" [placeholder]=\"'HOME.placeholder' | translate\" name=\"postcode\" [(ngModel)]=\"data.postcode\">\n\n              <!-- <br> -->\n                <mat-form-field class=\"select\">\n                 <mat-select [(value)]=\"selectedCode\" (selectionChange)=\"function1(lang_data=translate.use(selectedCode),selectedCode)\">\n                  <mat-option class=\"option_item\" *ngFor=\"let language of languages\" [value]=\"language.value\">\n                      <img class=\"select_img\"src='{{language.img}}'> {{language.viewValue}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <img class=\"select_img position_img\" *ngIf='path' src='../../assets/english.png'>\n                <img class=\"select_img position_img\" *ngIf='!path' src='../../assets/spanish.png'>              \n                <!-- <br> -->\n                <button class=\"button_reset\" type=\"submit\" (click)=\"okay()\" [disabled]=\"!data.postcode\"> {{ 'HOME.Ok' | translate }} </button>\n            </form>\n            \n       \n        <div class=\"top\">\n            <span>* TAPP Water will continue to add cities in Spain over the coming <br>months targeting 98% of the population by end of 2020.</span>\n\n        </div>\n\n\n        </div>\n        <div class=\"col-md-3\"></div>\n        \n        \n        </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/dialog.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/dialog.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDialogDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<div class=\"padding_inside\">\n    <div mat-dialog-actions style=\"float:right\">\n        <span mat-button (click)=\"onNoClick()\" style=\"border:1px solid white;background:white;cursor: pointer;\"><i class=\"fas fa-times\"></i></span>\n      </div>\n    <h1>{{'Report'+data.heading}}</h1>\n    \n    <h3 >{{data.heading2}}</h3>\n    <div mat-dialog-content>\n    <p>{{data.p1}}</p>\n    <p>{{data.p}}</p>\n    <br>\n    <p>{{data.p3}}</p>\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<app-topbar></app-topbar>\n<div class=\"top_pending\">\n<h1>MyTAPP es un servicio gratuíto para TAPPY customers</h1>\n<div class=\"container\" >\n    <div class=\"row\" style=\"text-align: center; margin-top: 52px;\">\n      <div class=\"col-sm-4 col-md-4\">\n \n        <a class=\"icons\"> <img src=\"../../assets/icons8-android-100.png\"></a>\n        <p class=\"para\">Traquea el estado de tu filtro y recibe notificaciones cuando tengas que cambiar el cartucho</p>\n      </div>\n      <div class=\"col-sm-4 col-md-4\">\n    \n        <a class=\"icons\"> <img src=\"../../assets/image_2020_01_09T08_23_29_036Z.png\"></a>\n        <p class=\"para\">Traquea el estado de tu filtro y recibe notificaciones cuando tengas que cambiar el cartucho</p>\n      </div>\n      <div class=\"col-sm-4 col-md-4\">\n      \n        <a class=\"icons\"> <img src=\"../../assets/icons8-checkmark-512.png\"></a>\n        <p class=\"para\">Traquea el estado de tu filtro y recibe notificaciones cuando tengas que cambiar el cartucho</p>\n      </div>\n    </div>\n\n    <div class=\"row margin\" >\n      <div class=\"col-md-12\">\n        <h1 style=\"\"> Entra en tu Perfil</h1>\n\n\n      </div>\n\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4\"></div>\n      <div class=\"col-md-4\">\n\n        <form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\">\n  \n        \n\n          <!-- <div class=\"margin-top\">\n            <input type=\"text\" id=\"floating_name\" formControlName=\"firstName\" value=\"\">\n            <span class=\"floating-label\">Email</span>\n          </div>\n         \n\n          <div class=\"margin-top\">\n            <input type=\"text\" id=\"lastname\" formControlName=\"lastName\" value=\"\">\n            <span class=\"lastname\">Contraseña</span>\n\n          </div> -->\n         \n       \n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Email\" [formControl]=\"email\" required>\n            <!-- <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error> -->\n          </mat-form-field>\n          \n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Contraseña\" required>\n            <!-- <mat-error *ngIf=\"password.invalid\">{{getErrorMessage()}}</mat-error> -->\n            </mat-form-field>\n          \n          \n\n          <div style=\"text-align: left;\">\n            <br>\n            <br>\n            <p  style=\"font-size:16px;color:teal\">¿Olvidaste tu contraseña?</p>\n          </div>\n\n\n          \n          <button class=\"button\" type=\"submit\" [disabled]=\"!profileForm.valid\">Entrar</button>\n\n          \n          <button class=\"button_reset\" type=\"submit\" [disabled]=\"!profileForm.valid\">Crear perfil</button>\n        </form>\n\n\n        \n      </div>\n    </div>\n  </div>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n\n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nodata/nodata.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nodata/nodata.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNodataNodataComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <app-topbar></app-topbar> -->\n<div class=\"app-topbar\">\n     \n      <mat-toolbar>\n        \n            <div class=\"left\"><img src=\"/../../assets/logo-wbg.svg\"></div>\n     \n      </mat-toolbar>\n    </div>\n<div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6 col-xs-12 image\">\n\n        <h1>\n            {{ 'Nodata.heading1' | translate }}<br>\n            {{ 'Nodata.heading2' | translate }}\n          \n        </h1>\n        <p>\n            {{ 'Nodata.subheading' | translate }}\n            <!-- But please provide your e-mail address and we will notive you as soon as it’s available. -->\n        </p>\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\" class=\"form\">\n            <div class=\"form-group\">\n              \n                <input type=\"text\" [placeholder]=\"'Nodata.placeholder' | translate\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" class=\"input1\" />\n                <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                    <br>\n                    <div *ngIf=\"f.email.errors.required\" style=\"color:red\">\n                        *{{ 'Nodata.validation1' | translate }}\n                        </div>\n                    <div *ngIf=\"f.email.errors.email\" style=\"color:red\">*\n                        {{ 'Nodata.validation2' | translate }}\n                    </div>\n                </div>\n            </div>\n\n            <br>\n            <br>\n            <div style=\"text-align: left;margin-left: 8%;\n            margin-right: 4%;\">\n            <input autocomplete=\"off\" type=\"checkbox\" name=\"signup\" value=\"signup\" class=\"checkbox-circle\"> {{ 'Nodata.check' | translate }} \n            \n            </div>\n            <div class=\"form-group\">\n                <button class=\"button_reset btn btn-primary\" [disabled]=\"loading\">{{ 'Nodata.submit' | translate }}</button>\n            </div>\n        </form>\n\n\n\n    </div>\n<div class=\"col-md-3\"></div>\n\n\n</div>\n<div class=\"row\">\n    \n    <div class=\"top\">\n        <span>* TAPP Water will continue to add cities in Spain over the coming <br>months targeting 98% of the population by end of 2020.</span>\n    \n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/report/report.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report/report.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppReportReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<!-- <app-topbar></app-topbar> -->\n<div class=\"app-topbar\">      \n      <mat-toolbar>        \n            <div class=\"left\"><img src=\"/../../assets/logo-wbg.svg\"></div>      \n      </mat-toolbar>\n    </div>\n<div class=\"container-fluid imagefull_mobile\">\n\n    <div class=\"row margin_top\">\n        <div class=\"col-md-1\"></div>\n        <div class=\"col-md-10\">\n            <div class=\"container-fluid \">\n                <div class=\"row\">\n                    <div class=\"col-md-3\"></div>\n                    <div class=\"col-md-6 col-xs-12\">\n                        <h1>\n                            <span class=\"show111\">{{ 'Report.mobheading1' | translate }} <br>{{ 'Report.mobheading2' | translate }}</span> \n                            <span class=\"show112\">{{ 'Report.heading' | translate }} </span> \n\n                        </h1>\n                        <h2>\n                            {{data.utlity_enter}}, {{data.city}}, {{data.country}} - {{data.postcode}}\n                        </h2>\n            \n                    </div>\n                    <div class=\"col-md-3 \"></div>\n                </div>\n            </div>      \n                <div class=\"div_image\">\n                <div class=\"row inside image\" style=\"text-align: center;\">                \n                    <div class=\"col-md-12  col-xs-12\">   \n                        <p class=\"para show112\">\n                            <!-- Your water -->                            \n                            {{ 'Report.subheading' | translate }}\n                        </p>              \n                         <div class=\"row\">\n                            <div class=\"col-md-2\"></div>\n                            <div class=\"col-md-8  col-xs-12\">\n                                <div class=\"row\">\n\n                                    <div class=\"col-md-1\"></div>\n                                    <div class=\"col-md-10\">\n                                        <div class=\"row\">\n                                            <div class=\"col-md-4  col-xs-12\">\n                                                <p class=\"name show112\"> {{ 'Report.safety' | translate }}*</p>                              \n            \n                                                <!-- //desktop -->\n                                                <div class=\"background show112\">\n                                                <img *ngIf='data.drinkable==\"Yes\"' src=\"../../assets/quality@3x.png\" width=\"100%\" >\n            \n                                                <img *ngIf='data.drinkable==\"No\"' src=\"../../assets/icon_drin_don't safe.png\" width=\"100%\" >\n                                                <P *ngIf='data.drinkable==\"Under Review\"'>Under Review</P>\n                                                </div>\n            \n                                                <div class=\"show111\">\n                                                <p class=\"name show111\"  *ngIf='data.drinkable==\"Yes\"'> {{ 'Report.Status' | translate }}\n                                                    \n                                                <span *ngIf='data.drinkable==\"Yes\"'>* </span></p>\n                                                <div class=\"background safe\">\n                                                <img src=\"../../assets/group.png\"  *ngIf='data.drinkable==\"Yes\"' >                                                \n                                                <img src=\"../../assets/dontgroup.png\"*ngIf='data.drinkable==\"No\"'>\n                                                <P *ngIf='data.drinkable==\"Under Review\"'>\n                                                    {{ 'Report.Under_Review' | translate }}\n                                                    </P>\n                                                <p>\n                                                    *{{data.description}}\n                                                    </p>\n                                                </div>\n                                                </div>\n            \n            \n                                                </div>\n                                                <!-- //mobile -->\n                                                <div class=\"row show111\" style=\"text-align: center;\">\n                                                <div class=\"col-md-12 col-xs-12\">\n                                                <div class=\"view\" style=\"text-align: center;\">  \n                                                <p ><a href=\"https://tappwater.co/en/list-of-common-contaminants-substances-in-tap-water\" class=\"changes_view\">                                               \n                                                {{ 'Report.view_more_details' | translate }}  \n                                                </a>                                          \n                                                </p>                                      \n        \n                                                <p class=\"p_a\"><a (click)=\"opennewtap()\" >  \n                                                    Read more about the tap water in {{data.city}}\n                                                    </a>\n                                                </p>\n                                            </div>\n                                            \n                                                </div>\n                                                </div>\n                                                <!-- //mobile -->\n            \n                                                <div class=\"col-md-4  col-xs-6 \">\n                                                <p class=\"name name1\"> {{ 'Report.Taste' | translate }}</p>\n                                                <div class=\"background background_change1\">\n                                                <!-- bad -->\n\n                                                <!-- {{Chlorine}} <br>{{Hardness}} -->\n                                                <img *ngIf='((Chlorine > 0.5 && Hardness > 200)) || ((Chlorine > 0.5 && Hardness < 100)) ' src=\"../../assets/taste.png\" width=\"100%\" >\n                                                                         <!-- ok -->\n            \n            \n                                                <img *ngIf='((0.4 < Chlorine) && (Chlorine  < 0.6)) && ((100 < Hardness) && (Hardness< 200)) ||((0.4 == Chlorine && Hardness < 100)||(Chlorine == 0.5 && Hardness < 100))' src=\"../../assets/icon_taste_ok.png\" width=\"100%\" >\n            \n                                                <!-- good -->\n                                                <img *ngIf='0.4 > Chlorine && Hardness < 100' src=\"../../assets/icon_taste_good.png\" width=\"100%\" >\n            \n                                                </div>\n                                                </div>\n            \n            \n                                                <div class=\"col-md-4  col-xs-6\">\n                                                <p class=\"name name2\"> limescale</p>\n                                                <div class=\"background background_change2\">\n            \n                                                <!-- very high -->\n                                                <img *ngIf='Hardness > 250' src=\"../../assets/icon_limescale_very high level.png\" width=\"100%\"  >\n                                                <!-- high -->\n            \n                                                <img *ngIf='Hardness > 200 && Hardness <= 250' src=\"../../assets/icon_limescale_high level.png\" width=\"100%\"  >\n            \n                                                <!-- medium -->\n                                                <img *ngIf='Hardness > 100 && Hardness <= 200' src=\"../../assets/icon_limescale_medium level.png\" width=\"100%\" >\n            \n                                                <img *ngIf='Hardness <= 100' src=\"../../assets/limescale@2x.png\" width=\"100%\"  >\n                                                </div>\n                                                </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-1\"></div>\n                                    <!-- start  -->\n\n                                </div> \n                            </div>                      \n                    </div>                   \n                    </div>\n                    <div class=\"col-md-12  col-xs-12 margin_bottom show112\">\n                        <span class=\"paragraph\">\n                            *{{data.description}}\n                        </span>\n                    </div>\n                    \n\n                    <!-- start view and all description for desktop -->\n                     <div class=\"row show112\" style=\"text-align: center;\">\n                        <div class=\"col-md-12  col-xs-12\"> \n                            <br>       \n                            <br>       \n                        <p class=\"view \">   <a href=\"https://tappwater.co/en/list-of-common-contaminants-substances-in-tap-water\" > {{ 'Report.view' | translate }}</a></p>\n                        <p class=\"view\">  <a (click)=\"opennewtap()\" > \n                            Read more about the tap water in {{data.city}}\n                        \n                        </a></p>\n                        </div>\n                    </div> \n\n                    <!-- end view and all description for desktop -->\n\n\n\n                </div>  \n                \n                </div>\n        </div>\n        \n   </div>\n\n\n\n\n   <div class=\"row \">\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-md-8\">\n                <div class=\"row \" style=\"text-align: center;\">                \n                        <div class=\"col-md-12 \">\n                        <h3 class=\"style\">\n                            <!-- Water Summary -->\n                            {{ 'Report.heading2' | translate }}\n                        </h3>\n                        <h4 class=\"subheading\">\n                            {{ 'Report.subheading2' | translate }}\n                        </h4>           \n\n                        </div>\n\n                <!-- No information available for this postcode yet -->\n                <div class=\"row important\" >                \n                    <div class=\"col-md-12\" >\n                        <table mat-table [dataSource]=\"hold_array.data\" class=\"mat-elevation-z8\">\n                        <ng-container matColumnDef=\"Substance\" >\n                        <th mat-header-cell *matHeaderCellDef> {{ 'Report.Substance' | translate }} </th>\n                        <td mat-cell *matCellDef=\"let element\" class=\"header_title\">                             \n                            <a href=\"https://tappwater.co/en/list-of-common-contaminants-substances-in-tap-water/\">{{'Report.'+element.Substance |translate}} {{(element.Unit==undefined||element.Unit=='')?' ':' ('+element.Unit+')'}} </a>           \n                        </td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"Before\">\n                        <th mat-header-cell *matHeaderCellDef>{{ 'Report.Before_change' | translate }}  </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                            {{\n                                element.Before==undefined||element.Before== NaN ||element.Before==''|| element.Before==null?                               \n                                ('Report.Not reported' |translate)                 \n                             \n                                :(element.Before==\"Unknown\" || element.Before==\"Low\" || element.Before==\"Medium\" || element.Before==\"High\" ||element.Before==\"None reported\" ||element.Before==\"Below limit\")?\n                                \n                                ('Report.'+element.Before |translate):element.Before\n                            }}\n\n                        </td>\n                        </ng-container>\n\n                       \n                        <ng-container matColumnDef=\"Limit_range\" >\n                        <th mat-header-cell *matHeaderCellDef > {{ 'Report.note' | translate }} </th>\n                        <td mat-cell *matCellDef=\"let element\"> \n                        {{element.note=='' ||element.note== undefined? ('Report.Not reported' |translate):('Report.'+element.note |translate)}}\n\n                        </td>\n                        </ng-container>\n\n                       \n                        <ng-container matColumnDef=\"After\">\n                        <th mat-header-cell *matHeaderCellDef>{{ 'Report.After_change' | translate }}  </th>\n                        <td mat-cell *matCellDef=\"let element\"> \n\n                            {{\n                                element.After==undefined||element.After== \"NaN\" ||element.After==''|| element.After==null?('Report.Not reported' |translate):(element.After==\"Unknown\" || element.After==\"Low\" || element.After==\"Medium\" || element.After==\"High\" ||element.After==\"None reported\" ||element.After==\"Below limit\")?\n                                \n                                ('Report.'+element.After |translate):element.After\n                            }}\n\n                            <!-- {{element.After}} -->\n                        </td>\n                        </ng-container>\n                        <div *ngIf=\"!table_hide\">\n                            <h3>No information available for this postcode yet</h3>\n                           </div>\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                        </table>\n                        <div *ngIf=\"table_hide\" style=\"border-top: 1px solid #80808026;border-bottom: 1px solid #80808026;\">\n                            <br>                           \n                            <br>\n                            <h4>No information available for this postcode yet</h4>                           \n                            <br>\n                            <br>\n                        </div>\n                 </div>\n\n              \n                </div>\n        </div>\n        <div class=\"col-md-2\"></div>\n        <div class=\"row  \" style=\"text-align: center;\">\n            <div class=\"col-md-12\">\n                     <p class=\"view\" (click)=\"check()\">  <a> {{ 'Report.all' | translate }} </a></p>               \n                    <button class=\"button_reset\" type=\"submit\"  >              \n                        {{ 'Report.footer' | translate }} \n                    </button>\n                    <br>\n                    <br>\n            </div>\n           </div>\n\n\n   </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/topbar/topbar.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/topbar/topbar.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTopbarTopbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<header>\n  <div class=\"row\">\n    <div class=\"col-sm-4 col-md-4\">\n\n      <label>\n\n        <select #langSelect (change)=\"translate.use(langSelect.value)\">\n          <option *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\" [selected]=\"lang === translate.currentLang\">{{ lang }}</option>\n        </select>\n      </label>\n    </div>\n\n\n  <div class=\"col-sm-6 col-md-6 \">   \n    <h2 style=\"color:white;font-size:25px;margin-left:10%\">\n      {{ 'HOME.TITLE' | translate }}</h2>   \n   </div>\n<div class=\"col-sm-2 col-md-2\">\n<div style=\"float:right\">\n  <a ><i class=\"fa fa-shopping-cart\"></i></a> &nbsp;&nbsp;\n  <a ><i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;\n</div>\n \n</div>\n\n</div>\n</header>\n\n<mat-toolbar>\n  \n      <div class=\"left\"><img src=\"/../../assets/logo-wbg.svg\"></div>\n      <div class=\"right\">\n\n        <div class=\"topnav\" id=\"myTopnav\" style=\"float:right\">\n          <a  class=\"active\">\n            {{ 'HOME.Product' | translate }}\n          </a>\n          <a>\n            {{ 'HOME.Blog' | translate }}\n          </a>\n          <a > {{ 'HOME.Help' | translate }}</a>\n          <a>\n            {{ 'HOME.About_us' | translate }}           \n          </a>\n         \n        </div>\n      </div>\n\n</mat-toolbar>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

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

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
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

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/api.service.ts":
  /*!********************************!*\
    !*** ./src/app/api.service.ts ***!
    \********************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var ApiService =
    /*#__PURE__*/
    function () {
      function ApiService(http) {
        _classCallCheck(this, ApiService);

        this.http = http;
        this.url = "http://18.191.230.23:3000/";
      }

      _createClass(ApiService, [{
        key: "postdata",
        value: function postdata(url, data) {
          console.log(data);
          return this.http.post(this.url + url, data);
        }
      }, {
        key: "newmethod",
        value: function newmethod(url, data) {
          console.log(data);
        }
      }, {
        key: "testing",
        value: function testing(data) {
          this.data = data;
        }
      }, {
        key: "testing2",
        value: function testing2() {
          return this.data;
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ApiService);
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _createprofile_createprofile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./createprofile/createprofile.component */
    "./src/app/createprofile/createprofile.component.ts");
    /* harmony import */


    var _nodata_nodata_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./nodata/nodata.component */
    "./src/app/nodata/nodata.component.ts");
    /* harmony import */


    var _report_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./report/report.component */
    "./src/app/report/report.component.ts");
    /* harmony import */


    var _check_check_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./check/check.component */
    "./src/app/check/check.component.ts");
    /* harmony import */


    var _comfirmation_comfirmation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./comfirmation/comfirmation.component */
    "./src/app/comfirmation/comfirmation.component.ts");

    var routes = [// { path: '', component: LoginComponent },
    {
      path: '',
      component: _createprofile_createprofile_component__WEBPACK_IMPORTED_MODULE_3__["CreateprofileComponent"]
    }, {
      path: 'Nodata/:id',
      component: _nodata_nodata_component__WEBPACK_IMPORTED_MODULE_4__["NodataComponent"]
    }, {
      path: 'Report/:id/:postcode',
      component: _report_report_component__WEBPACK_IMPORTED_MODULE_5__["ReportComponent"]
    }, {
      path: 'check/:id/:postcode',
      component: _check_check_component__WEBPACK_IMPORTED_MODULE_6__["CheckComponent"]
    }, {
      path: 'confirmation',
      component: _comfirmation_comfirmation_component__WEBPACK_IMPORTED_MODULE_7__["ComfirmationComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        onSameUrlNavigation: 'reload'
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent = function AppComponent(router) {
      _classCallCheck(this, AppComponent);

      this.router = router;
      this.title = 'tapp';

      if (router.url == '/confirmation') {
        alert("confirmation");
      } // confirmation

    };

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: translateHttpLoaderFactory, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "translateHttpLoaderFactory", function () {
      return translateHttpLoaderFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./topbar/topbar.component */
    "./src/app/topbar/topbar.component.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/esm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/esm2015/table.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/esm2015/tree.js");
    /* harmony import */


    var _createprofile_createprofile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./createprofile/createprofile.component */
    "./src/app/createprofile/createprofile.component.ts");
    /* harmony import */


    var _nodata_nodata_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./nodata/nodata.component */
    "./src/app/nodata/nodata.component.ts");
    /* harmony import */


    var _report_report_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./report/report.component */
    "./src/app/report/report.component.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _check_check_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./check/check.component */
    "./src/app/check/check.component.ts");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _comfirmation_comfirmation_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./comfirmation/comfirmation.component */
    "./src/app/comfirmation/comfirmation.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./dialog/dialog.component */
    "./src/app/dialog/dialog.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js"); // import { HttpClient, HttpHeaders } from '@angular/common/http';


    function translateHttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_33__["TranslateHttpLoader"](http);
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_7__["TopbarComponent"], _createprofile_createprofile_component__WEBPACK_IMPORTED_MODULE_22__["CreateprofileComponent"], _nodata_nodata_component__WEBPACK_IMPORTED_MODULE_23__["NodataComponent"], _report_report_component__WEBPACK_IMPORTED_MODULE_24__["ReportComponent"], _check_check_component__WEBPACK_IMPORTED_MODULE_26__["CheckComponent"], _comfirmation_comfirmation_component__WEBPACK_IMPORTED_MODULE_30__["ComfirmationComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_35__["DialogComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_19__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_20__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_21__["CdkTreeModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__["ScrollingModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_17__["PortalModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__["DragDropModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"], _angular_http__WEBPACK_IMPORTED_MODULE_28__["HttpModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpClientModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_36__["MatDialogModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_34__["MDBBootstrapModule"].forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__["TranslateLoader"],
          useFactory: translateHttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpClient"]]
        }
      })],
      providers: [_api_service__WEBPACK_IMPORTED_MODULE_27__["ApiService"], {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_31__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_31__["HashLocationStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
      entryComponents: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_35__["DialogComponent"]],
      exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_19__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_20__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_21__["CdkTreeModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__["ScrollingModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_17__["PortalModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__["DragDropModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_36__["MatDialogModule"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/check/check.component.css":
  /*!*******************************************!*\
    !*** ./src/app/check/check.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppCheckCheckComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\nth.head_css.mat-header-cell.cdk-column-Substance.mat-column-Substance {\r\n    width: 23%;\r\n    border-bottom: 1px solid #80808042;\r\n}\r\nth.mat-header-cell.cdk-column-unit.mat-column-unit {\r\n    width: 17%;\r\n    text-align: center;\r\n    border-bottom: 1px solid #80808042;\r\n}\r\nth.mat-header-cell.cdk-column-Before.mat-column-Before {\r\n    width: 20%;\r\n    text-align: center;\r\n    border-bottom: 1px solid #80808042;\r\n}\r\nth.mat-header-cell.cdk-column-After.mat-column-After {\r\n    width: 20%;\r\n    text-align: center;\r\n    border-bottom: 1px solid #80808042;\r\n}\r\nth.show111.mat-header-cell.cdk-column-Limit_range.mat-column-Limit_range {\r\n    width: 20%;\r\n    text-align: center;\r\n    border-bottom: 1px solid #80808042;\r\n}\r\nth.mat-header-cell.cdk-column-Limit_range.mat-column-Limit_range {\r\n  border-bottom: 1px solid #80808042;\r\n}\r\ntable{\r\n    table-layout: fixed;\r\n    word-wrap: break-word;\r\n}\r\nhtml {\r\n    -webkit-text-size-adjust: none\r\n  }\r\n.mat-toolbar-row, .mat-toolbar-single-row {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    box-sizing: border-box;\r\n    padding: 0 16px;\r\n    width: 100%;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    white-space: nowrap;\r\n    background: white;\r\n}\r\n/* ----------- Non-Retina Screens ----------- */\r\n@media screen \r\n  and (min-width: 1200px) \r\n  and (max-width: 1600px) { \r\n      /* start */\r\n      .row.col-class {\r\n        display: table;    margin-top: 6%;\r\n    }\r\n\r\n    .show112{\r\n        display:none;\r\n    }\r\n    .margin_top{\r\n\r\n        margin-top:11px;\r\n    \r\n    }\r\n    .headings_box{\r\n        height: 76px;\r\n        background: #effbfa;\r\n        padding: 2% 5% 2% 5%;\r\n        width: auto;\r\n        margin-top: 48%;\r\n        -webkit-transform: rotate(-90deg);\r\n        transform: rotate(-90deg);\r\n        color: #003955;\r\n        text-align: center;\r\n        /* float: right; */\r\n    }\r\n    .headings_box h3{\r\n        font-size: 20px;\r\n        line-height: 1;\r\n    }\r\n    .margin_top h1{\r\n        /* font-size: 35px; */\r\n        font-family: Ubuntu;\r\n        font-weight: 600;\r\n    \r\n        font-size:36px;\r\n        /* text-align: center; */\r\n            color:#003955;\r\n    \r\n    }\r\n     h2{\r\n        font-size: 25px;\r\n        font-family: Ubuntu;\r\n        font-weight: 600;\r\n        color: #003955;\r\n        margin-bottom: 26px;\r\n        /* margin-top: -5px;w */\r\n    }\r\n    \r\n    .background img {\r\n        height: 200px;\r\n        width: auto;\r\n        padding: 20px;\r\n    }\r\n    .view{\r\n        margin-top:10px;\r\n        font-size:20px;\r\n        /* text-decoration: underline;\r\n         */\r\n         text-decoration: underline;\r\n    }\r\n    \r\n    .name{\r\n        font-size: 24px;\r\n        color: teal;\r\n        text-transform: uppercase;\r\n    }\r\n    .background{\r\n        background-color: #e6f7f7;\r\n    }\r\n    .row.inside {\r\n        position: absolute;\r\n        top: 121px;\r\n        left: 141px;\r\n    }\r\n    .paragraph{\r\n        color: #003955;\r\n        font-size: 14pt;\r\n        position: absolute;\r\n        top: 515px;\r\n        left: 70px;\r\n        font-family: serif;\r\n    }\r\n    .inside .para{\r\n        font-size: 34px;\r\n        color: #21365a;\r\n        margin-bottom: 36px;\r\n        margin-top: 10px;\r\n    \r\n    }\r\n    ::ng-deep td.mat-cell:last-of-type, td.mat-footer-cell:last-of-type, th.mat-header-cell:last-of-type {\r\n      padding-right: 0px;\r\n  }\r\n    .style{\r\n        font-size: 33px;\r\n        font-family: Ubuntu;\r\n        color: #003955;\r\n        margin-top: 62px;\r\n        font-weight: 600;\r\n        margin-bottom: -10px;\r\n        line-height: 1;\r\n    }\r\n    .subheading{\r\n        font-size: 22px;\r\n        color: #003955;\r\n        font-family: Ubuntu;\r\n        margin-top: 30px;\r\n    }\r\n    \r\n    table {\r\n        margin-top:10px;\r\n        width: 100%;\r\n        box-shadow:none;\r\n        text-align:left;\r\n    }  \r\n    \r\n    mat-row, td.mat-cell {\r\n        border-bottom-color: #00808085;\r\n        font-size: 16px;\r\n        line-height: 1.2;\r\n        font-family: Ubuntu;\r\n        color: #2b5d6f;\r\n        text-align: center;\r\n        \r\n    }\r\n    mat-header-row, mat-footer-row , th.mat-header-cell, td.mat-footer-cell{\r\n        border-bottom-color: white;\r\n        font-size: 19px;\r\n        line-height: 1.2;\r\n        font-family: Ubuntu;\r\n        text-align: center;\r\n        padding-right: 0px;\r\n    }\r\n    \r\n    .mat-header-cell {\r\n        color: #d0c9d6;\r\n        font-family: Ubuntu;\r\n        text-align: center;\r\n        padding-right: 0px;\r\n    }\r\n    \r\n    \r\n    .button_reset{\r\n        color: white;\r\n        height:64px;\r\n        font-size:20px;\r\n        width:354px;\r\n        background: teal;\r\n        border-radius: 30px;\r\n        border: 2px solid teal;\r\n        margin-top: 80px;\r\n        margin-bottom: 100px;\r\n        outline: none;\r\n    }\r\n    \r\n    .set{\r\n        margin-left: 333px;\r\n        /* margin-bottom: 42px; */\r\n    }\r\n    \r\n    td.header_title.mat-cell.cdk-column-Substance.mat-column-Substance.ng-star-inserted{\r\n    \r\n        font-size: 20px;\r\n        font-weight: bold;\r\n        font-family: Ubuntu;\r\n    }\r\n    \r\n}\r\n/* ----------- iPhone 4 and 4S ----------- */\r\n/* Portrait and Landscape */\r\n@media only screen and (max-width: 600px){\r\n\r\n    td.mat-cell:first-of-type, td.mat-footer-cell:first-of-type, th.mat-header-cell:first-of-type {\r\n        padding-left: 0px;\r\n    }\r\n    .border_table{\r\n        height: 300px;\r\n        /* width: 300px; */\r\n        background-color: white;\r\n        padding-top: 12px;\r\n        border-top-left-radius: 87px;\r\n    }\r\n\r\n    .container-fluid {\r\n        padding-right: 0px;\r\n        padding-left: 0px;\r\n        margin-right: auto;\r\n        margin-left: auto;\r\n    }\r\n\r\n::ng-deep .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {\r\n    position: relative;\r\n    min-height: 1px;\r\n    padding-right: 0px;\r\n    padding-left: 0px;\r\n}\r\n    .app-topbar {\r\n        display: none;\r\n    }\r\n\r\n\r\n    .margin_top{\r\n\r\n        margin-top:11px;\r\n    \r\n    }\r\n    .headings_box{\r\n   \r\n        display: none;\r\n    }\r\n    .margin_top h1{\r\n        /* font-size: 35px; */\r\n        font-family: Ubuntu;\r\n        font-weight: 600;\r\n    \r\n        font-size:36px;\r\n        /* text-align: center; */\r\n            color:#003955;\r\n    \r\n    }\r\n     h2{\r\n        font-size: 25px;\r\n        font-family: Ubuntu;\r\n        font-weight: 600;\r\n        color: #003955;\r\n        margin-bottom: 26px;\r\n        /* margin-top: -5px;w */\r\n    }\r\n    \r\n    .background img {\r\n        height: 200px;\r\n        width: auto;\r\n        padding: 20px;\r\n    }\r\n    .view{\r\n        margin-top:10px;\r\n        font-size:20px;\r\n        /* text-decoration: underline;\r\n         */\r\n         text-decoration: underline;\r\n    }\r\n    \r\n    .name{\r\n        font-size: 24px;\r\n        color: teal;\r\n        text-transform: uppercase;\r\n    }\r\n    .background{\r\n        background-color: #e6f7f7;\r\n    }\r\n    .row.inside {\r\n        position: absolute;\r\n        top: 121px;\r\n        left: 141px;\r\n    }\r\n    .paragraph{\r\n        color: #003955;\r\n        font-size: 14pt;\r\n        position: absolute;\r\n        top: 515px;\r\n        left: 70px;\r\n        font-family: serif;\r\n    }\r\n    .inside .para{\r\n        font-size: 34px;\r\n        color: #21365a;\r\n        margin-bottom: 36px;\r\n        margin-top: 10px;\r\n    \r\n    }\r\n    .style{\r\n        font-size: 24px;\r\n        font-family: Ubuntu;\r\n        color: #003955;\r\n        margin-top: 62px;\r\n        font-weight: 600;\r\n        margin-bottom: -10px;\r\n    }\r\n    .subheading{\r\n        font-size: 17px;\r\n        color: #003955;\r\n        font-family: Ubuntu;\r\n        margin-top: 30px;\r\n    }\r\n    \r\n    table {\r\n        margin-top: 10px;\r\n        width: 87%;\r\n        box-shadow: none;\r\n        text-align: left;\r\n        margin-left: 5%;\r\n    }  \r\n    \r\n    .table {\r\n      width: 98%;\r\n      box-shadow: none;\r\n      text-align: left;\r\n      margin-left: 1%;\r\n      margin-right: 1%;\r\n      margin-top: 12%;\r\n    } \r\n    mat-row, td.mat-cell {\r\n        border-bottom-color: #00808085;\r\n        font-size: 11px;\r\n        line-height: 1.2;\r\n        font-family: Ubuntu;\r\n        color: #2b5d6f;\r\n        text-align: center;\r\n        padding-right: 0px !important;\r\n    }\r\n    mat-header-row, mat-footer-row , th.mat-header-cell, td.mat-footer-cell{\r\n        border-bottom-color: white;\r\n        font-size: 12px;\r\n        line-height: 1.2;\r\n        font-family: Ubuntu;\r\n        text-align: center;\r\n    }\r\n    \r\n    .mat-header-cell{\r\n        color: #d0c9d6;\r\n        font-family: Ubuntu;\r\n    }\r\n    \r\n    \r\n    .button_reset{\r\n        color: white;\r\n        height:64px;\r\n        font-size:20px;\r\n        width:354px;\r\n        background: teal;\r\n        border-radius: 30px;\r\n        border: 2px solid teal;\r\n        margin-top: 80px;\r\n        margin-bottom: 100px;\r\n    }\r\n    .show111{\r\n        display:none\r\n    }\r\n    .set{\r\n        margin-bottom: 28px;\r\n        margin-left: 25px;\r\n    }\r\n    .back_button_arraow{\r\n        margin-top:15px;\r\n        background-color: #E1F3F8;\r\n        border:1px solid #E1F3F8;\r\n    }\r\n    .row {\r\n        margin-right: 0px;\r\n        margin-left: 0px;\r\n    }\r\n    .imagefull_mobile{\r\n        background-image: url('check.png');\r\n        background-repeat: no-repeat;    \r\n        background-size: cover;  \r\n        width: 100%;       \r\n        height: 323px; \r\n        \r\n        }\r\n    td.header_title.mat-cell.cdk-column-Substance.mat-column-Substance.ng-star-inserted{\r\n    \r\n        font-size: 18px;\r\n        font-weight: bold;\r\n        font-family: Ubuntu;\r\n    }\r\n    \r\n}\r\n@media (min-width: 768px) and (max-width: 1024px) {\r\n\r\n  td.mat-cell:first-of-type, td.mat-footer-cell:first-of-type, th.mat-header-cell:first-of-type {\r\n    padding-left: 0px;\r\n}\r\n.border_table{\r\n    height: 300px;\r\n    /* width: 300px; */\r\n    background-color: white;\r\n    padding-top: 12px;\r\n    border-top-left-radius: 87px;\r\n}\r\n\r\n.container-fluid {\r\n    padding-right: 0px;\r\n    padding-left: 0px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}\r\n\r\n::ng-deep .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {\r\nposition: relative;\r\nmin-height: 1px;\r\npadding-right: 0px;\r\npadding-left: 0px;\r\n}\r\n.app-topbar {\r\n    display: none;\r\n}\r\n\r\n\r\n.margin_top{\r\n\r\n    margin-top:11px;\r\n\r\n}\r\n.headings_box{\r\n\r\n    display: none;\r\n}\r\n.margin_top h1{\r\n    /* font-size: 35px; */\r\n    font-family: Ubuntu;\r\n    font-weight: 600;\r\n\r\n    font-size:36px;\r\n    /* text-align: center; */\r\n        color:#003955;\r\n\r\n}\r\n h2{\r\n    font-size: 25px;\r\n    font-family: Ubuntu;\r\n    font-weight: 600;\r\n    color: #003955;\r\n    margin-bottom: 26px;\r\n    /* margin-top: -5px;w */\r\n}\r\n\r\n.background img {\r\n    height: 200px;\r\n    width: auto;\r\n    padding: 20px;\r\n}\r\n.view{\r\n    margin-top:10px;\r\n    font-size:20px;\r\n    /* text-decoration: underline;\r\n     */\r\n     text-decoration: underline;\r\n}\r\n\r\n.name{\r\n    font-size: 24px;\r\n    color: teal;\r\n    text-transform: uppercase;\r\n}\r\n.background{\r\n    background-color: #e6f7f7;\r\n}\r\n.row.inside {\r\n    position: absolute;\r\n    top: 121px;\r\n    left: 141px;\r\n}\r\n.paragraph{\r\n    color: #003955;\r\n    font-size: 14pt;\r\n    position: absolute;\r\n    top: 515px;\r\n    left: 70px;\r\n    font-family: serif;\r\n}\r\n.inside .para{\r\n    font-size: 34px;\r\n    color: #21365a;\r\n    margin-bottom: 36px;\r\n    margin-top: 10px;\r\n\r\n}\r\n.style{\r\n    font-size: 24px;\r\n    font-family: Ubuntu;\r\n    color: #003955;\r\n    margin-top: 62px;\r\n    font-weight: 600;\r\n    margin-bottom: -10px;\r\n}\r\n.subheading{\r\n    font-size: 17px;\r\n    color: #003955;\r\n    font-family: Ubuntu;\r\n    margin-top: 30px;\r\n}\r\n\r\ntable {\r\n    margin-top: 10px;\r\n    width: 87%;\r\n    box-shadow: none;\r\n    text-align: left;\r\n    margin-left: 5%;\r\n}  \r\n\r\n.table {\r\n  width: 98%;\r\n  box-shadow: none;\r\n  text-align: left;\r\n  margin-left: 1%;\r\n  margin-right: 1%;\r\n} \r\nmat-row, td.mat-cell {\r\n    border-bottom-color: #00808085;\r\n    font-size: 11px;\r\n    line-height: 1.2;\r\n    font-family: Ubuntu;\r\n    color: #2b5d6f;\r\n    text-align: center;\r\n    padding-right: 0px !important;\r\n}\r\nmat-header-row, mat-footer-row , th.mat-header-cell, td.mat-footer-cell{\r\n    border-bottom-color: white;\r\n    font-size: 12px;\r\n    line-height: 1.2;\r\n    font-family: Ubuntu;\r\n    text-align: center;\r\n}\r\n\r\n.mat-header-cell{\r\n    color: #d0c9d6;\r\n    font-family: Ubuntu;\r\n}\r\n\r\n\r\n.button_reset{\r\n    color: white;\r\n    height:64px;\r\n    font-size:20px;\r\n    width:354px;\r\n    background: teal;\r\n    border-radius: 30px;\r\n    border: 2px solid teal;\r\n    margin-top: 80px;\r\n    margin-bottom: 100px;\r\n}\r\n.show111{\r\n    display:none\r\n}\r\n.set{\r\n    margin-bottom: 28px;\r\n    margin-left: 9%;\r\n}\r\n.back_button_arraow{\r\n    margin-top:15px;\r\n    background-color: #E1F3F8;\r\n    border:1px solid #E1F3F8;\r\n}\r\n.row {\r\n    margin-right: 0px;\r\n    margin-left: 0px;\r\n}\r\n.imagefull_mobile{\r\n    background-image: url('check.png');\r\n    background-repeat: no-repeat;    \r\n    background-size: cover;  \r\n    width: 100%;       \r\n    height: 323px; \r\n    \r\n    }\r\ntd.header_title.mat-cell.cdk-column-Substance.mat-column-Substance.ng-star-inserted{\r\n\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    font-family: Ubuntu;\r\n}\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2svY2hlY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixrQ0FBa0M7QUFDdEM7QUFFQTtFQUNFLGtDQUFrQztBQUNwQztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6QjtBQUdBO0lBQ0k7RUFDRjtBQUVBO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixXQUFXO0lBQ1gsOEJBQW1CO0lBQW5CLDZCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCO0FBR0EsK0NBQStDO0FBQy9DOzs7TUFHTSxVQUFVO01BQ1Y7UUFDRSxjQUFjLEtBQUssY0FBYztJQUNyQzs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTs7UUFFSSxlQUFlOztJQUVuQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsV0FBVztRQUNYLGVBQWU7UUFDZixpQ0FBaUM7UUFDakMseUJBQXlCO1FBQ3pCLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsY0FBYztJQUNsQjtJQUNBO1FBQ0kscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQixnQkFBZ0I7O1FBRWhCLGNBQWM7UUFDZCx3QkFBd0I7WUFDcEIsYUFBYTs7SUFFckI7S0FDQztRQUNHLGVBQWU7UUFD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LGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0NBQStDO0lBQy9DLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGFBQWE7O0lBRWI7QUFDSjs7SUFFSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQSIsImZpbGUiOiJzcmMvYXBwL2NoZWNrL2NoZWNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbnRoLmhlYWRfY3NzLm1hdC1oZWFkZXItY2VsbC5jZGstY29sdW1uLVN1YnN0YW5jZS5tYXQtY29sdW1uLVN1YnN0YW5jZSB7XHJcbiAgICB3aWR0aDogMjMlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4MDgwODA0MjtcclxufVxyXG50aC5tYXQtaGVhZGVyLWNlbGwuY2RrLWNvbHVtbi11bml0Lm1hdC1jb2x1bW4tdW5pdCB7XHJcbiAgICB3aWR0aDogMTclO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4MDgwODA0MjtcclxufVxyXG50aC5tYXQtaGVhZGVyLWNlbGwuY2RrLWNvbHVtbi1CZWZvcmUubWF0LWNvbHVtbi1CZWZvcmUge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODA4MDgwNDI7XHJcbn1cclxudGgubWF0LWhlYWRlci1jZWxsLmNkay1jb2x1bW4tQWZ0ZXIubWF0LWNvbHVtbi1BZnRlciB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4MDgwODA0MjtcclxufVxyXG50aC5zaG93MTExLm1hdC1oZWFkZXItY2VsbC5jZGstY29sdW1uLUxpbWl0X3JhbmdlLm1hdC1jb2x1bW4tTGltaXRfcmFuZ2Uge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODA4MDgwNDI7XHJcbn1cclxuXHJcbnRoLm1hdC1oZWFkZXItY2VsbC5jZGstY29sdW1uLUxpbWl0X3JhbmdlLm1hdC1jb2x1bW4tTGltaXRfcmFuZ2Uge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODA4MDgwNDI7XHJcbn1cclxudGFibGV7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG5cclxuaHRtbCB7XHJcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmVcclxuICB9XHJcblxyXG4gIC5tYXQtdG9vbGJhci1yb3csIC5tYXQtdG9vbGJhci1zaW5nbGUtcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tIE5vbi1SZXRpbmEgU2NyZWVucyAtLS0tLS0tLS0tLSAqL1xyXG5AbWVkaWEgc2NyZWVuIFxyXG4gIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIFxyXG4gIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHsgXHJcbiAgICAgIC8qIHN0YXJ0ICovXHJcbiAgICAgIC5yb3cuY29sLWNsYXNzIHtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTsgICAgbWFyZ2luLXRvcDogNiU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNob3cxMTJ7XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG4gICAgLm1hcmdpbl90b3B7XHJcblxyXG4gICAgICAgIG1hcmdpbi10b3A6MTFweDtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgLmhlYWRpbmdzX2JveHtcclxuICAgICAgICBoZWlnaHQ6IDc2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2VmZmJmYTtcclxuICAgICAgICBwYWRkaW5nOiAyJSA1JSAyJSA1JTtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiA0OCU7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICAgICAgY29sb3I6ICMwMDM5NTU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC8qIGZsb2F0OiByaWdodDsgKi9cclxuICAgIH1cclxuICAgIC5oZWFkaW5nc19ib3ggaDN7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgfVxyXG4gICAgLm1hcmdpbl90b3AgaDF7XHJcbiAgICAgICAgLyogZm9udC1zaXplOiAzNXB4OyAqL1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBVYnVudHU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTozNnB4O1xyXG4gICAgICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxuICAgICAgICAgICAgY29sb3I6IzAwMzk1NTtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICBmb250LWZhbWlseTogVWJ1bnR1O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6ICMwMDM5NTU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjZweDtcclxuICAgICAgICAvKiBtYXJnaW4tdG9wOiAtNXB4O3cgKi9cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJhY2tncm91bmQgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAudmlld3tcclxuICAgICAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgLyogdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubmFtZXtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgY29sb3I6IHRlYWw7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxuICAgIC5iYWNrZ3JvdW5ke1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmY3Zjc7XHJcbiAgICB9XHJcbiAgICAucm93Lmluc2lkZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTIxcHg7XHJcbiAgICAgICAgbGVmdDogMTQxcHg7XHJcbiAgICB9XHJcbiAgICAucGFyYWdyYXBoe1xyXG4gICAgICAgIGNvbG9yOiAjMDAzOTU1O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRwdDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MTVweDtcclxuICAgICAgICBsZWZ0OiA3MHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcclxuICAgIH1cclxuICAgIC5pbnNpZGUgLnBhcmF7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMjEzNjVhO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM2cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgOjpuZy1kZWVwIHRkLm1hdC1jZWxsOmxhc3Qtb2YtdHlwZSwgdGQubWF0LWZvb3Rlci1jZWxsOmxhc3Qtb2YtdHlwZSwgdGgubWF0LWhlYWRlci1jZWxsOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICB9XHJcbiAgICAuc3R5bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAzM3B4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBVYnVudHU7XHJcbiAgICAgICAgY29sb3I6ICMwMDM5NTU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNjJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgfVxyXG4gICAgLnN1YmhlYWRpbmd7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAzOTU1O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBVYnVudHU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGFibGUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3gtc2hhZG93Om5vbmU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgfSAgXHJcbiAgICBcclxuICAgIG1hdC1yb3csIHRkLm1hdC1jZWxsIHtcclxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMDA4MDgwODU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFVidW50dTtcclxuICAgICAgICBjb2xvcjogIzJiNWQ2ZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBtYXQtaGVhZGVyLXJvdywgbWF0LWZvb3Rlci1yb3cgLCB0aC5tYXQtaGVhZGVyLWNlbGwsIHRkLm1hdC1mb290ZXItY2VsbHtcclxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICBmb250LWZhbWlseTogVWJ1bnR1O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgICAgIGNvbG9yOiAjZDBjOWQ2O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBVYnVudHU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAuYnV0dG9uX3Jlc2V0e1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBoZWlnaHQ6NjRweDtcclxuICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICB3aWR0aDozNTRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0ZWFsO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdGVhbDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zZXR7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMzM3B4O1xyXG4gICAgICAgIC8qIG1hcmdpbi1ib3R0b206IDQycHg7ICovXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRkLmhlYWRlcl90aXRsZS5tYXQtY2VsbC5jZGstY29sdW1uLVN1YnN0YW5jZS5tYXQtY29sdW1uLVN1YnN0YW5jZS5uZy1zdGFyLWluc2VydGVke1xyXG4gICAgXHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBVYnVudHU7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA0IGFuZCA0UyAtLS0tLS0tLS0tLSAqL1xyXG5cclxuLyogUG9ydHJhaXQgYW5kIExhbmRzY2FwZSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuXHJcbiAgICB0ZC5tYXQtY2VsbDpmaXJzdC1vZi10eXBlLCB0ZC5tYXQtZm9vdGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSwgdGgubWF0LWhlYWRlci1jZWxsOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgfVxyXG4gICAgLmJvcmRlcl90YWJsZXtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIC8qIHdpZHRoOiAzMDBweDsgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4N3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICB9XHJcblxyXG46Om5nLWRlZXAgLmNvbC1sZy0xLCAuY29sLWxnLTEwLCAuY29sLWxnLTExLCAuY29sLWxnLTEyLCAuY29sLWxnLTIsIC5jb2wtbGctMywgLmNvbC1sZy00LCAuY29sLWxnLTUsIC5jb2wtbGctNiwgLmNvbC1sZy03LCAuY29sLWxnLTgsIC5jb2wtbGctOSwgLmNvbC1tZC0xLCAuY29sLW1kLTEwLCAuY29sLW1kLTExLCAuY29sLW1kLTEyLCAuY29sLW1kLTIsIC5jb2wtbWQtMywgLmNvbC1tZC00LCAuY29sLW1kLTUsIC5jb2wtbWQtNiwgLmNvbC1tZC03LCAuY29sLW1kLTgsIC5jb2wtbWQtOSwgLmNvbC1zbS0xLCAuY29sLXNtLTEwLCAuY29sLXNtLTExLCAuY29sLXNtLTEyLCAuY29sLXNtLTIsIC5jb2wtc20tMywgLmNvbC1zbS00LCAuY29sLXNtLTUsIC5jb2wtc20tNiwgLmNvbC1zbS03LCAuY29sLXNtLTgsIC5jb2wtc20tOSwgLmNvbC14cy0xLCAuY29sLXhzLTEwLCAuY29sLXhzLTExLCAuY29sLXhzLTEyLCAuY29sLXhzLTIsIC5jb2wteHMtMywgLmNvbC14cy00LCAuY29sLXhzLTUsIC5jb2wteHMtNiwgLmNvbC14cy03LCAuY29sLXhzLTgsIC5jb2wteHMtOSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtaW4taGVpZ2h0OiAxcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG4gICAgLmFwcC10b3BiYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5tYXJnaW5fdG9we1xyXG5cclxuICAgICAgICBtYXJnaW4tdG9wOjExcHg7XHJcbiAgICBcclxuICAgIH1cclxuICAgIC5oZWFkaW5nc19ib3h7XHJcbiAgIFxyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubWFyZ2luX3RvcCBoMXtcclxuICAgICAgICAvKiBmb250LXNpemU6IDM1cHg7ICovXHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFVidW50dTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgXHJcbiAgICAgICAgZm9udC1zaXplOjM2cHg7XHJcbiAgICAgICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gICAgICAgICAgICBjb2xvcjojMDAzOTU1O1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBVYnVudHU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogIzAwMzk1NTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNnB4O1xyXG4gICAgICAgIC8qIG1hcmdpbi10b3A6IC01cHg7dyAqL1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYmFja2dyb3VuZCBpbWcge1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxuICAgIC52aWV3e1xyXG4gICAgICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICAvKiB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgKi9cclxuICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5uYW1le1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBjb2xvcjogdGVhbDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG4gICAgLmJhY2tncm91bmR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjdmNztcclxuICAgIH1cclxuICAgIC5yb3cuaW5zaWRlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxMjFweDtcclxuICAgICAgICBsZWZ0OiAxNDFweDtcclxuICAgIH1cclxuICAgIC5wYXJhZ3JhcGh7XHJcbiAgICAgICAgY29sb3I6ICMwMDM5NTU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB0O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUxNXB4O1xyXG4gICAgICAgIGxlZnQ6IDcwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHNlcmlmO1xyXG4gICAgfVxyXG4gICAgLmluc2lkZSAucGFyYXtcclxuICAgICAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICAgICAgY29sb3I6ICMyMTM2NWE7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzZweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAuc3R5bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBVYnVudHU7XHJcbiAgICAgICAgY29sb3I6ICMwMDM5NTU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNjJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xyXG4gICAgfVxyXG4gICAgLnN1YmhlYWRpbmd7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAzOTU1O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBVYnVudHU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGFibGUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDg3JTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgfSAgXHJcbiAgICBcclxuICAgIC50YWJsZSB7XHJcbiAgICAgIHdpZHRoOiA5OCU7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgICAgbWFyZ2luLXRvcDogMTIlO1xyXG4gICAgfSBcclxuICAgIG1hdC1yb3csIHRkLm1hdC1jZWxsIHtcclxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMDA4MDgwODU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFVidW50dTtcclxuICAgICAgICBjb2xvcjogIzJiNWQ2ZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBtYXQtaGVhZGVyLXJvdywgbWF0LWZvb3Rlci1yb3cgLCB0aC5tYXQtaGVhZGVyLWNlbGwsIHRkLm1hdC1mb290ZXItY2VsbHtcclxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICBmb250LWZhbWlseTogVWJ1bnR1O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1hdC1oZWFkZXItY2VsbHtcclxuICAgICAgICBjb2xvcjogI2QwYzlkNjtcclxuICAgICAgICBmb250LWZhbWlseTogVWJ1bnR1O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC5idXR0b25fcmVzZXR7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGhlaWdodDo2NHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgIHdpZHRoOjM1NHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRlYWw7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB0ZWFsO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAuc2hvdzExMXtcclxuICAgICAgICBkaXNwbGF5Om5vbmVcclxuICAgIH1cclxuICAgIC5zZXR7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgIH1cclxuICAgIC5iYWNrX2J1dHRvbl9hcnJhb3d7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFMUYzRjg7XHJcbiAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjRTFGM0Y4O1xyXG4gICAgfVxyXG4gICAgLnJvdyB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZWZ1bGxfbW9iaWxle1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9jaGVjay5wbmdcIik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgIFxyXG4gICAgICAgIHdpZHRoOiAxMDAlOyAgICAgICBcclxuICAgICAgICBoZWlnaHQ6IDMyM3B4OyBcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB0ZC5oZWFkZXJfdGl0bGUubWF0LWNlbGwuY2RrLWNvbHVtbi1TdWJzdGFuY2UubWF0LWNvbHVtbi1TdWJzdGFuY2Uubmctc3Rhci1pbnNlcnRlZHtcclxuICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LWZhbWlseTogVWJ1bnR1O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuXHJcbiAgdGQubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSwgdGQubWF0LWZvb3Rlci1jZWxsOmZpcnN0LW9mLXR5cGUsIHRoLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcbi5ib3JkZXJfdGFibGV7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgLyogd2lkdGg6IDMwMHB4OyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDg3cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuOjpuZy1kZWVwIC5jb2wtbGctMSwgLmNvbC1sZy0xMCwgLmNvbC1sZy0xMSwgLmNvbC1sZy0xMiwgLmNvbC1sZy0yLCAuY29sLWxnLTMsIC5jb2wtbGctNCwgLmNvbC1sZy01LCAuY29sLWxnLTYsIC5jb2wtbGctNywgLmNvbC1sZy04LCAuY29sLWxnLTksIC5jb2wtbWQtMSwgLmNvbC1tZC0xMCwgLmNvbC1tZC0xMSwgLmNvbC1tZC0xMiwgLmNvbC1tZC0yLCAuY29sLW1kLTMsIC5jb2wtbWQtNCwgLmNvbC1tZC01LCAuY29sLW1kLTYsIC5jb2wtbWQtNywgLmNvbC1tZC04LCAuY29sLW1kLTksIC5jb2wtc20tMSwgLmNvbC1zbS0xMCwgLmNvbC1zbS0xMSwgLmNvbC1zbS0xMiwgLmNvbC1zbS0yLCAuY29sLXNtLTMsIC5jb2wtc20tNCwgLmNvbC1zbS01LCAuY29sLXNtLTYsIC5jb2wtc20tNywgLmNvbC1zbS04LCAuY29sLXNtLTksIC5jb2wteHMtMSwgLmNvbC14cy0xMCwgLmNvbC14cy0xMSwgLmNvbC14cy0xMiwgLmNvbC14cy0yLCAuY29sLXhzLTMsIC5jb2wteHMtNCwgLmNvbC14cy01LCAuY29sLXhzLTYsIC5jb2wteHMtNywgLmNvbC14cy04LCAuY29sLXhzLTkge1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbm1pbi1oZWlnaHQ6IDFweDtcclxucGFkZGluZy1yaWdodDogMHB4O1xyXG5wYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG4uYXBwLXRvcGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuLm1hcmdpbl90b3B7XHJcblxyXG4gICAgbWFyZ2luLXRvcDoxMXB4O1xyXG5cclxufVxyXG4uaGVhZGluZ3NfYm94e1xyXG5cclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm1hcmdpbl90b3AgaDF7XHJcbiAgICAvKiBmb250LXNpemU6IDM1cHg7ICovXHJcbiAgICBmb250LWZhbWlseTogVWJ1bnR1O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgICBmb250LXNpemU6MzZweDtcclxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxuICAgICAgICBjb2xvcjojMDAzOTU1O1xyXG5cclxufVxyXG4gaDJ7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LWZhbWlseTogVWJ1bnR1O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMDAzOTU1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjZweDtcclxuICAgIC8qIG1hcmdpbi10b3A6IC01cHg7dyAqL1xyXG59XHJcblxyXG4uYmFja2dyb3VuZCBpbWcge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG4udmlld3tcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgLyogdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgKi9cclxuICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLm5hbWV7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogdGVhbDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLmJhY2tncm91bmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmN2Y3O1xyXG59XHJcbi5yb3cuaW5zaWRlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTIxcHg7XHJcbiAgICBsZWZ0OiAxNDFweDtcclxufVxyXG4ucGFyYWdyYXBoe1xyXG4gICAgY29sb3I6ICMwMDM5NTU7XHJcbiAgICBmb250LXNpemU6IDE0cHQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUxNXB4O1xyXG4gICAgbGVmdDogNzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcclxufVxyXG4uaW5zaWRlIC5wYXJhe1xyXG4gICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgY29sb3I6ICMyMTM2NWE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbn1cclxuLnN0eWxle1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFVidW50dTtcclxuICAgIGNvbG9yOiAjMDAzOTU1O1xyXG4gICAgbWFyZ2luLXRvcDogNjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcclxufVxyXG4uc3ViaGVhZGluZ3tcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiAjMDAzOTU1O1xyXG4gICAgZm9udC1mYW1pbHk6IFVidW50dTtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB3aWR0aDogODclO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbn0gIFxyXG5cclxuLnRhYmxlIHtcclxuICB3aWR0aDogOTglO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcclxufSBcclxubWF0LXJvdywgdGQubWF0LWNlbGwge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzAwODA4MDg1O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIGZvbnQtZmFtaWx5OiBVYnVudHU7XHJcbiAgICBjb2xvcjogIzJiNWQ2ZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbm1hdC1oZWFkZXItcm93LCBtYXQtZm9vdGVyLXJvdyAsIHRoLm1hdC1oZWFkZXItY2VsbCwgdGQubWF0LWZvb3Rlci1jZWxse1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgZm9udC1mYW1pbHk6IFVidW50dTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC1oZWFkZXItY2VsbHtcclxuICAgIGNvbG9yOiAjZDBjOWQ2O1xyXG4gICAgZm9udC1mYW1pbHk6IFVidW50dTtcclxufVxyXG5cclxuXHJcbi5idXR0b25fcmVzZXR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6NjRweDtcclxuICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgd2lkdGg6MzU0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0ZWFsO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRlYWw7XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuLnNob3cxMTF7XHJcbiAgICBkaXNwbGF5Om5vbmVcclxufVxyXG4uc2V0e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA5JTtcclxufVxyXG4uYmFja19idXR0b25fYXJyYW93e1xyXG4gICAgbWFyZ2luLXRvcDoxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UxRjNGODtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI0UxRjNGODtcclxufVxyXG4ucm93IHtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG4uaW1hZ2VmdWxsX21vYmlsZXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9jaGVjay5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAgICBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICBcclxuICAgIHdpZHRoOiAxMDAlOyAgICAgICBcclxuICAgIGhlaWdodDogMzIzcHg7IFxyXG4gICAgXHJcbiAgICB9XHJcbnRkLmhlYWRlcl90aXRsZS5tYXQtY2VsbC5jZGstY29sdW1uLVN1YnN0YW5jZS5tYXQtY29sdW1uLVN1YnN0YW5jZS5uZy1zdGFyLWluc2VydGVke1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6IFVidW50dTtcclxufVxyXG5cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/check/check.component.ts":
  /*!******************************************!*\
    !*** ./src/app/check/check.component.ts ***!
    \******************************************/

  /*! exports provided: CheckComponent */

  /***/
  function srcAppCheckCheckComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckComponent", function () {
      return CheckComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../dialog/dialog.component */
    "./src/app/dialog/dialog.component.ts");

    var CheckComponent =
    /*#__PURE__*/
    function () {
      function CheckComponent(dialog, translate, title, router, apiservices, route) {
        var _this = this;

        _classCallCheck(this, CheckComponent);

        this.dialog = dialog;
        this.translate = translate;
        this.title = title;
        this.router = router;
        this.apiservices = apiservices;
        this.route = route;
        this.data = {};
        this.full_data = [];
        this.displayedColumns = ['Substance', 'unit', 'Before', 'Limit_range', 'After'];
        this.free_Chlorine = {};
        this.Chloramine = {};
        this.Total_Chlorine = {}; // pH: any={};

        this.Calcium = {}; // Microplastics:any={};

        this.Nitrates = {};
        this.Bacteria_or_Viruses = {}; //start general

        this.Temperature = {};
        this.Hardness = {};
        this.Hardness_f = {};
        this.pH = {};
        this.Turbidity = {};
        this.Conductivity = {};
        this.Color = {};
        this.Odor = {};
        this.TDS = {};
        this.Microplastics = {};
        this.LSI = {};
        this.Bicarbonate = {};
        this.Alkalinity = {};
        this.Oxidation = {};
        this.data_general = []; //end general

        this.newArray = {};
        this.push_main_array = [];
        this.value = {};
        this.tables = [];
        this.data_check = [];
        this.results = [];
        this.route.params.subscribe(function (params) {
          _this.data['basic_details_id'] = params['id'];
          _this.data['id'] = params['id'];
          _this.data['postcode'] = params['postcode'];
        });
      }

      _createClass(CheckComponent, [{
        key: "openConfirmationDialog",
        value: function openConfirmationDialog(component) {
          var heading, heading2, p, p1, p3;
          console.log(component);

          if (component == "Free Chlorine" || component == "Total Chlorine" || component == "Chloramine") {
            heading = 'Chlorine (Cl)';
            heading2 = 'TAPP filters remove 95% of chlorine.';
            p1 = "Chlorine is added to tap water to kill bacteria and viruses and keep it safe for drinking. The amount of chlorine added depends on the local quality of the water, climate (temperature), maximum distance to the tap and other variables.";
            p = "A side effect of chlorine is unfortunately that the tap water may taste and smell poorly. To ensure the tap water is safe to drink the recommended free chlorine is 0.5mg/L at each household tap. The maximum allowable chlorine levels (Maximum Allowable Level = MAL) in drinking water is 4 parts per million (4ppm) and pose no known or expected health risk. This includes an adequate margin of safety. However, bi-products from chlorine such as VOCs and THMs may cause health issues long term. TAPP Filters remove 95% of chlorine and close to 100% of chlorine by-products.";
            p3 = "Note: Sometimes Chloramine is added instead. TAPP is equally efficient in removing chloramine.";
            this.opendialog(heading, heading2, p1, p, p3);
          }

          if (component == "Microplastics") {
            heading = 'Microplastics';
            heading2 = 'TAPP filters removes 100% of microplastics.';
            p1 = 'Microplastics are the result of plastic waste in different kind of sources.';
            p = 'When plastic waste enters waterways, it does not degrade as natural materials do. Instead, exposure to the suns rays, reaction to oxygen, and degradation from physical elements such as waves and sand cause plastic debris to break down into tiny pieces. The smallest microplastics identified in public reports is 2.6 micron. The precise effect of microplastics on human health is difficult to determine for a variety of reasons. There are many different types of plastics, as well as different chemical additives that may or may not be present. WHO claims the health risk of microplastics is low but better to be safe than sorry. TAPP 2 removes all microplastics larger than than 2-microns.';
            p3 = '';
            this.opendialog(heading, heading2, p1, p, p3);
          }

          if (component == "Bicarbonate") {
            heading = 'Bicarbonate (HCO3-)';
            heading2 = 'Bicarbonate does not need to be filtered.';
            p1 = 'Bicarbonate is the result of Carbon dioxide (CO2) dissolution in water. Bicarbonate is an acid buffer; it regulates the pH of your body.';
            p = 'However, high concentration of Bicarbonate may pull calcium from water. The Recommended range is 30 to 400 mg/L. Bicarbonate is the principal alkaline constituent in almost all water supplies. Mineral water in particulate often contains high concentration of Bicarbonate.';
            p3 = '';
            this.opendialog(heading, heading2, p1, p, p3);
          }

          if (component == "Bacterias") {
            heading = 'Bacteria & Viruses';
            heading2 = 'TAPP filters reduces Bacteria and Viruses but does not remove all.';
            p1 = 'Natural water represents an adequate environment for bacteria and viruses to grow';
            p = 'Bacteria and viruses exist naturally in water. Generally the chlorine in tap water will kill all bacteria and viruses which is why filtering of these substances is not necessary for public water in Europe and North America. Viruses are the smallest form of microorganisms capable of causing disease, particularly those of a fecal origin infectious to humans by waterborne transmission; bacteria are typically single-celled microorganisms that can also cause health problems in humans, animals or plants, despite many form is ability to aid in water pollution control.';
            p3 = '';
            this.opendialog(heading, heading2, p1, p, p3);
          }

          if (component == "Fluoride") {
            heading = 'Fluoride (F-)Fluoride (F-)';
            heading2 = 'TAPP filters reduce up to 80% of Fluoride.';
            p1 = 'Fluoride is the result of water passage through rocks. At its normal rate, Fluoride reduces teeth cavities.';
            p = 'Fluoride comes from fluorine, which is a common, natural, and abundant element. Excessive exposure to fluoride has been linked to a number of health issues such as bone disease and parathyroid gland damage. The MAL is estimated to be 4 mg/L.';
            p3 = '';
            this.opendialog(heading, heading2, p1, p, p3);
          }

          if (component == "Nitrates") {
            heading = 'Nitrate (NO32-)';
            heading2 = 'TAPP filters reduce 70-90% of Nitrate.';
            p1 = 'Nitrate is one of the most important compounds for plants. It is a rich source of Nitrogen, which is essential for plant growth.';
            p = 'Nitrate has no known harm effect on the human body unless it’s extremely high amounts. However, excessive Nitrate in water can cause Methemoglobinemia, or \”blue baby\” disease (Lack of oxygen). The Maximum Accepted Level (MAL) is estimated to be 10 mg/L. Nitrate originates primarily from fertilizers, septic systems, and manure storage or spreading operations.';
            p3 = '';
            this.opendialog(heading, heading2, p1, p, p3);
          }

          if (component == "Calcium" || component == "Magnesium") {
            heading = 'Calcium (Ca2+) & Magnesium (Mg2+)';
            heading2 = 'These essential minerals should not be filtered.';
            p1 = 'Calcium and magnesium exist naturally in water. They are essential minerals for all living beings.';
            p = 'Calcium not only helps in bones and teeth strengthening, but also decreases heart conditions. Magnesium on the other hand, is essential for membrane function, protein construction and muscle contraction. No evidence is available to document harm to human health from hard drinking water. Perhaps only, a high magnesium content (hundreds of mg/l) coupled with a high Sulphate content may cause diarrhea. The Recommended Daily Intakes (RDI) for Calcium and Magnesium are 1000 mg and 400 mg.';
            p3 = '';
            this.opendialog(heading, heading2, p1, p, p3);
          }

          if (component == "Chloride") {
            heading = 'Chloride (Cl-)';
            heading2 = 'Chloride does not need to be filtered.';
            p1 = 'Chloride is a natural mineral that helps maintain proper blood volume, blood pressure, and pH of body fluids.';
            p = 'However, excessive Chloride in water may cause salty taste. The Maximum Acceptable Level (MAL) is 250 mg/L. Chloride is a natural component of tap water without any negative health aspects. Chloride is part of the chlorification process of drinking water from harmful bacteria and viruses.';
            this.opendialog(heading, heading2, p1, p, p3);
          }

          if (component == "Arsenic") {
            heading = 'Copper';
            heading2 = 'TAPP 2 filters reduce 95% of Lead.';
            p1 = 'Heavy metals such as Lead, Copper and Arsenic exist naturally in nature. The benefits of these metals are not really accentuated.';
            p = 'Most of the point sources of heavy metal pollutants are industrial wastewater from mining, metal processing, tanneries, pharmaceuticals, pesticides, organic chemicals, rubber and plastics, lumber and wood products. Bioaccumulation of these metals can cause serious health problems related to central nervous function, the cardiovascular and gastrointestinal (GI) systems, lungs, kidneys, liver, endocrine glands, and bones. Therefore these are often listed among the most common tap water contaminants even though they are unusual in Europe.';
            p3 = 'The maximum values of Heavy Metals should be less than a couple of ug/L. TAPP 2 is specifically tested for removal of heavy metals including lead.';
            this.opendialog(heading, heading2, p1, p, p3);
          }

          if (component == "Copper") {
            heading = 'Copper';
            heading2 = 'TAPP 2 filters reduce 95% of Lead.';
            p1 = 'Heavy metals such as Lead, Copper and Arsenic exist naturally in nature. The benefits of these metals are not really accentuated.';
            p = 'Most of the point sources of heavy metal pollutants are industrial wastewater from mining, metal processing, tanneries, pharmaceuticals, pesticides, organic chemicals, rubber and plastics, lumber and wood products. Bioaccumulation of these metals can cause serious health problems related to central nervous function, the cardiovascular and gastrointestinal (GI) systems, lungs, kidneys, liver, endocrine glands, and bones. Therefore these are often listed among the most common tap water contaminants even though they are unusual in Europe.';
            p3 = 'The maximum values of Heavy Metals should be less than a couple of ug/L. TAPP 2 is specifically tested for removal of heavy metals including lead.';
            this.opendialog(heading, heading2, p1, p, p3);
          }

          if (component == "Lead") {
            heading = 'Lead';
            heading2 = 'TAPP 2 filters reduce 95% of Lead.';
            p1 = 'Heavy metals such as Lead, Copper and Arsenic exist naturally in nature. The benefits of these metals are not really accentuated.';
            p = 'Most of the point sources of heavy metal pollutants are industrial wastewater from mining, metal processing, tanneries, pharmaceuticals, pesticides, organic chemicals, rubber and plastics, lumber and wood products. Bioaccumulation of these metals can cause serious health problems related to central nervous function, the cardiovascular and gastrointestinal (GI) systems, lungs, kidneys, liver, endocrine glands, and bones. Therefore these are often listed among the most common tap water contaminants even though they are unusual in Europe.';
            p3 = 'The maximum values of Heavy Metals should be less than a couple of ug/L. TAPP 2 is specifically tested for removal of heavy metals including lead.';
            this.opendialog(heading, heading2, p1, p, p3);
          }

          if (component == "Potassium" || component == "Sodium") {
            heading = 'Sodium (Na+) & Potassium (K+)';
            heading2 = "These essential minerals should not be filtered.";
            p1 = 'Potassium and Sodium occur naturally in all water (groundwater, rainwater, etc). They are the main responsible elements for nerve stimulus fluid levels control and blood pressure regulation. They also prevent cardiovascular disease.';
            p = 'Sodium and potassium exist in the earth’s crust and are not considered toxic. They are common elements in the natural environment and are often found in food and drinking water. High level of Sodium may increase blood pressure and salty taste. On the other hand, Potassium intoxication by ingestion is rare, because potassium is rapidly excreted in the absence of pre-existing kidney damage. The Recommended Daily Intakes (RDI) for Sodium and Potassium are 2400 mg and 3500 mg.';
            p3 = '';
            this.opendialog(heading, heading2, p1, p, p3);
          }
        }
      }, {
        key: "opendialog",
        value: function opendialog(heading, heading2, p1, p, p3) {
          var dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"], {
            // width: '90%',
            data: {
              heading: heading,
              heading2: heading2,
              p1: p1,
              p: p,
              p3: p3
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed'); // this.animal = result;
          });
        }
      }, {
        key: "function1",
        value: function function1(l, lang_data) {
          console.log("pageTitle", lang_data);
          sessionStorage.removeItem("pageTitle");
          sessionStorage.setItem("pageTitle", lang_data);
        }
      }, {
        key: "display",
        value: function display() {
          var _this2 = this;

          this.apiservices.postdata("select_details", this.data).subscribe(function (res) {
            console.log(res);
            _this2.data['utlity_enter'] = res['utlity_enter'];
            _this2.data['city'] = res['city'];
            _this2.data['country'] = res['country'];
          });
          this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
          var Water_safety = this.apiservices.postdata("water_safety_view_priority", this.data);
          var general = this.apiservices.postdata("general_data_view_priority", this.data);
          var pathogens = this.apiservices.postdata("pathogens_data_view_priority", this.data);
          var chemical_parameter = this.apiservices.postdata("Chemical_parameter_data_view_priority", this.data);
          var Minerals = this.apiservices.postdata("minerals_data_view_priority", this.data);
          var metals = this.apiservices.postdata("metals_data_view_priority", this.data);
          var Chlorine_bi_products = this.apiservices.postdata("chlorine_bi_products_data_view_priority", this.data);
          var HAAs = this.apiservices.postdata("HAAs_data_view_priority", this.data);
          var Pesticides = this.apiservices.postdata("pesticides_data_view_priority", this.data);
          var Herbicides = this.apiservices.postdata("herbicides_data_view_priority", this.data);
          var Perfluorinated_chemicals_ = this.apiservices.postdata("perfluorinated_chemicals_data_view_priority", this.data);
          var other = this.apiservices.postdata("other_data_view_priority", this.data);
          var Pharmaceuticals = this.apiservices.postdata("pharmaceuticals_data_view_priority", this.data);
          var requestArray = [];
          requestArray.push(Water_safety, general, pathogens, chemical_parameter, Minerals, metals, Chlorine_bi_products, HAAs, Pesticides, Herbicides, Perfluorinated_chemicals_, other, Pharmaceuticals);
          Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(requestArray).subscribe(function (results) {
            console.log("here", results);
            _this2.results = results;

            if (!(results[0] && results[0].constructor === Array && Object.keys(results[0]).length === 0)) {
              for (var j = 0; j < _this2.results[0].length; j++) {
                console.log(_this2.results[0][j]);
                _this2.results[0][j]['Filtering'] = parseFloat(_this2.results[0][j]['Filtering']).toString();
              }

              _this2.tables.push({
                table: "Water safety",
                data: _this2.results[0]
              });
            }

            if (!(results[1] && results[1].constructor === Array && Object.keys(results[1]).length === 0)) {
              for (var _j = 0; _j < _this2.results[1].length; _j++) {
                // console.log(this.results[0][j]);
                _this2.results[1][_j]['Filtering'] = parseFloat(_this2.results[1][_j]['Filtering']).toString();
              }

              _this2.tables.push({
                table: "General",
                data: results[1]
              });
            }

            if (!(results[2] && results[2].constructor === Array && Object.keys(results[2]).length === 0)) {
              for (var _j2 = 0; _j2 < _this2.results[2].length; _j2++) {
                // console.log(this.results[0][j]);
                _this2.results[2][_j2]['Filtering'] = parseFloat(_this2.results[2][_j2]['Filtering']).toString();
              }

              _this2.tables.push({
                table: "Pathogens",
                data: results[2]
              });
            }

            if (!(results[3] && results[3].constructor === Array && Object.keys(results[3]).length === 0)) {
              for (var _j3 = 0; _j3 < _this2.results[3].length; _j3++) {
                // console.log(this.results[0][j]);
                _this2.results[3][_j3]['Filtering'] = parseFloat(_this2.results[3][_j3]['Filtering']).toString();
              }

              _this2.tables.push({
                table: "Chemical parameter",
                data: results[3]
              });
            }

            if (!(results[4] && results[4].constructor === Array && Object.keys(results[4]).length === 0)) {
              for (var _j4 = 0; _j4 < _this2.results[4].length; _j4++) {
                // console.log(this.results[0][j]);
                _this2.results[4][_j4]['Filtering'] = parseFloat(_this2.results[4][_j4]['Filtering']).toString();
              }

              _this2.tables.push({
                table: "Minerals",
                data: results[4]
              });
            }

            if (!(results[5] && results[5].constructor === Array && Object.keys(results[5]).length === 0)) {
              for (var _j5 = 0; _j5 < _this2.results[5].length; _j5++) {
                _this2.results[5][_j5]['Filtering'] = parseFloat(_this2.results[5][_j5]['Filtering']).toString();
              }

              _this2.tables.push({
                table: "Metals",
                data: results[5]
              });
            }

            if (!(results[6] && results[6].constructor === Array && Object.keys(results[6]).length === 0)) {
              for (var _j6 = 0; _j6 < _this2.results[6].length; _j6++) {
                _this2.results[6][_j6]['Filtering'] = parseFloat(_this2.results[6][_j6]['Filtering']).toString();
              }

              _this2.tables.push({
                table: "Chlorine bi products",
                data: results[6]
              });
            }

            if (!(results[7] && results[7].constructor === Array && Object.keys(results[7]).length === 0)) {
              for (var _j7 = 0; _j7 < _this2.results[7].length; _j7++) {
                _this2.results[7][_j7]['Filtering'] = parseFloat(_this2.results[7][_j7]['Filtering']).toString();
              }

              _this2.tables.push({
                table: "HAAs",
                data: results[7]
              });
            }

            if (!(results[8] && results[8].constructor === Array && Object.keys(results[8]).length === 0)) {
              for (var _j8 = 0; _j8 < _this2.results[8].length; _j8++) {
                _this2.results[8][_j8]['Filtering'] = parseFloat(_this2.results[8][_j8]['Filtering']).toString();
              }

              _this2.tables.push({
                table: "Pesticides",
                data: results[8]
              });
            }

            if (!(results[9] && results[9].constructor === Array && Object.keys(results[9]).length === 0)) {
              for (var _j9 = 0; _j9 < _this2.results[9].length; _j9++) {
                _this2.results[9][_j9]['Filtering'] = parseFloat(_this2.results[9][_j9]['Filtering']).toString();
              }

              _this2.tables.push({
                table: "Herbicides",
                data: results[9]
              });
            }

            if (!(results[10] && results[10].constructor === Array && Object.keys(results[10]).length === 0)) {
              for (var _j10 = 0; _j10 < _this2.results[10].length; _j10++) {
                _this2.results[10][_j10]['Filtering'] = parseFloat(_this2.results[10][_j10]['Filtering']).toString();
              }

              _this2.tables.push({
                table: "Perfluorinated chemicals",
                data: results[10]
              });
            }

            if (!(results[11] && results[11].constructor === Array && Object.keys(results[11]).length === 0)) {
              for (var _j11 = 0; _j11 < _this2.results[11].length; _j11++) {
                _this2.results[11][_j11]['Filtering'] = parseFloat(_this2.results[11][_j11]['Filtering']).toString();
              }

              _this2.tables.push({
                table: "Other",
                data: results[11]
              });
            }

            if (!(results[12] && results[12].constructor === Array && Object.keys(results[12]).length === 0)) {
              for (var _j12 = 0; _j12 < _this2.results[12].length; _j12++) {
                _this2.results[12][_j12]['Filtering'] = parseFloat(_this2.results[12][_j12]['Filtering']).toString();
              }

              _this2.tables.push({
                table: "Pharmaceuticals",
                data: results[12]
              });
            } // console.log("tables",this.tables)

          });
          /*
          
          
            this.apiservices.postdata("water_safety_view_priority",this.data).subscribe((res)=>{
          
              this.dataSource_water_safety=(res);
              if(!(res && res.constructor === Array && Object.keys(res).length === 0)){
            
                    this.dataSource_water_safety=(res);
                    this.tables.push({table:"Water safety",data:this.dataSource_water_safety})
                    // console.log("this.data_check12222",this.tables[0].data)
                    for(let i=0;i<this.tables.length;i++){
                      
                      for(let j=0;j<this.tables[i].data.length;j++){
          
                        this.tables[i].data[j].Filtering= (parseFloat(this.tables[i].data[j].Filtering)).toString()
          
                      }
                    }
              }
          
                })
          
          
              this.apiservices.postdata("general_data_view_priority",this.data).subscribe((res)=>{
                this.dataSource_general=this.dataSource.data.concat(res)
                if(!(res && res.constructor === Array && Object.keys(res).length === 0)){
                  
                  this.dataSource_general=(res);
                  return this.tables.push({table:"General",data:this.dataSource_general})
               }
                  })
          
          
              this.apiservices.postdata("minerals_data_view_priority",this.data).subscribe((res)=>{
                this.dataSource_minerals=res;
                console.log("res",res[1]);
          
                if(!(res && res.constructor === Array && Object.keys(res).length === 0)){
                  this.dataSource_minerals=(res);
                  // this.data_check.push(this.dataSource_minerals)
          
                  return this.tables.push({table:"Minerals",data:this.dataSource_minerals})
               }
          
                  })
          
                this.apiservices.postdata("Chemical_parameter_data_view_priority",this.data).subscribe((res)=>{
                  this.dataSource_chemical_parameter=res;
                  if(!(res && res.constructor === Array && Object.keys(res).length === 0)){
                    this.dataSource_chemical_parameter=(res);
           
          
                    return this.tables.push({table:"Chemical parameter",data:this.dataSource_chemical_parameter})
                 }
                
                   })
          
                 
          
                      this.apiservices.postdata("chlorine_bi_products_data_view_priority",this.data).subscribe(res=>{
                        console.log("Chlorine_bi_products_view",res)
          
                        if(!(res && res.constructor === Array && Object.keys(res).length === 0)){
                          
          
                          return this.tables.push({table:"Chlorine bi products",data:res})
                        }
                    })
          
                    this.apiservices.postdata("pesticides_data_view_priority",this.data).subscribe(res=>{
                      console.log("pesticides_data_view",res)
          
          
                      if(!(res && res.constructor === Array && Object.keys(res).length === 0)){
          
                        this.dataSource_general=(res);
                        return this.tables.push({table:"Pesticides",data:res})
                      }
                    })
          
                              
                   
                    this.apiservices.postdata("HAAs_data_view_priority",this.data).subscribe(res=>{
                      console.log("HAAs_data_view",res)
                      if(!(res && res.constructor === Array && Object.keys(res).length === 0)){
                        return this.tables.push({table:"HAAs",data:res})
                    }
                     
                    })
          
                  this.apiservices.postdata("herbicides_data_view_priority",this.data).subscribe(res=>{
                    console.log("herbicides_data_view",res)
          
                    if(!(res && res.constructor === Array && Object.keys(res).length === 0)){
                
                      return this.tables.push({table:"Herbicides",data:res})
                  }
                    
                  })
          
                    this.apiservices.postdata("perfluorinated_chemicals_data_view_priority",this.data).subscribe(res=>{
                      console.log("perfluorinated_chemicals_data_view",res)
                      if(!(res && res.constructor === Array && Object.keys(res).length === 0)){
                        return this.tables.push({table:"Perfluorinated chemicals",data:res})
                      }
                      
                    })
          
          
                    this.apiservices.postdata("pharmaceuticals_data_view_priority",this.data).subscribe(res=>{
                      console.log("pharmaceuticals_data_view",res && Object.keys(res).length === 0)
                 
          
                      if(!(res && res.constructor === Array && Object.keys(res).length === 0)){
                        return this.tables.push({table:"Pharmaceuticals",data:res})
           
                    }
                    })
          
                    this.apiservices.postdata("metals_data_view_priority",this.data).subscribe(res=>{
                      console.log("metals_data_view",res)
                      if(!(res && res.constructor === Array && Object.keys(res).length === 0)){
                        return this.tables.push({table:"Metals",data:res})
          
                      }
                             
                    })
            
          
          
            
          
                    this.apiservices.postdata("other_data_view_priority",this.data).subscribe(res=>{
                      console.log("other_data_view",res)
          
                
                      if(!(res && res.constructor === Array && Object.keys(res).length === 0)){
                        return this.tables.push({table:"Other",data:res})
           
                      }
                     
                    })
            
          
                    this.apiservices.postdata("pathogens_data_view_priority",this.data).subscribe(res=>{
                      console.log("pathogens_data",res)
                      // let value=[];
                    
                     console.log("testing a length",res && res.constructor === Array)
                      if(!(res && res.constructor === Array && Object.keys(res).length === 0)){
                        return this.tables.push({table:"Pathogens",data:res})
                    }
            
             
            
                    
                  
                  
                 
                 })
                 */
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.translate.addLangs(['English', 'Spanish']);
          console.log(sessionStorage.getItem("pageTitle") == 'Spanish' || sessionStorage.getItem("pageTitle") == 'English');

          if (sessionStorage.getItem("pageTitle") == 'Spanish' || sessionStorage.getItem("pageTitle") == 'English') {
            var lang = sessionStorage.getItem("pageTitle");
            this.translate.use(lang);
            console.log("1");
          } else {
            this.translate.addLangs(['English', 'Spanish']);
            this.translate.setDefaultLang('English');
            var browserLang = this.translate.getBrowserLang();
            this.translate.use(browserLang.match(/English|Spanish/) ? browserLang : 'English');
            console.log("2");
          }

          setInterval(function () {
            // alert("here")
            $("#table").addClass("table");
          }, 100);
          this.display();
        }
      }, {
        key: "setTheTitle",
        value: function setTheTitle() {
          this.title.setTitle(this.pageTitle);
        } // ngOnInit() {
        // }

      }, {
        key: "check",
        value: function check() {
          this.router.navigate(['/Report', this.data['basic_details_id'], this.data['postcode']]);
        }
      }, {
        key: "isNumber",
        value: function isNumber(val) {
          if (val == null || val == NaN || val == ' ') {
            // console.log("nan")
            this.zone = 'None';
            return this.zone;
          } else if (val != null && val != NaN && val != ' ') {
            this.zone = parseFloat(val);

            if (this.zone >= 1) {
              return this.zone;
            } else {
              this.zone = 'Low priority';
            }
          }
        }
      }]);

      return CheckComponent;
    }();

    CheckComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    CheckComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-check',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./check.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/check/check.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./check.component.css */
      "./src/app/check/check.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], CheckComponent);
    /***/
  },

  /***/
  "./src/app/comfirmation/comfirmation.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/comfirmation/comfirmation.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComfirmationComfirmationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".image{\r\n\r\n}\r\n\r\n@media screen \r\n  and (min-width: 1200px) \r\n  and (max-width: 1600px) {\r\n    .margin_left {\r\n        padding-top: 136px;\r\n        margin-top: 66px;\r\n        text-align: center;\r\n    }\r\n      .image{\r\n          background-image: url('no_data.png');\r\n          background-position: center;\r\n    \r\n          width: 100%;\r\n          height: 607px;\r\n          background-repeat: no-repeat;\r\n      }\r\n.margin_top{\r\n\r\n    /* margin-top:116px; */\r\n\r\n}\r\n.padding_main img {\r\n    width: 804px;\r\n    height: 703px;\r\n}\r\n\r\n.margin_top .form{\r\n    position: absolute;\r\n    top: 338px;\r\n    left: 201px;\r\n}\r\n.margin_top .form .input1{\r\n    height: 64px;\r\n    width: 354px;\r\n    border-radius: 10px;\r\n    /* position: absolute; */\r\n    border: 1px solid white;\r\n    height:64px;\r\n    width:354px\r\n}\r\n.margin_top .form input::-webkit-input-placeholder {\r\n    color: #bcbcbc;\r\n    padding-left:10px;\r\n    font-size:20px;\r\n  }\r\n.margin_top .form input::-moz-placeholder {\r\n    color: #bcbcbc;\r\n    padding-left:10px;\r\n    font-size:20px;\r\n  }\r\n.margin_top .form input::-ms-input-placeholder {\r\n    color: #bcbcbc;\r\n    padding-left:10px;\r\n    font-size:20px;\r\n  }\r\n.margin_top .form input::placeholder {\r\n    color: #bcbcbc;\r\n    padding-left:10px;\r\n    font-size:20px;\r\n  }\r\n\r\n  .button_reset{\r\n    color: white;\r\n    height:64px;\r\n    font-size:20px;\r\n    width:354px;\r\n    background: teal;\r\n    border-radius: 30px;\r\n    border: 2px solid teal;\r\n    margin-top: 24px;\r\n    outline:none;\r\n\r\n}\r\n.margin_top .form input{\r\n    width:17px;\r\n    height:17px;\r\n}\r\n\r\n.margin_top h1 {\r\n    font-family: Ubuntu;\r\n    font-weight: 600;\r\n    top: 28%;\r\n    position: absolute;\r\n    left: 17%;\r\n    text-align: center;\r\n    color: #003955;\r\n    line-height: 1.4;\r\n}\r\n.margin_top p{\r\n    font-size: 19px;\r\n    top: 199px;\r\n    position: absolute;\r\n    left: 174px;\r\n    text-align: center;\r\n    letter-spacing: 1px;\r\n    right: 190px;\r\n    color: #003955;\r\n    font-family: serif;\r\n}\r\n\r\n.button_reset{\r\n    color: white;\r\n    height:64px;\r\n    font-size:20px;\r\n    width:354px;\r\n    background: teal;\r\n    border-radius: 30px;\r\n    border: 2px solid teal;\r\n    margin-top: 24px;\r\n    outline:none;\r\n\r\n}\r\n  }\r\n\r\n@media screen \r\n  and (min-device-width: 1200px) \r\n  and (max-device-width: 1600px) \r\n  and (-webkit-min-device-pixel-ratio: 2)\r\n  and (-webkit-min-device-pixel-ratio: 2), screen \r\n  and (min-device-width: 1200px) \r\n  and (max-device-width: 1600px) \r\n  and (-webkit-min-device-pixel-ratio: 2)\r\n  and (min-resolution: 192dpi) { \r\n\r\n    .margin_left {\r\n        padding-top: 92px;\r\n        margin-top: 66px;\r\n        text-align: center;\r\n    }\r\n      .image{\r\n          background-image: url('nobackground@2x.png');\r\n          width: 100%;\r\n          height: 607px;\r\n          background-repeat: no-repeat;\r\n      }\r\n    .padding_main img {\r\n        width: 804px;\r\n        height: 703px;\r\n    }\r\n    \r\n    .margin_top .form{\r\n        position: absolute;\r\n        top: 338px;\r\n        left: 201px;\r\n    }\r\n    .margin_top .form .input1{\r\n        height: 64px;\r\n        width: 354px;\r\n        border-radius: 10px;\r\n        /* position: absolute; */\r\n        border: 1px solid white;\r\n        height:64px;\r\n        width:354px\r\n    }\r\n    .margin_top .form input::-webkit-input-placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:20px;\r\n      }\r\n    .margin_top .form input::-moz-placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:20px;\r\n      }\r\n    .margin_top .form input::-ms-input-placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:20px;\r\n      }\r\n    .margin_top .form input::placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:20px;\r\n      }\r\n    \r\n      .button_reset{\r\n        color: white;\r\n        height:64px;\r\n        font-size:20px;\r\n        width:354px;\r\n        background: teal;\r\n        border-radius: 30px;\r\n        border: 2px solid teal;\r\n        margin-top: 24px;\r\n        outline:none;\r\n    }\r\n    .margin_top .form input{\r\n        width:17px;\r\n        height:17px;\r\n    }\r\n    \r\n    .margin_top h1 {\r\n        font-family: Ubuntu;\r\n        font-weight: 600;\r\n        top: 28%;\r\n        position: absolute;\r\n        left: 22%;\r\n        text-align: center;\r\n        color: #003955;\r\n        line-height: 1.4;\r\n    }\r\n    .margin_top p{\r\n        font-size: 19px;\r\n        top: 199px;\r\n        position: absolute;\r\n        left: 174px;\r\n        text-align: center;\r\n        letter-spacing: 1px;\r\n        right: 190px;\r\n        color: #003955;\r\n        font-family: serif;\r\n    }\r\n    \r\n    .button_reset{\r\n        color: white;\r\n        height:64px;\r\n        font-size:20px;\r\n        width:354px;\r\n        background: teal;\r\n        border-radius: 30px;\r\n        border: 2px solid teal;\r\n        margin-top: 24px;\r\n        outline:none;\r\n    \r\n    }\r\n\r\n  }\r\n\r\n@media only screen and (max-width: 600px){\r\n    .h1, h1 {\r\n        font-size: 20px;\r\n        margin: 0 5% 0 5%;\r\n\r\n    }\r\n\r\n    .margin_left {\r\n        /* margin-left: 47px; */\r\n        /* margin-top: 55px; */\r\n        /* padding-left: 35px; */\r\n        padding-top: 103px;\r\n        /* text-align: center;\r\n        margin-top: 46px; */\r\n    }\r\n    .row.margin_top {\r\n        margin-top: 27%;\r\n    }\r\n    .image{\r\n        background-image: url('nobackground@2x.png');\r\n        width: 100%;\r\n        /* height: 534px; */\r\n        /* padding: 3%; */\r\n        background-repeat: no-repeat;\r\n        margin-top: 4%;\r\n        text-align: center;\r\n        height: 486px;\r\n    }\r\n    \r\n    .margin_top .form{\r\n        position: absolute;\r\n        top: 338px;\r\n        left: 201px;\r\n    }\r\n    .margin_top .form .input1{\r\n        height: 64px;\r\n        width: 354px;\r\n        border-radius: 10px;\r\n        /* position: absolute; */\r\n        border: 1px solid white;\r\n        height:64px;\r\n        width:354px\r\n    }\r\n    .margin_top .form input::-webkit-input-placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:20px;\r\n      }\r\n    .margin_top .form input::-moz-placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:20px;\r\n      }\r\n    .margin_top .form input::-ms-input-placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:20px;\r\n      }\r\n    .margin_top .form input::placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:20px;\r\n      }\r\n      .button_reset{\r\n        color: white;\r\n        height: 54px;\r\n        font-size: 20px;\r\n        /* margin-left: 3%; */\r\n        width: 266px;\r\n        background: teal;\r\n        border-radius: 30px;\r\n        border: 2px solid teal;\r\n        margin-top: 53%;\r\n        margin-bottom: 100px;\r\n        outline:none;\r\n    }\r\n    .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {\r\n        position: relative;\r\n        min-height: 1px;\r\n        padding-right: 0px;\r\n        padding-left: 0px;\r\n    }\r\n    .margin_top .form input{\r\n        width:17px;\r\n        height:17px;\r\n    }\r\n    \r\n    .margin_top h1 {\r\n        font-family: Ubuntu;\r\n        font-weight: 600;\r\n        top: 37%;\r\n        position: absolute;\r\n        left: 65%;\r\n        text-align: center;\r\n        color: #003955;\r\n        line-height: 1.4;\r\n    }\r\n    .margin_top p{\r\n        font-size: 19px;\r\n        top: 199px;\r\n        position: absolute;\r\n        left: 174px;\r\n        text-align: center;\r\n        letter-spacing: 1px;\r\n        right: 190px;\r\n        color: #003955;\r\n        font-family: serif;\r\n    }\r\n\r\n  }\r\n\r\n@media (min-width: 768px) and (max-width: 1024px) {\r\n\r\n    .h1, h1 {\r\n        font-size: 26px;\r\n        /* margin: 0 5% 0 5%; */\r\n\r\n    }\r\n\r\n    .margin_left {\r\n        padding-top: 28%;\r\n    \r\n    }\r\n    .row.margin_top {\r\n        margin-top: 27%;\r\n    }\r\n    .image{\r\n        background-image: url('background_teblet.png');\r\n        width: 100%;\r\n        /* height: 534px; */\r\n        /* padding: 3%; */\r\n        background-repeat: no-repeat;\r\n        margin-top: 4%;\r\n        text-align: center;\r\n        /* height: 486px; */\r\n    }\r\n    \r\n    .margin_top .form{\r\n        position: absolute;\r\n        top: 338px;\r\n        left: 201px;\r\n    }\r\n    .margin_top .form .input1{\r\n        height: 64px;\r\n        width: 354px;\r\n        border-radius: 10px;\r\n        /* position: absolute; */\r\n        border: 1px solid white;\r\n        height:64px;\r\n        width:354px\r\n    }\r\n    .margin_top .form input::-webkit-input-placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:20px;\r\n      }\r\n    .margin_top .form input::-moz-placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:20px;\r\n      }\r\n    .margin_top .form input::-ms-input-placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:20px;\r\n      }\r\n    .margin_top .form input::placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:20px;\r\n      }\r\n      .button_reset{\r\n\r\n        color: white;\r\n        height: 64px;\r\n        font-size: 20px;\r\n        width: 366px;\r\n        background: teal;\r\n        border-radius: 30px;\r\n        border: 2px solid teal;\r\n        margin-top: 25%;\r\n        margin-bottom: 100px;\r\n        outline:none;\r\n    }\r\n    .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {\r\n        position: relative;\r\n        min-height: 1px;\r\n        padding-right: 0px;\r\n        padding-left: 0px;\r\n    }\r\n    .margin_top .form input{\r\n        width:17px;\r\n        height:17px;\r\n    }\r\n    \r\n    .margin_top h1 {\r\n        font-family: Ubuntu;\r\n        font-weight: 600;\r\n        top: 37%;\r\n        position: absolute;\r\n        left: 65%;\r\n        text-align: center;\r\n        color: #003955;\r\n        line-height: 1.4;\r\n    }\r\n    .margin_top p{\r\n        font-size: 19px;\r\n        top: 199px;\r\n        position: absolute;\r\n        left: 174px;\r\n        text-align: center;\r\n        letter-spacing: 1px;\r\n        right: 190px;\r\n        color: #003955;\r\n        font-family: serif;\r\n    }\r\n\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tZmlybWF0aW9uL2NvbWZpcm1hdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBOzs7SUFHSTtRQUNJLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsa0JBQWtCO0lBQ3RCO01BQ0U7VUFDSSxvQ0FBaUQ7VUFDakQsMkJBQTJCOztVQUUzQixXQUFXO1VBQ1gsYUFBYTtVQUNiLDRCQUE0QjtNQUNoQztBQUNOOztJQUVJLHNCQUFzQjs7QUFFMUI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYO0FBQ0o7QUFDQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsY0FBYztFQUNoQjtBQUpGO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCO0FBSkY7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7QUFKRjtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsWUFBWTs7QUFFaEI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gs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QixlQUFlO1FBQ2Ysb0JBQW9CO1FBQ3BCLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFdBQVc7SUFDZjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsUUFBUTtRQUNSLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1Qsa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGVBQWU7UUFDZixVQUFVO1FBQ1Ysa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixjQUFjO1FBQ2Qsa0JBQWtCO0lBQ3RCOztFQUVGIiwiZmlsZSI6InNyYy9hcHAvY29tZmlybWF0aW9uL2NvbWZpcm1hdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdle1xyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBcclxuICBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBcclxuICBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XHJcbiAgICAubWFyZ2luX2xlZnQge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMzZweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2NnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgICAgLmltYWdle1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL25vX2RhdGEucG5nXCIpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogNjA3cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICB9XHJcbi5tYXJnaW5fdG9we1xyXG5cclxuICAgIC8qIG1hcmdpbi10b3A6MTE2cHg7ICovXHJcblxyXG59XHJcbi5wYWRkaW5nX21haW4gaW1nIHtcclxuICAgIHdpZHRoOiA4MDRweDtcclxuICAgIGhlaWdodDogNzAzcHg7XHJcbn1cclxuXHJcbi5tYXJnaW5fdG9wIC5mb3Jte1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMzhweDtcclxuICAgIGxlZnQ6IDIwMXB4O1xyXG59XHJcbi5tYXJnaW5fdG9wIC5mb3JtIC5pbnB1dDF7XHJcbiAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICB3aWR0aDogMzU0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBoZWlnaHQ6NjRweDtcclxuICAgIHdpZHRoOjM1NHB4XHJcbn1cclxuLm1hcmdpbl90b3AgLmZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjYmNiY2JjO1xyXG4gICAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbiAgICBmb250LXNpemU6MjBweDtcclxuICB9XHJcblxyXG4gIC5idXR0b25fcmVzZXR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6NjRweDtcclxuICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgd2lkdGg6MzU0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0ZWFsO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRlYWw7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgb3V0bGluZTpub25lO1xyXG5cclxufVxyXG4ubWFyZ2luX3RvcCAuZm9ybSBpbnB1dHtcclxuICAgIHdpZHRoOjE3cHg7XHJcbiAgICBoZWlnaHQ6MTdweDtcclxufVxyXG5cclxuLm1hcmdpbl90b3AgaDEge1xyXG4gICAgZm9udC1mYW1pbHk6IFVidW50dTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0b3A6IDI4JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDE3JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAzOTU1O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxufVxyXG4ubWFyZ2luX3RvcCBwe1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgdG9wOiAxOTlweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDE3NHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHJpZ2h0OiAxOTBweDtcclxuICAgIGNvbG9yOiAjMDAzOTU1O1xyXG4gICAgZm9udC1mYW1pbHk6IHNlcmlmO1xyXG59XHJcblxyXG4uYnV0dG9uX3Jlc2V0e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OjY0cHg7XHJcbiAgICBmb250LXNpemU6MjBweDtcclxuICAgIHdpZHRoOjM1NHB4O1xyXG4gICAgYmFja2dyb3VuZDogdGVhbDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0ZWFsO1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgIG91dGxpbmU6bm9uZTtcclxuXHJcbn1cclxuICB9XHJcblxyXG5cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBcclxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDEyMDBweCkgXHJcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxNjAwcHgpIFxyXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxyXG4gIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSkgeyBcclxuXHJcbiAgICAubWFyZ2luX2xlZnQge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA5MnB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDY2cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgICAuaW1hZ2V7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvbm9iYWNrZ3JvdW5kQDJ4LnBuZ1wiKTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA2MDdweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIH1cclxuICAgIC5wYWRkaW5nX21haW4gaW1nIHtcclxuICAgICAgICB3aWR0aDogODA0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3MDNweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1hcmdpbl90b3AgLmZvcm17XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMzM4cHg7XHJcbiAgICAgICAgbGVmdDogMjAxcHg7XHJcbiAgICB9XHJcbiAgICAubWFyZ2luX3RvcCAuZm9ybSAuaW5wdXQxe1xyXG4gICAgICAgIGhlaWdodDogNjRweDtcclxuICAgICAgICB3aWR0aDogMzU0cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgaGVpZ2h0OjY0cHg7XHJcbiAgICAgICAgd2lkdGg6MzU0cHhcclxuICAgIH1cclxuICAgIC5tYXJnaW5fdG9wIC5mb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgY29sb3I6ICNiY2JjYmM7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAuYnV0dG9uX3Jlc2V0e1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBoZWlnaHQ6NjRweDtcclxuICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICB3aWR0aDozNTRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0ZWFsO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdGVhbDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgIH1cclxuICAgIC5tYXJnaW5fdG9wIC5mb3JtIGlucHV0e1xyXG4gICAgICAgIHdpZHRoOjE3cHg7XHJcbiAgICAgICAgaGVpZ2h0OjE3cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tYXJnaW5fdG9wIGgxIHtcclxuICAgICAgICBmb250LWZhbWlseTogVWJ1bnR1O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgdG9wOiAyOCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDIyJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICMwMDM5NTU7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgIH1cclxuICAgIC5tYXJnaW5fdG9wIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIHRvcDogMTk5cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDE3NHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIHJpZ2h0OiAxOTBweDtcclxuICAgICAgICBjb2xvcjogIzAwMzk1NTtcclxuICAgICAgICBmb250LWZhbWlseTogc2VyaWY7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5idXR0b25fcmVzZXR7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGhlaWdodDo2NHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgIHdpZHRoOjM1NHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRlYWw7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB0ZWFsO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgICAuaDEsIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDUlIDAgNSU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5tYXJnaW5fbGVmdCB7XHJcbiAgICAgICAgLyogbWFyZ2luLWxlZnQ6IDQ3cHg7ICovXHJcbiAgICAgICAgLyogbWFyZ2luLXRvcDogNTVweDsgKi9cclxuICAgICAgICAvKiBwYWRkaW5nLWxlZnQ6IDM1cHg7ICovXHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwM3B4O1xyXG4gICAgICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0NnB4OyAqL1xyXG4gICAgfVxyXG4gICAgLnJvdy5tYXJnaW5fdG9wIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNyU7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2V7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL25vYmFja2dyb3VuZEAyeC5wbmdcIik7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLyogaGVpZ2h0OiA1MzRweDsgKi9cclxuICAgICAgICAvKiBwYWRkaW5nOiAzJTsgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDQ4NnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWFyZ2luX3RvcCAuZm9ybXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAzMzhweDtcclxuICAgICAgICBsZWZ0OiAyMDFweDtcclxuICAgIH1cclxuICAgIC5tYXJnaW5fdG9wIC5mb3JtIC5pbnB1dDF7XHJcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgICAgIHdpZHRoOiAzNTRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICBoZWlnaHQ6NjRweDtcclxuICAgICAgICB3aWR0aDozNTRweFxyXG4gICAgfVxyXG4gICAgLm1hcmdpbl90b3AgLmZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBjb2xvcjogI2JjYmNiYztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgfVxyXG4gICAgICAuYnV0dG9uX3Jlc2V0e1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIC8qIG1hcmdpbi1sZWZ0OiAzJTsgKi9cclxuICAgICAgICB3aWR0aDogMjY2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdGVhbDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHRlYWw7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTMlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gICAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgIH1cclxuICAgIC5jb2wtbGctMSwgLmNvbC1sZy0xMCwgLmNvbC1sZy0xMSwgLmNvbC1sZy0xMiwgLmNvbC1sZy0yLCAuY29sLWxnLTMsIC5jb2wtbGctNCwgLmNvbC1sZy01LCAuY29sLWxnLTYsIC5jb2wtbGctNywgLmNvbC1sZy04LCAuY29sLWxnLTksIC5jb2wtbWQtMSwgLmNvbC1tZC0xMCwgLmNvbC1tZC0xMSwgLmNvbC1tZC0xMiwgLmNvbC1tZC0yLCAuY29sLW1kLTMsIC5jb2wtbWQtNCwgLmNvbC1tZC01LCAuY29sLW1kLTYsIC5jb2wtbWQtNywgLmNvbC1tZC04LCAuY29sLW1kLTksIC5jb2wtc20tMSwgLmNvbC1zbS0xMCwgLmNvbC1zbS0xMSwgLmNvbC1zbS0xMiwgLmNvbC1zbS0yLCAuY29sLXNtLTMsIC5jb2wtc20tNCwgLmNvbC1zbS01LCAuY29sLXNtLTYsIC5jb2wtc20tNywgLmNvbC1zbS04LCAuY29sLXNtLTksIC5jb2wteHMtMSwgLmNvbC14cy0xMCwgLmNvbC14cy0xMSwgLmNvbC14cy0xMiwgLmNvbC14cy0yLCAuY29sLXhzLTMsIC5jb2wteHMtNCwgLmNvbC14cy01LCAuY29sLXhzLTYsIC5jb2wteHMtNywgLmNvbC14cy04LCAuY29sLXhzLTkge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgfVxyXG4gICAgLm1hcmdpbl90b3AgLmZvcm0gaW5wdXR7XHJcbiAgICAgICAgd2lkdGg6MTdweDtcclxuICAgICAgICBoZWlnaHQ6MTdweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1hcmdpbl90b3AgaDEge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBVYnVudHU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB0b3A6IDM3JTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNjUlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogIzAwMzk1NTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgfVxyXG4gICAgLm1hcmdpbl90b3AgcHtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgdG9wOiAxOTlweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMTc0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgcmlnaHQ6IDE5MHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAzOTU1O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcblxyXG4gICAgLmgxLCBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgIC8qIG1hcmdpbjogMCA1JSAwIDUlOyAqL1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAubWFyZ2luX2xlZnQge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyOCU7XHJcbiAgICBcclxuICAgIH1cclxuICAgIC5yb3cubWFyZ2luX3RvcCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjclO1xyXG4gICAgfVxyXG4gICAgLmltYWdle1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kX3RlYmxldC5wbmdcIik7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLyogaGVpZ2h0OiA1MzRweDsgKi9cclxuICAgICAgICAvKiBwYWRkaW5nOiAzJTsgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAvKiBoZWlnaHQ6IDQ4NnB4OyAqL1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWFyZ2luX3RvcCAuZm9ybXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAzMzhweDtcclxuICAgICAgICBsZWZ0OiAyMDFweDtcclxuICAgIH1cclxuICAgIC5tYXJnaW5fdG9wIC5mb3JtIC5pbnB1dDF7XHJcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgICAgIHdpZHRoOiAzNTRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICBoZWlnaHQ6NjRweDtcclxuICAgICAgICB3aWR0aDozNTRweFxyXG4gICAgfVxyXG4gICAgLm1hcmdpbl90b3AgLmZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBjb2xvcjogI2JjYmNiYztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgfVxyXG4gICAgICAuYnV0dG9uX3Jlc2V0e1xyXG5cclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB3aWR0aDogMzY2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdGVhbDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHRlYWw7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjUlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gICAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgIH1cclxuICAgIC5jb2wtbGctMSwgLmNvbC1sZy0xMCwgLmNvbC1sZy0xMSwgLmNvbC1sZy0xMiwgLmNvbC1sZy0yLCAuY29sLWxnLTMsIC5jb2wtbGctNCwgLmNvbC1sZy01LCAuY29sLWxnLTYsIC5jb2wtbGctNywgLmNvbC1sZy04LCAuY29sLWxnLTksIC5jb2wtbWQtMSwgLmNvbC1tZC0xMCwgLmNvbC1tZC0xMSwgLmNvbC1tZC0xMiwgLmNvbC1tZC0yLCAuY29sLW1kLTMsIC5jb2wtbWQtNCwgLmNvbC1tZC01LCAuY29sLW1kLTYsIC5jb2wtbWQtNywgLmNvbC1tZC04LCAuY29sLW1kLTksIC5jb2wtc20tMSwgLmNvbC1zbS0xMCwgLmNvbC1zbS0xMSwgLmNvbC1zbS0xMiwgLmNvbC1zbS0yLCAuY29sLXNtLTMsIC5jb2wtc20tNCwgLmNvbC1zbS01LCAuY29sLXNtLTYsIC5jb2wtc20tNywgLmNvbC1zbS04LCAuY29sLXNtLTksIC5jb2wteHMtMSwgLmNvbC14cy0xMCwgLmNvbC14cy0xMSwgLmNvbC14cy0xMiwgLmNvbC14cy0yLCAuY29sLXhzLTMsIC5jb2wteHMtNCwgLmNvbC14cy01LCAuY29sLXhzLTYsIC5jb2wteHMtNywgLmNvbC14cy04LCAuY29sLXhzLTkge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgfVxyXG4gICAgLm1hcmdpbl90b3AgLmZvcm0gaW5wdXR7XHJcbiAgICAgICAgd2lkdGg6MTdweDtcclxuICAgICAgICBoZWlnaHQ6MTdweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1hcmdpbl90b3AgaDEge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBVYnVudHU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB0b3A6IDM3JTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNjUlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogIzAwMzk1NTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgfVxyXG4gICAgLm1hcmdpbl90b3AgcHtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgdG9wOiAxOTlweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMTc0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgcmlnaHQ6IDE5MHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAzOTU1O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcclxuICAgIH1cclxuXHJcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/comfirmation/comfirmation.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/comfirmation/comfirmation.component.ts ***!
    \********************************************************/

  /*! exports provided: ComfirmationComponent */

  /***/
  function srcAppComfirmationComfirmationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComfirmationComponent", function () {
      return ComfirmationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var ComfirmationComponent =
    /*#__PURE__*/
    function () {
      function ComfirmationComponent(router, translate, title) {
        _classCallCheck(this, ComfirmationComponent);

        this.router = router;
        this.translate = translate;
        this.title = title;
      }

      _createClass(ComfirmationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.translate.addLangs(['English', 'Spanish']);
          console.log(sessionStorage.getItem("pageTitle") == 'Spanish' || sessionStorage.getItem("pageTitle") == 'English');

          if (sessionStorage.getItem("pageTitle") == 'Spanish' || sessionStorage.getItem("pageTitle") == 'English') {
            var lang = sessionStorage.getItem("pageTitle");
            this.translate.use(lang);
            console.log("1");
          } else {
            this.translate.addLangs(['English', 'Spanish']);
            this.translate.setDefaultLang('English');
            var browserLang = this.translate.getBrowserLang();
            this.translate.use(browserLang.match(/English|Spanish/) ? browserLang : 'English');
            console.log("2");
          }
        }
      }, {
        key: "okay",
        value: function okay() {
          sessionStorage.removeItem("pageTitle");
          this.router.navigate(['/']);
        }
      }]);

      return ComfirmationComponent;
    }();

    ComfirmationComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
      }];
    };

    ComfirmationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-comfirmation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./comfirmation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/comfirmation/comfirmation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./comfirmation.component.css */
      "./src/app/comfirmation/comfirmation.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])], ComfirmationComponent);
    /***/
  },

  /***/
  "./src/app/createprofile/createprofile.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/createprofile/createprofile.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCreateprofileCreateprofileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep .row {\r\n    margin-right: 0px; \r\n    margin-left: 0px;\r\n}\r\n\r\nhtml {\r\n  -webkit-text-size-adjust: none\r\n}\r\n\r\n::ng-deep .mat-form-field-flex {\r\n  display: -webkit-inline-box;\r\n  display: inline-flex;\r\n  -webkit-box-align: baseline;\r\n          align-items: baseline;\r\n  box-sizing: border-box;\r\n  width: 90% !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-underline {\r\n  position: absolute;\r\n  width: 0% !important;\r\n  pointer-events: none;\r\n  -webkit-transform: scaleY(1.0001);\r\n          transform: scaleY(1.0001);\r\n  border-bottom: none;\r\n}\r\n\r\n/* ----------- Non-Retina Screens ----------- */\r\n\r\n@media screen \r\n  and (min-width: 1200px) \r\n  and (max-width: 1600px) \r\n   { \r\n\r\n    img.select_img {\r\n      width: 40px;\r\n      margin-right: 10px;\r\n  }\r\n/* //start */\r\n.select_language{\r\n\r\n}\r\n::ng-deep .mat-form-field-infix {\r\n    display: block;\r\n    position: relative;\r\n    -webkit-box-flex: 1;\r\n            flex: auto;\r\n    min-width: 0;\r\n    /* top: 10px; */\r\n    width: 180px;\r\n    left: 20px;\r\n    /* background: white; */\r\n    line-height: 1;\r\n}\r\n\r\n\r\n.mat-form-field-infix1{\r\n  display: block;\r\n  position: relative;\r\n  -webkit-box-flex: 1;\r\n          flex: auto;\r\n  min-width: 0;\r\n  /* top: 10px; */\r\n  width: 180px;\r\n  left: 20px;\r\n  /* background: white; */\r\n  line-height: 1;\r\n}\r\nimg.select_img.position_img.ng-star-inserted {\r\n  position: absolute;\r\n  top: 110px;\r\n  left: 10px;\r\n}\r\n\r\n::ng-deep .mat-select-value-text {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    padding-left: 29px;\r\n}\r\nlabel {\r\n  display: inline-block;\r\n  max-width: 100%;\r\n  margin-bottom: 5px;\r\n  font-weight: 700;\r\n  /* color: white; */\r\n  background: bottom;\r\n  margin-top: 19px;\r\n  line-height: 2.5;\r\n  margin-left: 20px;\r\n  /* width: 180px; */\r\n}\r\n.select{\r\n    margin-top: 22px;\r\n    height: 64px;\r\n    width: 354px;\r\n    border-radius: 10px;\r\n    /* position: absolute; */\r\n    background: white;\r\n    border: 1px solid white;\r\n    height:64px;\r\n    width:354px;\r\n    box-shadow: 1px 1px 1px 1px lightgrey;\r\n    color: #bcbcbc;\r\n    padding-left:10px;\r\n    font-size:20px;\r\n \r\n}\r\n\r\n\r\n.mat-toolbar {\r\n  background: white;\r\n  color: rgba(0, 0, 0, 0.87);\r\n}\r\n\r\n\r\n.fa, .fab, .fal, .far, .fas {\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  /* display: inline-block; */\r\n  font-style: normal;\r\n  font-variant: normal;\r\n  text-rendering: auto;\r\n  font-size: 27px;\r\n  line-height: 1.9;\r\n  color: white;\r\n  margin-right:10px;\r\n}\r\n\r\n.top_icons {\r\n/* width:50% !important; */\r\n}\r\n.center{\r\ntext-align: center;\r\nposition: absolute;\r\ntop: 0;\r\nleft: 40%;\r\nline-height: 0.7;\r\ncolor: white;\r\nfont-size: 15px !important;\r\n}\r\nselect.classic {\r\n   /* top: 32px; */\r\n   background-image: linear-gradient(45deg, transparent 50%, #e8e8f1 50%), linear-gradient(135deg, #ededf3 50%, transparent 50%), linear-gradient(to right, #222324, #2f3030);\r\n   background-position: calc(100% - 23px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), 100% 47px;\r\n   background-size: 8px 8px, 8px 8px, 2.8em 2.8em;\r\n   background-repeat: no-repeat;  \r\n}\r\n\r\nselect.mat-input-element {\r\n  font: normal !;\r\n    -moz-appearance: none;\r\n    -webkit-appearance: none;\r\n    position: relative;\r\n    background-color: #003955;\r\n    color: white;\r\n    display: -webkit-inline-box;\r\n    display: inline-flex;\r\n    box-sizing: border-box;\r\n    /* font-size: 19px; */\r\n    padding-top: 7px !important;\r\n    /* padding-top: 1em; */\r\n    top: -1em;\r\n    margin-bottom: -1em;\r\n}\r\n.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {\r\n  font-family: inherit;\r\n  font-weight: 500;\r\n  line-height: 0.4;\r\n  color: inherit;\r\n}\r\nheader {\r\n    height: 58px;\r\n    width: 100%;\r\n    background-color: #003955;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n.mat-toolbar-row, .mat-toolbar-single-row {\r\n  /* height: 226px; */\r\n  /* margin-bottom: -35px; */\r\n}\r\n\r\n.left {\r\n    width: 50%;\r\n}\r\n.right {\r\n    width: 48%;\r\n}\r\n\r\n  \r\n  .topnav {\r\n    overflow: hidden;\r\n  \r\n  }\r\n  \r\n  .topnav a {\r\n    float: left;\r\n    display: block;\r\n    color: #333 !important;\r\n    text-align: center;\r\n    padding: 14px 20px;\r\n    text-decoration: none;\r\n    font-size: 21px;\r\n  }\r\n  \r\n  .topnav a:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n  }\r\n  \r\n  .topnav a.active {\r\n    background-color: white;\r\n    color: black;\r\n  }\r\n  \r\n  .topnav .icon {\r\n    display: none;\r\n  }\r\n    /* //end */\r\n    .circle{\r\n   \r\n        height:607px;\r\n        width:607px;\r\n        background-color: #e6f7f7;\r\n        /* opacity: 20%; */\r\n        border-radius: 50%;\r\n    }\r\n    \r\n    /* Chrome, Safari, Edge, Opera */\r\n    input::-webkit-outer-spin-button,\r\n    input::-webkit-inner-spin-button {\r\n      -webkit-appearance: none;\r\n      margin: 0;\r\n    }\r\n    \r\n    /* Firefox */\r\n    input[type=number] {\r\n      -moz-appearance:textfield;\r\n    }\r\n    .margin_top{\r\n    \r\n        /* margin-top:116px; */\r\n    \r\n    }\r\n    .top_square{\r\n    \r\n        height: 130px;\r\n        width: 130px;\r\n        -webkit-transform: rotate(-46deg);\r\n        transform: rotate(-46deg);\r\n        background: #fdd9c0;\r\n        left: 190px;\r\n        position: absolute;\r\n        top: -86px;\r\n        z-index: 1;\r\n    }\r\n    \r\n    .right_square{\r\n    \r\n        height: 32px;\r\n        width: 32px;\r\n        -webkit-transform: rotate(-46deg);\r\n        transform: rotate(-46deg);\r\n        background: teal;\r\n        left: 516px;\r\n        position: absolute;\r\n        top: -8px;\r\n    }\r\n    .bottom_right_circle{\r\n    \r\n        height: 120px;\r\n        width: 120px;\r\n        left: 472px;\r\n        position: absolute;\r\n        top: 500px;\r\n        background-color: #c7e8f2;\r\n        border-radius: 50%;\r\n    }\r\n    \r\n    .bottom_left_square{\r\n    \r\n        height: 64px;\r\n        width: 64px;\r\n        -webkit-transform: rotate(-46deg);\r\n        transform: rotate(-46deg);\r\n        background: #e6f7f7;\r\n        left: 43px;\r\n        position: absolute;\r\n       \r\n        top: 682px;\r\n    }\r\n    \r\n    .margin_top h1{\r\n        font-family: Ubuntu;\r\n        font-weight: 600;\r\n        top: 152px;\r\n        position: absolute;\r\n        line-height: 1;\r\n        left: 168px;\r\n        text-align: center;\r\n        color: #003955;\r\n        \r\n    }\r\n    .margin_top p{\r\n    \r\n        font-size: 19px;\r\n    top: 270px;\r\n    position: absolute;\r\n    left: 112px;\r\n    text-align: center;\r\n    letter-spacing: 1px;\r\n    right: 69px;\r\n    color: #003955;\r\n    font-family: serif;\r\n    }\r\n    .margin_top .form{\r\n        position: absolute;\r\n        top: 411px;\r\n        left: 139px;\r\n    }\r\n    .margin_top .form input{\r\n        height: 64px;\r\n        width: 354px;\r\n        border-radius: 10px;\r\n        /* position: absolute; */\r\n        border: 1px solid white;\r\n        height:64px;\r\n        width:354px;\r\n        box-shadow: 1px 1px 1px 1px lightgrey;\r\n    }\r\n    .margin_top .form input::-webkit-input-placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:20px;\r\n      }\r\n    .margin_top .form input::-moz-placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:20px;\r\n      }\r\n    .margin_top .form input::-ms-input-placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:20px;\r\n      }\r\n    .margin_top .form input::placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:20px;\r\n      }\r\n    \r\n      .margin_top .form input::value {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:20px;\r\n      }\r\n    \r\n      .button_reset{\r\n        color: white;\r\n        height:64px;\r\n        font-size:20px;\r\n        width:354px;\r\n        background: teal;\r\n        border-radius: 30px;\r\n        border: 2px solid teal;\r\n        margin-top: 24px;\r\n        cursor: pointer;\r\n        outline:none;\r\n\r\n    \r\n    }\r\n\r\n    span {\r\n        color: #003955;\r\n        /* font-size: :9pt; */\r\n        font-size: 12px;\r\n        font-family: serif;\r\n        text-align: center;\r\n    }\r\n    .top{\r\nmargin-top:90px;\r\ntext-align:center;\r\n    }\r\n    /* input[type=text]::-ms-clear {\r\n      color:red\r\n    } */\r\n}\r\n\r\n@media screen \r\n  and (min-device-width: 1200px) \r\n  and (max-device-width: 1600px) \r\n  and (-webkit-min-device-pixel-ratio: 2)\r\n  and (-webkit-min-device-pixel-ratio: 2), screen \r\n  and (min-device-width: 1200px) \r\n  and (max-device-width: 1600px) \r\n  and (-webkit-min-device-pixel-ratio: 2)\r\n  and (min-resolution: 192dpi) { \r\n\r\n        span {\r\n        color: #003955;\r\n        /* font-size: :9pt; */\r\n        font-size: 12px;\r\n        font-family: serif;\r\n        text-align: center;\r\n        }\r\n        .top{\r\n        margin-top:90px;\r\n        text-align:center;\r\n        }\r\n    .circle{\r\n   \r\n        height:607px;\r\n        width:607px;\r\n        background-color: #e6f7f7;\r\n        /* opacity: 20%; */\r\n        border-radius: 50%;\r\n    }\r\n    \r\n    /* Chrome, Safari, Edge, Opera */\r\n    input::-webkit-outer-spin-button,\r\n    input::-webkit-inner-spin-button {\r\n      -webkit-appearance: none;\r\n      margin: 0;\r\n    }\r\n    \r\n    /* Firefox */\r\n    input[type=number] {\r\n      -moz-appearance:textfield;\r\n    }\r\n    .margin_top{\r\n    \r\n        /* margin-top:116px; */\r\n    \r\n    }\r\n    .top_square{\r\n    \r\n        height: 130px;\r\n        width: 130px;\r\n        -webkit-transform: rotate(-46deg);\r\n        transform: rotate(-46deg);\r\n        background: #fdd9c0;\r\n        left: 190px;\r\n        position: absolute;\r\n        top: -86px;\r\n        z-index: 1;\r\n    }\r\n    \r\n    .right_square{\r\n    \r\n        height: 32px;\r\n        width: 32px;\r\n        -webkit-transform: rotate(-46deg);\r\n        transform: rotate(-46deg);\r\n        background: teal;\r\n        left: 516px;\r\n        position: absolute;\r\n        top: -8px;\r\n    }\r\n    .bottom_right_circle{\r\n    \r\n        height: 120px;\r\n        width: 120px;\r\n        left: 472px;\r\n        position: absolute;\r\n        top: 500px;\r\n        background-color: #c7e8f2;\r\n        border-radius: 50%;\r\n    }\r\n    \r\n    .bottom_left_square{\r\n    \r\n        height: 64px;\r\n        width: 64px;\r\n        -webkit-transform: rotate(-46deg);\r\n        transform: rotate(-46deg);\r\n        background: #e6f7f7;\r\n        left: 43px;\r\n        position: absolute;\r\n       \r\n        top: 682px;\r\n    }\r\n    \r\n    .margin_top h1{\r\n        font-family: Ubuntu;\r\n        font-weight: 600;\r\n        top: 140px;\r\n        position: absolute;\r\n        left: 172px;\r\n        text-align: center;\r\n        color: #003955;\r\n        \r\n    }\r\n    .margin_top p{\r\n    \r\n        font-size: 19px;\r\n    top: 270px;\r\n    position: absolute;\r\n    left: 112px;\r\n    text-align: center;\r\n    letter-spacing: 1px;\r\n    right: 69px;\r\n    color: #003955;\r\n    font-family: serif;\r\n    }\r\n    .margin_top .form{\r\n        position: absolute;\r\n        top: 411px;\r\n        left: 139px;\r\n    }\r\n    .margin_top .form input{\r\n        height: 64px;\r\n        width: 354px;\r\n        border-radius: 10px;\r\n        /* position: absolute; */\r\n        border: 1px solid white;\r\n        height:64px;\r\n        width:354px;\r\n        box-shadow: 1px 1px 1px 1px lightgrey;\r\n    }\r\n    .margin_top .form input::-webkit-input-placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:20px;\r\n      }\r\n    .margin_top .form input::-moz-placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:20px;\r\n      }\r\n    .margin_top .form input::-ms-input-placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:20px;\r\n      }\r\n    .margin_top .form input::placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:20px;\r\n      }\r\n    \r\n      .margin_top .form input::value {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:20px;\r\n      }\r\n    \r\n      .button_reset{\r\n        color: white;\r\n        height:64px;\r\n        font-size:20px;\r\n        width:354px;\r\n        background: teal;\r\n        border-radius: 30px;\r\n        border: 2px solid teal;\r\n        margin-top: 24px;\r\n        outline:none;\r\n\r\n    \r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n\r\n  ::ng-deep .mat-select-value {\r\n    display: table-cell;\r\n    max-width: 0;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    padding-left: 62px !important;\r\n    line-height: 1.4;\r\n}\r\n  img.select_img {\r\n    width: 40px;\r\n    height: 24px;\r\n    margin-right: 12px;\r\n}\r\n  img.select_img.position_img.ng-star-inserted{\r\n    position: absolute;\r\n    top: 92px;\r\n    left: 16%;\r\n}\r\n::ng-deep span.ng-tns-c4-1.ng-star-inserted {\r\n  /* margin-left: 34px; */\r\n  line-height: 1.4;\r\n  margin-left: 12%;\r\n}\r\n\r\n  .select{\r\n\r\n    border-radius: 10px;\r\n    border: 1px solid lightgrey;\r\n    height: 54px;\r\n    width: 266px;\r\n    -webkit-appearance: none;\r\n\r\n    margin-top: 22px;\r\n    border-radius: 10px;\r\n    background: white;\r\n    box-shadow: 1px 1px 1px 1px lightgrey;\r\n    color: #bcbcbc;\r\n \r\n}\r\n    .container {\r\n        padding-right: 0px;\r\n        padding-left: 0px;\r\n        margin-right: auto;\r\n        margin-left: auto;\r\n    }\r\n           \r\n    .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 \r\n    \r\n    {\r\n        position: relative;\r\n        min-height: 1px;\r\n        padding-right: 0px;\r\n        padding-left: 0px;\r\n    \r\n    }\r\n        /* Chrome, Safari, Edge, Opera */\r\n        input::-webkit-outer-spin-button,\r\n        input::-webkit-inner-spin-button {\r\n          -webkit-appearance: none;\r\n          margin: 0;\r\n        }\r\n        \r\n        /* Firefox */\r\n        input[type=number] {\r\n          -moz-appearance:textfield;\r\n        }\r\n    .col-xs-12 {\r\n        width: auto;\r\n        text-align: center;\r\n    }\r\n    \r\n    .top {\r\n        margin-top: 198px;\r\n        text-align: center;\r\n        color: #003955;\r\n        font-size: 11px;\r\n        margin-left: 1%;\r\n        margin-right: 1%;\r\n    }\r\n    img {\r\n        /* width: 405px;\r\n        height: 544px; */\r\n        width: 92%;\r\n        height: 470px;\r\n        margin-left: 4%;\r\n        margin-right: 4%;\r\n        \r\n    }\r\n    \r\n    .app-topbar {\r\n        display: none !important;\r\n    }\r\n\r\n    \r\n    .circle{\r\n    \r\n        height:607px;\r\n        width:607px;\r\n        background-color: #e6f7f7;\r\n        /* opacity: 20%; */\r\n        border-radius: 50%;\r\n    }\r\n    \r\n    /* Chrome, Safari, Edge, Opera */\r\n    input::-webkit-outer-spin-button,\r\n    input::-webkit-inner-spin-button {\r\n      -webkit-appearance: none;\r\n      margin: 0;\r\n    }\r\n    \r\n    /* Firefox */\r\n    input[type=number] {\r\n      -moz-appearance:textfield;\r\n    }\r\n    .margin_top{\r\n    \r\n        /* margin-top:116px; */\r\n    \r\n    }\r\n    .top_square{\r\n    \r\n        height: 130px;\r\n        width: 130px;\r\n        -webkit-transform: rotate(-46deg);\r\n        transform: rotate(-46deg);\r\n        background: #fdd9c0;\r\n        left: 190px;\r\n        position: absolute;\r\n        top: -86px;\r\n        z-index: 1;\r\n    }\r\n    \r\n    .right_square{\r\n    \r\n        height: 32px;\r\n        width: 32px;\r\n        -webkit-transform: rotate(-46deg);\r\n        transform: rotate(-46deg);\r\n        background: teal;\r\n        left: 516px;\r\n        position: absolute;\r\n        top: -8px;\r\n    }\r\n    .bottom_right_circle{\r\n    \r\n        height: 120px;\r\n        width: 120px;\r\n        left: 472px;\r\n        position: absolute;\r\n        top: 500px;\r\n        background-color: #c7e8f2;\r\n        border-radius: 50%;\r\n    }\r\n    \r\n    .bottom_left_square{\r\n    \r\n        height: 64px;\r\n        width: 64px;\r\n        -webkit-transform: rotate(-46deg);\r\n        transform: rotate(-46deg);\r\n        background: #e6f7f7;\r\n        left: 43px;\r\n        position: absolute;\r\n       \r\n        top: 682px;\r\n    }\r\n    \r\n    .margin_top h1{\r\n        /* font-family: Ubuntu;\r\n        font-weight: 600;\r\n        top: 181px;\r\n        position: absolute;\r\n        left: 64px;\r\n        font-size: 35px;\r\n        text-align: center;\r\n        color: #003955; */\r\n        font-family: Ubuntu;\r\n        font-weight: 600;\r\n        top: 90px;\r\n        position: absolute;\r\n        left: 20%;\r\n        font-size: 28px;\r\n        text-align: center;\r\n        color: #003955;\r\n        \r\n    }\r\n    .margin_top p{\r\n        /* font-size: 19px;\r\n        top: 339px;\r\n        position: absolute;\r\n        left: 76px;\r\n        text-align: center;\r\n        letter-spacing: 1px;\r\n        right: 69px;\r\n        color: #003955;\r\n        font-family: serif; */\r\n    font-size: 17px;\r\n    top: 188px;\r\n    position: absolute;\r\n    left: 34px;\r\n    text-align: center;\r\n    letter-spacing: 1px;\r\n    right: 33px;\r\n    color: #003955;\r\n    font-family: serif;\r\n\r\n    }\r\n    .margin_top .form{\r\n        /* position: absolute;\r\n        top: 544px;\r\n        left: 52px; */\r\n        position: absolute;\r\n        top: 442px;\r\n        /* left: 26px */\r\n    \r\n    }\r\n    .margin_top .form input{\r\n        border-radius: 10px;\r\n        border: 1px solid lightgrey;\r\n        height: 54px;\r\n        width: 266px;\r\n        box-shadow: 1px 1px 1px 1px lightgrey;\r\n        -webkit-appearance : none;\r\n    \r\n    \r\n    }\r\n    /* input[type=\"text\"] {\r\n        -webkit-appearance : none;\r\n        border-radius      : 0;\r\n    } */\r\n    .margin_top .form input::-webkit-input-placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:18px;\r\n        overflow: visible;\r\n      }\r\n    .margin_top .form input::-moz-placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:18px;\r\n        overflow: visible;\r\n      }\r\n    .margin_top .form input::-ms-input-placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:18px;\r\n        overflow: visible;\r\n      }\r\n    .margin_top .form input::placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:18px;\r\n        overflow: visible;\r\n      }\r\n    \r\n\r\n      \r\n      .margin_top .form input::value {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:18px;\r\n        overflow: visible;\r\n      }\r\n    \r\n      .button_reset{\r\n        color: white;\r\n        /* height:64px; */\r\n        font-size:20px;\r\n        height: 54px;\r\n        width: 266px;\r\n        background: teal;\r\n        border-radius: 30px;\r\n        border: 2px solid teal;\r\n        margin-top: 24px;\r\n    \r\n    }\r\n    input::-webkit-input-placeholder {\r\n        overflow: visible;\r\n      }\r\n    input::-moz-placeholder {\r\n        overflow: visible;\r\n      }\r\n    input::-ms-input-placeholder {\r\n        overflow: visible;\r\n      }\r\n    input::placeholder {\r\n        overflow: visible;\r\n      }\r\n\r\n\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 1024px) {\r\n  \r\n\r\n  ::ng-deep .mat-select-value {\r\n    display: table-cell;\r\n    max-width: 0;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    padding-left: 62px !important;\r\n    line-height: 1.4;\r\n}\r\n  img.select_img {\r\n    width: 40px;\r\n    height: 24px;\r\n    margin-right: 12px;\r\n}\r\n  img.select_img.position_img.ng-star-inserted{\r\n    position: absolute;\r\n    top: 73px;\r\n    left: 16%;\r\n\r\n}\r\n::ng-deep mat-option#mat-option-1 img {\r\n  margin-top: 0%;\r\n}\r\n\r\n::ng-deep mat-option#mat-option-0 img {\r\n  margin-top: 0%;\r\n}\r\n::ng-deep span.ng-tns-c4-1.ng-star-inserted {\r\n  /* margin-left: 34px; */\r\n  line-height: 1.4;\r\n}\r\n\r\n  .select{\r\n\r\n    border-radius: 10px;\r\n    border: 1px solid lightgrey;\r\n    height: 64px;\r\n    width: 386px;\r\n    -webkit-appearance: none;\r\n\r\n    margin-top: 22px;\r\n    border-radius: 10px;\r\n    background: white;\r\n    box-shadow: 1px 1px 1px 1px lightgrey;\r\n    color: #bcbcbc;\r\n \r\n}\r\n    .container {\r\n        padding-right: 0px;\r\n        padding-left: 0px;\r\n        margin-right: auto;\r\n        margin-left: auto;\r\n    }\r\n           \r\n    /* .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 \r\n    \r\n    {\r\n        position: relative;\r\n        min-height: 1px;\r\n        padding-right: 0px;\r\n        padding-left: 0px;\r\n    \r\n    } */\r\n        /* Chrome, Safari, Edge, Opera */\r\n        input::-webkit-outer-spin-button,\r\n        input::-webkit-inner-spin-button {\r\n          -webkit-appearance: none;\r\n          margin: 0;\r\n        }\r\n        \r\n        /* Firefox */\r\n        input[type=number] {\r\n          -moz-appearance:textfield;\r\n        }\r\n    .col-xs-12 {\r\n        width: auto;\r\n        text-align: center;\r\n    }\r\n    \r\n    .top {\r\n        margin-top: 76px;\r\n        text-align: center;\r\n        color: #003955;\r\n        font-size: 11px;\r\n        margin-left: 1%;\r\n        margin-right: 1%;\r\n    }\r\n    img {\r\n        /* width: 405px;\r\n        height: 544px; */\r\n        width: 92%;\r\n        height: 100%;\r\n        margin-left: 4%;\r\n        margin-right: 4%;\r\n        margin-top: 5%;\r\n        text-align:center\r\n        \r\n    }\r\n    \r\n    .app-topbar {\r\n        display: none !important;\r\n    }\r\n\r\n    \r\n    .circle{\r\n    \r\n        height:607px;\r\n        width:607px;\r\n        background-color: #e6f7f7;\r\n        /* opacity: 20%; */\r\n        border-radius: 50%;\r\n    }\r\n    \r\n    /* Chrome, Safari, Edge, Opera */\r\n    input::-webkit-outer-spin-button,\r\n    input::-webkit-inner-spin-button {\r\n      -webkit-appearance: none;\r\n      margin: 0;\r\n    }\r\n    \r\n    /* Firefox */\r\n    input[type=number] {\r\n      -moz-appearance:textfield;\r\n    }\r\n    .margin_top{\r\n    \r\n        /* margin-top:116px; */\r\n        margin-left: 8%;\r\n    \r\n    }\r\n    .top_square{\r\n    \r\n        height: 130px;\r\n        width: 130px;\r\n        -webkit-transform: rotate(-46deg);\r\n        transform: rotate(-46deg);\r\n        background: #fdd9c0;\r\n        left: 190px;\r\n        position: absolute;\r\n        top: -86px;\r\n        z-index: 1;\r\n    }\r\n    \r\n    .right_square{\r\n    \r\n        height: 32px;\r\n        width: 32px;\r\n        -webkit-transform: rotate(-46deg);\r\n        transform: rotate(-46deg);\r\n        background: teal;\r\n        left: 516px;\r\n        position: absolute;\r\n        top: -8px;\r\n    }\r\n    .bottom_right_circle{\r\n    \r\n        height: 120px;\r\n        width: 120px;\r\n        left: 472px;\r\n        position: absolute;\r\n        top: 500px;\r\n        background-color: #c7e8f2;\r\n        border-radius: 50%;\r\n    }\r\n    \r\n    .bottom_left_square{\r\n    \r\n        height: 64px;\r\n        width: 64px;\r\n        -webkit-transform: rotate(-46deg);\r\n        transform: rotate(-46deg);\r\n        background: #e6f7f7;\r\n        left: 43px;\r\n        position: absolute;       \r\n        top: 682px;\r\n    }\r\n    \r\n    .margin_top h1{\r\n      font-family: Ubuntu;\r\n      font-weight: 600;\r\n      top: 141px;\r\n      position: absolute;\r\n      left: 31%;\r\n      font-size: 28px;\r\n      text-align: center;\r\n      color: #003955;\r\n        \r\n    }\r\n    .margin_top p{\r\n      font-size: 17px;\r\n      top: 257px;\r\n      position: absolute;\r\n      left: 69px;\r\n      text-align: center;\r\n      letter-spacing: 1px;\r\n      right: 87px;\r\n      color: #003955;\r\n      font-family: serif;\r\n\r\n    }\r\n    .margin_top .form{\r\n        text-align: center;\r\n        position: absolute;\r\n        /* left: 28%; */\r\n        top: 400px;\r\n    \r\n    }\r\n    .margin_top .form input{\r\n        border-radius: 10px;\r\n        border: 1px solid lightgrey;\r\n        height: 64px;\r\n        width: 386px;\r\n        box-shadow: 1px 1px 1px 1px lightgrey;\r\n        -webkit-appearance : none;\r\n    \r\n    \r\n    }\r\n    /* input[type=\"text\"] {\r\n        -webkit-appearance : none;\r\n        border-radius      : 0;\r\n    } */\r\n    .margin_top .form input::-webkit-input-placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:18px;\r\n        overflow: visible;\r\n      }\r\n    .margin_top .form input::-moz-placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:18px;\r\n        overflow: visible;\r\n      }\r\n    .margin_top .form input::-ms-input-placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:18px;\r\n        overflow: visible;\r\n      }\r\n    .margin_top .form input::placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:18px;\r\n        overflow: visible;\r\n      }\r\n    \r\n\r\n      \r\n      .margin_top .form input::value {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:18px;\r\n        overflow: visible;\r\n      }\r\n    \r\n      .button_reset{\r\n        color: white;\r\n        /* height:64px; */\r\n        font-size:20px;\r\n        height: 64px;\r\n        width: 386px;\r\n        background: teal;\r\n        border-radius: 30px;\r\n        border: 2px solid teal;\r\n        margin-top: 24px;\r\n        outline:none;\r\n    \r\n    }\r\n    input::-webkit-input-placeholder {\r\n        overflow: visible;\r\n      }\r\n    input::-moz-placeholder {\r\n        overflow: visible;\r\n      }\r\n    input::-ms-input-placeholder {\r\n        overflow: visible;\r\n      }\r\n    input::placeholder {\r\n        overflow: visible;\r\n      }\r\n  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlcHJvZmlsZS9jcmVhdGVwcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLDJCQUFvQjtFQUFwQixvQkFBb0I7RUFDcEIsMkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBS0EsK0NBQStDOztBQUMvQzs7Ozs7SUFLSTtNQUNFLFdBQVc7TUFDWCxrQkFBa0I7RUFDdEI7QUFDRixZQUFZO0FBQ1o7O0FBRUE7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQVU7WUFBVixVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCOzs7QUFHQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQVU7VUFBVixVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0QjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7SUFDSSxn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QUNqQixjQUFjO1FBQ2QsaUJBQWlCO01BQ25CO0lBTEY7UUFDSSxjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxpQkFBaUI7TUFDbkI7SUFMRjtRQUNJLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsY0FBYztRQUNkLGlCQUFpQjtNQUNuQjs7OztNQUlBO1FBQ0UsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsaUJBQWlCO01BQ25COztNQUVBO1FBQ0UsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsWUFBWTtRQUNaLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLHNCQUFzQjtRQUN0QixnQkFBZ0I7UUFDaEIsWUFBWTs7SUFFaEI7SUFDQTtRQUNJLGlCQUFpQjtNQUNuQjtJQUZGO1FBQ0ksaUJBQWlCO01BQ25CO0lBRkY7UUFDSSxpQkFBaUI7TUFDbkI7SUFGRjtRQUNJLGlCQUFpQjtNQUNuQjs7QUFFTiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZXByb2ZpbGUvY3JlYXRlcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5yb3cge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lXHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAwJSAhaW1wb3J0YW50O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHRyYW5zZm9ybTogc2NhbGVZKDEuMDAwMSk7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0gTm9uLVJldGluYSBTY3JlZW5zIC0tLS0tLS0tLS0tICovXHJcbkBtZWRpYSBzY3JlZW4gXHJcbiAgYW5kIChtaW4td2lkdGg6IDEyMDBweCkgXHJcbiAgYW5kIChtYXgtd2lkdGg6IDE2MDBweCkgXHJcbiAgIHsgXHJcblxyXG4gICAgaW1nLnNlbGVjdF9pbWcge1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuLyogLy9zdGFydCAqL1xyXG4uc2VsZWN0X2xhbmd1YWdle1xyXG5cclxufVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxleDogYXV0bztcclxuICAgIG1pbi13aWR0aDogMDtcclxuICAgIC8qIHRvcDogMTBweDsgKi9cclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiB3aGl0ZTsgKi9cclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG5cclxuLm1hdC1mb3JtLWZpZWxkLWluZml4MXtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxleDogYXV0bztcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgLyogdG9wOiAxMHB4OyAqL1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBsZWZ0OiAyMHB4O1xyXG4gIC8qIGJhY2tncm91bmQ6IHdoaXRlOyAqL1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcbmltZy5zZWxlY3RfaW1nLnBvc2l0aW9uX2ltZy5uZy1zdGFyLWluc2VydGVkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMTBweDtcclxuICBsZWZ0OiAxMHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zZWxlY3QtdmFsdWUtdGV4dCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyOXB4O1xyXG59XHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIC8qIGNvbG9yOiB3aGl0ZTsgKi9cclxuICBiYWNrZ3JvdW5kOiBib3R0b207XHJcbiAgbWFyZ2luLXRvcDogMTlweDtcclxuICBsaW5lLWhlaWdodDogMi41O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIC8qIHdpZHRoOiAxODBweDsgKi9cclxufVxyXG4uc2VsZWN0e1xyXG4gICAgbWFyZ2luLXRvcDogMjJweDtcclxuICAgIGhlaWdodDogNjRweDtcclxuICAgIHdpZHRoOiAzNTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgaGVpZ2h0OjY0cHg7XHJcbiAgICB3aWR0aDozNTRweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCBsaWdodGdyZXk7XHJcbiAgICBjb2xvcjogI2JjYmNiYztcclxuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgZm9udC1zaXplOjIwcHg7XHJcbiBcclxufVxyXG5cclxuXHJcbi5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbn1cclxuXHJcblxyXG4uZmEsIC5mYWIsIC5mYWwsIC5mYXIsIC5mYXMge1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcclxuICBmb250LXNpemU6IDI3cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuOTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXJpZ2h0OjEwcHg7XHJcbn1cclxuXHJcbi50b3BfaWNvbnMge1xyXG4vKiB3aWR0aDo1MCUgIWltcG9ydGFudDsgKi9cclxufVxyXG4uY2VudGVye1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxudG9wOiAwO1xyXG5sZWZ0OiA0MCU7XHJcbmxpbmUtaGVpZ2h0OiAwLjc7XHJcbmNvbG9yOiB3aGl0ZTtcclxuZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuc2VsZWN0LmNsYXNzaWMge1xyXG4gICAvKiB0b3A6IDMycHg7ICovXHJcbiAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgNTAlLCAjZThlOGYxIDUwJSksIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlZGVkZjMgNTAlLCB0cmFuc3BhcmVudCA1MCUpLCBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyMjIzMjQsICMyZjMwMzApO1xyXG4gICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUgLSAyM3B4KSBjYWxjKDFlbSArIDJweCksIGNhbGMoMTAwJSAtIDE1cHgpIGNhbGMoMWVtICsgMnB4KSwgMTAwJSA0N3B4O1xyXG4gICBiYWNrZ3JvdW5kLXNpemU6IDhweCA4cHgsIDhweCA4cHgsIDIuOGVtIDIuOGVtO1xyXG4gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAgXHJcbn1cclxuXHJcbnNlbGVjdC5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgZm9udDogbm9ybWFsICE7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzOTU1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLyogZm9udC1zaXplOiAxOXB4OyAqL1xyXG4gICAgcGFkZGluZy10b3A6IDdweCAhaW1wb3J0YW50O1xyXG4gICAgLyogcGFkZGluZy10b3A6IDFlbTsgKi9cclxuICAgIHRvcDogLTFlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xZW07XHJcbn1cclxuLmgxLCAuaDIsIC5oMywgLmg0LCAuaDUsIC5oNiwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMC40O1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcbmhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDU4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDM5NTU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcbi5tYXQtdG9vbGJhci1yb3csIC5tYXQtdG9vbGJhci1zaW5nbGUtcm93IHtcclxuICAvKiBoZWlnaHQ6IDIyNnB4OyAqL1xyXG4gIC8qIG1hcmdpbi1ib3R0b206IC0zNXB4OyAqL1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbi5yaWdodCB7XHJcbiAgICB3aWR0aDogNDglO1xyXG59XHJcblxyXG4gIFxyXG4gIC50b3BuYXYge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLnRvcG5hdiBhIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gIH1cclxuICBcclxuICAudG9wbmF2IGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLnRvcG5hdiBhLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLnRvcG5hdiAuaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAgIC8qIC8vZW5kICovXHJcbiAgICAuY2lyY2xle1xyXG4gICBcclxuICAgICAgICBoZWlnaHQ6NjA3cHg7XHJcbiAgICAgICAgd2lkdGg6NjA3cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjdmNztcclxuICAgICAgICAvKiBvcGFjaXR5OiAyMCU7ICovXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBDaHJvbWUsIFNhZmFyaSwgRWRnZSwgT3BlcmEgKi9cclxuICAgIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG4gICAgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogRmlyZWZveCAqL1xyXG4gICAgaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuICAgICAgLW1vei1hcHBlYXJhbmNlOnRleHRmaWVsZDtcclxuICAgIH1cclxuICAgIC5tYXJnaW5fdG9we1xyXG4gICAgXHJcbiAgICAgICAgLyogbWFyZ2luLXRvcDoxMTZweDsgKi9cclxuICAgIFxyXG4gICAgfVxyXG4gICAgLnRvcF9zcXVhcmV7XHJcbiAgICBcclxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NmRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ2ZGVnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmRkOWMwO1xyXG4gICAgICAgIGxlZnQ6IDE5MHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC04NnB4O1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5yaWdodF9zcXVhcmV7XHJcbiAgICBcclxuICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDZkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NmRlZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdGVhbDtcclxuICAgICAgICBsZWZ0OiA1MTZweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtOHB4O1xyXG4gICAgfVxyXG4gICAgLmJvdHRvbV9yaWdodF9jaXJjbGV7XHJcbiAgICBcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICBsZWZ0OiA0NzJweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdlOGYyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJvdHRvbV9sZWZ0X3NxdWFyZXtcclxuICAgIFxyXG4gICAgICAgIGhlaWdodDogNjRweDtcclxuICAgICAgICB3aWR0aDogNjRweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NmRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ2ZGVnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTZmN2Y3O1xyXG4gICAgICAgIGxlZnQ6IDQzcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgXHJcbiAgICAgICAgdG9wOiA2ODJweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1hcmdpbl90b3AgaDF7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFVidW50dTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIHRvcDogMTUycHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGxlZnQ6IDE2OHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogIzAwMzk1NTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5tYXJnaW5fdG9wIHB7XHJcbiAgICBcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICB0b3A6IDI3MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgcmlnaHQ6IDY5cHg7XHJcbiAgICBjb2xvcjogIzAwMzk1NTtcclxuICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcclxuICAgIH1cclxuICAgIC5tYXJnaW5fdG9wIC5mb3Jte1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDQxMXB4O1xyXG4gICAgICAgIGxlZnQ6IDEzOXB4O1xyXG4gICAgfVxyXG4gICAgLm1hcmdpbl90b3AgLmZvcm0gaW5wdXR7XHJcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgICAgIHdpZHRoOiAzNTRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICBoZWlnaHQ6NjRweDtcclxuICAgICAgICB3aWR0aDozNTRweDtcclxuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggbGlnaHRncmV5O1xyXG4gICAgfVxyXG4gICAgLm1hcmdpbl90b3AgLmZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBjb2xvcjogI2JjYmNiYztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC5tYXJnaW5fdG9wIC5mb3JtIGlucHV0Ojp2YWx1ZSB7XHJcbiAgICAgICAgY29sb3I6ICNiY2JjYmM7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAuYnV0dG9uX3Jlc2V0e1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBoZWlnaHQ6NjRweDtcclxuICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICB3aWR0aDozNTRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0ZWFsO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdGVhbDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBvdXRsaW5lOm5vbmU7XHJcblxyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICMwMDM5NTU7XHJcbiAgICAgICAgLyogZm9udC1zaXplOiA6OXB0OyAqL1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LWZhbWlseTogc2VyaWY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRvcHtcclxubWFyZ2luLXRvcDo5MHB4O1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIH1cclxuICAgIC8qIGlucHV0W3R5cGU9dGV4dF06Oi1tcy1jbGVhciB7XHJcbiAgICAgIGNvbG9yOnJlZFxyXG4gICAgfSAqL1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBcclxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDEyMDBweCkgXHJcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxNjAwcHgpIFxyXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxyXG4gIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSkgeyBcclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICMwMDM5NTU7XHJcbiAgICAgICAgLyogZm9udC1zaXplOiA6OXB0OyAqL1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LWZhbWlseTogc2VyaWY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9we1xyXG4gICAgICAgIG1hcmdpbi10b3A6OTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAuY2lyY2xle1xyXG4gICBcclxuICAgICAgICBoZWlnaHQ6NjA3cHg7XHJcbiAgICAgICAgd2lkdGg6NjA3cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjdmNztcclxuICAgICAgICAvKiBvcGFjaXR5OiAyMCU7ICovXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBDaHJvbWUsIFNhZmFyaSwgRWRnZSwgT3BlcmEgKi9cclxuICAgIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG4gICAgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogRmlyZWZveCAqL1xyXG4gICAgaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuICAgICAgLW1vei1hcHBlYXJhbmNlOnRleHRmaWVsZDtcclxuICAgIH1cclxuICAgIC5tYXJnaW5fdG9we1xyXG4gICAgXHJcbiAgICAgICAgLyogbWFyZ2luLXRvcDoxMTZweDsgKi9cclxuICAgIFxyXG4gICAgfVxyXG4gICAgLnRvcF9zcXVhcmV7XHJcbiAgICBcclxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NmRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ2ZGVnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmRkOWMwO1xyXG4gICAgICAgIGxlZnQ6IDE5MHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC04NnB4O1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5yaWdodF9zcXVhcmV7XHJcbiAgICBcclxuICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDZkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NmRlZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdGVhbDtcclxuICAgICAgICBsZWZ0OiA1MTZweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtOHB4O1xyXG4gICAgfVxyXG4gICAgLmJvdHRvbV9yaWdodF9jaXJjbGV7XHJcbiAgICBcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICBsZWZ0OiA0NzJweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdlOGYyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJvdHRvbV9sZWZ0X3NxdWFyZXtcclxuICAgIFxyXG4gICAgICAgIGhlaWdodDogNjRweDtcclxuICAgICAgICB3aWR0aDogNjRweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NmRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ2ZGVnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTZmN2Y3O1xyXG4gICAgICAgIGxlZnQ6IDQzcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgXHJcbiAgICAgICAgdG9wOiA2ODJweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1hcmdpbl90b3AgaDF7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFVidW50dTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIHRvcDogMTQwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDE3MnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogIzAwMzk1NTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5tYXJnaW5fdG9wIHB7XHJcbiAgICBcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICB0b3A6IDI3MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgcmlnaHQ6IDY5cHg7XHJcbiAgICBjb2xvcjogIzAwMzk1NTtcclxuICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcclxuICAgIH1cclxuICAgIC5tYXJnaW5fdG9wIC5mb3Jte1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDQxMXB4O1xyXG4gICAgICAgIGxlZnQ6IDEzOXB4O1xyXG4gICAgfVxyXG4gICAgLm1hcmdpbl90b3AgLmZvcm0gaW5wdXR7XHJcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgICAgIHdpZHRoOiAzNTRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICBoZWlnaHQ6NjRweDtcclxuICAgICAgICB3aWR0aDozNTRweDtcclxuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggbGlnaHRncmV5O1xyXG4gICAgfVxyXG4gICAgLm1hcmdpbl90b3AgLmZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBjb2xvcjogI2JjYmNiYztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC5tYXJnaW5fdG9wIC5mb3JtIGlucHV0Ojp2YWx1ZSB7XHJcbiAgICAgICAgY29sb3I6ICNiY2JjYmM7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAuYnV0dG9uX3Jlc2V0e1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBoZWlnaHQ6NjRweDtcclxuICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICB3aWR0aDozNTRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0ZWFsO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdGVhbDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgICAgIG91dGxpbmU6bm9uZTtcclxuXHJcbiAgICBcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuXHJcbiAgOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXZhbHVlIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICBtYXgtd2lkdGg6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDYycHggIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbn1cclxuICBpbWcuc2VsZWN0X2ltZyB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxufVxyXG4gIGltZy5zZWxlY3RfaW1nLnBvc2l0aW9uX2ltZy5uZy1zdGFyLWluc2VydGVke1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA5MnB4O1xyXG4gICAgbGVmdDogMTYlO1xyXG59XHJcbjo6bmctZGVlcCBzcGFuLm5nLXRucy1jNC0xLm5nLXN0YXItaW5zZXJ0ZWQge1xyXG4gIC8qIG1hcmdpbi1sZWZ0OiAzNHB4OyAqL1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDEyJTtcclxufVxyXG5cclxuICAuc2VsZWN0e1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICB3aWR0aDogMjY2cHg7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMjJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCBsaWdodGdyZXk7XHJcbiAgICBjb2xvcjogI2JjYmNiYztcclxuIFxyXG59XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgLmNvbC1sZy0yLCAuY29sLWxnLTMsIC5jb2wtbGctNCwgLmNvbC1sZy01LCAuY29sLWxnLTYsIC5jb2wtbGctNywgLmNvbC1sZy04LCAuY29sLWxnLTksIC5jb2wtbWQtMSwgLmNvbC1tZC0xMCwgLmNvbC1tZC0xMSwgLmNvbC1tZC0xMiwgLmNvbC1tZC0yLCAuY29sLW1kLTMsIC5jb2wtbWQtNCwgLmNvbC1tZC01LCAuY29sLW1kLTYsIC5jb2wtbWQtNywgLmNvbC1tZC04LCAuY29sLW1kLTksIC5jb2wtc20tMSwgLmNvbC1zbS0xMCwgLmNvbC1zbS0xMSwgLmNvbC1zbS0xMiwgLmNvbC1zbS0yLCAuY29sLXNtLTMsIC5jb2wtc20tNCwgLmNvbC1zbS01LCAuY29sLXNtLTYsIC5jb2wtc20tNywgLmNvbC1zbS04LCAuY29sLXNtLTksIC5jb2wteHMtMSwgLmNvbC14cy0xMCwgLmNvbC14cy0xMSwgLmNvbC14cy0xMiwgLmNvbC14cy0yLCAuY29sLXhzLTMsIC5jb2wteHMtNCwgLmNvbC14cy01LCAuY29sLXhzLTYsIC5jb2wteHMtNywgLmNvbC14cy04LCAuY29sLXhzLTkgXHJcbiAgICBcclxuICAgIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWluLWhlaWdodDogMXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgICAgIC8qIENocm9tZSwgU2FmYXJpLCBFZGdlLCBPcGVyYSAqL1xyXG4gICAgICAgIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG4gICAgICAgIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyogRmlyZWZveCAqL1xyXG4gICAgICAgIGlucHV0W3R5cGU9bnVtYmVyXSB7XHJcbiAgICAgICAgICAtbW96LWFwcGVhcmFuY2U6dGV4dGZpZWxkO1xyXG4gICAgICAgIH1cclxuICAgIC5jb2wteHMtMTIge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRvcCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTk4cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjMDAzOTU1O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgICAgLyogd2lkdGg6IDQwNXB4O1xyXG4gICAgICAgIGhlaWdodDogNTQ0cHg7ICovXHJcbiAgICAgICAgd2lkdGg6IDkyJTtcclxuICAgICAgICBoZWlnaHQ6IDQ3MHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0JTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQlO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYXBwLXRvcGJhciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLmNpcmNsZXtcclxuICAgIFxyXG4gICAgICAgIGhlaWdodDo2MDdweDtcclxuICAgICAgICB3aWR0aDo2MDdweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmN2Y3O1xyXG4gICAgICAgIC8qIG9wYWNpdHk6IDIwJTsgKi9cclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIENocm9tZSwgU2FmYXJpLCBFZGdlLCBPcGVyYSAqL1xyXG4gICAgaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbiAgICBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBGaXJlZm94ICovXHJcbiAgICBpbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gICAgICAtbW96LWFwcGVhcmFuY2U6dGV4dGZpZWxkO1xyXG4gICAgfVxyXG4gICAgLm1hcmdpbl90b3B7XHJcbiAgICBcclxuICAgICAgICAvKiBtYXJnaW4tdG9wOjExNnB4OyAqL1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAudG9wX3NxdWFyZXtcclxuICAgIFxyXG4gICAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ2ZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDZkZWcpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZGQ5YzA7XHJcbiAgICAgICAgbGVmdDogMTkwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTg2cHg7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnJpZ2h0X3NxdWFyZXtcclxuICAgIFxyXG4gICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICB3aWR0aDogMzJweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NmRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ2ZGVnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0ZWFsO1xyXG4gICAgICAgIGxlZnQ6IDUxNnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC04cHg7XHJcbiAgICB9XHJcbiAgICAuYm90dG9tX3JpZ2h0X2NpcmNsZXtcclxuICAgIFxyXG4gICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIGxlZnQ6IDQ3MnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjN2U4ZjI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYm90dG9tX2xlZnRfc3F1YXJle1xyXG4gICAgXHJcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgICAgIHdpZHRoOiA2NHB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ2ZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDZkZWcpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlNmY3Zjc7XHJcbiAgICAgICAgbGVmdDogNDNweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICBcclxuICAgICAgICB0b3A6IDY4MnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWFyZ2luX3RvcCBoMXtcclxuICAgICAgICAvKiBmb250LWZhbWlseTogVWJ1bnR1O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgdG9wOiAxODFweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNjRweDtcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjMDAzOTU1OyAqL1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBVYnVudHU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB0b3A6IDkwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDIwJTtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjMDAzOTU1O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLm1hcmdpbl90b3AgcHtcclxuICAgICAgICAvKiBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgdG9wOiAzMzlweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNzZweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICByaWdodDogNjlweDtcclxuICAgICAgICBjb2xvcjogIzAwMzk1NTtcclxuICAgICAgICBmb250LWZhbWlseTogc2VyaWY7ICovXHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB0b3A6IDE4OHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMzRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICByaWdodDogMzNweDtcclxuICAgIGNvbG9yOiAjMDAzOTU1O1xyXG4gICAgZm9udC1mYW1pbHk6IHNlcmlmO1xyXG5cclxuICAgIH1cclxuICAgIC5tYXJnaW5fdG9wIC5mb3Jte1xyXG4gICAgICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDU0NHB4O1xyXG4gICAgICAgIGxlZnQ6IDUycHg7ICovXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNDQycHg7XHJcbiAgICAgICAgLyogbGVmdDogMjZweCAqL1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAubWFyZ2luX3RvcCAuZm9ybSBpbnB1dHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgICAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICAgICAgd2lkdGg6IDI2NnB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCBsaWdodGdyZXk7XHJcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlIDogbm9uZTtcclxuICAgIFxyXG4gICAgXHJcbiAgICB9XHJcbiAgICAvKiBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlIDogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzICAgICAgOiAwO1xyXG4gICAgfSAqL1xyXG4gICAgLm1hcmdpbl90b3AgLmZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBjb2xvcjogI2JjYmNiYztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICAgICAgICBmb250LXNpemU6MThweDtcclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgfVxyXG4gICAgXHJcblxyXG4gICAgICBcclxuICAgICAgLm1hcmdpbl90b3AgLmZvcm0gaW5wdXQ6OnZhbHVlIHtcclxuICAgICAgICBjb2xvcjogI2JjYmNiYztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICAgICAgICBmb250LXNpemU6MThweDtcclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC5idXR0b25fcmVzZXR7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIC8qIGhlaWdodDo2NHB4OyAqL1xyXG4gICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgIGhlaWdodDogNTRweDtcclxuICAgICAgICB3aWR0aDogMjY2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdGVhbDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHRlYWw7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICBcclxuXHJcbiAgOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXZhbHVlIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICBtYXgtd2lkdGg6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDYycHggIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbn1cclxuICBpbWcuc2VsZWN0X2ltZyB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxufVxyXG4gIGltZy5zZWxlY3RfaW1nLnBvc2l0aW9uX2ltZy5uZy1zdGFyLWluc2VydGVke1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA3M3B4O1xyXG4gICAgbGVmdDogMTYlO1xyXG5cclxufVxyXG46Om5nLWRlZXAgbWF0LW9wdGlvbiNtYXQtb3B0aW9uLTEgaW1nIHtcclxuICBtYXJnaW4tdG9wOiAwJTtcclxufVxyXG5cclxuOjpuZy1kZWVwIG1hdC1vcHRpb24jbWF0LW9wdGlvbi0wIGltZyB7XHJcbiAgbWFyZ2luLXRvcDogMCU7XHJcbn1cclxuOjpuZy1kZWVwIHNwYW4ubmctdG5zLWM0LTEubmctc3Rhci1pbnNlcnRlZCB7XHJcbiAgLyogbWFyZ2luLWxlZnQ6IDM0cHg7ICovXHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxufVxyXG5cclxuICAuc2VsZWN0e1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICB3aWR0aDogMzg2cHg7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMjJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCBsaWdodGdyZXk7XHJcbiAgICBjb2xvcjogI2JjYmNiYztcclxuIFxyXG59XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgLyogLmNvbC1sZy0yLCAuY29sLWxnLTMsIC5jb2wtbGctNCwgLmNvbC1sZy01LCAuY29sLWxnLTYsIC5jb2wtbGctNywgLmNvbC1sZy04LCAuY29sLWxnLTksIC5jb2wtbWQtMSwgLmNvbC1tZC0xMCwgLmNvbC1tZC0xMSwgLmNvbC1tZC0xMiwgLmNvbC1tZC0yLCAuY29sLW1kLTMsIC5jb2wtbWQtNCwgLmNvbC1tZC01LCAuY29sLW1kLTYsIC5jb2wtbWQtNywgLmNvbC1tZC04LCAuY29sLW1kLTksIC5jb2wtc20tMSwgLmNvbC1zbS0xMCwgLmNvbC1zbS0xMSwgLmNvbC1zbS0xMiwgLmNvbC1zbS0yLCAuY29sLXNtLTMsIC5jb2wtc20tNCwgLmNvbC1zbS01LCAuY29sLXNtLTYsIC5jb2wtc20tNywgLmNvbC1zbS04LCAuY29sLXNtLTksIC5jb2wteHMtMSwgLmNvbC14cy0xMCwgLmNvbC14cy0xMSwgLmNvbC14cy0xMiwgLmNvbC14cy0yLCAuY29sLXhzLTMsIC5jb2wteHMtNCwgLmNvbC14cy01LCAuY29sLXhzLTYsIC5jb2wteHMtNywgLmNvbC14cy04LCAuY29sLXhzLTkgXHJcbiAgICBcclxuICAgIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWluLWhlaWdodDogMXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIFxyXG4gICAgfSAqL1xyXG4gICAgICAgIC8qIENocm9tZSwgU2FmYXJpLCBFZGdlLCBPcGVyYSAqL1xyXG4gICAgICAgIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG4gICAgICAgIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyogRmlyZWZveCAqL1xyXG4gICAgICAgIGlucHV0W3R5cGU9bnVtYmVyXSB7XHJcbiAgICAgICAgICAtbW96LWFwcGVhcmFuY2U6dGV4dGZpZWxkO1xyXG4gICAgICAgIH1cclxuICAgIC5jb2wteHMtMTIge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRvcCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNzZweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICMwMDM5NTU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgICAvKiB3aWR0aDogNDA1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1NDRweDsgKi9cclxuICAgICAgICB3aWR0aDogOTIlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNCU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0JTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlclxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYXBwLXRvcGJhciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLmNpcmNsZXtcclxuICAgIFxyXG4gICAgICAgIGhlaWdodDo2MDdweDtcclxuICAgICAgICB3aWR0aDo2MDdweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmN2Y3O1xyXG4gICAgICAgIC8qIG9wYWNpdHk6IDIwJTsgKi9cclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIENocm9tZSwgU2FmYXJpLCBFZGdlLCBPcGVyYSAqL1xyXG4gICAgaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbiAgICBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBGaXJlZm94ICovXHJcbiAgICBpbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gICAgICAtbW96LWFwcGVhcmFuY2U6dGV4dGZpZWxkO1xyXG4gICAgfVxyXG4gICAgLm1hcmdpbl90b3B7XHJcbiAgICBcclxuICAgICAgICAvKiBtYXJnaW4tdG9wOjExNnB4OyAqL1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4JTtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgLnRvcF9zcXVhcmV7XHJcbiAgICBcclxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NmRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ2ZGVnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmRkOWMwO1xyXG4gICAgICAgIGxlZnQ6IDE5MHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC04NnB4O1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5yaWdodF9zcXVhcmV7XHJcbiAgICBcclxuICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDZkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NmRlZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdGVhbDtcclxuICAgICAgICBsZWZ0OiA1MTZweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtOHB4O1xyXG4gICAgfVxyXG4gICAgLmJvdHRvbV9yaWdodF9jaXJjbGV7XHJcbiAgICBcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICBsZWZ0OiA0NzJweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdlOGYyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJvdHRvbV9sZWZ0X3NxdWFyZXtcclxuICAgIFxyXG4gICAgICAgIGhlaWdodDogNjRweDtcclxuICAgICAgICB3aWR0aDogNjRweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NmRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ2ZGVnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTZmN2Y3O1xyXG4gICAgICAgIGxlZnQ6IDQzcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyAgICAgICBcclxuICAgICAgICB0b3A6IDY4MnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWFyZ2luX3RvcCBoMXtcclxuICAgICAgZm9udC1mYW1pbHk6IFVidW50dTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgdG9wOiAxNDFweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAzMSU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogIzAwMzk1NTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5tYXJnaW5fdG9wIHB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgdG9wOiAyNTdweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiA2OXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgIHJpZ2h0OiA4N3B4O1xyXG4gICAgICBjb2xvcjogIzAwMzk1NTtcclxuICAgICAgZm9udC1mYW1pbHk6IHNlcmlmO1xyXG5cclxuICAgIH1cclxuICAgIC5tYXJnaW5fdG9wIC5mb3Jte1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLyogbGVmdDogMjglOyAqL1xyXG4gICAgICAgIHRvcDogNDAwcHg7XHJcbiAgICBcclxuICAgIH1cclxuICAgIC5tYXJnaW5fdG9wIC5mb3JtIGlucHV0e1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgICAgIGhlaWdodDogNjRweDtcclxuICAgICAgICB3aWR0aDogMzg2cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4IGxpZ2h0Z3JleTtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2UgOiBub25lO1xyXG4gICAgXHJcbiAgICBcclxuICAgIH1cclxuICAgIC8qIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2UgOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXMgICAgICA6IDA7XHJcbiAgICB9ICovXHJcbiAgICAubWFyZ2luX3RvcCAuZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGNvbG9yOiAjYmNiY2JjO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICB9XHJcbiAgICBcclxuXHJcbiAgICAgIFxyXG4gICAgICAubWFyZ2luX3RvcCAuZm9ybSBpbnB1dDo6dmFsdWUge1xyXG4gICAgICAgIGNvbG9yOiAjYmNiY2JjO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgLmJ1dHRvbl9yZXNldHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgLyogaGVpZ2h0OjY0cHg7ICovXHJcbiAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgICAgIHdpZHRoOiAzODZweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0ZWFsO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdGVhbDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgfVxyXG4gIFxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/createprofile/createprofile.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/createprofile/createprofile.component.ts ***!
    \**********************************************************/

  /*! exports provided: CreateprofileComponent */

  /***/
  function srcAppCreateprofileCreateprofileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateprofileComponent", function () {
      return CreateprofileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var CreateprofileComponent =
    /*#__PURE__*/
    function () {
      function CreateprofileComponent(router, apiservices, translate, title) {
        _classCallCheck(this, CreateprofileComponent);

        this.router = router;
        this.apiservices = apiservices;
        this.translate = translate;
        this.title = title;
        this.data = {};
        this.selectedCode = 'English';
        this.languages = [{
          value: 'English',
          viewValue: 'English',
          img: '../../assets/english.png'
        }, {
          value: 'Spanish',
          viewValue: 'Spanish',
          img: '../../assets/spanish.png'
        }];
        this.path = true;
      }

      _createClass(CreateprofileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          $(".mat-form-field-infix").css("line-height", 1);

          if (sessionStorage.getItem("pageTitle")) {
            this.selectedCode = sessionStorage.getItem("pageTitle");

            if (this.selectedCode == 'English') {
              // alert("in")
              this.path = true;
            } else if (this.selectedCode == 'Spanish') {
              this.path = false;
            }

            this.translate.setDefaultLang(this.selectedCode);
            this.translate.use(this.selectedCode);
          } else {
            // alert(sessionStorage.getItem("pageTitle"))
            this.translate.addLangs(['English', 'Spanish']);
            this.translate.setDefaultLang('English');
            var browserLang = this.translate.getBrowserLang();
            this.translate.use(browserLang.match(/English|Spanish/) ? browserLang : 'English');
            console.log("this.translate.use", this.translate.currentLang);
            console.log(this.translate);
          }
        }
      }, {
        key: "catch_value",
        value: function catch_value(event) {
          console.log("event", event);
        }
      }, {
        key: "setTheTitle",
        value: function setTheTitle() {
          this.title.setTitle(this.pageTitle);
          console.log(this.lang_data);
        }
      }, {
        key: "function1",
        value: function function1(l, lang_data) {
          if (lang_data == 'English') {
            // alert("in")
            this.path = true;
          } else if (lang_data == 'Spanish') {
            this.path = false;
          }

          console.log("pageTitle", lang_data);
          sessionStorage.removeItem("pageTitle");
          sessionStorage.setItem("pageTitle", lang_data);
        }
      }, {
        key: "okay",
        value: function okay() {
          var _this3 = this;

          console.log(this.data);
          this.apiservices.postdata("post_code", this.data).subscribe(function (data) {
            console.log("response", data);

            if (data['status'] == "false") {
              _this3.router.navigate(['/Nodata', _this3.data['postcode']]);
            } else if (data['status'] == "true") {
              var temp = data['data'];
              temp = temp[0];
              console.log("data['data'][0]['_id']", temp['_id']);

              _this3.router.navigate(['/Report', temp['_id'], _this3.data['postcode']]);
            }
          }); // this.router.navigate(['/Nodata'])
        }
      }]);

      return CreateprofileComponent;
    }();

    CreateprofileComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]
      }];
    };

    CreateprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-createprofile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./createprofile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/createprofile/createprofile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./createprofile.component.css */
      "./src/app/createprofile/createprofile.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])], CreateprofileComponent);
    /***/
  },

  /***/
  "./src/app/dialog/dialog.component.css":
  /*!*********************************************!*\
    !*** ./src/app/dialog/dialog.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDialogDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n @media only screen and (min-device-width: 1200px) \r\n  and (max-device-width: 1600px) \r\n  and (-webkit-min-device-pixel-ratio: 1) { \r\n.padding_inside{\r\n    padding:4%;\r\n}\r\n::ng-deep .mat-dialog-container {\r\n    display: block;\r\n    padding: 24px;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n    overflow: auto;\r\n    outline: 0;\r\n    width: 65%;\r\n    height: 100%;\r\n    min-height: inherit;\r\n    max-height: inherit;\r\n    margin-left: 16.5%;\r\n}\r\n  }\r\n@media only screen and (max-width: 600px){\r\n    ::ng-deep .mat-dialog-container {\r\n        display: block;\r\n        padding: 24px;\r\n        border-radius: 4px;\r\n        box-sizing: border-box;\r\n        overflow: auto;\r\n        outline: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        min-height: inherit;\r\n        max-height: inherit;\r\n        margin-top: 4%;\r\n    }\r\n    ::ng-deep .h1, h1 {\r\n        font-size: 20px;\r\n    }\r\n    ::ng-deep .h3, h3 {\r\n        font-size: 17px;\r\n    }\r\n    span{\r\n        border: 1px solid white;\r\n        background: white;\r\n        cursor: pointer;\r\n        position: absolute;\r\n        top: 10%;\r\n    }\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Q0FDQzs7O0FBR0Q7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsVUFBVTtJQUNWLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7RUFDRTtBQUNGO0lBQ0k7UUFDSSxjQUFjO1FBQ2QsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixzQkFBc0I7UUFDdEIsY0FBYztRQUNkLFVBQVU7UUFDVixXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsY0FBYztJQUNsQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksdUJBQXVCO1FBQ3ZCLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLFFBQVE7SUFDWjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMTIwMHB4KSBcclxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDE2MDBweCkgXHJcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEpIHsgXHJcbi5wYWRkaW5nX2luc2lkZXtcclxuICAgIHBhZGRpbmc6NCU7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjUlO1xyXG59XHJcbiAgfVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgIDo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWluLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQlO1xyXG4gICAgfVxyXG4gICAgOjpuZy1kZWVwIC5oMSwgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIDo6bmctZGVlcCAuaDMsIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB9XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxMCU7XHJcbiAgICB9XHJcblxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/dialog/dialog.component.ts":
  /*!********************************************!*\
    !*** ./src/app/dialog/dialog.component.ts ***!
    \********************************************/

  /*! exports provided: DialogComponent */

  /***/
  function srcAppDialogDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogComponent", function () {
      return DialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var DialogComponent =
    /*#__PURE__*/
    function () {
      function DialogComponent(dialog, dialogRef, data) {
        _classCallCheck(this, DialogComponent);

        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(DialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }]);

      return DialogComponent;
    }();

    DialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: DialogComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/dialog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dialog.component.css */
      "./src/app/dialog/dialog.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], DialogComponent])], DialogComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n/* input:focus ~ .floating-label {\r\n    top: 7%;\r\n    bottom: 12px;\r\n    left: 20px;\r\n    font-size: 22px;\r\n    opacity: 1;\r\n  } */\r\n  .button {\r\n    color: white;\r\n    height: 55px;\r\n    width: 100%;\r\n    background: teal;\r\n    border-radius: 30px;\r\n    border: 1px solid teal;\r\n    margin-top: 10%;\r\n}\r\n  .button_reset{\r\n    color: teal;\r\n    height: 55px;\r\n    width: 100%;\r\n    background: white;\r\n    border-radius: 30px;\r\n    border: 2px solid teal;\r\n    margin-top: 24px;\r\n\r\n}\r\n  /* .floating-label {\r\n  position: absolute;\r\n  pointer-events: none;\r\n  left: 20px;\r\n  font-size: 22px;\r\n  top: 14%;\r\n \r\n  transition: 0.2s ease all;\r\n  color: #b2b2b2;\r\n  }  */\r\n  /* .lastname {\r\n    position: absolute;\r\n    pointer-events: none;\r\n    left: 20px;\r\n    font-size: 22px;\r\n    top: 39%;\r\n  \r\n    transition: 0.2s ease all;\r\n    color: #b2b2b2;\r\n    }  */\r\n  .margin-top{\r\nmargin-top:73px;\r\n\r\n}\r\n  /* input:focus ~ .lastname {\r\n        top: 34%;\r\n        bottom: 12px;\r\n        left: 20px;\r\n        font-size: 22px;\r\n        opacity: 1;\r\n      } */\r\n  /* ::ng-deep mat-form-field:focus {\r\n    border-bottom:3px solid  #09aba9;\r\n    outline: 2px solid white;\r\n  } */\r\n  ::ng-deep .mat-focused .mat-form-field-label {\r\n    /*change color of label*/\r\n    color: gray !important;\r\n   }\r\n  ::ng-deep.mat-form-field-ripple {\r\n   /*change color of underline when focused*/\r\n   background-color: #09aba9 !important;;\r\n  }\r\n  /* ::ng-deep .mat-form-field-infix {\r\n    display: block;\r\n    position: relative;\r\n    flex: auto;\r\n    min-width: 0;\r\n    width: 180px;\r\n    font-size: 21px;\r\n    margin-top: 23px;\r\n} \r\n\r\n/* \r\n::ng-deep .mat-input-element {\r\n    caret-color: red;\r\n}\r\ninput, select, textarea {\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    line-height: inherit;\r\n    width: 100%;\r\n    margin-top: 22px;\r\n    border-top: 1px solid white;\r\n    border-left: 1px solid white;\r\n    border-right: 1px solid white;\r\n} */\r\n  .top_pending{\r\n\r\n    text-align:center;\r\n \r\n}\r\n  .top_pending h1{\r\n    color:#003955;\r\n    font-family: Ubuntu;\r\n}\r\n  .div1{\r\n  \r\n    height: 260px;\r\n    width: 234px;   \r\n    /* margin-left: 292px; */\r\n    margin-left: 65px;\r\n    width: 234px;\r\n    height: 260px;\r\n    background-color: #c7e8f2;\r\n    opacity: 20%;\r\n    border-bottom-right-radius: 100px;\r\n    border-bottom-left-radius: 65px;\r\n    -webkit-transform: rotate(-30deg);\r\n            transform: rotate(-30deg);\r\n    border-top-left-radius: 32px;\r\n    border-top-right-radius: 32px;\r\n    margin-top: 71px;\r\n}\r\n  .div2{\r\n  \r\n    height: 260px;\r\n    width: 234px;   \r\n    /* margin-left: 292px; */\r\n    margin-left: 65px;\r\n    width: 234px;\r\n    height: 260px;\r\n    background-color: #c7e8f2;\r\n    opacity: 20%;\r\n    border-bottom-right-radius: 100px;\r\n    border-bottom-left-radius: 65px;\r\n    -webkit-transform: rotate(-30deg);\r\n            transform: rotate(-30deg);\r\n    border-top-left-radius: 32px;\r\n    border-top-right-radius: 32px;\r\n    margin-top: 71px;\r\n}\r\n  .icons{\r\n    margin-top: 71px;\r\n    /* width: 234px;\r\n    height: 260px; */\r\n  \r\n}\r\n  .margin{\r\n    margin-top:111px;\r\n}\r\n  .para{\r\n    font-size: 25.4px;\r\n    font-family: Ubuntu-Medium;\r\n}\r\n  .icons img{\r\n   \r\n    width: 234px;\r\n    height: 260px;\r\n}\r\n  .example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n  .div3{\r\n  \r\n    height: 260px;\r\n    width: 234px;   \r\n    /* margin-left: 292px; */\r\n    margin-left: 65px;\r\n    width: 234px;\r\n    height: 260px;\r\n    background-color: #c7e8f2;\r\n    opacity: 20%;\r\n    border-bottom-right-radius: 100px;\r\n    border-bottom-left-radius: 65px;\r\n    -webkit-transform: rotate(-30deg);\r\n            transform: rotate(-30deg);\r\n    border-top-left-radius: 32px;\r\n    border-top-right-radius: 32px;\r\n    margin-top: 71px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7OztLQU1LO0VBQ0g7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25CO0VBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixnQkFBZ0I7O0FBRXBCO0VBQ0U7Ozs7Ozs7OztNQVNJO0VBR0o7Ozs7Ozs7OztRQVNNO0VBQ1I7QUFDQSxlQUFlOztBQUVmO0VBQ0k7Ozs7OztTQU1LO0VBRUo7OztLQUdBO0VBR0g7SUFDRSx3QkFBd0I7SUFDeEIsc0JBQXNCO0dBQ3ZCO0VBSUQ7R0FDQyx5Q0FBeUM7R0FDekMsb0NBQW9DO0VBQ3JDO0VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUJDO0VBQ0g7O0lBRUksaUJBQWlCOztBQUVyQjtFQUdBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtFQUNBOztJQUVJLGFBQWE7SUFDYixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQixpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0FBQ3BCO0VBRUE7O0lBRUksYUFBYTtJQUNiLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsK0JBQStCO0lBQy9CLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixnQkFBZ0I7QUFDcEI7RUFDQTtJQUNJLGdCQUFnQjtJQUNoQjtvQkFDZ0I7O0FBRXBCO0VBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7RUFFQTtJQUNJLGlCQUFpQjtJQUNqQiwwQkFBMEI7QUFDOUI7RUFDQTs7SUFFSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjtFQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7RUFFQTtJQUNFLFdBQVc7RUFDYjtFQUNGOztJQUVJLGFBQWE7SUFDYixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQixpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiBpbnB1dDpmb2N1cyB+IC5mbG9hdGluZy1sYWJlbCB7XHJcbiAgICB0b3A6IDclO1xyXG4gICAgYm90dG9tOiAxMnB4O1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfSAqL1xyXG4gIC5idXR0b24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0ZWFsO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRlYWw7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuLmJ1dHRvbl9yZXNldHtcclxuICAgIGNvbG9yOiB0ZWFsO1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0ZWFsO1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxuXHJcbn1cclxuICAvKiAuZmxvYXRpbmctbGFiZWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBsZWZ0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICB0b3A6IDE0JTtcclxuIFxyXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XHJcbiAgY29sb3I6ICNiMmIyYjI7XHJcbiAgfSAgKi9cclxuXHJcblxyXG4gIC8qIC5sYXN0bmFtZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB0b3A6IDM5JTtcclxuICBcclxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XHJcbiAgICBjb2xvcjogI2IyYjJiMjtcclxuICAgIH0gICovXHJcbi5tYXJnaW4tdG9we1xyXG5tYXJnaW4tdG9wOjczcHg7XHJcblxyXG59XHJcbiAgICAvKiBpbnB1dDpmb2N1cyB+IC5sYXN0bmFtZSB7XHJcbiAgICAgICAgdG9wOiAzNCU7XHJcbiAgICAgICAgYm90dG9tOiAxMnB4O1xyXG4gICAgICAgIGxlZnQ6IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH0gKi9cclxuXHJcbiAgICAgLyogOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkOmZvY3VzIHtcclxuICAgIGJvcmRlci1ib3R0b206M3B4IHNvbGlkICAjMDlhYmE5O1xyXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHdoaXRlO1xyXG4gIH0gKi9cclxuXHJcblxyXG4gIDo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIC8qY2hhbmdlIGNvbG9yIG9mIGxhYmVsKi9cclxuICAgIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuICBcclxuXHJcbiAgXHJcbiAgOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAgIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDlhYmE5ICFpbXBvcnRhbnQ7O1xyXG4gIH1cclxuICAvKiA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxleDogYXV0bztcclxuICAgIG1pbi13aWR0aDogMDtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIG1hcmdpbi10b3A6IDIzcHg7XHJcbn0gXHJcblxyXG4vKiBcclxuOjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgICBjYXJldC1jb2xvcjogcmVkO1xyXG59XHJcbmlucHV0LCBzZWxlY3QsIHRleHRhcmVhIHtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGU7XHJcbn0gKi9cclxuLnRvcF9wZW5kaW5ne1xyXG5cclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gXHJcbn1cclxuXHJcblxyXG4udG9wX3BlbmRpbmcgaDF7XHJcbiAgICBjb2xvcjojMDAzOTU1O1xyXG4gICAgZm9udC1mYW1pbHk6IFVidW50dTtcclxufVxyXG4uZGl2MXtcclxuICBcclxuICAgIGhlaWdodDogMjYwcHg7XHJcbiAgICB3aWR0aDogMjM0cHg7ICAgXHJcbiAgICAvKiBtYXJnaW4tbGVmdDogMjkycHg7ICovXHJcbiAgICBtYXJnaW4tbGVmdDogNjVweDtcclxuICAgIHdpZHRoOiAyMzRweDtcclxuICAgIGhlaWdodDogMjYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdlOGYyO1xyXG4gICAgb3BhY2l0eTogMjAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNjVweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zMGRlZyk7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMnB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMycHg7XHJcbiAgICBtYXJnaW4tdG9wOiA3MXB4O1xyXG59XHJcblxyXG4uZGl2MntcclxuICBcclxuICAgIGhlaWdodDogMjYwcHg7XHJcbiAgICB3aWR0aDogMjM0cHg7ICAgXHJcbiAgICAvKiBtYXJnaW4tbGVmdDogMjkycHg7ICovXHJcbiAgICBtYXJnaW4tbGVmdDogNjVweDtcclxuICAgIHdpZHRoOiAyMzRweDtcclxuICAgIGhlaWdodDogMjYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdlOGYyO1xyXG4gICAgb3BhY2l0eTogMjAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNjVweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zMGRlZyk7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMnB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMycHg7XHJcbiAgICBtYXJnaW4tdG9wOiA3MXB4O1xyXG59XHJcbi5pY29uc3tcclxuICAgIG1hcmdpbi10b3A6IDcxcHg7XHJcbiAgICAvKiB3aWR0aDogMjM0cHg7XHJcbiAgICBoZWlnaHQ6IDI2MHB4OyAqL1xyXG4gIFxyXG59XHJcbi5tYXJnaW57XHJcbiAgICBtYXJnaW4tdG9wOjExMXB4O1xyXG59XHJcblxyXG4ucGFyYXtcclxuICAgIGZvbnQtc2l6ZTogMjUuNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFVidW50dS1NZWRpdW07XHJcbn1cclxuLmljb25zIGltZ3tcclxuICAgXHJcbiAgICB3aWR0aDogMjM0cHg7XHJcbiAgICBoZWlnaHQ6IDI2MHB4O1xyXG59XHJcbi5leGFtcGxlLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbi5kaXYze1xyXG4gIFxyXG4gICAgaGVpZ2h0OiAyNjBweDtcclxuICAgIHdpZHRoOiAyMzRweDsgICBcclxuICAgIC8qIG1hcmdpbi1sZWZ0OiAyOTJweDsgKi9cclxuICAgIG1hcmdpbi1sZWZ0OiA2NXB4O1xyXG4gICAgd2lkdGg6IDIzNHB4O1xyXG4gICAgaGVpZ2h0OiAyNjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjN2U4ZjI7XHJcbiAgICBvcGFjaXR5OiAyMCU7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2NXB4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTMwZGVnKTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMycHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzJweDtcclxuICAgIG1hcmdpbi10b3A6IDcxcHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js"); // import {FormControl, Validators} from '@angular/forms';


    var LoginComponent =
    /*#__PURE__*/
    function () {
      // password= new FormControl('', [Validators.required, Validators.password]);
      function LoginComponent(fb) {
        _classCallCheck(this, LoginComponent);

        this.fb = fb;
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getErrorMessage",
        value: function getErrorMessage() {
          return this.email.hasError('required') ? 'You must enter a value' : this.email.hasError('email') ? 'Not a valid email' : ''; // this.password.hasError('required')?'You must enter a value':this.password.hasError('password') ? 'Not a valid password' :
          // '';
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          // TODO: Use EventEmitter with form value
          console.warn(this.profileForm.value);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/nodata/nodata.component.css":
  /*!*********************************************!*\
    !*** ./src/app/nodata/nodata.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNodataNodataComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep .row {\r\n    margin-right: 0px; \r\n    margin-left: 0px;\r\n}\r\nhtml {\r\n    -webkit-text-size-adjust: none\r\n  }\r\n/* ----------- Non-Retina Screens ----------- */\r\n@media screen \r\n  and (min-width: 1200px) \r\n  and (max-width: 1600px)  { \r\n      /* :start */\r\n      label {\r\n        display: inline-block;\r\n        max-width: 100%;\r\n        margin-bottom: 5px;\r\n        font-weight: 700;\r\n        /* color: white; */\r\n        background: bottom;\r\n        margin-top: 19px;\r\n        line-height: 2.5;\r\n        margin-left: 20px;\r\n        /* width: 180px; */\r\n      }\r\n      select{\r\n        background:#003955;\r\n        border:1px solid #003955;\r\n        color:white\r\n      }\r\n      \r\n      \r\n      .mat-toolbar {\r\n        background: white;\r\n        color: rgba(0, 0, 0, 0.87);\r\n      }\r\n      \r\n      \r\n      .fa, .fab, .fal, .far, .fas {\r\n        -moz-osx-font-smoothing: grayscale;\r\n        -webkit-font-smoothing: antialiased;\r\n        /* display: inline-block; */\r\n        font-style: normal;\r\n        font-variant: normal;\r\n        text-rendering: auto;\r\n        font-size: 27px;\r\n        line-height: 1.9;\r\n        color: white;\r\n        margin-right:10px;\r\n      }\r\n      \r\n      .top_icons {\r\n      /* width:50% !important; */\r\n      }\r\n      .center{\r\n      text-align: center;\r\n      position: absolute;\r\n      top: 0;\r\n      left: 40%;\r\n      line-height: 0.7;\r\n      color: white;\r\n      font-size: 15px !important;\r\n      }\r\n      select.classic {\r\n         /* top: 32px; */\r\n         background-image: linear-gradient(45deg, transparent 50%, #e8e8f1 50%), linear-gradient(135deg, #ededf3 50%, transparent 50%), linear-gradient(to right, #222324, #2f3030);\r\n         background-position: calc(100% - 23px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), 100% 47px;\r\n         background-size: 8px 8px, 8px 8px, 2.8em 2.8em;\r\n         background-repeat: no-repeat;  \r\n      }\r\n      \r\n      select.mat-input-element {\r\n        font: normal !;\r\n          -moz-appearance: none;\r\n          -webkit-appearance: none;\r\n          position: relative;\r\n          background-color: #003955;\r\n          color: white;\r\n          display: -webkit-inline-box;\r\n          display: inline-flex;\r\n          box-sizing: border-box;\r\n          /* font-size: 19px; */\r\n          padding-top: 7px !important;\r\n          /* padding-top: 1em; */\r\n          top: -1em;\r\n          margin-bottom: -1em;\r\n      }\r\n      .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {\r\n        font-family: inherit;\r\n        font-weight: 500;\r\n        line-height: 0.4;\r\n        color: inherit;\r\n      }\r\n      header {\r\n          height: 58px;\r\n          width: 100%;\r\n          background-color: #003955;\r\n          position: absolute;\r\n          top: 0;\r\n          left: 0;\r\n      }\r\n      .mat-toolbar-row, .mat-toolbar-single-row {\r\n        /* height: 226px; */\r\n        /* margin-bottom: -35px; */\r\n      }\r\n      \r\n      .left {\r\n          width: 50%;\r\n      }\r\n      .right {\r\n          width: 48%;\r\n      }\r\n      \r\n        \r\n        .topnav {\r\n          overflow: hidden;\r\n        \r\n        }\r\n        \r\n        .topnav a {\r\n          float: left;\r\n          display: block;\r\n          color: #333 !important;\r\n          text-align: center;\r\n          padding: 14px 20px;\r\n          text-decoration: none;\r\n          font-size: 21px;\r\n        }\r\n        \r\n        .topnav a:hover {\r\n          background-color: #ddd;\r\n          color: black;\r\n        }\r\n        \r\n        .topnav a.active {\r\n          background-color: white;\r\n          color: black;\r\n        }\r\n        \r\n        .topnav .icon {\r\n          display: none;\r\n        }\r\n/* :end */\r\n      ::ng-deep .row {\r\n        margin-right: 0px; \r\n        margin-left: 0px;\r\n    }\r\n    .image{\r\n        background-image: url('no_data.png');       \r\n        background-repeat: no-repeat;\r\n        background-size: cover;\r\n        height: 722px;\r\n        width: 778px;       \r\n    }\r\n    span {\r\n        color: #003955;\r\n        /* font-size: :9pt; */\r\n        font-size: 12px;\r\n        font-family: serif;\r\n        text-align: center;\r\n        }\r\n\r\n    .top{\r\n        margin-top:90px;\r\n        text-align:center;\r\n        }\r\n    \r\n    .form{\r\n        position: absolute;\r\n        top: 324px;\r\n        left: 191px;\r\n    }\r\n    .form .input1{\r\n        height: 64px;\r\n        width: 354px;\r\n        border-radius: 10px;\r\n        /* position: absolute; */\r\n        border: 1px solid white;\r\n        height:64px;\r\n        width:354px;\r\n        box-shadow: 1px 1px 1px 1px lightgrey;\r\n    }\r\n     .form input::-webkit-input-placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:20px;\r\n      }\r\n     .form input::-moz-placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:20px;\r\n      }\r\n     .form input::-ms-input-placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:20px;\r\n      }\r\n     .form input::placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:20px;\r\n      }\r\n    \r\n      .button_reset{\r\n        color: white;\r\n        height:64px;\r\n        font-size:20px;\r\n        width:354px;\r\n        background: teal;\r\n        border-radius: 30px;\r\n        border: 2px solid teal;\r\n        margin-top: 24px;\r\n    \r\n    }\r\n   .form input{\r\n        width:17px;\r\n        height:17px;\r\n    }\r\n    \r\n   h1{\r\n    font-family: Ubuntu;\r\n    font-weight: 600;\r\n    top: 68px;\r\n    position: absolute;\r\n    left: 125px;\r\n    text-align: center;line-height: 1;\r\n    color: #003955;\r\n    \r\n    }\r\n    p{\r\n        font-size: 19px;\r\n        top: 199px;\r\n        position: absolute;\r\n        left: 157px;\r\n        text-align: center;\r\n        letter-spacing: 1px;\r\n        right: 190px;\r\n        color: #003955;\r\n        font-family: serif;\r\n    }\r\n}\r\n/* ----------- Retina Screens ----------- */\r\n@media screen \r\n  and (min-device-width: 1200px) \r\n  and (max-device-width: 1600px) \r\n  and (-webkit-min-device-pixel-ratio: 2)\r\n  and (-webkit-min-device-pixel-ratio: 2), screen \r\n  and (min-device-width: 1200px) \r\n  and (max-device-width: 1600px) \r\n  and (-webkit-min-device-pixel-ratio: 2)\r\n  and (min-resolution: 192dpi) { \r\n    ::ng-deep .row {\r\n        margin-right: 0px; \r\n        margin-left: 0px;\r\n    }\r\n    .image{\r\n        background-image: url('no_data.png');       \r\n        background-repeat: no-repeat;\r\n        background-size: cover;\r\n        height: 722px;\r\n        width: 778px;       \r\n    }\r\n    span {\r\n        color: #003955;\r\n        /* font-size: :9pt; */\r\n        font-size: 12px;\r\n        font-family: serif;\r\n        text-align: center;\r\n        }\r\n\r\n    .top{\r\n        margin-top:90px;\r\n        text-align:center;\r\n        }\r\n    \r\n    .form{\r\n        position: absolute;\r\n        top: 324px;\r\n        left: 191px;\r\n    }\r\n    .form .input1{\r\n        height: 64px;\r\n        width: 354px;\r\n        border-radius: 10px;\r\n        /* position: absolute; */\r\n        border: 1px solid white;\r\n        height:64px;\r\n        width:354px;\r\n        box-shadow: 1px 1px 1px 1px lightgrey;\r\n    }\r\n     .form input::-webkit-input-placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:20px;\r\n      }\r\n     .form input::-moz-placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:20px;\r\n      }\r\n     .form input::-ms-input-placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:20px;\r\n      }\r\n     .form input::placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:20px;\r\n      }\r\n    \r\n      .button_reset{\r\n        color: white;\r\n        height:64px;\r\n        font-size:20px;\r\n        width:354px;\r\n        background: teal;\r\n        border-radius: 30px;\r\n        border: 2px solid teal;\r\n        margin-top: 24px;\r\n    \r\n    }\r\n   .form input{\r\n        width:17px;\r\n        height:17px;\r\n    }\r\n    \r\n   h1{\r\n    font-family: Ubuntu;\r\n    font-weight: 600;\r\n    top: 68px;\r\n    position: absolute;\r\n    left: 182px;\r\n    text-align: center;\r\n    color: #003955;\r\n    \r\n    }\r\n    p{\r\n        font-size: 19px;\r\n        top: 199px;\r\n        position: absolute;\r\n        left: 157px;\r\n        text-align: center;\r\n        letter-spacing: 1px;\r\n        right: 190px;\r\n        color: #003955;\r\n        font-family: serif;\r\n    }\r\n}\r\n/* ----------- iPhone 4 and 4S ----------- */\r\n/* Portrait and Landscape */\r\n@media only screen and (max-width: 600px) {\r\n    ::ng-deep .row {\r\n        margin-right: 0px; \r\n        margin-left: 0px;\r\n    }\r\n    .app-topbar {\r\n        display: none;\r\n    }\r\n\r\n    .h1, h1 {\r\n        font-size: 22px;\r\n    }\r\n    .image{\r\n        background-image: url('nobackground@2x.png');\r\n        background-repeat: no-repeat;\r\n        background-size: cover;\r\n        /* height: 488px;\r\n        width: 496px;*/\r\n        margin-top: 20px;\r\n        height: 380px;\r\n        width: 100%;\r\n    } \r\n    span {\r\n        color: #003955;\r\n        /* font-size: :9pt; */\r\n        font-size: 12px;\r\n        font-family: serif;\r\n        text-align: center;\r\n        }\r\n\r\n    .top{\r\n        margin-top:90px;\r\n        text-align:center;\r\n        display: none;\r\n        }\r\n    \r\n    .form{\r\n        position: absolute;\r\n        top: 369px;\r\n        /* left: 22px; */\r\n        text-align: center;\r\n    }\r\n    .form-group {\r\n        margin-bottom: 0px;\r\n    }\r\n    .form .input1{\r\n        height: 54px;\r\n        width: 266px;\r\n        border-radius: 10px;\r\n        /* position: absolute; */\r\n        border: 1px solid white;\r\n        height: 54px;\r\n        width: 275px;\r\n        margin-right: 4%;\r\n        box-shadow: 1px 1px 1px 1px lightgrey;\r\n\r\n        -webkit-appearance : none;\r\n    }\r\n     .form input::-webkit-input-placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:18px;\r\n        overflow: visible;\r\n      }\r\n     .form input::-moz-placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:18px;\r\n        overflow: visible;\r\n      }\r\n     .form input::-ms-input-placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:18px;\r\n        overflow: visible;\r\n      }\r\n     .form input::placeholder {\r\n        color: #bcbcbc;\r\n        padding-left:10px;\r\n        font-size:18px;\r\n        overflow: visible;\r\n      }\r\n\r\n\r\n      \r\n    \r\n      .button_reset{\r\n        color: white;\r\n        /* height:64px; */\r\n        font-size:20px;\r\n        height: 54px;\r\n        width: 266px;\r\n        background: teal;\r\n        border-radius: 30px;\r\n        border: 2px solid teal;\r\n        margin-top: 80px;\r\n        margin-bottom: 100px;\r\n    }\r\n   .form input{\r\n        width:17px;\r\n        height:17px;\r\n    }\r\n    \r\n   h1{\r\n    font-family: Ubuntu;\r\n    font-weight: 600;\r\n    top: 68px;\r\n    position: absolute;\r\n    left: 5% !important; \r\n    text-align: center;\r\n    color: #003955;\r\n    margin-right: 5%;\r\n    \r\n    }\r\n    p{\r\n        font-size: 16px;\r\n        top: 183px;\r\n        position: absolute;\r\n        left: 39px;\r\n        text-align: center;\r\n        letter-spacing: 1px;\r\n        right: 41px;\r\n        color: #003955;\r\n        font-family: serif;\r\n    }\r\n\r\n}\r\n/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */\r\n/* Portrait and Landscape */\r\n@media (min-width: 768px) and (max-width: 1024px) {\r\n\r\n  ::ng-deep .row {\r\n    margin-right: 0px; \r\n    margin-left: 0px;\r\n}\r\n.app-topbar {\r\n    display: none;\r\n}\r\n\r\n.h1, h1 {\r\n    font-size: 26px;\r\n}\r\n.image{\r\n    background-image: url('nobackground@2x.png');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    /* height: 488px;\r\n    width: 496px;*/\r\n    margin-top: 20px;\r\n    height: 771px;\r\n    width: 100%;\r\n} \r\nspan {\r\n    color: #003955;\r\n    /* font-size: :9pt; */\r\n    font-size: 12px;\r\n    font-family: serif;\r\n    text-align: center;\r\n    }\r\n\r\n.top{\r\n    margin-top:90px;\r\n    text-align:center;\r\n    display: none;\r\n    }\r\n\r\n.form{\r\n  position: absolute;\r\n  top: 57%;\r\n  left: 20%;\r\n  text-align: center;\r\n}\r\n.form-group {\r\n    margin-bottom: 0px;\r\n}\r\n.form .input1{\r\n  height: 64px;\r\n  width: 386px;\r\n    border-radius: 10px;\r\n    /* position: absolute; */\r\n    border: 1px solid white;\r\n    margin-right: 4%;\r\n    box-shadow: 1px 1px 1px 1px lightgrey;\r\n    -webkit-appearance : none;\r\n}\r\n .form input::-webkit-input-placeholder {\r\n    color: #bcbcbc;\r\n    padding-left:10px;\r\n    font-size:18px;\r\n    overflow: visible;\r\n  }\r\n .form input::-moz-placeholder {\r\n    color: #bcbcbc;\r\n    padding-left:10px;\r\n    font-size:18px;\r\n    overflow: visible;\r\n  }\r\n .form input::-ms-input-placeholder {\r\n    color: #bcbcbc;\r\n    padding-left:10px;\r\n    font-size:18px;\r\n    overflow: visible;\r\n  }\r\n .form input::placeholder {\r\n    color: #bcbcbc;\r\n    padding-left:10px;\r\n    font-size:18px;\r\n    overflow: visible;\r\n  }\r\n\r\n\r\n  \r\n\r\n  .button_reset{\r\n    color: white;\r\n    /* height:64px; */\r\n    font-size:20px;\r\n    height: 64px;\r\n    width: 386px;\r\n    background: teal;\r\n    border-radius: 30px;\r\n    border: 2px solid teal;\r\n    margin-top: 49px;\r\n    margin-bottom: 100px;\r\n}\r\n.form input{\r\n    width:17px;\r\n    height:17px;\r\n}\r\n\r\nh1{\r\n  font-family: Ubuntu;\r\n  font-weight: 600;\r\n  top: 27%;\r\n  position: absolute;\r\n  left: 26% !important;\r\n  text-align: center;\r\n  color: #003955;\r\n  margin-right: 5%;\r\n\r\n}\r\np{\r\n  font-size: 21px;\r\n  top: 42%;\r\n  position: absolute;\r\n  left: 12%;\r\n  text-align: center;\r\n  letter-spacing: 1px;\r\n  right: 12%;\r\n  color: #003955;\r\n  font-family: serif;\r\n}\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm9kYXRhL25vZGF0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0k7RUFDRjtBQUNGLCtDQUErQztBQUMvQzs7O01BR00sV0FBVztNQUNYO1FBQ0UscUJBQXFCO1FBQ3JCLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsa0JBQWtCO01BQ3BCO01BQ0E7UUFDRSxrQkFBa0I7UUFDbEIsd0JBQXdCO1FBQ3hCO01BQ0Y7OztNQUdBO1FBQ0UsaUJBQWlCO1FBQ2pCLDBCQUEwQjtNQUM1Qjs7O01BR0E7UUFDRSxrQ0FBa0M7UUFDbEMsbUNBQW1DO1FBQ25DLDJCQUEyQjtRQUMzQixrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixpQkFBaUI7TUFDbkI7O01BRUE7TUFDQSwwQkFBMEI7TUFDMUI7TUFDQTtNQUNBLGtCQUFrQjtNQUNsQixrQkFBa0I7TUFDbEIsTUFBTTtNQUNOLFNBQVM7TUFDVCxnQkFBZ0I7TUFDaEIsWUFBWTtNQUNaLDBCQUEwQjtNQUMxQjtNQUNBO1NBQ0csZUFBZTtTQUNmLDBLQUEwSztTQUMxSyxvR0FBb0c7U0FDcEcsOENBQThDO1NBQzlDLDRCQUE0QjtNQUMvQjs7TUFFQTtRQUNFLGNBQWM7VUFDWixxQkFBcUI7VUFDckIsd0JBQXdCO1VBQ3hCLGtCQUFrQjtVQUNsQix5QkFBeUI7VUFDekIsWUFBWTtVQUNaLDJCQUFvQjtVQUFwQixvQkFBb0I7VUFDcEIsc0JBQXNCO1VBQ3RCLHFCQUFxQjtVQUNyQiwyQkFBMkI7VUFDM0Isc0JBQXNCO1VBQ3RCLFNBQVM7VUFDVCxtQkFBbUI7TUFDdkI7TUFDQTtRQUNF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dGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAucm93IHtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuaHRtbCB7XHJcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmVcclxuICB9XHJcbi8qIC0tLS0tLS0tLS0tIE5vbi1SZXRpbmEgU2NyZWVucyAtLS0tLS0tLS0tLSAqL1xyXG5AbWVkaWEgc2NyZWVuIFxyXG4gIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIFxyXG4gIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpICB7IFxyXG4gICAgICAvKiA6c3RhcnQgKi9cclxuICAgICAgbGFiZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgLyogY29sb3I6IHdoaXRlOyAqL1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGJvdHRvbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxOXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyLjU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgLyogd2lkdGg6IDE4MHB4OyAqL1xyXG4gICAgICB9XHJcbiAgICAgIHNlbGVjdHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiMwMDM5NTU7XHJcbiAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjMDAzOTU1O1xyXG4gICAgICAgIGNvbG9yOndoaXRlXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAubWF0LXRvb2xiYXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgLmZhLCAuZmFiLCAuZmFsLCAuZmFyLCAuZmFzIHtcclxuICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICAgIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC12YXJpYW50OiBub3JtYWw7XHJcbiAgICAgICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XHJcbiAgICAgICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjk7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDoxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAudG9wX2ljb25zIHtcclxuICAgICAgLyogd2lkdGg6NTAlICFpbXBvcnRhbnQ7ICovXHJcbiAgICAgIH1cclxuICAgICAgLmNlbnRlcntcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogNDAlO1xyXG4gICAgICBsaW5lLWhlaWdodDogMC43O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIHNlbGVjdC5jbGFzc2ljIHtcclxuICAgICAgICAgLyogdG9wOiAzMnB4OyAqL1xyXG4gICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDUwJSwgI2U4ZThmMSA1MCUpLCBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZWRlZGYzIDUwJSwgdHJhbnNwYXJlbnQgNTAlKSwgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjIyMzI0LCAjMmYzMDMwKTtcclxuICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMjNweCkgY2FsYygxZW0gKyAycHgpLCBjYWxjKDEwMCUgLSAxNXB4KSBjYWxjKDFlbSArIDJweCksIDEwMCUgNDdweDtcclxuICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA4cHggOHB4LCA4cHggOHB4LCAyLjhlbSAyLjhlbTtcclxuICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgIFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBzZWxlY3QubWF0LWlucHV0LWVsZW1lbnQge1xyXG4gICAgICAgIGZvbnQ6IG5vcm1hbCAhO1xyXG4gICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzk1NTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIC8qIGZvbnQtc2l6ZTogMTlweDsgKi9cclxuICAgICAgICAgIHBhZGRpbmctdG9wOiA3cHggIWltcG9ydGFudDtcclxuICAgICAgICAgIC8qIHBhZGRpbmctdG9wOiAxZW07ICovXHJcbiAgICAgICAgICB0b3A6IC0xZW07XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMWVtO1xyXG4gICAgICB9XHJcbiAgICAgIC5oMSwgLmgyLCAuaDMsIC5oNCwgLmg1LCAuaDYsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDAuNDtcclxuICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgfVxyXG4gICAgICBoZWFkZXIge1xyXG4gICAgICAgICAgaGVpZ2h0OiA1OHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzOTU1O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgfVxyXG4gICAgICAubWF0LXRvb2xiYXItcm93LCAubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XHJcbiAgICAgICAgLyogaGVpZ2h0OiAyMjZweDsgKi9cclxuICAgICAgICAvKiBtYXJnaW4tYm90dG9tOiAtMzVweDsgKi9cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmxlZnQge1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgfVxyXG4gICAgICAucmlnaHQge1xyXG4gICAgICAgICAgd2lkdGg6IDQ4JTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBcclxuICAgICAgICAudG9wbmF2IHtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC50b3BuYXYgYSB7XHJcbiAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnRvcG5hdiBhOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC50b3BuYXYgYS5hY3RpdmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC50b3BuYXYgLmljb24ge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbi8qIDplbmQgKi9cclxuICAgICAgOjpuZy1kZWVwIC5yb3cge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4OyBcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdle1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9ub19kYXRhLnBuZ1wiKTsgICAgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGhlaWdodDogNzIycHg7XHJcbiAgICAgICAgd2lkdGg6IDc3OHB4OyAgICAgICBcclxuICAgIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiAjMDAzOTU1O1xyXG4gICAgICAgIC8qIGZvbnQtc2l6ZTogOjlwdDsgKi9cclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHNlcmlmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgLnRvcHtcclxuICAgICAgICBtYXJnaW4tdG9wOjkwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAuZm9ybXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAzMjRweDtcclxuICAgICAgICBsZWZ0OiAxOTFweDtcclxuICAgIH1cclxuICAgIC5mb3JtIC5pbnB1dDF7XHJcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgICAgIHdpZHRoOiAzNTRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICBoZWlnaHQ6NjRweDtcclxuICAgICAgICB3aWR0aDozNTRweDtcclxuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggbGlnaHRncmV5O1xyXG4gICAgfVxyXG4gICAgIC5mb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgY29sb3I6ICNiY2JjYmM7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAuYnV0dG9uX3Jlc2V0e1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBoZWlnaHQ6NjRweDtcclxuICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICB3aWR0aDozNTRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0ZWFsO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdGVhbDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgXHJcbiAgICB9XHJcbiAgIC5mb3JtIGlucHV0e1xyXG4gICAgICAgIHdpZHRoOjE3cHg7XHJcbiAgICAgICAgaGVpZ2h0OjE3cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgaDF7XHJcbiAgICBmb250LWZhbWlseTogVWJ1bnR1O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRvcDogNjhweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO2xpbmUtaGVpZ2h0OiAxO1xyXG4gICAgY29sb3I6ICMwMDM5NTU7XHJcbiAgICBcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIHRvcDogMTk5cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDE1N3B4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIHJpZ2h0OiAxOTBweDtcclxuICAgICAgICBjb2xvcjogIzAwMzk1NTtcclxuICAgICAgICBmb250LWZhbWlseTogc2VyaWY7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tIFJldGluYSBTY3JlZW5zIC0tLS0tLS0tLS0tICovXHJcbkBtZWRpYSBzY3JlZW4gXHJcbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAxMjAwcHgpIFxyXG4gIGFuZCAobWF4LWRldmljZS13aWR0aDogMTYwMHB4KSBcclxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcclxuICBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpIHsgXHJcbiAgICA6Om5nLWRlZXAgLnJvdyB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7IFxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2V7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL25vX2RhdGEucG5nXCIpOyAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiA3MjJweDtcclxuICAgICAgICB3aWR0aDogNzc4cHg7ICAgICAgIFxyXG4gICAgfVxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICMwMDM5NTU7XHJcbiAgICAgICAgLyogZm9udC1zaXplOiA6OXB0OyAqL1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LWZhbWlseTogc2VyaWY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAudG9we1xyXG4gICAgICAgIG1hcmdpbi10b3A6OTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIC5mb3Jte1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDMyNHB4O1xyXG4gICAgICAgIGxlZnQ6IDE5MXB4O1xyXG4gICAgfVxyXG4gICAgLmZvcm0gLmlucHV0MXtcclxuICAgICAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICAgICAgd2lkdGg6IDM1NHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIGhlaWdodDo2NHB4O1xyXG4gICAgICAgIHdpZHRoOjM1NHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCBsaWdodGdyZXk7XHJcbiAgICB9XHJcbiAgICAgLmZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBjb2xvcjogI2JjYmNiYztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC5idXR0b25fcmVzZXR7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGhlaWdodDo2NHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgIHdpZHRoOjM1NHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRlYWw7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB0ZWFsO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICBcclxuICAgIH1cclxuICAgLmZvcm0gaW5wdXR7XHJcbiAgICAgICAgd2lkdGg6MTdweDtcclxuICAgICAgICBoZWlnaHQ6MTdweDtcclxuICAgIH1cclxuICAgIFxyXG4gICBoMXtcclxuICAgIGZvbnQtZmFtaWx5OiBVYnVudHU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdG9wOiA2OHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTgycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzAwMzk1NTtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgdG9wOiAxOTlweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMTU3cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgcmlnaHQ6IDE5MHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAzOTU1O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcclxuICAgIH1cclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0gaVBob25lIDQgYW5kIDRTIC0tLS0tLS0tLS0tICovXHJcblxyXG4vKiBQb3J0cmFpdCBhbmQgTGFuZHNjYXBlICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIDo6bmctZGVlcCAucm93IHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDsgXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIH1cclxuICAgIC5hcHAtdG9wYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5oMSwgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuICAgIC5pbWFnZXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL25vYmFja2dyb3VuZEAyeC5wbmcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAvKiBoZWlnaHQ6IDQ4OHB4O1xyXG4gICAgICAgIHdpZHRoOiA0OTZweDsqL1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzODBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH0gXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBjb2xvcjogIzAwMzk1NTtcclxuICAgICAgICAvKiBmb250LXNpemU6IDo5cHQ7ICovXHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIC50b3B7XHJcbiAgICAgICAgbWFyZ2luLXRvcDo5MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAuZm9ybXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAzNjlweDtcclxuICAgICAgICAvKiBsZWZ0OiAyMnB4OyAqL1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuZm9ybSAuaW5wdXQxe1xyXG4gICAgICAgIGhlaWdodDogNTRweDtcclxuICAgICAgICB3aWR0aDogMjY2cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgaGVpZ2h0OiA1NHB4O1xyXG4gICAgICAgIHdpZHRoOiAyNzVweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCBsaWdodGdyZXk7XHJcblxyXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZSA6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAgLmZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBjb2xvcjogI2JjYmNiYztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICAgICAgICBmb250LXNpemU6MThweDtcclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIFxyXG4gICAgXHJcbiAgICAgIC5idXR0b25fcmVzZXR7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIC8qIGhlaWdodDo2NHB4OyAqL1xyXG4gICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgIGhlaWdodDogNTRweDtcclxuICAgICAgICB3aWR0aDogMjY2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdGVhbDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHRlYWw7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICAgIH1cclxuICAgLmZvcm0gaW5wdXR7XHJcbiAgICAgICAgd2lkdGg6MTdweDtcclxuICAgICAgICBoZWlnaHQ6MTdweDtcclxuICAgIH1cclxuICAgIFxyXG4gICBoMXtcclxuICAgIGZvbnQtZmFtaWx5OiBVYnVudHU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdG9wOiA2OHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNSUgIWltcG9ydGFudDsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzAwMzk1NTtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICBcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIHRvcDogMTgzcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDM5cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgcmlnaHQ6IDQxcHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDM5NTU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHNlcmlmO1xyXG4gICAgfVxyXG5cclxufVxyXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNSwgNVMsIDVDIGFuZCA1U0UgLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qIFBvcnRyYWl0IGFuZCBMYW5kc2NhcGUgKi9cclxuXHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcblxyXG4gIDo6bmctZGVlcCAucm93IHtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuLmFwcC10b3BiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmgxLCBoMSB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbn1cclxuLmltYWdle1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9ub2JhY2tncm91bmRAMngucG5nKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLyogaGVpZ2h0OiA0ODhweDtcclxuICAgIHdpZHRoOiA0OTZweDsqL1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGhlaWdodDogNzcxcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSBcclxuc3BhbiB7XHJcbiAgICBjb2xvcjogIzAwMzk1NTtcclxuICAgIC8qIGZvbnQtc2l6ZTogOjlwdDsgKi9cclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbi50b3B7XHJcbiAgICBtYXJnaW4tdG9wOjkwcHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4uZm9ybXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1NyU7XHJcbiAgbGVmdDogMjAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmZvcm0gLmlucHV0MXtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbiAgd2lkdGg6IDM4NnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0JTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCBsaWdodGdyZXk7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2UgOiBub25lO1xyXG59XHJcbiAuZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNiY2JjYmM7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgfVxyXG5cclxuXHJcbiAgXHJcblxyXG4gIC5idXR0b25fcmVzZXR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAvKiBoZWlnaHQ6NjRweDsgKi9cclxuICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgd2lkdGg6IDM4NnB4O1xyXG4gICAgYmFja2dyb3VuZDogdGVhbDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0ZWFsO1xyXG4gICAgbWFyZ2luLXRvcDogNDlweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG59XHJcbi5mb3JtIGlucHV0e1xyXG4gICAgd2lkdGg6MTdweDtcclxuICAgIGhlaWdodDoxN3B4O1xyXG59XHJcblxyXG5oMXtcclxuICBmb250LWZhbWlseTogVWJ1bnR1O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdG9wOiAyNyU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDI2JSAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzAwMzk1NTtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG5cclxufVxyXG5we1xyXG4gIGZvbnQtc2l6ZTogMjFweDtcclxuICB0b3A6IDQyJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMTIlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIHJpZ2h0OiAxMiU7XHJcbiAgY29sb3I6ICMwMDM5NTU7XHJcbiAgZm9udC1mYW1pbHk6IHNlcmlmO1xyXG59XHJcblxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/nodata/nodata.component.ts":
  /*!********************************************!*\
    !*** ./src/app/nodata/nodata.component.ts ***!
    \********************************************/

  /*! exports provided: NodataComponent */

  /***/
  function srcAppNodataNodataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NodataComponent", function () {
      return NodataComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var NodataComponent =
    /*#__PURE__*/
    function () {
      function NodataComponent(translate, title, formBuilder, router, apiservices, route) {
        var _this4 = this;

        _classCallCheck(this, NodataComponent);

        this.translate = translate;
        this.title = title;
        this.formBuilder = formBuilder;
        this.router = router;
        this.apiservices = apiservices;
        this.route = route;
        this.data = {};
        this.submitted = false;
        this.route.params.subscribe(function (params) {
          _this4.data['postcode'] = params['id'];
          console.log(" this.data['postcode']", _this4.data['postcode']);
        });
      }

      _createClass(NodataComponent, [{
        key: "okay",
        value: function okay() {
          var _this5 = this;

          console.log(" this.data['postcode']", this.data.email);
          this.apiservices.postdata("insert_customers", this.data).subscribe(function (res) {
            console.log("res", res);

            _this5.router.navigate(['/confirmation']);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.translate.addLangs(['English', 'Spanish']);
          console.log(sessionStorage.getItem("pageTitle") == 'Spanish' || sessionStorage.getItem("pageTitle") == 'English');

          if (sessionStorage.getItem("pageTitle") == 'Spanish' || sessionStorage.getItem("pageTitle") == 'English') {
            var lang = sessionStorage.getItem("pageTitle");
            this.translate.use(lang);
            console.log("1");
          } else {
            this.translate.addLangs(['English', 'Spanish']);
            this.translate.setDefaultLang('English');
            var browserLang = this.translate.getBrowserLang();
            this.translate.use(browserLang.match(/English|Spanish/) ? browserLang : 'English');
            console.log("2");
          }

          this.registerForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]]
          });
        }
      }, {
        key: "function1",
        value: function function1(l, lang_data) {
          console.log("pageTitle", lang_data);
          sessionStorage.removeItem("pageTitle");
          sessionStorage.setItem("pageTitle", lang_data);
        }
      }, {
        key: "setTheTitle",
        value: function setTheTitle() {
          this.title.setTitle(this.pageTitle);
        } // convenience getter for easy access to form fields

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this6 = this;

          this.submitted = true;
          this.data.email = this.registerForm.value.email;

          if (this.registerForm.invalid) {
            return;
          }

          this.apiservices.postdata("insert_customers", this.data).subscribe(function (res) {
            console.log("res", res);

            _this6.router.navigate(['/confirmation']);
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.registerForm.controls;
        }
      }]);

      return NodataComponent;
    }();

    NodataComponent.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    NodataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nodata',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nodata.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nodata/nodata.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nodata.component.css */
      "./src/app/nodata/nodata.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], NodataComponent);
    /***/
  },

  /***/
  "./src/app/report/report.component.css":
  /*!*********************************************!*\
    !*** ./src/app/report/report.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppReportReportComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "th.mat-header-cell.cdk-column-Substance.mat-column-Substance {\r\n    width: 28%;\r\n    padding: 20px;\r\n    text-align: center;\r\n    width: 25%;\r\n    text-align: center;\r\n    /* border-left: 1px solid rgba(201, 191, 191, 0.788235294117647);\r\n    border-right: 1px solid rgba(201, 191, 191, 0.788235294117647);\r\n    border-top: 1px solid rgba(201, 191, 191, 0.788235294117647); */\r\n}\r\n\r\n\r\n\r\n::ng-deep mat-row, td.mat-cell {\r\n    border-top-color: #00808085;\r\n    font-size: 16px;\r\n    line-height: 2.7;\r\n    font-family: Ubuntu;\r\n    color: #2b5d6f;\r\n    text-align: center;\r\n    /* border-left: 1px solid rgba(201, 191, 191, 0.788235294117647); */\r\n}\r\n\r\n\r\n\r\n::ng-deep tr.mat-footer-row, tr.mat-row {\r\n    height: 48px;\r\n    /* border-left: 1px solid rgba(201, 191, 191, 0.788235294117647);\r\n    border-right: 1px solid rgba(201, 191, 191, 0.788235294117647);\r\n    border-top: 1px solid rgba(201, 191, 191, 0.788235294117647); */\r\n}\r\n\r\n\r\n\r\nth.mat-header-cell.cdk-column-Before.mat-column-Before {\r\n    width: 24%;\r\n    width: 25%;\r\n    text-align: center;\r\n    /* border-left: 1px solid rgba(201, 191, 191, 0.788235294117647);\r\n    border-right: 1px solid rgba(201, 191, 191, 0.788235294117647);\r\n    border-top: 1px solid rgba(201, 191, 191, 0.788235294117647); */\r\n}\r\n\r\n\r\n\r\nth.mat-header-cell.cdk-column-After.mat-column-After {\r\n    width: 25%;\r\n    text-align: center;\r\n    width: 25%;\r\n    text-align: center;\r\n    /* border-left: 1px solid rgba(201, 191, 191, 0.788235294117647);\r\n    border-right: 1px solid rgba(201, 191, 191, 0.788235294117647);\r\n    border-top: 1px solid rgba(201, 191, 191, 0.788235294117647); */\r\n}\r\n\r\n\r\n\r\nth.mat-header-cell.cdk-column-Limit_range.mat-column-Limit_range {\r\n    width: 25%;\r\n    text-align: center;\r\n    width: 25%;\r\n    text-align: center;\r\n    /* border-left: 1px solid rgba(201, 191, 191, 0.788235294117647);\r\n    border-right: 1px solid rgba(201, 191, 191, 0.788235294117647);\r\n    border-top: 1px solid rgba(201, 191, 191, 0.788235294117647); */\r\n}\r\n\r\n\r\n\r\n::ng-deep td.mat-cell:first-of-type, td.mat-footer-cell:first-of-type, th.mat-header-cell:first-of-type {\r\n    padding-left: 24px;\r\n    /* border-right: 1px solid rgba(201, 191, 191, 0.788235294117647); */\r\n}\r\n\r\n\r\n\r\ntr.mat-header-row {\r\n    height: 56px;\r\n    border-bottom: 1px solid rgba(201, 191, 191, 0.788235294117647) !important;\r\n    width: 25%;\r\n    text-align: center;\r\n    /* border-left: 1px solid rgba(201, 191, 191, 0.788235294117647);\r\n    border-right: 1px solid rgba(201, 191, 191, 0.788235294117647); */\r\n}\r\n\r\n\r\n\r\nimg.good {\r\n    width: 60%;\r\n}\r\n\r\n\r\n\r\nhtml {\r\n    -webkit-text-size-adjust: none\r\n  }\r\n\r\n\r\n\r\n/* table{\r\n    width: 100%; \r\n    word-wrap:break-word;\r\n    table-layout: fixed;\r\n} */\r\n\r\n\r\n\r\n/* ----------- Non-Retina Screens ----------- */\r\n\r\n\r\n\r\n@media screen \r\n  and (min-width: 1200px) \r\n  and (max-width: 1600px)  { \r\n/* start */\r\nimg.good {\r\n    width: 60%;\r\n}\r\n::ng-deep .mat-form-field-infix {\r\n    display: block;\r\n    position: relative;\r\n    -webkit-box-flex: 1;\r\n            flex: auto;\r\n    min-width: 0;\r\n    /* top: 10px; */\r\n    width: 180px;\r\n    left: 20px;\r\n    /* background: white; */\r\n    line-height: 2.5;\r\n}\r\nlabel {\r\n  display: inline-block;\r\n  max-width: 100%;\r\n  margin-bottom: 5px;\r\n  font-weight: 700;\r\n  /* color: white; */\r\n  background: bottom;\r\n  margin-top: 19px;\r\n  line-height: 2.5;\r\n  margin-left: 20px;\r\n  /* width: 180px; */\r\n}\r\nselect{\r\n  background:#003955;\r\n  border:1px solid #003955;\r\n  color:white\r\n}\r\n\r\n\r\n.mat-toolbar {\r\n  background: white;\r\n  color: rgba(0, 0, 0, 0.87);\r\n}\r\n\r\n\r\n.fa, .fab, .fal, .far, .fas {\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  /* display: inline-block; */\r\n  font-style: normal;\r\n  font-variant: normal;\r\n  text-rendering: auto;\r\n  font-size: 27px;\r\n  line-height: 1.9;\r\n  color: white;\r\n  margin-right:10px;\r\n}\r\n\r\n.top_icons {\r\n/* width:50% !important; */\r\n}\r\n.center{\r\ntext-align: center;\r\nposition: absolute;\r\ntop: 0;\r\nleft: 40%;\r\nline-height: 0.7;\r\ncolor: white;\r\nfont-size: 15px !important;\r\n}\r\nselect.classic {\r\n   /* top: 32px; */\r\n   background-image: linear-gradient(45deg, transparent 50%, #e8e8f1 50%), linear-gradient(135deg, #ededf3 50%, transparent 50%), linear-gradient(to right, #222324, #2f3030);\r\n   background-position: calc(100% - 23px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), 100% 47px;\r\n   background-size: 8px 8px, 8px 8px, 2.8em 2.8em;\r\n   background-repeat: no-repeat;  \r\n}\r\n\r\nselect.mat-input-element {\r\n  font: normal !;\r\n    -moz-appearance: none;\r\n    -webkit-appearance: none;\r\n    position: relative;\r\n    background-color: #003955;\r\n    color: white;\r\n    display: -webkit-inline-box;\r\n    display: inline-flex;\r\n    box-sizing: border-box;\r\n    /* font-size: 19px; */\r\n    padding-top: 7px !important;\r\n    /* padding-top: 1em; */\r\n    top: -1em;\r\n    margin-bottom: -1em;\r\n}\r\n.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {\r\n  font-family: inherit;\r\n  font-weight: 500;\r\n  /* line-height: 0.4; */\r\n  color: inherit;\r\n}\r\nheader {\r\n    height: 58px;\r\n    width: 100%;\r\n    background-color: #003955;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n.mat-toolbar-row, .mat-toolbar-single-row {\r\n  /* height: 226px; */\r\n  /* margin-bottom: -35px; */\r\n}\r\n\r\n.left {\r\n    width: 50%;\r\n}\r\n.right {\r\n    width: 48%;\r\n}\r\n\r\n  \r\n  .topnav {\r\n    overflow: hidden;\r\n  \r\n  }\r\n  \r\n  .topnav a {\r\n    float: left;\r\n    display: block;\r\n    color: #333 !important;\r\n    text-align: center;\r\n    padding: 14px 20px;\r\n    text-decoration: none;\r\n    font-size: 21px;\r\n  }\r\n  \r\n  .topnav a:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n  }\r\n  \r\n  .topnav a.active {\r\n    background-color: white;\r\n    color: black;\r\n  }\r\n  \r\n  .topnav .icon {\r\n    display: none;\r\n  }\r\n/* end */\r\n    .show111{\r\n        display:none;\r\n    }\r\n    \r\n    app-topbar {\r\n        display: block;\r\n    }\r\n    .margin_top{\r\n\r\n        margin-top:11px;\r\n    \r\n    }\r\n    ::ng-deep .row{\r\n        margin:0px;\r\n    }\r\n    .image{\r\n    background-image: url('bg.png');\r\n    background-repeat: no-repeat;\r\n    /* height: 525px; */\r\n    height: 524px;\r\n    background-position: center 0;\r\n\r\n    \r\n    }\r\n    .margin_top h1{\r\n        /* font-size: 35px; */\r\n        font-family: Ubuntu;\r\n        font-weight: 600;    \r\n        font-size:36px;\r\n        /* text-align: center; */\r\n            color:#003955;\r\n            margin-left: 177px;\r\n    }\r\n    .margin_top h2{\r\n        font-size: 25px;\r\n        font-family: Ubuntu;\r\n        font-weight: 600;\r\n        color: #003955;\r\n        margin-bottom: 26px;\r\n        margin-top: -5px;\r\n        margin-left: 177px;\r\n    }\r\n    \r\n\r\n    .view{\r\n        margin-top:10px;\r\n        font-size:20px;\r\n        /* text-decoration: underline;\r\n         */\r\n         text-decoration: underline;\r\n    }\r\n    \r\n    .name{\r\n        font-size: 21px;\r\n        color: teal;\r\n        text-transform: uppercase;\r\n    }\r\n    .background{\r\n        background-color: #e6f7f7;\r\n        height: auto;\r\n        width: 147px;\r\n        /* background-position: center; */\r\n        margin: auto;\r\n    }\r\n\r\n    .paragraph{\r\n        color: #003955;\r\n        font-size: 15px;\r\n        font-family: Ubuntu;\r\n    }\r\n    .col-md-12.margin_bottom {\r\n        margin-top: 64px;\r\n    }\r\n    \r\n    a:focus, a:hover {\r\n        color: #134061;\r\n        text-decoration: underline;\r\n        color:teal;\r\n    }\r\n    a {\r\n        color: #134061;\r\n        text-decoration: none;\r\n        cursor: pointer;\r\n    }\r\n    .inside .para{\r\n        font-size: 30px;\r\n        color: #21365a;\r\n        margin-bottom: 20px;\r\n        margin-top: 13px;\r\n        font-family: Ubuntu;\r\n    \r\n    \r\n    }\r\n    .style{\r\n        font-size: 33px;\r\n        font-family: Ubuntu;\r\n        color: #003955;\r\n        /* margin-top: 62px; */\r\n    }\r\n    .subheading{\r\n        font-size: 22px;\r\n        color: #003955;\r\n        font-family: Ubuntu;\r\n        margin-top: 20px;\r\n    }\r\n    \r\n    table {\r\n        margin-top:10px;\r\n        width: 100%;\r\n        box-shadow:none;\r\n        text-align:left;\r\n    }  \r\n    \r\n    ::ng-deep mat-row, td.mat-cell {\r\n        border-top-color: #00808085;\r\n        font-size: 16px;\r\n        line-height: 2.7;\r\n        font-family: Ubuntu;\r\n        color: #2b5d6f;\r\n        text-align: center;\r\n        /* border-top: 1px solid red; */\r\n    }\r\n    ::ng-deep td.mat-cell, td.mat-footer-cell, th.mat-header-cell {\r\n        padding: 0;\r\n        /* padding: 0; */\r\n        border-bottom-width: 0px;\r\n        border-bottom-style: solid;\r\n        text-align: center;\r\n    }\r\n\r\n    mat-header-row, mat-footer-row , th.mat-header-cell, td.mat-footer-cell{\r\n        border-bottom-color: white;\r\n        font-size: 18px;\r\n        line-height: 2.7;\r\n        font-family: Ubuntu;\r\n        text-align: center;\r\n    }\r\n    \r\n    .mat-header-cell {\r\n        color: #d0c9d6;\r\n        font-family: Ubuntu;\r\n        text-align: center;   \r\n    }\r\n    \r\n    \r\n    .button_reset{\r\n        color: white;\r\n        height:64px;\r\n        font-size:20px;\r\n        width:354px;\r\n        background: teal;\r\n        border-radius: 30px;\r\n        border: 2px solid teal;\r\n        margin-top: 80px;\r\n        margin-bottom: 100px;\r\n        outline: none;\r\n    }\r\n    \r\n    td.header_title.mat-cell.cdk-column-Substance.mat-column-Substance.ng-star-inserted{\r\n    \r\n        font-size: 20px;\r\n        font-weight: bold;\r\n        font-family: Ubuntu;\r\n    }\r\n}\r\n\r\n\r\n\r\n/* ----------- Retina Screens ----------- */\r\n\r\n\r\n\r\n/* ----------- iPhone 4 and 4S ----------- */\r\n\r\n\r\n\r\n/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */\r\n\r\n\r\n\r\n/* Portrait and Landscape */\r\n\r\n\r\n\r\n@media only screen and (max-width: 600px)\r\n {\r\n\r\n\r\n\r\n    tr.mat-header-row {\r\n        height: 56px;\r\n        border-bottom: 1px solid #80808042 !important;\r\n    }\r\n    td.mat-cell:last-of-type, td.mat-footer-cell:last-of-type, th.mat-header-cell:last-of-type {\r\n        padding-right: 0px;\r\n    }\r\n    .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {\r\n        position: relative;\r\n        min-height: 1px;\r\n        padding-right: 0px;\r\n        padding-left: 0px;\r\n    }\r\n    .app-topbar {\r\n        display: none;\r\n    }\r\n    .show112{\r\n        display:none;\r\n    }\r\n    .margin_top{\r\n\r\n        margin-top: 109px;\r\n    \r\n    }\r\n    ::ng-deep .row{\r\n        margin:0px;\r\n    }\r\n    ::ng-deep.col-xs-12 {\r\n        width: auto;\r\n    }\r\n\r\n\r\n    .imagefull_mobile{\r\n    background-image: url('change.png');\r\n    background-repeat: no-repeat;    \r\n    background-size: cover;  \r\n    width: 100%;\r\n    height: 240px;   \r\n    \r\n    }\r\n    .margin_top h1{\r\n        /* font-size: 35px; */\r\n        font-family: Ubuntu;\r\n        font-weight: 600;\r\n    \r\n        font-size:29px;\r\n        /* text-align: center; */\r\n            color:#003955;\r\n    \r\n    }\r\n    .view22{\r\nmargin-left:10%;\r\nfont-size:14px;\r\n/* text-decoration: underline;\r\n */\r\n text-decoration: underline;\r\n    }\r\n    .margin_top h2{\r\n        font-size: 20px;\r\n        font-family: Ubuntu;\r\n        font-weight: 600;\r\n        color: #003955;\r\n        margin-bottom: 26px;\r\n        margin-top: 0px;\r\n    }\r\n    p.name.show111 {\r\n        /* margin-top: 40px; */\r\n    }\r\n    p.name.show111 {\r\n        font-size: 20px;\r\n    }\r\n    a.changes_view {\r\n        margin-left: 12%;\r\n        /* margin-top: 42px; */\r\n    }\r\n    .background.safe {\r\n        background-color: #e6f7f7;\r\n        height: 217;\r\n        height: 218px;\r\n        width: 100% !important;\r\n        float: right;\r\n    }\r\n    .container-fluid {\r\n        padding-right: 2%;\r\n        padding-left: 2%;\r\n        margin-right: auto;\r\n        margin-left: auto;\r\n    }\r\n    .background.safe p{\r\n        font-size: 11px;\r\n        margin-left: 19px;\r\n        color: #003955;\r\n       font-family: Ubuntu;\r\n        margin-right: 19px;\r\n    }\r\n    \r\n    .background img {\r\n        /* height: 217px;\r\n        width: 214px;\r\n        padding: 20px; */\r\n        padding: 7%;\r\n        height: 171px;\r\n    \r\n    }\r\n    .view{\r\n        margin-top:15px;\r\n        font-size:14px;\r\n        /* margin-left: 3%; */\r\n        /* text-decoration: underline;\r\n         */\r\n         text-decoration: underline;\r\n    }\r\n    .p_a{\r\n        margin: 0 0 9px 33px;\r\n        width: 100%;\r\n    }\r\n    \r\n    .name{\r\n        font-size: 20px;\r\n        color: teal;\r\n        text-transform: uppercase;\r\n    }\r\n    .background_change1{\r\n        /* background-color: #e6f7f7; */\r\n        background-color: #e6f7f7;\r\n        /* height: 217; */\r\n        height: 174px;\r\n        width: 94%;\r\n        float: left;\r\n    }\r\n\r\n    p.name.name1 {\r\n        margin-top: 14px;\r\n    }\r\n\r\n    p.name.name2 {\r\n        margin-top: 14px;\r\n    }\r\n    .background_change2{\r\n        /* background-color: #e6f7f7; */\r\n        background-color: #e6f7f7;\r\n        /* height: 217; */\r\n        height: 174px;\r\n        width: 94%;\r\n        float: right;\r\n    }\r\n    .row.inside {\r\n        /* margin-left: 4%; */\r\n        /* margin-right:0px; */\r\n    }\r\n    .paragraph{\r\n        color: #003955;\r\n        font-size: 14pt;\r\n        font-family: Ubuntu;\r\n    }\r\n    .col-md-12.margin_bottom {\r\n        margin-top: 64px;\r\n    }\r\n    \r\n    a:focus, a:hover {\r\n        color: #134061;\r\n        text-decoration: underline;\r\n    }\r\n    a {\r\n        color: #134061;\r\n        text-decoration: none;\r\n    }\r\n    .inside .para{\r\n        font-size: 34px;\r\n        color: #21365a;\r\n        margin-bottom: 47px;\r\n        margin-top: 38px;\r\n    \r\n    }\r\n.style{\r\n    font-size: 22px;\r\n    font-family: Ubuntu;\r\n    color: #003955;\r\n    margin-top: 48px;\r\n}\r\n.subheading{\r\n    font-size: 17px;\r\n    color: #003955;\r\n    font-family: Ubuntu;\r\n    margin-top: 20px;\r\n}\r\n    \r\n    table {\r\n        margin-top: 28px;\r\n        /* width: max-content; */\r\n        width:100%;\r\n        box-shadow: none;\r\n        text-align: left;\r\n        border-top: 1px solid #7676763d;\r\n    }  \r\n    \r\n    /* td.mat-cell, td.mat-footer-cell, th.mat-header-cell {\r\n        padding: 0;\r\n        border-bottom-width: 1px;\r\n        border-bottom-style: solid;\r\n        padding: 4px;\r\n    } */\r\n    mat-row, td.mat-cell {\r\n        border-bottom-color: #00808085;\r\n        font-size: 11px;\r\n        line-height: 1.2;\r\n        font-family: Ubuntu;\r\n        color: #2b5d6f;\r\n        text-align: center;\r\n        border-right: 1px solid #7676763d;\r\n    }\r\n    td.mat-cell:first-of-type, td.mat-footer-cell:first-of-type, th.mat-header-cell:first-of-type {\r\n        padding-left: 0px;\r\n        border-right: 1px solid #7676763d;\r\n        border-left: 1px solid #7676763d;\r\n    }\r\n    mat-header-row, mat-footer-row , th.mat-header-cell, td.mat-footer-cell{\r\n        /* border-bottom-color: white; */\r\n        font-size: 14px;\r\n        line-height: 1.2;\r\n        font-family: Ubuntu;\r\n    }\r\n    \r\n    .mat-header-cell {\r\n        color: #d0c9d6;\r\n        font-family: Ubuntu;\r\n        border-right: 1px solid #7676763d\r\n    }\r\n    \r\n    .button_reset{\r\n        color: white;\r\n        /* height:64px; */\r\n        font-size:20px;\r\n        height: 54px;\r\n        width: 266px;\r\n        background: teal;\r\n        border-radius: 30px;\r\n        border: 2px solid teal;\r\n        margin-top: 15px;\r\n        margin-bottom: 30%;\r\n    \r\n    }\r\n    input::-webkit-input-placeholder {\r\n        overflow: visible;\r\n      }\r\n    input::-moz-placeholder {\r\n        overflow: visible;\r\n      }\r\n    input::-ms-input-placeholder {\r\n        overflow: visible;\r\n      }\r\n    input::placeholder {\r\n        overflow: visible;\r\n      }\r\n    \r\n\r\n\r\n}\r\n\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 1024px) {\r\n    tr.mat-header-row {\r\n        height: 56px;\r\n        border-bottom: 1px solid #80808042 !important;\r\n    }\r\n    td.mat-cell:last-of-type, td.mat-footer-cell:last-of-type, th.mat-header-cell:last-of-type {\r\n        padding-right: 0px;\r\n    }\r\n    .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {\r\n        position: relative;\r\n        min-height: 1px;\r\n        padding-right: 0px;\r\n        padding-left: 0px;\r\n    }\r\n    .app-topbar {\r\n        display: none;\r\n    }\r\n    .show112{\r\n        display:none;\r\n    }\r\n    .margin_top{\r\n\r\n        margin-top: 109px;\r\n    \r\n    }\r\n    ::ng-deep .row{\r\n        margin:0px;\r\n    }\r\n    ::ng-deep.col-xs-12 {\r\n        width: auto;\r\n    }\r\n\r\n\r\n    .imagefull_mobile{\r\n    background-image: url('change.png');\r\n    background-repeat: no-repeat;    \r\n    background-size: cover;  \r\n    width: 96%;\r\n    height: 240px;   \r\n    \r\n    }\r\n    .margin_top h1{\r\n        /* font-size: 35px; */\r\n        font-family: Ubuntu;\r\n        font-weight: 600;\r\n    \r\n        font-size:29px;\r\n        /* text-align: center; */\r\n            color:#003955;\r\n    \r\n    }\r\n    .margin_top h2{\r\n        font-size: 20px;\r\n        font-family: Ubuntu;\r\n        font-weight: 600;\r\n        color: #003955;\r\n        margin-bottom: 26px;\r\n        margin-top: 0px;\r\n    }\r\n    p.name.show111 {\r\n        /* margin-top: 40px; */\r\n    }\r\n    p.name.show111 {\r\n        font-size: 20px;\r\n    }\r\n    a.changes_view {\r\n        margin-left: 111px;\r\n        /* margin-top: 42px; */\r\n    }\r\n    .background.safe {\r\n        background-color: #e6f7f7;\r\n        height: 284px;\r\n        width: 708px !important;\r\n        float: right;\r\n    }\r\n    .container-fluid {\r\n        padding-right: 2%;\r\n        padding-left: 2%;\r\n        margin-right: auto;\r\n        margin-left: auto;\r\n    }\r\n    .background.safe p{\r\n        font-size: 13px;\r\n        margin-left: 19px;\r\n        color: #003955;\r\n        font-family: serif;\r\n        margin-right: 19px;\r\n    }\r\n    \r\n    .background img {\r\n        /* height: 217px;\r\n        width: 214px;\r\n        padding: 20px; */\r\n        padding: 3%;\r\n        height: 239px;\r\n    \r\n    }\r\n    .view{\r\n        margin-top:15px;\r\n        font-size:14px;\r\n         text-decoration: underline;\r\n         margin-left: 88px;\r\n    }\r\n    \r\n    .view22{\r\n        margin-top:15px;\r\n        font-size:14px;\r\n        /* text-decoration: underline;\r\n         */\r\n         text-decoration: underline;\r\n         margin-left: 175px;\r\n         padding-left:40px;\r\n    }\r\n    .name{\r\n        font-size: 20px;\r\n        color: teal;\r\n        text-transform: uppercase;\r\n    }\r\n    .background_change1{\r\n        /* background-color: #e6f7f7; */\r\n        background-color: #e6f7f7;\r\n        /* height: 217; */\r\n        height: 260px;\r\n        width: 94%;\r\n        float: left;\r\n    }\r\n\r\n    p.name.name1 {\r\n        margin-top: 14px;\r\n    }\r\n\r\n    p.name.name2 {\r\n        margin-top: 14px;\r\n    }\r\n    .background_change2{\r\n        /* background-color: #e6f7f7; */\r\n        background-color: #e6f7f7;\r\n        /* height: 217; */\r\n        height: 260px;\r\n        width: 94%;\r\n        float: right;\r\n    }\r\n    .row.inside {\r\n        /* margin-left: 4%; */\r\n        /* margin-right:0px; */\r\n    }\r\n    .paragraph{\r\n        color: #003955;\r\n        font-size: 14pt;\r\n        font-family: Ubuntu;\r\n    }\r\n    .col-md-12.margin_bottom {\r\n        margin-top: 64px;\r\n    }\r\n    \r\n    a:focus, a:hover {\r\n        color: #134061;\r\n        text-decoration: underline;\r\n    }\r\n    a {\r\n        color: #134061;\r\n        text-decoration: none;\r\n    }\r\n    .inside .para{\r\n        font-size: 34px;\r\n        color: #21365a;\r\n        margin-bottom: 47px;\r\n        margin-top: 38px;\r\n    \r\n    }\r\n    .style{\r\n        font-size: 33px;\r\n        font-family: Ubuntu;\r\n        color: #003955;\r\n        margin-top: 62px;\r\n    }\r\n    .subheading{\r\n        font-size: 22px;\r\n        color: #003955;\r\n        font-family: Ubuntu;\r\n        margin-top: 20px;\r\n    }\r\n    \r\n    table {\r\n        margin-top: 28px;\r\n        /* width: max-content; */\r\n        width:100%;\r\n        box-shadow: none;\r\n        text-align: left;\r\n        border-top: 1px solid #7676763d;\r\n    }  \r\n    \r\n    /* td.mat-cell, td.mat-footer-cell, th.mat-header-cell {\r\n        padding: 0;\r\n        border-bottom-width: 1px;\r\n        border-bottom-style: solid;\r\n        padding: 4px;\r\n    } */\r\n    mat-row, td.mat-cell {\r\n        border-bottom-color: #00808085;\r\n        font-size: 11px;\r\n        line-height: 1.2;\r\n        font-family: Ubuntu;\r\n        color: #2b5d6f;\r\n        text-align: center;\r\n        border-right: 1px solid #7676763d;\r\n    }\r\n    td.mat-cell:first-of-type, td.mat-footer-cell:first-of-type, th.mat-header-cell:first-of-type {\r\n        padding-left: 0px;\r\n        border-right: 1px solid #7676763d;\r\n        border-left: 1px solid #7676763d;\r\n    }\r\n    mat-header-row, mat-footer-row , th.mat-header-cell, td.mat-footer-cell{\r\n        /* border-bottom-color: white; */\r\n        font-size: 14px;\r\n        line-height: 1.2;\r\n        font-family: Ubuntu;\r\n    }\r\n    \r\n    .mat-header-cell {\r\n        color: #d0c9d6;\r\n        font-family: Ubuntu;\r\n        border-right: 1px solid #7676763d\r\n    }\r\n    \r\n    .button_reset{\r\n        color: white;\r\n        /* height:64px; */\r\n        font-size:20px;\r\n        height: 54px;\r\n        width: 266px;\r\n        background: teal;\r\n        border-radius: 30px;\r\n        border: 2px solid teal;\r\n        margin-top: 15px;\r\n    \r\n    }\r\n    input::-webkit-input-placeholder {\r\n        overflow: visible;\r\n      }\r\n    input::-moz-placeholder {\r\n        overflow: visible;\r\n      }\r\n    input::-ms-input-placeholder {\r\n        overflow: visible;\r\n      }\r\n    input::placeholder {\r\n        overflow: visible;\r\n      }\r\n    \r\n\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQjs7bUVBRStEO0FBQ25FOzs7O0FBSUE7SUFDSSwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixtRUFBbUU7QUFDdkU7Ozs7QUFDQTtJQUNJLFlBQVk7SUFDWjs7bUVBRStEO0FBQ25FOzs7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQjs7bUVBRStEO0FBQ25FOzs7O0FBR0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEI7O21FQUUrRDtBQUNuRTs7OztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCOzttRUFFK0Q7QUFDbkU7Ozs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvRUFBb0U7QUFDeEU7Ozs7QUFFQTtJQUNJLFlBQVk7SUFDWiwwRUFBMEU7SUFDMUUsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQjtxRUFDaUU7QUFDckU7Ozs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7OztBQUNBO0lBQ0k7RUFDRjs7OztBQUVGOzs7O0dBSUc7Ozs7QUFDSCwrQ0FBK0M7Ozs7QUFHL0M7OztBQUdBLFVBQVU7QUFDVjtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixtQkFBVTtZQUFWLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JB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Z0I7UUFDaEIsbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsaUNBQWlDO0lBQ3JDO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsaUNBQWlDO1FBQ2pDLGdDQUFnQztJQUNwQztJQUNBO1FBQ0ksZ0NBQWdDO1FBQ2hDLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksY0FBYztRQUNkLG1CQUFtQjtRQUNuQjtJQUNKOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsWUFBWTtRQUNaLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLHNCQUFzQjtRQUN0QixnQkFBZ0I7O0lBRXBCO0lBQ0E7UUFDSSxpQkFBaUI7TUFDbkI7SUFGRjtRQUNJLGlCQUFpQjtNQUNuQjtJQUZGO1FBQ0ksaUJBQWlCO01BQ25CO0lBRkY7UUFDSSxpQkFBaUI7TUFDbkI7OztBQUdOIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGgubWF0LWhlYWRlci1jZWxsLmNkay1jb2x1bW4tU3Vic3RhbmNlLm1hdC1jb2x1bW4tU3Vic3RhbmNlIHtcclxuICAgIHdpZHRoOiAyOCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8qIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgyMDEsIDE5MSwgMTkxLCAwLjc4ODIzNTI5NDExNzY0Nyk7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDIwMSwgMTkxLCAxOTEsIDAuNzg4MjM1Mjk0MTE3NjQ3KTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDIwMSwgMTkxLCAxOTEsIDAuNzg4MjM1Mjk0MTE3NjQ3KTsgKi9cclxufVxyXG5cclxuXHJcblxyXG46Om5nLWRlZXAgbWF0LXJvdywgdGQubWF0LWNlbGwge1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzAwODA4MDg1O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuNztcclxuICAgIGZvbnQtZmFtaWx5OiBVYnVudHU7XHJcbiAgICBjb2xvcjogIzJiNWQ2ZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8qIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgyMDEsIDE5MSwgMTkxLCAwLjc4ODIzNTI5NDExNzY0Nyk7ICovXHJcbn1cclxuOjpuZy1kZWVwIHRyLm1hdC1mb290ZXItcm93LCB0ci5tYXQtcm93IHtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIC8qIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgyMDEsIDE5MSwgMTkxLCAwLjc4ODIzNTI5NDExNzY0Nyk7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDIwMSwgMTkxLCAxOTEsIDAuNzg4MjM1Mjk0MTE3NjQ3KTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDIwMSwgMTkxLCAxOTEsIDAuNzg4MjM1Mjk0MTE3NjQ3KTsgKi9cclxufVxyXG5cclxudGgubWF0LWhlYWRlci1jZWxsLmNkay1jb2x1bW4tQmVmb3JlLm1hdC1jb2x1bW4tQmVmb3JlIHtcclxuICAgIHdpZHRoOiAyNCU7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLyogYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDIwMSwgMTkxLCAxOTEsIDAuNzg4MjM1Mjk0MTE3NjQ3KTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjAxLCAxOTEsIDE5MSwgMC43ODgyMzUyOTQxMTc2NDcpO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjAxLCAxOTEsIDE5MSwgMC43ODgyMzUyOTQxMTc2NDcpOyAqL1xyXG59XHJcblxyXG5cclxudGgubWF0LWhlYWRlci1jZWxsLmNkay1jb2x1bW4tQWZ0ZXIubWF0LWNvbHVtbi1BZnRlciB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8qIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgyMDEsIDE5MSwgMTkxLCAwLjc4ODIzNTI5NDExNzY0Nyk7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDIwMSwgMTkxLCAxOTEsIDAuNzg4MjM1Mjk0MTE3NjQ3KTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDIwMSwgMTkxLCAxOTEsIDAuNzg4MjM1Mjk0MTE3NjQ3KTsgKi9cclxufVxyXG4gICAgICAgICBcclxudGgubWF0LWhlYWRlci1jZWxsLmNkay1jb2x1bW4tTGltaXRfcmFuZ2UubWF0LWNvbHVtbi1MaW1pdF9yYW5nZSB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8qIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgyMDEsIDE5MSwgMTkxLCAwLjc4ODIzNTI5NDExNzY0Nyk7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDIwMSwgMTkxLCAxOTEsIDAuNzg4MjM1Mjk0MTE3NjQ3KTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDIwMSwgMTkxLCAxOTEsIDAuNzg4MjM1Mjk0MTE3NjQ3KTsgKi9cclxufVxyXG5cclxuOjpuZy1kZWVwIHRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsIHRkLm1hdC1mb290ZXItY2VsbDpmaXJzdC1vZi10eXBlLCB0aC5tYXQtaGVhZGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbiAgICAvKiBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDIwMSwgMTkxLCAxOTEsIDAuNzg4MjM1Mjk0MTE3NjQ3KTsgKi9cclxufVxyXG5cclxudHIubWF0LWhlYWRlci1yb3cge1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjAxLCAxOTEsIDE5MSwgMC43ODgyMzUyOTQxMTc2NDcpICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLyogYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDIwMSwgMTkxLCAxOTEsIDAuNzg4MjM1Mjk0MTE3NjQ3KTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjAxLCAxOTEsIDE5MSwgMC43ODgyMzUyOTQxMTc2NDcpOyAqL1xyXG59XHJcblxyXG5pbWcuZ29vZCB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59ICAgXHJcbmh0bWwge1xyXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lXHJcbiAgfVxyXG5cclxuLyogdGFibGV7XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICB3b3JkLXdyYXA6YnJlYWstd29yZDtcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn0gKi9cclxuLyogLS0tLS0tLS0tLS0gTm9uLVJldGluYSBTY3JlZW5zIC0tLS0tLS0tLS0tICovXHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBcclxuICBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBcclxuICBhbmQgKG1heC13aWR0aDogMTYwMHB4KSAgeyBcclxuLyogc3RhcnQgKi9cclxuaW1nLmdvb2Qge1xyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxleDogYXV0bztcclxuICAgIG1pbi13aWR0aDogMDtcclxuICAgIC8qIHRvcDogMTBweDsgKi9cclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiB3aGl0ZTsgKi9cclxuICAgIGxpbmUtaGVpZ2h0OiAyLjU7XHJcbn1cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgLyogY29sb3I6IHdoaXRlOyAqL1xyXG4gIGJhY2tncm91bmQ6IGJvdHRvbTtcclxuICBtYXJnaW4tdG9wOiAxOXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgLyogd2lkdGg6IDE4MHB4OyAqL1xyXG59XHJcbnNlbGVjdHtcclxuICBiYWNrZ3JvdW5kOiMwMDM5NTU7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjMDAzOTU1O1xyXG4gIGNvbG9yOndoaXRlXHJcbn1cclxuXHJcblxyXG4ubWF0LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG59XHJcblxyXG5cclxuLmZhLCAuZmFiLCAuZmFsLCAuZmFyLCAuZmFzIHtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XHJcbiAgZm9udC1zaXplOiAyN3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1yaWdodDoxMHB4O1xyXG59XHJcblxyXG4udG9wX2ljb25zIHtcclxuLyogd2lkdGg6NTAlICFpbXBvcnRhbnQ7ICovXHJcbn1cclxuLmNlbnRlcntcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnRvcDogMDtcclxubGVmdDogNDAlO1xyXG5saW5lLWhlaWdodDogMC43O1xyXG5jb2xvcjogd2hpdGU7XHJcbmZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcbnNlbGVjdC5jbGFzc2ljIHtcclxuICAgLyogdG9wOiAzMnB4OyAqL1xyXG4gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDUwJSwgI2U4ZThmMSA1MCUpLCBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZWRlZGYzIDUwJSwgdHJhbnNwYXJlbnQgNTAlKSwgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjIyMzI0LCAjMmYzMDMwKTtcclxuICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMjNweCkgY2FsYygxZW0gKyAycHgpLCBjYWxjKDEwMCUgLSAxNXB4KSBjYWxjKDFlbSArIDJweCksIDEwMCUgNDdweDtcclxuICAgYmFja2dyb3VuZC1zaXplOiA4cHggOHB4LCA4cHggOHB4LCAyLjhlbSAyLjhlbTtcclxuICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgIFxyXG59XHJcblxyXG5zZWxlY3QubWF0LWlucHV0LWVsZW1lbnQge1xyXG4gIGZvbnQ6IG5vcm1hbCAhO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzk1NTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC8qIGZvbnQtc2l6ZTogMTlweDsgKi9cclxuICAgIHBhZGRpbmctdG9wOiA3cHggIWltcG9ydGFudDtcclxuICAgIC8qIHBhZGRpbmctdG9wOiAxZW07ICovXHJcbiAgICB0b3A6IC0xZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMWVtO1xyXG59XHJcbi5oMSwgLmgyLCAuaDMsIC5oNCwgLmg1LCAuaDYsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgLyogbGluZS1oZWlnaHQ6IDAuNDsgKi9cclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiA1OHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzOTU1O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxufVxyXG4ubWF0LXRvb2xiYXItcm93LCAubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XHJcbiAgLyogaGVpZ2h0OiAyMjZweDsgKi9cclxuICAvKiBtYXJnaW4tYm90dG9tOiAtMzVweDsgKi9cclxufVxyXG5cclxuLmxlZnQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG4ucmlnaHQge1xyXG4gICAgd2lkdGg6IDQ4JTtcclxufVxyXG5cclxuICBcclxuICAudG9wbmF2IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC50b3BuYXYgYSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICB9XHJcbiAgXHJcbiAgLnRvcG5hdiBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3BuYXYgYS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3BuYXYgLmljb24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbi8qIGVuZCAqL1xyXG4gICAgLnNob3cxMTF7XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhcHAtdG9wYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5tYXJnaW5fdG9we1xyXG5cclxuICAgICAgICBtYXJnaW4tdG9wOjExcHg7XHJcbiAgICBcclxuICAgIH1cclxuICAgIDo6bmctZGVlcCAucm93e1xyXG4gICAgICAgIG1hcmdpbjowcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2V7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvYmcucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIC8qIGhlaWdodDogNTI1cHg7ICovXHJcbiAgICBoZWlnaHQ6IDUyNHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDA7XHJcblxyXG4gICAgXHJcbiAgICB9XHJcbiAgICAubWFyZ2luX3RvcCBoMXtcclxuICAgICAgICAvKiBmb250LXNpemU6IDM1cHg7ICovXHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFVidW50dTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwOyAgICBcclxuICAgICAgICBmb250LXNpemU6MzZweDtcclxuICAgICAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXHJcbiAgICAgICAgICAgIGNvbG9yOiMwMDM5NTU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNzdweDtcclxuICAgIH1cclxuICAgIC5tYXJnaW5fdG9wIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICBmb250LWZhbWlseTogVWJ1bnR1O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6ICMwMDM5NTU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjZweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNzdweDtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIC52aWV3e1xyXG4gICAgICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICAvKiB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgKi9cclxuICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5uYW1le1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgICAgICBjb2xvcjogdGVhbDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG4gICAgLmJhY2tncm91bmR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjdmNztcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDE0N3B4O1xyXG4gICAgICAgIC8qIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgKi9cclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLnBhcmFncmFwaHtcclxuICAgICAgICBjb2xvcjogIzAwMzk1NTtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFVidW50dTtcclxuICAgIH1cclxuICAgIC5jb2wtbWQtMTIubWFyZ2luX2JvdHRvbSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNjRweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYTpmb2N1cywgYTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICMxMzQwNjE7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgY29sb3I6dGVhbDtcclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMTM0MDYxO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAuaW5zaWRlIC5wYXJhe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBjb2xvcjogIzIxMzY1YTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEzcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFVidW50dTtcclxuICAgIFxyXG4gICAgXHJcbiAgICB9XHJcbiAgICAuc3R5bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAzM3B4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBVYnVudHU7XHJcbiAgICAgICAgY29sb3I6ICMwMDM5NTU7XHJcbiAgICAgICAgLyogbWFyZ2luLXRvcDogNjJweDsgKi9cclxuICAgIH1cclxuICAgIC5zdWJoZWFkaW5ne1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBjb2xvcjogIzAwMzk1NTtcclxuICAgICAgICBmb250LWZhbWlseTogVWJ1bnR1O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRhYmxlIHtcclxuICAgICAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm94LXNoYWRvdzpub25lO1xyXG4gICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgIH0gIFxyXG4gICAgXHJcbiAgICA6Om5nLWRlZXAgbWF0LXJvdywgdGQubWF0LWNlbGwge1xyXG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6ICMwMDgwODA4NTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuNztcclxuICAgICAgICBmb250LWZhbWlseTogVWJ1bnR1O1xyXG4gICAgICAgIGNvbG9yOiAjMmI1ZDZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAvKiBib3JkZXItdG9wOiAxcHggc29saWQgcmVkOyAqL1xyXG4gICAgfVxyXG4gICAgOjpuZy1kZWVwIHRkLm1hdC1jZWxsLCB0ZC5tYXQtZm9vdGVyLWNlbGwsIHRoLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAvKiBwYWRkaW5nOiAwOyAqL1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgbWF0LWhlYWRlci1yb3csIG1hdC1mb290ZXItcm93ICwgdGgubWF0LWhlYWRlci1jZWxsLCB0ZC5tYXQtZm9vdGVyLWNlbGx7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyLjc7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFVidW50dTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgICAgIGNvbG9yOiAjZDBjOWQ2O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBVYnVudHU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC5idXR0b25fcmVzZXR7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGhlaWdodDo2NHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgIHdpZHRoOjM1NHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRlYWw7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB0ZWFsO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGQuaGVhZGVyX3RpdGxlLm1hdC1jZWxsLmNkay1jb2x1bW4tU3Vic3RhbmNlLm1hdC1jb2x1bW4tU3Vic3RhbmNlLm5nLXN0YXItaW5zZXJ0ZWR7XHJcbiAgICBcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFVidW50dTtcclxuICAgIH1cclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0gUmV0aW5hIFNjcmVlbnMgLS0tLS0tLS0tLS0gKi9cclxuXHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0gaVBob25lIDQgYW5kIDRTIC0tLS0tLS0tLS0tICovXHJcblxyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA1LCA1UywgNUMgYW5kIDVTRSAtLS0tLS0tLS0tLSAqL1xyXG5cclxuLyogUG9ydHJhaXQgYW5kIExhbmRzY2FwZSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KVxyXG4ge1xyXG5cclxuXHJcblxyXG4gICAgdHIubWF0LWhlYWRlci1yb3cge1xyXG4gICAgICAgIGhlaWdodDogNTZweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzgwODA4MDQyICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICB0ZC5tYXQtY2VsbDpsYXN0LW9mLXR5cGUsIHRkLm1hdC1mb290ZXItY2VsbDpsYXN0LW9mLXR5cGUsIHRoLm1hdC1oZWFkZXItY2VsbDpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgIH1cclxuICAgIC5jb2wtbGctMSwgLmNvbC1sZy0xMCwgLmNvbC1sZy0xMSwgLmNvbC1sZy0xMiwgLmNvbC1sZy0yLCAuY29sLWxnLTMsIC5jb2wtbGctNCwgLmNvbC1sZy01LCAuY29sLWxnLTYsIC5jb2wtbGctNywgLmNvbC1sZy04LCAuY29sLWxnLTksIC5jb2wtbWQtMSwgLmNvbC1tZC0xMCwgLmNvbC1tZC0xMSwgLmNvbC1tZC0xMiwgLmNvbC1tZC0yLCAuY29sLW1kLTMsIC5jb2wtbWQtNCwgLmNvbC1tZC01LCAuY29sLW1kLTYsIC5jb2wtbWQtNywgLmNvbC1tZC04LCAuY29sLW1kLTksIC5jb2wtc20tMSwgLmNvbC1zbS0xMCwgLmNvbC1zbS0xMSwgLmNvbC1zbS0xMiwgLmNvbC1zbS0yLCAuY29sLXNtLTMsIC5jb2wtc20tNCwgLmNvbC1zbS01LCAuY29sLXNtLTYsIC5jb2wtc20tNywgLmNvbC1zbS04LCAuY29sLXNtLTksIC5jb2wteHMtMSwgLmNvbC14cy0xMCwgLmNvbC14cy0xMSwgLmNvbC14cy0xMiwgLmNvbC14cy0yLCAuY29sLXhzLTMsIC5jb2wteHMtNCwgLmNvbC14cy01LCAuY29sLXhzLTYsIC5jb2wteHMtNywgLmNvbC14cy04LCAuY29sLXhzLTkge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgfVxyXG4gICAgLmFwcC10b3BiYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuc2hvdzExMntcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICB9XHJcbiAgICAubWFyZ2luX3RvcHtcclxuXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTA5cHg7XHJcbiAgICBcclxuICAgIH1cclxuICAgIDo6bmctZGVlcCAucm93e1xyXG4gICAgICAgIG1hcmdpbjowcHg7XHJcbiAgICB9XHJcbiAgICA6Om5nLWRlZXAuY29sLXhzLTEyIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmltYWdlZnVsbF9tb2JpbGV7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvY2hhbmdlLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI0MHB4OyAgIFxyXG4gICAgXHJcbiAgICB9XHJcbiAgICAubWFyZ2luX3RvcCBoMXtcclxuICAgICAgICAvKiBmb250LXNpemU6IDM1cHg7ICovXHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFVidW50dTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgXHJcbiAgICAgICAgZm9udC1zaXplOjI5cHg7XHJcbiAgICAgICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gICAgICAgICAgICBjb2xvcjojMDAzOTU1O1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAudmlldzIye1xyXG5tYXJnaW4tbGVmdDoxMCU7XHJcbmZvbnQtc2l6ZToxNHB4O1xyXG4vKiB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICovXHJcbiB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICAgIC5tYXJnaW5fdG9wIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LWZhbWlseTogVWJ1bnR1O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6ICMwMDM5NTU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjZweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICB9XHJcbiAgICBwLm5hbWUuc2hvdzExMSB7XHJcbiAgICAgICAgLyogbWFyZ2luLXRvcDogNDBweDsgKi9cclxuICAgIH1cclxuICAgIHAubmFtZS5zaG93MTExIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBhLmNoYW5nZXNfdmlldyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEyJTtcclxuICAgICAgICAvKiBtYXJnaW4tdG9wOiA0MnB4OyAqL1xyXG4gICAgfVxyXG4gICAgLmJhY2tncm91bmQuc2FmZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjdmNztcclxuICAgICAgICBoZWlnaHQ6IDIxNztcclxuICAgICAgICBoZWlnaHQ6IDIxOHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMiU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICAuYmFja2dyb3VuZC5zYWZlIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxOXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAzOTU1O1xyXG4gICAgICAgZm9udC1mYW1pbHk6IFVidW50dTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE5cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5iYWNrZ3JvdW5kIGltZyB7XHJcbiAgICAgICAgLyogaGVpZ2h0OiAyMTdweDtcclxuICAgICAgICB3aWR0aDogMjE0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDsgKi9cclxuICAgICAgICBwYWRkaW5nOiA3JTtcclxuICAgICAgICBoZWlnaHQ6IDE3MXB4O1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAudmlld3tcclxuICAgICAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgLyogbWFyZ2luLWxlZnQ6IDMlOyAqL1xyXG4gICAgICAgIC8qIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICAgIC5wX2F7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgOXB4IDMzcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5uYW1le1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBjb2xvcjogdGVhbDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG4gICAgLmJhY2tncm91bmRfY2hhbmdlMXtcclxuICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmN2Y3OyAqL1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmY3Zjc7XHJcbiAgICAgICAgLyogaGVpZ2h0OiAyMTc7ICovXHJcbiAgICAgICAgaGVpZ2h0OiAxNzRweDtcclxuICAgICAgICB3aWR0aDogOTQlO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIHAubmFtZS5uYW1lMSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICBwLm5hbWUubmFtZTIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAuYmFja2dyb3VuZF9jaGFuZ2Uye1xyXG4gICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNlNmY3Zjc7ICovXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjdmNztcclxuICAgICAgICAvKiBoZWlnaHQ6IDIxNzsgKi9cclxuICAgICAgICBoZWlnaHQ6IDE3NHB4O1xyXG4gICAgICAgIHdpZHRoOiA5NCU7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLnJvdy5pbnNpZGUge1xyXG4gICAgICAgIC8qIG1hcmdpbi1sZWZ0OiA0JTsgKi9cclxuICAgICAgICAvKiBtYXJnaW4tcmlnaHQ6MHB4OyAqL1xyXG4gICAgfVxyXG4gICAgLnBhcmFncmFwaHtcclxuICAgICAgICBjb2xvcjogIzAwMzk1NTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFVidW50dTtcclxuICAgIH1cclxuICAgIC5jb2wtbWQtMTIubWFyZ2luX2JvdHRvbSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNjRweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYTpmb2N1cywgYTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICMxMzQwNjE7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzEzNDA2MTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuaW5zaWRlIC5wYXJhe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgICAgICBjb2xvcjogIzIxMzY1YTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0N3B4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDM4cHg7XHJcbiAgICBcclxuICAgIH1cclxuLnN0eWxle1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFVidW50dTtcclxuICAgIGNvbG9yOiAjMDAzOTU1O1xyXG4gICAgbWFyZ2luLXRvcDogNDhweDtcclxufVxyXG4uc3ViaGVhZGluZ3tcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiAjMDAzOTU1O1xyXG4gICAgZm9udC1mYW1pbHk6IFVidW50dTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuICAgIFxyXG4gICAgdGFibGUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgICAgICAgLyogd2lkdGg6IG1heC1jb250ZW50OyAqL1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNzY3Njc2M2Q7XHJcbiAgICB9ICBcclxuICAgIFxyXG4gICAgLyogdGQubWF0LWNlbGwsIHRkLm1hdC1mb290ZXItY2VsbCwgdGgubWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICB9ICovXHJcbiAgICBtYXQtcm93LCB0ZC5tYXQtY2VsbCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzAwODA4MDg1O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBVYnVudHU7XHJcbiAgICAgICAgY29sb3I6ICMyYjVkNmY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM3Njc2NzYzZDtcclxuICAgIH1cclxuICAgIHRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsIHRkLm1hdC1mb290ZXItY2VsbDpmaXJzdC1vZi10eXBlLCB0aC5tYXQtaGVhZGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzc2NzY3NjNkO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzc2NzY3NjNkO1xyXG4gICAgfVxyXG4gICAgbWF0LWhlYWRlci1yb3csIG1hdC1mb290ZXItcm93ICwgdGgubWF0LWhlYWRlci1jZWxsLCB0ZC5tYXQtZm9vdGVyLWNlbGx7XHJcbiAgICAgICAgLyogYm9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGU7ICovXHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFVidW50dTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgY29sb3I6ICNkMGM5ZDY7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFVidW50dTtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNzY3Njc2M2RcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJ1dHRvbl9yZXNldHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgLyogaGVpZ2h0OjY0cHg7ICovXHJcbiAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1NHB4O1xyXG4gICAgICAgIHdpZHRoOiAyNjZweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0ZWFsO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdGVhbDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwJTtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgfVxyXG4gICAgXHJcblxyXG5cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgdHIubWF0LWhlYWRlci1yb3cge1xyXG4gICAgICAgIGhlaWdodDogNTZweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzgwODA4MDQyICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICB0ZC5tYXQtY2VsbDpsYXN0LW9mLXR5cGUsIHRkLm1hdC1mb290ZXItY2VsbDpsYXN0LW9mLXR5cGUsIHRoLm1hdC1oZWFkZXItY2VsbDpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgIH1cclxuICAgIC5jb2wtbGctMSwgLmNvbC1sZy0xMCwgLmNvbC1sZy0xMSwgLmNvbC1sZy0xMiwgLmNvbC1sZy0yLCAuY29sLWxnLTMsIC5jb2wtbGctNCwgLmNvbC1sZy01LCAuY29sLWxnLTYsIC5jb2wtbGctNywgLmNvbC1sZy04LCAuY29sLWxnLTksIC5jb2wtbWQtMSwgLmNvbC1tZC0xMCwgLmNvbC1tZC0xMSwgLmNvbC1tZC0xMiwgLmNvbC1tZC0yLCAuY29sLW1kLTMsIC5jb2wtbWQtNCwgLmNvbC1tZC01LCAuY29sLW1kLTYsIC5jb2wtbWQtNywgLmNvbC1tZC04LCAuY29sLW1kLTksIC5jb2wtc20tMSwgLmNvbC1zbS0xMCwgLmNvbC1zbS0xMSwgLmNvbC1zbS0xMiwgLmNvbC1zbS0yLCAuY29sLXNtLTMsIC5jb2wtc20tNCwgLmNvbC1zbS01LCAuY29sLXNtLTYsIC5jb2wtc20tNywgLmNvbC1zbS04LCAuY29sLXNtLTksIC5jb2wteHMtMSwgLmNvbC14cy0xMCwgLmNvbC14cy0xMSwgLmNvbC14cy0xMiwgLmNvbC14cy0yLCAuY29sLXhzLTMsIC5jb2wteHMtNCwgLmNvbC14cy01LCAuY29sLXhzLTYsIC5jb2wteHMtNywgLmNvbC14cy04LCAuY29sLXhzLTkge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgfVxyXG4gICAgLmFwcC10b3BiYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuc2hvdzExMntcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICB9XHJcbiAgICAubWFyZ2luX3RvcHtcclxuXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTA5cHg7XHJcbiAgICBcclxuICAgIH1cclxuICAgIDo6bmctZGVlcCAucm93e1xyXG4gICAgICAgIG1hcmdpbjowcHg7XHJcbiAgICB9XHJcbiAgICA6Om5nLWRlZXAuY29sLXhzLTEyIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmltYWdlZnVsbF9tb2JpbGV7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvY2hhbmdlLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgIFxyXG4gICAgd2lkdGg6IDk2JTtcclxuICAgIGhlaWdodDogMjQwcHg7ICAgXHJcbiAgICBcclxuICAgIH1cclxuICAgIC5tYXJnaW5fdG9wIGgxe1xyXG4gICAgICAgIC8qIGZvbnQtc2l6ZTogMzVweDsgKi9cclxuICAgICAgICBmb250LWZhbWlseTogVWJ1bnR1O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBcclxuICAgICAgICBmb250LXNpemU6MjlweDtcclxuICAgICAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXHJcbiAgICAgICAgICAgIGNvbG9yOiMwMDM5NTU7XHJcbiAgICBcclxuICAgIH1cclxuICAgIC5tYXJnaW5fdG9wIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LWZhbWlseTogVWJ1bnR1O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6ICMwMDM5NTU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjZweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICB9XHJcbiAgICBwLm5hbWUuc2hvdzExMSB7XHJcbiAgICAgICAgLyogbWFyZ2luLXRvcDogNDBweDsgKi9cclxuICAgIH1cclxuICAgIHAubmFtZS5zaG93MTExIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBhLmNoYW5nZXNfdmlldyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDExMXB4O1xyXG4gICAgICAgIC8qIG1hcmdpbi10b3A6IDQycHg7ICovXHJcbiAgICB9XHJcbiAgICAuYmFja2dyb3VuZC5zYWZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmN2Y3O1xyXG4gICAgICAgIGhlaWdodDogMjg0cHg7XHJcbiAgICAgICAgd2lkdGg6IDcwOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMiU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICAuYmFja2dyb3VuZC5zYWZlIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxOXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAzOTU1O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE5cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5iYWNrZ3JvdW5kIGltZyB7XHJcbiAgICAgICAgLyogaGVpZ2h0OiAyMTdweDtcclxuICAgICAgICB3aWR0aDogMjE0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDsgKi9cclxuICAgICAgICBwYWRkaW5nOiAzJTtcclxuICAgICAgICBoZWlnaHQ6IDIzOXB4O1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAudmlld3tcclxuICAgICAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICBtYXJnaW4tbGVmdDogODhweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnZpZXcyMntcclxuICAgICAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgLyogdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICBtYXJnaW4tbGVmdDogMTc1cHg7XHJcbiAgICAgICAgIHBhZGRpbmctbGVmdDo0MHB4O1xyXG4gICAgfVxyXG4gICAgLm5hbWV7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiB0ZWFsO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbiAgICAuYmFja2dyb3VuZF9jaGFuZ2Uxe1xyXG4gICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNlNmY3Zjc7ICovXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjdmNztcclxuICAgICAgICAvKiBoZWlnaHQ6IDIxNzsgKi9cclxuICAgICAgICBoZWlnaHQ6IDI2MHB4O1xyXG4gICAgICAgIHdpZHRoOiA5NCU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcC5uYW1lLm5hbWUxIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAubmFtZS5uYW1lMiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTRweDtcclxuICAgIH1cclxuICAgIC5iYWNrZ3JvdW5kX2NoYW5nZTJ7XHJcbiAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2U2ZjdmNzsgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmN2Y3O1xyXG4gICAgICAgIC8qIGhlaWdodDogMjE3OyAqL1xyXG4gICAgICAgIGhlaWdodDogMjYwcHg7XHJcbiAgICAgICAgd2lkdGg6IDk0JTtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAucm93Lmluc2lkZSB7XHJcbiAgICAgICAgLyogbWFyZ2luLWxlZnQ6IDQlOyAqL1xyXG4gICAgICAgIC8qIG1hcmdpbi1yaWdodDowcHg7ICovXHJcbiAgICB9XHJcbiAgICAucGFyYWdyYXBoe1xyXG4gICAgICAgIGNvbG9yOiAjMDAzOTU1O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRwdDtcclxuICAgICAgICBmb250LWZhbWlseTogVWJ1bnR1O1xyXG4gICAgfVxyXG4gICAgLmNvbC1tZC0xMi5tYXJnaW5fYm90dG9tIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2NHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhOmZvY3VzLCBhOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogIzEzNDA2MTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMTM0MDYxO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICAgIC5pbnNpZGUgLnBhcmF7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMjEzNjVhO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQ3cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzhweDtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgLnN0eWxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzNweDtcclxuICAgICAgICBmb250LWZhbWlseTogVWJ1bnR1O1xyXG4gICAgICAgIGNvbG9yOiAjMDAzOTU1O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDYycHg7XHJcbiAgICB9XHJcbiAgICAuc3ViaGVhZGluZ3tcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDM5NTU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFVidW50dTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0YWJsZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjhweDtcclxuICAgICAgICAvKiB3aWR0aDogbWF4LWNvbnRlbnQ7ICovXHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3Njc2NzYzZDtcclxuICAgIH0gIFxyXG4gICAgXHJcbiAgICAvKiB0ZC5tYXQtY2VsbCwgdGQubWF0LWZvb3Rlci1jZWxsLCB0aC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgIH0gKi9cclxuICAgIG1hdC1yb3csIHRkLm1hdC1jZWxsIHtcclxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMDA4MDgwODU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFVidW50dTtcclxuICAgICAgICBjb2xvcjogIzJiNWQ2ZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzc2NzY3NjNkO1xyXG4gICAgfVxyXG4gICAgdGQubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSwgdGQubWF0LWZvb3Rlci1jZWxsOmZpcnN0LW9mLXR5cGUsIHRoLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNzY3Njc2M2Q7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNzY3Njc2M2Q7XHJcbiAgICB9XHJcbiAgICBtYXQtaGVhZGVyLXJvdywgbWF0LWZvb3Rlci1yb3cgLCB0aC5tYXQtaGVhZGVyLWNlbGwsIHRkLm1hdC1mb290ZXItY2VsbHtcclxuICAgICAgICAvKiBib3JkZXItYm90dG9tLWNvbG9yOiB3aGl0ZTsgKi9cclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICBmb250LWZhbWlseTogVWJ1bnR1O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICBjb2xvcjogI2QwYzlkNjtcclxuICAgICAgICBmb250LWZhbWlseTogVWJ1bnR1O1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM3Njc2NzYzZFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYnV0dG9uX3Jlc2V0e1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAvKiBoZWlnaHQ6NjRweDsgKi9cclxuICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICAgICAgd2lkdGg6IDI2NnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRlYWw7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB0ZWFsO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBcclxuICAgIH1cclxuICAgIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICAgIH1cclxuICAgIFxyXG5cclxufVxyXG5cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/report/report.component.ts":
  /*!********************************************!*\
    !*** ./src/app/report/report.component.ts ***!
    \********************************************/

  /*! exports provided: ReportComponent */

  /***/
  function srcAppReportReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportComponent", function () {
      return ReportComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var ReportComponent =
    /*#__PURE__*/
    function () {
      function ReportComponent(router, apiservices, route, translate, title, dialog) {
        var _this7 = this;

        _classCallCheck(this, ReportComponent);

        this.router = router;
        this.apiservices = apiservices;
        this.route = route;
        this.translate = translate;
        this.title = title;
        this.dialog = dialog;
        this.data = {};
        this.full_data = [];
        this.displayedColumns = ['Substance', 'Before', 'Limit_range', 'After'];
        this.Chloramine = {};
        this.pH = {};
        this.Calcium = {};
        this.Microplastics = {};
        this.Nitrates = {};
        this.Bacteria_or_Viruses = {};
        this.data_all = [];
        this.data_all11 = [];
        this.hold_array = {}; // table_hide: string;

        this.table_hide = false;
        this.route.params.subscribe(function (params) {
          _this7.data['basic_details_id'] = params['id'];
          _this7.data['postcode'] = params['postcode'];
          _this7.data['id'] = params['id'];
        });
      }

      _createClass(ReportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.translate.addLangs(['English', 'Spanish']);
          console.log(sessionStorage.getItem("pageTitle") == 'Spanish' || sessionStorage.getItem("pageTitle") == 'English');

          if (sessionStorage.getItem("pageTitle") == 'Spanish' || sessionStorage.getItem("pageTitle") == 'English') {
            var lang = sessionStorage.getItem("pageTitle");
            this.translate.use(lang);
            console.log("1");
          } else {
            this.translate.addLangs(['English', 'Spanish']);
            this.translate.setDefaultLang('English');
            var browserLang = this.translate.getBrowserLang();
            this.translate.use(browserLang.match(/English|Spanish/) ? browserLang : 'English');
            console.log("2");
          }

          this.display();
        }
      }, {
        key: "link",
        value: function link() {
          var vari = 'https://tappwater.co/en/list-of-common-contaminants-substances-in-tap-water';
          alert("https://tappwater.co/en/list-of-common-contaminants-substances-in-tap-water");
        }
      }, {
        key: "setTheTitle",
        value: function setTheTitle() {
          this.title.setTitle(this.pageTitle);
        }
      }, {
        key: "function1",
        value: function function1(l, lang_data) {
          console.log("pageTitle", lang_data);
          sessionStorage.removeItem("pageTitle");
          sessionStorage.setItem("pageTitle", lang_data);
        }
      }, {
        key: "display",
        value: function display() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
                    _context.next = 3;
                    return this.details();

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "details",
        value: function details() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.calculation();

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "calculation",
        value: function calculation() {
          var _this8 = this;

          console.log("data", this.data);
          var Water_safety = this.apiservices.postdata("water_safety_view", this.data);
          var pathogens = this.apiservices.postdata("pathogens_data_view", this.data);
          var general = this.apiservices.postdata("general_data_view", this.data);
          var minerals_data_view = this.apiservices.postdata("minerals_data_view", this.data);
          var Chemical_parameter_data_view = this.apiservices.postdata("Chemical_parameter_data_view", this.data);
          var metals = this.apiservices.postdata("metals_data_view_priority", this.data);
          var select_details = this.apiservices.postdata("select_details", this.data);
          var requestArray = [];
          requestArray.push(Water_safety, general, minerals_data_view, Chemical_parameter_data_view, pathogens, metals, select_details);
          Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(requestArray).subscribe(function (results) {
            console.log("here", results);

            if (!(results[0] && results[0].constructor === Array && Object.keys(results[0]).length === 0)) {
              for (var i = 0; i < Object.keys(results[0]).length; i++) {
                if (results[0][i].Substance == 'Free Chlorine') {
                  _this8.Chlorine_value_before_filtering = results[0][i].Zone;
                  var note = void 0;

                  if (results[1][i].Max >= results[0][i].Filtering && results[0][i].Filtering > results[0][i].Recommended) {
                    console.log("true condition", results[0][i].Max >= results[0][i].Filtering >= results[0][i].Recommended);
                    note = "Normal";
                  } else if (results[0][i].Filtering < results[0][i].Recommended) {
                    note = "Below legal limit";
                  } else if (results[0][i].Filtering > results[0][i].Max) {
                    note = "Above legal limit";
                  }

                  if (results[3][i].Filtering == null) {
                    note = 'Normal';
                  }

                  _this8.data_all.push({
                    Substance: 'Chlorine',
                    Before: results[0][i].Zone,
                    After: results[0][i].Filtering,
                    Unit: results[0][i].Unit,
                    max: results[0][i].Max,
                    min: results[0][i].Recommended,
                    note: note
                  });
                }
              }
            }

            if (!(results[1] && results[1].constructor === Array && Object.keys(results[1]).length === 0)) {
              for (var _i = 0; _i < Object.keys(results[1]).length; _i++) {
                if (results[1][_i].Substance == 'pH') {
                  var _note = void 0;

                  if (results[1][_i].Max >= results[1][_i].Filtering && results[1][_i].Filtering > results[1][_i].Recommended) {
                    console.log("true condition", results[1][_i].Max >= results[1][_i].Filtering >= results[1][_i].Recommended);
                    _note = "Normal";
                  } else if (results[1][_i].Filtering < results[1][_i].Recommended) {
                    _note = "Below legal limit";
                  } else if (results[1][_i].Filtering > results[1][_i].Max) {
                    _note = "Above legal limit";
                  }

                  if (results[3][_i].Filtering == null) {
                    _note = 'Normal';
                  }

                  _this8.dataSource.data = _this8.data_all.push({
                    Substance: 'pH',
                    Before: results[1][_i].Zone,
                    After: results[1][_i].Filtering,
                    Unit: results[1][_i].Unit,
                    max: results[1][_i].Max,
                    min: results[1][_i].Recommended,
                    note: _note
                  });
                }

                if (results[1][_i].Substance == 'Microplastics') {
                  _this8.data_all.push({
                    Substance: 'Microplastics',
                    Before: results[1][_i].Zone,
                    After: results[1][_i].Filtering,
                    Unit: results[1][_i].Unit,
                    max: results[1][_i].Max,
                    min: results[1][_i].Recommended,
                    note: "Unregulated"
                  });
                }

                if (results[1][_i].Substance == 'Hardness') {
                  var _note2 = void 0;

                  console.log("max undefined..........", results[1][_i].Max);
                  console.log("recommented undefined...........", results[1][_i].Recommended);

                  if (results[1][_i].Max >= results[1][_i].Filtering && results[1][_i].Filtering > results[1][_i].Recommended) {
                    console.log("true condition", results[1][_i].Max >= results[1][_i].Filtering >= results[1][_i].Recommended);
                    _note2 = "Within legal limit";
                  } else if (results[1][_i].Filtering < results[1][_i].Recommended) {
                    _note2 = "Below legal limit";
                  } else if (results[1][_i].Filtering > results[1][_i].Max) {
                    _note2 = "Above legal limit";
                  }

                  if (results[3][_i].Filtering == null) {
                    _note2 = 'Not reported';
                  }

                  _this8.data_all11.push({
                    Substance: 'Hardness',
                    Before: results[1][_i].Zone,
                    After: results[1][_i].Filtering,
                    Unit: results[1][_i].Unit,
                    max: results[1][_i].Max,
                    min: results[1][_i].Recommended,
                    note: _note2
                  });

                  _this8.Hardness_value_before_filtering = results[1][_i].Zone;
                  _this8.Hardness = _this8.Hardness_value_before_filtering;
                  console.log(" this.Hardness............", _this8.Hardness);
                } // Hardness

              }
            }

            if (!(results[2] && results[2].constructor === Array && Object.keys(results[2]).length === 0)) {
              for (var _i2 = 0; _i2 < Object.keys(results[2]).length; _i2++) {
                if (results[2][_i2].Substance == "Calcium") {
                  var _note3 = void 0;

                  if (results[3][_i2].Max >= results[3][_i2].Filtering && results[3][_i2].Filtering > results[3][_i2].Recommended) {
                    _note3 = "Unregulated";
                  } else if (results[3][_i2].Filtering < results[3][_i2].Recommended) {
                    _note3 = "Unregulated";
                  } else if (results[3][_i2].Filtering > results[3][_i2].Max) {
                    _note3 = "Unregulated";
                  }

                  if (results[3][_i2].Filtering == null) {
                    _note3 = 'Unregulated';
                  }

                  _this8.data_all.push({
                    Substance: 'Limescale',
                    Before: results[2][_i2].Zone,
                    After: results[2][_i2].Filtering,
                    Unit: results[2][_i2].Unit,
                    max: results[2][_i2].Max,
                    min: results[2][_i2].Recommended,
                    note: _note3
                  });
                }
              }
            }

            if (!(results[3] && results[3].constructor === Array && Object.keys(results[3]).length === 0)) {
              console.log("results[3]", results[3]);

              for (var _i3 = 0; _i3 < Object.keys(results[3]).length; _i3++) {
                if (results[3][_i3].Substance == 'Nitrates') {
                  var _note4 = void 0;

                  if (results[3][_i3].Max >= results[3][_i3].Filtering && results[3][_i3].Filtering > results[3][_i3].Recommended) {
                    console.log("true condition", results[3][_i3].Max >= results[3][_i3].Filtering >= results[3][_i3].Recommended);
                    _note4 = "Below legal limit";
                  } else if (results[3][_i3].Filtering < results[3][_i3].Recommended) {
                    _note4 = "Below legal limit";
                  } else if (results[3][_i3].Filtering > results[3][_i3].Max) {
                    _note4 = "Above legal limit";
                  }

                  if (results[3][_i3].Filtering == null) {
                    _note4 = 'Below legal limit';
                  }

                  console.log("results[3][i].Filtering", results[3][_i3].Filtering);

                  _this8.data_all.push({
                    Substance: 'Nitrates',
                    Before: results[3][_i3].Zone,
                    After: results[3][_i3].Filtering,
                    Unit: results[3][_i3].Unit,
                    max: results[3][_i3].Max,
                    min: results[3][_i3].Recommended,
                    note: _note4
                  });
                }
              }
            }

            if (!(results[4] && results[4].constructor === Array && Object.keys(results[4]).length === 0)) {
              var subarray = [];
              var before = [];
              var after_value = [];
              var before_value;
              var after;
              var largest = 0;
              var smallest = 0;

              _this8.data_all.push({
                Substance: 'Bacterias/virus',
                Before: "None reported",
                After: "None reported",
                Unit: "",
                max: largest,
                min: smallest,
                note: 'Below legal limit'
              });
            }

            if (!(results[5] && results[5].constructor === Array && Object.keys(results[5]).length === 0)) {
              //  heavy metal   
              var _subarray = [];
              var _before = [];

              var _before_value;

              var _after;

              var min = [];

              for (var _i4 = 0; _i4 < Object.keys(results[5]).length; _i4++) {
                if (results[5][_i4].Substance == 'Lead' || results[5][_i4].Substance == 'Manganese' || results[5][_i4].Substance == 'Iron' || results[5][_i4].Substance == 'Copper' || results[5][_i4].Substance == 'Barium' || results[5][_i4].Substance == 'Arsenic') {
                  _before_value = "Below limit";
                  _after = "Safe level";
                }
              }

              console.log(min[0] != undefined, "Nee");
              var largest = 0;
              var smallest = 0;

              _this8.data_all.push({
                Substance: 'Heavy Metals',
                Before: 'Detected',
                After: _after,
                Unit: "",
                max: largest,
                min: smallest,
                note: 'Below legal limit'
              });
            }

            if (!(results[6] && results[6].constructor === Array && Object.keys(results[6]).length === 0)) {
              _this8.data['utlity_enter'] = results[6]['utlity_enter'];
              _this8.data['city'] = results[6]['city'];
              _this8.data['country'] = results[6]['country'];
              _this8.data['description'] = results[6]['description'];
              _this8.data['water'] = results[6]['yes'];
              _this8.data['drinkable'] = results[6]['drinkable'], _this8.data['blog_link'] = results[6]['blog_link'];
            }

            if (!(results[0] && results[0].constructor === Array && Object.keys(results[0]).length === 0) || !(results[1] && results[1].constructor === Array && Object.keys(results[1]).length === 0) || !(results[2] && results[2].constructor === Array && Object.keys(results[2]).length === 0) || !(results[3] && results[3].constructor === Array && Object.keys(results[3]).length === 0) || !(results[4] && results[4].constructor === Array && Object.keys(results[4]).length === 0) || !(results[5] && results[5].constructor === Array && Object.keys(results[5]).length === 0)) {
              var temp = _this8.data_all[1];
              _this8.data_all[1] = _this8.data_all[3];
              _this8.data_all[3] = temp;
              _this8.hold_array.data = _this8.data_all;

              for (var _i5 = 0; _i5 < _this8.data_all.length; _i5++) {
                //start for microplastic
                if (_this8.data_all[_i5].Substance == 'Microplastics') {
                  if (_this8.data_all[_i5].Before == null || _this8.data_all[_i5].Before == undefined || _this8.data_all[_i5].Before == '') {
                    _this8.data_all[_i5].Before = "Unknown";
                    _this8.data_all[_i5].note = 'Unregulated';
                  }

                  if (_this8.data_all[_i5].After != null || _this8.data_all[_i5].After != undefined || _this8.data_all[_i5].After != '') {
                    // this.data_all[i].After=parseFloat(this.data_all[i].After);
                    console.log("not null.......................", typeof _this8.data_all[_i5].After, _this8.data_all[_i5].After);
                  }
                } //end microplastic


                if (_this8.data_all[_i5].Substance == 'Chlorine') {
                  _this8.Chlorine = parseFloat(_this8.data_all[_i5].Before);

                  if (results[0][_i5].Recommended >= results[0][_i5].Filtering <= results[0][_i5].Max) {
                    console.log("here", results[0][_i5].Recommended >= results[0][_i5].Filtering <= results[0][_i5].Max);
                  }
                } // start rule for limescale


                if (_this8.data_all[_i5].Substance == 'Limescale') {
                  if (_this8.data_all[_i5].After == null) {
                    console.log("this.data_all[i].After", _this8.data_all[_i5].After);
                  }

                  if (_this8.data_all[_i5].Before == null) {
                    console.log("this.data_all[i].Before", _this8.data_all[_i5].Before);
                  }

                  if (_this8.data_all[_i5].Before != null || _this8.data_all[_i5].After == null) {
                    if (_this8.data_all[_i5].Before != null) {
                      _this8.data_all[_i5].Before = parseFloat(_this8.data_all[_i5].Before);

                      if (_this8.data_all[_i5].Before > 180) {
                        _this8.data_all[_i5].Before = "Very high";
                      }

                      if (_this8.data_all[_i5].Before <= 180 && _this8.data_all[_i5].Before >= 121) {
                        _this8.data_all[_i5].Before = "High";
                      }

                      if (_this8.data_all[_i5].Before <= 120 && _this8.data_all[_i5].Before >= 61) {
                        _this8.data_all[_i5].Before = "Medium";
                      }

                      if (_this8.data_all[_i5].Before <= 60) {
                        _this8.data_all[_i5].Before = "Low";
                      } // this.Hardness=this.data_all[i].Before;

                    }

                    if (_this8.data_all[_i5].After != null) {
                      _this8.data_all[_i5].After = "Low";
                      /*  this.data_all[i].After=parseFloat(this.data_all[i].After);
                                            if(this.data_all[i].After>180){
                            this.data_all[i].After="Very high";
                          }
                          if(this.data_all[i].After<=180 && this.data_all[i].After >=121){
                            this.data_all[i].After="High";
                          }
                          if(this.data_all[i].After<=120 && this.data_all[i].After >=61){
                            console.log("this.data_all[i].After",typeof this.data_all[i].After)
                            this.data_all[i].After="Medium";
                            console.log("this.data_all[i].After",typeof this.data_all[i].After,this.data_all[i].After)
                          }
                          if(this.data_all[i].After <= 60){
                            this.data_all[i].After="Low";
                          }
                      */
                    }
                  }
                } // end rule for limescale

              }
            } else {
              _this8.table_hide = true;
            }
          });
        }
      }, {
        key: "check",
        value: function check() {
          this.router.navigate(["/check", this.data['basic_details_id'], this.data['postcode']]).then(function () {
            window.location.reload();
          });
        }
      }, {
        key: "opennewtap",
        value: function opennewtap() {
          // [href]="data.blog_link==null?'#/Report/'+data.id+'/'+data.postcode:data.blog_link"
          if (this.data.blog_link != null) {
            window.open(this.data.blog_link, "_blank");
          }
        }
      }]);

      return ReportComponent;
    }();

    ReportComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
      }];
    };

    ReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-report',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./report.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/report/report.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./report.component.css */
      "./src/app/report/report.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]])], ReportComponent);
    /***/
  },

  /***/
  "./src/app/topbar/topbar.component.css":
  /*!*********************************************!*\
    !*** ./src/app/topbar/topbar.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppTopbarTopbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n@media screen \r\nand (min-device-width: 1200px) \r\nand (max-device-width: 1600px) \r\nand (-webkit-min-device-pixel-ratio: 1) { \r\n  ::ng-deep .mat-form-field-infix {\r\n    display: block;\r\n    position: relative;\r\n    -webkit-box-flex: 1;\r\n            flex: auto;\r\n    min-width: 0;\r\n    /* top: 10px; */\r\n    width: 180px;\r\n    left: 20px;\r\n    /* background: white; */\r\n    line-height: 2.5;\r\n}\r\nlabel {\r\n  display: inline-block;\r\n  max-width: 100%;\r\n  margin-bottom: 5px;\r\n  font-weight: 700;\r\n  /* color: white; */\r\n  background: bottom;\r\n  margin-top: 19px;\r\n  line-height: 2.5;\r\n  margin-left: 20px;\r\n  /* width: 180px; */\r\n}\r\nselect{\r\n  background:#003955;\r\n  border:1px solid #003955;\r\n  color:white\r\n}\r\n\r\n\r\n.mat-toolbar {\r\n  background: white;\r\n  color: rgba(0, 0, 0, 0.87);\r\n}\r\n\r\n\r\n.fa, .fab, .fal, .far, .fas {\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  /* display: inline-block; */\r\n  font-style: normal;\r\n  font-variant: normal;\r\n  text-rendering: auto;\r\n  font-size: 27px;\r\n  line-height: 1.9;\r\n  color: white;\r\n  margin-right:10px;\r\n}\r\n\r\n.top_icons {\r\n/* width:50% !important; */\r\n}\r\n.center{\r\ntext-align: center;\r\nposition: absolute;\r\ntop: 0;\r\nleft: 40%;\r\nline-height: 0.7;\r\ncolor: white;\r\nfont-size: 15px !important;\r\n}\r\nselect.classic {\r\n   /* top: 32px; */\r\n   background-image: linear-gradient(45deg, transparent 50%, #e8e8f1 50%), linear-gradient(135deg, #ededf3 50%, transparent 50%), linear-gradient(to right, #222324, #2f3030);\r\n   background-position: calc(100% - 23px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), 100% 47px;\r\n   background-size: 8px 8px, 8px 8px, 2.8em 2.8em;\r\n   background-repeat: no-repeat;  \r\n}\r\n\r\nselect.mat-input-element {\r\n  font: normal !;\r\n    -moz-appearance: none;\r\n    -webkit-appearance: none;\r\n    position: relative;\r\n    background-color: #003955;\r\n    color: white;\r\n    display: -webkit-inline-box;\r\n    display: inline-flex;\r\n    box-sizing: border-box;\r\n    /* font-size: 19px; */\r\n    padding-top: 7px !important;\r\n    /* padding-top: 1em; */\r\n    top: -1em;\r\n    margin-bottom: -1em;\r\n}\r\n.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {\r\n  font-family: inherit;\r\n  font-weight: 500;\r\n  line-height: 0.4;\r\n  color: inherit;\r\n}\r\nheader {\r\n    height: 58px;\r\n    width: 100%;\r\n    background-color: #003955;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n.mat-toolbar-row, .mat-toolbar-single-row {\r\n  height: 226px;\r\n  margin-bottom: -35px;\r\n}\r\n\r\n.left {\r\n    width: 50%;\r\n}\r\n.right {\r\n    width: 48%;\r\n}\r\n\r\n  \r\n  .topnav {\r\n    overflow: hidden;\r\n  \r\n  }\r\n  \r\n  .topnav a {\r\n    float: left;\r\n    display: block;\r\n    color: #333 !important;\r\n    text-align: center;\r\n    padding: 14px 20px;\r\n    text-decoration: none;\r\n    font-size: 21px;\r\n  }\r\n  \r\n  .topnav a:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n  }\r\n  \r\n  .topnav a.active {\r\n    background-color: white;\r\n    color: black;\r\n  }\r\n  \r\n  .topnav .icon {\r\n    display: none;\r\n  }\r\n\r\n\r\n}\r\n\r\n\r\n\r\n/* ----------- Retina Screens ----------- */\r\n\r\n\r\n\r\n@media screen \r\n  and (min-device-width: 1200px) \r\n  and (max-device-width: 1600px) \r\n  and (-webkit-min-device-pixel-ratio: 2)\r\n  and (-webkit-min-device-pixel-ratio: 2), screen \r\n  and (min-device-width: 1200px) \r\n  and (max-device-width: 1600px) \r\n  and (-webkit-min-device-pixel-ratio: 2)\r\n  and (min-resolution: 192dpi) { \r\n\r\n    ::ng-deep .mat-form-field-infix {\r\n      display: block;\r\n      position: relative;\r\n      -webkit-box-flex: 1;\r\n              flex: auto;\r\n      min-width: 0;\r\n      /* top: 10px; */\r\n      width: 180px;\r\n      left: 20px;\r\n      /* background: white; */\r\n      line-height: 2.5;\r\n  }\r\n  \r\n  /* .mat-form-field-infix {\r\n    display: block;\r\n    position: relative;\r\n    -webkit-box-flex: 1;\r\n    flex: auto;\r\n    min-width: 0;\r\n    top: -41px;\r\n    width: 180px;\r\n    left: 20px;\r\n  \r\n    line-height: 2;\r\n  } */\r\n  \r\n  .mat-toolbar {\r\n    background: white;\r\n    color: rgba(0, 0, 0, 0.87);\r\n  }\r\n  \r\n  \r\n  .fa, .fab, .fal, .far, .fas {\r\n    -moz-osx-font-smoothing: grayscale;\r\n    -webkit-font-smoothing: antialiased;\r\n    /* display: inline-block; */\r\n    font-style: normal;\r\n    font-variant: normal;\r\n    text-rendering: auto;\r\n    font-size: 27px;\r\n    line-height: 1.9;\r\n    color: white;\r\n    margin-right:10px;\r\n  }\r\n  \r\n  .top_icons {\r\n  /* width:50% !important; */\r\n  }\r\n  .center{\r\n  text-align: center;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 40%;\r\n  line-height: 0.7;\r\n  color: white;\r\n  font-size: 15px !important;\r\n  }\r\n  select.classic {\r\n     /* top: 32px; */\r\n     background-image: linear-gradient(45deg, transparent 50%, #e8e8f1 50%), linear-gradient(135deg, #ededf3 50%, transparent 50%), linear-gradient(to right, #222324, #2f3030);\r\n     background-position: calc(100% - 23px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), 100% 47px;\r\n     background-size: 8px 8px, 8px 8px, 2.8em 2.8em;\r\n     background-repeat: no-repeat;  \r\n  }\r\n  \r\n  select.mat-input-element {\r\n    font: normal !;\r\n      -moz-appearance: none;\r\n      -webkit-appearance: none;\r\n      position: relative;\r\n      background-color: #003955;\r\n      color: white;\r\n      display: -webkit-inline-box;\r\n      display: inline-flex;\r\n      box-sizing: border-box;\r\n      /* font-size: 19px; */\r\n      padding-top: 7px !important;\r\n      /* padding-top: 1em; */\r\n      top: -1em;\r\n      margin-bottom: -1em;\r\n  }\r\n  .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {\r\n    font-family: inherit;\r\n    font-weight: 500;\r\n    line-height: 0.4;\r\n    color: inherit;\r\n  }\r\n  header {\r\n      height: 58px;\r\n      width: 100%;\r\n      background-color: #003955;\r\n      position: absolute;\r\n      top: 0;\r\n      left: 0;\r\n  }\r\n  .mat-toolbar-row, .mat-toolbar-single-row {\r\n    height: 226px;\r\n    margin-bottom: -35px;\r\n  }\r\n  \r\n  .left {\r\n      width: 50%;\r\n  }\r\n  .right {\r\n      width: 48%;\r\n  }\r\n  \r\n  body {\r\n      margin: 0;\r\n      font-family: Arial, Helvetica, sans-serif;\r\n    }\r\n    \r\n    .topnav {\r\n      overflow: hidden;\r\n    \r\n    }\r\n    \r\n    .topnav a {\r\n      float: left;\r\n      display: block;\r\n      color: #333 !important;\r\n      text-align: center;\r\n      padding: 14px 20px;\r\n      text-decoration: none;\r\n      font-size: 21px;\r\n    }\r\n    \r\n    .topnav a:hover {\r\n      background-color: #ddd;\r\n      color: black;\r\n    }\r\n    \r\n    .topnav a.active {\r\n      background-color: white;\r\n      color: black;\r\n    }\r\n    \r\n    .topnav .icon {\r\n      display: none;\r\n    }\r\n}\r\n\r\n\r\n\r\n/* ----------- Galaxy S4, S5 and Note 3 ----------- */\r\n\r\n\r\n\r\n/* Portrait and Landscape */\r\n\r\n\r\n\r\n@media screen \r\n  and (device-width: 320px) \r\n  and (device-height: 640px) \r\n  and (-webkit-device-pixel-ratio: 3) {\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    ::ng-deep .mat-form-field-infix {\r\n      display: block;\r\n      position: relative;\r\n      -webkit-box-flex: 1;\r\n              flex: auto;\r\n      min-width: 0;\r\n      /* top: 10px; */\r\n      width: 180px;\r\n      left: 20px;\r\n      /* background: white; */\r\n      line-height: 2.5;\r\n  }\r\n  \r\n  /* .mat-form-field-infix {\r\n    display: block;\r\n    position: relative;\r\n    -webkit-box-flex: 1;\r\n    flex: auto;\r\n    min-width: 0;\r\n    top: -41px;\r\n    width: 180px;\r\n    left: 20px;\r\n  \r\n    line-height: 2;\r\n  } */\r\n  \r\n  .mat-toolbar {\r\n    background: white;\r\n    color: rgba(0, 0, 0, 0.87);\r\n  }\r\n  \r\n  \r\n  .fa, .fab, .fal, .far, .fas {\r\n    -moz-osx-font-smoothing: grayscale;\r\n    -webkit-font-smoothing: antialiased;\r\n    /* display: inline-block; */\r\n    font-style: normal;\r\n    font-variant: normal;\r\n    text-rendering: auto;\r\n    font-size: 27px;\r\n    line-height: 1.9;\r\n    color: white;\r\n    margin-right:10px;\r\n  }\r\n  \r\n  .top_icons {\r\n  /* width:50% !important; */\r\n  }\r\n  .center{\r\n  text-align: center;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 40%;\r\n  line-height: 0.7;\r\n  color: white;\r\n  font-size: 15px !important;\r\n  }\r\n  select.classic {\r\n     /* top: 32px; */\r\n     background-image: linear-gradient(45deg, transparent 50%, #e8e8f1 50%), linear-gradient(135deg, #ededf3 50%, transparent 50%), linear-gradient(to right, #222324, #2f3030);\r\n     background-position: calc(100% - 23px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), 100% 47px;\r\n     background-size: 8px 8px, 8px 8px, 2.8em 2.8em;\r\n     background-repeat: no-repeat;  \r\n  }\r\n  \r\n  select.mat-input-element {\r\n    font: normal !;\r\n      -moz-appearance: none;\r\n      -webkit-appearance: none;\r\n      position: relative;\r\n      background-color: #003955;\r\n      color: white;\r\n      display: -webkit-inline-box;\r\n      display: inline-flex;\r\n      box-sizing: border-box;\r\n      /* font-size: 19px; */\r\n      padding-top: 7px !important;\r\n      /* padding-top: 1em; */\r\n      top: -1em;\r\n      margin-bottom: -1em;\r\n  }\r\n  .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {\r\n    font-family: inherit;\r\n    font-weight: 500;\r\n    line-height: 0.4;\r\n    color: inherit;\r\n  }\r\n  header {\r\n      height: 58px;\r\n      width: 100%;\r\n      background-color: #003955;\r\n      position: absolute;\r\n      top: 0;\r\n      left: 0;\r\n  }\r\n  .mat-toolbar-row, .mat-toolbar-single-row {\r\n    height: 226px;\r\n    margin-bottom: -35px;\r\n  }\r\n  \r\n  .left {\r\n      width: 50%;\r\n  }\r\n  .right {\r\n      width: 48%;\r\n  }\r\n  \r\n  body {\r\n      margin: 0;\r\n      font-family: Arial, Helvetica, sans-serif;\r\n    }\r\n    \r\n    .topnav {\r\n      overflow: hidden;\r\n    \r\n    }\r\n    \r\n    .topnav a {\r\n      float: left;\r\n      display: block;\r\n      color: #333 !important;\r\n      text-align: center;\r\n      padding: 14px 20px;\r\n      text-decoration: none;\r\n      font-size: 21px;\r\n    }\r\n    \r\n    .topnav a:hover {\r\n      background-color: #ddd;\r\n      color: black;\r\n    }\r\n    \r\n    .topnav a.active {\r\n      background-color: white;\r\n      color: black;\r\n    }\r\n    \r\n    .topnav .icon {\r\n      display: none;\r\n    }\r\n\r\n\r\n}\r\n\r\n\r\n\r\n/* } */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wYmFyL3RvcGJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7OztFQUlFO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixtQkFBVTtZQUFWLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCO0FBQ0Y7OztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLDBCQUEwQjtBQUM1Qjs7O0FBR0E7RUFDRSxrQ0FBa0M7RUFDbEMsbUNBQW1DO0VBQ25DLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsTUFBTTtBQUNOLFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLDBCQUEwQjtBQUMxQjtBQUNBO0dBQ0csZUFBZTtHQUNmLDBLQUEwSztHQUMxSyxvR0FBb0c7R0FDcEcsOENBQThDO0dBQzlDLDRCQUE0QjtBQUMvQjs7QUFFQTtFQUNFLGNBQWM7SUFDWixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLDJCQUFvQjtJQUFwQixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFD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bEIsa0JBQWtCO01BQ2xCLHFCQUFxQjtNQUNyQixlQUFlO0lBQ2pCOztJQUVBO01BQ0Usc0JBQXNCO01BQ3RCLFlBQVk7SUFDZDs7SUFFQTtNQUNFLHVCQUF1QjtNQUN2QixZQUFZO0lBQ2Q7O0lBRUE7TUFDRSxhQUFhO0lBQ2Y7OztBQUdKOzs7O0FBQ0csTUFBTSIsImZpbGUiOiJzcmMvYXBwL3RvcGJhci90b3BiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AbWVkaWEgc2NyZWVuIFxyXG5hbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDEyMDBweCkgXHJcbmFuZCAobWF4LWRldmljZS13aWR0aDogMTYwMHB4KSBcclxuYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEpIHsgXHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsZXg6IGF1dG87XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbiAgICAvKiB0b3A6IDEwcHg7ICovXHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgLyogYmFja2dyb3VuZDogd2hpdGU7ICovXHJcbiAgICBsaW5lLWhlaWdodDogMi41O1xyXG59XHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIC8qIGNvbG9yOiB3aGl0ZTsgKi9cclxuICBiYWNrZ3JvdW5kOiBib3R0b207XHJcbiAgbWFyZ2luLXRvcDogMTlweDtcclxuICBsaW5lLWhlaWdodDogMi41O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIC8qIHdpZHRoOiAxODBweDsgKi9cclxufVxyXG5zZWxlY3R7XHJcbiAgYmFja2dyb3VuZDojMDAzOTU1O1xyXG4gIGJvcmRlcjoxcHggc29saWQgIzAwMzk1NTtcclxuICBjb2xvcjp3aGl0ZVxyXG59XHJcblxyXG5cclxuLm1hdC10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxufVxyXG5cclxuXHJcbi5mYSwgLmZhYiwgLmZhbCwgLmZhciwgLmZhcyB7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBsaW5lLWhlaWdodDogMS45O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tcmlnaHQ6MTBweDtcclxufVxyXG5cclxuLnRvcF9pY29ucyB7XHJcbi8qIHdpZHRoOjUwJSAhaW1wb3J0YW50OyAqL1xyXG59XHJcbi5jZW50ZXJ7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG50b3A6IDA7XHJcbmxlZnQ6IDQwJTtcclxubGluZS1oZWlnaHQ6IDAuNztcclxuY29sb3I6IHdoaXRlO1xyXG5mb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5zZWxlY3QuY2xhc3NpYyB7XHJcbiAgIC8qIHRvcDogMzJweDsgKi9cclxuICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCA1MCUsICNlOGU4ZjEgNTAlKSwgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2VkZWRmMyA1MCUsIHRyYW5zcGFyZW50IDUwJSksIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzIyMjMyNCwgIzJmMzAzMCk7XHJcbiAgIGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoMTAwJSAtIDIzcHgpIGNhbGMoMWVtICsgMnB4KSwgY2FsYygxMDAlIC0gMTVweCkgY2FsYygxZW0gKyAycHgpLCAxMDAlIDQ3cHg7XHJcbiAgIGJhY2tncm91bmQtc2l6ZTogOHB4IDhweCwgOHB4IDhweCwgMi44ZW0gMi44ZW07XHJcbiAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7ICBcclxufVxyXG5cclxuc2VsZWN0Lm1hdC1pbnB1dC1lbGVtZW50IHtcclxuICBmb250OiBub3JtYWwgITtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDM5NTU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAvKiBmb250LXNpemU6IDE5cHg7ICovXHJcbiAgICBwYWRkaW5nLXRvcDogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAvKiBwYWRkaW5nLXRvcDogMWVtOyAqL1xyXG4gICAgdG9wOiAtMWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTFlbTtcclxufVxyXG4uaDEsIC5oMiwgLmgzLCAuaDQsIC5oNSwgLmg2LCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjQ7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuaGVhZGVyIHtcclxuICAgIGhlaWdodDogNThweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzk1NTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuLm1hdC10b29sYmFyLXJvdywgLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xyXG4gIGhlaWdodDogMjI2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTM1cHg7XHJcbn1cclxuXHJcbi5sZWZ0IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuLnJpZ2h0IHtcclxuICAgIHdpZHRoOiA0OCU7XHJcbn1cclxuXHJcbiAgXHJcbiAgLnRvcG5hdiB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAudG9wbmF2IGEge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3BuYXYgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAudG9wbmF2IGEuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAudG9wbmF2IC5pY29uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0gUmV0aW5hIFNjcmVlbnMgLS0tLS0tLS0tLS0gKi9cclxuQG1lZGlhIHNjcmVlbiBcclxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDEyMDBweCkgXHJcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxNjAwcHgpIFxyXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxyXG4gIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSkgeyBcclxuXHJcbiAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZmxleDogYXV0bztcclxuICAgICAgbWluLXdpZHRoOiAwO1xyXG4gICAgICAvKiB0b3A6IDEwcHg7ICovXHJcbiAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgbGVmdDogMjBweDtcclxuICAgICAgLyogYmFja2dyb3VuZDogd2hpdGU7ICovXHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICBmbGV4OiBhdXRvO1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG4gICAgdG9wOiAtNDFweDtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgXHJcbiAgICBsaW5lLWhlaWdodDogMjtcclxuICB9ICovXHJcbiAgXHJcbiAgLm1hdC10b29sYmFyIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5mYSwgLmZhYiwgLmZhbCwgLmZhciwgLmZhcyB7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuOTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1yaWdodDoxMHB4O1xyXG4gIH1cclxuICBcclxuICAudG9wX2ljb25zIHtcclxuICAvKiB3aWR0aDo1MCUgIWltcG9ydGFudDsgKi9cclxuICB9XHJcbiAgLmNlbnRlcntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiA0MCU7XHJcbiAgbGluZS1oZWlnaHQ6IDAuNztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIHNlbGVjdC5jbGFzc2ljIHtcclxuICAgICAvKiB0b3A6IDMycHg7ICovXHJcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCA1MCUsICNlOGU4ZjEgNTAlKSwgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2VkZWRmMyA1MCUsIHRyYW5zcGFyZW50IDUwJSksIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzIyMjMyNCwgIzJmMzAzMCk7XHJcbiAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMjNweCkgY2FsYygxZW0gKyAycHgpLCBjYWxjKDEwMCUgLSAxNXB4KSBjYWxjKDFlbSArIDJweCksIDEwMCUgNDdweDtcclxuICAgICBiYWNrZ3JvdW5kLXNpemU6IDhweCA4cHgsIDhweCA4cHgsIDIuOGVtIDIuOGVtO1xyXG4gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7ICBcclxuICB9XHJcbiAgXHJcbiAgc2VsZWN0Lm1hdC1pbnB1dC1lbGVtZW50IHtcclxuICAgIGZvbnQ6IG5vcm1hbCAhO1xyXG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzOTU1O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAvKiBmb250LXNpemU6IDE5cHg7ICovXHJcbiAgICAgIHBhZGRpbmctdG9wOiA3cHggIWltcG9ydGFudDtcclxuICAgICAgLyogcGFkZGluZy10b3A6IDFlbTsgKi9cclxuICAgICAgdG9wOiAtMWVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAtMWVtO1xyXG4gIH1cclxuICAuaDEsIC5oMiwgLmgzLCAuaDQsIC5oNSwgLmg2LCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjQ7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICB9XHJcbiAgaGVhZGVyIHtcclxuICAgICAgaGVpZ2h0OiA1OHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzk1NTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG4gIC5tYXQtdG9vbGJhci1yb3csIC5tYXQtdG9vbGJhci1zaW5nbGUtcm93IHtcclxuICAgIGhlaWdodDogMjI2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMzVweDtcclxuICB9XHJcbiAgXHJcbiAgLmxlZnQge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuICAucmlnaHQge1xyXG4gICAgICB3aWR0aDogNDglO1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRvcG5hdiB7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRvcG5hdiBhIHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50b3BuYXYgYTpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRvcG5hdiBhLmFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50b3BuYXYgLmljb24ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLSBHYWxheHkgUzQsIFM1IGFuZCBOb3RlIDMgLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qIFBvcnRyYWl0IGFuZCBMYW5kc2NhcGUgKi9cclxuQG1lZGlhIHNjcmVlbiBcclxuICBhbmQgKGRldmljZS13aWR0aDogMzIwcHgpIFxyXG4gIGFuZCAoZGV2aWNlLWhlaWdodDogNjQwcHgpIFxyXG4gIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZmxleDogYXV0bztcclxuICAgICAgbWluLXdpZHRoOiAwO1xyXG4gICAgICAvKiB0b3A6IDEwcHg7ICovXHJcbiAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgbGVmdDogMjBweDtcclxuICAgICAgLyogYmFja2dyb3VuZDogd2hpdGU7ICovXHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICBmbGV4OiBhdXRvO1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG4gICAgdG9wOiAtNDFweDtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgXHJcbiAgICBsaW5lLWhlaWdodDogMjtcclxuICB9ICovXHJcbiAgXHJcbiAgLm1hdC10b29sYmFyIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5mYSwgLmZhYiwgLmZhbCwgLmZhciwgLmZhcyB7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuOTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1yaWdodDoxMHB4O1xyXG4gIH1cclxuICBcclxuICAudG9wX2ljb25zIHtcclxuICAvKiB3aWR0aDo1MCUgIWltcG9ydGFudDsgKi9cclxuICB9XHJcbiAgLmNlbnRlcntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiA0MCU7XHJcbiAgbGluZS1oZWlnaHQ6IDAuNztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIHNlbGVjdC5jbGFzc2ljIHtcclxuICAgICAvKiB0b3A6IDMycHg7ICovXHJcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCA1MCUsICNlOGU4ZjEgNTAlKSwgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2VkZWRmMyA1MCUsIHRyYW5zcGFyZW50IDUwJSksIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzIyMjMyNCwgIzJmMzAzMCk7XHJcbiAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMjNweCkgY2FsYygxZW0gKyAycHgpLCBjYWxjKDEwMCUgLSAxNXB4KSBjYWxjKDFlbSArIDJweCksIDEwMCUgNDdweDtcclxuICAgICBiYWNrZ3JvdW5kLXNpemU6IDhweCA4cHgsIDhweCA4cHgsIDIuOGVtIDIuOGVtO1xyXG4gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7ICBcclxuICB9XHJcbiAgXHJcbiAgc2VsZWN0Lm1hdC1pbnB1dC1lbGVtZW50IHtcclxuICAgIGZvbnQ6IG5vcm1hbCAhO1xyXG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzOTU1O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAvKiBmb250LXNpemU6IDE5cHg7ICovXHJcbiAgICAgIHBhZGRpbmctdG9wOiA3cHggIWltcG9ydGFudDtcclxuICAgICAgLyogcGFkZGluZy10b3A6IDFlbTsgKi9cclxuICAgICAgdG9wOiAtMWVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAtMWVtO1xyXG4gIH1cclxuICAuaDEsIC5oMiwgLmgzLCAuaDQsIC5oNSwgLmg2LCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjQ7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICB9XHJcbiAgaGVhZGVyIHtcclxuICAgICAgaGVpZ2h0OiA1OHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzk1NTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG4gIC5tYXQtdG9vbGJhci1yb3csIC5tYXQtdG9vbGJhci1zaW5nbGUtcm93IHtcclxuICAgIGhlaWdodDogMjI2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMzVweDtcclxuICB9XHJcbiAgXHJcbiAgLmxlZnQge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuICAucmlnaHQge1xyXG4gICAgICB3aWR0aDogNDglO1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRvcG5hdiB7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRvcG5hdiBhIHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50b3BuYXYgYTpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRvcG5hdiBhLmFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50b3BuYXYgLmljb24ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuICAgLyogfSAqL1xyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/topbar/topbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/topbar/topbar.component.ts ***!
    \********************************************/

  /*! exports provided: TopbarComponent */

  /***/
  function srcAppTopbarTopbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopbarComponent", function () {
      return TopbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");

    var TopbarComponent =
    /*#__PURE__*/
    function () {
      function TopbarComponent(translate, title, apiservices) {
        _classCallCheck(this, TopbarComponent);

        this.translate = translate;
        this.title = title;
        this.apiservices = apiservices;
      }

      _createClass(TopbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.translate.addLangs(['English', 'Spanish']);
          this.translate.setDefaultLang('English');
          var browserLang = this.translate.getBrowserLang();
          this.translate.use(browserLang.match(/English|Spanish/) ? browserLang : 'English');
          console.log(this.translate);
        }
      }, {
        key: "setTheTitle",
        value: function setTheTitle() {
          this.title.setTitle(this.pageTitle);
        }
      }]);

      return TopbarComponent;
    }();

    TopbarComponent.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }];
    };

    TopbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-topbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./topbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/topbar/topbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./topbar.component.css */
      "./src/app/topbar/topbar.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])], TopbarComponent);
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
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
    /*! F:\Rinky\projects\Tapp\tapp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map