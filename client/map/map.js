Sites = new Mongo.Collection("sites");

Meteor.subscribe("sites");

var marker = {};

Template.map.helpers({
  MapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options

      return {
        center: new google.maps.LatLng(43.746174, -79.386412),
        zoom: 5
      };


    }
  },

});

Template.map.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.

  

  GoogleMaps.ready('sitemap', function(map) {

   
    console.log('Map ready');



    // Adds a info window
    Sites.find().forEach(function(info){


      var infowindow = new google.maps.InfoWindow({ 
          content: 
            ['<span class="InfoWindow">',
            '<h3>' + info.siteID.toUpperCase() + '</h3>',
            '<span>' + info.SiteName + '</span>',
            '</span>'].join('')
        });

      var latlng = new google.maps.LatLng(info.Lat,info.Lon);

      var marker = new google.maps.Marker({
                    position: latlng,
                    map: map.instance
                    });

      marker.addListener('mouseover',function(){
        infowindow.open(map.instance, marker);
      });

      marker.addListener('mouseout',function(){
        infowindow.close();
      });


    });


  });
});