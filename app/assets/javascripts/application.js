// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$(document).on('ready page:load', function(){

 (function(window, $) {

 	var $mapster = $("#map-canvas").mapster(Mapster.MAP_OPTIONS);
	 		geocoder = new google.maps.Geocoder();

 	// $mapster.mapster('addMarker', {
  //   	lat: 40.708036,
  //   	lng: -74.006261,
  //   	content: "huzzah!",
  //   	org_id: 1
 	// });

 	$mapster.mapster('addMarker', {
	 	lat: 40.715225,
	 	lng: -73.9932579,
	 	content: "marker2",
	 	org_id: 2
 	});

// below function for adding markers to all addresses in database

// gather all addresses and zip code and push into array of hashes
// or take each address and zip code, join them into a string
// do a loop where for each item in array, add a marker

// var addressMarker = function(){
// var all_addresses = $("#address").html()
var all_addresses = []

    for ( n=0 ; n < 3 ; n++){
        address = $("#address_"+n).html();
        all_addresses.push(address);
    }
// loop through all address IDs, and grab the content


    for (i=0; i<all_addresses.length ; i++){
        var item = all_addresses[i];
        $mapster.mapster("addMarker", {
        	location: item
        });

        console.log(item);
    };


// below function adds a marker by address

$mapster.mapster("addMarker", {
	location: "Brooklyn Bridge, NY"
});

// below function adds a marker by current geolocation
	// $mapster.mapster('getCurrentPosition', function(position) {
	// 	$mapster.mapster("addMarker", {
	// 		lat: position.coords.latitude,
	// 		lng: position.coords.longitude
	// 	});
	// });


 	// below code using javascript only
    // // map options
    // var options = mapster.MAP_OPTIONS,
    // element = document.getElementById("map-canvas"),
    // // map
    // map = mapster.create(element, options);

    // var marker = map.addMarker({
    // 	lat: 40.708036,
    // 	lng: -74.006261,
    // 	content: "huzzah!",
    // 	// custom options:
    // 	org_id: 1
    // 	// icon: 'http://mapicons.nicolasmollet.com/wp-content/uploads/mapicons/shape-default/color-5ec8bd/shapecolor-color/shadow-1/border-black/symbolstyle-contrast/symbolshadowstyle-no/gradient-no/clothers_male.png'
    // });

    // var marker2 = map.addMarker({
    // 	lat: 40.715225,
    // 	lng: -73.9932579,
    // 	content: "marker2",
    // 	org_id: 2
    // });

	// map.removeBy(function(marker) {
	// 	return marker.org_id === 2;
	// });


    // testing if marker can be removed
    // map._removeMarker(marker2);

    // see in console the array of markers
    // console.log(map.markers);

    // var found = map.findMarkerByOrg(1)
    // console.log(found);

  }(window, jQuery));



// function getLocation() {
//     getAddressInfoByZip(document.forms[0].zip.value);
// }

// function response(obj) {
//     console.log(obj);
// }

// function getAddressInfoByZip(zip) {
// if (zip.length >= 5 && typeof google != 'undefined') {
//     var addr = {};
//     var geocoder = new google.maps.Geocoder();
//     geocoder.geocode({
//         'address': zip
//     }, function(results, status) {
//         if (status == google.maps.GeocoderStatus.OK) {
//             if (results.length >= 1) {
//                 for (var ii = 0; ii < results[0].address_components.length; ii++) {
//                     var street_number = route = street = city = state = zipcode = country = formatted_address = '';
//                     var types = results[0].address_components[ii].types.join(",");
//                     if (types == "street_number") {
//                         addr.street_number = results[0].address_components[ii].long_name;
//                     }
//                     if (types == "route" || types == "point_of_interest,establishment") {
//                         addr.route = results[0].address_components[ii].long_name;
//                     }
//                     if (types == "sublocality,political" || types == "locality,political" || types == "neighborhood,political" || types == "administrative_area_level_3,political") {
//                         addr.city = (city == '' || types == "locality,political") ? results[0].address_components[ii].long_name : city;
//                     }
//                     if (types == "administrative_area_level_1,political") {
//                         addr.state = results[0].address_components[ii].short_name;
//                     }
//                     if (types == "postal_code" || types == "postal_code_prefix,postal_code") {
//                         addr.zipcode = results[0].address_components[ii].long_name;
//                     }
//                     if (types == "country,political") {
//                         addr.country = results[0].address_components[ii].long_name;
//                     }
//                 }
//                 addr.success = true;
//                 for (name in addr) {
//                     console.log('### google maps api ### ' + name + ': ' + addr[name]);
//                 }
//                 response(addr);
//             } else {
//                 response({
//                     success: false
//                 });
//             }
//         } else {
//             response({
//                 success: false
//             });
//         }
//     });
// } else {
//     response({
//         success: false
//     });
// }
// }



});
