
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { ListFilter, MapPin } from 'lucide-react';
import InteractiveMap from '@/components/InteractiveMap';
import { sampleLocations } from '@/data/mapLocations';

const RequestFood = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-sustain">Request Food</h1>
        <p className="text-slate mb-8">Find available food donations that match your needs.</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="p-6 shadow-lg border-0 bg-gradient-to-b from-white to-mint/10">
              <h2 className="font-semibold text-lg mb-4 text-sustain">Request Details</h2>
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
                      <SelectTrigger className="border-mint focus:ring-sustain">
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
                      <SelectTrigger className="border-mint focus:ring-sustain">
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
                      <SelectTrigger className="border-mint focus:ring-sustain">
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
                    <Textarea id="notes" placeholder="Any additional information about your request" className="h-24 border-mint focus:ring-sustain" />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch id="sms" className="data-[state=checked]:bg-sustain data-[state=checked]:border-sustain" />
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
              <h2 className="font-semibold text-lg text-sustain">Available Donations Nearby</h2>
              <Button variant="outline" size="sm" className="flex items-center border-sustain text-sustain">
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
              <Card className="p-4 hover:shadow-md transition-shadow border border-mint/30 hover:border-mint bg-white">
                <div className="flex justify-between">
                  <div>
                    <span className="text-xs bg-cream text-warmth px-2 py-1 rounded-full">2.5 km away</span>
                    <h3 className="font-medium mt-2">Fresh Produce Bundle</h3>
                    <p className="text-sm text-slate mt-1">Available for pickup today</p>
                    <div className="flex mt-2 gap-2">
                      <span className="text-xs bg-warmth/10 text-warmth px-2 py-1 rounded-full">Vegetables</span>
                      <span className="text-xs bg-sustain/10 text-sustain px-2 py-1 rounded-full">High-Protein</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-bold">5 kg</span>
                    <span className="text-xs text-slate mt-1">Expires in 2 days</span>
                  </div>
                </div>
                <div className="mt-3 flex justify-end">
                  <Button variant="outline" size="sm" className="hover:bg-mint/10 border-sustain text-sustain">View Details</Button>
                </div>
              </Card>
              
              <Card className="p-4 hover:shadow-md transition-shadow border border-mint/30 hover:border-mint bg-white">
                <div className="flex justify-between">
                  <div>
                    <span className="text-xs bg-cream text-warmth px-2 py-1 rounded-full">3.2 km away</span>
                    <h3 className="font-medium mt-2">Bakery Surplus</h3>
                    <p className="text-sm text-slate mt-1">Fresh from local bakery</p>
                    <div className="flex mt-2 gap-2">
                      <span className="text-xs bg-warmth/10 text-warmth px-2 py-1 rounded-full">Breads</span>
                      <span className="text-xs bg-bridge/10 text-bridge px-2 py-1 rounded-full">Pastries</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-bold">3 kg</span>
                    <span className="text-xs text-slate mt-1">Expires today</span>
                  </div>
                </div>
                <div className="mt-3 flex justify-end">
                  <Button variant="outline" size="sm" className="hover:bg-mint/10 border-sustain text-sustain">View Details</Button>
                </div>
              </Card>
              
              <Card className="p-4 hover:shadow-md transition-shadow border border-mint/30 hover:border-mint bg-white">
                <div className="flex justify-between">
                  <div>
                    <span className="text-xs bg-cream text-warmth px-2 py-1 rounded-full">1.8 km away</span>
                    <h3 className="font-medium mt-2">Restaurant Meals</h3>
                    <p className="text-sm text-slate mt-1">Freshly cooked today</p>
                    <div className="flex mt-2 gap-2">
                      <span className="text-xs bg-sustain/10 text-sustain px-2 py-1 rounded-full">Cooked Meals</span>
                      <span className="text-xs bg-warmth/10 text-warmth px-2 py-1 rounded-full">Vegetarian</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-bold">10 meals</span>
                    <span className="text-xs text-slate mt-1">Expires in 10 hours</span>
                  </div>
                </div>
                <div className="mt-3 flex justify-end">
                  <Button variant="outline" size="sm" className="hover:bg-mint/10 border-sustain text-sustain">View Details</Button>
                </div>
              </Card>
              
              <Card className="p-4 hover:shadow-md transition-shadow border border-mint/30 hover:border-mint bg-white">
                <div className="flex justify-between">
                  <div>
                    <span className="text-xs bg-cream text-warmth px-2 py-1 rounded-full">4.5 km away</span>
                    <h3 className="font-medium mt-2">Canned Goods Bundle</h3>
                    <p className="text-sm text-slate mt-1">Non-perishable items</p>
                    <div className="flex mt-2 gap-2">
                      <span className="text-xs bg-bridge/10 text-bridge px-2 py-1 rounded-full">Non-perishable</span>
                      <span className="text-xs bg-sustain/10 text-sustain px-2 py-1 rounded-full">Long shelf-life</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-bold">8 kg</span>
                    <span className="text-xs text-slate mt-1">Expires in 3 months</span>
                  </div>
                </div>
                <div className="mt-3 flex justify-end">
                  <Button variant="outline" size="sm" className="hover:bg-mint/10 border-sustain text-sustain">View Details</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestFood;
