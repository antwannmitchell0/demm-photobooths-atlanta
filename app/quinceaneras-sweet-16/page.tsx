import type { Metadata } from "next";
import AIEventConcierge from "../components/AIEventConcierge";
import GoogleReviewsTicker from "../components/GoogleReviewsTicker";

export const metadata: Metadata = {
  title: "Quinceañera & Sweet 16 Photo Booth Rental Atlanta | DEMM",
  description:
    "Luxury mirror photo booth rentals for quinceañeras and sweet 16 celebrations in Metro Atlanta. Bilingual attendant available. Serving Norcross, Duluth, Gwinnett County & beyond.",
  keywords: [
    "quinceañera photo booth rental Atlanta",
    "sweet 16 photo booth Atlanta",
    "quinceanera photo booth Norcross",
    "quinceañera photo booth Gwinnett County",
    "sweet 15 photo booth Atlanta",
  ],
};

const quinceFaqs = [
  [
    "Do you offer bilingual (Spanish/English) photo booth attendants for quinceañeras?",
    "Yes, absolutely. We know how important family is, and we offer bilingual attendants who speak both English and Spanish seamlessly so every guest feels welcome and comfortable using the photo booth.",
  ],
  [
    "Can we customize the photo prints with my daughter's name and quinceañera date?",
    "Yes! We design a custom photo print overlay tailored to your daughter's specific theme, colors, name, and quinceañera date, turning every photo into a personalized keepsake.",
  ],
  [
    "What areas in Metro Atlanta do you serve for quinceañeras?",
    "We serve the entire Metro Atlanta area, specializing in events throughout Gwinnett County, including Norcross, Duluth, Lawrenceville, Buford, and nearby locations like the Gas South Arena district.",
  ],
  [
    "How far in advance should we book for a quinceañera?",
    "Quinceañeras are often planned far in advance. We recommend booking your luxury mirror photo booth 3 to 6 months prior to the big day to ensure availability for your desired date.",
  ],
  [
    "What is included in a quinceañera photo booth package?",
    "Our quinceañera packages typically include the luxury mirror booth, a bilingual attendant, custom print templates, unlimited digital sharing (SMS/Email), premium props, and optional keepsake albums fit for a princess.",
  ],
];

