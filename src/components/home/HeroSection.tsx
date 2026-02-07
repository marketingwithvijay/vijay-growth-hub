import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram } from "lucide-react";
const HeroSection = () => {
  const services = ["Google Ads", "Meta Ads", "Web Development", "Social Media Marketing", "SEO"];
  return <section className="relative min-h-screen overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
      
      {/* Animated floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{
      animationDelay: '1s'
    }} />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-float" />
      
      <div className="container-custom relative z-10 pt-8 pb-16 lg:pt-16 lg:pb-24">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center text-center">
          {/* Heading - Mobile (Above Image) */}
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-up" style={{
          animationDelay: '0.1s',
          animationFillMode: 'forwards'
        }}>
            I'm Vijay —{" "}
            <span className="text-gradient">Performance-Driven</span> Digital
            Marketer
          </h1>

          {/* Photo with vertical labels - Mobile */}
          <div className="relative w-72 h-80 mb-6 opacity-0 animate-scale-in" style={{
          animationDelay: '0.3s',
          animationFillMode: 'forwards'
        }}>
            {/* Background matching hero section exactly */}
            <div className="absolute inset-0 bg-background" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-accent/10 to-primary/20" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/15 via-transparent to-transparent" />
            <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, hsl(0 0% 0% / 0.03) 1px, transparent 1px), linear-gradient(to bottom, hsl(0 0% 0% / 0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
            
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
              <img alt="Vijay - Digital Marketing Expert" className="w-[85%] h-[95%] object-cover object-top" src="/lovable-uploads/c14aae44-ba64-4343-a742-dd24de9f0f2a.png" />
            </div>
          </div>

          {/* Description - Mobile */}
          <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-md opacity-0 animate-fade-up" style={{
          animationDelay: '0.5s',
          animationFillMode: 'forwards'
        }}>
            Helping businesses scale using high-ROI{" "}
            <span className="text-foreground font-medium">Google Ads</span>,{" "}
            <span className="text-foreground font-medium">Meta Ads</span>,{" "}
            <span className="text-foreground font-medium">SEO</span>, and{" "}
            <span className="text-foreground font-medium">Social Media Marketing</span>.
          </p>

          <Link to="/contact" className="btn-primary w-full max-w-xs mb-8 opacity-0 animate-fade-up hover:scale-105 transition-transform" style={{
          animationDelay: '0.7s',
          animationFillMode: 'forwards'
        }}>
            Let's Work Together
          </Link>

          {/* Stats - Mobile */}
          <div className="flex justify-center gap-6 mb-8 opacity-0 animate-fade-up" style={{
          animationDelay: '0.9s',
          animationFillMode: 'forwards'
        }}>
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

          {/* Social Icons - Mobile */}
          <div className="flex items-center justify-center gap-4 opacity-0 animate-fade-up" style={{
            animationDelay: '1.1s',
            animationFillMode: 'forwards'
          }}>
            <a href="https://www.instagram.com/marketingwithvijay_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all">
              <Twitter size={18} />
            </a>
            <a href="https://www.linkedin.com/in/vijay-sharma-8836aa23b/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground opacity-0 animate-fade-up" style={{
            animationDelay: '0.1s',
            animationFillMode: 'forwards'
          }}>
              <span className="animate-[wave_2s_ease-in-out_infinite]">👋</span>
              <span>Hi, Let's Make Your Business Grow</span>
            </div>

            <h1 className="text-5xl xl:text-6xl font-serif font-bold text-foreground leading-tight opacity-0 animate-fade-up" style={{
            animationDelay: '0.2s',
            animationFillMode: 'forwards'
          }}>
              I'm Vijay —{" "}
              <span className="text-gradient">Performance-Driven</span> Digital
              Marketer.
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg opacity-0 animate-fade-up" style={{
            animationDelay: '0.4s',
            animationFillMode: 'forwards'
          }}>
              Helping businesses scale using high-ROI{" "}
              <span className="text-foreground font-medium">Google Ads</span>,{" "}
              <span className="text-foreground font-medium">Meta Ads</span>,{" "}
              <span className="text-foreground font-medium">SEO</span>, and{" "}
              <span className="text-foreground font-medium">Social Media Marketing</span>.
            </p>

            <div className="flex items-center gap-6 pt-2 opacity-0 animate-fade-up" style={{
            animationDelay: '0.6s',
            animationFillMode: 'forwards'
          }}>
              <Link to="/contact" className="btn-primary hover:scale-105 transition-transform">
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
            <div className="flex items-center gap-4 pt-4 opacity-0 animate-fade-up" style={{
            animationDelay: '0.8s',
            animationFillMode: 'forwards'
          }}>
              <a href="#" className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 hover:scale-110 transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 hover:scale-110 transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="https://www.linkedin.com/in/vijay-sharma-8836aa23b/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 hover:scale-110 transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Right - Photo with vertical labels */}
          <div className="relative flex justify-center opacity-0 animate-scale-in" style={{
          animationDelay: '0.4s',
          animationFillMode: 'forwards'
        }}>
            <div className="relative w-[420px] xl:w-[480px] h-[520px] xl:h-[600px] hover:scale-[1.02] transition-transform duration-500">
              {/* Background matching hero section exactly */}
              <div className="absolute inset-0 bg-background" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-accent/10 to-primary/20" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/15 via-transparent to-transparent" />
              <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(to right, hsl(0 0% 0% / 0.03) 1px, transparent 1px), linear-gradient(to bottom, hsl(0 0% 0% / 0.03) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />
              
              {/* Vertical Labels - Visible on sides */}
              <div className="absolute left-[3%] top-0 bottom-0 flex items-center z-[15]">
                
              </div>
              <div className="absolute left-[20%] top-0 bottom-0 flex items-center z-[15]">
                
              </div>
              <div className="absolute right-[20%] top-0 bottom-0 flex items-center z-[15]">
                
              </div>
              <div className="absolute right-[3%] top-0 bottom-0 flex items-center z-[15]">
                
              </div>
              
              {/* Main Photo - No border radius, blends with gradient */}
              <div className="absolute inset-0 flex items-end justify-center z-10">
                <img src="/lovable-uploads/570f81cf-aae7-428a-9896-ce22f823124a.jpg" alt="Vijay - Digital Marketing Expert" className="w-[75%] h-[92%] object-cover object-top" />
              </div>
            </div>
          </div>
        </div>

        {/* Service Pills - Bottom */}
        <div className="hidden lg:flex justify-center gap-4 mt-12 pt-8 border-t border-border/30">
          {services.map((service, index) => <div key={service} className="px-6 py-2.5 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-105 transition-all duration-300 cursor-pointer opacity-0 animate-fade-up" style={{
          animationDelay: `${1 + index * 0.1}s`,
          animationFillMode: 'forwards'
        }}>
              {service}
            </div>)}
        </div>
      </div>
    </section>;
};
export default HeroSection;