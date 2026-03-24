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

// Gallery photos — final corrected order with real named photos (Mar 2026)
const CDN2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663375111780/nkcjppguA9oxAReMTDaKiJ";
const GALLERY_PHOTOS = [
  // ── HOME PROJECTS — Fence ──────────────────────────────────
  { url: `${CDN2}/FencePackage_1_1fef0609.webp`, label: "Fence Package — Before Teardown", category: "Home Projects" },
  { url: `${CDN2}/TenceTeardown_2_916ae549.jpeg`, label: "Fence Teardown", category: "Home Projects" },
  { url: `${CDN2}/FenceInstallation_3_d2624838.jpeg`, label: "Fence Installation", category: "Home Projects" },
  { url: `${CDN2}/FenceCompletion_4_212d0a1c.jpeg`, label: "Fence Completion", category: "Home Projects" },
  // ── HOME PROJECTS — Custom Gate ────────────────────────────
  { url: `${CDN2}/CustomeGate_5_3e006972.jpeg`, label: "Custom Gate — Prep", category: "Home Projects" },
  { url: `${CDN2}/CustomeGateFabrication_5a_0a31edac.jpeg`, label: "Custom Gate — Fabrication", category: "Home Projects" },
  { url: `${CDN2}/CustomeGateFabrication_5b_5966ef70.jpeg`, label: "Custom Gate — Fabrication In Progress", category: "Home Projects" },
  { url: `${CDN2}/CustomeGateCompletion_6_812a80b6.webp`, label: "Custom Gate — Completed", category: "Home Projects" },
  // ── HOME PROJECTS — Concrete ───────────────────────────────
  { url: `${CDN2}/ConcretePadPreparation_7_d29ebb5a.jpeg`, label: "Concrete Pad — Preparation", category: "Home Projects" },
  { url: `${CDN2}/ConcretePour_8_8ecd8f32.jpeg`, label: "Concrete Pour", category: "Home Projects" },
  { url: `${CDN2}/ConcretePour_9_e45e39f9.jpeg`, label: "Concrete Pour — In Progress", category: "Home Projects" },
  { url: `${CDN2}/ConcretePadCompletion_9_7544c5d3.jpeg`, label: "Concrete Pad — Completion", category: "Home Projects" },
  // ── HOME PROJECTS — Deck ───────────────────────────────────
  { url: `${CDN2}/DeckBuild_19_620f2b87.jpeg`, label: "Deck Build", category: "Home Projects" },
  // ── LAWN CARE — Snow Removal ───────────────────────────────
  { url: `${CDN2}/SnowRemoval_10_ce8a47a2.jpeg`, label: "Snow Removal", category: "Lawn Care" },
  { url: `${CDN2}/SnowRemoval_11_850c1dd5.jpeg`, label: "Snow Removal — In Progress", category: "Lawn Care" },
  // ── LAWN CARE — Sod ───────────────────────────────────────
  { url: `${CDN2}/SodPreparation_16_328f96d9.jpeg`, label: "Sod Preparation", category: "Lawn Care" },
  { url: `${CDN2}/SodInstallation_17_c2959a3f.jpeg`, label: "Sod Installation", category: "Lawn Care" },
  { url: `${CDN2}/SodCompletion_18_d6118dcd.jpeg`, label: "Sod Completion", category: "Lawn Care" },
  { url: `${CDN2}/SodCompletion_18a_cc253ec7.jpeg`, label: "Sod Completion — Final", category: "Lawn Care" },
  // ── LAND MANAGEMENT ────────────────────────────────────────
  { url: `${CDN2}/LandClearing_12_48cee06f.jpeg`, label: "Land Clearing", category: "Home Projects" },
  { url: `${CDN2}/LandClearing_13_9771532e.webp`, label: "Land Clearing — In Progress", category: "Home Projects" },
  { url: `${CDN2}/LandManagement_14_440ab27d.jpeg`, label: "Land Management", category: "Home Projects" },
  { url: `${CDN2}/LandManagement_15_a50ff0d0.jpeg`, label: "Land Management — Completed", category: "Home Projects" },
];

