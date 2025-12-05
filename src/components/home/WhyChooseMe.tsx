import { Check, BarChart3, MessageSquare, Zap, Shield, Target } from "lucide-react";

const trustFactors = [
  { icon: BarChart3, text: "Data-driven decisions" },
  { icon: Shield, text: "Transparent reporting" },
  { icon: Target, text: "High-quality lead generation" },
  { icon: MessageSquare, text: "Fast communication" },
  { icon: Zap, text: "Performance-first mindset" },
  { icon: Check, text: "Proven track record" },
];

const credentials = [
  { value: "300+", label: "Successful Campaigns" },
  { value: "4.8x", label: "Average ROAS" },
  { value: "120%", label: "Avg. Lead Increase" },
  { value: "48h", label: "Response Time" },
];

const WhyChooseMe = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Credentials */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium">
              Why Work With Me
            </div>

            <h2 className="section-heading">
              Results That Speak{" "}
              <span className="text-gradient-gold">For Themselves</span>
            </h2>

            <p className="section-subheading">
              I don't just run campaigns — I build growth systems that deliver
              consistent, measurable results for your business.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {credentials.map((cred) => (
                <div
                  key={cred.label}
                  className="p-5 rounded-2xl bg-secondary border border-border"
                >
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                    {cred.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {cred.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Trust Factors */}
          <div className="space-y-4 animate-fade-up stagger-2">
            {trustFactors.map((factor, index) => (
              <div
                key={factor.text}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <factor.icon size={22} className="text-primary" />
                </div>
                <span className="text-foreground font-medium">{factor.text}</span>
                <Check
                  size={20}
                  className="ml-auto text-accent shrink-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
