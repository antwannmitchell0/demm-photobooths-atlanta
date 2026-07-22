import type { Metadata } from "next";
import AIEventConcierge from "../components/AIEventConcierge";
import GoogleReviewsTicker from "../components/GoogleReviewsTicker";

export const metadata: Metadata = {
  title: "Luxury Wedding Photo Booth Rental Atlanta | DEMM Photo Booths",
  description:
    "Make your Atlanta wedding reception unforgettable. Premium magic mirror photo booth rentals with studio lighting, custom prints, guestbook options & instant digital sharing across Metro Atlanta.",
  keywords: [
    "Wedding Photo Booth Rental Atlanta",
    "Luxury Wedding Photo Booth Atlanta",
    "Atlanta Wedding Reception Entertainment",
    "Mirror Photo Booth Wedding Atlanta",
    "Buckhead Wedding Photo Booth",
  ],
};

const weddingFaqs = [
  [
    "Why choose DEMM Photo Booths for our Atlanta wedding?",
    "Your wedding day is one-of-a-kind. We provide a luxury floor-to-ceiling mirror booth, professional DSLR photo quality, studio lighting, custom branded print overlays matching your wedding aesthetic, and a dedicated host who engages your guests so you can relax and celebrate.",
  ],
  [
    "Can we get a physical memory guestbook for our wedding?",
    "Yes! We offer a premium wedding memory album. Our attendant prints an extra photo strip from every session, places it in your keepsake guestbook, and assists guests with leaving personal handwritten notes for you to take home at the end of the night.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Luxury Wedding Photo Booth Rental Atlanta",
    "provider": {
      "@type": "LocalBusiness",
      "name": "DEMM Photo Booths Atlanta",
      "telephone": "+1-813-214-8098",
      "url": "https://www.demmphotobooths.com",
    },
    "areaServed": "Atlanta, Buckhead, Midtown, Alpharetta, Sandy Springs, Decatur, Metro Atlanta",
    "description": "Floor-to-ceiling luxury DSLR magic mirror photo booth rentals for wedding receptions across Atlanta.",
  };

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
          <a href="/event-planners">Event Planners</a>
          <a href="/birthdays">Parties</a>
          <a href="https://www.welcome2atlantaevents.com/find" target="_blank" rel="noopener noreferrer">
            Find My Photos
          </a>
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
            Your Wedding Reception Deserves <em>Unforgettable Energy.</em>
          </h1>
          <p className="lead">
            Flattering studio lighting, custom monogrammed prints, physical keepsake guestbooks, and an attendant who keeps your guests smiling—all handled seamlessly.
          </p>
          <div className="actions">
            <a className="button" href="#quote">
              Check Date & Get Custom Wedding Quote
            </a>
            <a
              className="button secondary"
              href="https://www.welcome2atlantaevents.com/find"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#fff",
                marginLeft: "12px",
              }}
            >
              Access Event Gallery ↗
            </a>
          </div>
          <div className="trust">
            <span>DSLR Studio Quality</span>
            <span>Custom Monogram Overlay</span>
            <span>Keepsake Memory Guestbook</span>
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
        <span>Trusted By Atlanta Brides & Planners</span>
        <span>Serving All Metro Atlanta Venues</span>
      </section>

      {/* Split Experience */}
      <section className="section split" id="experience">
        <div>
          <p className="eyebrow">THE WEDDING EXPERIENCE</p>
          <h2>
            More Than Photos. <em>A Keepsake Experience.</em>
          </h2>
        </div>
        <div>
          <p className="large">
            From your cocktail hour to the final dance, DEMM creates an interactive experience that gets your guests off their feet, laughing together, and taking home a physical print they'll frame on their fridge forever.
          </p>
          <ul className="checks">
            <li>Floor-to-ceiling interactive Magic Mirror design</li><li>Studio-grade DSLR photos with flattering beauty lighting</li><li>Customized print layout matching your wedding invitations</li><li>Instant SMS/Email photo sharing for your guests</li><li>Handcrafted wedding scrapbook guestbook option</li><li>Dressed-for-the-occasion professional on-site attendant</li>
          </ul>
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

      {/* Process */}
      <section className="process" id="process">
        <div className="section-title">
          <p className="eyebrow">4 EASY STEPS</p>
          <h2>
            Reserving Your Wedding Booth <em>Made Simple.</em>
          </h2>
        </div>
        <div className="steps">
          {[
            ["01", "Share Your Wedding Details", "Tell us your wedding date, venue, and estimated guest count."],
            ["02", "Receive Custom Recommendation", "We confirm availability and present tailored packages for your day."],
            ["03", "Design Your Print Template", "Our designer creates a custom overlay matching your wedding monogram."],
            ["04", "Celebrate & Relive Memories", "Enjoy your reception while we capture every moment for your guestbook."],
          ].map((x) => (
            <article key={x[0]}>
              <b>{x[0]}</b>
              <h3>{x[1]}</h3>
              <p>{x[2]}</p>
            </article>
          ))}
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

      {/* Interactive AI Concierge Quote Form */}
      <section className="quote" id="quote">
        <div className="quote-copy">
          <p className="eyebrow">PLAN YOUR RECEPTION</p>
          <h2>
            Check Availability for Your <em>Wedding Date.</em>
          </h2>
          <p className="large">
            Answer a few quick questions to receive a custom wedding proposal and date confirmation.
          </p>
          <div className="promise">
            <b>No Public Pricing Lists.</b>
            <span>Every wedding package is custom-tailored to your venue and reception timeline.</span>
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "center", width: "100%" }}>
          <AIEventConcierge />
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
          <a href="/event-planners">Event Planners</a>
          <a href="/birthdays">Birthday Parties</a>
          <a href="#faq">FAQ</a>
        </div>
        <small>© 2026 DEMM Photo Booths Atlanta. All rights reserved. • Wedding Photo Booth Rental Atlanta</small>
      </footer>
      <a className="mobile-cta" href="#quote">
        Check My Wedding Date
      </a>
    </main>
  );
}
