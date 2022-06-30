let map = L.map("map").setView([60.393665, 5.327689], 14)

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap"
}).addTo(map)

let marker = L.marker([60.630546, 8.561268]).addTo(map)

marker.bindPopup("<b>Her kommer jeg fra!</br>")