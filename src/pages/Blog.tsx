import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "How Google Ads Transform Your Business",
    excerpt:
      "Discover how strategic Google Ads campaigns can drive high-quality leads and scale your business growth exponentially.",
    image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&auto=format&fit=crop",
    category: "Google Ads",
    date: "Dec 1, 2024",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Local SEO & GMB — Why It Matters",
    excerpt:
      "Learn why local SEO and Google My Business optimization are crucial for businesses targeting local customers.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop",
    category: "SEO",
    date: "Nov 28, 2024",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 3,
    title: "Meta Ads vs Google Ads: Which Is Better?",
    excerpt:
      "A comprehensive comparison of Meta Ads and Google Ads to help you choose the right platform for your business.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop",
    category: "Paid Ads",
    date: "Nov 25, 2024",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 4,
    title: "What Makes a High-Converting Landing Page?",
    excerpt:
      "The essential elements every landing page needs to convert visitors into customers effectively.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    category: "Web Development",
    date: "Nov 20, 2024",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 5,
    title: "GMB Optimization Tips for Local Businesses",
    excerpt:
      "Practical tips and strategies to optimize your Google My Business profile and dominate local search results.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop",
    category: "GMB",
    date: "Nov 15, 2024",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 6,
    title: "The Future of Digital Marketing in 2025",
    excerpt:
      "Emerging trends and technologies that will shape the digital marketing landscape in the coming year.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
    category: "Industry",
    date: "Nov 10, 2024",
    readTime: "10 min read",
    featured: false,
  },
];

const Blog = () => {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog | Marketing With Vijay</title>
        <meta
          name="description"
          content="Digital marketing insights, tips, and strategies from Vijay. Learn about Google Ads, Meta Ads, SEO, and more."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 bg-secondary/50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Blog
              </div>
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
                Insights & <span className="text-gradient">Strategies</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Stay updated with the latest digital marketing trends, tips, and
                strategies to grow your business.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <h2 className="text-2xl font-serif font-bold mb-8 animate-fade-up">
              Featured Articles
            </h2>
            <div className="grid lg:grid-cols-2 gap-6 mb-16">
              {featuredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className={`card-premium group overflow-hidden animate-fade-up stagger-${index + 1}`}
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="relative -mx-6 -my-6 sm:-ml-8 sm:-my-8 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full min-h-[200px] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="inline-block w-fit px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-3">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Regular Posts Grid */}
            <h2 className="text-2xl font-serif font-bold mb-8 animate-fade-up">
              Latest Articles
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post, index) => (
                <article
                  key={post.id}
                  className={`card-premium group overflow-hidden animate-fade-up stagger-${(index % 3) + 1}`}
                >
                  <div className="relative -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-foreground/80 text-background text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Blog;
