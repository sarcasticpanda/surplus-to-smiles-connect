
export interface MapLocation {
  id: string;
  title: string;
  description: string;
  type: 'donation' | 'request';
  lat: number;
  lng: number;
}

export const sampleLocations: MapLocation[] = [
  // Delhi region
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
  
  // Mumbai region
  {
    id: '5',
    title: 'Restaurant Surplus',
    description: 'End-of-day meals available for collection',
    type: 'donation',
    lat: 19.0760,
    lng: 72.8777
  },
  {
    id: '11',
    title: 'Diwali Food Drive',
    description: 'Festival sweets and meals for distribution',
    type: 'donation',
    lat: 19.1136,
    lng: 72.8697
  },
  {
    id: '12',
    title: 'Slum Area Food Support',
    description: 'Need daily essentials for 50 families',
    type: 'request',
    lat: 19.0330,
    lng: 72.8353
  },
  
  // Bangalore region
  {
    id: '6',
    title: 'Community Center Request',
    description: 'Weekly food drive for local families',
    type: 'request',
    lat: 12.9716,
    lng: 77.5946
  },
  {
    id: '13',
    title: 'Tech Company Cafeteria Surplus',
    description: 'Corporate lunch leftovers, well-packaged',
    type: 'donation',
    lat: 12.9512,
    lng: 77.6852
  },
  {
    id: '14',
    title: 'Organic Farm Produce',
    description: 'Fresh vegetables from sustainable farming',
    type: 'donation',
    lat: 13.0159,
    lng: 77.5390
  },
  
  // Jaipur region
  {
    id: '7',
    title: 'Wedding Feast Surplus',
    description: 'Large quantity of catered food available',
    type: 'donation',
    lat: 26.9124,
    lng: 75.7873
  },
  {
    id: '15',
    title: 'Street Children Support',
    description: 'Daily meals needed for 25 street children',
    type: 'request',
    lat: 26.9260,
    lng: 75.8235
  },
  
  // Kolkata region
  {
    id: '8',
    title: 'Grocery Store Daily Donation',
    description: 'Fresh produce and bakery items',
    type: 'donation',
    lat: 22.5726,
    lng: 88.3639
  },
  {
    id: '16',
    title: 'Food Bank Collection',
    description: 'Collection center for non-perishable items',
    type: 'donation',
    lat: 22.5958,
    lng: 88.3698
  },
  
  // Hyderabad region
  {
    id: '9',
    title: 'Orphanage Food Request',
    description: 'Nutritious meals needed for 30 children',
    type: 'request',
    lat: 17.3850,
    lng: 78.4867
  },
  {
    id: '17',
    title: 'Biryani Distribution Drive',
    description: 'Traditional biryani distribution for 100 people',
    type: 'donation',
    lat: 17.4156,
    lng: 78.4347
  },
  
  // Chennai region
  {
    id: '10',
    title: 'Elderly Care Home',
    description: 'Seeking soft food donations for seniors',
    type: 'request',
    lat: 13.0827,
    lng: 80.2707
  },
  {
    id: '18',
    title: 'Coastal Area Food Relief',
    description: 'Post-monsoon support for fishing communities',
    type: 'request',
    lat: 13.1067,
    lng: 80.2932
  },
  
  // Ahmedabad region
  {
    id: '19',
    title: 'Textile Factory Worker Meals',
    description: 'Daily meal support for 40 workers',
    type: 'request',
    lat: 23.0225,
    lng: 72.5714
  },
  {
    id: '20',
    title: 'Community Kitchen Surplus',
    description: 'Daily fresh meals from Gurudwara kitchen',
    type: 'donation',
    lat: 23.0469,
    lng: 72.5215
  }
];
