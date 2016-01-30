angular.module('na_ireland.controllers', [])

// APP
.controller('AppCtrl', function($scope, $ionicConfig) {

})

// Just For Today
.controller('JftCtrl', function($scope, $http, $sce, $ionicLoading) {
	$scope.contents = null;

	$ionicLoading.show({content: '<i class="icon ion-refreshing"></i>'});

  $http.get("http://jftna.org/jft/index.php")
        .success(function(data) {
					var el = document.createElement( 'html' );
					el.innerHTML = data;
					var myTable = el.childNodes[3];
					$scope.contents = data;
					$ionicLoading.hide();
        })
        .error(function(data,status,error,config){
            $scope.contents = [{heading:"Error",description:"Could not load JFT data"}];
        });
})

// Meetings List view controller
.controller('MeetingsCtrl', function($scope, $stateParams, $ionicLoading, $ionicHistory, GetCountyMeetings){
	$ionicLoading.show({content: '<i class="icon ion-refreshing"></i>'});
	var meetings = GetCountyMeetings.getMeetings($stateParams.countyName).then(function(meetings){
		$scope.contents = meetings;
		$ionicLoading.hide();
	});

	$scope.openMapsLink = function(destLatitude, destLongitude){
		window.open('http://maps.google.com/maps?daddr=' + destLatitude + ',' + destLongitude, '_system', 'location=yes');
		return false;
	};

	$scope.dayOfWeekAsString = function(dayIndex) {
		return ["not a day?", "Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][dayIndex];
	};

	$scope.heading = $stateParams.countyName;

})

// Meeting Map view controller
.controller('MapCtrl', function($scope, $state, $cordovaGeolocation, $ionicLoading, GoogleMaps) {
	$scope.show = function() {
    $ionicLoading.show({content: '<i class="icon ion-refreshing"></i>'});
  };
	GoogleMaps.init();
	$scope.hide = function(){
     $ionicLoading.hide();
   };
})

// Cleantime calculator view controller
.controller('CleantimeCtrl', function($scope, $stateParams) {


	var _MS_PER_DAY = 1000 * 60 * 60 * 24;

	// a and b are javascript Date objects
	function dateDiffInDays(a, b) {
	  // Discard the time and time-zone information.
	  var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
	  var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

	  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
	}

	var weekDaysList = ["Sun", "Mon", "Tue", "Wed", "thu", "Fri", "Sat"];

	$scope.results = "<h4>Enter your clean day by clicking the date above</h4>";

	var datePickerCallback = function (val) {
	  if (typeof(val) === 'undefined') {
	    console.log('No date selected');
	  } else {
	    console.log('Selected date is : ', val);
			var d = new Date(); // today's date
			$scope.datepickerObject.inputDate = val;
			var result = dateDiffInDays(val, d);

			$scope.results = "<h4> You are " + result + " days clean!";
	  }
	};

	$scope.datepickerObject = {
		 titleLabel: 'Enter clean day',  //Optional
		 todayLabel: 'Today',  //Optional
		 closeLabel: 'Close',  //Optional
		 setLabel: 'Set',  //Optional
		 setButtonType : 'button-assertive',  //Optional
		 todayButtonType : 'button-assertive',  //Optional
		 closeButtonType : 'button-assertive',  //Optional
		 inputDate: new Date(),  //Optional
		 weekDaysList: weekDaysList, //Optional
		 templateType: 'popup', //Optional
		 showTodayButton: 'true', //Optional
		 modalHeaderColor: 'bar-positive', //Optional
		 modalFooterColor: 'bar-positive', //Optional
		 from: new Date(1952, 0, 1), //Optional
		 to: new Date(),  //Optional
		 callback: function (val) {  //Mandatory
			 datePickerCallback(val);
		 },
		 dateFormat: 'dd-MM-yyyy', //Optional
		 closeOnSelect: false, //Optional
	 };

})

// Events & Conventions
.controller('EventsCtrl', function($scope, $http, $ionicLoading, PostService) {
	$scope.posts = [];
	$scope.page = 1;
	$scope.totalPages = 1;

	$scope.doRefresh = function() {
		$ionicLoading.show({
			template: 'Loading events...'
		});

		//Always bring me the latest posts => page=1
		PostService.getRecentPosts(1)
		.then(function(data){
			$scope.totalPages = data.pages;
			$scope.posts = PostService.shortenPosts(data.posts);

			$ionicLoading.hide();
			$scope.$broadcast('scroll.refreshComplete');
		});
	};

	$scope.loadMoreData = function(){
		$scope.page += 1;

		PostService.getRecentPosts($scope.page)
		.then(function(data){
			//We will update this value in every request because new posts can be created
			$scope.totalPages = data.pages;
			var new_posts = PostService.shortenPosts(data.posts);
			$scope.posts = $scope.posts.concat(new_posts);

			$scope.$broadcast('scroll.infiniteScrollComplete');
		});
	};

	$scope.moreDataCanBeLoaded = function(){
		return $scope.totalPages > $scope.page;
	};

	$scope.doRefresh();
})

// View a single event POST
.controller('EventsPostCtrl', function($scope, post_data, $ionicLoading) {

	$scope.post = post_data.post;
	$ionicLoading.hide();

	$scope.sharePost = function(link){
		window.plugins.socialsharing.share('Check this post here: ', null, null, link);
	};
})

// Audio controller
.controller('AudioController', function($scope, $cordovaMedia, $ionicLoading, $http) {

	$scope.play = function(src) {
			var media = $cordovaMedia.newMedia(src, null, null, mediaStatusCallback);
			$cordovaMedia.play(media);
	};

	$scope.clearSearch = function() {
    $scope.search = '';
  };

	var mediaStatusCallback = function(status) {
			if(status == 1) {
					$ionicLoading.show({template: 'Loading...'});
			} else {
					$ionicLoading.hide();
			}
	};

	$ionicLoading.show({template: 'Loading...'});
	$http.get("http://android.nasouth.ie/conventions.json").then(function(response){

		$scope.conventionList = [];

		angular.forEach(response.data.Conventions, function(value, key) {
			$scope.conventionList.push(value);
		});
		$ionicLoading.hide();
	});

})

;