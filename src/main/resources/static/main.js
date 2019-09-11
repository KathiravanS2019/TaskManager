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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/addproject/addproject.component.css":
/*!*****************************************************!*\
  !*** ./src/app/addproject/addproject.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHByb2plY3QvYWRkcHJvamVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/addproject/addproject.component.html":
/*!******************************************************!*\
  !*** ./src/app/addproject/addproject.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h2>Task Manager</h2>\n\t<ul class=\"nav nav-tabs\">\n\t\t<li class=\"nav-item\"><a class=\"nav-link active\" href=\"#addProject\">Add Project</a></li>\n\t\t<li class=\"nav-item\"><a [routerLink]=\"['/addTask']\">Add Task</a></li>\n\t\t<li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/addUser']\">Add User</a></li>\n\t\t<li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/tasks']\">View Task</a></li>\n\t</ul>\n\n\t<div class=\"row\">\n\t\t<form #addProjectForm=\"ngForm\">\n\t\t\t<div class=\"form-group row\">\n\t\t\t\t<label for=\"project\" class=\"col-sm-2 col-form-label\">Project:</label>\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"project\" [(ngModel)]=\"project.project\" name=\"projectName\">\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group row\">\n\t\t\t\t<label for=\"startDate\" class=\"col-sm-2 col-form-label\">Start Date:</label>\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<input type=\"date\" class=\"form-control\" id=\"startDate\" [(ngModel)]=\"project.startDate\" name=\"startDate\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group row\">\n\t\t\t\t<label for=\"endDate\" class=\"col-sm-2 col-form-label\">End Date:</label>\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<input type=\"date\" class=\"form-control\" id=\"endDate\" [(ngModel)]=\"project.endDate\" name=\"endDate\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\n\t\t\t<div class=\"form-group row\">\n\t\t\t\t<label for=\"priority\" class=\"col-sm-2 col-form-label\">Priority:</label>\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<input type=\"range\" class=\"form-control\" id=\"priority\" name=\"priority\" [(ngModel)]=\"project.priority\">\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group row\">\n\t\t\t\t<label for=\"project\" class=\"col-sm-2 col-form-label\">Manager:</label>\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" [value]=\"selectedUser\">\n\t\t\t\t</div>\n\t\t\t\t<button type=\"submit\" class=\"btn btn-secondary\" (click)=\"searchUser()\">Search</button>\n\t\t\t</div>\n\t\t\t\n\t\t\t<button type=\"submit\" class=\"btn btn-secondary\" (click)=\"saveProject()\">Add</button>\n\t\t\t<button type=\"submit\" class=\"btn btn-secondary\" (click)=\"resetProject(addProjectForm)\">Reset</button>\n\t\t</form>\n\t\t<br />\n\t\t<hr />\n\t\t<section>\n\t\t\t<div class=\"form-horizontal\">\n\t\t\t\t<div class=\"row form-group\">\n\t\t\t\t\t<div class=\"col col-sm-10\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [value]=\"searchValue\" [(ngModel)]=\"searchText\" name=\"projectSearch\" id=\"projectSearch\" />\n\t\t\t\t\t\t Sort By:\n\t\t\t\t\t\t\t<input type=\"button\" class=\"btn btn-primary\" value=\"Start Date\" (click)=\"sort('startDate','date')\" />\n\t\t\t\t\t\t\t<input type=\"button\" class=\"btn btn-primary\" value=\"End Date\" (click)=\"sort('endDate','date')\" />\n\t\t\t\t\t\t\t<input type=\"button\" class=\"btn btn-primary\" value=\"Priority\" (click)=\"sort('priority','number')\" />\n\t\t\t\t\t\t\t<input type=\"button\" class=\"btn btn-primary\" value=\"Complete\" (click)=\"sort('priority','number')\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\t\t<div class=\"row\">\n\t\t\t<div *ngFor=\"let project of projects\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=row>Project: {{project.project}}</div>\n\t\t\t\t\t<div class=row>\n\t\t\t\t\t\tNo of Tasks: {{getTaskNumber(project.projectId)}} \n\t\t\t\t\t\tCompleted: {{getCompleted(project.startDate, project.endDate)}}\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=row>\n\t\t\t\t\t\tStart Date: {{getDate(project.startDate)}} \n\t\t\t\t\t\tEnd Date: {{getDate(project.endDate)}}</div>\n\t\t\t\t\t<div>Priority: {{project.priority}}</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<button class=\"btn btn-secondary\" [routerLink]=\"['/editProject',project.projectId]\">Update</button>\n\t\t\t\t\t\t<button class=\"btn btn-secondary\" (click)=\"suspendProject(project.projectId)\">Suspend</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<script type=\"text/javascript\">\n\t$(document).ready(function() {\n\t\t$(\".nav-tabs a\").click(function() {\n\t\t\t$(this).tab('show');\n\t\t});\n\t});\n</script>"

/***/ }),

