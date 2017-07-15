angular.module('desieat.homeCtrl', [])



  .controller('homeCtrl', function ($scope, $stateParams,$state) {
    
    $scope.$on('$ionicView.enter', function () {
      console.log("homeCtrl Loaded");
    })


    $scope.order = function(){
        $state.go('app.restaurant-menu');
    }

  })