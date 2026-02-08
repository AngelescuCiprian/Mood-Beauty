import React, { useState, useEffect, useRef, useCallback } from "react";
import { MessageCircle, Instagram, X } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Georgiana Dima",
    role: "Hairstylist",
    image:
      "https://customer-assets.emergentagent.com/job_ded3b3e3-9d43-42e5-85f5-f8052cb92468/artifacts/t72zps7k_GeorgianaDima.jpeg",
    whatsapp: "+40755989126",
    instagram: "@georgianad.hair",
    bio: "Sunt pasionată de estetica modernă și de transformările care reflectă personalitatea fiecărei cliente, aducând o viziune proaspătă în echipa Mood. Cu o atenție meticuloasă la detalii și o dorință continuă de a stăpâni cele mai noi tehnici, misiunea mea este să transform fiecare vizită într-o experiență de stil dedicată sănătății și strălucirii părului tău",
    services: [
      { name: "Tunsori damă", price: "80 - 150 lei" },
      { name: "Spălat + coafat", price: "200 - 400 lei" },
      { name: "Coafat perie", price: "600 - 1200 lei" },
      { name: "Coafat lejer (bucle / onduleuri)", price: "150 - 250 lei" },
      {
        name: "Coafat de ocazie (cocuri, coafuri elegante)",
        price: "150 - 250 lei",
      },
      { name: "Îndreptat păr", price: "150 - 250 lei" },
      { name: "Tratamente profesionale pentru păr", price: "150 - 250 lei" },
      { name: "Măști de hidratare și regenerare", price: "150 - 250 lei" },
    ],
    gallery: [
      "/images/georgiana1.jpeg",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400",
    ],
  },
  {
    id: 2,
    name: "Georgiana Leca",
    role: "Make-up Artist",
    image: "/Leca/GeorgianaLeca.jpeg",
    whatsapp: "+40730683328",
    instagram: "@georgianaleca",
    bio: "Cu o experiență de 6 ani în arta frumuseții, sunt o perfecționistă convinsă și cred că eleganța stă în cele mai mici detalii. Fie că este vorba de un machiaj Hollywood impecabil sau de stilizarea perfectă a sprâncenelor, misiunea mea este să îți evidențiez trăsăturile naturale și să îți ofer un look care inspiră încredere și rafinament.",
    services: [
      { name: "Laminare Sprâncene", price: "150 lei" },
      { name: "Stilizare & Vopsire Sprâncene", price: "80 - 100 lei" },
      { name: "Machiaj de Zi / Seară", price: "200 - 250 lei" },
      { name: "Machiaj de Mireasă", price: "350 - 450 lei" },
      { name: "Machiaj Hollywood", price: "300 lei" },
    ],
    gallery: ["/Leca/leca10.jpeg", "/Leca/leca2.jpeg", "/Leca/leca4.jpeg"],
  },
  {
    id: 3,
    name: "Raluca Andreea",
    role: "Nail Technician",
    image: "/Raluca/Raluca.jpeg",
    whatsapp: "+40721436790",
    instagram: "@ralucaandreea.nailtech",
    bio: "Cu o experiență de peste 5 ani, îmi dedic activitatea manichiurii impecabile, unde precizia și estetica se întâlnesc. Sunt definită de perfecționism și pun accent pe rezistența, echilibrul și sănătatea unghiei naturale. Pentru mine, fiecare set este mai mult decât o manichiură, este o expresie a eleganței și a încrederii de sine.",
    services: [
      { name: "Protecție pe unghia naturală", price: "50 - 80 lei" },
      { name: "Construcție unghii tehnice", price: "100 - 150 lei" },
      { name: "Întreținere unghii tehnice ", price: "150 - 200 lei" },
      { name: "Manichiură clasică ", price: "180 - 250 lei" },
      { name: "Demontare material  ", price: "180 - 250 lei" },
      { name: "Pedichiură clasică  ", price: "180 - 250 lei" },
      { name: "Pedichiură estetică ", price: "180 - 250 lei" },
    ],
    gallery: [
      "/images/raluca4.jpeg",
      "/Raluca/raluca2.jpeg",
      "/Raluca/raluca3.jpeg",
    ],
  },
];

