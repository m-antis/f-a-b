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
    // var locIndex;
 	var $mapster = $("#map-canvas").mapster(Mapster.MAP_OPTIONS);
	 		// geocoder = new google.maps.Geocoder();

// var clickBox = document.getElementById("box");

// clickBox.addEventListener("click", function() {
//     $mapster.mapster("removeMarkers", {
//         lat: 40.592733,
//         lng: -73.940786
//     });
// }, false)


 	$mapster.mapster('addMarker', {
    	lat: 40.708036,
    	lng: -74.006261,
    	content: "huzzah!",
    	org_id: 1
 	});
$("#box").click(function(){
    // $mapster.toggle();
    $mapster.mapster('removeMarkers', function(marker){
        return marker.org_id ===1;
    });
})
 	// $mapster.mapster('addMarker', {
	 // 	lat: 40.715225,
	 // 	lng: -73.9932579,
	 // 	content: "marker2",
	 // 	org_id: 2
 	// });

// below function for adding markers to all addresses in database

var orgNames = []
var addressAmt = parseInt($("#addressAmt").html())
var fullAddresses = []
var allLats = []
var allLngs = []
// var orgIDs = []

// push latitudes and longitudes into an array
    for (n=0 ; n < addressAmt ; n++){
        lat = parseFloat($("#latitude_"+n).html());
        allLats.push(lat);
    }

       for (n=0 ; n < addressAmt ; n++){
        lng = parseFloat($("#longitude_"+n).html());
        allLngs.push(lng);
    }
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


    // addMarker to each address in the array all_addresses
    for (i=0; i< allLngs.length ; i++){
    // for (i=0; i< 4 ; i++){
    //     for (n=0; n< 4 ; n++){
            var org = orgNames[i];
            var address = fullAddresses[i];
            var infoBox = org + address;
            var lat = allLats[i];
            var lng = allLngs[i]
            $mapster.mapster("addMarker", {
            	// location: address,
                lat: lat,
                lng: lng,
                content: infoBox,
                org_name: org
            });
        };
        // console.log(org);

 
        // function doFilter() {
        //     if(!locIndex){
        //         locIndex = {};
        //         for( x=0 ; x < fullAddresses.length; x++) {
        //             locIndex[fullAddresses[x].locid] = x;
        //         }
        //     }
        //     var checked = $("input[type=checkbox]:checked");
        //     var selTypes = [];
        //     for (i=0 ; i < checked.length ; i++) {
        //         selTypes.push($(checked[i]).val());
        //     }
        //     for( i=0 ; i < fullAddresses.length ; i++) {
        //         var sideDom = "p.loc[fullAddresses-locid=" + (i+1) + "]";
                
        //         if(checked.length !== 0 && selTypes.indexOf(data[i].type) < 0) {
        //             $(sideDom).hide();
        //             this.markers[locIndex[i+1]].setVisible(false);
        //         } else {
        //             $(sideDom).show();
        //             this.markers[locIndex[i+1]].setVisible(true);
        //         }
        //     }
        // }
        // $(document).on("click", "input[type=checkbox]", doFilter);


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
