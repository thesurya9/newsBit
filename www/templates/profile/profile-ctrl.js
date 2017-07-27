angular.module('desieat.profileCtrl', ['desieat.profile-service'])

  .controller('profileCtrl', function ($scope,$ionicLoading, $stateParams) {

    $scope.$on('$ionicView.enter', function () {
      $ionicLoading.show({
        template: 'Loading...',
        duration:2000
      })

      console.log("Profile Ctrl Loaded");

      $scope.selectedNews = $stateParams.selectedItem;

      console.log($scope.selectedNews);

    })


  })