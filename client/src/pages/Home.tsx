import { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Facebook, ChevronLeft, ChevronRight, Clock, Shield, Star, Heart, Target, Users } from "lucide-react";
import { MapView } from "@/components/Map";

// ============================================================
// ASSET URLs — all hosted on CDN
// ============================================================
const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663375111780/nkcjppguA9oxAReMTDaKiJ";

const MIKE_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663375111780/nkcjppguA9oxAReMTDaKiJ/mike_new_photo_73dec467.png";

// 3D Mike (provided by client)
const MIKE_3D = `${CDN}/mike_3d_63e1a3cf.png`;

// Hero slideshow images (provided by client)
const HERO_SLIDES = [
  { url: `${CDN}/hero_lawn_5fd55fe5.png`, caption: "Lawn Care & Landscaping" },
  { url: `${CDN}/hero_deck_684a5aeb.png`, caption: "Deck Building & Restoration" },
  { url: `${CDN}/hero_fence_8501220e.png`, caption: "Fencing & Home Projects" },
];

// Gallery photos — ordered per client notes (Francine, Mar 2026)
const GALLERY_PHOTOS = [
  // ── LAWN CARE ──────────────────────────────────────────────
  // Snow Removal
  { url: `${CDN}/work_09_6bd89546.jpg`, label: "Snow Removal", category: "Lawn Care" },
  { url: `${CDN}/work_10_14aa5494.jpg`, label: "Snow Removal — In Progress", category: "Lawn Care" },
  // Sod Installation
  { url: `${CDN}/work_21_88b0ea95.jpg`, label: "Yard Grading — Before Sod", category: "Lawn Care" },
  { url: `${CDN}/work_20_2f35e8c8.jpg`, label: "Sod Installation", category: "Lawn Care" },
  // ── LAND MANAGEMENT ────────────────────────────────────────
  // Land Clearing job
  { url: `${CDN}/work_04_25430141.jpg`, label: "Land Clearing — Before", category: "Land Management" },
  { url: `${CDN}/work_02_bab492d8.jpg`, label: "Land Clearing — In Progress", category: "Land Management" },
  { url: `${CDN}/work_03_496b4579.jpg`, label: "Land Clearing — In Progress", category: "Land Management" },
  { url: `${CDN}/work_01_2d2c883b.jpg`, label: "Land Clearing — Completed", category: "Land Management" },
  // ── HOME PROJECTS ──────────────────────────────────────────
  // Fence Package — in order: package (before) → teardown → installation → completion
  { url: `${CDN}/work_11_3b102b58.jpg`, label: "Fence Package — Before Teardown", category: "Home Projects" },
  { url: `${CDN}/work_18_a0105963.jpg`, label: "Fence Teardown", category: "Home Projects" },
  { url: `${CDN}/work_15_3116217d.jpg`, label: "Fence Installation", category: "Home Projects" },
  { url: `${CDN}/work_17_bfec5a0b.jpg`, label: "Fence Installation — Completed", category: "Home Projects" },
  // Custom Gate — prep → fabrication → completion
  { url: `${CDN}/work_16_33732d2d.jpg`, label: "Custom Gate — Prep", category: "Home Projects" },
  { url: `${CDN}/work_07_224437b3.jpg`, label: "Custom Gate — Fabrication", category: "Home Projects" },
  { url: `${CDN}/work_06_2a8bd48b.jpg`, label: "Custom Gate — Fabrication In Progress", category: "Home Projects" },
  { url: `${CDN}/work_08_9c48a5af.jpg`, label: "Custom Gate — Completed", category: "Home Projects" },
  // Deck Build
  { url: `${CDN}/work_05_6594c081.jpg`, label: "Deck Build — Framing", category: "Home Projects" },
  { url: `${CDN}/work_19_5192cb17.jpg`, label: "Deck Build — Completion", category: "Home Projects" },
  // Concrete — prep → pour → completion
  { url: `${CDN}/work_23_13908b9b.jpg`, label: "Concrete Pad — Preparation", category: "Home Projects" },
  { url: `${CDN}/work_12_61aa0cda.jpg`, label: "Concrete Pour", category: "Home Projects" },
  { url: `${CDN}/work_13_ba8bd682.jpg`, label: "Concrete Pour — In Progress", category: "Home Projects" },
  { url: `${CDN}/work_14_b8c2e30b.jpg`, label: "Concrete Pad — Completion", category: "Home Projects" },
  { url: `${CDN}/work_22_85adee66.jpg`, label: "Concrete Pad — Final Result", category: "Home Projects" },
];

