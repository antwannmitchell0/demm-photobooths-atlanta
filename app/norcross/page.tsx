import type { Metadata } from "next";
import AIEventConcierge from "../components/AIEventConcierge";
import GoogleReviewsTicker from "../components/GoogleReviewsTicker";

export const metadata: Metadata = {
  title: "Photo Booth Rental Norcross GA | DEMM Photo Booths",
  description:
    "DEMM Photo Booths brings luxury mirror photo booth rentals to Norcross, GA. Perfect for weddings, quinceañeras, corporate events & birthdays. Serving all of Gwinnett County.",
  keywords: [
    "photo booth rental Norcross GA",
    "Norcross photo booth",
    "mirror photo booth Norcross",
    "photo booth Gwinnett County",
    "quinceañera photo booth Norcross",
  ],
};

const norcrossFaqs = [
  [
    "Does DEMM Photo Booths serve Norcross, GA events?",
    "Yes, Norcross is one of our primary service areas in Gwinnett County! We frequently bring our luxury magic mirror photo booths to events throughout Norcross and the surrounding communities.",
  ],
  [
    "What kinds of events do you serve in the Norcross area?",
    "We cater to all types of celebrations in Norcross, including elegant weddings in the Historic District, vibrant quinceañeras, corporate events along Buford Highway, birthdays, and community gatherings.",
  ],
  [
    "Do you offer bilingual service for Spanish-speaking clients in Norcross?",
    "Absolutely. We understand the rich multicultural makeup of Norcross. We provide bilingual (English and Spanish) attendants to ensure seamless communication and a welcoming experience for all your guests.",
  ],
  [
    "How early do I need to book for a Norcross event?",
    "To guarantee availability for your date, especially during peak wedding and holiday seasons, we recommend reserving your photo booth 3 to 6 months in advance.",
  ],
  [
    "What are some popular event venues in Norcross that you've worked with?",
    "We serve venues all across the city, from historic buildings in the Norcross Wedding District to spacious banquet halls and hotels along the Jimmy Carter Blvd and Buford Highway corridors, as well as outdoor spaces like Norcross Community Park.",
  ],
];

