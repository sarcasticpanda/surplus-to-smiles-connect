
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Gift, Heart, ListPlus, MapPin, Utensils, UserPlus, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import StatCard from '@/components/StatCard';
import TestimonialCard from '@/components/TestimonialCard';
import HowItWorksCard from '@/components/HowItWorksCard';
import CallToActionButton from '@/components/CallToActionButton';
import InteractiveMap from '@/components/InteractiveMap';
import { sampleLocations } from '@/data/mapLocations';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Enhanced Styling */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-cream to-white overflow-hidden">
        <div className="absolute inset-0 bridge-pattern opacity-25"></div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="z-10 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-slate">
                <span className="text-sustain block mb-2">Connecting</span>
                <span>Surplus to Smiles</span>
              </h1>
              <p className="text-lg text-slate mb-8">
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
              <div className="bg-peach/20 border-l-4 border-warmth p-4 rounded-md shadow-sm">
                <div className="flex items-start">
                  <Volume2 className="h-5 w-5 text-warmth mr-2 mt-1" />
                  <div>
                    <p className="font-semibold text-warmth">Nutrition Spotlight</p>
                    <p className="text-slate">High-protein meals donated for children today!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative lg:block animate-scale-in">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2940&auto=format&fit=crop" 
                  alt="Diverse people sharing food" 
                  className="w-full h-auto object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sustain/30 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-16 px-4 pattern-dots">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-sustain">Our Real-Time Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Food Redistributed"
              value={750}
              suffix="kg"
              icon={<Utensils className="h-6 w-6 text-sustain" />}
              delay={0}
              className="bg-white shadow-soft"
            />
            <StatCard
              title="Meals Provided"
              value={1500}
              suffix="meals"
              icon={<Heart className="h-6 w-6 text-warmth" />}
              delay={200}
              className="bg-white shadow-soft"
            />
            <StatCard
              title="CO2 Emissions Avoided"
              value={900}
              suffix="kg"
              icon={<Volume2 className="h-6 w-6 text-sustain" />}
              delay={400}
              className="bg-white shadow-soft"
            />
            <StatCard
              title="Active Donors"
              value={120}
              suffix="donors"
              icon={<UserPlus className="h-6 w-6 text-bridge" />}
              delay={600}
              className="bg-white shadow-soft"
            />
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-cream">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-sustain">Find Food Near You</h2>
            <p className="text-slate max-w-2xl mx-auto">
              View real-time donations and requests in your area. Connect with donors and recipients to make a difference in your community.
            </p>
          </div>
          <div className="rounded-lg shadow-xl overflow-hidden">
            <InteractiveMap 
              height="500px" 
              locations={sampleLocations}
              centerLat={20.5937}
              centerLng={78.9629}
              zoom={4}
            />
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" className="flex items-center bg-white hover:bg-gray-50 border-sustain text-sustain">
              View Donations <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button variant="outline" className="flex items-center bg-white hover:bg-gray-50 border-warmth text-warmth">
              View Requests <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-cream to-white pattern-leaves">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-sustain">How It Works</h2>
          <p className="text-slate text-center max-w-2xl mx-auto mb-12">
            Our platform makes it easy to donate or request food in just a few simple steps.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <HowItWorksCard 
              step={1}
              title="List Surplus Food"
              description="Restaurants, stores, and individuals can list their surplus food items with details and photos."
              icon={<ListPlus className="h-6 w-6 text-sustain" />}
              className="bg-white shadow-soft"
            />
            <HowItWorksCard 
              step={2}
              title="Match with Recipients"
              description="Our system matches your donation with nearby recipients who need those items."
              icon={<UserPlus className="h-6 w-6 text-sustain" />}
              className="bg-white shadow-soft"
            />
            <HowItWorksCard 
              step={3}
              title="Share and Earn Rewards"
              description="Complete the donation process and earn reward points for your contribution."
              icon={<Gift className="h-6 w-6 text-sustain" />}
              className="bg-white shadow-soft"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section with Enhanced Styling */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-mint/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-sustain">What Our Community Says</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard 
              quote="Aahaar Setu helped our restaurant feed 100 people this month! The platform is incredibly easy to use and the impact is real."
              name="Priya Sharma"
              role="Restaurant Owner"
              imageSrc="https://images.unsplash.com/photo-1644982647970-e72b0397e57b?q=80&w=1974&auto=format&fit=crop"
              className="bg-white shadow-soft"
            />
            <TestimonialCard 
              quote="As an NGO working with underprivileged children, this platform has been a game changer. We now receive regular nutritious food donations."
              name="Rahul Verma"
              role="NGO Director"
              imageSrc="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop"
              className="bg-white shadow-soft"
            />
            <TestimonialCard 
              quote="I was throwing away excess food from my bakery every day until I found Aahaar Setu. Now that food helps local shelters."
              name="Aisha Khan"
              role="Bakery Owner"
              imageSrc="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=1974&auto=format&fit=crop"
              className="bg-white shadow-soft"
            />
          </div>
          <div className="text-center mt-10">
            <Link to="/community">
              <Button variant="outline" className="flex items-center mx-auto bg-white hover:bg-gray-50 border-sustain text-sustain">
                View More Stories <ArrowUpRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section with Enhanced Styling */}
      <section className="py-16 px-4 bg-gradient-to-r from-sustain to-mint/70 text-white">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="mb-8 text-white/90">
              Join our community today and help build bridges between surplus food and those who need it most. Together, we can reduce waste and hunger.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CallToActionButton 
                to="/donate" 
                variant="donate" 
                className="bg-white text-warmth hover:bg-cream shadow-lg hover:shadow-xl transition-shadow"
              >
                Start Donating
              </CallToActionButton>
              <CallToActionButton 
                to="/request" 
                variant="request" 
                className="bg-white text-sustain hover:bg-cream shadow-lg hover:shadow-xl transition-shadow"
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
