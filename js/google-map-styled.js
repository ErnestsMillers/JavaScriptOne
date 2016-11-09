function init() {

  var mapOptions = {                            // MAP OPTIONS
    center: new google.maps.LatLng(50.7248572,-1.8636024),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 15,
    panControl: false,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE,
      position: google.maps.ControlPosition.TOP_RIGHT
    },
    mapTypeControl: false,
    scaleControl: true,
    scaleControlOptions: {
      style: google.maps.ControlPosition.TOP_CENTER
    },
    streetViewControl: false,
    overviewMapControl: false,
    styles: [
      {
        stylers: [
          { hue: "#00ff6f" },
          { saturation: -50 }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          { lightness: 100 },
          { visibility: "simplified" }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          { lightness: 100 },
          { visibility: "simplified" },
          { color: "#7f7f7f"}
        ]
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
          { lightness: 100 },
          { visibility: "simplified" },
          { color: "#ccccff"}
        ]
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
          { hue: "#ff4c4c" },
          { saturation: +80 }
        ]
      },
      {
        featureType: "transit",
        elementType: "labels",
        stylers: [
          { hue: "#ff0066" },
          { saturation: +80 }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "labels",
        stylers: [
          { visibility: "on" }
        ]
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          { hue: "#000"}
        ]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          { hue: "#6666b2" }
        ]
      },
      {
        featureType: "road",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }
    ]
  };
  var venueMap;
  venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript() {
  var script = document.createElement('script');
  script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';

  document.body.appendChild(script);
}

window.onload = loadScript;
