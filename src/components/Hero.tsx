
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-r from-cpa-gray to-white overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1586892477838-2b96e85e0f96?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cpa-blue leading-tight">
              Professional Accounting & Tax Services
            </h1>
            <p className="mt-6 text-lg text-cpa-dark-gray/80">
              Life has its stresses, your tax return shouldn't be one of them. Let the professionals at Maman CPA prepare your tax return.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button className="bg-cpa-blue hover:bg-cpa-light-blue text-white px-6 py-3 text-lg">
                Our Services
              </Button>
              <Button variant="outline" className="border-cpa-teal text-cpa-teal hover:bg-cpa-teal hover:text-white px-6 py-3 text-lg">
                Contact Us
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-card p-5 rounded-lg">
                <h3 className="font-bold text-cpa-blue">15+ Years</h3>
                <p className="text-sm text-cpa-dark-gray/70">Trusted Experience</p>
              </div>
              <div className="glass-card p-5 rounded-lg">
                <h3 className="font-bold text-cpa-blue">500+</h3>
                <p className="text-sm text-cpa-dark-gray/70">Satisfied Clients</p>
              </div>
              <div className="glass-card p-5 rounded-lg">
                <h3 className="font-bold text-cpa-blue">100%</h3>
                <p className="text-sm text-cpa-dark-gray/70">Dedicated Service</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="glass-card rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" 
                  alt="Professional accountant working" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 glass-card p-6 rounded-lg max-w-sm">
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-cpa-blue font-semibold">5.0/5.0</span>
                </div>
                <p className="text-sm text-cpa-dark-gray/80 italic">
                  "David at Maman CPA has been handling my business finances for years. His expertise and attention to detail have saved me both money and headaches!"
                </p>
                <p className="mt-2 text-sm font-semibold text-cpa-blue">- Sarah Johnson, Small Business Owner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
