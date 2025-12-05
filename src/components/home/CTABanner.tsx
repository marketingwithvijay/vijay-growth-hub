import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import patternBg from "@/assets/pattern-bg.jpg";

const CTABanner = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${patternBg})` }}
      />
      <div className="absolute inset-0 bg-foreground/90" />

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground leading-tight">
            Ready to Scale Your Business?
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed">
            Let's work together to create growth strategies that deliver real
            results. Book a free consultation to discuss your goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/contact" className="btn-accent group">
              <Calendar size={18} className="mr-2" />
              Book a Free Consultation
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
