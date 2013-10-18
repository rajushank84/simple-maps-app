var map;

function initialize() {
    var mapOptions = {
          zoom: 14,
          //center: new google.maps.LatLng(-34.397, 150.644),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        },
        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    // Try HTML5 geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = new google.maps.LatLng(position.coords.latitude,
                position.coords.longitude);



            var infoBox = new InfoBox({
                position: pos,
                map: map,
                content: "<div class='infoBox'>You are here</div>"
            });

            infoBox.open(map);

            map.setCenter(pos);

        }, function () {
            handleNoGeolocation();
        });
    } else {
        handleNoGeolocation();
    }
}

function handleNoGeolocation() {
    alert("Geolocation failed.");
}

google.maps.event.addDomListener(window, 'load', initialize);
