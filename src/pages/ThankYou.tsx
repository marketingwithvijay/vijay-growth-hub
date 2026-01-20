import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { CheckCircle, Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <>
      <Helmet>
        <title>Thank You | Marketing With Vijay</title>
        <meta
          name="description"
          content="Thank you for reaching out. I'll get back to you soon!"
        />
      </Helmet>
      <Layout>
        <section className="min-h-[70vh] flex items-center justify-center py-20">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center animate-fade-up">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-accent" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
                Thank You!
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Your message has been received successfully. I appreciate you reaching out 
                and will get back to you within 24 hours during business days.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/"
                  className="btn-primary"
                >
                  <Home size={18} className="mr-2" />
                  Back to Home
                </Link>
                <Link
                  to="/contact"
                  className="btn-secondary"
                >
                  <ArrowLeft size={18} className="mr-2" />
                  Send Another Message
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ThankYou;
