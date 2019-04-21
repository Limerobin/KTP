var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];

function initmap() {
	// set up the map
	map = new L.Map('map');

	// create the tile layer with correct attribution
	var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 1, maxZoom: 15, attribution: osmAttrib});

	//Startvy för karta
	map.setView(new L.LatLng(60.7, 15),7);
	map.addLayer(osm);
	let jsonFile = "./jsonData.json";
	$.getJSON(jsonFile, function(jsonData) {
		console.log(jsonData);
		L.geoJSON(jsonData, {
			onEachFeature: setPopup
		}).addTo(map);
	});
}

function setPopup(feature, layer){
	let popupmsg = "<h3>"+feature.properties.name+"</h3>";
	popupmsg += "<strong>KTP-projektledare:</strong><br>"+feature.properties.projectLeader+"<br>";
	popupmsg += "<strong>KTP-handledare:</strong><br>"+feature.properties.tutor+"<br>";
	popupmsg += "<a>Mer info</a>";
	layer.bindPopup(popupmsg).togglePopup();
}
