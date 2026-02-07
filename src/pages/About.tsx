import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Search,
  Lightbulb,
  Rocket,
  BarChart3,
  FileText,
  Award,
  Code,
  Megaphone,
  Globe,
  TrendingUp,
  Target,
} from "lucide-react";
import heroImage from "@/assets/hero-vijay.jpg";

const processSteps = [
  {
    icon: Search,
    title: "Discovery & Audit",
    description:
      "In-depth analysis of your current digital presence, competitors, and market opportunities.",
  },
  {
    icon: Lightbulb,
    title: "Strategy Development",
    description:
      "Creating a customized roadmap aligned with your business goals and target audience.",
  },
  {
    icon: Rocket,
    title: "Campaign Execution",
    description:
      "Launching optimized campaigns with precise targeting and compelling creatives.",
  },
  {
    icon: BarChart3,
    title: "Optimization & Scaling",
    description:
      "Continuous testing, optimization, and scaling to maximize ROI.",
  },
  {
    icon: FileText,
    title: "Reporting & Insights",
    description:
      "Transparent reporting with actionable insights for ongoing growth.",
  },
];

const certifications = [
  { name: "Google Ads Certified", icon: "🎯" },
  { name: "Meta Blueprint Certified", icon: "📱" },
  { name: "HubSpot SEO Certified", icon: "🔍" },
  { name: "Web Development", icon: "💻" },
];

const skills = [
  { icon: Search, name: "Google Ads", level: 95 },
  { icon: Megaphone, name: "Meta Ads", level: 92 },
  { icon: TrendingUp, name: "SEO & GMB", level: 90 },
  { icon: Globe, name: "Web Development", level: 88 },
  { icon: Megaphone, name: "Social Media Marketing", level: 85 },
  { icon: Target, name: "CRO", level: 88 },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Vijay | Digital Marketing Expert</title>
        <meta
          name="description"
          content="Learn about Vijay's journey as a digital marketer helping businesses grow with paid ads, SEO, and modern development."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 bg-secondary/50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-up">
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  About Me
                </div>
                <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground leading-tight">
                  I'm Vijay, a Digital Marketer Passionate About{" "}
                  <span className="text-gradient">Growth</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With a strong foundation in performance marketing and modern
                  development, I help businesses build scalable advertising
                  systems, optimized websites, and powerful SEO visibility that
                  drives real results.
                </p>
              </div>
              <div className="relative animate-fade-up stagger-2">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={heroImage}
                    alt="Vijay - Digital Marketing Expert"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-3xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                My Mission
              </div>
              <h2 className="section-heading mb-6">
                To Help Businesses Grow Using{" "}
                <span className="text-gradient-gold">Data-Driven Strategies</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe every business deserves access to expert-level
                marketing strategies. My mission is to democratize digital growth
                by providing transparent, results-focused services that help
                businesses of all sizes compete and win in the digital landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section - Roadmap Style */}
        <section className="py-20 bg-secondary/50 overflow-hidden">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-up">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                My Process
              </div>
              <h2 className="section-heading mb-4">
                How I <span className="text-gradient">Work</span>
              </h2>
            </div>

            {/* Roadmap Container */}
            <div className="relative max-w-5xl mx-auto">
              {/* SVG Winding Road */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
                viewBox="0 0 1000 600"
                preserveAspectRatio="none"
              >
                {/* Road shadow */}
                <path
                  d="M 50 80 Q 250 80, 300 150 T 500 220 T 700 150 T 950 220"
                  fill="none"
                  stroke="hsl(var(--muted))"
                  strokeWidth="50"
                  strokeLinecap="round"
                  className="opacity-30"
                />
                {/* Main road */}
                <path
                  d="M 50 80 Q 250 80, 300 150 T 500 220 T 700 150 T 950 220"
                  fill="none"
                  stroke="hsl(var(--foreground))"
                  strokeWidth="40"
                  strokeLinecap="round"
                  className="opacity-80"
                />
                {/* Road center line (dashed) */}
                <path
                  d="M 50 80 Q 250 80, 300 150 T 500 220 T 700 150 T 950 220"
                  fill="none"
                  stroke="hsl(var(--accent))"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="20 15"
                />
              </svg>

              {/* Milestone Points */}
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
                {processSteps.map((step, index) => {
                  const colors = [
                    "bg-cyan-500",
                    "bg-amber-500", 
                    "bg-rose-500",
                    "bg-emerald-500",
                    "bg-violet-500"
                  ];
                  const isTop = index % 2 === 0;
                  
                  return (
                    <div
                      key={step.title}
                      className={`relative animate-fade-up stagger-${index + 1} ${
                        isTop ? "lg:mt-0" : "lg:mt-32"
                      }`}
                    >
                      {/* Diamond marker */}
                      <div className="flex flex-col items-center">
                        <div 
                          className={`w-12 h-12 ${colors[index]} rotate-45 flex items-center justify-center shadow-lg mb-4 lg:mb-6`}
                        >
                          <div className="-rotate-45">
                            <step.icon size={20} className="text-white" />
                          </div>
                        </div>
                        
                        {/* Connector line for mobile */}
                        <div className="lg:hidden w-0.5 h-6 bg-foreground/20 -mt-2 mb-2" />
                        
                        {/* Content Card */}
                        <div className="bg-card rounded-xl p-4 shadow-md border border-border/50 max-w-xs text-center lg:text-left">
                          <div className="flex items-center gap-2 mb-2 justify-center lg:justify-start">
                            <span className={`w-6 h-6 rounded-full ${colors[index]} text-white text-xs font-bold flex items-center justify-center`}>
                              {String(index + 1).padStart(2, '0')}
                            </span>
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                              Step {index + 1}
                            </span>
                          </div>
                          <h3 className="text-base font-serif font-semibold text-foreground mb-1">
                            {step.title}
                          </h3>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-background">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-up">
              <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Credentials
              </div>
              <h2 className="section-heading mb-4">
                Certifications & <span className="text-gradient-gold">Expertise</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className={`card-premium text-center animate-fade-up stagger-${index + 1}`}
                >
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h3 className="font-serif font-semibold text-foreground">
                    {cert.name}
                  </h3>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-serif font-bold text-center mb-8 animate-fade-up">
                Skills & Expertise
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`animate-fade-up stagger-${index + 1}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon size={18} className="text-primary" />
                        <span className="font-medium text-foreground">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Ready to take your business to the next level? Let's discuss how I
              can help you achieve your growth goals.
            </p>
            <Link to="/contact" className="btn-accent inline-flex">
              Get in Touch
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
