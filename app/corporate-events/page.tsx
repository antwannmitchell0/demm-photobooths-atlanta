import type { Metadata } from "next";
import AIEventConcierge from "../components/AIEventConcierge";
import GoogleReviewsTicker from "../components/GoogleReviewsTicker";

export const metadata: Metadata = {
  title: "Corporate Event Photo Booth Rental Atlanta | DEMM Photo Booths",
  description:
    "Premium photo booth rentals for corporate events in Metro Atlanta. Custom branding, lead-capture guest registration, COI insurance, and professional setup. Get a quote.",
  keywords: [
    "corporate event photo booth Atlanta",
    "brand activation photo booth Atlanta",
    "photo booth for networking events Atlanta",
    "trade show photo booth Georgia",
    "corporate photo booth with lead capture",
  ],
};

const corporateFaqs = [
  [
    "Can you provide a Certificate of Insurance (COI) for our venue?",
    "Yes. We can provide a Certificate of Insurance (COI) upon request. DEMM Photo Booths carries full $1M/$2M commercial general liability insurance. Contact us to confirm coverage details for your specific venue.",
  ],
  [
    "Can our company logo and branding appear on every photo print?",
    "Absolutely. We offer fully custom photo print overlays featuring your company logo, event name, and date, as well as branded start screens and digital delivery options.",
  ],
  [
    "How does the optional guest-registration feature work at corporate events?",
    "Our lead-capture feature allows attendees to voluntarily input their contact information (like email or phone number) at the booth in order to receive their digital photos. It's fully optional for guests, and you receive an organized contact list after the event.",
  ],
  [
    "How many staff do you bring to a large corporate event?",
    "Our standard professional setup includes one dedicated on-site attendant for the entire event to ensure smooth operations and high throughput. For extremely large activations, we can discuss additional staffing needs during the quote process.",
  ],
  [
    "What is the turnaround time for our guest contact list after the event?",
    "If you opt to use our lead-capture feature, your organized list of guest contacts and analytics is typically delivered within 24 to 48 hours following the conclusion of your event.",
  ],
];

