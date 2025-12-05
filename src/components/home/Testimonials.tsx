import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Leads doubled in 45 days. Vijay's strategic approach to Google Ads completely transformed our lead generation. His attention to detail and constant optimization made all the difference.",
    name: "Rahul Sharma",
    role: "CEO, Real Estate Company",
    rating: 5,
  },
  {
    quote:
      "Best ROI we've achieved. Working with Vijay on our Meta Ads campaigns was a game-changer. We saw a 4x return on our ad spend within the first month.",
    name: "Priya Patel",
    role: "Founder, E-commerce Brand",
    rating: 5,
  },
  {
    quote:
      "Website improved our conversions instantly. The new website Vijay built for us not only looks amazing but also converts visitors into customers at a much higher rate.",
    name: "Amit Kumar",
    role: "Director, Tech Startup",
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-up">
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="section-heading mb-4">
            What Clients <span className="text-gradient-gold">Say About Me</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`card-premium text-center transition-all duration-500 ${
                  index === activeIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 absolute inset-0 translate-y-8 pointer-events-none"
                }`}
              >
                <Quote className="w-12 h-12 mx-auto text-primary/20 mb-6" />

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>

                <p className="text-lg sm:text-xl text-foreground leading-relaxed mb-8 font-serif italic">
                  "{testimonial.quote}"
                </p>

                <div>
                  <div className="text-lg font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? "bg-primary" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
