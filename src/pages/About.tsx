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
  Smartphone,
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
  { icon: Smartphone, name: "App Development", level: 85 },
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

        {/* Process Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-up">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                My Process
              </div>
              <h2 className="section-heading mb-4">
                How I <span className="text-gradient">Work</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className={`card-premium text-center animate-fade-up stagger-${index + 1}`}
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon size={24} className="text-primary" />
                  </div>
                  <div className="text-sm font-semibold text-accent mb-2">
                    Step {index + 1}
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
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
