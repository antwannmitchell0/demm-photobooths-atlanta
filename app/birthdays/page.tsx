import type { Metadata } from "next";
import AIEventConcierge from "../components/AIEventConcierge";
import GoogleReviewsTicker from "../components/GoogleReviewsTicker";

export const metadata: Metadata = {
  title: "Birthday Party & Private Event Photo Booth Rental Atlanta | DEMM Photo Booths",
  description:
    "Make your birthday party or private celebration epic! High-energy mirror photo booth rentals with studio lighting, fun prop packages & instant phone sharing across Metro Atlanta.",
  keywords: [
    "Birthday Party Photo Booth Rental Atlanta",
    "30th Birthday Photo Booth Atlanta",
    "40th 50th Birthday Photo Booth Atlanta",
    "Private Party Photo Booth Metro Atlanta",
    "Quinceanera Sweet 16 Photo Booth Atlanta",
  ],
};

const birthdayFaqs = [
  [
    "What birthday milestones do you specialize in?",
    "We love celebrating all milestones! 30th, 40th, 50th, 60th birthdays, Sweet 16s, Quinceañeras, graduation parties, anniversaries, and adult private birthday bashes.",
  ],
  [
    "What kind of props do you bring for birthday parties?",
    "Our prop packages are high-energy, clean, and stylish—including fun sign props, oversized glasses, hats, boas, and party themes tailored to your birthday vision.",
  ],
  [
    "How do guests get their photos and videos?",
    "Guests can immediately text their photos, GIFs, and boomerangs to their smartphones right from the Magic Mirror touchscreen, plus receive instant printouts if prints are included in your package.",
  ],
  [
    "Can the print design say Happy Birthday with my name and age?",
    "Yes! Our designer creates a custom overlay graphic with your name, date, age (e.g., 'Cheers to 40 Years of Jessica!'), and theme colors.",
  ],
  [
    "How much space do we need at our venue or home?",
    "Our Mirror Booth setup needs a standard 8x8 foot area and a standard power outlet. We set up smoothly in event halls, restaurants, backyards, or private residences.",
  ],
];

