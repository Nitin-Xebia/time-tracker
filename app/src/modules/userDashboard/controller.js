/**
 * Author
 * Nitin Shinde (XEBIA IT ARCHITECTS IND. PVT. LTD.)
 * Created on 08/08/2019
 * Last Updated on 08/08/2019
 */
(function() {
    app.controller("addTaskCtrl", function($scope, $filter, $timeout, trackerService) {
        const categoryCode = "#c12020";
        var ctrl = this;

        
        var _getData = function() {
            trackerService.setup({ fetchDataEndPoint: "/src/mock/trackerData.json" })
                .fetchData()
                .then(function(response) {
                    ctrl.tasks = response.data.tasks;
                    ctrl.task = ctrl.tasks[0];
                    
                    ctrl.subActivities = ctrl.task.subActivities;
                    ctrl.subActivity = ctrl.subActivities[0];
                })
        }
        ctrl.initialise = function() {

            _getData();

            ctrl.date = new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate());
        }

        ctrl.onActivityChange = function(task) {
            ctrl.task;

            ctrl.subActivity=ctrl.task.subActivities[0];
            // $scope.$apply();
        }

        ctrl.initialise();

        ctrl.minDate = function() {
            var minDate = new Date();
            minDate.setMonth(minDate.getMonth() - 3);

            return minDate;
        }
        ctrl.maxDate = function() {
            return $filter('date')(new Date(), 'yyyy-MM-dd');
        }

        ctrl.onOOOstatusChange = function() {
            if (ctrl.outofoffice) {
                ctrl.comment = "OOO";
                ctrl.task = null;
                ctrl.subActivity = null;
                ctrl.timeSpan = 480;
            } else {
                ctrl.comment = "";
                ctrl.task = ctrl.tasks[0];
                ctrl.subActivities = ctrl.task.subActivities;
                ctrl.subActivity = ctrl.subActivities[0];
                ctrl.timeSpan = 15;
            }
        }

        ctrl.onSubmit = function(addTaskForm) {
            addTaskForm.submitted = true;
            if (addTaskForm.$valid) {
                var data = {
                    date: ctrl.date,
                    taskTime: ctrl.timeSpan,
                    comment: ctrl.comment,
                    ooo: ctrl.outofoffice
                }
                ctrl.outofoffice ? null : (data.activity = ctrl.task.id, data.subActivity=ctrl.subActivity);

                trackerService.setup({ saveTaskEndPoint: "/src/mock/saveTask.json" })
                    .saveTask()
                    .then(function(response) {
                        ctrl.task = ctrl.tasks[0];
                        ctrl.subActivities = ctrl.task.subActivities;
                        ctrl.subActivity = ctrl.subActivities[0];
                        ctrl.comment = "";
                        ctrl.outofoffice = false;
                        ctrl.timeSpan = "";
                        ctrl.date = new Date();
                        addTaskForm.submitted = false;
                        ctrl.showToast = true;
                        $timeout(function() {
                            ctrl.showToast = false;
                        }, 3000)
                    })
            }

        }

    });

})();