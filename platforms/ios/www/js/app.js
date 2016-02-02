angular.module('underscore', [])
.factory('_', function() {
  return window._; // assumes underscore has already been loaded on the page
});

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('na_ireland', [
  'ionic','ionic.service.core',
  'angularMoment',
  'na_ireland.controllers',
  'na_ireland.directives',
  'na_ireland.filters',
  'na_ireland.services',
  'na_ireland.factories',
  'na_ireland.config',
  'na_ireland.views',
  'underscore',
  'ngMap',
  'ngResource',
  'ngCordova',
  'slugifier',
  'ionic-datepicker'
])

.run(function($ionicPlatform, $rootScope, $ionicConfig, $timeout,$cordovaSplashscreen ) {

  $ionicPlatform.on("deviceready", function(){
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
      $cordovaSplashscreen.hide();
  });




  // Disable BACK button except to exit the app from the first page
$ionicPlatform.registerBackButtonAction(function (event) {
  if($state.current.name=="app.home"){
    navigator.app.exitApp();
  }
  else {
    // do nothing
  }
}, 100);

})

.config(function ($ionicConfigProvider) {
    $ionicConfigProvider.views.maxCache(0);
  })

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $stateProvider

  //Welcome
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "views/app/side-menu.html",
    controller: 'AppCtrl'
  })

  //Google Map
  .state('app.maps', {
    url: "/maps",
    views: {
      'menuContent': {
        templateUrl: "views/app/meetingsmap.html",
        controller: 'MapCtrl'
      }
    }
  })

  //JFT
  .state('app.jft', {
    cache: false,
    url: "/jft",
    views: {
      'menuContent': {
        templateUrl: "views/app/jft.html",
        controller: 'JftCtrl'
      }
    }
  })

  //Events & Conventions
  .state('app.events', {
    url: "/events",
    views: {
      'menuContent': {
        templateUrl: "views/app/events.html",
        controller: 'EventsCtrl'
      }
    }
  })

  .state('app.post', {
    url: "/events/:postId",
    views: {
      'menuContent': {
        templateUrl: "views/app/events_post.html",
        controller: 'EventsPostCtrl'
      }
    },
    resolve: {
      post_data: function(PostService, $ionicLoading, $stateParams) {
        $ionicLoading.show({
      		template: 'Loading post ...'
      	});

        var postId = $stateParams.postId;
        return PostService.getPost(postId);
      }
    }
  })

// NA Speakers
  .state('app.speakers', {
    url: "/speakers",
    views: {
      'menuContent': {
        templateUrl: "views/app/speakers.html",
        controller: 'AudioController'
      }
    }
  })

  .state('app.speaker', {
    url: "/speaker/:conventionName/:speakerName/:fileName",
    views: {
      'menuContent': {
        templateUrl: "views/app/speaker.html",
        controller: 'SpeakerController'
      }
    }
  })

// Welcome page
  .state('app.welcome', {
    url: "/welcome",
    views: {
      'menuContent': {
        templateUrl: "views/app/welcome.html"
      }
    }
  })
// Cleantime Calculator
    .state('app.clean-calc', {
      url: "/clean-calc",
      views: {
        'menuContent': {
          templateUrl: "views/app/cleantime.html",
          controller: "CleantimeCtrl"
        }
      }
    })

// Meetings list
  .state('app.meetinglist', {
    url: "/meetinglist",
    views: {
      'menuContent': {
        templateUrl: "views/app/meetinglist.html"
      }
    }
  })

  .state('app.northern', {
    url: "/northern",
    views: {
      'menuContent': {
        templateUrl: "views/app/meetings/northern.html"
      }
    }
  })

  .state('app.eastern', {
    url: "/eastern",
    views: {
      'menuContent': {
        templateUrl: "views/app/meetings/eastern.html"
      }
    }
  })

  .state('app.southern', {
    url: "/southern",
    views: {
      'menuContent': {
        templateUrl: "views/app/meetings/southern.html"
      }
    }
  })

  .state('app.western', {
    url: "/western",
    views: {
      'menuContent': {
        templateUrl: "views/app/meetings/western.html"
      }
    }
  })

  .state('app.northern-meetings', {
    url: "/northern-meetings/:countyName",
    views: {
      'menuContent': {
        templateUrl: "views/app/meetings/northern-meetings.html",
        controller: "MeetingsCtrl"
      }
    }
  })

  .state('app.southern-meetings', {
    url: "/southern-meetings/:countyName",
    views: {
      'menuContent': {
        templateUrl: "views/app/meetings/southern-meetings.html",
        controller: "MeetingsCtrl"
      }
    }
  })

  .state('app.eastern-meetings', {
    url: "/eastern-meetings/:countyName",
    views: {
      'menuContent': {
        templateUrl: "views/app/meetings/eastern-meetings.html",
        controller: "MeetingsCtrl"
      }
    }
  })

  .state('app.western-meetings', {
    url: "/western-meetings/:countyName",
    views: {
      'menuContent': {
        templateUrl: "views/app/meetings/western-meetings.html",
        controller: "MeetingsCtrl"
      }
    }
  })

  .state('app.contact', {
    url: "/contact",
    views: {
      'menuContent': {
        templateUrl: "views/app/contact.html"
      }
    }
  })

;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/welcome');
});
