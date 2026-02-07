import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseMe from "@/components/home/WhyChooseMe";
import PortfolioHighlights from "@/components/home/PortfolioHighlights";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Marketing With Vijay | Performance-Driven Digital Marketer</title>
        <meta
          name="description"
          content="Helping businesses scale using high-ROI Google Ads, Meta Ads, SEO, and Social Media Marketing. Book a free strategy call today."
        />
      </Helmet>
      <Layout>
        <HeroSection />
        <AboutPreview />
        <ServicesPreview />
        <WhyChooseMe />
        <PortfolioHighlights />
        <Testimonials />
        <CTABanner />
      </Layout>
    </>
  );
};

export default Index;
