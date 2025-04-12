
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar as CalendarIcon, UploadCloud, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const DonateFood = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Donate Surplus Food</h1>
        <p className="text-gray-600 mb-8">List your surplus food to share with those in need and reduce waste.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="p-6">
              <form>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="foodType">Food Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select food type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bread">Bread & Bakery</SelectItem>
                        <SelectItem value="fruits">Fruits & Vegetables</SelectItem>
                        <SelectItem value="cooked">Cooked Meals</SelectItem>
                        <SelectItem value="dairy">Dairy Products</SelectItem>
                        <SelectItem value="packaged">Packaged Foods</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="quantity">Quantity</Label>
                    <div className="flex space-x-2">
                      <Input 
                        type="number" 
                        id="quantity" 
                        placeholder="Amount" 
                        className="w-1/2" 
                      />
                      <Select defaultValue="kg">
                        <SelectTrigger className="w-1/2">
                          <SelectValue placeholder="Unit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kg">Kilograms (kg)</SelectItem>
                          <SelectItem value="items">Items</SelectItem>
                          <SelectItem value="servings">Servings</SelectItem>
                          <SelectItem value="liters">Liters</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="location">Pickup Location</Label>
                    <Input 
                      type="text" 
                      id="location" 
                      placeholder="Enter address or use current location" 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="expiration">Expiration Date</Label>
                    <div className="flex w-full items-center">
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>Pick a date</span>
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="nutritionTags">Nutrition Tags</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select nutrition value" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high-protein">High Protein</SelectItem>
                        <SelectItem value="low-sugar">Low Sugar</SelectItem>
                        <SelectItem value="gluten-free">Gluten Free</SelectItem>
                        <SelectItem value="dairy-free">Dairy Free</SelectItem>
                        <SelectItem value="vegan">Vegan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Describe the food items you're donating"
                      className="h-24"
                    />
                  </div>
                  
                  <div>
                    <Label>Upload Photos</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-600">
                        Drag and drop an image, or click to browse
                      </p>
                      <Button variant="ghost" size="sm" className="mt-2">
                        Upload Image
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      id="dedication" 
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <Label htmlFor="dedication" className="text-sm cursor-pointer">
                      Dedicate this donation (e.g., in memory of someone)
                    </Label>
                  </div>
                  
                  <div className="flex justify-end space-x-4">
                    <Button variant="outline">Cancel</Button>
                    <Button className="bg-donate text-white hover:bg-donate/80">
                      Submit Listing
                    </Button>
                  </div>
                </div>
              </form>
            </Card>
          </div>
          
          <div>
            <Card className="p-6">
              <h2 className="font-semibold text-lg mb-4">Preview</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="bg-white rounded-lg shadow-sm p-4">
                  <div className="text-sm text-gray-500 mb-1">Cooked Meals</div>
                  <h3 className="font-medium">Food Donation</h3>
                  <div className="flex items-center text-sm mt-2">
                    <span className="font-medium">5 kg</span>
                    <span className="mx-2">•</span>
                    <span className="text-gray-600">Expires in 2 days</span>
                  </div>
                  <div className="mt-3 flex items-center">
                    <div className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                      High Protein
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>High urgency: 24 hours left</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Donation Guidelines</h3>
                <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                  <li>Ensure food items are properly packaged</li>
                  <li>Perishable items must be refrigerated</li>
                  <li>Provide accurate expiration information</li>
                  <li>Be available during your specified pickup window</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateFood;