/***/ "./src/app/addproject/addproject.component.ts":
/*!****************************************************!*\
  !*** ./src/app/addproject/addproject.component.ts ***!
  \****************************************************/
/*! exports provided: AddprojectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddprojectComponent", function() { return AddprojectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AddprojectComponent = /** @class */ (function () {
    function AddprojectComponent(http, router) {
        this.http = http;
        this.router = router;
        this.project = {};
    }
    AddprojectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/projectsList').subscribe(function (data) {
            _this.projects = data;
        });
    };
    AddprojectComponent.prototype.saveProject = function () {
        var _this = this;
        this.http.post('/saveProject', this.project).subscribe(function (res) {
            _this.router.navigate(['/addProject', res]);
            _this.project = {};
        }, function (err) {
            console.log(err);
        });
    };
    AddprojectComponent.prototype.resetProjectForm = function (addProjectForm) {
        addProjectForm.resetForm();
    };
    AddprojectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addproject',
            template: __webpack_require__(/*! ./addproject.component.html */ "./src/app/addproject/addproject.component.html"),
            styles: [__webpack_require__(/*! ./addproject.component.css */ "./src/app/addproject/addproject.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddprojectComponent);
    return AddprojectComponent;
}());



/***/ }),

/***/ "./src/app/addtask/addtask.component.css":
/*!***********************************************!*\
  !*** ./src/app/addtask/addtask.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHRhc2svYWRkdGFzay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/addtask/addtask.component.html":
/*!************************************************!*\
  !*** ./src/app/addtask/addtask.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h2>Task Manager</h2>\n\t<ul class=\"nav nav-tabs\">\n\t\t<li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/addProject']\">Add Project</a></li>\n\t\t<li class=\"nav-item\"><a class=\"nav-link active\" href=\"#addtask\">Add Task</a></li>\n\t\t<li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/addUser']\">Add User</a></li>\n\t\t<li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/tasks']\">View Task</a></li>\n\t</ul>\n\n\t<div class=\"row\">\n\t\t<form #addTaskForm=\"ngForm\">\n\t\t\t<div class=\"form-group row\">\n\t\t\t\t<label for=\"task\" class=\"col-sm-2 col-form-label\">Task:</label>\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"task\" [(ngModel)]=\"task.task\" name=\"taskName\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group row\">\n\t\t\t\t<label for=\"priority\" class=\"col-sm-2 col-form-label\">Priority:</label>\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<input type=\"range\" class=\"custom-range\" id=\"priority\" name=\"priority\" [(ngModel)]=\"task.priority\" name=\"priority\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group row\">\n\t\t\t\t<label for=\"parentTask\" class=\"col-sm-2 col-form-label\">Parent\n\t\t\t\t\tTask:</label>\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"parentTask\"\n\t\t\t\t\t\t[(ngModel)]=\"task.parentTask\" name=\"parentTask\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group row\">\n\t\t\t\t<label for=\"startDate\" class=\"col-sm-2 col-form-label\">Start\n\t\t\t\t\tDate:</label>\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<input type=\"date\" class=\"form-control\" id=\"startDate\"\n\t\t\t\t\t\t[(ngModel)]=\"task.startDate\" name=\"startDate\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group row\">\n\t\t\t\t<label for=\"endDate\" class=\"col-sm-2 col-form-label\">End\n\t\t\t\t\tDate:</label>\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<input type=\"date\" class=\"form-control\" id=\"endDate\"\n\t\t\t\t\t\t[(ngModel)]=\"task.endDate\" name=\"endDate\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<button type=\"submit\" class=\"btn btn-secondary\" (click)=\"saveTask()\">Add\n\t\t\t\tTask</button>\n\t\t\t<button type=\"submit\" class=\"btn btn-secondary\"\n\t\t\t\t(click)=\"resetTask(addTaskForm)\">Reset</button>\n\t\t</form>\n\t</div>\n</div>\n<script type=\"text/javascript\">\n\t$(document).ready(function() {\n\t\t$(\".nav-tabs a\").click(function() {\n\t\t\t$(this).tab('show');\n\t\t});\n\t});\n</script>"

/***/ }),

