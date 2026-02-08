import React from "react";
import { MapPin, Phone, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="py-16 px-6"
      style={{
        backgroundColor: "var(--text-primary)",
        color: "var(--bg-primary)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3
              className="text-3xl font-serif mb-3"
              style={{ color: "var(--gold-primary)" }}
            >
              MOOD
            </h3>
            <p
              className="text-sm uppercase tracking-[0.2em] mb-4"
              style={{ color: "var(--bg-secondary)" }}
            >
              Beauty Concept
            </p>
            <p
              className="body-small"
              style={{ color: "var(--bg-secondary)", lineHeight: "1.8" }}
            >
              Transformăm viziunea ta în realitate cu profesionalism și
              eleganță.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4
              className="heading-3 mb-6 font-sans"
              style={{ color: "var(--gold-primary)" }}
            >
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start justify-center md:justify-start gap-3">
                <MapPin
                  size={18}
                  className="mt-1 flex-shrink-0"
                  style={{ color: "var(--gold-primary)" }}
                />
                <p
                  className="body-small"
                  style={{ color: "var(--bg-secondary)" }}
                >
                  13 decembrie 1918, nr 42
                  <br />
                  Găești Dâmbovița, România
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone
                  size={18}
                  className="flex-shrink-0"
                  style={{ color: "var(--gold-primary)" }}
                />
                <p
                  className="body-small"
                  style={{ color: "var(--bg-secondary)" }}
                >
                  +40 755 989 126
                </p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left">
            <h4
              className="heading-3 mb-6 font-sans"
              style={{ color: "var(--gold-primary)" }}
            >
              Urmărește-ne
            </h4>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/mood.beautyconcept?igsh=NWxvenI3bnB5b2o4&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-[var(--gold-primary)] hover:bg-[var(--gold-primary)] transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram
                  size={20}
                  style={{ color: "var(--gold-primary)" }}
                  className="group-hover:text-[var(--text-primary)]"
                />
              </a>
              {/* <a
                href="https://www.instagram.com/georgianad.hair"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-[var(--gold-primary)] hover:bg-[var(--gold-primary)] transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook
                  size={20}
                  style={{ color: "var(--gold-primary)" }}
                  className="group-hover:text-[var(--text-primary)]"
                />
              </a> */}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-8"
          style={{ backgroundColor: "var(--border-subtle)" }}
        ></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="body-small" style={{ color: "var(--bg-secondary)" }}>
            © 2026 Mood Beauty Concept. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
