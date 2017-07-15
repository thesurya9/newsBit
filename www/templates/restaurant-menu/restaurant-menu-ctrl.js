angular.module('desieat.restaurant-menuCtrl', ['desieat.restaurant-menu-service'])

  .controller('restaurant-menuCtrl', function ($scope, $stateParams, restaurantMenuService) {

    $scope.$on('$ionicView.enter', function () {
      console.log("restaurant-menuCtrl Ctrl Loaded");


      $scope.filters = {
        menuItem: ""
      };

      restaurantMenuService.MenuCategory().success(function (res) {

        //var res = JSON.parse(res.replace(/\(|\)/g, ''));

        //console.log(res);
        if (res  != null) {
          $scope.newsList = res;
          console.log($scope.newsList);

        }

      })
    })


  })