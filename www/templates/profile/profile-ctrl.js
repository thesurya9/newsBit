angular.module('desieat.profileCtrl', ['desieat.profile-service'])

  .controller('profileCtrl', function ($scope, $stateParams) {

    $scope.$on('$ionicView.enter', function () {
      console.log("Profile Ctrl Loaded");

       $scope.selectedNews = $stateParams.selectedItem;

      console.log($scope.selectedNews);

    })


  })