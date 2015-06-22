Sites = new Mongo.Collection("sites");

Meteor.subscribe("sites");

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

    // Add a marker to the map once it's ready
    var locations = Sites.find().forEach(function(coords){
        var myLatlng = new google.maps.LatLng(coords.Lat,coords.Lon);
        var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map.instance
                    });


          
          });
  });
});