/***/ "./src/app/addtask/addtask.component.ts":
/*!**********************************************!*\
  !*** ./src/app/addtask/addtask.component.ts ***!
  \**********************************************/
/*! exports provided: AddtaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtaskComponent", function() { return AddtaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AddtaskComponent = /** @class */ (function () {
    function AddtaskComponent(http, router) {
        this.http = http;
        this.router = router;
        this.task = {};
    }
    AddtaskComponent.prototype.ngOnInit = function () {
    };
    AddtaskComponent.prototype.saveTask = function () {
        var _this = this;
        this.http.post('/saveTask', this.task).subscribe(function (res) {
            _this.router.navigate(['/addUser', res]);
            _this.task = {};
        }, function (err) {
            console.log(err);
        });
    };
    AddtaskComponent.prototype.resetTaskForm = function (addTaskForm) {
        addTaskForm.resetForm();
    };
    AddtaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addtask',
            template: __webpack_require__(/*! ./addtask.component.html */ "./src/app/addtask/addtask.component.html"),
            styles: [__webpack_require__(/*! ./addtask.component.css */ "./src/app/addtask/addtask.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddtaskComponent);
    return AddtaskComponent;
}());



/***/ }),

/***/ "./src/app/adduser/adduser.component.css":
/*!***********************************************!*\
  !*** ./src/app/adduser/adduser.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHVzZXIvYWRkdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/adduser/adduser.component.html":
/*!************************************************!*\
  !*** ./src/app/adduser/adduser.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h2>Add User</h2>\n\t<ul class=\"nav nav-tabs\">\n\t\t<li class=\"nav-item\"><a class=\"nav-link\"\n\t\t\t[routerLink]=\"['/addProject']\">Add Project</a></li>\n\t\t<li class=\"nav-item\"><a [routerLink]=\"['/addTask']\">Add Task</a></li>\n\t\t<li class=\"nav-item\"><a class=\"nav-link active\" href=\"#addUser\">Add\n\t\t\t\tUser</a></li>\n\t\t<li class=\"nav-item\"><a class=\"nav-link\"\n\t\t\t[routerLink]=\"['/tasks']\">View Task</a></li>\n\t</ul>\n\n\t<div class=\"row\">\n\t\t<form #addUserForm=\"ngForm\">\n\t\t\t<div class=\"form-group row\">\n\t\t\t\t<label for=\"firstName\" class=\"col-sm-2 col-form-label\">First Name:</label>\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"firstName\" [(ngModel)]=\"user.firstName\" name=\"firstName\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"form-group row\">\n\t\t\t\t<label for=\"lastName\" class=\"col-sm-2 col-form-label\">Last Name:</label>\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"lastName\" [(ngModel)]=\"user.lastName\" name=\"lastName\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group row\">\n\t\t\t\t<label for=\"employeeID\" class=\"col-sm-2 col-form-label\">Employee ID:</label>\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"employeeID\" [(ngModel)]=\"user.employeeID\" name=\"employeeID\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<button type=\"submit\" class=\"btn btn-secondary\" (click)=\"saveUser()\">Add</button>\n\t\t\t<button type=\"submit\" class=\"btn btn-secondary\" (click)=\"resetUser(addUserForm)\">Reset</button>\n\t\t</form>\n\t\t<br />\n\t\t<hr />\n\t\t<section>\n\t\t\t<div class=\"form-horizontal\">\n\t\t\t\t<div class=\"row form-group\">\n\t\t\t\t\t<div class=\"col col-sm-10\">\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"searchText\" name=\"firstName1\" size=\"45\">&nbsp;\n\t\t\t\t\t\t Sord By:\n\t\t\t\t\t\t\t<input type=\"button\" class=\"btn btn-primary\" value=\"First Name\" (click)=\"sortBy('firstName')\" />\n\t\t\t\t\t\t\t<input type=\"button\" class=\"btn btn-primary\" value=\"Last Name\" (click)=\"sortBy('lastName')\" />\n\t\t\t\t\t\t\t<input type=\"button\" class=\"btn btn-primary\" value=\"Employee ID\" (click)=\"sortBy('employeeId')\" />\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\t\t<form #userManager=\"ngForm\">\n\t\t<table class=\"table\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th>First Name</th>\n\t\t\t\t\t<th>Last Name</th>\n\t\t\t\t\t<th>Employee ID</th>\n\t\t\t\t\t<th>Action</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let user of users\">\n\t\t\t\t\t<td>{{user.firstName}}</td>\n\t\t\t\t\t<td>{{user.lastName}}</td>\n\t\t\t\t\t<td>{{user.employeeID}}</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<a [routerLink]=\"['/editUser',user.id]\" class=\"btn btn-success\">Edit</a>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\"\n\t\t\t\t\t\t\t\t(click)=\"deleteUser(user.id)\">End Task</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</form>\n\t\t\n\t</div>\n</div>\n<script type=\"text/javascript\">\n\t$(document).ready(function() {\n\t\t$(\".nav-tabs a\").click(function() {\n\t\t\t$(this).tab('show');\n\t\t});\n\t});\n</script>"

/***/ }),

