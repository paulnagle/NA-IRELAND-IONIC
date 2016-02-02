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
	function humanise(total_days)
	{
	    var date_current = new Date();
	    var utime_target = date_current.getTime() + total_days*86400*1000;
	    var date_target = new Date(utime_target);

	    var diff_year  = parseInt(date_target.getUTCFullYear() - date_current.getUTCFullYear());
	    var diff_month = parseInt(date_target.getUTCMonth() - date_current.getUTCMonth());
	    var diff_day   = parseInt(date_target.getUTCDate() - date_current.getUTCDate());

	    var days_in_month = [31, (date_target.getUTCFullYear()%4?29:28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	    var date_string = "";
	    while(true)
	    {
	        date_string = "That's ";
	        date_string += (diff_year>0?diff_year + " years ":"");

	        if(diff_month<0){diff_year -= 1; diff_month += 12; continue;}
	        date_string += (diff_month>0?diff_month + " months ":"");

	        if(diff_day<0){diff_month -= 1; diff_day += days_in_month[((11+date_target.getUTCMonth())%12)]; continue;}
	        date_string += (diff_day>0?diff_day + " days ":"");
	        break;
	    }
	    console.log(date_string);
	    return date_string;
	}

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
			var dateString = humanise(result);
			$scope.results = "<h4> You are " + result + " days clean!<br><p>" + dateString + "</p>";
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

// List of speakers page controller
.controller('AudioController', function($scope, $ionicLoading, $http) {
	$ionicLoading.show({content: '<i class="icon ion-refreshing"></i>'});
	$http.get("http://android.nasouth.ie/conventions.json").then(function(response){
		$scope.conventionList = [];
		angular.forEach(response.data.Conventions, function(value, key) {
			$scope.conventionList.push(value);
		});
		$ionicLoading.hide();
	});
})

.controller('SpeakerController', function($scope, $ionicLoading, $stateParams, $state, $ionicPlatform, $interval, $cordovaMedia) {

	var media = new Media($stateParams.fileName, null, null, mediaStatusCallback);

	$scope.play = function(src) {
		if (media)
		{
			media.play();
		}
	};

	$scope.stop = function() {
		if (media)
		{
			media.stop();
		}
	};

	$scope.pause = function() {
     if (media)
     {
       media.pause();
     }
   };

	$scope.rewind = function() {
		if (media)
		{
			$cordovaMedia.getCurrentPosition(media).then(function(res) {
			var mediaPosition = res - 15;
			var mediaInMilli = mediaPosition*1000;
			media.seekTo(mediaInMilli);
			});
		}
	};

	$scope.fastForward = function() {
		if (media)
		{
			$cordovaMedia.getCurrentPosition(media).then(function(res) {
			var mediaPosition = res + 15;
			var mediaInMilli = mediaPosition*1000;
			media.seekTo(mediaInMilli);
			});
		}
	};

	var mediaStatusCallback = function(status) {
			if(status == 1) {
					$ionicLoading.show({template: 'Loading...'});
			} else {
					$ionicLoading.hide();
			}
	};

	$scope.model = {};


	var dur = media.getDuration();

	console.log("Track duration = " + dur + " sec");




	$scope.conventionName = $stateParams.conventionName;
	$scope.speakerName    = $stateParams.speakerName;
	$scope.fileName       = $stateParams.fileName;

	var stateChangeListener = $scope.$on('$stateChangeStart', function(data){
		console.log("stateChangeStart triggered!!!");
		if(data.url !== $state.current.url ){
			console.log('leaving view');
			media.stop();
			stateChangeListener();
		}
	});

})
;
