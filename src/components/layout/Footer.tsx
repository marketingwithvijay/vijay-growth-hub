import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
const Footer = () => {
  return <footer className="bg-foreground text-background">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold">
              Marketing<span className="text-accent">WithVijay</span>
            </h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Helping businesses scale with performance marketing, modern web development, and strategic digital systems.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Portfolio", "Blog", "Contact"].map(link => <li key={link}>
                    <Link to={link === "Home" ? "/" : `/${link.toLowerCase()}`} className="text-background/70 hover:text-accent transition-colors text-sm">
                      {link}
                    </Link>
                  </li>)}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-semibold">Services</h4>
            <ul className="space-y-2">
              {["Google Ads", "Meta Ads", "Website Development", "App Development", "GMB Optimization", "Local SEO"].map(service => <li key={service}>
                  <Link to="/services" className="text-background/70 hover:text-accent transition-colors text-sm">
                    {service}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-semibold">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/70 text-sm">​  <Phone size={16} className="text-accent" />
                +91 9859641115   
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Mail size={16} className="text-accent" />
                hello@marketingwithvijay.com
              </li>
              <li className="flex items-start gap-3 text-background/70 text-sm">​<MapPin size={16} className="text-accent mt-0.5" />
                Guwahati, Assam, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Marketing With Vijay. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-background/60 hover:text-accent text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-accent text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;