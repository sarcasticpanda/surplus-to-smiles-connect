
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { ListFilter } from 'lucide-react';
import InteractiveMap from '@/components/InteractiveMap';
import { sampleLocations } from '@/data/mapLocations';

const RequestFood = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Request Food</h1>
        <p className="text-gray-600 mb-8">Find available food donations that match your needs.</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="p-6 shadow-lg border-0 bg-gradient-to-b from-white to-gray-50">
              <h2 className="font-semibold text-lg mb-4">Request Details</h2>
              <form>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="name">Organization/Individual Name</Label>
                    <Input id="name" placeholder="Enter your name or organization" />
                  </div>
                  
                  <div>
                    <Label htmlFor="location">Your Location</Label>
                    <Input id="location" placeholder="Enter address or use current location" />
                  </div>
                  
                  <div>
                    <Label htmlFor="preferences">Food Preferences</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select preferences" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vegetarian">Vegetarian</SelectItem>
                        <SelectItem value="non-vegetarian">Non-Vegetarian</SelectItem>
                        <SelectItem value="vegan">Vegan</SelectItem>
                        <SelectItem value="non-perishable">Non-Perishable Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="urgency">Urgency Level</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select urgency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate (Within hours)</SelectItem>
                        <SelectItem value="urgent">Urgent (Within 24 hours)</SelectItem>
                        <SelectItem value="soon">Soon (Within 3 days)</SelectItem>
                        <SelectItem value="planned">Planned (Future event)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="dietary">Dietary Needs</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select specific needs" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high-protein">High-Protein for Kids</SelectItem>
                        <SelectItem value="gluten-free">Gluten-Free</SelectItem>
                        <SelectItem value="low-sodium">Low-Sodium</SelectItem>
                        <SelectItem value="diabetic">Diabetic-Friendly</SelectItem>
                        <SelectItem value="allergen-free">Allergen-Free</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea id="notes" placeholder="Any additional information about your request" className="h-24" />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch id="sms" />
                    <Label htmlFor="sms">Receive SMS alerts for new matching donations</Label>
                  </div>
                  
                  <Button className="w-full bg-request text-white hover:bg-request/80 shadow-md hover:shadow-lg transition-shadow">
                    Request Now
                  </Button>
                </div>
              </form>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-semibold text-lg">Available Donations Nearby</h2>
              <Button variant="outline" size="sm" className="flex items-center">
                <ListFilter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl mb-6">
              <InteractiveMap 
                height="400px" 
                locations={sampleLocations.filter(loc => loc.type === 'donation')}
                centerLat={28.6139}
                centerLng={77.2090}
                zoom={10}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <Card key={item} className="p-4 hover:shadow-md transition-shadow border border-gray-100 hover:border-gray-200 bg-white">
                  <div className="flex justify-between">
                    <div>
                      <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">2.5 km away</span>
                      <h3 className="font-medium mt-2">Fresh Produce Bundle</h3>
                      <p className="text-sm text-gray-600 mt-1">Available for pickup today</p>
                      <div className="flex mt-2 gap-2">
                        <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">Vegetables</span>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">High-Protein</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="font-bold">5 kg</span>
                      <span className="text-xs text-gray-500 mt-1">Expires in 2 days</span>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-end">
                    <Button variant="outline" size="sm" className="hover:bg-gray-50">View Details</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestFood;