const TeamMemberModal = ({ member, onClose }) => {
  // Use ref to store scroll position so it persists through re-renders
  const scrollPositionRef = useRef(0);

  // State for image lightbox
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Bună! Aș dori să programez o întâlnire cu ${member.name}.`,
    );
    window.open(`https://wa.me/${member.whatsapp}?text=${message}`, "_blank");
  };

  const handleInstagram = () => {
    window.open(
      `https://instagram.com/${member.instagram.replace("@", "")}`,
      "_blank",
    );
  };

  // Lightbox handlers
  const openLightbox = (img, index) => {
    setLightboxImage(img);
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback((e) => {
    if (e) e.stopPropagation();
    setLightboxImage(null);
  }, []);

  const nextImage = useCallback(() => {
    if (!member.gallery) return;
    setLightboxIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % member.gallery.length;
      setLightboxImage(member.gallery[nextIndex]);
      return nextIndex;
    });
  }, [member.gallery]);

  const prevImage = useCallback(() => {
    if (!member.gallery) return;
    setLightboxIndex((prevIndex) => {
      const newIndex =
        (prevIndex - 1 + member.gallery.length) % member.gallery.length;
      setLightboxImage(member.gallery[newIndex]);
      return newIndex;
    });
  }, [member.gallery]);

  // LOCK BODY SCROLL WHEN MODAL IS OPEN + RESTORE POSITION ON CLOSE
  useEffect(() => {
    // Save current scroll position in ref
    scrollPositionRef.current = window.scrollY;

    // Lock body scroll
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPositionRef.current}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    // Cleanup: restore scroll when modal closes
    return () => {
      const scrollY = scrollPositionRef.current;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";

      // Restore scroll position after styles are removed
      window.scrollTo(0, scrollY);
    };
  }, []);

  // ⌨️ KEYBOARD NAVIGATION FOR LIGHTBOX
  useEffect(() => {
    if (!lightboxImage) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "ArrowRight") {
        nextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImage, closeLightbox, prevImage, nextImage]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6"
      style={{ backgroundColor: "rgba(62, 50, 40, 0.6)" }}
      onClick={onClose}
    >
      {/* Modal Content */}
      <div
        className="relative bg-white w-full md:max-w-3xl max-h-[95vh] md:max-h-[90vh] overflow-y-auto modal-content"
        style={{
          backgroundColor: "var(--bg-card)",
          borderTopLeftRadius: "24px",
          borderTopRightRadius: "24px",
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm transition-all duration-300 hover:bg-[var(--gold-primary)] group"
          style={{
            border: "1px solid var(--border-light)",
          }}
          aria-label="Close"
        >
          <X
            size={20}
            style={{ color: "var(--text-primary)" }}
            className="group-hover:text-white"
          />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${member.image}')`,
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.9) 100%)",
              }}
            ></div>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 md:px-10 pb-10 -mt-16 relative z-10">
          {/* Name & Role */}
          <div className="text-center mb-8">
            <h3
              className="heading-1 font-serif mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              {member.name}
            </h3>
            <p
              className="body-regular uppercase tracking-[0.2em]"
              style={{ color: "var(--gold-primary)" }}
            >
              {member.role}
            </p>
          </div>

          {/* Bio */}
          <div className="mb-10">
            <h4
              className="heading-3 font-sans mb-4 text-center"
              style={{ color: "var(--text-primary)" }}
            >
              Despre Mine
            </h4>
            <p
              className="body-large text-center max-w-2xl mx-auto"
              style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}
            >
              {member.bio}
            </p>
          </div>

          {/* Divider */}
          <div
            className="w-24 h-px mx-auto mb-10"
            style={{ backgroundColor: "var(--gold-primary)" }}
          ></div>

          {/* Services */}
          <div className="mb-10">
            <h4
              className="heading-3 font-sans mb-6 text-center"
              style={{ color: "var(--text-primary)" }}
            >
              Servicii
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {member.services.map((service, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 border transition-all duration-300 hover:border-[var(--gold-primary)]"
                  style={{
                    border: "1px solid var(--border-light)",
                    backgroundColor: "var(--bg-subtle)",
                  }}
                >
                  <span
                    className="body-regular font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {service.name}
                  </span>
                  <span
                    className="body-small"
                    style={{ color: "var(--gold-primary)" }}
                  >
                    {/* Commented out for now */}
                    {/* {service.price} */}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery */}
          {member.gallery && member.gallery.length > 0 && (
            <div className="mb-10">
              <h4
                className="heading-3 font-sans mb-6 text-center"
                style={{ color: "var(--text-primary)" }}
              >
                Lucrări Recente
              </h4>
              <div className="grid grid-cols-3 gap-3 max-w-2xl mx-auto">
                {member.gallery.map((img, index) => (
                  <div
                    key={index}
                    className="aspect-square overflow-hidden group cursor-pointer"
                    style={{
                      border: "1px solid var(--border-light)",
                    }}
                    onClick={() => openLightbox(img, index)}
                  >
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage: `url('${img}')`,
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
            <button onClick={handleWhatsApp} className="btn-primary flex-1">
              <MessageCircle size={16} />
              Programare
            </button>
            <button onClick={handleInstagram} className="btn-primary flex-1">
              <Instagram size={16} />
              Portofoliu
            </button>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .modal-content {
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @media (min-width: 768px) {
          .modal-content {
            border-radius: 0px;
            animation: fadeIn 0.3s ease-out;
          }
        }

        /* Custom Scrollbar */
        .modal-content::-webkit-scrollbar {
          width: 6px;
        }

        .modal-content::-webkit-scrollbar-track {
          background: var(--bg-subtle);
        }

        .modal-content::-webkit-scrollbar-thumb {
          background: var(--gold-primary);
          border-radius: 3px;
        }

        .modal-content::-webkit-scrollbar-thumb:hover {
          background: var(--gold-dark);
        }
      `}</style>

      {/* Image Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            aria-label="Close"
          >
            <X size={24} className="text-white" />
          </button>

          {/* Previous Button */}
          {member.gallery.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              aria-label="Previous"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
          )}

          {/* Next Button */}
          {member.gallery.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              aria-label="Next"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          )}

          {/* Image */}
          <img
            src={lightboxImage}
            alt="Gallery preview"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: "fadeIn 0.3s ease-out",
            }}
          />

          {/* Image Counter */}
          {member.gallery.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white body-small">
              {lightboxIndex + 1} / {member.gallery.length}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const TeamCard = ({ member, onClick }) => {
  return (
    <div
      className="group relative bg-white rounded-none overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer"
      style={{
        border: "1px solid var(--border-light)",
      }}
      onClick={onClick}
    >
      {/* Image Container with Arch Top - INCREASED HEIGHT */}
      <div className="relative overflow-hidden">
        <div
          className="w-full h-96 bg-cover bg-top transition-transform duration-500 group-hover:scale-105"
          style={{
            backgroundImage: `url('${member.image}')`,
            clipPath: "ellipse(100% 100% at 50% 0%)",
          }}
        >
          {/* Gradient Overlay on Hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "linear-gradient(to top, rgba(180, 142, 67, 0.3) 0%, transparent 50%)",
            }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        {/* Name */}
        <h3
          className="heading-3 mb-2 font-serif"
          style={{ color: "var(--text-primary)" }}
        >
          {member.name}
        </h3>

        {/* Role */}
        <p
          className="body-small uppercase tracking-wider mb-6"
          style={{ color: "var(--text-secondary)", letterSpacing: "0.15em" }}
        >
          {member.role}
        </p>

        {/* Divider */}
        <div
          className="w-16 h-px mx-auto mb-6"
          style={{ backgroundColor: "var(--gold-primary)" }}
        ></div>

        {/* View Profile Text */}
        <p
          className="body-small uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ color: "var(--gold-primary)" }}
        >
          Vezi Detalii →
        </p>
      </div>

      {/* Golden Border on Hover */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          border: "2px solid var(--gold-primary)",
        }}
      ></div>
    </div>
  );
};

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section
      id="echipa"
      className="py-24 px-6"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-1 font-serif mb-4 text-gold">
            Echipa Noastră
          </h2>
          <p
            className="body-large max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Profesioniști dedicați pentru a vă oferi cele mai bune servicii de
            beauty
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member) => (
            <TeamCard
              key={member.id}
              member={member}
              onClick={() => setSelectedMember(member)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <TeamMemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </section>
  );
};

export default Team;
