
import React from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { AlertCircle, Award, Calendar, CheckCircle2, Clock, Gift, HistoryIcon, Package, ThumbsUp, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">My Dashboard</h1>
          <p className="text-gray-600">Track your donations, requests, and impact</p>
        </div>
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
          <Gift className="h-5 w-5 text-bridge-dark mr-2" />
          <span className="font-medium">150</span>
          <span className="text-gray-600 ml-1">Reward Points</span>
        </div>
      </div>
      
      <Tabs defaultValue="donor" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-2">
          <TabsTrigger value="donor">Donor View</TabsTrigger>
          <TabsTrigger value="recipient">Recipient View</TabsTrigger>
        </TabsList>
        
        <TabsContent value="donor" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 col-span-full">
              <h2 className="text-xl font-semibold mb-4">Your Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <Package className="h-8 w-8 mx-auto mb-2 text-donate" />
                  <div className="text-3xl font-bold">42</div>
                  <div className="text-gray-600">Donations Made</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <ThumbsUp className="h-8 w-8 mx-auto mb-2 text-donate" />
                  <div className="text-3xl font-bold">105</div>
                  <div className="text-gray-600">People Fed</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <Zap className="h-8 w-8 mx-auto mb-2 text-donate" />
                  <div className="text-3xl font-bold">120</div>
                  <div className="text-gray-600">kg CO2 Saved</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 md:col-span-2">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Donation History</h2>
                <Button variant="ghost" size="sm" className="flex items-center">
                  <HistoryIcon className="h-4 w-4 mr-1" />
                  View All
                </Button>
              </div>
              <div className="space-y-4">
                {[
                  { type: 'Rice and Lentils', quantity: '10 kg', date: 'April 5', status: 'completed' },
                  { type: 'Fresh Produce', quantity: '5 kg', date: 'April 10', status: 'in-transit' },
                  { type: 'Bread and Pastries', quantity: '20 items', date: 'April 15', status: 'pending' }
                ].map((donation, index) => (
                  <div key={index} className="flex justify-between items-center border-b pb-4 last:border-0">
                    <div>
                      <div className="font-medium">{donation.type}</div>
                      <div className="text-sm text-gray-600">
                        {donation.quantity} • {donation.date}
                      </div>
                    </div>
                    <div>
                      {donation.status === 'completed' && (
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                          <CheckCircle2 className="h-3 w-3 mr-1" /> Completed
                        </Badge>
                      )}
                      {donation.status === 'in-transit' && (
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                          <Calendar className="h-3 w-3 mr-1" /> Scheduled
                        </Badge>
                      )}
                      {donation.status === 'pending' && (
                        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                          <Clock className="h-3 w-3 mr-1" /> Pending
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">AI Waste Prediction</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start mb-4">
                  <AlertCircle className="h-5 w-5 text-donate mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">Reduce your rice orders</p>
                    <p className="text-sm text-gray-600">Based on past surplus, consider reducing by 5 kg weekly.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-donate mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">Bread surplus pattern</p>
                    <p className="text-sm text-gray-600">You typically have excess bread on Fridays. Consider listing it proactively.</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-medium mb-2">Earned Badges</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="flex flex-col items-center">
                    <div className="bg-bridge-light p-2 rounded-full">
                      <Award className="h-5 w-5 text-bridge-dark" />
                    </div>
                    <span className="text-xs mt-1">Bridge Builder</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-xs mt-1">First Donation</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="recipient" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 col-span-full">
              <h2 className="text-xl font-semibold mb-4">Request Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <Package className="h-8 w-8 mx-auto mb-2 text-request" />
                  <div className="text-3xl font-bold">8</div>
                  <div className="text-gray-600">Active Requests</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <ThumbsUp className="h-8 w-8 mx-auto mb-2 text-request" />
                  <div className="text-3xl font-bold">15</div>
                  <div className="text-gray-600">Fulfilled Requests</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <Zap className="h-8 w-8 mx-auto mb-2 text-request" />
                  <div className="text-3xl font-bold">85</div>
                  <div className="text-gray-600">kg Food Received</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 md:col-span-2">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Matched Donations</h2>
                <Button variant="ghost" size="sm" className="flex items-center">
                  <HistoryIcon className="h-4 w-4 mr-1" />
                  View All
                </Button>
              </div>
              <div className="space-y-4">
                {[
                  { donor: 'Cafe Green', type: 'Hot meals', quantity: '20 meals', date: 'Today', status: 'ready' },
                  { donor: 'Fresh Market', type: 'Vegetables', quantity: '8 kg', date: 'Tomorrow', status: 'matched' },
                  { donor: 'City Bakery', type: 'Bread', quantity: '15 items', date: 'April 20', status: 'pending' }
                ].map((match, index) => (
                  <div key={index} className="flex justify-between items-center border-b pb-4 last:border-0">
                    <div>
                      <div className="font-medium">{match.type} from {match.donor}</div>
                      <div className="text-sm text-gray-600">
                        {match.quantity} • Pickup: {match.date}
                      </div>
                    </div>
                    <div>
                      {match.status === 'ready' && (
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                          <CheckCircle2 className="h-3 w-3 mr-1" /> Ready for pickup
                        </Badge>
                      )}
                      {match.status === 'matched' && (
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                          <Calendar className="h-3 w-3 mr-1" /> Confirmed
                        </Badge>
                      )}
                      {match.status === 'pending' && (
                        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                          <Clock className="h-3 w-3 mr-1" /> Pending
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Feedback Loop</h2>
              <div>
                <div className="mb-4">
                  <h3 className="font-medium text-sm mb-2">Recent Donation Rating</h3>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex justify-between mb-1">
                      <span>Cafe Green - Hot meals</span>
                      <span className="text-green-600">★★★★★</span>
                    </div>
                    <p className="text-sm text-gray-600">"Fresh and timely! Perfect meals for our shelter residents."</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-sm mb-2">Pending Feedback</h3>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="mb-1">
                      <span>Fresh Market - Vegetables</span>
                    </div>
                    <div className="text-sm text-gray-600">Please rate this donation once received</div>
                    <div className="flex mt-2">
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-yellow-500">★</Button>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-yellow-500">★</Button>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-yellow-500">★</Button>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-yellow-500">★</Button>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-yellow-500">★</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
