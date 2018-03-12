// url for map base layer
var layer = "https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?" +
            "access_token=pk.eyJ1Ijoia2pnMzEwIiwiYSI6ImNpdGRjbWhxdjAwNG0yb3A5b21jOXluZTUifQ." +
            "T6YbdDixkOBWH_k9GbS8JQ";

// url for earthquake geoJSON data        
var quakeURL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson';

// call to earthquake url
d3.json(quakeURL, function(error, quakeData) {
    if (error) {
        console.warn(error);
    };
    console.log(quakeData)
    // create leaflet map
    var myMap = L.map("map", {
        center: [37.09, -95.71],
        zoom: 5,
    });

    // add base layer
    L.tileLayer(layer).addTo(myMap)
    
    // add geoJSON data
    L.geoJSON(quakeData).addTo(myMap)
})