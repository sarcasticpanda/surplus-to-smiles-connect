
export interface MapLocation {
  id: string;
  title: string;
  description: string;
  type: 'donation' | 'request';
  lat: number;
  lng: number;
}

export const sampleLocations: MapLocation[] = [
  {
    id: '1',
    title: 'Fresh Produce Bundle',
    description: 'Available for pickup today, 5kg of vegetables',
    type: 'donation',
    lat: 28.6139,
    lng: 77.2090
  },
  {
    id: '2',
    title: 'Bakery Surplus',
    description: 'Fresh bread and pastries from local bakery',
    type: 'donation',
    lat: 28.5621,
    lng: 77.2841
  },
  {
    id: '3',
    title: 'Emergency Food Needed',
    description: 'Shelter requesting meals for 20 people by evening',
    type: 'request',
    lat: 28.7041,
    lng: 77.1025
  },
  {
    id: '4',
    title: 'School Lunch Program',
    description: 'Need nutritious items for children',
    type: 'request',
    lat: 28.6398,
    lng: 77.1222
  },
  {
    id: '5',
    title: 'Restaurant Surplus',
    description: 'End-of-day meals available for collection',
    type: 'donation',
    lat: 19.0760,
    lng: 72.8777
  },
  {
    id: '6',
    title: 'Community Center Request',
    description: 'Weekly food drive for local families',
    type: 'request',
    lat: 12.9716,
    lng: 77.5946
  }
];
