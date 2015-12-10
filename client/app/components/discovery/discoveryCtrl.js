/**
* Created by VicYork on 12/7/15.
*/
//"use strict";
angular.module('cult.discovery', [])
 .controller('discoveryCtrl', ['$scope', '$log', 'UserLocation',
   function($scope, $log, UserLocation) {
     $scope.alpha = 'this information was logged to the screen';
     $log.log($scope.alpha);
     $scope.getCurrentCity = UserLocation.getCurrentCity;
     $scope.getCurrentCity();
   }
 ])

 .factory('UserLocation', [function(){
 	geocoder = new google.maps.Geocoder();
 	var userLocation = {};
 	userLocation.getCurrentCity = function(){
 		var myLatlng;

    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
    var lat;
    var lng;

	//Get the latitude and the longitude;
		function successFunction(position) {
		    lat = position.coords.latitude;
		    lng = position.coords.longitude;
		    console.log(lat, lng);
		}

		function errorFunction(){
		    alert("Geocoder failed");
		}

		function initialize() {

  	}

  	//TODO: Code LatLng to Show City
		// function codeLatLng(lat, lng) {

	 //    var latlng = new google.maps.LatLng(lat, lng);
	 //    geocoder.geocode({'latLng': latlng}, function(results, status) {
	 //      if (status == google.maps.GeocoderStatus.OK) {
	 //      console.log(results)
	 //        if (results[1]) {
	 //         //formatted address
	 //         alert(results[0].formatted_address)
	 //        //find country name
	 //             for (var i=0; i<results[0].address_components.length; i++) {
	 //            for (var b=0;b<results[0].address_components[i].types.length;b++) {

	 //            //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
	 //                if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
	 //                    //this is the object you are looking for
	 //                    city= results[0].address_components[i];
	 //                    break;
	 //                }
	 //            }
	 //        }
	 //        //city data
	 //        alert(city.short_name + " " + city.long_name)


	 //        } else {
	 //          console.log("No results found");
	 //        }
	 //      } else {
	 //        console.log("Geocoder failed due to: " + status);
	 //      }
	 //    });
  // }

  //codeLatLng(lat,lng);

 	}
 	return userLocation;
 }])