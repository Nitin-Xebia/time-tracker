/**
 * Author
 * Nitin Shinde (XEBIA IT ARCHITECTS IND. PVT. LTD.)
 * Created on 08/08/2019
 * Last Updated on 08/08/2019
 */

var app = angular.module("timeTracker", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'src/modules/home/home.html'
		})
		.when('/login', {
			templateUrl: 'src/modules/login/template.html',
			controller: 'loginCtrl as ctrl'
        })
        .when('/adminDashboard', {
			templateUrl: 'src/modules/adminDashboard/template.html',
			controller: 'loginCtrl'
        })
        .when('/userDashboard', {
			templateUrl: 'src/modules/userDashboard/template.html',
			controller: 'addTaskCtrl as ctrl'
		})
		.otherwise({
			redirectTo: '/home'
		});
});
	