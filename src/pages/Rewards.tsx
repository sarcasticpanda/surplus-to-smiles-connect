
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Award, Check, ChevronRight, Crown, Gift, Info, Trophy, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Rewards = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Reward Store</h1>
          <p className="text-gray-600">Redeem your points and track your achievements</p>
        </div>
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
          <Gift className="h-5 w-5 text-bridge-dark mr-2" />
          <span className="font-medium">150</span>
          <span className="text-gray-600 ml-1">Points Available</span>
        </div>
      </div>
      
      <Tabs defaultValue="rewards" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-3">
          <TabsTrigger value="rewards">Rewards</TabsTrigger>
          <TabsTrigger value="badges">Badges</TabsTrigger>
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
        </TabsList>
        
        <TabsContent value="rewards" className="mt-6">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Available Rewards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "10% off at Green Cafe",
                  points: 50,
                  image: "https://via.placeholder.com/150",
                  category: "Food & Drink"
                },
                {
                  title: "Movie Ticket Voucher",
                  points: 100,
                  image: "https://via.placeholder.com/150",
                  category: "Entertainment"
                },
                {
                  title: "Community Garden Donation",
                  points: 75,
                  image: "https://via.placeholder.com/150",
                  category: "Community"
                },
                {
                  title: "Eco-friendly Shopping Bag",
                  points: 30,
                  image: "https://via.placeholder.com/150",
                  category: "Merchandise"
                },
                {
                  title: "Plant a Tree Certificate",
                  points: 60,
                  image: "https://via.placeholder.com/150",
                  category: "Sustainability"
                },
                {
                  title: "Coffee Shop Gift Card",
                  points: 80,
                  image: "https://via.placeholder.com/150",
                  category: "Food & Drink"
                }
              ].map((reward, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-[4/3] bg-gray-100">
                    <img 
                      src={reward.image} 
                      alt={reward.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <Badge variant="outline" className="mb-2">
                      {reward.category}
                    </Badge>
                    <h3 className="font-semibold mb-1">{reward.title}</h3>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <Gift className="h-4 w-4 text-bridge-dark mr-1" />
                        <span className="font-medium">{reward.points} points</span>
                      </div>
                      <Button className="bg-bridge-dark text-white hover:bg-bridge-dark/90">
                        Redeem
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">How to Earn Points</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-bridge-light w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Gift className="h-6 w-6 text-bridge-dark" />
                  </div>
                  <h3 className="font-medium mb-2">Donate Food</h3>
                  <p className="text-sm text-gray-600">
                    5 points per kg of food donated
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-bridge-light w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Trophy className="h-6 w-6 text-bridge-dark" />
                  </div>
                  <h3 className="font-medium mb-2">Complete Challenges</h3>
                  <p className="text-sm text-gray-600">
                    10-50 points for special donation drives
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-bridge-light w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-6 w-6 text-bridge-dark" />
                  </div>
                  <h3 className="font-medium mb-2">Refer Friends</h3>
                  <p className="text-sm text-gray-600">
                    20 points for each new user who joins
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="badges" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Your Badges</h2>
              <Card className="p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {[
                    { name: "Bridge Builder", desc: "5 donations completed", icon: <Award /> },
                    { name: "First Timer", desc: "First donation made", icon: <Trophy /> },
                    { name: "Community Hero", desc: "Reached 100 points", icon: <Users /> },
                    { name: "Nutrition Champion", desc: "High-protein donations", icon: <Crown /> }
                  ].map((badge, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-bridge-light flex items-center justify-center mb-2">
                        <div className="text-bridge-dark">
                          {badge.icon}
                        </div>
                      </div>
                      <h3 className="font-medium text-sm">{badge.name}</h3>
                      <p className="text-xs text-gray-500 mt-1">{badge.desc}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Badges to Unlock</h2>
              <Card className="p-6">
                <div className="space-y-4">
                  {[
                    { name: "Consistency King", desc: "Donate 5 weeks in a row", progress: 60 },
                    { name: "Waste Warrior", desc: "Save 100kg of food from waste", progress: 40 },
                    { name: "Local Hero", desc: "Support 10 different organizations", progress: 30 }
                  ].map((badge, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                        <Award className="h-5 w-5 text-gray-400" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-sm">{badge.name}</span>
                          <span className="text-xs text-gray-500">{badge.progress}%</span>
                        </div>
                        <Progress value={badge.progress} className="h-2" />
                        <p className="text-xs text-gray-600 mt-1">{badge.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="leaderboard" className="mt-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Community Leaderboard</h2>
              <div className="flex items-center text-sm text-gray-600">
                <Info className="h-4 w-4 mr-1" />
                <span>Updated weekly</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                { rank: 1, name: "Priya's Kitchen", points: 500, type: "Restaurant" },
                { rank: 2, name: "Green Market", points: 420, type: "Grocery Store" },
                { rank: 3, name: "City Bakery", points: 350, type: "Bakery" },
                { rank: 4, name: "Spice Garden", points: 310, type: "Restaurant" },
                { rank: 5, name: "Fresh Farms", points: 280, type: "Produce" },
                { rank: 6, name: "Sweet Delights", points: 245, type: "Bakery" },
                { rank: 7, name: "You", points: 150, type: "Individual", isUser: true },
              ].map((entry, index) => (
                <div 
                  key={index} 
                  className={`flex items-center p-3 rounded-lg ${entry.isUser ? 'bg-bridge-light/30' : 'hover:bg-gray-50'}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                    entry.rank === 1 ? 'bg-yellow-100 text-yellow-800' : 
                    entry.rank === 2 ? 'bg-gray-200 text-gray-800' : 
                    entry.rank === 3 ? 'bg-orange-100 text-orange-800' : 
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {entry.rank}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center">
                      <span className="font-medium">
                        {entry.name}
                        {entry.isUser && <span className="text-bridge-dark"> (You)</span>}
                      </span>
                      <Badge variant="outline" className="ml-2 text-xs">
                        {entry.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Gift className="h-4 w-4 text-bridge-dark mr-2" />
                    <span className="font-semibold">{entry.points}</span>
                    <ChevronRight className="h-4 w-4 text-gray-400 ml-2" />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Rewards;
