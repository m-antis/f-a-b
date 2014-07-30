$(document).on('ready page:load', function(){

(function(window, google, List){

	var Mapster = (function() {
		function Mapster(element, opts) {
			this.gMap = new google.maps.Map(element, opts);
			this.markers = List.create();

			if (opts.geocoder) {
				this.geocoder = new google.maps.Geocoder();
			}


		}
		Mapster.prototype = {
			_on: function(opts) {
				var self = this;
				google.maps.event.addListener(opts.obj, opts.event, function(e){
					opts.callback.call(self,e, opts.obj);
				});
			},


			geocode: function(opts) {
				this.geocoder.geocode({
					address: opts.address
				}, function(results,status) {
					if (status === google.maps.GeocoderStatus.OK) {
						opts.success.call(this, results, status);
					} else {
						opts.error.call(this,status);
					}
				});
			},

			getCurrentPosition: function(callback) {
				if (navigator.geolocation) {
					navigator.geolocation.getCurrentPosition(function(position) {
						callback.call(this, position);
					});
				}
			},
			addMarker: function(opts){
				var marker;
				self = this;
				opts.position = {
					lat: opts.lat,
					lng: opts.lng
				}
				marker = this._createMarker(opts);
				this.markers.add(marker);
				if(opts.event) {
					this._on({
						obj: marker,
						event: opts.event.name,
						callback: opts.event.callback
					});
				}
				if (opts.content){
					this._on({
						obj: marker,
				    	event: 'click',
				    	callback: function() {
			    			var infoWindow = new google.maps.InfoWindow({
						    	content: opts.content
						    });
				    			
						    infoWindow.open(this.gMap, marker);
				    	}
					})
				}
				return marker;
			},
			findBy: function(callback) {
				return this.markers.find(callback);
			},
			removeBy: function(callback){
				this.markers.find(callback, function(markers){
					markers.forEach(function(marker){
						marker.setMap(null);
					});
				});
			},
// loops through each item in the array to find one that matches the argument
			// findMarkerByOrg: function(org_id) {
			// 	var i = 0;
			// 	for(; i < this.markers.length; i++) {
			// 		var marker = this.markers[i];
			// 		if (marker.org_id === org_id) {
			// 			return marker;
			// 		}
			// 	}
			// },
			_createMarker: function (opts){
				opts.map = this.gMap;
				return new google.maps.Marker(opts);
			}
		};
		return Mapster;
	}()); 

	Mapster.create = function (element, opts){
		return new Mapster(element, opts);
	};

	window.Mapster = Mapster;

}(window,google, List))


});