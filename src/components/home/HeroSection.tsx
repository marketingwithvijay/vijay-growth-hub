import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-vijay.jpg";
const HeroSection = () => {
  return <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary/50" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Available for new projects
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
              I'm Vijay —{" "}
              <span className="text-gradient">Performance-Driven</span> Digital
              Marketer
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Helping businesses scale using high-ROI{" "}
              <span className="text-foreground font-medium">Google Ads</span>,{" "}
              <span className="text-foreground font-medium">Meta Ads</span>,{" "}
              <span className="text-foreground font-medium">SEO</span>, and
              full-stack{" "}
              <span className="text-foreground font-medium">
                Web & App Development
              </span>
              .
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary group">
                Book a Strategy Call
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/portfolio" className="btn-secondary group">
                <Play size={18} className="mr-2" />
                View Portfolio
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-foreground">
                  4+
                </div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-foreground">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">
                  Clients Served
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-foreground">
                  ₹1Cr+
                </div>
                <div className="text-sm text-muted-foreground">Ad Spend Managed</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-up stagger-2">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/20 rounded-3xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-3xl" />

              {/* Main image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img alt="Vijay - Digital Marketing Expert" className="w-full h-auto object-cover" src="/lovable-uploads/570f81cf-aae7-428a-9896-ce22f823124a.jpg" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-4 -left-4 sm:bottom-8 sm:-left-8 z-20 bg-card rounded-2xl p-4 shadow-card animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      300+ Leads
                    </div>
                    <div className="text-xs text-muted-foreground">
                      This Month
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;