angular.module('desieat.reviewCtrl', [])


  .controller('reviewCtrl', function ($scope, $stateParams, $sce) {

    $scope.$on('$ionicView.enter', function () {
      console.log("reviewCtrl Ctrl Loaded");

      $scope.url = $sce.trustAsResourceUrl($stateParams.selectedItem);
      console.log($scope.url);
    })

  })
