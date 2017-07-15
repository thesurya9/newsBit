angular.module('desieat.myPointCtrl', ['desieat.myPoints-service'])

  .controller('myPointCtrl', function ($scope, $state, myPointsService, $localStorage) {

    $scope.$on('$ionicView.enter', function () {
      console.log("mypoints Loaded");


      $scope.filters = {
        menuItem: ""
      };

      $scope.getMyPoints();


    })



    $scope.getMyPoints = function () {

      myPointsService.getMyPoints().success(function (res) {
        console.log(res);


        if (res.status == "ok") {
          $scope.articles = res.articles;
        }
        else {
          swal("Oopss..", "Something went wrong", "error");
          console.log("status code  ---  !! ok----");
        }
      }).error(function (err) {
        console.log(error);
      })

    }


  })
