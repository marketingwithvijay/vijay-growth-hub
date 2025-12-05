import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

const categories = ["All", "Google Ads", "Meta Ads", "Websites", "Apps", "SEO / GMB"];

const portfolioItems = [
  {
    id: 1,
    title: "Real Estate Lead Generation",
    category: "Google Ads",
    problem: "Low-quality leads with high CPL",
    solution: "Search + Landing Page Optimization with targeted keywords",
    result: "300+ leads @ ₹120 CPL",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "GMB Optimization - Multi-Location",
    category: "SEO / GMB",
    problem: "Poor visibility in local searches",
    solution: "Complete GMB optimization with citation building",
    result: "280% improvement in discovery",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 3,
    title: "Fashion Ecommerce Meta Ads",
    category: "Meta Ads",
    problem: "Low ROAS on existing campaigns",
    solution: "Creative refresh + audience segmentation",
    result: "4.2x ROAS achieved",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 4,
    title: "SaaS Landing Page Design",
    category: "Websites",
    problem: "Low conversion rate on website",
    solution: "Modern redesign with optimized user flow",
    result: "150% conversion increase",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 5,
    title: "Restaurant Booking App",
    category: "Apps",
    problem: "No digital booking system",
    solution: "Custom mobile app with integrated payments",
    result: "500+ monthly bookings",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 6,
    title: "Healthcare Lead Generation",
    category: "Google Ads",
    problem: "Difficulty reaching target patients",
    solution: "Location-based campaigns with call tracking",
    result: "200+ qualified leads/month",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 7,
    title: "Fitness Brand Social Campaign",
    category: "Meta Ads",
    problem: "Low brand awareness",
    solution: "Video-first content strategy",
    result: "2M+ impressions, 50K followers",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 8,
    title: "Local Restaurant SEO",
    category: "SEO / GMB",
    problem: "Not appearing in local searches",
    solution: "Local SEO + review management",
    result: "#1 ranking for key terms",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&auto=format&fit=crop",
    featured: false,
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Portfolio | Marketing With Vijay</title>
        <meta
          name="description"
          content="View case studies and results from successful digital marketing campaigns, websites, and apps developed by Vijay."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 bg-secondary/50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Portfolio
              </div>
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
                Real Results From{" "}
                <span className="text-gradient">Real Campaigns</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Browse through my portfolio of successful projects and see how
                I've helped businesses achieve their growth goals.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-8 bg-background border-b border-border sticky top-20 z-40">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`card-premium group overflow-hidden animate-fade-up stagger-${(index % 3) + 1}`}
                >
                  {/* Image */}
                  <div className="relative -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-foreground/80 text-background text-xs font-medium">
                        {item.category}
                      </span>
                    </div>
                    {item.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                    {item.title}
                  </h3>

                  <div className="space-y-2 text-sm mb-4">
                    <div>
                      <span className="text-muted-foreground">Problem: </span>
                      <span className="text-foreground">{item.problem}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Solution: </span>
                      <span className="text-foreground">{item.solution}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="text-lg font-serif font-bold text-primary">
                      {item.result}
                    </div>
                    <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
              Want Similar Results for Your Business?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a strategy that delivers
              measurable results.
            </p>
            <Link to="/contact" className="btn-accent inline-flex">
              Start Your Project
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Portfolio;
