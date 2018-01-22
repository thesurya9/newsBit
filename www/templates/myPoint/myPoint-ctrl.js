angular.module('desieat.myPointCtrl', ['desieat.myPoints-service'])

  .controller('myPointCtrl', function ($scope, $state, myPointsService,$ionicLoading, $localStorage) {

    $scope.$on('$ionicView.enter', function () {
      console.log("mypoints Loaded");

      $scope.filters = {
        menuItem: ""
      };

      $scope.getMyPoints();
    })



    $scope.getMyPoints = function () {
      
      $ionicLoading.show({
        template: 'Loading...'
      })

      myPointsService.getMyPoints().success(function (res) {
        console.log(res);


        if (res.status == "ok") {
          $ionicLoading.hide();
          $scope.articles = res.articles;
        }
        else {
          $ionicLoading.hide();
          swal("Oopss..", "Something went wrong", "error");
          console.log("status code  ---  !! ok----");
        }
      }).error(function (err) {
        console.log(error);
      })

    }


  })
