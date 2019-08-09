(function() {
    app.filter('range', function() {
        return function(input, min, max) {
            min = 15; //Make string input int
            max = 480;
            for (var i=min; i<=max; i=i+15)
                input.push(i);
            return input;
        };
    });
})();