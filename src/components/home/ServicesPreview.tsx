import { Link } from "react-router-dom";
import {
  ArrowRight,
  Search,
  Facebook,
  Globe,
  Smartphone,
  MapPin,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Google Ads",
    description:
      "Data-driven Search, Display & Performance Max campaigns that deliver ROI.",
    color: "bg-primary",
  },
  {
    icon: Facebook,
    title: "Meta Ads",
    description:
      "High-performing Facebook & Instagram campaigns for leads and sales.",
    color: "bg-accent",
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Modern, responsive, fast-loading websites and landing pages.",
    color: "bg-primary",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Custom Android/iOS apps with clean UI/UX and optimized performance.",
    color: "bg-accent",
  },
  {
    icon: MapPin,
    title: "GMB Optimization",
    description: "Increase map rankings, calls, and store visits.",
    color: "bg-primary",
  },
  {
    icon: TrendingUp,
    title: "Local SEO",
    description:
      "Rank higher in your city through keyword optimization and citations.",
    color: "bg-accent",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-up">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            What I Do
          </div>
          <h2 className="section-heading mb-4">
            Services That <span className="text-gradient">Drive Results</span>
          </h2>
          <p className="section-subheading">
            Comprehensive digital marketing and development solutions tailored to
            help your business grow and succeed online.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to="/services"
              className={`card-premium group animate-fade-up stagger-${index + 1}`}
            >
              <div
                className={`w-14 h-14 rounded-2xl ${service.color} text-primary-foreground flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
              >
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary">
            View All Services
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
