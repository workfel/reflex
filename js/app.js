var appSpeedTouch = angular.module('appSpeedTouch', ['ngRoute', 'ui.bootstrap', 'speedTouchCtrl']);


appSpeedTouch.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/game', {
            templateUrl: 'view/game.html',
            controller: 'GameCtrl'
        }).when('/index', {
            templateUrl: 'view/index.html',
            controller: 'MainCtrl'
        }).otherwise({
            redirectTo: '/index'
        });
    }
]);
