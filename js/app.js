var appSpeedTouch = angular.module('appSpeedTouch', ['ngRoute', 'ui.bootstrap', 'speedTouchCtrl']);


appSpeedTouch.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/index', {
            templateUrl: 'view/index.html',
            controller: 'MainCtrl'
        }).otherwise({
            redirectTo: '/index'
        });
    }
]);
