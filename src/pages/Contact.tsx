import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  CheckCircle,
} from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98596 41115",
    href: "tel:+919859641115",
  },
  {
    icon: Mail,
    label: "Email",
    value: "marketingwithvijay@gmail.com",
    href: "mailto:marketingwithvijay@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Guwahati, Assam, India",
    href: "#",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat: 9AM - 7PM",
    href: "#",
  },
];

const services = [
  "Google Ads",
  "Meta Ads",
  "Website Development",
  "App Development",
  "GMB Optimization",
  "Local SEO",
  "Other",
];

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const message = `*New Contact Form Submission*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || 'Not provided'}
*Service Needed:* ${formData.service}

*Message:*
${formData.message}`;

    // Encode message and open WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919859641115?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    navigate('/thank-you');
  };

  return (
    <>
      <Helmet>
        <title>Contact | Marketing With Vijay</title>
        <meta
          name="description"
          content="Get in touch with Vijay for your digital marketing needs. Book a free consultation to discuss your business goals."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 bg-secondary/50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Contact
              </div>
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
                Let's Start Your{" "}
                <span className="text-gradient">Growth Journey</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ready to take your business to the next level? Get in touch and
                let's discuss how I can help you achieve your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="space-y-6 animate-fade-up">
                <h2 className="text-2xl font-serif font-bold text-foreground">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground">
                  Have a question or want to work together? Fill out the form or
                  reach out directly through any of these channels.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <info.icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {info.label}
                        </div>
                        <div className="font-medium text-foreground">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/919859641115"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-green-500 text-white font-medium hover:bg-green-600 transition-colors"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2 animate-fade-up stagger-2">
                <div className="card-premium">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                    Send a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Service Needed *
                        </label>
                        <select
                          id="service"
                          required
                          value={formData.service}
                          onChange={(e) =>
                            setFormData({ ...formData, service: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                        placeholder="Tell me about your project and goals..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full sm:w-auto"
                    >
                      <Send size={18} className="mr-2" />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Response Promise */}
        <section className="py-12 bg-secondary/50">
          <div className="container-custom">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
              <CheckCircle size={24} className="text-accent" />
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">
                  Quick Response Guarantee:
                </span>{" "}
                I respond to all inquiries within 24 hours during business days.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
