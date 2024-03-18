function initMap() {

  var centerLatLng = { lat: 47.3769, lng: 8.5417 };

  var map = new google.maps.Map(document.getElementById("map"), {
    center: centerLatLng,
    zoom: 12,
    mapTypeId: "satellite", 
    labels: false, 
    
  });

  var trashCanMarkers = [
    {
      position: { lat: 47.3769, lng: 8.5417 },
      title: "Mülltonne Paradeplatz",
      fillPercentage: 60, 
    },
    {
      position: { lat: 47.3686, lng: 8.5392 }, 
      title: "Mülltonne Bahnhofstrasse",
      fillPercentage: 75,
    },
    {
      position: { lat: 47.3857, lng: 8.5383 }, 
      title: "Mülltonne Zürichseeufer",
      fillPercentage: 50,
    },
    {
      position: { lat: 47.3903, lng: 8.5116 },
      title: "Mülltonne ETH Zürich",
      fillPercentage: 40,
    },
    
  ];

  var landfillMarkers = [
    {
      position: { lat: 47.3653, lng: 8.5586 }, 
      title: "Müllhalde 1",
      fillPercentage: 80,
    },
    {
      position: { lat: 47.3886, lng: 8.5216 }, 
      title: "Müllhalde 2",
      fillPercentage: 70,
    },
   
  ];

  var depotMarkers = [
    {
      position: { lat: 47.4047, lng: 8.5173 },
      title: "Müllwagendepot 1",
    },
    {
      position: { lat: 47.3778, lng: 8.4902 }, 
      title: "Müllwagendepot 2",
    },
    {
      position: { lat: 47.39, lng: 8.55 }, 
      title: "Müllwagendepot 3",
    },
    
  ];

  trashCanMarkers.forEach(function (markerInfo) {
    var marker = new google.maps.Marker({
      position: markerInfo.position,
      map: map,
      title: markerInfo.title,
    });

    var contentString =
      "<div>" +
      "<h3>" +
      markerInfo.title +
      "</h3>" +
      "<p>Füllstand: " +
      markerInfo.fillPercentage +
      "%</p>" +
      "</div>";

    var infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    marker.addListener("click", function () {
      infowindow.open(map, marker);
    });
  });

  landfillMarkers.forEach(function (landfillMarkerInfo) {
    var landfillMarker = new google.maps.Marker({
      position: landfillMarkerInfo.position,
      map: map,
      title: landfillMarkerInfo.title,
      icon: {
        url: "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
      },
    });

    var landfillContentString =
      "<div>" +
      "<h3>" +
      landfillMarkerInfo.title +
      "</h3>" +
      "<p>Füllstand: " +
      landfillMarkerInfo.fillPercentage +
      "%</p>" +
      "</div>";

    var landfillInfowindow = new google.maps.InfoWindow({
      content: landfillContentString,
    });

    
    landfillMarker.addListener("click", function () {
      landfillInfowindow.open(map, landfillMarker);
    });
  });

  depotMarkers.forEach(function (depotMarkerInfo) {
    var depotMarker = new google.maps.Marker({
      position: depotMarkerInfo.position,
      map: map,
      title: depotMarkerInfo.title,
      icon: {
        url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
      },
    });

    var depotContentString =
      "<div>" +
      "<h3>" +
      depotMarkerInfo.title +
      "</h3>" +
      "<p>Ein Müllwagendepot.</p>" +
      "</div>";

    var depotInfowindow = new google.maps.InfoWindow({
      content: depotContentString,
    });

    depotMarker.addListener("click", function () {
      depotInfowindow.open(map, depotMarker);
    });
  });
}

window.onload = function () {
  initMap();
};
