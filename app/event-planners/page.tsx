import type { Metadata } from "next";
import AIEventConcierge from "../components/AIEventConcierge";
import GoogleReviewsTicker from "../components/GoogleReviewsTicker";

export const metadata: Metadata = {
  title: "Corporate & Event Planner Photo Booth Rental Atlanta | DEMM Photo Booths",
  description:
    "Trusted photo booth vendor for Atlanta event planners, corporate producers & brand activations. High-throughput mirror booth, custom branding, COI compliance & instant digital sharing.",
  keywords: [
    "Corporate Photo Booth Rental Atlanta",
    "Event Planner Photo Booth Vendor Atlanta",
    "Brand Activation Photo Booth Metro Atlanta",
    "Gala Photo Booth Rental Atlanta",
    "Atlanta Convention Photo Booth Vendor",
  ],
};

const plannerFaqs = [
  [
    "Do you carry COI (Certificate of Insurance) for venues?",
    "Yes. DEMM Photo Booths carries full $1M/$2M commercial general liability insurance and can issue a custom Certificate of Insurance (COI) listing your venue or corporation as an additional insured upon request.",
  ],
  [
    "Can we brand the photo booth hardware and print graphics?",
    "Yes. We offer complete custom branding: fully custom print templates, branded start screens on the mirror, branded backdrop options, and custom SMS text message copy sent to attendees.",
  ],
  [
    "What is the guest throughput capacity of the booth?",
    "Our DSLR Mirror Photo Booth is engineered for high-capacity corporate activations, comfortably serving 120–180 guests per hour with sub-10-second instant printing and dual digital delivery options.",
  ],
  [
    "Can we collect lead data or user analytics from the activation?",
    "Yes. We can configure digital sign-in prompts to capture attendee emails or phone numbers (with consent compliance) for post-event analytics and marketing follow-up.",
  ],
  [
    "How does corporate billing and vendor onboarding work?",
    "We provide official itemized invoices, W-9 tax forms, electronic payment processing, and flexible net-30 terms for approved corporate accounts and agency partners.",
  ],
];

