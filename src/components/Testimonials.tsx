
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "David at Maman CPA has been handling my business taxes for over 5 years. His expertise and attention to detail have saved me thousands in tax liability.",
    name: "Michael Roberts",
    title: "Small Business Owner",
    rating: 5
  },
  {
    quote: "I was overwhelmed with tax issues before finding Maman CPA. Their professional service and knowledge turned my situation around completely.",
    name: "Jennifer Lewis",
    title: "Freelance Consultant",
    rating: 5
  },
  {
    quote: "The team at Maman CPA provided excellent accounting services for my medical practice. They understand our industry and have been invaluable partners.",
    name: "Dr. Sarah Johnson",
    title: "Medical Professional",
    rating: 5
  },
  {
    quote: "Their bookkeeping services are exceptional. They've streamlined our financial processes and given us clarity we never had before.",
    name: "Thomas Wilson",
    title: "Retail Business Owner",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-cpa-gray/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cpa-blue mb-4">What Our Clients Say</h2>
          <p className="text-cpa-dark-gray/80 max-w-2xl mx-auto">
            We take pride in providing exceptional service to our clients. Here's what they have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card border-none hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-cpa-dark-gray/80 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-cpa-blue">{testimonial.name}</p>
                  <p className="text-sm text-cpa-dark-gray/70">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
