import React, { useState } from "react";

const galleryImages = [
  {
    id: 1,
    url: "/images/LidiaPar.png",
    alt: "Hair magic",
    span: "row-span-2",
  },
  {
    id: 2,
    url: "/Raluca/raluca1.jpeg",
    alt: "Professional nails",
    span: "row-span-2",
  },
  {
    id: 3,
    url: "/images/raluca5.jpeg",
    alt: "Nails Artistry",
    span: "row-span-1",
  },
  {
    id: 4,
    url: "/images/leca9.jpeg",
    alt: "Treatment",
    span: "row-span-2",
  },
  {
    id: 5,
    url: "/images/raluca6.jpeg",
    alt: "Nails",
    span: "row-span-1",
  },
  {
    id: 6,
    url: "/images/leca3.jpeg",
    alt: "Stylish",
    span: "row-span-2",
  },
  {
    id: 7,
    url: "/images/georgiana1.jpeg",
    alt: "Hair blossom",
    span: "row-span-2",
  },

  {
    id: 8,
    url: "/images/leca7.jpeg",
    alt: "Make-up",
    span: "row-span-2",
  },
  {
    id: 9,
    url: "/images/leca6.jpeg",
    alt: "Stylish",
    span: "row-span-2",
  },
];

const Gallery = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      id="galerie"
      className="py-24 px-6"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-1 font-serif mb-4 text-gold">Arta Noastră</h2>
          <p
            className="body-large max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            O selecție din transformările și momentele create în salonul nostru
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[240px]">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden cursor-pointer ${image.span}`}
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                border: "1px solid var(--border-light)",
              }}
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                style={{
                  backgroundImage: `url('${image.url}')`,
                  filter:
                    hoveredId === image.id
                      ? "sepia(0%) saturate(100%)"
                      : "sepia(20%) saturate(80%)",
                  transform: hoveredId === image.id ? "scale(1.1)" : "scale(1)",
                }}
              ></div>

              {/* Warm Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(245, 240, 235, 0.1) 0%, rgba(180, 142, 67, 0.2) 100%)",
                  opacity: hoveredId === image.id ? 0 : 1,
                }}
              ></div>

              {/* Golden Border on Hover */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  border: "2px solid var(--gold-primary)",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
