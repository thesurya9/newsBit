angular.module('desieat.restaurant-menu2Ctrl', ['desieat.restaurant-menu2-service'])


  .controller('restaurant-menu2Ctrl', function ($scope, $stateParams,$sce, $state, restaurantMenu2Service, $localStorage, $rootScope) {


    $scope.$on('$ionicView.enter', function () {
      $scope.selectedItem = $stateParams.selectedItem;
        $scope.WebURL = $scope.selectedItem.WebURL;            
        $scope.WebURL = $sce.trustAsResourceUrl($scope.WebURL);
       
      console.log("restaurant-menu2Ctrl Ctrl Loaded");

      

      console.log( "Give URL Is --------",$scope.selectedItem);
      console.log("Secure UrL is----",$scope.WebURL);
      
      $scope.filters = {
        item: ""
      };

    })



  })
