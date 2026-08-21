import type { Metadata } from "next";
import WeddingDateCheckForm from "../components/WeddingDateCheckForm";
import GoogleReviewsTicker from "../components/GoogleReviewsTicker";

export const metadata: Metadata = {
  alternates: { canonical: "/weddings" },
  title: "Luxury Wedding Photo Booth Rental Atlanta | DEMM Photo Booths",
  description:
    "Make your Atlanta wedding reception unforgettable. Premium magic mirror photo booth rentals with studio lighting, custom prints, digital sharing & dedicated attendant across Metro Atlanta.",
  keywords: [
    "Wedding Photo Booth Rental Atlanta",
    "Atlanta Wedding Photo Booth",
    "Photo Booth Rental Atlanta Wedding",
    "Mirror Photo Booth Wedding Atlanta",
    "Wedding Reception Photo Booth Atlanta",
  ],
};

const weddingFaqs = [
  [
    "Why choose DEMM Photo Booths for our Atlanta wedding?",
    "Your wedding day is one-of-a-kind. We provide a luxury floor-to-ceiling mirror booth, professional DSLR photo quality, studio lighting, custom branded print overlays matching your wedding aesthetic, and a dedicated host who engages your guests so you can relax and celebrate.",
  ],
  [
    "How does the $200 booking deposit work?",
    "Your $200 deposit reserves and locks in your wedding date. The entire $200 deposit is applied directly toward your package total ($349 balance remaining for the $549 Photo Booth Machine, or $549 balance remaining for the $749 Machine + Unlimited Prints package).",
  ],
  [
    "Can our photo print design match our wedding invitations?",
    "Absolutely. Our graphic designer creates custom print templates tailored to your wedding colors, monogram, names, and wedding date.",
  ],
  [
    "Do you handle setup and breakdown at the venue?",
    "Yes. We coordinate directly with your venue and wedding planner, arriving 60–90 minutes early for full setup and soundless breakdown.",
  ],
  [
    "How early should we reserve our wedding date?",
    "Peak Atlanta wedding seasons (Spring and Fall) fill up fast. We recommend reserving your date 3–9 months in advance.",
  ],
];

