
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin } from 'lucide-react';

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
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');

  useEffect(() => {
    // For demo purposes - in a real app, this should be stored securely
    const token = localStorage.getItem('mapbox_token');
    if (token) {
      setMapboxToken(token);
    }
  }, []);

  const handleSaveToken = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem('token') as HTMLInputElement;
    const token = input.value;
    if (token) {
      localStorage.setItem('mapbox_token', token);
      setMapboxToken(token);
    }
  };

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [centerLng, centerLat],
      zoom: zoom,
      pitch: 45,
      attributionControl: false
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add map atmosphere for a soothing look
    map.current.on('style.load', () => {
      if (map.current) {
        map.current.addSource('donation-points', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: locations.map(loc => ({
              type: 'Feature',
              properties: {
                id: loc.id,
                title: loc.title,
                description: loc.description,
                type: loc.type
              },
              geometry: {
                type: 'Point',
                coordinates: [loc.lng, loc.lat]
              }
            }))
          }
        });

        // Add donation points layer
        map.current.addLayer({
          id: 'donations',
          type: 'circle',
          source: 'donation-points',
          filter: ['==', 'type', 'donation'],
          paint: {
            'circle-radius': 8,
            'circle-color': '#F97316',
            'circle-opacity': 0.8,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#ffffff'
          }
        });

        // Add request points layer
        map.current.addLayer({
          id: 'requests',
          type: 'circle',
          source: 'donation-points',
          filter: ['==', 'type', 'request'],
          paint: {
            'circle-radius': 8,
            'circle-color': '#10B981',
            'circle-opacity': 0.8,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#ffffff'
          }
        });

        // Add click event to show popups
        map.current.on('click', ['donations', 'requests'], (e) => {
          if (!e.features || e.features.length === 0) return;
          
          const feature = e.features[0];
          const coordinates = (feature.geometry as any).coordinates.slice();
          const { title, description, type } = feature.properties;
          
          new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(`
              <strong>${title}</strong>
              <p>${description}</p>
              <span class="text-xs px-2 py-1 rounded-full ${
                type === 'donation' ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800'
              }">
                ${type === 'donation' ? 'Donation' : 'Request'}
              </span>
            `)
            .addTo(map.current);
        });
        
        map.current.on('mouseenter', ['donations', 'requests'], () => {
          if (map.current) map.current.getCanvas().style.cursor = 'pointer';
        });
        
        map.current.on('mouseleave', ['donations', 'requests'], () => {
          if (map.current) map.current.getCanvas().style.cursor = '';
        });
      }
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken, centerLat, centerLng, zoom, locations]);

  if (!mapboxToken) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-inner text-center">
        <MapPin className="h-12 w-12 text-gray-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-4">Please Enter Your Mapbox Token</h3>
        <p className="text-gray-600 max-w-md mx-auto mb-6">
          To use the interactive map, you need to enter your Mapbox public token. 
          Get one for free at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">mapbox.com</a>.
        </p>
        <form onSubmit={handleSaveToken} className="flex flex-col gap-4">
          <input 
            type="text" 
            name="token" 
            placeholder="Enter your Mapbox public token" 
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bridge-dark"
            required
          />
          <button 
            type="submit" 
            className="bg-bridge-dark text-white px-4 py-2 rounded-md hover:bg-opacity-90"
          >
            Save Token
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg" style={{ height }}>
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute inset-0 pointer-events-none rounded-lg" style={{ 
        background: 'linear-gradient(180deg, rgba(255,255,255,0) 80%, rgba(255,255,255,1) 100%)' 
      }} />
    </div>
  );
};

export default InteractiveMap;
