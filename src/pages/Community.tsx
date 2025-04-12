
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, ChevronRight, Clock, Heart, MessageCircle, ThumbsUp, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Community = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Community Hub</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Connect with others, share recipes, sustainability tips, and organize food drives.
        </p>
      </div>
      
      <Tabs defaultValue="discussions" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-3">
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
          <TabsTrigger value="recipes">Recipes</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
        </TabsList>
        
        <TabsContent value="discussions" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Recent Discussions</h2>
                <Button variant="outline" size="sm">
                  Start Discussion
                </Button>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Tips for transporting hot meals safely",
                    author: "Priya Sharma",
                    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
                    time: "2 hours ago",
                    comments: 8,
                    likes: 24,
                    category: "Food Safety"
                  },
                  {
                    title: "Best practices for reducing restaurant food waste",
                    author: "Rahul Verma",
                    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                    time: "Yesterday",
                    comments: 15,
                    likes: 42,
                    category: "Sustainability"
                  },
                  {
                    title: "Organizing a community food drive next month",
                    author: "Aisha Khan",
                    avatar: "https://randomuser.me/api/portraits/women/66.jpg",
                    time: "2 days ago",
                    comments: 23,
                    likes: 37,
                    category: "Events"
                  }
                ].map((post, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-3">
                          <img src={post.avatar} alt={post.author} />
                        </Avatar>
                        <div>
                          <h3 className="font-medium">{post.author}</h3>
                          <div className="text-sm text-gray-500">{post.time}</div>
                        </div>
                      </div>
                      <Badge variant="outline">{post.category}</Badge>
                    </div>
                    <h2 className="text-lg font-semibold mt-4">{post.title}</h2>
                    <div className="flex items-center mt-6 pt-4 border-t">
                      <Button variant="ghost" size="sm" className="text-gray-600">
                        <MessageCircle className="h-4 w-4 mr-1" /> {post.comments}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-600">
                        <Heart className="h-4 w-4 mr-1" /> {post.likes}
                      </Button>
                      <div className="ml-auto">
                        <Button variant="ghost" size="sm">
                          Read More <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <Card className="p-6">
                <h2 className="text-lg font-semibold mb-4">Join the Movement</h2>
                <p className="text-gray-600 text-sm mb-6">
                  Subscribe to our newsletter for updates, impact stories, and community events.
                </p>
                <div className="space-y-4">
                  <Input placeholder="Your name" />
                  <Input placeholder="Your email" />
                  <Button className="w-full">Subscribe</Button>
                </div>
              </Card>
              
              <Card className="p-6 mt-6">
                <h2 className="text-lg font-semibold mb-4">Trending Topics</h2>
                <ul className="space-y-3">
                  {["Food waste reduction", "Nutritious meal planning", "Community partnerships", "Sustainable packaging", "Food safety"].map((topic, index) => (
                    <li key={index}>
                      <a href="#" className="flex items-center text-gray-700 hover:text-bridge-dark">
                        <span className="mr-2">#{index + 1}</span>
                        <span>{topic}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="recipes" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Vegetable Stir Fry with Leftover Produce",
                image: "https://via.placeholder.com/300",
                author: "Chef Meera",
                time: "20 mins",
                difficulty: "Easy"
              },
              {
                title: "Day-Old Bread Pudding",
                image: "https://via.placeholder.com/300",
                author: "Bakery Pete",
                time: "45 mins",
                difficulty: "Medium"
              },
              {
                title: "Creative Fruit Salad with Almost-Overripe Fruits",
                image: "https://via.placeholder.com/300",
                author: "Health Guru Sia",
                time: "10 mins",
                difficulty: "Easy"
              },
              {
                title: "Banana Peel Curry (Zero Waste Recipe)",
                image: "https://via.placeholder.com/300",
                author: "Sustainable Sam",
                time: "30 mins",
                difficulty: "Medium"
              },
              {
                title: "Wilted Greens Soup",
                image: "https://via.placeholder.com/300",
                author: "Food Rescue Rachel",
                time: "25 mins",
                difficulty: "Easy"
              },
              {
                title: "Vegetable Stock from Scraps",
                image: "https://via.placeholder.com/300",
                author: "Zero Waste Zack",
                time: "60 mins",
                difficulty: "Easy"
              }
            ].map((recipe, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video bg-gray-100">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2">{recipe.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>By {recipe.author}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-1 text-gray-500" />
                      <span>{recipe.time}</span>
                    </div>
                    <Badge variant="outline">{recipe.difficulty}</Badge>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View Recipe
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <h3 className="font-semibold mb-4">Share Your Recipe Using Surplus Ingredients</h3>
            <Button className="bg-bridge-dark text-white hover:bg-bridge-dark/90">
              Submit Recipe
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="events" className="mt-6">
          <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Event Donation Mode</h2>
            <p className="text-gray-600 mb-6">
              Organizing an event with surplus food? Use our bulk donation form to coordinate quick distribution to multiple recipients.
            </p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Event Name</label>
                  <Input placeholder="e.g., Wedding Reception, Corporate Event" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Event Date</label>
                  <Input type="date" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Expected Food Surplus</label>
                <Textarea placeholder="Describe type and quantity of food expected" className="h-24" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Pickup Location</label>
                  <Input placeholder="Event venue address" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Pickup Window</label>
                  <div className="flex space-x-2">
                    <Input type="time" className="w-full" />
                    <span className="flex items-center">to</span>
                    <Input type="time" className="w-full" />
                  </div>
                </div>
              </div>
              
              <Button className="bg-bridge-dark text-white hover:bg-bridge-dark/90">
                Create Event Donation
              </Button>
            </form>
          </div>
          
          <h2 className="text-xl font-semibold mb-4">Upcoming Community Events</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Community Food Drive",
                date: "May 15, 2024",
                location: "Central Park",
                organizer: "Food For All NGO",
                attendees: 42
              },
              {
                title: "Restaurant Surplus Workshop",
                date: "May 22, 2024",
                location: "Downtown Convention Center",
                organizer: "Zero Waste Coalition",
                attendees: 28
              },
              {
                title: "Cooking with Leftovers Class",
                date: "June 5, 2024",
                location: "Community Kitchen",
                organizer: "Chef Association",
                attendees: 15
              }
            ].map((event, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold mb-1">{event.title}</h3>
                <div className="text-sm text-gray-600 mb-4">Organized by {event.organizer}</div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-bridge-dark" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-bridge-dark" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 mr-2 text-bridge-dark" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                  <Button size="sm" className="bg-bridge-dark text-white hover:bg-bridge-dark/90">
                    I'll Attend
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Community;
