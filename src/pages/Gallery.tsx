import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "/lovable-uploads/1f747a62-efca-44c6-a430-0341ef6b1298.jpg",
    title: "Achievement 1",
    category: "achievements",
  },
  {
    id: 2,
    src: "/lovable-uploads/570f81cf-aae7-428a-9896-ce22f823124a.jpg",
    title: "Achievement 2",
    category: "achievements",
  },
  {
    id: 7,
    src: "/lovable-uploads/ai-power-weekend-certificate.webp",
    title: "The Ultimate AI Power Weekend Certificate",
    category: "achievements",
  },
  {
    id: 8,
    src: "/lovable-uploads/meta-ads-certificate.webp",
    title: "Meta Ads Course Certificate",
    category: "achievements",
  },
  // Placeholder images for demonstration
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    title: "Team Workshop",
    category: "events",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    title: "Client Meeting",
    category: "work",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    title: "Strategy Session",
    category: "work",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
    title: "Award Ceremony",
    category: "achievements",
  },
];

const categories = ["all", "achievements", "work", "events"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Layout>
      <Helmet>
        <title>Gallery - Marketing With Vijay | Achievements & Moments</title>
        <meta
          name="description"
          content="Explore the gallery of Marketing With Vijay - showcasing achievements, memorable moments, and professional milestones in digital marketing."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-muted/30">
        <div className="container-custom text-center">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Gallery
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Moments & <span className="text-primary">Achievements</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A visual journey through my professional milestones, memorable moments,
            and achievements in the world of digital marketing.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer card-shadow"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-semibold text-white">
                      {image.title}
                    </h3>
                    <span className="text-sm text-white/70 capitalize">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                No images found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 md:left-8 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="max-w-5xl max-h-[80vh] mx-4">
            <img
              src={filteredImages[currentImageIndex]?.src}
              alt={filteredImages[currentImageIndex]?.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold text-white">
                {filteredImages[currentImageIndex]?.title}
              </h3>
              <span className="text-sm text-white/60 capitalize">
                {filteredImages[currentImageIndex]?.category}
              </span>
            </div>
          </div>

          <button
            onClick={goToNext}
            className="absolute right-4 md:right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>

          {/* Thumbnails */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {filteredImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentImageIndex
                    ? "bg-white w-6"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
