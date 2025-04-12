
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Check, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import StatCard from '@/components/StatCard';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Aahaar Setu</h1>
        <p className="text-xl text-gray-600">Building bridges to end food waste and hunger</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            Aahaar Setu ("Food Bridge" in Hindi) connects food surplus with those in need, creating an efficient ecosystem that reduces waste while addressing hunger and malnutrition in communities.
          </p>
          <p className="text-gray-700 mb-6">
            We believe that by building bridges between donors and recipients, we can create lasting impact that benefits both people and the planet.
          </p>
          <div className="space-y-4">
            {[
              "Reduce food waste across the supply chain",
              "Address hunger and malnutrition with targeted nutrition",
              "Build community connections through food sharing",
              "Provide incentives for sustainable food practices"
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="mt-1 mr-3 text-green-500">
                  <Check className="h-5 w-5" />
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433" 
            alt="Team volunteering with food" 
            className="w-full h-auto"
          />
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            title="Total Food Rescued"
            value={5250}
            suffix="kg"
            icon={<Check className="h-6 w-6" />}
            delay={0}
          />
          <StatCard
            title="People Fed"
            value={8500}
            suffix=""
            icon={<Check className="h-6 w-6" />}
            delay={200}
          />
          <StatCard
            title="CO2 Emissions Saved"
            value={12000}
            suffix="kg"
            icon={<Check className="h-6 w-6" />}
            delay={400}
          />
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              name: "Ananya Sharma",
              role: "Founder & CEO",
              image: "https://randomuser.me/api/portraits/women/32.jpg",
              bio: "Former restaurant owner passionate about reducing food waste"
            },
            {
              name: "Rohan Verma",
              role: "CTO",
              image: "https://randomuser.me/api/portraits/men/42.jpg",
              bio: "Tech entrepreneur focused on social impact solutions"
            },
            {
              name: "Priya Patel",
              role: "Community Manager",
              image: "https://randomuser.me/api/portraits/women/45.jpg",
              bio: "NGO veteran with 10+ years in food security programs"
            },
            {
              name: "Vikram Singh",
              role: "Operations Lead",
              image: "https://randomuser.me/api/portraits/men/67.jpg",
              bio: "Logistics expert specializing in last-mile delivery"
            }
          ].map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-bridge-dark mb-2">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            "https://via.placeholder.com/150x80?text=Restaurant+Association",
            "https://via.placeholder.com/150x80?text=City+Food+Bank",
            "https://via.placeholder.com/150x80?text=Green+Initiatives",
            "https://via.placeholder.com/150x80?text=Tech+Innovators"
          ].map((logo, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <img src={logo} alt={`Partner ${index + 1}`} className="max-h-16" />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" className="flex items-center mx-auto">
            Become a Partner <ExternalLink className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            Have questions or interested in partnering with us? Reach out to our team.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <Mail className="h-5 w-5 mr-3 text-bridge-dark mt-0.5" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">info@aahaarsetu.org</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="h-5 w-5 mr-3 text-bridge-dark mt-0.5" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-3 text-bridge-dark mt-0.5" />
              <div>
                <p className="font-medium">Address</p>
                <p className="text-gray-600">123 Food Bridge Road, Tech Hub, Bangalore - 560001</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input placeholder="Your Name" />
                </div>
                <div>
                  <Input placeholder="Your Email" />
                </div>
              </div>
              <Input placeholder="Subject" />
              <Textarea placeholder="Your Message" className="h-32" />
              <Button className="w-full bg-bridge-dark text-white hover:bg-bridge-dark/90">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