const GALLERY_CATEGORIES = ["All", "Lawn Care", "Home Projects"];

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
function Hero({ onOpenModal }: { onOpenModal: () => void }) {
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
            <button onClick={onOpenModal} className="btn-amber">
              Start the Conversation
            </button>
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
                "Deck building, repair & extensions",
                "Fence & gate installation",
                "Concrete patios & sidewalks",
                "Driveway extension",
                "Small concrete pads",
                "French drain installation",
                "Land management & clearing",
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
// Contact Modal
// ============================================================
function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", address: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [addressStatus, setAddressStatus] = useState<"idle" | "checking" | "inRange" | "outOfRange" | "error">("idle");
  const checkTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleAddressChange = (value: string) => {
    setForm(f => ({ ...f, address: value }));
    setAddressStatus("idle");
    if (checkTimeoutRef.current) clearTimeout(checkTimeoutRef.current);
    if (value.trim().length < 8) return;
    checkTimeoutRef.current = setTimeout(() => {
      setAddressStatus("checking");
      if (typeof google === "undefined" || !google.maps) { setAddressStatus("error"); return; }
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: value }, (results, status) => {
        if (status === "OK" && results && results[0]) {
          const loc = results[0].geometry.location;
          const dist = getDistanceMiles(SERVICE_CENTER.lat, SERVICE_CENTER.lng, loc.lat(), loc.lng());
          setAddressStatus(dist <= SERVICE_RADIUS_MILES ? "inRange" : "outOfRange");
        } else { setAddressStatus("error"); }
      });
    }, 900);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (addressStatus === "outOfRange") return;
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("https://formspree.io/f/xbdznvrr", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`,
          phone: form.phone,
          address: form.address,
          message: form.message,
          _subject: "New Estimate Request from Mike's Mowing Website",
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitError("Something went wrong. Please call Mike at (618) 306-1760.");
      }
    } catch {
      setSubmitError("Something went wrong. Please call Mike at (618) 306-1760.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: "rgba(0,0,0,0.6)" }} onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-brand-dark" style={{ fontFamily: "'Playfair Display', serif" }}>Start the Conversation</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
          </div>
          {submitted ? (
            <div className="bg-[#1a2e1a] text-white rounded-xl p-8 text-center">
              <div className="text-[#d4a017] text-4xl mb-3">✓</div>
              <h3 className="font-bold text-xl mb-2">Thank You!</h3>
              <p className="text-white/80 mb-1">Your message has been sent successfully.</p>
              <p className="text-white/80">Mike will follow up within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-1">First Name <span className="text-red-500">*</span></label>
                  <input type="text" required value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#d4a017] bg-white" placeholder="First name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-1">Last Name <span className="text-red-500">*</span></label>
                  <input type="text" required value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#d4a017] bg-white" placeholder="Last name" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-1">Phone Number <span className="text-red-500">*</span></label>
                <input type="tel" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#d4a017] bg-white" placeholder="(xxx) xxx-xxxx" />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-1">Your Address <span className="text-red-500">*</span></label>
                <input type="text" required value={form.address} onChange={e => handleAddressChange(e.target.value)}
                  className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none bg-white transition-colors ${
                    addressStatus === "inRange" ? "border-green-500" : addressStatus === "outOfRange" ? "border-red-400" : "border-gray-300 focus:border-[#d4a017]"
                  }`}
                  placeholder="Street address — required to confirm service area" />
                {addressStatus === "checking" && <p className="mt-1 text-xs text-gray-500 flex items-center gap-1"><span className="inline-block w-3 h-3 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />Checking your service area...</p>}
                {addressStatus === "inRange" && <p className="mt-1 text-xs text-green-600 font-medium">✓ Great news — we serve your area!</p>}
                {addressStatus === "outOfRange" && <p className="mt-1 text-xs text-red-500 font-medium">We're sorry — your address is currently outside our service area. Please call Mike at (618) 306-1760.</p>}
                {addressStatus === "error" && <p className="mt-1 text-xs text-gray-500">We couldn't verify that address. Please double-check and try again.</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-1">Tell Us About Your Yard <span className="text-red-500">*</span></label>
                <textarea rows={4} required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#d4a017] bg-white resize-none"
                  placeholder="What services are you looking for? Describe your yard or project." />
              </div>
              {submitError && <p className="text-red-500 text-sm text-center">{submitError}</p>}
              <button type="submit" disabled={addressStatus === "outOfRange" || submitting} className="btn-amber w-full text-center disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                {submitting ? (
                  <><span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Sending...</>
                ) : "Send My Request"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
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
      desc: "A team member comes out, walks the property, and puts together a clear, honest estimate.",
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
          {/* Connecting line removed per client request */}

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
              className="text-4xl font-bold text-brand-dark mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Meet Mike
            </h2>
            {/* Pull quote */}
            <blockquote
              className="text-xl italic font-semibold mb-6 pl-4"
              style={{ color: "#d4a017", borderLeft: "3px solid #d4a017" }}
            >
              "Caring for someone's home is a privilege. I don't take that lightly."
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              I started Mike's Mowing and More because I wanted to do what I've always done best — work with my hands and serve the people around me. This isn't just a lawn care business. It's my way of helping families in Clarksville feel proud every time they pull into their driveway.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              I spent over 20 years as a U.S. Army construction engineer and worked as a trades instructor. That background taught me one thing above everything else: do it right, or don't do it at all. That's the standard I bring to every yard, every deck, and every project I take on.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              I've been serving this community since 1998, and every job I do is backed by that same commitment. My family keeps me grounded and reminds me every day why this work matters.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              My goal is simple: leave your property better than I found it — and leave you feeling like your home is exactly where you want to be.
            </p>
            <p className="text-sm font-semibold text-brand-dark mb-6">— Mike Spears, Owner</p>
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
const SERVICE_CENTER = { lat: 36.6275, lng: -87.3848 }; // Barkers Mill area, Clarksville, TN 37042
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
function Contact({ onOpenModal }: { onOpenModal: () => void }) {
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
              onClick={onOpenModal}
              className="btn-amber w-full max-w-xs mb-4 text-center"
            >
              Start the Conversation
            </button>
            <div className="flex gap-4 justify-center">
              <a href="tel:6183061760" className="flex items-center gap-2 text-brand-dark font-medium hover:text-[#d4a017] transition-colors">
                <Phone size={16} /> Call Mike
              </a>
              <a href="mailto:ProjectMike72@yahoo.com" className="flex items-center gap-2 text-brand-dark font-medium hover:text-[#d4a017] transition-colors">
                <Mail size={16} /> Email
              </a>
            </div>
          </div>

          {/* Right: Service area map */}
          <div>
            <h3 className="font-bold text-brand-dark text-lg mb-2 flex items-center gap-2">
              <MapPin size={18} className="text-[#d4a017]" /> Our Service Area
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Proudly serving Clarksville, TN, Oak Grove, KY, Fort Campbell, and surrounding communities.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Clarksville, TN", "Oak Grove, KY", "Fort Campbell"].map(area => (
                <span key={area} className="service-pill text-xs">{area}</span>
              ))}
            </div>
            <ServiceAreaMap />
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
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero onOpenModal={() => setModalOpen(true)} />
      <Services />
      <WhyChoose />
      <HowItWorks />
      <MeetMike />
      <Gallery />
      <Testimonials />
      <Contact onOpenModal={() => setModalOpen(true)} />
      <Footer />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
