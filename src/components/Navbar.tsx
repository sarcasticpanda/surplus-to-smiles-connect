
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  const navLinks = [
    { name: isEnglish ? 'Home' : 'होम', path: '/' },
    { name: isEnglish ? 'Donate Food' : 'भोजन दान करें', path: '/donate' },
    { name: isEnglish ? 'Request Food' : 'भोजन का अनुरोध करें', path: '/request' },
    { name: isEnglish ? 'Dashboard' : 'डैशबोर्ड', path: '/dashboard' },
    { name: isEnglish ? 'Rewards' : 'इनाम', path: '/rewards' },
    { name: isEnglish ? 'Community' : 'समुदाय', path: '/community' },
    { name: isEnglish ? 'About Us' : 'हमारे बारे में', path: '/about' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-10 w-auto"
                src="https://via.placeholder.com/40"
                alt="Surplus to Smiles Connect Logo"
              />
              <span className="ml-2 text-xl font-semibold text-gray-900">
                {isEnglish ? 'Aahaar Setu' : 'आहार सेतु'}
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition duration-150"
              >
                {link.name}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="ml-2"
              aria-label="Toggle language"
            >
              <Globe className="h-5 w-5" />
              <span className="ml-1 text-xs">{isEnglish ? 'EN' : 'हिं'}</span>
            </Button>
            <Button variant="outline" size="sm" className="ml-2">
              <User className="h-4 w-4 mr-2" />
              {isEnglish ? 'Login' : 'लॉगिन'}
            </Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="mr-2"
              aria-label="Toggle language"
            >
              <Globe className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Open menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="outline" size="sm" className="w-full justify-start">
            <User className="h-4 w-4 mr-2" />
            {isEnglish ? 'Login' : 'लॉगिन'}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
