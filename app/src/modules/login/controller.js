/**
 * Author
 * Nitin Shinde (XEBIA IT ARCHITECTS IND. PVT. LTD.)
 * Created on 08/08/2019
 * Last Updated on 08/08/2019
 */
(function() {
    app.controller("loginCtrl", function($scope, $location) {
        var ctrl = this;

        
        ctrl.initialise = function() {
            ctrl.username = "";
            ctrl.password = "";
        }

        ctrl.onSubmit = function(loginForm) {
            loginForm.submitted = true;

            if (ctrl.username === 'admin' && ctrl.username === 'admin') {
                $location.path("/adminDashboard");
            }
            if (ctrl.username === 'user' && ctrl.username === 'user') {
                $location.path("/userDashboard");
            }


        }
        ctrl.initialise();

    });
})();