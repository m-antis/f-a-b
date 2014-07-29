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

 (function(window, mapster) {

    // map options
    var options = mapster.MAP_OPTIONS,
    element = document.getElementById("map-canvas"),
    // map
    map = mapster.create(element, options);

    var marker = map.addMarker({
    	lat: 40.708036,
    	lng: -74.006261,
    	content: "huzzah!"
    	// custom options:
    	// org_id: 1,
    	// icon: 'http://mapicons.nicolasmollet.com/wp-content/uploads/mapicons/shape-default/color-5ec8bd/shapecolor-color/shadow-1/border-black/symbolstyle-contrast/symbolshadowstyle-no/gradient-no/clothers_male.png'
    });

    



  }(window, window.Mapster || (window.Mapster = {})));



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
