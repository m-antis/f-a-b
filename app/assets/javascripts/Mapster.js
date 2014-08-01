$(document).on('ready page:load', function(){

  (function(window, google) {

    var Mapster = (function() {
      function Mapster(element, opts) {
        this.gMap = new google.maps.Map(element, opts);
        this.markers = [];
      }
      Mapster.prototype = {
        zoom: function(level) {
          if (level) {
            this.gMap.setZoom(level);
          } else {
            return this.gMap.getZoom();
          }
        },
        _on: function(opts) {
          var self = this;
          google.maps.event.addListener(opts.obj, opts.event, function(e) {
            opts.callback.call(self, e);
          });
        },
        addMarker: function(opts) {
          var marker;
          opts.position = {
            lat: opts.lat,
            lng: opts.lng
          }
          marker = this._createMarker(opts);
          this._addMarker(marker);

          console.log("created")
          if (opts.event) {
            this._on({
              obj: marker,
              event: opts.event.name,
              callback: opts.event.callback
            });
          }
          if (opts.content) {
            this._on({
              obj: marker,
              event: 'click',
              callback: function() {
                var infoWindow = new google.maps.InfoWindow({
                  content: opts.content,
                  maxWidth: 170
                });

                infoWindow.open(this.gMap, marker);
              }
            })
          }
          return marker;
        },
        _addMarker: function(marker) {
          this.markers.push(marker);
        },
        _removeMarker: function(marker) {
          var indexOf = this.markers.indexOf(marker);
          if (indexOf !== -1) {
            this.markers.splice(indexOf, 1);
            marker.setMap(null);
          }
        },

        findMarkerById: function(id) {
          var i = 0;
          for(; i < this.markers.length; i++) {
            var marker = this.markers[i];
            if (marker.id === id) {
              return marker;
              // marker.setVisible(false);
            }

          }
        },

        hideMarkerById: function(id) {
          var i = 0;
          for(; i < this.markers.length; i++) {
            var marker = this.markers[i];
            if (marker.id === id) {
              // return marker;
              console.log(marker);
              marker.setVisible(false);
            }

          }
        },
        showMarkerById: function(id) {
          var i = 0;
          for(; i < this.markers.length; i++) {
            var marker = this.markers[i];
            if (marker.id === id) {
              // return marker;
              marker.setVisible(true);
            }

          }
        },
        // hideMarker: function(id) {
        //   if (marker.id === id) {
        //     $(this.marker).hide();
        //   }
        // },
        _createMarker: function(opts) {
          opts.map = this.gMap;
          return new google.maps.Marker(opts);
         console.log("create marker works")
        }
      };
      return Mapster;
    }());

    Mapster.create = function(element, opts) {
      return new Mapster(element, opts);
    };

    window.Mapster = Mapster;

  }(window, google));

});
