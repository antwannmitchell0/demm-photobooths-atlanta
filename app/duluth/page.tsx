import type { Metadata } from "next";
import AIEventConcierge from "../components/AIEventConcierge";
import GoogleReviewsTicker from "../components/GoogleReviewsTicker";

export const metadata: Metadata = {
  title: "Photo Booth Rental Duluth GA | DEMM Photo Booths",
  description:
    "Luxury mirror photo booth rentals in Duluth, GA. Serving events at Infinite Energy Center, weddings, quinceañeras & corporate parties in Gwinnett County. Book now!",
  keywords: [
    "photo booth rental Duluth GA",
    "Duluth photo booth",
    "mirror photo booth Duluth",
    "photo booth Gwinnett County",
    "quinceañera photo booth Duluth GA",
    "Infinite Energy Center photo booth",
  ],
};

const duluthFaqs = [
  [
    "Can DEMM Photo Booths set up at events at the Infinite Energy Center in Duluth?",
    "Yes, absolutely. Our luxury mirror photo booth is perfectly suited for large-scale events at the Infinite Energy Center. We are experienced in handling complex load-ins and coordinating with venue management to ensure a seamless experience.",
  ],
  [
    "What types of events do you serve in Duluth and Gwinnett County?",
    "We serve a wide variety of events including corporate conferences, large-scale galas, weddings, quinceañeras, and intimate private parties at banquet halls along Pleasant Hill Road and Satellite Blvd.",
  ],
  [
    "Do you serve the diverse community events in Duluth (Korean, Hispanic, multicultural)?",
    "Yes! Duluth has a beautifully diverse community. We proudly serve Korean community celebrations, Latino community events like quinceañeras, and various multicultural weddings, offering custom print overlays to match your specific cultural traditions.",
  ],
  [
    "Is there a minimum event size for Duluth bookings?",
    "No event is too large or too small. Whether you are hosting a massive corporate gala at a major arena or an intimate private party in a local Duluth event space, we deliver the same premium, luxury experience.",
  ],
  [
    "What Duluth-area event venues have you worked with?",
    "We frequently work with venues throughout Gwinnett County, including the Infinite Energy Center and numerous popular banquet halls and event spaces located around Pleasant Hill Road and Satellite Blvd.",
  ],
];

