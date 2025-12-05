import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Search,
  Facebook,
  Globe,
  Smartphone,
  MapPin,
  TrendingUp,
  Check,
  BarChart3,
  Zap,
  Users,
  Target,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Google Ads Management",
    description:
      "Data-driven Search, Display, Performance Max & Remarketing campaigns that deliver measurable ROI.",
    features: [
      "Keyword research & strategy",
      "Conversion tracking setup",
      "A/B testing & optimization",
      "Daily campaign monitoring",
      "Weekly performance reports",
      "Landing page optimization",
    ],
    color: "bg-primary",
  },
  {
    icon: Facebook,
    title: "Meta Ads (Facebook & Instagram)",
    description:
      "High-performing creative campaigns with precise audience targeting to maximize sales and lead generation.",
    features: [
      "Audience research & targeting",
      "Creative design & copywriting",
      "Pixel setup & tracking",
      "Retargeting campaigns",
      "Lookalike audience creation",
      "Performance optimization",
    ],
    color: "bg-accent",
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Modern, responsive, fast-loading websites and landing pages that convert visitors into customers.",
    features: [
      "Custom website design",
      "Mobile-first development",
      "SEO optimization",
      "Speed optimization",
      "CMS integration",
      "Ongoing maintenance",
    ],
    color: "bg-primary",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Custom Android/iOS applications with clean UI/UX and optimized performance for your business needs.",
    features: [
      "Native & cross-platform apps",
      "UI/UX design",
      "Backend development",
      "API integration",
      "App store optimization",
      "Ongoing support",
    ],
    color: "bg-accent",
  },
  {
    icon: MapPin,
    title: "Google My Business Optimization",
    description:
      "Increase map rankings, calls, and store visits with comprehensive GMB optimization strategies.",
    features: [
      "Profile optimization",
      "Review management",
      "Post scheduling",
      "Q&A management",
      "Citation building",
      "Performance tracking",
    ],
    color: "bg-primary",
  },
  {
    icon: TrendingUp,
    title: "GMB SEO / Local SEO",
    description:
      "Rank higher in your city/area through local keyword optimization, citations, backlinks, and on-page SEO.",
    features: [
      "Local keyword research",
      "On-page optimization",
      "Citation building",
      "Link building",
      "Content strategy",
      "Monthly reporting",
    ],
    color: "bg-accent",
  },
];

const benefits = [
  { icon: BarChart3, text: "Data-Driven Strategy" },
  { icon: Zap, text: "Fast Implementation" },
  { icon: Users, text: "Dedicated Support" },
  { icon: Target, text: "Results Focused" },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | Marketing With Vijay</title>
        <meta
          name="description"
          content="Comprehensive digital marketing services including Google Ads, Meta Ads, SEO, Web & App Development. Grow your business with proven strategies."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 bg-secondary/50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Services
              </div>
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
                Digital Marketing Services That{" "}
                <span className="text-gradient">Drive Results</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comprehensive solutions tailored to your business goals. From
                paid advertising to development, I've got you covered.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.text}
                  className={`flex items-center gap-3 p-4 rounded-xl bg-card border border-border animate-fade-up stagger-${index + 1}`}
                >
                  <benefit.icon size={20} className="text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-background">
          <div className="container-custom">
            <div className="space-y-12">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`card-premium animate-fade-up stagger-${(index % 3) + 1}`}
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Info */}
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-14 h-14 rounded-2xl ${service.color} text-primary-foreground flex items-center justify-center shrink-0`}
                        >
                          <service.icon size={24} />
                        </div>
                        <div>
                          <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                            {service.title}
                          </h2>
                          <p className="text-muted-foreground">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3 pt-4">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-sm"
                          >
                            <Check size={16} className="text-accent shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col justify-center items-start lg:items-center lg:border-l lg:border-border lg:pl-8">
                      <div className="text-sm text-muted-foreground mb-4">
                        Ready to get started?
                      </div>
                      <Link to="/contact" className="btn-primary">
                        Book a Strategy Call
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
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
              Not Sure Which Service You Need?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Book a free consultation call and I'll help you identify the best
              strategy for your business goals.
            </p>
            <Link to="/contact" className="btn-accent inline-flex">
              Schedule Free Consultation
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
