import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+91 98765 43210", "+91 87654 32109"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Address", 
      details: ["info@cmaassociates.com", "contact@cmaassociates.com"],
      action: "Send Email"
    },
    {
      icon: MapPin,
      title: "Office Address",
      details: ["123 Business District", "Financial Hub, Mumbai 400001"],
      action: "Get Directions"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      action: "Schedule Meeting"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to streamline your finances? Contact our expert team for personalized accounting solutions and professional advice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-foreground mb-6">Let's Start a Conversation</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you need help with tax filing, GST compliance, or comprehensive financial planning, our certified team is here to assist you. Reach out to us through any of the channels below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={info.title} className="hover:shadow-medium transition-all duration-300 animate-fade-in border-border/50 group" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-primary p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-lg text-card-foreground">{info.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground mb-1">{detail}</p>
                    ))}
                    <Button variant="ghost" size="sm" className="mt-2 text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto font-medium">
                      {info.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '0.5s'}}>
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-medium flex-1">
                <Phone className="mr-2 h-5 w-5" />
                Call for Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 flex-1">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Chat
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-large border-border/50 animate-slide-in-right">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Send us a Message</CardTitle>
              <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email address" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="service">Service Required</Label>
                <select className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="">Select a service</option>
                  <option value="income-tax">Income Tax Filing</option>
                  <option value="gst">GST Services</option>
                  <option value="cma">CMA Services</option>
                  <option value="audit">Financial Auditing</option>
                  <option value="advisory">Business Advisory</option>
                  <option value="bookkeeping">Bookkeeping</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your requirements..." 
                  rows={4}
                />
              </div>
              
              <Button size="lg" className="w-full bg-gradient-primary hover:opacity-90 shadow-medium">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;