export default function CorporateEventsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Corporate Event Photo Booth Rental Atlanta",
    "provider": {
      "@type": "LocalBusiness",
      "name": "DEMM Photo Booths Atlanta",
      "telephone": "+1-813-214-8098",
      "url": "https://www.demmphotobooths.com",
    },
    "areaServed": "Metro Atlanta, Fulton County, Cobb County, Gwinnett County, DeKalb County, Georgia",
    "description": "Premium photo booth rentals for corporate events in Metro Atlanta with custom branding and lead-capture guest registration.",
  };

  return (
    <main className="corporate-theme">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Navigation */}
      <header className="nav">
        <a className="brand" href="/">
          <span>DEMM</span>
          <small>CORPORATE EVENTS • ATLANTA</small>
        </a>
        <nav aria-label="Corporate navigation">
          <a href="/">Home</a>
          <a href="/weddings">Weddings</a>
          <a href="/birthdays">Parties</a>
          <a href="/lead-capture">Lead Capture</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="button small" href="#quote">
          Get a Corporate Quote
        </a>
      </header>

      {/* Hero */}
      <section className="hero" id="top">
        <div className="orb one" style={{ background: "rgba(30, 64, 175, 0.4)" }} />
        <div className="orb two" style={{ background: "rgba(17, 24, 39, 0.8)" }} />
        <div className="hero-inner">
          <p className="eyebrow">PREMIUM CORPORATE ACTIVATIONS</p>
          <h1>
            A Photo Booth Experience Built for <em>Business Events in Atlanta.</em>
          </h1>
          <p className="lead">
            Professional photo booth experiences for corporate events, brand activations, networking events, conferences, and nonprofit galas — with optional guest-registration and lead capture.
          </p>
          <div className="actions">
            <a className="button" href="#quote">
              Get a Corporate Quote
            </a>
            <a
              className="button secondary"
              href="/lead-capture"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#fff",
                marginLeft: "12px",
              }}
            >
              Explore Our Lead-Capture Feature ↗
            </a>
          </div>
          <div className="trust">
            <span>Lead-Capture Available</span>
            <span>Custom Brand Overlays</span>
            <span>COI Insured (Upon Request)</span>
            <span>Professional Logistics</span>
          </div>
        </div>
        <div className="hero-card" aria-hidden="true">
          <div className="flash">✦</div>
          <div
            className="photo"
            style={{
              backgroundImage: "url('/images/corporate-branding.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <p>
            BUSINESS DONE.<br />
            <b>BRILLIANTLY.</b>
          </p>
        </div>
      </section>

      {/* Social Proof */}
      <GoogleReviewsTicker />

      {/* What Corporate Clients Need */}
      <section className="section split" id="needs">
        <div>
          <p className="eyebrow">BUILT FOR BUSINESS</p>
          <h2>
            What Corporate Clients <em>Actually Need.</em>
          </h2>
        </div>
        <div>
          <p className="large">
            We know that executing a corporate event requires more than just dropping off a camera. It demands reliability, a professional on-site presence, and a flawless guest experience that reflects well on your brand's reputation.
          </p>
          <p>
            From custom branding that perfectly matches your company identity or event theme, to the practical logistics of on-time setup, manageable space requirements, and proper COI documentation—we handle the details. You also have the option to collect guest contact information voluntarily and transparently, turning engagement into actionable follow-ups.
          </p>
        </div>
      </section>

      {/* Lead Capture Highlight */}
      <section className="lead-capture-highlight" style={{ background: "rgba(15, 23, 42, 0.95)", padding: "5rem 2rem", borderRadius: "12px", margin: "2rem auto", maxWidth: "1200px", border: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          <p className="eyebrow" style={{ color: "#60a5fa" }}>STRATEGIC ROI</p>
          <h2>
            Photo Booth With <em>Optional Guest Registration</em>
          </h2>
          <p className="large" style={{ marginBottom: "1.5rem" }}>
            Take your brand activation further. Our optional lead-capture feature allows event hosts to collect voluntary guest contact information seamlessly through the photo booth experience.
          </p>
          <p style={{ marginBottom: "2rem" }}>
            Guests choose to share their details to receive their digital captures—it is never automatic or hidden. After the event, your team receives an organized contact list, providing real ROI from your event entertainment.
          </p>
          <a className="button" href="/lead-capture" style={{ background: "#fff", color: "#000" }}>
            → Learn how the full lead-capture experience works
          </a>
        </div>
      </section>

      {/* Types of Events */}
      <section className="process" id="event-types">
        <div className="section-title">
          <p className="eyebrow">VERSATILE EXCELLENCE</p>
          <h2>
            Types of Corporate Events <em>We Serve.</em>
          </h2>
        </div>
        <div className="steps" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          <article>
            <h3>Corporate Networking & Mixers</h3>
            <p>People come to make connections. The photo booth creates a natural icebreaker and gives attendees a fun reason to interact and break down barriers.</p>
          </article>
          <article>
            <h3>Grand Openings & Ribbon Cuttings</h3>
            <p>Make your major milestone truly memorable. Guests leave with a customized photo that keeps your new location and opening day fresh in their mind.</p>
          </article>
          <article>
            <h3>Trade Shows & Conferences</h3>
            <p>Built for high guest volume with a professional setup. We deliver a cohesive, branded experience from the moment attendees step up to the booth.</p>
          </article>
          <article>
            <h3>Brand Activations & Product Launches</h3>
            <p>Create a moment worth sharing. We offer completely custom photo overlays that highlight your new product or campaign branding directly in the image.</p>
          </article>
          <article>
            <h3>Nonprofit Galas & Fundraisers</h3>
            <p>Give your generous attendees something to celebrate and remember. We offer budget-conscious options specifically designed to support nonprofit organizations.</p>
          </article>
          <article>
            <h3>Church Events & Community Gatherings</h3>
            <p>Serve your congregation or local community with a warm, professionally hosted experience that brings people together for joyous moments.</p>
          </article>
          <article>
            <h3>Business Anniversary Celebrations</h3>
            <p>Company milestones matter. Document the momentous occasion and give your dedicated team members something tangible to take home and cherish.</p>
          </article>
        </div>
      </section>

      {/* Branding and Logistics Split */}
      <section className="section split" id="logistics">
        <div>
          <p className="eyebrow">BRANDING & CUSTOMIZATION</p>
          <h2>
            Your Brand. <em>Front and Center.</em>
          </h2>
          <ul className="checks">
            <li>Custom photo print overlays featuring your company logo, event name, and date</li>
            <li>Fully branded digital start screen on the mirror display</li>
            <li>Customized backdrop options to match your aesthetic</li>
            <li>Branded digital delivery texts and emails customized with your copy</li>
            <li>White-label capabilities—the experience feels entirely like your brand</li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">PROFESSIONAL LOGISTICS</p>
          <h2>
            Flawless Execution. <em>Guaranteed.</em>
          </h2>
          <ul className="checks">
            <li>COI (Certificate of Insurance) available upon request (contact us to confirm details)</li>
            <li>Early arrival 60–90 minutes before event start for complete, seamless setup</li>
            <li>Direct coordination with your event venue or corporate venue coordinator</li>
            <li>High-throughput booth technology designed for large-scale event crowds</li>
            <li>Professional, dedicated on-site attendant present for the entire activation</li>
            <li>Complete breakdown handled by DEMM—no venue work required from your team</li>
          </ul>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="area">
        <p className="eyebrow">METRO ATLANTA COVERAGE</p>
        <h2>
          Serving Events <em>Throughout Atlanta.</em>
        </h2>
        <p>
          Providing premier photo booth experiences for corporate campuses and events at venues including major convention centers and hotels across Metro Atlanta, Fulton County, Cobb County, Gwinnett County, and DeKalb County.
        </p>
      </section>

      {/* Interactive AI Concierge Quote Form */}
      <section className="quote" id="quote">
        <div className="quote-copy">
          <p className="eyebrow">CORPORATE INQUIRY</p>
          <h2>
            Get a Custom Quote for Your <em>Corporate Event.</em>
          </h2>
          <p className="large">
            Tell us about your event. We'll confirm availability and prepare a recommendation tailored to your goals.
          </p>
          <div className="promise" style={{ marginTop: "2rem" }}>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
              <span style={{ padding: "0.5rem 1rem", background: "rgba(255,255,255,0.1)", borderRadius: "4px" }}>⭐ 114+ Google Reviews · 5.0 Stars</span>
              <span style={{ padding: "0.5rem 1rem", background: "rgba(255,255,255,0.1)", borderRadius: "4px" }}>📞 813-214-8098</span>
              <span style={{ padding: "0.5rem 1rem", background: "rgba(255,255,255,0.1)", borderRadius: "4px" }}>⏱️ Typical response within 1 business day</span>
            </div>
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "center", width: "100%" }}>
          <AIEventConcierge />
        </div>
      </section>

      {/* FAQs */}
      <section className="faq" id="faq">
        <div>
          <p className="eyebrow">CORPORATE FAQS</p>
          <h2>
            Common <em>Questions.</em>
          </h2>
        </div>
        <div>
          {corporateFaqs.map((f, i) => (
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
      <footer className="corporate-footer">
        <div className="brand">
          <span>DEMM</span>
          <small>CORPORATE EVENTS • ATLANTA</small>
        </div>
        <p>
          Elevating corporate events with professional, engaging, and brand-focused photo booth experiences in Metro Atlanta.
        </p>
        <div>
          <a href="/">Home</a>
          <a href="/weddings">Weddings</a>
          <a href="/birthdays">Parties</a>
          <a href="/lead-capture">Lead Capture</a>
          <a href="#faq">FAQ</a>
        </div>
        <small>© 2026 DEMM Photo Booths Atlanta. All rights reserved. • Corporate Event Photo Booth Rental Atlanta</small>
      </footer>
      <a className="mobile-cta" href="#quote">
        Get a Corporate Quote
      </a>
    </main>
  );
}
