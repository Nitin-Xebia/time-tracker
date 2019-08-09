/**
 * Author
 * Nitin Shinde (XEBIA IT ARCHITECTS IND. PVT. LTD.)
 * Created on 08/08/2019
 * Last Updated on 08/08/2019
 */
(function() {
    app.service("trackerService", function($http) {
        var config = {};

        return {
            setup: function(localConfig) {
                config = angular.extend(config, localConfig);
                return this;
            },

            fetchData: function() {
                return $http({
                    method: 'GET',
                    url: config.fetchDataEndPoint,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
            },

            // As I am using direct JSON, POST method not working. So Using "GET"
            saveTask: function(data) {
                data = data || "";
                return $http({
                    method: 'GET',
                    data: data,
                    url: config.saveTaskEndPoint,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
            }
        };
    });
})();