import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
const HeroSection = () => {
  const services = ["Google Ads", "Meta Ads", "Web Development", "App Development", "SEO"];
  const floatingLabels = [{
    text: "Google Ads",
    position: "top-[15%] -left-4 -rotate-12"
  }, {
    text: "Meta Ads",
    position: "top-[35%] -left-8 rotate-6"
  }, {
    text: "Web Dev",
    position: "bottom-[35%] -left-6 -rotate-6"
  }, {
    text: "SEO",
    position: "top-[20%] -right-4 rotate-12"
  }, {
    text: "App Dev",
    position: "top-[45%] -right-6 -rotate-6"
  }];
  return <section className="relative min-h-screen overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
      
      <div className="container-custom relative z-10 pt-8 pb-16 lg:pt-16 lg:pb-24">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center text-center">
          {/* Heading - Mobile (Above Image) */}
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground leading-tight mb-6">
            I'm Vijay —{" "}
            <span className="text-gradient">Performance-Driven</span> Digital
            Marketer
          </h1>

          {/* Photo with vertical labels - Mobile */}
          <div className="relative w-72 h-80 mb-6">
            {/* Gradient Background - Seamless blend */}
            <div className="absolute inset-0 bg-gradient-to-br from-lime-200/80 via-emerald-200/70 to-teal-300/80" />
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100/60 via-lime-200/50 to-cyan-200/60" />
            
            {/* Vertical Labels - Visible behind image */}
            <div className="absolute left-[2%] top-0 bottom-0 flex items-center z-[15]">
              <div className="bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-medium shadow-md -rotate-90 whitespace-nowrap">
                Google Ads
              </div>
            </div>
            <div className="absolute left-[24%] top-0 bottom-0 flex items-center z-[15]">
              <div className="bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-medium shadow-md -rotate-90 whitespace-nowrap">
                Meta Ads
              </div>
            </div>
            <div className="absolute right-[24%] top-0 bottom-0 flex items-center z-[15]">
              <div className="bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-medium shadow-md -rotate-90 whitespace-nowrap">
                Web Dev
              </div>
            </div>
            <div className="absolute right-[2%] top-0 bottom-0 flex items-center z-[15]">
              <div className="bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-medium shadow-md -rotate-90 whitespace-nowrap">
                SEO
              </div>
            </div>
            
            {/* Main Photo - No rounded corners, blends with gradient */}
            <div className="absolute inset-0 flex items-end justify-center z-10">
              <img 
                alt="Vijay - Digital Marketing Expert" 
                className="w-[85%] h-[95%] object-cover object-top" 
                src="/lovable-uploads/c14aae44-ba64-4343-a742-dd24de9f0f2a.png" 
              />
            </div>
          </div>

          {/* Description - Mobile */}
          <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-md">
            Helping businesses scale using high-ROI{" "}
            <span className="text-foreground font-medium">Google Ads</span>,{" "}
            <span className="text-foreground font-medium">Meta Ads</span>,{" "}
            <span className="text-foreground font-medium">SEO</span>, and{" "}
            <span className="text-foreground font-medium">Web & App Development</span>.
          </p>

          <Link to="/contact" className="btn-primary w-full max-w-xs mb-8">
            Let's Work Together
          </Link>

          {/* Stats - Mobile */}
          <div className="flex justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-serif font-bold text-foreground">4+</div>
              <div className="text-xs text-muted-foreground">Years Exp</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-serif font-bold text-foreground">50+</div>
              <div className="text-xs text-muted-foreground">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-serif font-bold text-foreground">₹1Cr+</div>
              <div className="text-xs text-muted-foreground">Ad Spend</div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <span>👋</span>
              <span>Hi, Let's Make Your Business Grow</span>
            </div>

            <h1 className="text-5xl xl:text-6xl font-serif font-bold text-foreground leading-tight">
              I'm Vijay —{" "}
              <span className="text-gradient">Performance-Driven</span> Digital
              Marketer.
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Helping businesses scale using high-ROI{" "}
              <span className="text-foreground font-medium">Google Ads</span>,{" "}
              <span className="text-foreground font-medium">Meta Ads</span>,{" "}
              <span className="text-foreground font-medium">SEO</span>, and full-stack{" "}
              <span className="text-foreground font-medium">Web & App Development</span>.
            </p>

            <div className="flex items-center gap-6 pt-2">
              <Link to="/contact" className="btn-primary">
                Let's Work Together?
              </Link>
              
              {/* User avatars with stats */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-medium">V</div>
                  <div className="w-8 h-8 rounded-full bg-accent/30 border-2 border-background flex items-center justify-center text-xs font-medium">A</div>
                  <div className="w-8 h-8 rounded-full bg-primary/30 border-2 border-background flex items-center justify-center text-xs font-medium">S</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">50+</div>
                  <div className="text-xs text-muted-foreground">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Right - Photo with vertical labels */}
          <div className="relative flex justify-center animate-fade-up stagger-2">
            <div className="relative w-[420px] xl:w-[480px] h-[520px] xl:h-[600px]">
              {/* Gradient Background - Seamless blend like reference */}
              <div className="absolute inset-0 bg-gradient-to-br from-lime-200/90 via-emerald-200/80 to-teal-300/90" />
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100/70 via-lime-200/60 to-cyan-200/70" />
              
              {/* Vertical Labels - Visible on sides */}
              <div className="absolute left-[3%] top-0 bottom-0 flex items-center z-[15]">
                <div className="bg-white/85 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium shadow-lg -rotate-90 whitespace-nowrap">
                  Google Ads
                </div>
              </div>
              <div className="absolute left-[20%] top-0 bottom-0 flex items-center z-[15]">
                <div className="bg-white/85 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium shadow-lg -rotate-90 whitespace-nowrap">
                  Meta Ads
                </div>
              </div>
              <div className="absolute right-[20%] top-0 bottom-0 flex items-center z-[15]">
                <div className="bg-white/85 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium shadow-lg -rotate-90 whitespace-nowrap">
                  Web Dev
                </div>
              </div>
              <div className="absolute right-[3%] top-0 bottom-0 flex items-center z-[15]">
                <div className="bg-white/85 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium shadow-lg -rotate-90 whitespace-nowrap">
                  SEO
                </div>
              </div>
              
              {/* Main Photo - No border radius, blends with gradient */}
              <div className="absolute inset-0 flex items-end justify-center z-10">
                <img 
                  src="/lovable-uploads/570f81cf-aae7-428a-9896-ce22f823124a.jpg" 
                  alt="Vijay - Digital Marketing Expert" 
                  className="w-[75%] h-[92%] object-cover object-top" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Service Pills - Bottom */}
        <div className="hidden lg:flex justify-center gap-4 mt-12 pt-8 border-t border-border/30">
          {services.map((service, index) => <div key={service} className="px-6 py-2.5 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-card hover:border-primary/30 transition-all cursor-pointer">
              {service}
            </div>)}
        </div>
      </div>
    </section>;
};
export default HeroSection;