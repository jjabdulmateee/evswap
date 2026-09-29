import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { X, Zap, MapPin } from "lucide-react";
import { useMap } from "@/contexts/MapContext";
import "leaflet/dist/leaflet.css";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const greenIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const stations = [
  { name: "Hayatabad Phase 5", address: "Phase 5, Hayatabad, Peshawar", lat: 34.0068, lng: 71.4411, hours: "24/7" },
  { name: "Hayatabad Phase 6", address: "Phase 6, Hayatabad, Peshawar", lat: 33.9985, lng: 71.4358, hours: "24/7" },
  { name: "Islamia College", address: "Islamia College, University Road, Peshawar", lat: 34.0077, lng: 71.5249, hours: "6am – 10pm" },
  { name: "University of Peshawar", address: "University of Peshawar, Peshawar", lat: 34.0160, lng: 71.5139, hours: "6am – 10pm" },
  { name: "Saddar", address: "Saddar Bazaar, Peshawar", lat: 34.0053, lng: 71.5681, hours: "24/7" },
];

export function SwapStationsModal() {
  const { isOpen, closeMap } = useMap();

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-green-500 to-cyan-500 p-2 rounded-xl">
              <Zap className="w-5 h-5 text-white fill-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">EVswap Stations</h2>
              <p className="text-sm text-muted-foreground">5 stations active in Peshawar</p>
            </div>
          </div>
          <button
            onClick={closeMap}
            className="p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Map */}
        <div className="flex-1 min-h-0 relative" style={{ height: "420px" }}>
          <MapContainer
            center={[34.0100, 71.4900]}
            zoom={12}
            style={{ height: "100%", width: "100%" }}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {stations.map((station) => (
              <Marker key={station.name} position={[station.lat, station.lng]} icon={greenIcon}>
                <Popup>
                  <div className="p-1">
                    <p className="font-bold text-sm">{station.name}</p>
                    <p className="text-xs text-gray-500 mt-1">{station.address}</p>
                    <p className="text-xs text-green-600 font-medium mt-1">⏰ {station.hours}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Station List */}
        <div className="flex-shrink-0 px-6 py-4 border-t border-border bg-gray-50">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">All Stations</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {stations.map((station) => (
              <div key={station.name} className="flex items-start gap-2 bg-white rounded-xl p-3 border border-border">
                <MapPin className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{station.name}</p>
                  <p className="text-xs text-muted-foreground">{station.hours}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
