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





});