export default function QuinceanerasPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Luxury Quinceañera Photo Booth Rental Atlanta",
    "provider": {
      "@type": "LocalBusiness",
      "name": "DEMM Photo Booths Atlanta",
      "telephone": "+1-813-214-8098",
      "url": "https://www.demmphotobooths.com",
    },
    "areaServed": "Norcross, Duluth, Lawrenceville, Buford, Gwinnett County, Metro Atlanta, Georgia",
    "description": "Make your quinceañera unforgettable with a luxury mirror photo booth in Atlanta. Serving Norcross, Duluth, Lawrenceville & all of Metro Atlanta. Custom prints, bilingual attendant.",
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
          <small>QUINCEAÑERA PHOTO BOOTHS • ATLANTA</small>
        </a>
        <nav aria-label="Quinceañera navigation">
          <a href="/">Home</a>
          <a href="#experience">The Experience</a>
          <a href="/event-planners">Event Planners</a>
          <a href="/weddings">Weddings</a>
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
          <p className="eyebrow">CELEBRATING 15 YEARS IN STYLE</p>
          <h1>
            Luxury Quinceañera Photo Booth Rental in <em>Atlanta, GA</em>
          </h1>
          <p className="lead">
            Give your daughter the princess experience she deserves. Our luxury mirror photo booths bring interactive fun, beautiful studio lighting, and bilingual attendants to sweet 15 celebrations across Gwinnett County and Metro Atlanta.
          </p>
          <div className="actions">
            <a className="button" href="#quote">
              Check Availability & Get a Quote
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
            <span>Bilingual English/Spanish Attendants</span>
            <span>Custom Themed Overlays</span>
            <span>DSLR Studio Quality</span>
            <span>Elegant Setup</span>
          </div>
        </div>
        <div className="hero-card" aria-hidden="true">
          <div className="flash">✦</div>
          <div
            className="photo"
            style={{
              backgroundImage: "url('/images/quinceanera-moment.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#222" // Fallback
            }}
          />
          <p>
            HER SPECIAL DAY.<br />
            <b>BEAUTIFULLY CAPTURED.</b>
          </p>
        </div>
      </section>

      {/* Social Proof */}
      <GoogleReviewsTicker />

      <section className="proof">
        <span>5.0 Star Rated Event Entertainment</span>
        <span>Trusted by Families in Norcross & Duluth</span>
        <span>Serving Premiere Gwinnett Venues</span>
      </section>

      {/* Spanish Welcome */}
      <section className="section split" style={{ backgroundColor: "rgba(255,255,255,0.03)", padding: "4rem 2rem", borderRadius: "24px", margin: "0 2rem" }}>
        <div>
          <p className="eyebrow">¡BIENVENIDOS!</p>
          <h2>
            ¡Celebra con <em>Estilo!</em>
          </h2>
        </div>
        <div>
          <p className="large" style={{ marginBottom: "1rem" }}>
            Sabemos lo importante que es la celebración de los 15 años para nuestra comunidad hispana. Nuestro equipo ofrece un servicio de primer nivel con asistentes bilingües, listos para hacer de tu fiesta una experiencia inolvidable.
          </p>
          <p>
            Desde Norcross hasta Duluth, estamos orgullosos de ser parte de sus momentos más especiales. We warmly welcome families looking for a magical, bilingual photo booth experience that honors tradition and celebrates this beautiful milestone.
          </p>
        </div>
      </section>

      {/* Split Experience */}
      <section className="section split" id="experience">
        <div>
          <p className="eyebrow">THE QUINCEAÑERA EXPERIENCE</p>
          <h2>
            A Princess-Themed <em>Keepsake Experience.</em>
          </h2>
        </div>
        <div>
          <p className="large">
            A quinceañera is a once-in-a-lifetime milestone. We provide a glamorous, interactive mirror booth that guests of all ages will love, creating physical prints and digital memories to cherish forever.
          </p>
          <ul className="checks">
            <li>Bilingual attendants for seamless Spanish and English interactions</li>
            <li>Custom print templates featuring the birthday girl's name and theme</li>
            <li>Floor-to-ceiling luxury interactive mirror booth</li>
            <li>Flattering studio lighting fit for elegant ballgowns</li>
            <li>Fun, premium props tailored to your specific event theme</li>
            <li>Instant SMS/Email sharing to keep the party connected</li>
          </ul>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="area">
        <p className="eyebrow">SERVING GWINNETT COUNTY & BEYOND</p>
        <h2>
          From Elegant Ballrooms to <em>Spacious Banquet Halls.</em>
        </h2>
        <p>
          We bring our luxury booths to event halls, hotel ballrooms, and banquet spaces throughout Gwinnett County and North Atlanta. Whether you're celebrating near the Gas South Arena in Duluth, in a vibrant Norcross event space, or a grand hall in Lawrenceville, DEMM Photo Booths is there to capture the magic.
        </p>
      </section>

      {/* Interactive AI Concierge Quote Form */}
      <section className="quote" id="quote">
        <div className="quote-copy">
          <p className="eyebrow">PLAN HER SPECIAL DAY</p>
          <h2>
            Check Availability for Your <em>Quinceañera.</em>
          </h2>
          <p className="large">
            Tell us about your event to receive a custom quote and verify our availability for your date.
          </p>
          <div className="promise">
            <b>Dedicated Bilingual Support.</b>
            <span>Every package is designed to fit your venue, theme, and timeline perfectly.</span>
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "center", width: "100%" }}>
          <AIEventConcierge />
        </div>
      </section>

      {/* FAQs */}
      <section className="faq" id="faq">
        <div>
          <p className="eyebrow">QUINCEAÑERA FREQUENTLY ASKED QUESTIONS</p>
          <h2>
            Everything You Need <em>To Know.</em>
          </h2>
        </div>
        <div>
          {quinceFaqs.map((f, i) => (
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
          <small>QUINCEAÑERA PHOTO BOOTHS • ATLANTA</small>
        </div>
        <p>
          Making quinceañeras magical. We bring elegance, fun, and bilingual service to celebrations across Metro Atlanta.
        </p>
        <div>
          <a href="/">Home</a>
          <a href="/weddings">Weddings</a>
          <a href="/norcross">Norcross Events</a>
          <a href="#faq">FAQ</a>
        </div>
        <small>© 2026 DEMM Photo Booths Atlanta. All rights reserved. • Quinceañera Photo Booth Rental Atlanta</small>
      </footer>
      <a className="mobile-cta" href="#quote">
        Check Availability
      </a>
    </main>
  );
}
