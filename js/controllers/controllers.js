var speedTouchCtrl = angular.module('speedTouchCtrl', []);

speedTouchCtrl.controller('MainCtrl', function($scope, $location) {

    $scope.goTo = function(path) {
        $location.path('game');
    };

});
speedTouchCtrl.controller('GameCtrl', function($scope, $interval, $location, $route) {

    $scope.delay = 3000;
    $scope.points = 0;

    $scope.restartShow = true;
    $scope.isModal = true;


    $scope.circles = [{
            id: 1,
            value: 2,
            active: '',
            activated: false
        }, {
            id: 2,
            value: 2,
            active: '',
            activated: false
        }, {
            id: 3,
            value: 2,
            active: '',
            activated: false
        }, {
            id: 4,
            value: 2,
            active: '',
            activated: false
        }, {
            id: 5,
            value: 2,
            active: '',
            activated: false
        }, {
            id: 6,
            value: 2,
            active: '',
            activated: false
        }, {
            id: 7,
            value: 2,
            active: '',
            activated: false
        }, {
            id: 8,
            value: 2,
            active: '',
            activated: false
        }, {
            id: 9,
            value: 2,
            active: '',
            activated: false
        }

    ];

    var stopInterval;
    var intervalBeginGame;
    var gameReady = false;

    $scope.beginGame = function() {
        if (angular.isDefined(intervalBeginGame)) return;
        $scope.cpt = 3;
        intervalBeginGame = $interval(function() {
            $scope.cpt--;
            if($scope.cpt === 0){
                $scope.start();
                gameReady = true;
            }
        }, 1000, 3);

    };

    $scope.start = function() {

        if (angular.isDefined(stopInterval)) return;

        stopInterval = $interval(function() {
            $scope.tickUpdate();
        }, $scope.delay);
    };


    $scope.beginGame();

    $scope.stop = function() {
        if (angular.isDefined(stopInterval)) {
            $interval.cancel(stopInterval);
            stopInterval = undefined;
        }
    };

    $scope.onTap = function(item) {

        if(!gameReady) return;

        if (!item.activated) {
            $scope.loose();
        } else {
            $scope.goodTouch(item);
        }
    };

    $scope.goodTouch = function(item) {


        $scope.disActivate(item);
        $scope.points++;

    };

    $scope.disActivate = function(item) {
        item.activated = false;
        item.active = '';
    };

    $scope.tickUpdate = function() {

        if (isAllActivated()) {
            $scope.loose();
            return;
        }

        if ($scope.points === 5 || $scope.points === 20 || 
            $scope.points === 50 || $scope.points === 100 || 
            $scope.points === 200|| $scope.points === 300 || 
            $scope.points === 400|| $scope.points === 500 || 
            $scope.points === 600|| $scope.points === 700 || 
            $scope.points === 800|| $scope.points === 900 || 
            $scope.points === 1000|| $scope.points === 1100 || 
            ) {
            $scope.stop();
            $scope.delay = $scope.delay - ($scope.delay * 0.2);
            console.log($scope.delay);
            $scope.start();
        }


        var rId = Math.floor((Math.random() * 9) + 1);

        angular.forEach($scope.circles, function(value, key) {

            if (rId == value.id) {
                //if is already activated
                if (value.activated) {
                    console.log('already activated');
                    $scope.tickUpdate();
                    return;
                } else {
                    value.active = "-active";
                    value.activated = true;
                }
            }
        });
    };

    function isAllActivated() {
        var isAllActivated = true;
        angular.forEach($scope.circles, function(value, key) {
            if (!value.activated) {
                isAllActivated = false;
                return;
            }


        });

        return isAllActivated;
    }

    $scope.again = function() {
        $location.path('game');
        $route.reload();
    };

    $scope.toMenu = function() {
        $location.path('index');
    }

    $scope.loose = function() {
        $scope.stop();
        console.log("You loose :" + $scope.points);
    };

});
