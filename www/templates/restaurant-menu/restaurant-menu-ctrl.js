angular.module('desieat.restaurant-menuCtrl', ['desieat.restaurant-menu-service'])

  .controller('restaurant-menuCtrl', function ($scope, $stateParams,$ionicLoading, restaurantMenuService) {

    $scope.$on('$ionicView.enter', function () {
      console.log("restaurant-menuCtrl Ctrl Loaded");


      $scope.filters = {
        menuItem: ""
      };

      $scope.Api2();

    })




    $scope.Api2 = function () {
      restaurantMenuService.MenuCategory().success(function (res) {

        $ionicLoading.show({
          template: 'Loading...'
        })

        //var res = JSON.parse(res.replace(/\(|\)/g, ''));

        //console.log(res);
        if (res != null) {
          $ionicLoading.hide();
          $scope.newsList = res;
          console.log($scope.newsList);

        }
        else{
          $ionicLoading.hide();
          swal("Opps...","Something went wrong","error");
        }

      })
    }


  })