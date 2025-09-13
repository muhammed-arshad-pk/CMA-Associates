import { Calculator, FileText, PieChart, Shield, TrendingUp, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import servicesImage from "@/assets/services-meeting.jpg";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Income Tax Filing",
      description: "Complete income tax preparation and filing services for individuals and businesses with maximum deductions.",
      features: ["Individual Tax Returns", "Business Tax Filing", "Tax Planning", "Audit Support"]
    },
    {
      icon: Calculator,
      title: "GST Services",
      description: "Comprehensive GST registration, filing, and compliance services to keep your business fully compliant.",
      features: ["GST Registration", "Monthly Returns", "GST Reconciliation", "Input Tax Credit"]
    },
    {
      icon: PieChart,
      title: "CMA Services",
      description: "Certified Management Accountant services for strategic financial planning and business growth.",
      features: ["Financial Analysis", "Cost Management", "Budget Planning", "Performance Metrics"]
    },
    {
      icon: Shield,
      title: "Financial Auditing",
      description: "Thorough financial audits to ensure accuracy, compliance, and transparency in your financial records.",
      features: ["Internal Audits", "Statutory Audits", "Tax Audits", "Compliance Reviews"]
    },
    {
      icon: TrendingUp,
      title: "Business Advisory",
      description: "Strategic business consulting to optimize operations, reduce costs, and maximize profitability.",
      features: ["Financial Consulting", "Business Strategy", "Risk Assessment", "Growth Planning"]
    },
    {
      icon: Users,
      title: "Bookkeeping",
      description: "Professional bookkeeping services to maintain accurate financial records and ensure regulatory compliance.",
      features: ["Daily Bookkeeping", "Financial Statements", "Payroll Services", "Expense Management"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Professional</span> Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive financial solutions tailored to meet your business needs. From tax filing to strategic consulting, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={service.title} className="group hover:shadow-medium transition-all duration-300 animate-fade-in border-border/50" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-primary p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="mt-4 text-primary hover:text-primary-foreground hover:bg-primary group-hover:translate-x-2 transition-all">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative rounded-2xl overflow-hidden shadow-large">
          <div className="absolute inset-0">
            <img 
              src={servicesImage} 
              alt="Professional CMA accountants reviewing financial documents and tax papers" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/90"></div>
          </div>
          <div className="relative px-8 py-16 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Optimize Your Finances?
            </h3>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Get a free consultation with our certified experts and discover how we can help your business save money and stay compliant.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-large text-lg px-8 py-3">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;