export default function WeddingsPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Luxury Wedding Photo Booth Rental Atlanta",
      "provider": {
        "@type": "LocalBusiness",
        "name": "DEMM Photo Booths Atlanta",
        "telephone": "+1-813-451-0626",
        "url": "https://www.demmphotobooths.com",
      },
      "areaServed": "Atlanta, Buckhead, Midtown, Alpharetta, Sandy Springs, Decatur, Metro Atlanta",
      "description": "Floor-to-ceiling luxury DSLR magic mirror photo booth rentals for wedding receptions across Atlanta.",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.demmphotobooths.com" },
        { "@type": "ListItem", "position": 2, "name": "Wedding Photo Booth Atlanta", "item": "https://www.demmphotobooths.com/weddings" }
      ]
    }
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Navigation */}
      <header className="nav">
        <a className="brand" href="/">
          <span>DEMM</span>
          <small>WEDDING PHOTO BOOTHS • ATLANTA</small>
        </a>
        <nav aria-label="Wedding navigation">
          <a href="/">Home</a>
          <a href="#experience">The Experience</a>
          <a href="#packages">Packages & Pricing</a>
          <a href="/corporate-events">Corporate</a>
          <a href="/celebrations">Parties</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="button small" href="#quote">
          Check Wedding Date
        </a>
      </header>

      {/* Hero */}
      <section className="hero" id="top">
        <div className="orb one" />
        <div className="orb two" />
        <div className="hero-inner">
          <p className="eyebrow">LUXURY ATLANTA WEDDING EXPERIENCES</p>
          <h1>
            You Spend Months Planning A Wedding That Passes In A Few Hours.
          </h1>
          <p className="lead">
            The laughs, pictures, friends, and family are the memories that remain. DEMM Photobooths gives your guests an unforgettable way to celebrate together.
          </p>
          <div className="actions">
            <a className="button" href="#quote">
              CHECK YOUR WEDDING DATE
            </a>
            <a
              className="button secondary"
              href="#packages"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#fff",
                marginLeft: "12px",
              }}
            >
              View Packages ($549 / $749)
            </a>
          </div>
          <div className="trust">
            <span>DSLR Studio Quality</span>
            <span>Custom Monogram Overlay</span>
            <span>Instant Digital Sharing</span>
            <span>On-Site Attendant</span>
          </div>
        </div>
        <div className="hero-card" aria-hidden="true">
          <div className="flash">✦</div>
          <div
            className="photo"
            style={{
              backgroundImage: "url('/images/wedding-moment.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <p>
            YOUR WEDDING DAY.<br />
            <b>BEAUTIFULLY CAPTURED.</b>
          </p>
        </div>
      </section>

      {/* Social Proof */}
      <GoogleReviewsTicker />

      <section className="proof">
        <span>5.0 Star Rated Wedding Entertainment</span>
        <span>135 Google Reviews · 5.0 Stars</span>
        <span>Serving All Metro Atlanta Venues</span>
      </section>

      {/* Split Experience */}
      <section className="section split" id="experience">
        <div>
          <p className="eyebrow">THE WEDDING EXPERIENCE</p>
          <h2>
            More Than Photos. <em>A Keepsake Celebration.</em>
          </h2>
        </div>
        <div>
          <p className="large">
            From your cocktail hour to the final dance, DEMM creates an interactive experience that gets your guests off their feet, laughing together, and sharing stunning high-res photos instantly.
          </p>
          <ul className="checks">
            <li>Floor-to-ceiling interactive Magic Mirror design</li>
            <li>Studio-grade DSLR photos with flattering beauty lighting</li>
            <li>Customized print layout matching your wedding aesthetic</li>
            <li>Instant SMS and Email photo sharing for your guests</li>
            <li>Dressed-for-the-occasion professional on-site attendant</li>
          </ul>
        </div>
      </section>

      {/* Transparent Wedding Packages Section */}
      <section className="section" id="packages" style={{ padding: "80px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p className="eyebrow">CLEAR & TRANSPARENT PRICING</p>
          <h2 style={{ fontSize: "2.6rem", marginBottom: "16px" }}>
            Simple Wedding Packages. <em>No Hidden Surprises.</em>
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "1.1rem", maxWidth: "680px", margin: "0 auto" }}>
            Reserve your wedding date with a <strong>$200 deposit</strong> applied directly toward your package total.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px", alignItems: "stretch" }}>
          {/* Base Package */}
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", padding: "36px 30px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ color: "#a78bfa", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "1.5px", marginBottom: "12px", textTransform: "uppercase" }}>Essential Digital Experience</div>
              <h3 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: "12px" }}>Photo Booth Machine</h3>
              <div style={{ fontSize: "2.8rem", fontWeight: 800, color: "#fff", marginBottom: "8px" }}>$549 <span style={{ fontSize: "1rem", color: "#94a3b8", fontWeight: 400 }}>total</span></div>
              <p style={{ color: "#cbd5e1", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "24px" }}>
                Complete luxury mirror booth experience with interactive touch screen, DSLR camera, flattering studio lighting, and instant digital sharing.
              </p>
              <ul className="checks" style={{ marginBottom: "24px", fontSize: "0.95rem" }}>
                <li>Full wedding reception mirror booth service</li>
                <li>DSLR studio camera + beauty ring lighting</li>
                <li>Custom digital overlay matching wedding theme</li>
                <li>Instant SMS & Email sharing for guests</li>
                <li>Professional on-site attendant</li>
                <li>$200 deposit to lock date ($349 remaining)</li>
              </ul>
            </div>
            <a className="button secondary" href="#quote" style={{ textAlign: "center", width: "100%", boxSizing: "border-box" }}>
              Check Date for $549 Package
            </a>
          </div>

          {/* Machine + Prints Package */}
          <div style={{ background: "linear-gradient(135deg, rgba(124, 58, 237, 0.15), rgba(79, 70, 229, 0.1))", border: "2px solid rgba(167, 139, 250, 0.5)", borderRadius: "16px", padding: "36px 30px", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
            <div style={{ position: "absolute", top: "-12px", right: "24px", background: "linear-gradient(135deg, #7c3aed, #a78bfa)", color: "#fff", fontSize: "0.75rem", fontWeight: 800, padding: "4px 12px", borderRadius: "100px", letterSpacing: "1px", textTransform: "uppercase" }}>
              Most Popular
            </div>
            <div>
              <div style={{ color: "#c4b5fd", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "1.5px", marginBottom: "12px", textTransform: "uppercase" }}>Full Print & Digital Package</div>
              <h3 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: "12px" }}>Machine + Unlimited Prints</h3>
              <div style={{ fontSize: "2.8rem", fontWeight: 800, color: "#fff", marginBottom: "8px" }}>$749 <span style={{ fontSize: "1rem", color: "#c4b5fd", fontWeight: 400 }}>total ($549 + $200 prints)</span></div>
              <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "24px" }}>
                The complete celebration experience. Everything in the Photo Booth Machine package PLUS high-speed on-site unlimited physical lab-quality prints for every guest.
              </p>
              <ul className="checks" style={{ marginBottom: "24px", fontSize: "0.95rem" }}>
                <li>Everything in the Base Machine package</li>
                <li>Unlimited 2x6 or 4x6 instant physical prints</li>
                <li>Custom designed wedding print template</li>
                <li>Every guest in every photo gets a print</li>
                <li>High-speed commercial photo printer</li>
                <li>$200 deposit to lock date ($549 remaining)</li>
              </ul>
            </div>
            <a className="button" href="#quote" style={{ textAlign: "center", width: "100%", boxSizing: "border-box" }}>
              Check Date for $749 Package
            </a>
          </div>
        </div>
      </section>

      {/* What to Expect Timeline */}
      <section className="process" id="timeline">
        <div className="section-title">
          <p className="eyebrow">WHAT TO EXPECT</p>
          <h2>
            Your Wedding Day <em>Timeline.</em>
          </h2>
        </div>
        <div className="steps">
          {[
            ["01", "Setup", "DEMM arrives 60–90 minutes before guests. We coordinate placement, power, and backdrop position with the venue. The booth is fully tested before guests enter."],
            ["02", "Cocktail Hour", "The booth is active during cocktail hour when guests are ready to celebrate. The attendant encourages group photos and high energy."],
            ["03", "Reception", "The booth continues through dinner and dancing. We manage guest flow, keep props organized, and ensure everyone gets their prints and digital photos."],
            ["04", "End of Night", "Quiet, seamless breakdown after the final song. Zero hassle for the bride, groom, or family."],
          ].map((x) => (
            <article key={x[0]}>
              <b>{x[0]}</b>
              <h3>{x[1]}</h3>
              <p>{x[2]}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Host Highlight */}
      <section className="host">
        <div
          className="host-visual"
          style={{
            backgroundImage: "url('/images/mirror-booth..png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span>ELEGANT & REFINED PRESENCE</span>
        </div>
        <div>
          <p className="eyebrow">WEDDING DAY PEACE OF MIND</p>
          <h2>
            We Handle the Details. <em>You Enjoy Your Special Day.</em>
          </h2>
          <p className="large">
            We work directly with your wedding coordinator, venue manager, and DJ to ensure setup happens ahead of schedule and guest flow remains smooth all evening.
          </p>
          <p>Zero stress, zero technical glitches—just pure celebration.</p>
          <a className="button" href="#quote">
            Reserve Your Wedding Date
          </a>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="area">
        <p className="eyebrow">METRO ATLANTA WEDDING VENUES</p>
        <h2>
          Serving Weddings Across <em>Atlanta & Beyond.</em>
        </h2>
        <p>
          Buckhead • Midtown • Downtown • Alpharetta • Roswell • Sandy Springs • Decatur • Marietta • Serenbe • Lake Oconee • and premier North Georgia wedding venues
        </p>
      </section>

      {/* Lead Capture Form Section */}
      <section className="quote" id="quote">
        <div className="quote-copy">
          <p className="eyebrow">PLAN YOUR RECEPTION</p>
          <h2>
            Check Availability for Your <em>Wedding Date.</em>
          </h2>
          <p className="large">
            Enter your wedding details below to confirm availability and lock in your wedding date.
          </p>
          <div className="promise">
            <b>Guaranteed Transparent Pricing.</b>
            <span>Photo Booth Machine: $549 total. Add Unlimited Prints: +$200 ($749 total). $200 deposit applied to total.</span>
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "center", width: "100%" }}>
          <WeddingDateCheckForm />
        </div>
      </section>

      {/* FAQs */}
      <section className="faq" id="faq">
        <div>
          <p className="eyebrow">WEDDING FREQUENTLY ASKED QUESTIONS</p>
          <h2>
            Everything You Need <em>To Know.</em>
          </h2>
        </div>
        <div>
          {weddingFaqs.map((f, i) => (
            <details key={f[0]} open={i === 0}>
              <summary>
                {f[0]}
                <span>+</span>
              </summary>
              <p>{f[1]}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="brand">
          <span>DEMM</span>
          <small>WEDDING PHOTO BOOTHS • ATLANTA</small>
        </div>
        <p>
          More than pictures. We bring the energy, elegance, and memory-making experience to Atlanta weddings.
        </p>
        <div>
          <a href="/">Home</a>
          <a href="/corporate-events">Corporate Events</a>
          <a href="/celebrations">Birthday Parties</a>
          <a href="#faq">FAQ</a>
          <a href="/lead-capture">Lead Capture</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
        <small>© 2026 DEMM Photo Booths Atlanta. All rights reserved. • Wedding Photo Booth Rental Atlanta</small>
      </footer>
      <a className="mobile-cta" href="#quote">
        CHECK YOUR WEDDING DATE
      </a>
    </main>
  );
}
