import type { Metadata } from "next";
import AIEventConcierge from "../components/AIEventConcierge";
import GoogleReviewsTicker from "../components/GoogleReviewsTicker";

export const metadata: Metadata = {
  title: "Photo Booth Rental Marietta GA | DEMM Photo Booths",
  description:
    "DEMM Photo Booths delivers luxury mirror photo booth rentals in Marietta, GA. Perfect for Cobb Galleria events, weddings & corporate parties. Serving all of Cobb County.",
  keywords: [
    "photo booth rental Marietta GA",
    "Marietta photo booth",
    "mirror photo booth Marietta",
    "Cobb County photo booth rental",
    "wedding photo booth Marietta",
  ],
};

const mariettaFaqs = [
  [
    "Does DEMM Photo Booths serve events at the Cobb Galleria Centre in Marietta?",
    "Yes, absolutely. We frequently provide luxury mirror photo booths for major conventions, trade shows, and large corporate events at the Cobb Galleria Centre. We have the experience and insurance (COI) required for large-scale venues.",
  ],
  [
    "What types of events do you cover in Marietta and Cobb County?",
    "We cover a wide range of events! From corporate events at major venues, to Southern weddings at places like Summerour or The Venue at Windemere, to military galas near Dobbins Air Reserve Base, and private community parties.",
  ],
  [
    "Can you set up at outdoor events on Marietta Square?",
    "Yes, we can provide photo booth services for outdoor events on historic Marietta Square, provided there is a covered, weather-protected area with a solid, level surface and access to a dedicated power outlet.",
  ],
  [
    "Do you require a travel fee for events in Marietta?",
    "Marietta is within our primary service area. We serve all of Cobb County, including Marietta, Smyrna, Kennesaw, and Acworth, typically without any additional travel fees.",
  ],
  [
    "What Marietta area venues have you worked with before?",
    "We have experience working with premier Marietta venues, including the Cobb Galleria Centre, The Venue at Windemere, and various boutique event spaces around historic Marietta Square. We coordinate directly with your venue to ensure a seamless setup.",
  ],
];

