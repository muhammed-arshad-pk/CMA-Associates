import { Award, Target, Users, TrendingUp, CheckCircle, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import teamImage from "@/assets/team-professional.jpg";

const About = () => {
  const achievements = [
    { number: "500+", label: "Satisfied Clients", icon: Users },
    { number: "15+", label: "Years of Experience", icon: Award },
    { number: "99%", label: "Success Rate", icon: TrendingUp },
    { number: "50+", label: "Team Members", icon: Target }
  ];

  const values = [
    {
      title: "Professional Excellence",
      description: "Our CMA-certified team maintains the highest standards of professional competence and ethical conduct.",
      icon: Award
    },
    {
      title: "Client-Centric Approach", 
      description: "We prioritize our clients' success and tailor our services to meet their unique business requirements.",
      icon: Users
    },
    {
      title: "Innovation & Technology",
      description: "We leverage cutting-edge technology and innovative solutions to deliver efficient and accurate results.",
      icon: TrendingUp
    }
  ];

  const certifications = [
    "Institute of Cost Accountants of India (ICAI)",
    "Goods and Services Tax (GST) Practitioner",
    "Income Tax Practitioner",
    "ISO 9001:2015 Certified Organization"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About <span className="text-gradient">CMA Associates</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With over 15 years of expertise in financial services, we are your trusted partner for comprehensive accounting solutions and business growth strategies.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Your Trusted Financial Partners
            </h3>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                CMA Associates has been providing exceptional financial services to businesses and individuals across various industries. Our team of Certified Management Accountants brings deep expertise in taxation, auditing, and financial consulting.
              </p>
              <p>
                We understand that every business is unique, which is why we offer customized solutions that address your specific challenges and opportunities. From startups to established enterprises, we help our clients achieve financial clarity and regulatory compliance.
              </p>
              <p>
                Our commitment to excellence, combined with our thorough understanding of Indian financial regulations and international best practices, makes us the preferred choice for businesses seeking reliable accounting services.
              </p>
            </div>

            {/* Certifications */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-foreground mb-4">Our Certifications</h4>
              <div className="space-y-2">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img 
                src={teamImage} 
                alt="Professional team of certified management accountants in business setting" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Achievement Badge */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-medium border">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Star className="h-8 w-8 text-accent fill-current" />
                </div>
                <div className="text-2xl font-bold text-card-foreground">Award Winner</div>
                <div className="text-sm text-muted-foreground">Best Accounting Firm 2023</div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={achievement.label} className="text-center border-border/50 hover:shadow-medium transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="pt-6">
                <div className="bg-gradient-primary p-3 rounded-lg inline-flex mb-4">
                  <achievement.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="text-center border-border/50 hover:shadow-medium transition-all duration-300 animate-fade-in group" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="pt-8 pb-6">
                  <div className="bg-gradient-accent p-4 rounded-lg inline-flex mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold text-card-foreground mb-4">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;