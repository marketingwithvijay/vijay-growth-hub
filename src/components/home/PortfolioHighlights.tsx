import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Globe, ShoppingCart, MapPin } from "lucide-react";

const portfolioItems = [
  {
    icon: TrendingUp,
    title: "Real Estate Google Ads",
    category: "Google Ads",
    result: "300+ leads @ ₹120 CPL",
    description: "High-volume lead generation campaign for real estate developer",
    color: "from-primary to-primary/80",
  },
  {
    icon: MapPin,
    title: "GMB Optimization",
    category: "Local SEO",
    result: "280% improvement in discovery",
    description: "Complete GMB optimization for multi-location business",
    color: "from-accent to-accent/80",
  },
  {
    icon: ShoppingCart,
    title: "Meta Ads for Ecommerce",
    category: "Meta Ads",
    result: "4.2x ROAS",
    description: "High-performing ad campaigns for fashion ecommerce brand",
    color: "from-primary to-primary/80",
  },
  {
    icon: Globe,
    title: "Website Development",
    category: "Development",
    result: "150% conversion increase",
    description: "Modern, responsive website with optimized landing pages",
    color: "from-accent to-accent/80",
  },
];

const PortfolioHighlights = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-up">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Portfolio
          </div>
          <h2 className="section-heading mb-4">
            Featured <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="section-subheading">
            Real results from real campaigns. See how I've helped businesses
            achieve their growth goals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {portfolioItems.map((item, index) => (
            <Link
              key={item.title}
              to="/portfolio"
              className={`group relative overflow-hidden rounded-3xl p-8 text-primary-foreground animate-fade-up stagger-${index + 1}`}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color}`}
              />
              <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary-foreground/20 flex items-center justify-center">
                    <item.icon size={24} />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary-foreground/20 text-xs font-medium">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-serif font-bold">
                    {item.result}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center group-hover:bg-primary-foreground/30 transition-colors">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/portfolio" className="btn-secondary">
            View Full Portfolio
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHighlights;