export default function EventPlannersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Corporate & Event Planner Photo Booth Vendor Atlanta",
    "provider": {
      "@type": "LocalBusiness",
      "name": "DEMM Photo Booths Atlanta",
      "telephone": "+1-813-214-8098",
      "url": "https://www.demmphotobooths.com",
    },
    "areaServed": "Atlanta, Downtown Atlanta, Buckhead, Midtown, Alpharetta, Georgia World Congress Center, Metro Atlanta",
    "description": "High-throughput branded mirror photo booth rentals for corporate events, conventions, galas, and brand activations in Atlanta.",
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
          <small>CORPORATE & EVENT PLANNERS • ATLANTA</small>
        </a>
        <nav aria-label="Planner navigation">
          <a href="/">Home</a>
          <a href="/weddings">Weddings</a>
          <a href="/birthdays">Parties</a>
          <a href="https://www.welcome2atlantaevents.com/find" target="_blank" rel="noopener noreferrer">
            Find My Photos
          </a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="button small" href="#quote">
          Request Vendor Proposal
        </a>
      </header>

      {/* Hero */}
      <section className="hero" id="top">
        <div className="orb one" />
        <div className="orb two" />
        <div className="hero-inner">
          <p className="eyebrow">FOR EVENT PRODUCERS & AGENCIES</p>
          <h1>
            The Reliable Photo Vendor <em>Atlanta Planners Trust.</em>
          </h1>
          <p className="lead">
            Full COI compliance, custom corporate branding, high guest throughput, and impeccable execution—giving your clients an activation that reflects your high standards.
          </p>
          <div className="actions">
            <a className="button" href="#quote">
              Request Vendor Proposal & Check Availability
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
              Client Photo Portal ↗
            </a>
          </div>
          <div className="trust">
            <span>$1M/$2M COI Compliant</span>
            <span>Custom Brand Overlays</span>
            <span>High-Speed Printing</span>
            <span>On-Time Guarantee</span>
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
            YOUR BRAND VISION.<br />
            <b>FLAWLESSLY EXECUTED.</b>
          </p>
        </div>
      </section>

      {/* Social Proof */}
      <GoogleReviewsTicker />

      <section className="proof">
        <span>Preferred Corporate Vendor Status</span>
        <span>Dedicated Account Management</span>
        <span>Atlanta Convention & Venue Ready</span>
      </section>

      {/* Split Experience */}
      <section className="section split" id="experience">
        <div>
          <p className="eyebrow">THE CORPORATE ADVANTAGE</p>
          <h2>
            Designed for High-Impact <em>Brand Activations & Galas.</em>
          </h2>
        </div>
        <div>
          <p className="large">
            We understand that when you hire a vendor, your reputation is on the line. DEMM delivers crisp DSLR imagery, rapid guest flow, and professional attire that fits seamless into black-tie galas or high-energy corporate summits.
          </p>
          <ul className="checks">
            <li>Fully customizable digital start screen & print frame branding</li><li>Fast sub-10 second thermal dye-sublimation print speed</li><li>Instant SMS & QR code digital sharing for attendee phone save</li><li>Opt-in lead capture & attendee engagement data</li><li>Timely setup, load-in coordination, and discreet teardown</li><li>Uniformed, professional lead attendant managing guest flow</li>
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
          <span>PROVEN CORPORATE EXECUTION</span>
        </div>
        <div>
          <p className="eyebrow">FLAWLESS LOGISTICS</p>
          <h2>
            Zero Friction for You. <em>Max Engagement for Clients.</em>
          </h2>
          <p className="large">
            We coordinate directly with venue loading docks, electrical teams, and event captains to ensure your timeline runs on schedule.
          </p>
          <p>Itemized invoices, W9s, and insurance certs provided within hours of request.</p>
          <a className="button" href="#quote">
            Request Proposal & COI
          </a>
        </div>
      </section>

      {/* Process */}
      <section className="process" id="process">
        <div className="section-title">
          <p className="eyebrow">STREAMLINED PLANNER WORKFLOW</p>
          <h2>
            From Proposal to Teardown in <em>4 Steps.</em>
          </h2>
        </div>
        <div className="steps">
          {[
            ["01", "Submit Event Requirements", "Provide your date, venue location, schedule, and branding goals."],
            ["02", "Receive Instant Vendor RFP", "We return an itemized proposal, COI sample, and availability guarantee."],
            ["03", "Brand Assets & Artwork Approval", "Send your logo files; our graphic designer sends digital proofs for sign-off."],
            ["04", "Flawless Event Execution", "We handle loading dock access, setup, activation execution, and post-event gallery handoff."],
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
        <p className="eyebrow">PREMIER ATLANTA CORPORATE VENUES</p>
        <h2>
          Serving Conventions & Venues <em>Across Metro Atlanta.</em>
        </h2>
        <p>
          Georgia World Congress Center (GWCC) • Cobb Galleria Centre • Hotel Colee Buckhead • The St. Regis • Fox Theatre • Porsche Experience Center • Mercedes-Benz Stadium suites • and corporate headquarters across Atlanta
        </p>
      </section>

      {/* Interactive AI Concierge Quote Form */}
      <section className="quote" id="quote">
        <div className="quote-copy">
          <p className="eyebrow">CORPORATE VENDOR INTAKE</p>
          <h2>
            Request Proposal for Your <em>Atlanta Event.</em>
          </h2>
          <p className="large">
            Tell us about your event scale, branding needs, and schedule to receive an itemized proposal.
          </p>
          <div className="promise">
            <b>White-Label Friendly.</b>
            <span>We operate as an extension of your planning team with discretion and excellence.</span>
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "center", width: "100%" }}>
          <AIEventConcierge />
        </div>
      </section>

      {/* FAQs */}
      <section className="faq" id="faq">
        <div>
          <p className="eyebrow">PLANNER & PRODUCER FAQS</p>
          <h2>
            Vendor & Operational <em>Details.</em>
          </h2>
        </div>
        <div>
          {plannerFaqs.map((f, i) => (
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
          <small>CORPORATE & EVENT PLANNERS • ATLANTA</small>
        </div>
        <p>
          Premier photo booth activation partner for Atlanta event planners, producers, and corporate brands.
        </p>
        <div>
          <a href="/">Home</a>
          <a href="/weddings">Weddings</a>
          <a href="/birthdays">Birthday Parties</a>
          <a href="#faq">FAQ</a>
        </div>
        <small>© 2026 DEMM Photo Booths Atlanta. All rights reserved. • Corporate Photo Booth Rental Atlanta</small>
      </footer>
      <a className="mobile-cta" href="#quote">
        Request Vendor Proposal
      </a>
    </main>
  );
}
