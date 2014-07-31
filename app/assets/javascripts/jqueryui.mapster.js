$(document).on('ready page:load', function(){

(function(window, Mapster) {
	    // the widget definition, where "custom" is the namespace,
	    // "colorize" the widget name
	    $.widget( "mapster.mapster", {
	      // default options
	      options: { 
// defaults go here
	      },
	 
	      // the constructor
	      _create: function() {
	        var element = this.element[0];
		        options = this.options;
	        this.map = Mapster.create(element, options);
	      },
	 
	      // called when created, and later when changing options
	      _refresh: function() {
	
	      },
	 
	      // a public method to change the color to a random value
	      // can be called directly via .colorize( "random" )	 
	 		addMarker: function(opts) {

	 			// geocoding
	 			// var self = this;
	 			// if (opts.location) {
	 			// 	this.map.geocode({
	 			// 		address: opts.location,
	 			// 		success: function(results) {
	 			// 			results.forEach(function(result) {
	 			// 				opts.lat = result.geometry.location.lat();
	 			// 				opts.lng = result.geometry.location.lng();
	 			// 				self.map.addMarker(opts);
	 			// 			});
	 			// 		},
	 			// 		error: function(status) {
	 			// 			console.error(status)
	 			// 		}
	 			// 	});
	 			// } else {
	 				this.map.addMarker(opts);
	 			// }
	 		},
	 		findMarkers: function(callback) {
	 			return this.map.findBy(callback);
	 		},

	 		removeMarkers: function(callback) {
	 			this.map.removeBy(callback);
	 		},

	 		getCurrentPosition: function(callback) {
	 			this.map.getCurrentPosition(callback);
	 		},

	 		markers: function() {
	 			return this.map.markers.items;
	 		},
	      // events bound via _on are removed automatically
	      // revert other modifications here
	      _destroy: function() {

	      },
	 
	      // _setOptions is called with a hash of all options that are changing
	      // always refresh when changing options
	      _setOptions: function() {
	        // _super and _superApply handle keeping the right this-context
	        this._superApply( arguments );
	        this._refresh();
	      },
	 
	      // _setOption is called for each individual option that is changing
	      _setOption: function( key, value ) {
	 	        this._super( key, value );
	      }
	    });

}(window, Mapster))


});