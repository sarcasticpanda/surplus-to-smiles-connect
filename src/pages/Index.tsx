
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Gift, Heart, ListPlus, MapPin, Utensils, UserPlus, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import StatCard from '@/components/StatCard';
import TestimonialCard from '@/components/TestimonialCard';
import HowItWorksCard from '@/components/HowItWorksCard';
import CallToActionButton from '@/components/CallToActionButton';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bridge-pattern opacity-25"></div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="z-10 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                <span className="text-bridge-dark block mb-2">Connecting</span>
                <span>Surplus to Smiles</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Join the movement to end food waste and hunger. Our platform connects food donors with those who need it most, creating a community of care and sustainability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <CallToActionButton 
                  to="/donate" 
                  variant="donate" 
                  icon={<Utensils className="h-5 w-5" />}
                >
                  Donate Food
                </CallToActionButton>
                <CallToActionButton 
                  to="/request" 
                  variant="request" 
                  icon={<ListPlus className="h-5 w-5" />}
                >
                  Request Food
                </CallToActionButton>
              </div>
              <div className="bg-orange-100 border-l-4 border-donate p-4 rounded-md">
                <div className="flex items-start">
                  <Volume2 className="h-5 w-5 text-donate mr-2 mt-1" />
                  <div>
                    <p className="font-semibold text-donate">Nutrition Spotlight</p>
                    <p className="text-gray-700">High-protein meals donated for children today!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative lg:block animate-scale-in">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1591243315780-978fd00ff9db" 
                  alt="Diverse people sharing food" 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Real-Time Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Food Redistributed"
              value={750}
              suffix="kg"
              icon={<Utensils className="h-6 w-6" />}
              delay={0}
            />
            <StatCard
              title="Meals Provided"
              value={1500}
              suffix="meals"
              icon={<Heart className="h-6 w-6" />}
              delay={200}
            />
            <StatCard
              title="CO2 Emissions Avoided"
              value={900}
              suffix="kg"
              icon={<Volume2 className="h-6 w-6" />}
              delay={400}
            />
            <StatCard
              title="Active Donors"
              value={120}
              suffix="donors"
              icon={<UserPlus className="h-6 w-6" />}
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* Map Placeholder Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Food Near You</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              View real-time donations and requests in your area. Connect with donors and recipients to make a difference in your community.
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg h-[400px] flex items-center justify-center shadow-inner">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Interactive Map Coming Soon</h3>
              <p className="text-gray-600 max-w-md mx-auto mb-6">
                Our interactive map will show nearby food donation and request locations in real-time.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" className="flex items-center">
                  View Donations <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
                <Button variant="outline" className="flex items-center">
                  View Requests <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Our platform makes it easy to donate or request food in just a few simple steps.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <HowItWorksCard 
              step={1}
              title="List Surplus Food"
              description="Restaurants, stores, and individuals can list their surplus food items with details and photos."
              icon={<ListPlus className="h-6 w-6 text-bridge-dark" />}
            />
            <HowItWorksCard 
              step={2}
              title="Match with Recipients"
              description="Our system matches your donation with nearby recipients who need those items."
              icon={<UserPlus className="h-6 w-6 text-bridge-dark" />}
            />
            <HowItWorksCard 
              step={3}
              title="Share and Earn Rewards"
              description="Complete the donation process and earn reward points for your contribution."
              icon={<Gift className="h-6 w-6 text-bridge-dark" />}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Community Says</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard 
              quote="Aahaar Setu helped our restaurant feed 100 people this month! The platform is incredibly easy to use and the impact is real."
              name="Priya Sharma"
              role="Restaurant Owner"
              imageSrc="https://randomuser.me/api/portraits/women/12.jpg"
            />
            <TestimonialCard 
              quote="As an NGO working with underprivileged children, this platform has been a game changer. We now receive regular nutritious food donations."
              name="Rahul Verma"
              role="NGO Director"
              imageSrc="https://randomuser.me/api/portraits/men/32.jpg"
            />
            <TestimonialCard 
              quote="I was throwing away excess food from my bakery every day until I found Aahaar Setu. Now that food helps local shelters."
              name="Aisha Khan"
              role="Bakery Owner"
              imageSrc="https://randomuser.me/api/portraits/women/66.jpg"
            />
          </div>
          <div className="text-center mt-10">
            <Link to="/community">
              <Button variant="outline" className="flex items-center mx-auto">
                View More Stories <ArrowUpRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-bridge-dark text-white">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="mb-8">
              Join our community today and help build bridges between surplus food and those who need it most. Together, we can reduce waste and hunger.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CallToActionButton 
                to="/donate" 
                variant="donate" 
                className="bg-white text-donate hover:bg-gray-100"
              >
                Start Donating
              </CallToActionButton>
              <CallToActionButton 
                to="/request" 
                variant="request" 
                className="bg-white text-request hover:bg-gray-100"
              >
                Request Food
              </CallToActionButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