export default function NorcrossPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Luxury Mirror Photo Booth Rental Norcross GA",
    "provider": {
      "@type": "LocalBusiness",
      "name": "DEMM Photo Booths Atlanta",
      "telephone": "+1-813-214-8098",
      "url": "https://www.demmphotobooths.com",
    },
    "areaServed": "Norcross, GA, Gwinnett County, Metro Atlanta",
    "description": "DEMM Photo Booths brings luxury mirror photo booth rentals to Norcross, GA. Perfect for weddings, quinceañeras, corporate events & birthdays. Serving all of Gwinnett County.",
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
          <small>PHOTO BOOTHS • NORCROSS, GA</small>
        </a>
        <nav aria-label="Norcross navigation">
          <a href="/">Home</a>
          <a href="#experience">The Experience</a>
          <a href="/weddings">Weddings</a>
          <a href="/quinceaneras">Quinceañeras</a>
          <a href="https://www.welcome2atlantaevents.com/find" target="_blank" rel="noopener noreferrer">
            Find My Photos
          </a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="button small" href="#quote">
          Check Availability
        </a>
      </header>

      {/* Hero */}
      <section className="hero" id="top">
        <div className="orb one" />
        <div className="orb two" />
        <div className="hero-inner">
          <p className="eyebrow">PREMIUM EVENT ENTERTAINMENT</p>
          <h1>
            Luxury Mirror Photo Booth Rental in <em>Norcross, Georgia</em>
          </h1>
          <p className="lead">
            Elevate your next event in Norcross with our floor-to-ceiling magic mirror photo booths. Perfect for multicultural celebrations, weddings, quinceañeras, and corporate events across Gwinnett County.
          </p>
          <div className="actions">
            <a className="button" href="#quote">
              Get a Quote for Your Event
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
            <span>Serving Historic Norcross</span>
            <span>Bilingual English/Spanish Support</span>
            <span>Premium Print Overlays</span>
            <span>Engaging Local Attendants</span>
          </div>
        </div>
        <div className="hero-card" aria-hidden="true">
          <div className="flash">✦</div>
          <div
            className="photo"
            style={{
              backgroundImage: "url('/images/norcross-event.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#222" // Fallback
            }}
          />
          <p>
            NORCROSS EVENTS.<br />
            <b>BEAUTIFULLY CAPTURED.</b>
          </p>
        </div>
      </section>

      {/* Social Proof */}
      <GoogleReviewsTicker />

      <section className="proof">
        <span>5.0 Star Rated Photo Booth Rentals</span>
        <span>Loved by the Norcross Community</span>
        <span>Trusted at Gwinnett County Venues</span>
      </section>

      {/* Split Experience */}
      <section className="section split" id="experience">
        <div>
          <p className="eyebrow">THE NORCROSS EXPERIENCE</p>
          <h2>
            Celebrating Diversity in <em>Gwinnett County.</em>
          </h2>
        </div>
        <div>
          <p className="large">
            Norcross is known for its vibrant multicultural community and beautiful event venues. We bring a high-end, engaging photo booth experience that bridges cultures and creates lasting memories for everyone.
          </p>
          <ul className="checks">
            <li>Perfect for the Norcross Wedding District's historic charm</li>
            <li>Bilingual staff ready to serve the diverse Latin & Hispanic communities</li>
            <li>Ideal for large celebrations along Jimmy Carter Blvd & Buford Highway</li>
            <li>Studio-quality lighting for flawless photos in any indoor or outdoor venue</li>
            <li>Instant digital sharing for guests to post instantly</li>
            <li>Custom print designs that match your event's unique theme</li>
          </ul>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="area">
        <p className="eyebrow">YOUR LOCAL EVENT PARTNER</p>
        <h2>
          From Historic Downtown to <em>Community Parks.</em>
        </h2>
        <p>
          Whether you're hosting an intimate gathering near Norcross Community Park, a grand wedding in the historic old town district, or a corporate retreat at one of the area's premier hotels, our team is equipped to provide flawless service tailored to the Norcross vibe.
        </p>
      </section>

      {/* Interactive AI Concierge Quote Form */}
      <section className="quote" id="quote">
        <div className="quote-copy">
          <p className="eyebrow">PLAN YOUR NORCROSS EVENT</p>
          <h2>
            Check Availability for Your <em>Special Date.</em>
          </h2>
          <p className="large">
            Tell us about your upcoming event in Norcross, GA to receive a custom quote and confirm our availability.
          </p>
          <div className="promise">
            <b>Tailored for Your Celebration.</b>
            <span>We customize our services to match the scale, theme, and culture of your event.</span>
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "center", width: "100%" }}>
          <AIEventConcierge />
        </div>
      </section>

      {/* FAQs */}
      <section className="faq" id="faq">
        <div>
          <p className="eyebrow">NORCROSS FREQUENTLY ASKED QUESTIONS</p>
          <h2>
            Everything You Need <em>To Know.</em>
          </h2>
        </div>
        <div>
          {norcrossFaqs.map((f, i) => (
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
          <small>PHOTO BOOTHS • NORCROSS, GA</small>
        </div>
        <p>
          Capturing joy in Norcross. We provide the finest mirror photo booth rentals for weddings, parties, and corporate events across Gwinnett County.
        </p>
        <div>
          <a href="/">Home</a>
          <a href="/weddings">Weddings</a>
          <a href="/quinceaneras">Quinceañeras</a>
          <a href="#faq">FAQ</a>
        </div>
        <small>© 2026 DEMM Photo Booths Atlanta. All rights reserved. • Photo Booth Rental Norcross GA</small>
      </footer>
      <a className="mobile-cta" href="#quote">
        Get a Quote
      </a>
    </main>
  );
}
