// eslint-disable-next-line no-unused-vars
function initMap() {
} // now it IS a function and it is in global

(() => {
  // eslint-disable-next-line no-func-assign
  initMap = function() {
    const myLatLng = { lat: 56.164506617622315, lng: 10.202232602658677 };
    // eslint-disable-next-line no-undef
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 19,
      center: myLatLng,
      styles: [
        {
          'featureType': 'administrative',
          'elementType': 'geometry',
          'stylers': [
            {
              'visibility': 'off',
            },
          ],
        },
        {
          'featureType': 'poi',
          'stylers': [
            {
              'visibility': 'off',
            },
          ],
        },
        {
          'featureType': 'road',
          'elementType': 'labels.icon',
          'stylers': [
            {
              'visibility': 'off',
            },
          ],
        },
        {
          'featureType': 'transit',
          'stylers': [
            {
              'visibility': 'off',
            },
          ],
        },
      ],
    });

    // eslint-disable-next-line no-undef
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: 'Scorpio Cykelværksted',
      label: {
        text: 'Scorpio Cykelværksted',
        color: '#2b2a28',
        fontWeight: 'bold',
        fontSize: '16px',
      },
      icon: {
        // eslint-disable-next-line no-undef
        labelOrigin: new google.maps.Point(20, 60),
        // eslint-disable-next-line no-undef
        scaledSize: new google.maps.Size(50, 50), // scaled size
        url: 'images/icons/map-pin.svg',
      },
    });

    // eslint-disable-next-line no-undef
    const service = new google.maps.places.PlacesService(map);
    service.getDetails({
      placeId: 'ChIJKflki78_TEYRUFf_TWaF3nNM',
    }, function(place) {
      if (place && place.reviews) {
        // eslint-disable-next-line no-undef
        setReviews(place.reviews);
      } else {
        // eslint-disable-next-line no-undef
        deleteOurClientsSection();
      }
    });
  };
})();