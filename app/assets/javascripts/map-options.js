$(document).on('ready page:load', function(){

(function(window, google, mapster) {

	mapster.MAP_OPTIONS = {
      center: {
        lat: 40.715876,
        lng: -73.933043
      },

      disableDefaultUI: false,
      zoom:12,
      minZoom:6,
      maxZoom:19,
      zoomControlOptions: {
        position: google.maps.ControlPosition.DEFAULT
      },
       styles:

// BEGIN MAP STYLING

	[{"featureType":"water","stylers":[{"color":"#37C6BB"},{"visibility":"on"}]},{"featureType":"landscape","stylers":[{"color":"#f2f2f2"}]},{"featureType":"road","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]}]


// END MAP STYLING
    };

}(window, google, window.Mapster || (window.Mapster = {})))



});