/***/ "./src/app/adduser/adduser.component.ts":
/*!**********************************************!*\
  !*** ./src/app/adduser/adduser.component.ts ***!
  \**********************************************/
/*! exports provided: AdduserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdduserComponent", function() { return AdduserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AdduserComponent = /** @class */ (function () {
    function AdduserComponent(http, router) {
        this.http = http;
        this.router = router;
        this.user = {};
    }
    AdduserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/usersList').subscribe(function (data) {
            _this.users = data;
        });
    };
    AdduserComponent.prototype.saveUser = function () {
        var _this = this;
        this.http.post('/saveUser', this.user).subscribe(function (res) {
            _this.router.navigate(['/addUser', res]);
            _this.user = {};
        }, function (err) {
            console.log(err);
        });
    };
    AdduserComponent.prototype.resetUserForm = function (addUserForm) {
        addUserForm.resetForm();
    };
    AdduserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adduser',
            template: __webpack_require__(/*! ./adduser.component.html */ "./src/app/adduser/adduser.component.html"),
            styles: [__webpack_require__(/*! ./adduser.component.css */ "./src/app/adduser/adduser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdduserComponent);
    return AdduserComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container-fluid\">\r\n\t<div class=\"page-header\">\r\n\t\t<h2>\r\n\t\t\t<b>{{title}}</b>\r\n\t\t</h2>\r\n\t</div>\r\n</div>\r\n<nav class=\"navbar navbar-inverse\">\r\n\t<div class=\"container-fluid\">\r\n\t\t<ul class=\"nav navbar-nav\">\r\n\t\t\t<li><a routerLink=\"/addProject\">Add Project</a></li>\r\n\t\t\t<li><a routerLink=\"/addTask\">Add Task</a></li>\r\n\t\t\t<li><a routerLink=\"/addUser\">Add User</a></li>\r\n\t\t\t<li><a routerLink=\"/viewTask\">View Task</a></li>\r\n\t\t</ul>\r\n\t</div>\r\n</nav> -->\r\n<div class=\"container\">\r\n\t<section>\r\n\t\t<router-outlet></router-outlet>\r\n\t</section>\r\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tm_tm_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tm/tm.component */ "./src/app/tm/tm.component.ts");
/* harmony import */ var _addtask_addtask_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addtask/addtask.component */ "./src/app/addtask/addtask.component.ts");
/* harmony import */ var _edittask_edittask_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edittask/edittask.component */ "./src/app/edittask/edittask.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./adduser/adduser.component */ "./src/app/adduser/adduser.component.ts");
/* harmony import */ var _addproject_addproject_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./addproject/addproject.component */ "./src/app/addproject/addproject.component.ts");














