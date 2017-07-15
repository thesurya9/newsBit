angular.module('desieat.myPoints-service',[])

.service('myPointsService', function ($http,$localStorage) {

     this.getMyPoints = function (val) {
         
         return $http.get('https://newsapi.org/v1/articles?source=the-times-of-india&sortBy=top&apiKey=afaa2c4664ac45898bcbee33781ce2ca');
     }


})



