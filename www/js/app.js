// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('desieat', ['ionic', 'desieat.controllers','desieat.restaurant-menuCtrl',
'desieat.restaurant-menu2Ctrl','desieat.reviewCtrl','desieat.homeCtrl','ngStorage',
'desieat.myPointCtrl','desieat.profileCtrl'])

.run(function($ionicPlatform,$localStorage) {
  $ionicPlatform.ready(function() {

    // if($localStorage.GLOBAL_VARIABLES){
        $localStorage.GLOBAL_VARIABLES={
          itemOnCart:0,
          cart:'',
          UseName:'',
          Pwd:'',
          
        }

    //}
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  
  
    .state('app.restaurant-menu', {
    url: '/restaurant-menu',
    views: {
      'menuContent': {
        templateUrl: 'templates/restaurant-menu/restaurant-menu.html',
        controller:'restaurant-menuCtrl'
      }
    }
  })
  
     .state('app.restaurant-menu2', {
    url: '/restaurant-menu2',
    params: { selectedItem : null },
    views: {
      'menuContent': {
        templateUrl: 'templates/restaurant-menu2/restaurant-menu2.html',
        controller:'restaurant-menu2Ctrl'
      }
    }
  })
  
    .state('app.review', {
    url: '/review',
     params: { selectedItem : null },
    views: {
      'menuContent': {
        templateUrl: 'templates/review/review.html',
         controller:'reviewCtrl'       
      }
    }
  })
  .state('app.profile', {
    url: '/profile',
     params: { selectedItem : null },
    views: {
      'menuContent': {
        templateUrl: 'templates/profile/profile.html',
         controller:'profileCtrl'       
      }
    }
  })


  .state('app.myPoint', {
    url: '/myPoint',
    views: {
      'menuContent': {
        templateUrl: 'templates/myPoint/myPoint.html',
        controller: 'myPointCtrl'
      }
    }
  })
// .state('app.home', {
//     url: '/home',
//     views: {
//       'menuContent': {
//         templateUrl: 'templates/home/home.html',
//         controller: 'homeCtrl'
//       }
//     }
//   });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/myPoint');
});