export default function BirthdaysPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Birthday Party & Private Event Photo Booth Rental Atlanta",
    "provider": {
      "@type": "LocalBusiness",
      "name": "DEMM Photo Booths Atlanta",
      "telephone": "+1-813-214-8098",
      "url": "https://www.demmphotobooths.com",
    },
    "areaServed": "Atlanta, Buckhead, Midtown, Alpharetta, Sandy Springs, Decatur, Smyrna, Metro Atlanta",
    "description": "High-energy magic mirror photo booth rentals for birthday parties, anniversaries, and private celebrations across Atlanta.",
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
          <small>BIRTHDAYS & PARTIES • ATLANTA</small>
        </a>
        <nav aria-label="Party navigation">
          <a href="/">Home</a>
          <a href="/weddings">Weddings</a>
          <a href="/event-planners">Event Planners</a>
          <a href="https://www.welcome2atlantaevents.com/find" target="_blank" rel="noopener noreferrer">
            Find My Photos
          </a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="button small" href="#quote">
          Check Party Date
        </a>
      </header>

      {/* Hero */}
      <section className="hero" id="top">
        <div className="orb one" />
        <div className="orb two" />
        <div className="hero-inner">
          <p className="eyebrow">HIGH-ENERGY BIRTHDAY & PRIVATE EVENTS</p>
          <h1>
            Turn Your Birthday Party Into an <em>Epic Celebration.</em>
          </h1>
          <p className="lead">
            High-definition studio photo capture, interactive Touchscreen Magic Mirror, fun props, instant phone sharing, and a hype host who gets everyone involved.
          </p>
          <div className="actions">
            <a className="button" href="#quote">
              Check Date & Get Custom Party Quote
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
              Get Guest Photos ↗
            </a>
          </div>
          <div className="trust">
            <span>Instant SMS & QR Sharing</span>
            <span>Custom Birthday Template</span>
            <span>Vibrant Prop Selection</span>
            <span>Hype Host Included</span>
          </div>
        </div>
        <div className="hero-card" aria-hidden="true">
          <div className="flash">✦</div>
          <div
            className="photo"
            style={{
              backgroundImage: "url('/images/guest-fun.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <p>
            YOUR BIRTHDAY BASH.<br />
            <b>PURE UNMATCHED ENERGY.</b>
          </p>
        </div>
      </section>

      {/* Social Proof */}
      <GoogleReviewsTicker />

      <section className="proof">
        <span>5-Star Hype Host Experience</span>
        <span>Instant Phone Photo Delivery</span>
        <span>Serving All Atlanta Neighborhoods</span>
      </section>

      {/* Split Experience */}
      <section className="section split" id="experience">
        <div>
          <p className="eyebrow">THE PARTY EXPERIENCE</p>
          <h2>
            The Highlight of Your <em>Birthday Bash.</em>
          </h2>
        </div>
        <div>
          <p className="large">
            Don't let your birthday party pass by without capturing the real reactions, crazy poses, and hilarious group shots of your favorite people together.
          </p>
          <ul className="checks">
            <li>Interactive touchscreen mirror with fun animations</li><li>Instant text message & email photo sharing to smartphones</li><li>Custom print overlay with birthday host's name & theme</li><li>Curated high-energy prop collection</li><li>Instant lab-quality physical photo prints for guests</li><li>Friendly on-site host who keeps the line moving and energy high</li>
          </ul>
        </div>
      </section>

      {/* Host Highlight */}
      <section className="host">
        <div
          className="host-visual"
          style={{
            backgroundImage: "url('/images/atl-night-energy.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span>UNMATCHED PARTY VIBE</span>
        </div>
        <div>
          <p className="eyebrow">THE DEMM HYPE FACTOR</p>
          <h2>
            We Bring the Energy. <em>Your Guests Have a Blast.</em>
          </h2>
          <p className="large">
            Our hosts don't just sit behind a table—we cheer on your guests, suggest fun group poses, and make sure everyone leaves feeling like a VIP.
          </p>
          <p>From 21st birthdays to 50th galas, we keep your party buzzing.</p>
          <a className="button" href="#quote">
            Check Your Party Date
          </a>
        </div>
      </section>

      {/* Process */}
      <section className="process" id="process">
        <div className="section-title">
          <p className="eyebrow">SIMPLE 4-STEP BOOKING</p>
          <h2>
            Get Ready To Party in <em>4 Steps.</em>
          </h2>
        </div>
        <div className="steps">
          {[
            ["01", "Tell Us About Your Party", "Share your event date, theme, location, and guest count."],
            ["02", "Get Custom Party Quote", "We confirm availability and recommend the perfect package."],
            ["03", "Approve Your Design", "Our graphic team designs your custom birthday print overlay."],
            ["04", "Party & Share Instant Photos", "We handle set up, hype your guests up, and deliver memories!"],
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
        <p className="eyebrow">ATLANTA PARTY VENUES & HOMES</p>
        <h2>
          Serving Birthday Parties Across <em>Metro Atlanta.</em>
        </h2>
        <p>
          Buckhead • Midtown • Downtown • Sandy Springs • Alpharetta • Smyrna • Marietta • College Park • East Point • Decatur • and surrounding private venues & residences
        </p>
      </section>

      {/* Interactive AI Concierge Quote Form */}
      <section className="quote" id="quote">
        <div className="quote-copy">
          <p className="eyebrow">RESERVE YOUR DATE</p>
          <h2>
            Check Availability for Your <em>Birthday Party.</em>
          </h2>
          <p className="large">
            Share your event date and details to receive your custom party recommendation.
          </p>
          <div className="promise">
            <b>Instant Consultation.</b>
            <span>We confirm availability quickly without pressure or spam.</span>
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "center", width: "100%" }}>
          <AIEventConcierge />
        </div>
      </section>

      {/* FAQs */}
      <section className="faq" id="faq">
        <div>
          <p className="eyebrow">BIRTHDAY PARTY FAQS</p>
          <h2>
            Frequently Asked <em>Questions.</em>
          </h2>
        </div>
        <div>
          {birthdayFaqs.map((f, i) => (
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
          <small>BIRTHDAYS & PARTIES • ATLANTA</small>
        </div>
        <p>
          High-energy photo booth rental experiences for birthdays, anniversaries, and private celebrations in Atlanta.
        </p>
        <div>
          <a href="/">Home</a>
          <a href="/weddings">Weddings</a>
          <a href="/event-planners">Event Planners</a>
          <a href="#faq">FAQ</a>
        </div>
        <small>© 2026 DEMM Photo Booths Atlanta. All rights reserved. • Birthday Party Photo Booth Rental Atlanta</small>
      </footer>
      <a className="mobile-cta" href="#quote">
        Check Party Date
      </a>
    </main>
  );
}
