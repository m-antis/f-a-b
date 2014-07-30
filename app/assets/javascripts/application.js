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

 	// $mapster.mapster('addMarker', {
	 // 	lat: 40.715225,
	 // 	lng: -73.9932579,
	 // 	content: "marker2",
	 // 	org_id: 2
 	// });

// below function for adding markers to all addresses in database

// var all_addresses = []
var orgNames = []
var addressAmt = parseInt($("#addressAmt").html())
var fullAddresses = []
// var orgIDs = []
    // push all full addresses that have the ID #fullAddress_ into the array fullAddress
    for (a=0 ; a < addressAmt ; a++){
        fullAddress = $("#fullAddress_"+a).html();
        fullAddresses.push(fullAddress);
    }

    // push org names into array
    for (n=0 ; n < addressAmt ; n++){
        orgName = $("#orgName_"+n).html();
        orgNames.push(orgName);
    }

    // push org IDs into array
    // for (i=0 ; i < addressAmt ; i++){
    //     orgID = $("#orgID_"+i).html();
    //     orgIDs.push(orgID);
    // }
    // push each address in the div with address ID into the all_addresses variable
    // for ( n=0 ; n < addressAmt ; n++){
    //     address = $("#address_"+n).html();
    //     all_addresses.push(address);
    // }

    // addMarker to each address in the array all_addresses
    for (i=0; i< fullAddresses.length ; i++){
        for (n=0; n< fullAddresses.length ; n++){
            var org = orgNames[n];
            var address = fullAddresses[i];
            var infoBox = org + address 
            $mapster.mapster("addMarker", {
            	location: address,
                content: infoBox,
                org_name: org
            });
        };
        // console.log(org);
    };


// below function adds a marker by address

// $mapster.mapster("addMarker", {
// 	location: "Brooklyn Bridge, NY"
// });

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


});