var appRoutes = [
    {
        path: 'tasks',
        component: _tm_tm_component__WEBPACK_IMPORTED_MODULE_8__["TmComponent"],
        data: { title: 'Add Task' }
    },
    {
        path: 'addTask',
        component: _addtask_addtask_component__WEBPACK_IMPORTED_MODULE_9__["AddtaskComponent"],
        data: { title: 'Add Task' }
    },
    {
        path: 'editTask/:id',
        component: _edittask_edittask_component__WEBPACK_IMPORTED_MODULE_10__["EdittaskComponent"],
        data: { title: 'Task Edit' }
    },
    {
        path: 'addUser',
        component: _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_12__["AdduserComponent"],
        data: { title: 'Add User' }
    },
    {
        path: 'addProject',
        component: _addproject_addproject_component__WEBPACK_IMPORTED_MODULE_13__["AddprojectComponent"],
        data: { title: 'Add Project' }
    },
    { path: '',
        redirectTo: '/tasks',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _tm_tm_component__WEBPACK_IMPORTED_MODULE_8__["TmComponent"],
                _addtask_addtask_component__WEBPACK_IMPORTED_MODULE_9__["AddtaskComponent"],
                _edittask_edittask_component__WEBPACK_IMPORTED_MODULE_10__["EdittaskComponent"],
                _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_12__["AdduserComponent"],
                _addproject_addproject_component__WEBPACK_IMPORTED_MODULE_13__["AddprojectComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, { enableTracing: true })
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/edittask/edittask.component.css":
/*!*************************************************!*\
  !*** ./src/app/edittask/edittask.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXR0YXNrL2VkaXR0YXNrLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/edittask/edittask.component.html":
/*!**************************************************!*\
  !*** ./src/app/edittask/edittask.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n   <h2>Task Manager</h2>\n   <ul class=\"nav nav-tabs\">\n   \t<li class=\"nav-item\"><a class=\"nav-link active\" href=\"#edittask\">Edit Task</a></li>\n   \t<li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/tasks']\">View Task</a></li>\n   </ul>\n   \n   <div class=\"row\">\n\t\t\t<form  #addTaskForm=\"ngForm\">\n\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t<label for=\"task\" class=\"col-sm-2 col-form-label\">Task:</label>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"task\" [(ngModel)]=\"task.task\" name=\"taskName\" >\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t<label for=\"priority\" class=\"col-sm-2 col-form-label\">Priority:</label>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<input type=\"range\" class=\"custom-range\" id=\"priority\"\n\t\t\t\t\t\t\tname=\"priority\" [(ngModel)]=\"task.priority\" name=\"priority\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t<label for=\"parentTask\" class=\"col-sm-2 col-form-label\">Parent\n\t\t\t\t\t\tTask:</label>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"parentTask\" [(ngModel)]=\"task.parentTask\" name=\"parentTask\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t<label for=\"startDate\" class=\"col-sm-2 col-form-label\">Start\n\t\t\t\t\t\tDate:</label>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<input type=\"date\" class=\"form-control\" id=\"startDate\" [(ngModel)]=\"task.startDate\" name=\"startDate\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<button type=\"submit\" class=\"btn btn-secondary\" (click)=\"updateTask(task.id)\">Update</button>\n\t\t\t\t<button type=\"submit\" class=\"btn btn-secondary\" (click)=\"resetTask()\">Cancel</button>\n\t\t\t</form>\n\t</div>\n</div>\n<script type=\"text/javascript\">\n$(document).ready(function(){\n\t$(\".nav-tabs a\").click(function (){\n\t\t$(this).tab('show');\n\t});\n});\n</script>"

/***/ }),

/***/ "./src/app/edittask/edittask.component.ts":
/*!************************************************!*\
  !*** ./src/app/edittask/edittask.component.ts ***!
  \************************************************/
/*! exports provided: EdittaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdittaskComponent", function() { return EdittaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var EdittaskComponent = /** @class */ (function () {
    function EdittaskComponent(http, router, route, datePipe) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.datePipe = datePipe;
        this.task = {};
    }
    EdittaskComponent.prototype.ngOnInit = function () {
        this.getTask(this.route.snapshot.params['id']);
    };
    EdittaskComponent.prototype.getTask = function (id) {
        var _this = this;
        this.http.get('/getTaskById/' + id).subscribe(function (data) {
            _this.task = data;
            _this.updateDateFormat(_this.task);
        });
    };
    EdittaskComponent.prototype.updateDateFormat = function (task) {
        task.startDate = this.datePipe.transform(task.startDate, "yyyy-MM-dd");
    };
    EdittaskComponent.prototype.updateTask = function (id) {
        var _this = this;
        this.http.post('/updateTask/' + id, this.task).subscribe(function (res) {
            _this.router.navigate(['/tasks', res]);
        }, function (err) {
            console.log(err);
        });
    };
    EdittaskComponent.prototype.resetTask = function () {
        this.getTask(this.route.snapshot.params['id']);
    };
    EdittaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edittask',
            template: __webpack_require__(/*! ./edittask.component.html */ "./src/app/edittask/edittask.component.html"),
            styles: [__webpack_require__(/*! ./edittask.component.css */ "./src/app/edittask/edittask.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]])
    ], EdittaskComponent);
    return EdittaskComponent;
}());



