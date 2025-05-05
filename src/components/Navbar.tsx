
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-cpa-blue">Maman <span className="text-cpa-teal">CPA</span></h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-cpa-blue hover:text-cpa-teal transition-colors">Home</Link>
          <Link to="/about" className="text-cpa-blue hover:text-cpa-teal transition-colors">About</Link>
          <Link to="/personal-taxation" className="text-cpa-blue hover:text-cpa-teal transition-colors">Personal Tax</Link>
          <Link to="/business-accounting" className="text-cpa-blue hover:text-cpa-teal transition-colors">Business Services</Link>
          <Link to="/contact" className="text-cpa-blue hover:text-cpa-teal transition-colors">Contact</Link>
          <Button className="bg-cpa-teal hover:bg-cpa-teal/90 text-white">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-cpa-blue">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-nav p-4 absolute top-full left-0 right-0 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-cpa-blue hover:text-cpa-teal py-2 transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="text-cpa-blue hover:text-cpa-teal py-2 transition-colors" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/personal-taxation" className="text-cpa-blue hover:text-cpa-teal py-2 transition-colors" onClick={() => setIsOpen(false)}>Personal Tax</Link>
            <Link to="/business-accounting" className="text-cpa-blue hover:text-cpa-teal py-2 transition-colors" onClick={() => setIsOpen(false)}>Business Services</Link>
            <Link to="/contact" className="text-cpa-blue hover:text-cpa-teal py-2 transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
            <Button className="bg-cpa-teal hover:bg-cpa-teal/90 text-white w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