const GALLERY_CATEGORIES = ["All", "Lawn Care", "Land Management", "Home Projects"];

// ============================================================
// Navbar
// ============================================================
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(26,46,26,0.97)" : "rgba(26,46,26,0.85)",
        backdropFilter: "blur(8px)",
        boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="container flex items-center justify-between h-16">
        <a
          href="#"
          className="text-white font-bold text-lg"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Mike's Mowing and More
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {["services", "about", "gallery", "contact"].map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className="text-white/80 hover:text-white text-sm font-medium capitalize transition-colors"
            >
              {s === "gallery" ? "Our Work" : s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo("contact")}
          className="hidden md:block btn-amber text-sm px-4 py-2"
        >
          Let's Talk About Your Yard
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-6 h-0.5 bg-white mb-1.5" />
          <div className="w-6 h-0.5 bg-white mb-1.5" />
          <div className="w-6 h-0.5 bg-white" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#1a2e1a] border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {["services", "about", "gallery", "contact"].map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className="text-white/80 hover:text-white text-left text-sm font-medium capitalize"
            >
              {s === "gallery" ? "Our Work" : s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
          <button onClick={() => scrollTo("contact")} className="btn-amber text-sm">
            Let's Talk About Your Yard
          </button>
        </div>
      )}
    </nav>
  );
}

