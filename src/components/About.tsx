
import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-cpa-gray/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="glass-card rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop" 
                  alt="Maman CPA Office" 
                  className="w-full h-[450px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 right-8 glass-card p-4 rounded-lg shadow-lg">
                <p className="text-sm text-cpa-blue font-bold">Established in 2008</p>
                <p className="text-xs text-cpa-dark-gray/80">15+ Years of Excellence</p>
              </div>
              <div className="absolute -top-6 -left-6 glass-card p-4 rounded-lg shadow-lg">
                <p className="text-lg text-cpa-blue font-bold">Maman CPA</p>
                <p className="text-xs text-cpa-dark-gray/80">Rockville, Maryland</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-cpa-blue mb-6">About Maman CPA</h2>
            <p className="text-cpa-dark-gray/80 mb-4">
              Founded in 2008, Maman CPA initially focused on tax return preparation and expanded into accounting in 2009. Our mission is to provide quality and dependable tax, accounting, and bookkeeping solutions that save our clients time and stress.
            </p>
            <p className="text-cpa-dark-gray/80 mb-6">
              We understand the importance of being available when our clients need us, which is why we offer evening and weekend hours to accommodate busy schedules.
            </p>
            
            <div className="glass-card p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-cpa-blue mb-3">About David Maman, CPA</h3>
              <p className="text-cpa-dark-gray/80 mb-3">
                David holds two master's degrees from the University of Maryland in accounting and finance. He brings extensive experience with both start-ups and established businesses.
              </p>
              <p className="text-cpa-dark-gray/80">
                His expertise includes tax return preparation for individuals, S and C corporations, LLCs, and partnerships, as well as IRS audit responses and payroll filings.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="glass-card p-4 rounded-lg text-center">
                <p className="text-cpa-blue font-bold text-2xl">15+</p>
                <p className="text-xs text-cpa-dark-gray/70">Years Experience</p>
              </div>
              <div className="glass-card p-4 rounded-lg text-center">
                <p className="text-cpa-blue font-bold text-2xl">2</p>
                <p className="text-xs text-cpa-dark-gray/70">Master's Degrees</p>
              </div>
              <div className="glass-card p-4 rounded-lg text-center">
                <p className="text-cpa-blue font-bold text-2xl">7+</p>
                <p className="text-xs text-cpa-dark-gray/70">Industries Served</p>
              </div>
              <div className="glass-card p-4 rounded-lg text-center">
                <p className="text-cpa-blue font-bold text-2xl">500+</p>
                <p className="text-xs text-cpa-dark-gray/70">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
