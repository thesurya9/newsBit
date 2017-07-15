angular.module('desieat.restaurant-menu-service',[])

.service('restaurantMenuService', function ($http) {


    this.MenuCategory = function () {
        return $http.get(URLs.MenuCategory);
    }
})
