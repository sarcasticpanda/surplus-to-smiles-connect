
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin } from 'lucide-react';
import { Icon, DivIcon } from 'leaflet';

// Fix for default marker icons in Leaflet with React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = Icon.extend({
  options: {
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }
});

// Create custom icons for donation and request markers
const donationIcon = new DivIcon({
  className: '',
  html: `<div class="flex items-center justify-center w-8 h-8 bg-warmth rounded-full border-2 border-white shadow-lg">
          <span class="text-white text-xs">D</span>
         </div>`,
  iconSize: [32, 32],
  iconAnchor: [16, 16]
});

const requestIcon = new DivIcon({
  className: '',
  html: `<div class="flex items-center justify-center w-8 h-8 bg-sustain rounded-full border-2 border-white shadow-lg">
          <span class="text-white text-xs">R</span>
         </div>`,
  iconSize: [32, 32],
  iconAnchor: [16, 16]
});

interface MapLocation {
  id: string;
  title: string;
  description: string;
  type: 'donation' | 'request';
  lat: number;
  lng: number;
}

interface InteractiveMapProps {
  height?: string;
  locations?: MapLocation[];
  centerLat?: number;
  centerLng?: number;
  zoom?: number;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({
  height = '400px',
  locations = [],
  centerLat = 20.5937,
  centerLng = 78.9629,
  zoom = 4
}) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg" style={{ height }}>
      <MapContainer 
        center={[centerLat, centerLng]} 
        zoom={zoom} 
        className="h-full w-full z-10" 
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {locations.map((location) => (
          <Marker 
            key={location.id} 
            position={[location.lat, location.lng]} 
            icon={location.type === 'donation' ? donationIcon : requestIcon}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-medium text-base">{location.title}</h3>
                <p className="text-sm text-slate mt-1">{location.description}</p>
                <span 
                  className={`text-xs px-2 py-1 mt-2 inline-block rounded-full ${
                    location.type === 'donation' 
                      ? 'bg-orange-100 text-orange-800' 
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {location.type === 'donation' ? 'Donation' : 'Request'}
                </span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      <div className="absolute inset-0 pointer-events-none rounded-lg" style={{ 
        background: 'linear-gradient(180deg, rgba(255,255,255,0) 80%, rgba(255,255,255,1) 100%)' 
      }} />
      
      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-white/90 px-4 py-2 rounded-md shadow-md z-20 flex gap-4 items-center border border-mint/30">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-warmth"></div>
          <span className="text-xs">Donations</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-sustain"></div>
          <span className="text-xs">Requests</span>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
