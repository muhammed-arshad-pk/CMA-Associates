import { Calculator, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const services = [
    "Income Tax Filing",
    "GST Services", 
    "CMA Services",
    "Financial Auditing",
    "Business Advisory",
    "Bookkeeping"
  ];

  const quickLinks = [
    "About Us",
    "Our Services", 
    "Contact",
    "Privacy Policy",
    "Terms of Service",
    "Blog"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-accent p-2 rounded-lg">
                  <Calculator className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">CMA Associates</h3>
                  <p className="text-sm text-primary-foreground/80">Certified Management Accountants</p>
                </div>
              </div>
              <p className="text-primary-foreground/90 leading-relaxed">
                Your trusted partner for comprehensive financial solutions. We provide expert CMA services, tax filing, GST compliance, and business advisory to help your business thrive.
              </p>
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-primary-foreground/90">123 Business District</p>
                    <p className="text-primary-foreground/80">Financial Hub, Mumbai 400001</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-primary-foreground/90">+91 98765 43210</p>
                    <p className="text-primary-foreground/80">+91 87654 32109</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-primary-foreground/90">info@cmaassociates.com</p>
                    <p className="text-primary-foreground/80">contact@cmaassociates.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 CMA Associates. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;