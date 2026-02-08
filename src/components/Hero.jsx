import React from "react";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwyfHxiZWF1dHklMjBzYWxvbnxlbnwwfHx8fDE3NzAzNDc4NjZ8MA&ixlib=rb-4.1.0&q=85')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(245, 240, 235, 0.92) 0%, rgba(234, 219, 200, 0.88) 100%)",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Main Logo Text */}
        <h1
          className="hero-large font-serif mb-4 animate-fade-in"
          style={{ letterSpacing: "0.05em" }}
        >
          <span className="text-gold">MOOD</span>
        </h1>

        {/* Subtitle */}
        <h2
          className="text-2xl md:text-3xl font-sans font-light tracking-[0.3em] uppercase mb-8 animate-fade-in-delay"
          style={{ color: "var(--text-primary)" }}
        >
          Beauty Concept
        </h2>

        {/* Divider */}
        <div
          className="w-24 h-px mx-auto mb-8"
          style={{ backgroundColor: "var(--gold-primary)" }}
        ></div>

        {/* Location */}
        <p
          className="body-large font-light mb-12 animate-fade-in-delay-2"
          style={{ color: "var(--text-secondary)" }}
        >
          Strada 13 decembrie, nr 42 , Găești
        </p>

        {/* CTA Button */}
        <button
          onClick={() =>
            document
              .getElementById("echipa")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="btn-primary animate-fade-in-delay-3"
        >
          Descoperă Echipa
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div
            className="w-6 h-10 border-2 rounded-full flex justify-center pt-2"
            style={{ borderColor: "var(--gold-primary)" }}
          >
            <div
              className="w-1 h-3 rounded-full"
              style={{ backgroundColor: "var(--gold-primary)" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-fade-in-delay {
          opacity: 0;
          animation: fadeIn 1s ease-out 0.3s forwards;
        }

        .animate-fade-in-delay-2 {
          opacity: 0;
          animation: fadeIn 1s ease-out 0.6s forwards;
        }

        .animate-fade-in-delay-3 {
          opacity: 0;
          animation: fadeIn 1s ease-out 0.9s forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
