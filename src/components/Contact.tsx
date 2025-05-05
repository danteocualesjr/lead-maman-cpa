
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Home } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cpa-blue mb-4">Contact Us</h2>
          <p className="text-cpa-dark-gray/80 max-w-2xl mx-auto">
            Have questions or ready to get started? Reach out to us today for professional assistance with your accounting and tax needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-cpa-blue mb-6">Get In Touch</h3>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-cpa-dark-gray mb-1">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="Your Name" 
                    className="bg-white/50 border-white/20 focus:border-cpa-teal"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-cpa-dark-gray mb-1">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-white/50 border-white/20 focus:border-cpa-teal"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-cpa-dark-gray mb-1">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  type="text" 
                  placeholder="Subject" 
                  className="bg-white/50 border-white/20 focus:border-cpa-teal"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-cpa-dark-gray mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your Message" 
                  rows={5} 
                  className="bg-white/50 border-white/20 focus:border-cpa-teal resize-none"
                />
              </div>
              
              <Button className="w-full bg-cpa-blue hover:bg-cpa-light-blue">
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <div className="glass-card rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-cpa-blue mb-6">Our Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-cpa-teal rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-cpa-blue">Phone</h4>
                    <p className="text-cpa-dark-gray/80">(240) 660-5880</p>
                    <p className="text-sm text-cpa-dark-gray/60">Available during business hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-cpa-teal rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-cpa-blue">Email</h4>
                    <p className="text-cpa-dark-gray/80">David@maman-cpa.com</p>
                    <p className="text-sm text-cpa-dark-gray/60">We'll respond as soon as possible</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-cpa-teal rounded-full flex items-center justify-center mr-4">
                    <Home className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-cpa-blue">Office</h4>
                    <p className="text-cpa-dark-gray/80">9200 Corporate Blvd Suite #142</p>
                    <p className="text-cpa-dark-gray/80">Rockville, MD 20850</p>
                    <p className="text-sm text-cpa-dark-gray/60">Evening and weekend appointments available</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl overflow-hidden h-64">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3096.5467367322113!2d-77.19700682343566!3d39.09982897164633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7cd84a02619b5%3A0x5cc30a64ecdd22bb!2s9200%20Corporate%20Blvd%20%23142%2C%20Rockville%2C%20MD%2020850!5e0!3m2!1sen!2sus!4v1683548024566!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Maman CPA Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