export default function DuluthPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Luxury Mirror Photo Booth Rental in Duluth, GA",
    "provider": {
      "@type": "LocalBusiness",
      "name": "DEMM Photo Booths Atlanta",
      "telephone": "+1-813-214-8098",
      "url": "https://www.demmphotobooths.com/duluth",
    },
    "areaServed": "Duluth, GA, Gwinnett County, Suwanee, Buford, Peachtree Corners, Metro Atlanta",
    "description": "Luxury mirror photo booth rentals in Duluth, GA. Serving events at Infinite Energy Center, weddings, quinceañeras & corporate parties in Gwinnett County.",
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
          <small>PHOTO BOOTHS • DULUTH, GA</small>
        </a>
        <nav aria-label="Duluth navigation">
          <a href="/">Home</a>
          <a href="#experience">The Experience</a>
          <a href="/weddings">Weddings</a>
          <a href="/corporate">Corporate</a>
          <a href="https://www.welcome2atlantaevents.com/find" target="_blank" rel="noopener noreferrer">
            Find My Photos
          </a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="button small" href="#quote">
          Check Availability in Duluth
        </a>
      </header>

      {/* Hero */}
      <section className="hero" id="top">
        <div className="orb one" />
        <div className="orb two" />
        <div className="hero-inner">
          <p className="eyebrow">PREMIUM GWINNETT COUNTY EVENTS</p>
          <h1>
            Luxury Mirror Photo Booth Rental in <em>Duluth, GA.</em>
          </h1>
          <p className="lead">
            From massive corporate galas at the Infinite Energy Center to beautiful weddings and quinceañeras near Pleasant Hill Road, we bring luxury entertainment to Duluth's finest events.
          </p>
          <div className="actions">
            <a className="button" href="#quote">
              Check Availability in Duluth
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
            <span>Custom Event Branding</span>
            <span>Multicultural Event Experts</span>
            <span>Professional On-Site Host</span>
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
            YOUR DULUTH EVENT.<br />
            <b>BEAUTIFULLY CAPTURED.</b>
          </p>
        </div>
      </section>

      {/* Social Proof */}
      <GoogleReviewsTicker />

      <section className="proof">
        <span>5.0 Star Rated Luxury Entertainment</span>
        <span>Trusted by Duluth & Gwinnett Event Planners</span>
        <span>Serving Infinite Energy Center & Local Venues</span>
      </section>

      {/* Split Experience */}
      <section className="section split" id="experience">
        <div>
          <p className="eyebrow">THE DULUTH EXPERIENCE</p>
          <h2>
            Luxury Entertainment for <em>Every Occasion.</em>
          </h2>
        </div>
        <div>
          <p className="large">
            Whether you're hosting a sophisticated corporate conference or a vibrant quinceañera, our luxury mirror photo booth is the perfect addition to elevate your Duluth event.
          </p>
          <ul className="checks">
            <li>Floor-to-ceiling interactive Magic Mirror design</li>
            <li>Studio-grade DSLR photos with flattering beauty lighting</li>
            <li>Customized print layouts matching your theme or brand</li>
            <li>Instant SMS/Email photo sharing for your guests</li>
            <li>Experience with diverse community events</li>
            <li>Dressed-for-the-occasion professional on-site attendant</li>
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="process" id="process">
        <div className="section-title">
          <p className="eyebrow">4 EASY STEPS</p>
          <h2>
            Booking Your Duluth Photo Booth <em>Made Simple.</em>
          </h2>
        </div>
        <div className="steps">
          {[
            ["01", "Share Your Event Details", "Tell us your date, venue (e.g., Infinite Energy Center), and guest count."],
            ["02", "Receive Custom Recommendation", "We confirm availability and present tailored packages for your event."],
            ["03", "Design Your Print Template", "Our designer creates a custom overlay matching your event's theme."],
            ["04", "Celebrate & Connect", "Enjoy your Duluth event while we capture high-quality memories."],
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
        <p className="eyebrow">GWINNETT COUNTY COVERAGE</p>
        <h2>
          Serving Events Across <em>Duluth & Beyond.</em>
        </h2>
        <p>
          Infinite Energy Center • Pleasant Hill Road Venues • Satellite Blvd • Suwanee • Buford • Peachtree Corners • Lawrenceville • Metro Atlanta
        </p>
      </section>

      {/* Interactive AI Concierge Quote Form */}
      <section className="quote" id="quote">
        <div className="quote-copy">
          <p className="eyebrow">PLAN YOUR DULUTH EVENT</p>
          <h2>
            Check Availability in <em>Duluth.</em>
          </h2>
          <p className="large">
            Answer a few quick questions to receive a custom proposal for your Gwinnett County event.
          </p>
          <div className="promise">
            <b>No Public Pricing Lists.</b>
            <span>Every package is custom-tailored to your specific venue and event needs.</span>
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "center", width: "100%" }}>
          <AIEventConcierge />
        </div>
      </section>

      {/* FAQs */}
      <section className="faq" id="faq">
        <div>
          <p className="eyebrow">DULUTH EVENT FAQs</p>
          <h2>
            Everything You Need <em>To Know.</em>
          </h2>
        </div>
        <div>
          {duluthFaqs.map((f, i) => (
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
          <small>PHOTO BOOTHS • DULUTH, GA</small>
        </div>
        <p>
          More than pictures. We bring premium luxury entertainment to Duluth's most memorable events.
        </p>
        <div>
          <a href="/">Home</a>
          <a href="/event-planners">Event Planners</a>
          <a href="/weddings">Weddings</a>
          <a href="#faq">FAQ</a>
        </div>
        <small>© 2026 DEMM Photo Booths Atlanta. All rights reserved. • Photo Booth Rental Duluth GA</small>
      </footer>
      <a className="mobile-cta" href="#quote">
        Check Availability in Duluth
      </a>
    </main>
  );
}
