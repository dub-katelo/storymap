// Initialize the map centered on Nairobi
var map = L.map('map').setView([1.286389, 36.817223], 3); // Adjust the initial coordinates and zoom level as needed

// Add a tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Define your custom locations with images in pop-ups (latitude, longitude, city name, and image path)
var customLocations = [
  {
    location: [1.286389, 36.817223], // Nairobi
    popupContent: "<b>Nairobi:</b><br>The capital city of Kenya.<br><img src='nairobi.jpeg' alt='Nairobi' width='200'/>"
  },
  {
    location: [30.044420, 31.235712], // Cairo
    popupContent: "<b>Cairo:</b><br>The capital city of Egypt.<br><img src='cairo.jpeg' alt='Cairo' width='200'/>"
  },
  {
    location: [51.507351, -0.127758], // London
    popupContent: "<b>London:</b><br>The capital city of the United Kingdom.<br><img src='lomdon.jpeg' alt='London' width='200'/>"
  },
  {
    location: [40.416775, -3.703790], // Madrid
    popupContent: "<b>Madrid:</b><br>The capital city of Spain.<br><img src='madrid.jpeg' alt='Madrid' width='200'/>"
  },
  {
    location: [40.712776, -74.005974], // New York
    popupContent: "<b>New York:</b><br>The largest city in the United States.<br><img src='newyork.jpeg' alt='New York' width='200'/>"
  }
];

// Loop through the custom locations and add them to the map
customLocations.forEach(function(point) {
  L.marker(point.location)
    .addTo(map)
    .bindPopup(point.popupContent);
});

// Add the route from Nairobi to New York via Cairo, London, and Madrid using GeoJSON
var route = {
  "type": "Feature",
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [36.817223, 1.286389], // Nairobi
      [31.235712, 30.044420], // Cairo
      [-0.127758, 51.507351], // London
      [-3.703790, 40.416775], // Madrid
      [-74.005974, 40.712776]  // New York
    ]
  }
};

// Add the route to the map
L.geoJSON(route, {
  style: {
    color: "blue", // Flight path color set to blue
    weight: 3,
    opacity: 0.7
  }
}).addTo(map);