// ============================================================
// Hero Section
// ============================================================
function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(s => (s + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Slideshow backgrounds */}
      {HERO_SLIDES.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${slide.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: currentSlide === i ? 1 : 0,
          }}
        />
      ))}

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(15,25,15,0.68)" }}
      />

      {/* Slide dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className="w-2.5 h-2.5 rounded-full transition-all"
            style={{ backgroundColor: currentSlide === i ? "#d4a017" : "rgba(255,255,255,0.4)" }}
          />
        ))}
      </div>

      <div className="relative container pt-24 pb-16">
        {/* 3D Mike - positioned on the right side of the hero */}
        <img
          src={MIKE_3D}
          alt="Mike's Mowing and More"
          className="absolute right-4 md:right-8 bottom-0 hidden md:block"
          style={{ height: "85%", maxHeight: "520px", objectFit: "contain", objectPosition: "bottom", zIndex: 5 }}
        />
        <div className="max-w-xl">
          <h1
            className="text-white text-5xl md:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Keeping Families In Love With Coming Home.
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-xl">
            Your yard should be a place for making memories, not a weekend chore. We handle the details so you can enjoy the moments that matter, in a space you truly love.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:6183061760" className="btn-amber">
              Request an Estimate
            </a>
            <a href="tel:6183061760" className="btn-outline-white">
              Call or Text Mike: (618) 306-1760
            </a>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div
        className="relative w-full py-5"
        style={{ backgroundColor: "rgba(26,46,26,0.92)" }}
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: <Clock size={20} />, text: "20+ Years Experience" },
              { icon: <Shield size={20} />, text: "Veteran-Led & Family-Run" },
              { icon: <Star size={20} />, text: "Licensed & Insured" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3 rounded-lg"
                style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <span className="text-brand-amber">{item.icon}</span>
                <span className="text-white font-medium text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Services Section
// ============================================================
function Services() {
  return (
    <section id="services" className="py-20 bg-brand-cream">
      <div className="container">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold text-brand-dark mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What We Do
          </h2>
          <p className="text-gray-600 text-lg">
            Professional lawn care & home improvement — built on trust, delivered with pride.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Lawn Care Card */}
          <div
            className="rounded-xl p-8 flex flex-col"
            style={{ backgroundColor: "#1a2e1a" }}
          >
            <h3
              className="text-white text-2xl font-bold mb-6 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Lawn Care
            </h3>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Mowing, edging & trimming",
                "Seasonal clean-ups",
                "Aeration, overseeding & weed control",
                "Tree & shrub trimming",
                "Flower beds",
                "Land management",
                "Snow removal",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/85">
                  <span className="text-brand-amber text-lg">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-brand-amber font-semibold flex items-center gap-2 hover:gap-3 transition-all"
            >
              Explore Our Care Services →
            </button>
          </div>

          {/* Home Projects Card */}
          <div
            className="rounded-xl p-8 flex flex-col"
            style={{ backgroundColor: "#1a2e1a" }}
          >
            <h3
              className="text-white text-2xl font-bold mb-6 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Home Projects
            </h3>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Decks & deck restoration",
                "Deck building, repair & extensions",
                "Fences & gates",
                "Concrete patios & sidewalks",
                "Driveway extension",
                "Small concrete pads",
                "Light handyman work",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/85">
                  <span className="text-brand-amber text-lg">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-brand-amber font-semibold flex items-center gap-2 hover:gap-3 transition-all"
            >
              See What We Can Build →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Why Choose Section
// ============================================================
function WhyChoose() {
  const features = [
    {
      icon: <Heart size={24} />,
      title: "A Yard You're Proud to Pull Into",
      desc: "We create the kind of clean, manicured look that makes you smile every time you come home.",
    },
    {
      icon: <Target size={24} />,
      title: "A Plan Centered on Your Vision",
      desc: "Your goals come first. We listen to what you want and build a service plan that brings your vision to life.",
    },
    {
      icon: <Users size={24} />,
      title: "Service That Feels Like Family",
      desc: "As a veteran-led, family-run business, we're your Clarksville neighbors — committed to integrity and respect.",
    },
    {
      icon: <Clock size={24} />,
      title: "Reliability You Can Set Your Watch To",
      desc: "Count on consistent scheduling, clear communication, and a team that shows up on time.",
    },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: "#1a2e1a" }}>
      <div className="container">
        <h2
          className="text-white text-4xl font-bold text-center mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Why Families Choose Mike's Mowing and More
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="rounded-xl p-6"
              style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(212,160,23,0.15)" }}
              >
                <span className="text-brand-amber">{f.icon}</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// How It Works
// ============================================================
function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Let's Talk",
      desc: "Call, text, or fill out the form. Tell us about your yard.",
    },
    {
      num: "2",
      title: "Walk-Through & Estimate",
      desc: "Mike comes out, walks the property, and puts together a clear, honest estimate.",
    },
    {
      num: "3",
      title: "Enjoy Your Yard",
      desc: "We handle the work, you enjoy the results. Welcome to your happy ever after home.",
    },
  ];

  return (
    <section className="py-20 bg-brand-cream">
      <div className="container">
        <h2
          className="text-4xl font-bold text-center text-brand-dark mb-16"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting dashed lines on desktop */}
          <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-0.5 border-t-2 border-dashed border-[#d4a017]/40" />

          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center bg-white rounded-xl p-8 shadow-sm">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white mb-4"
                style={{ backgroundColor: "#d4a017" }}
              >
                {step.num}
              </div>
              <h3 className="font-bold text-lg text-brand-dark mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Meet Mike Section
// ============================================================
function MeetMike() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl shadow-2xl" style={{ aspectRatio: "3/4" }}>
              <img
                src={MIKE_PHOTO}
                alt="Mike Spears on his mower"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: "center 10%", transform: "scale(1.15)", transformOrigin: "center 10%" }}
              />
              {/* Subtle gradient at bottom for polish */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* Text */}
          <div>
            <div
              className="w-1 h-16 rounded-full mb-6"
              style={{ backgroundColor: "#d4a017" }}
            />
            <h2
              className="text-4xl font-bold text-brand-dark mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Meet Mike
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mike's Mowing and More started as a way for Mike Spears to do what he loves most: work with his hands and serve his community. He wanted to build a business about more than lawn care — serving his neighbors and helping families create a home they genuinely love coming home to. A family business built on the idea that caring for someone's home is a privilege.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              That commitment is backed by a lifetime of experience. Mike spent over 20 years as a U.S. Army construction engineer and served as a trades instructor. He knows what it takes to do things the right way. It's why our lines are so clean, our builds are so sturdy, and our clients trust us.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              For Mike, the goal is simple: create beautiful, functional outdoor spaces where families can relax and connect.
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-[#d4a017] font-semibold flex items-center gap-2 hover:gap-3 transition-all"
            >
              Get in Touch with Mike →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Gallery Section
// ============================================================
function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentSlide, setCurrentSlide] = useState(0);

  const filtered = activeCategory === "All"
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(p => p.category === activeCategory);

  const visibleCount = 3;
  const maxSlide = Math.max(0, filtered.length - visibleCount);

  const prev = () => setCurrentSlide(s => Math.max(0, s - 1));
  const next = () => setCurrentSlide(s => Math.min(maxSlide, s + 1));

  useEffect(() => { setCurrentSlide(0); }, [activeCategory]);

  const visible = filtered.slice(currentSlide, currentSlide + visibleCount);

  return (
    <section id="gallery" className="py-20 bg-brand-cream">
      <div className="container">
        <h2
          className="text-4xl font-bold text-center text-brand-dark mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our Work
        </h2>
        <p className="text-center text-gray-600 mb-8">Real jobs. Real results. See what we can do for your property.</p>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {GALLERY_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                backgroundColor: activeCategory === cat ? "#d4a017" : "transparent",
                color: activeCategory === cat ? "#1a1a1a" : "#1a2e1a",
                border: `1px solid ${activeCategory === cat ? "#d4a017" : "#1a2e1a"}`,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {visible.map((photo, i) => (
              <div key={`${activeCategory}-${currentSlide}-${i}`} className="relative rounded-xl overflow-hidden aspect-video bg-gray-200 shadow-md">
                <img
                  src={photo.url}
                  alt={photo.label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <span className="text-white text-sm font-medium">{photo.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              disabled={currentSlide === 0}
              className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all disabled:opacity-30"
              style={{ borderColor: "#1a2e1a", color: "#1a2e1a" }}
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: maxSlide + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className="w-2.5 h-2.5 rounded-full transition-all"
                  style={{ backgroundColor: currentSlide === i ? "#d4a017" : "#1a2e1a40" }}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={currentSlide >= maxSlide}
              className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all disabled:opacity-30"
              style={{ borderColor: "#1a2e1a", color: "#1a2e1a" }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Testimonials
// ============================================================
function Testimonials() {
  const testimonials = [
    {
      quote: "Mike and his team transformed our yard. We actually enjoy spending time outside now!",
      name: "Sarah T.",
    },
    {
      quote: "Reliable, fair, and the work speaks for itself. Our lawn has never looked this good.",
      name: "James R.",
    },
    {
      quote: "They built our deck exactly how we envisioned it. The whole family loves it.",
      name: "The Williams Family",
    },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: "#1a2e1a" }}>
      <div className="container">
        <h2
          className="text-white text-4xl font-bold text-center mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          What Our Neighbors Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-xl p-6"
              style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div className="text-[#d4a017] text-3xl font-serif mb-3">"</div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} fill="#d4a017" className="text-[#d4a017]" />
                ))}
              </div>
              <p className="text-white/85 italic mb-4 leading-relaxed">"{t.quote}"</p>
              <p className="text-[#d4a017] font-semibold text-sm">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Service center coordinates (Clarksville, TN — update to Mike's exact address after meeting)
const SERVICE_CENTER = { lat: 36.5298, lng: -87.3595 };
const SERVICE_RADIUS_MILES = 8;
const SERVICE_RADIUS_METERS = SERVICE_RADIUS_MILES * 1609.34;

// Haversine distance formula (returns distance in meters between two lat/lng points)
function getDistanceMeters(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number }
): number {
  const R = 6371000;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const sinDLat = Math.sin(dLat / 2);
  const sinDLng = Math.sin(dLng / 2);
  const c =
    sinDLat * sinDLat +
    Math.cos((a.lat * Math.PI) / 180) *
      Math.cos((b.lat * Math.PI) / 180) *
      sinDLng *
      sinDLng;
  return R * 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c));
}

// ============================================================
// Service Area Map (clean — no radius shown publicly)
// ============================================================
function ServiceAreaMap() {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm" style={{ height: "260px" }}>
      <MapView
        initialCenter={SERVICE_CENTER}
        initialZoom={11}
        className="w-full h-full"
        onMapReady={(map) => {
          // Just show a marker — no radius circle visible to the public
          new google.maps.marker.AdvancedMarkerElement({
            map,
            position: SERVICE_CENTER,
            title: "Mike's Mowing and More — Clarksville, TN",
          });
        }}
      />
    </div>
  );
}

// ============================================================
// Haversine distance in miles between two lat/lng points
function getDistanceMiles(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 3958.8;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// Contact Section
// ============================================================
function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", address: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [addressStatus, setAddressStatus] = useState<"idle" | "checking" | "inRange" | "outOfRange" | "error">("idle");
  const checkTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Check address against service area as user types (debounced)
  const handleAddressChange = (value: string) => {
    setForm(f => ({ ...f, address: value }));
    setAddressStatus("idle");
    if (checkTimeoutRef.current) clearTimeout(checkTimeoutRef.current);
    if (value.trim().length < 8) return;
    checkTimeoutRef.current = setTimeout(() => {
      setAddressStatus("checking");
      if (typeof google === "undefined" || !google.maps) {
        setAddressStatus("error");
        return;
      }
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: value }, (results, status) => {
        if (status === "OK" && results && results[0]) {
          const loc = results[0].geometry.location;
          const dist = getDistanceMiles(
            SERVICE_CENTER.lat, SERVICE_CENTER.lng,
            loc.lat(), loc.lng()
          );
          setAddressStatus(dist <= SERVICE_RADIUS_MILES ? "inRange" : "outOfRange");
        } else {
          setAddressStatus("error");
        }
      });
    }, 900);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (addressStatus === "outOfRange") return; // block submission if out of range
    const subject = encodeURIComponent("New Estimate Request from Website");
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nAddress: ${form.address}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:ProjectMike72@yahoo.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-brand-cream">
      <div className="container">
        <h2
          className="text-4xl font-bold text-center text-brand-dark mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Let's Talk About Your Yard
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Ready to transform your property? Mike will follow up within 24 hours.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: 3D Mike + contact links */}
          <div className="flex flex-col items-center text-center">
            <img
              src={MIKE_3D}
              alt="Mike's Mowing and More"
              className="w-72 h-auto object-contain mb-4"
            />
            <button
              onClick={() => document.getElementById("contact-form")?.querySelector("input")?.focus()}
              className="btn-amber w-full max-w-xs mb-4 text-center"
            >
              Start the Conversation
            </button>
            <div className="flex gap-4 justify-center">
              <a
                href="tel:6183061760"
                className="flex items-center gap-2 text-brand-dark font-medium hover:text-[#d4a017] transition-colors"
              >
                <Phone size={16} /> Call Mike
              </a>
              <a
                href="mailto:ProjectMike72@yahoo.com"
                className="flex items-center gap-2 text-brand-dark font-medium hover:text-[#d4a017] transition-colors"
              >
                <Mail size={16} /> Email
              </a>
            </div>
          </div>

          {/* Right: Service area + form */}
          <div>
            <div className="mb-8">
              <h3 className="font-bold text-brand-dark text-lg mb-2 flex items-center gap-2">
                <MapPin size={18} className="text-[#d4a017]" /> Our Service Area
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Proudly serving Clarksville, TN, Oak Grove, KY, Fort Campbell, and surrounding communities within 8 miles.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Clarksville, TN", "Oak Grove, KY", "Fort Campbell"].map(area => (
                  <span key={area} className="service-pill text-xs">{area}</span>
                ))}
              </div>
              <ServiceAreaMap />
            </div>

            {submitted ? (
              <div className="bg-[#1a2e1a] text-white rounded-xl p-8 text-center">
                <div className="text-[#d4a017] text-4xl mb-3">✓</div>
                <h3 className="font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-white/80">Mike will follow up within 24 hours.</p>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#d4a017] bg-white"
                    placeholder="First and last name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#d4a017] bg-white"
                    placeholder="(xxx) xxx-xxxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-1">Your Address <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    required
                    value={form.address}
                    onChange={e => handleAddressChange(e.target.value)}
                    className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none bg-white transition-colors ${
                      addressStatus === "inRange" ? "border-green-500 focus:border-green-500" :
                      addressStatus === "outOfRange" ? "border-red-400 focus:border-red-400" :
                      "border-gray-300 focus:border-[#d4a017]"
                    }`}
                    placeholder="Street address — required to confirm service area"
                  />
                  {addressStatus === "checking" && (
                    <p className="mt-1.5 text-xs text-gray-500 flex items-center gap-1">
                      <span className="inline-block w-3 h-3 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                      Checking your service area...
                    </p>
                  )}
                  {addressStatus === "inRange" && (
                    <p className="mt-1.5 text-xs text-green-600 font-medium flex items-center gap-1">
                      ✓ Great news — we serve your area!
                    </p>
                  )}
                  {addressStatus === "outOfRange" && (
                    <p className="mt-1.5 text-xs text-red-500 font-medium">
                      We're sorry — your address is currently outside our service area. We serve within 8 miles of Clarksville, TN. Please call Mike at (618) 306-1760 to discuss your options.
                    </p>
                  )}
                  {addressStatus === "error" && (
                    <p className="mt-1.5 text-xs text-gray-500">
                      We couldn't verify that address. Please double-check and try again.
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-1">Tell Us About Your Yard</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#d4a017] bg-white resize-none"
                    placeholder="What services are you looking for?"
                  />
                </div>
                <button type="submit" className="btn-amber w-full text-center">
                  Start the Conversation
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Footer
// ============================================================
function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: "#1a1a1a" }} className="text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3
              className="text-white font-bold text-xl mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Mike's Mowing and More
            </h3>
            <p className="text-white/60 text-sm">Helping families love coming home.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Services", id: "services" },
                { label: "About", id: "about" },
                { label: "Our Work", id: "gallery" },
                { label: "Contact", id: "contact" },
              ].map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-white/70 hover:text-white text-sm text-left transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">Get In Touch</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:6183061760" className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
                <Phone size={14} /> (618) 306-1760
              </a>
              <a href="mailto:ProjectMike72@yahoo.com" className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
                <Mail size={14} /> ProjectMike72@yahoo.com
              </a>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <MapPin size={14} /> Serving Clarksville, TN & surrounding areas
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <p className="text-white/40 text-xs">Licensed & Insured</p>
          <a
            href="https://www.facebook.com/profile.php?id=100057515355020"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-[#d4a017] transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
          <p className="text-white/40 text-xs">© 2026 Mike's Mowing and More. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// Main Page
// ============================================================
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <WhyChoose />
      <HowItWorks />
      <MeetMike />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
