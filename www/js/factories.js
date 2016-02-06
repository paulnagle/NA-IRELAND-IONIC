angular.module('na_ireland.factories', [])

.factory('GetCountyMeetings', function($http) {
  var meetings = [];

  return {
    getMeetings: function(county){
      var search_url = "http://www.nasouth.ie/bmlt/main_server/client_interface/json/";
      search_url += "?switcher=GetSearchResults";
      search_url += "&data_field_key=meeting_name,weekday_tinyint,start_time,";
      search_url += "location_text,location_street,location_info,location_sub_province,distance_in_km,latitude,longitude,formats";
      search_url += "&meeting_key=location_sub_province&meeting_key_value=";
      search_url += county;

      return $http.get(search_url).then(function(response){
        meetings = response.data;
        return meetings;
      });
    }
  };

})

.factory('Markers', function($http) {

  var markers = [];

  return {
    getMarkers: function(){
      return $http.get("http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_sub_province,location_street,location_info,formats&sort_keys=longitude,latitude").then(function(response){
        markers = response;
        return markers;
      });
    }
  };
})

.factory('GoogleMaps', function($cordovaGeolocation, $ionicLoading, Markers){
  var apiKey = false;
  var map = null;

  function dayOfWeekAsString(dayIndex) {
    return ["not a day?", "Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][dayIndex];
  };

  function initMap(){
    console.log("initing maps...");
    var options = {timeout: 10000, enableHighAccuracy: true};
    $cordovaGeolocation.getCurrentPosition(options).then(function(position){
      var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      var mapOptions = {
        center: latLng,
        zoom: 9,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      map = new google.maps.Map(document.getElementById("map"), mapOptions);

      //Wait until the map is loaded
      google.maps.event.addListenerOnce(map, 'idle', function(){
        //Load the markers
        console.log("loading markers...");
        loadMarkers();
      });
    }, function(error){
      console.log("Could not get location");
        //Load the markers
        loadMarkers();
    });
  }

  function loadMarkers(){
      var clusterMarkers = [];

      //Get all of the markers from our Markers factory
      Markers.getMarkers().then(function(markers){
        console.log("Markers: ", markers);
        var records = markers.data;
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          var markerPos = new google.maps.LatLng(record.latitude, record.longitude);

          // Add the marker to the map
          var marker = new google.maps.Marker({
              map: map,
              position: markerPos
          });

          var infoWindowContent = "";
          if (record.meeting_name != "NA Meeting") {
            infoWindowContent += "<h3>" + record.meeting_name + "</h3>";
          }
          var time = record.start_time;
          infoWindowContent += "<h4>" + dayOfWeekAsString(record.weekday_tinyint) + "&nbsp" + time.substring(0, 5) + "</h4>";
          if (record.location_text != "") {
            infoWindowContent += "<p>" + record.location_text +"</p>";
          }
          if (record.location_street) {
            infoWindowContent += "<p>" + record.location_street +"</p>";
          }
          if (record.location_info) {
            infoWindowContent += "<p>" + record.location_info +"</p>";
          }
          if (record.formats) {
            infoWindowContent += "<p><dfn> Formats : " + record.formats + "</dfn></p>";
          }
          addInfoWindow(marker, infoWindowContent, record);
          clusterMarkers.push(marker);
        }
        var markerCluster = new MarkerClusterer(map, clusterMarkers);
        $ionicLoading.hide();
      });
  }

  function addInfoWindow(marker, message, record) {
      var infoWindow = new google.maps.InfoWindow({
          content: message
      });

      google.maps.event.addListener(marker, 'click', function () {
          infoWindow.open(map, marker);
      });
  }

  return {
    init: function(){
      $ionicLoading.show({content: '<i class="icon ion-refreshing"></i>'});
      initMap();
    }
  };
})

;
