
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
  },
  {
    id: '7',
    title: 'Wedding Feast Surplus',
    description: 'Large quantity of catered food available',
    type: 'donation',
    lat: 26.9124,
    lng: 75.7873
  },
  {
    id: '8',
    title: 'Grocery Store Daily Donation',
    description: 'Fresh produce and bakery items',
    type: 'donation',
    lat: 22.5726,
    lng: 88.3639
  },
  {
    id: '9',
    title: 'Orphanage Food Request',
    description: 'Nutritious meals needed for 30 children',
    type: 'request',
    lat: 17.3850,
    lng: 78.4867
  },
  {
    id: '10',
    title: 'Elderly Care Home',
    description: 'Seeking soft food donations for seniors',
    type: 'request',
    lat: 13.0827,
    lng: 80.2707
  }
];
