var mymap = L.map('mapid').setView([29.646, -82.351], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/meag4n/ck2wjeqyy1q841co15wftemuw/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWVhZzRuIiwiYSI6ImNrMndpcGI4YjBmd24zaWxxazZ4cGJtMjQifQ.-nmA__wFEFYqynSAqda8gw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

var marker = L.marker([29.644307, -82.356262]).addTo(mymap);

var marker2 = L.marker([29.647817, -82.347312]).addTo(mymap);

var marker3 = L.marker([29.649988, -82.348594]).addTo(mymap);

var marker4 = L.marker([29.650398, -82.342902]).addTo(mymap);

marker.bindPopup("Lake Alice");
marker2.bindPopup("Weimer Hall");
marker3.bindPopup("Ben Hill Griffin Stadium");
marker4.bindPopup("Plaza of the Americas");

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

mymap.on('click', onMapClick);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);
