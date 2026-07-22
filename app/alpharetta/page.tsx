import type { Metadata } from "next";
import AIEventConcierge from "../components/AIEventConcierge";
import GoogleReviewsTicker from "../components/GoogleReviewsTicker";

export const metadata: Metadata = {
  title: "Photo Booth Rental Alpharetta GA | DEMM Photo Booths",
  description:
    "Premium luxury mirror photo booth rentals in Alpharetta, GA. Serving weddings, corporate events & private parties at Avalon, The Gathering Spot & more. Book today!",
  keywords: [
    "photo booth rental Alpharetta GA",
    "Alpharetta photo booth",
    "mirror photo booth Alpharetta",
    "wedding photo booth Alpharetta",
    "corporate event photo booth Alpharetta",
  ],
};

const alpharettaFaqs = [
  [
    "Does DEMM Photo Booths serve Alpharetta corporate events and tech company parties?",
    "Yes, absolutely. We regularly provide luxury mirror photo booths for corporate team-building events, tech launch parties, and holiday galas at venues like Avalon and The Gathering Spot. Our setups are sleek, professional, and perfect for the 'Technology City of the South'.",
  ],
  [
    "Can we get custom branded photo prints with our company logo for an Alpharetta event?",
    "Yes! We offer fully custom print designs. Our graphic designer can seamlessly integrate your company logo, brand colors, and event messaging onto both physical prints and digital overlays.",
  ],
  [
    "What is your COI/insurance coverage for Alpharetta venues?",
    "We carry a comprehensive general liability insurance policy, which is required by many high-end Alpharetta venues and corporate campuses. We can easily provide a Certificate of Insurance (COI) listing your specific venue as an additional insured upon request.",
  ],
  [
    "What areas near Alpharetta do you serve?",
    "While we love serving events in Alpharetta, we also cater to all of North Fulton County, including Roswell, Johns Creek, Milton, and the greater Metro Atlanta area.",
  ],
  [
    "How far in advance should I book for an Alpharetta wedding or corporate event?",
    "For peak wedding and corporate event seasons (especially Spring and Fall), dates fill up very quickly. We highly recommend booking our services 3–9 months in advance to secure your date.",
  ],
];

export default function AlpharettaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Luxury Mirror Photo Booth Rental in Alpharetta, GA",
    provider: {
      "@type": "LocalBusiness",
      name: "DEMM Photo Booths Atlanta",
      telephone: "+1-813-214-8098",
      url: "https://www.demmphotobooths.com",
    },
    areaServed: "Alpharetta, GA, North Fulton County, Roswell, Johns Creek, Metro Atlanta",
    description:
      "Premium luxury mirror photo booth rentals in Alpharetta, GA. Serving weddings, corporate events & private parties at Avalon, The Gathering Spot & more.",
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
          <small>PHOTO BOOTHS • ALPHARETTA</small>
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
          Check Availability in Alpharetta
        </a>
      </header>

      {/* Hero */}
      <section className="hero" id="top">
        <div className="orb one" />
        <div className="orb two" />
        <div className="hero-inner">
          <p className="eyebrow">PREMIUM EXPERIENCES IN NORTH FULTON</p>
          <h1>
            Luxury Mirror Photo Booth Rental in <em>Alpharetta, GA.</em>
          </h1>
          <p className="lead">
            Elevate your event with a sleek, interactive photo booth experience. Serving high-end weddings, private parties, and corporate events at Avalon, The Gathering Spot, and across the Technology City of the South.
          </p>
          <div className="actions">
            <a className="button" href="#quote">
              Check Availability in Alpharetta
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
        <span>Trusted By Alpharetta Venues & Tech Companies</span>
        <span>Serving All of North Fulton County</span>
      </section>

      {/* Split Experience */}
      <section className="section split" id="experience">
        <div>
          <p className="eyebrow">THE ALPHARETTA EXPERIENCE</p>
          <h2>
            More Than Photos. <em>An Upscale Attraction.</em>
          </h2>
        </div>
        <div>
          <p className="large">
            Whether hosting a tech launch party at Avalon or a luxury wedding, our Magic Mirror photo booth provides a sophisticated, interactive experience that matches the elegant Alpharetta lifestyle.
          </p>
          <ul className="checks">
            <li>Floor-to-ceiling interactive Magic Mirror design</li>
            <li>Studio-grade DSLR photos with flattering beauty lighting</li>
            <li>Customized print layouts with your corporate logo or monogram</li>
            <li>Instant SMS/Email photo sharing for your guests</li>
            <li>Fully insured (COI provided) for corporate venues</li>
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
            We work directly with your event planner, venue coordinator, and team to ensure setup happens ahead of schedule and the guest experience is flawless.
          </p>
          <p>Zero stress, zero technical glitches—just a premium photo experience for your attendees.</p>
          <a className="button" href="#quote">
            Reserve Your Alpharetta Date
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
            ["01", "Share Your Event Details", "Tell us your event date, venue in Alpharetta, and estimated guest count."],
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
        <p className="eyebrow">ALPHARETTA & BEYOND</p>
        <h2>
          Serving Events Across <em>North Fulton County.</em>
        </h2>
        <p>
          Alpharetta • Avalon • Roswell • Johns Creek • Milton • Sandy Springs • Metro Atlanta
        </p>
      </section>

      {/* Interactive AI Concierge Quote Form */}
      <section className="quote" id="quote">
        <div className="quote-copy">
          <p className="eyebrow">PLAN YOUR EVENT</p>
          <h2>
            Check Availability in <em>Alpharetta.</em>
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
          <p className="eyebrow">ALPHARETTA EVENT FAQs</p>
          <h2>
            Everything You Need <em>To Know.</em>
          </h2>
        </div>
        <div>
          {alpharettaFaqs.map((f, i) => (
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
          <small>PHOTO BOOTHS • ALPHARETTA</small>
        </div>
        <p>
          More than pictures. We bring the energy, elegance, and memory-making experience to Alpharetta events.
        </p>
        <div>
          <a href="/">Home</a>
          <a href="/event-planners">Event Planners</a>
          <a href="/birthdays">Parties</a>
          <a href="#faq">FAQ</a>
        </div>
        <small>© 2026 DEMM Photo Booths Atlanta. All rights reserved. • Photo Booth Rental Alpharetta GA</small>
      </footer>
      <a className="mobile-cta" href="#quote">
        Check Availability in Alpharetta
      </a>
    </main>
  );
}
