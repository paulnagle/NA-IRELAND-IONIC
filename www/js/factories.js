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
  var markerClusterer;
  var infoWindows = [];

  function dayOfWeekAsString(dayIndex) {
    return ["not a day?", "Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][dayIndex];
  };

  function initMap(){
    var options = {timeout: 10000, enableHighAccuracy: true};
    $cordovaGeolocation.getCurrentPosition(options).then(function(position){
      var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      var mapOptions = {
        center: latLng,
        zoom: 9,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        maxZoom: 15
      };

      map = new google.maps.Map(document.getElementById("map"), mapOptions);

      // Add a marker clusterer
      markerClusterer = new MarkerClusterer(map);
      minClusterZoom = 14;
      markerClusterer.setMaxZoom(minClusterZoom);

      // Add an overlapping marker spiderifier
      oms = new OverlappingMarkerSpiderfier(map, {
        markersWontMove: true,
        markersWontHide: true,
        keepSpiderfied: true
      });

      //Wait until the map is loaded, then load the markers
      google.maps.event.addListenerOnce(map, 'idle', function(){
        //Load the markers
        loadMarkers();
      });
    }, function(error){
        //Load the markers
        loadMarkers();
    });
  }

  function loadMarkers(){
    //Get all of the markers from our Markers factory
    Markers.getMarkers().then(function(markers){
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
        markerClusterer.addMarker(marker);
        oms.addMarker(marker);
      }
      $ionicLoading.hide();
    });
  }

  function addInfoWindow(marker, message, record) {
      var infoWindow = new google.maps.InfoWindow({
          content: message
      });

      //add infowindow to array
      infoWindows.push(infoWindow);

      google.maps.event.addListener(marker, 'click', function () {
        closeAllInfoWindows();
        infoWindow.open(map, marker);
      });
  }

  function closeAllInfoWindows() {
    for (var i=0;i<infoWindows.length;i++) {
       infoWindows[i].close();
    }
  }

  return {
    init: function(){
      $ionicLoading.show({content: '<i class="icon ion-refreshing"></i>'});
      initMap();
    }
  };
})

;