export default function MariettaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Luxury Mirror Photo Booth Rental in Marietta, GA",
    provider: {
      "@type": "LocalBusiness",
      name: "DEMM Photo Booths Atlanta",
      telephone: "+1-813-214-8098",
      url: "https://www.demmphotobooths.com",
    },
    areaServed: "Marietta, GA, Cobb County, Smyrna, Kennesaw, Acworth, Metro Atlanta",
    description:
      "DEMM Photo Booths delivers luxury mirror photo booth rentals in Marietta, GA. Perfect for Cobb Galleria events, weddings & corporate parties.",
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
          <small>PHOTO BOOTHS • MARIETTA</small>
        </a>
        <nav aria-label="Main navigation">
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
          Check Availability in Marietta
        </a>
      </header>

      {/* Hero */}
      <section className="hero" id="top">
        <div className="orb one" />
        <div className="orb two" />
        <div className="hero-inner">
          <p className="eyebrow">PREMIER ENTERTAINMENT IN COBB COUNTY</p>
          <h1>
            Luxury Mirror Photo Booth Rental in <em>Marietta, GA.</em>
          </h1>
          <p className="lead">
            Whether it's a corporate convention at the Cobb Galleria Centre, a Southern wedding at The Venue at Windemere, or a gala on Marietta Square, our magic mirror booth delivers a premium experience for every guest.
          </p>
          <div className="actions">
            <a className="button" href="#quote">
              Check Availability in Marietta
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
            <span>Custom Branding</span>
            <span>Fully Insured (COI)</span>
            <span>Professional Host</span>
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
            YOUR EVENT.<br />
            <b>BEAUTIFULLY CAPTURED.</b>
          </p>
        </div>
      </section>

      {/* Social Proof */}
      <GoogleReviewsTicker />

      <section className="proof">
        <span>5.0 Star Rated Photo Entertainment</span>
        <span>Trusted By Cobb County Venues & Planners</span>
        <span>Serving All of Marietta & Surrounding Areas</span>
      </section>

      {/* Split Experience */}
      <section className="section split" id="experience">
        <div>
          <p className="eyebrow">THE MARIETTA EXPERIENCE</p>
          <h2>
            More Than Photos. <em>A Premier Attraction.</em>
          </h2>
        </div>
        <div>
          <p className="large">
            From large corporate events to intimate weddings, DEMM creates an interactive experience that gets your guests off their feet, laughing together, and taking home a high-quality physical print.
          </p>
          <ul className="checks">
            <li>Floor-to-ceiling interactive Magic Mirror design</li>
            <li>Studio-grade DSLR photos with flattering beauty lighting</li>
            <li>Customized print layouts matching your event theme</li>
            <li>Instant SMS/Email photo sharing for your guests</li>
            <li>Fully insured (COI provided) for venues like Cobb Galleria</li>
            <li>Dressed-for-the-occasion professional on-site attendant</li>
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
          <p className="eyebrow">EVENT DAY PEACE OF MIND</p>
          <h2>
            We Handle the Details. <em>You Enjoy Your Event.</em>
          </h2>
          <p className="large">
            We work directly with your event planner, venue manager, and vendors to ensure setup happens flawlessly and guest flow remains smooth all evening.
          </p>
          <p>Zero stress, zero technical glitches—just pure celebration.</p>
          <a className="button" href="#quote">
            Reserve Your Marietta Date
          </a>
        </div>
      </section>

      {/* Process */}
      <section className="process" id="process">
        <div className="section-title">
          <p className="eyebrow">4 EASY STEPS</p>
          <h2>
            Reserving Your Photo Booth <em>Made Simple.</em>
          </h2>
        </div>
        <div className="steps">
          {[
            ["01", "Share Your Event Details", "Tell us your event date, venue in Marietta, and estimated guest count."],
            ["02", "Receive Custom Recommendation", "We confirm availability and present tailored packages for your event."],
            ["03", "Design Your Print Template", "Our designer creates a custom overlay matching your branding or theme."],
            ["04", "Celebrate & Relive Memories", "Enjoy your event while we capture every unforgettable moment."],
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
        <p className="eyebrow">MARIETTA & BEYOND</p>
        <h2>
          Serving Events Across <em>Cobb County.</em>
        </h2>
        <p>
          Marietta • Smyrna • Kennesaw • Acworth • Vinings • Metro Atlanta
        </p>
      </section>

      {/* Interactive AI Concierge Quote Form */}
      <section className="quote" id="quote">
        <div className="quote-copy">
          <p className="eyebrow">PLAN YOUR EVENT</p>
          <h2>
            Check Availability in <em>Marietta.</em>
          </h2>
          <p className="large">
            Answer a few quick questions to receive a custom proposal and date confirmation.
          </p>
          <div className="promise">
            <b>Custom Quotes Tailored to You.</b>
            <span>Every photo booth package is customized to your specific venue and event needs.</span>
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "center", width: "100%" }}>
          <AIEventConcierge />
        </div>
      </section>

      {/* FAQs */}
      <section className="faq" id="faq">
        <div>
          <p className="eyebrow">MARIETTA EVENT FAQs</p>
          <h2>
            Everything You Need <em>To Know.</em>
          </h2>
        </div>
        <div>
          {mariettaFaqs.map((f, i) => (
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
          <small>PHOTO BOOTHS • MARIETTA</small>
        </div>
        <p>
          More than pictures. We bring the energy, elegance, and memory-making experience to Marietta events.
        </p>
        <div>
          <a href="/">Home</a>
          <a href="/event-planners">Event Planners</a>
          <a href="/birthdays">Parties</a>
          <a href="#faq">FAQ</a>
        </div>
        <small>© 2026 DEMM Photo Booths Atlanta. All rights reserved. • Photo Booth Rental Marietta GA</small>
      </footer>
      <a className="mobile-cta" href="#quote">
        Check Availability in Marietta
      </a>
    </main>
  );
}
