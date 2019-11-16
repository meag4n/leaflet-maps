var mymap = L.map('mapid2').setView([38.157, -96.193], 3.89);

L.tileLayer('https://api.mapbox.com/styles/v1/meag4n/ck2zavawp29zp1cqefix8pm7f/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWVhZzRuIiwiYSI6ImNrMndpcGI4YjBmd24zaWxxazZ4cGJtMjQifQ.-nmA__wFEFYqynSAqda8gw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

for ( let i = 0; i < places.length; i++) {
    L.marker( [places[i].latitude, places[i].longitude ] )
    .bindPopup( '<h3>' + places[i].prFirm + '</h3>' + '<p>' + places[i].description + '</p>')
    .addTo(mymap);
}