/***/ }),

/***/ "./src/app/tm/tm.component.css":
/*!*************************************!*\
  !*** ./src/app/tm/tm.component.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RtL3RtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/tm/tm.component.html":
/*!**************************************!*\
  !*** ./src/app/tm/tm.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<h2>Task Manager</h2>\r\n\t<nav class=\"navbar navbar-inverse\">\r\n\t\t<div class=\"container-fluid\">\r\n\t\t\t<ul class=\"nav navbar-nav\">\r\n\t\t\t\t<li><a [routerLink]=\"['/addProject']\">Add Project</a></li>\r\n\t\t\t\t<li><a [routerLink]=\"['/addTask']\">Add Task</a></li>\r\n\t\t\t\t<li><a [routerLink]=\"['/addUser']\">Add User</a></li>\r\n\t\t\t\t<li><a href=\"#viewTask\">View Task</a></li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</nav>\r\n\t<form #searchForm=\"ngForm\">\r\n\t\t<table class=\"table\">\r\n\t\t\t<tr>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<td><label for=\"task\">Task: </label>&nbsp; <input type=\"text\"\r\n\t\t\t\t\t\t[(ngModel)]=\"searchTask.task\" name=\"taskName\" size=\"45\">&nbsp;\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td><label for=\"parentTask\">Parent Task: </label>&nbsp; <input\r\n\t\t\t\t\t\ttype=\"text\" [(ngModel)]=\"searchTask.parentTask\" name=\"parentTask\"\r\n\t\t\t\t\t\tsize=\"45\">&nbsp;</td>\r\n\t\t\t\t</div>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<td><label for=\"priorityFrom\">Priority From : </label>&nbsp; <input\r\n\t\t\t\t\t\ttype=\"text\" [(ngModel)]=\"searchTask.priorityFrom\"\r\n\t\t\t\t\t\tname=\"priorityFrom\" size=\"10\">&nbsp; <label\r\n\t\t\t\t\t\tfor=\"priorityTo\">Priority To:</label>&nbsp; <input type=\"text\"\r\n\t\t\t\t\t\t[(ngModel)]=\"searchTask.priorityTo\" name=\"priorityTo\" size=\"10\">&nbsp;\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td><label for=\"startDate\">Start Date</label>&nbsp; <input\r\n\t\t\t\t\t\ttype=\"date\" [(ngModel)]=\"searchTask.startDate\" name=\"startDate\" />&nbsp;\r\n\t\t\t\t\t\t<label for=\"endDate\">End Date:</label>&nbsp; <input type=\"date\"\r\n\t\t\t\t\t\t[(ngModel)]=\"searchTask.endDate\" name=\"endDate\"></td>\r\n\t\t\t\t</div>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\"\r\n\t\t\t\t\t\t\t(click)=\"searchTaskDetails()\">Search</button>\r\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\"\r\n\t\t\t\t\t\t\t(click)=\"clearSearchTaskDetails()\">Clear</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\r\n\r\n\t\t</table>\r\n\t</form>\r\n\t<form #taskManager=\"ngForm\">\r\n\t\t<table class=\"table\">\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\r\n\t\t\t\t\t<th>Task</th>\r\n\t\t\t\t\t<th>Parent Task</th>\r\n\t\t\t\t\t<th>Priority</th>\r\n\t\t\t\t\t<th>Start Date</th>\r\n\t\t\t\t\t<th>End Date</th>\r\n\t\t\t\t\t<th>Action</th>\r\n\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\r\n\t\t\t\t<tr *ngFor=\"let task of tasks\">\r\n\t\t\t\t\t<td>{{task.task}}</td>\r\n\t\t\t\t\t<td>{{task.parentTask}}</td>\r\n\t\t\t\t\t<td>{{task.priority}}</td>\r\n\t\t\t\t\t<td>{{task.startDate | date: 'yyyy-MM-dd'}}</td>\r\n\t\t\t\t\t<td>{{task.endDate | date : 'yyyy-MM-dd'}}</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<div *ngIf=\"task.endDate == null\">\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['/editTask',task.id]\" class=\"btn btn-success\">Edit</a>\r\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\"\r\n\t\t\t\t\t\t\t\t(click)=\"endTask(task.id)\">End Task</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n\t</form>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/tm/tm.component.ts":
/*!************************************!*\
  !*** ./src/app/tm/tm.component.ts ***!
  \************************************/
/*! exports provided: TmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmComponent", function() { return TmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TmComponent = /** @class */ (function () {
    function TmComponent(http, router) {
        this.http = http;
        this.router = router;
        this.searchTask = {};
    }
    TmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/tasksList').subscribe(function (data) {
            _this.tasks = data;
        });
    };
    TmComponent.prototype.endTask = function (id) {
        var _this = this;
        this.http.get('/endTask/' + id).subscribe(function (res) {
            _this.tasks = res;
        });
    };
    TmComponent.prototype.searchTaskDetails = function () {
        var _this = this;
        this.http.post('/searchTask', this.searchTask).subscribe(function (res) {
            _this.tasks = res;
        });
    };
    TmComponent.prototype.clearSearchTaskDetails = function () {
        var _this = this;
        this.searchTask = {};
        this.http.get('/tasksList').subscribe(function (data) {
            _this.tasks = data;
        });
    };
    TmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-tm',
            template: __webpack_require__(/*! ./tm.component.html */ "./src/app/tm/tm.component.html"),
            styles: [__webpack_require__(/*! ./tm.component.css */ "./src/app/tm/tm.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TmComponent);
    return TmComponent;
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\workspace\TaskManager\TaskManager\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map