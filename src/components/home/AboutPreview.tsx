import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, TrendingUp, Target } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "4+",
    label: "Years Experience",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Users,
    value: "50+",
    label: "Clients Served",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: TrendingUp,
    value: "₹1 Cr+",
    label: "Ad Spend Managed",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Target,
    value: "95%",
    label: "Client Retention",
    color: "bg-accent/10 text-accent",
  },
];

const AboutPreview = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`card-premium text-center animate-fade-up stagger-${index + 1}`}
              >
                <div
                  className={`w-14 h-14 mx-auto rounded-2xl ${stat.color} flex items-center justify-center mb-4`}
                >
                  <stat.icon size={24} />
                </div>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-up stagger-2">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              About Me
            </div>

            <h2 className="section-heading">
              Transforming Businesses with{" "}
              <span className="text-gradient">Digital Excellence</span>
            </h2>

            <p className="section-subheading">
              I'm Vijay, a digital marketer helping businesses grow with paid
              ads, SEO, and modern development. With a solution-focused mindset
              and a strong eye for performance, I've helped brands improve
              visibility, generate high-quality leads, and scale profitably.
            </p>

            <p className="text-muted-foreground">
              My approach combines data-driven strategies with creative execution
              to deliver measurable results. Whether it's running high-converting
              ad campaigns or building modern websites, I focus on what truly
              moves the needle for your business.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Learn More About Me
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
