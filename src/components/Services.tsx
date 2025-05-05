
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const serviceData = [
  {
    title: "Personal Tax Services",
    description: "Professional tax preparation for individuals, ensuring accuracy and maximum deductions.",
    features: ["Tax Return Preparation", "Amended Tax Returns", "IRS Audit Response", "Tax Planning"],
    link: "/personal-taxation"
  },
  {
    title: "Business Accounting",
    description: "Comprehensive accounting services tailored for small businesses and entrepreneurs.",
    features: ["Financial Statements", "General Ledger", "Account Reconciliation", "Financial Analysis"],
    link: "/business-accounting"
  },
  {
    title: "Business Tax Services",
    description: "Expert tax preparation and planning for all business entities to minimize tax liability.",
    features: ["Corporate Tax Returns", "Partnership Returns", "Payroll Filings", "Tax Planning"],
    link: "/business-taxes"
  },
  {
    title: "Bookkeeping",
    description: "Reliable bookkeeping solutions to keep your financial records accurate and up-to-date.",
    features: ["Data Cleanup", "Bank Reconciliations", "Year-End Close", "Digital Record Keeping"],
    link: "/bookkeeping"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cpa-blue mb-4">Our Professional Services</h2>
          <p className="text-cpa-dark-gray/80 max-w-2xl mx-auto">
            We offer a comprehensive range of accounting and tax services to meet your personal and business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceData.map((service, index) => (
            <Card key={index} className="glass-card hover:shadow-xl transition-all duration-300 overflow-hidden group border-none">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-cpa-blue">{service.title}</CardTitle>
                <CardDescription className="text-cpa-dark-gray/70">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-cpa-dark-gray/80">
                      <svg className="w-4 h-4 mr-2 text-cpa-teal" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="ghost" 
                  className="text-cpa-teal hover:text-cpa-blue group-hover:translate-x-1 transition-transform"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
