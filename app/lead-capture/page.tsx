import type { Metadata } from "next";
import GoogleReviewsTicker from "../components/GoogleReviewsTicker";

export const metadata: Metadata = {
  title: "Lead-Capture Photo Booth for Events in Atlanta | DEMM Photo Booths",
  description:
    "A photo booth experience that helps Atlanta event hosts voluntarily collect guest contact information. For corporate events, brand activations, networking events & more.",
  keywords: [
    "lead capture photo booth Atlanta",
    "photo booth with email capture",
    "brand activation photo booth Atlanta",
    "data capture photo booth events",
    "corporate event photo booth guest registration",
  ],
};

const leadCaptureFaqs = [
  [
    "Does every guest have to share their information to get their photo?",
    "No. Sharing contact information is always voluntary. Every guest receives their photo regardless.",
  ],
  [
    "Who receives the guest contact list after the event?",
    "The event host who booked the service receives the CSV export of opted-in contacts. DEMM does not use this list for its own marketing.",
  ],
  [
    "What if a guest asks to be removed from the list after the event?",
    "For removal from DEMM's systems, contact us directly. For removal from the event host's list, contact the event host. We provide full guidance in our privacy policy.",
  ],
  [
    "Is the lead-capture feature available for all event types?",
    "It is currently configured for corporate events, networking events, brand activations, nonprofit galas, and similar business-focused events. It is not typically configured for weddings or personal celebrations.",
  ],
  [
    "How many contacts can realistically be collected at an event?",
    "We cannot predict how many guests will choose to opt in — that depends on the event, the guests, and how the experience is presented. We do not make promises about opt-in rates. What we can control is making the experience smooth, the prompts clear, and the consent language transparent.",
  ],
];

export default function LeadCapturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Lead-Capture Photo Booth for Events in Atlanta",
    provider: {
      "@type": "LocalBusiness",
      name: "DEMM Photo Booths Atlanta",
      telephone: "+1-813-214-8098",
      url: "https://www.demmphotobooths.com",
    },
    areaServed: "Metro Atlanta, Georgia",
    description:
      "A photo booth experience that helps Atlanta event hosts voluntarily collect guest contact information. For corporate events, brand activations, networking events & more.",
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
          <small>LEAD-CAPTURE • ATLANTA</small>
        </a>
        <nav aria-label="Lead capture navigation">
          <a href="/">Home</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#features">Features</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="button small" href="#inquiry">
          Check Availability
        </a>
      </header>

      {/* Hero */}
      <section className="hero" id="top">
        <div className="orb one" />
        <div className="orb two" />
        <div className="hero-inner">
          <p className="eyebrow">DATA CAPTURE EXPERIENCES</p>
          <h1>
            A Photo Booth Experience That Helps You Build Your <em>Guest List.</em>
          </h1>
          <p className="lead">
            Every guest enjoys the booth. Every guest receives their photos. And if they choose — they can share their contact information with you.
          </p>
          <div className="actions">
            <a className="button" href="#inquiry">
              Check Availability for Your Event
            </a>
            <a
              className="button secondary"
              href="#how-it-works"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#fff",
                marginLeft: "12px",
              }}
            >
              See How It Works
            </a>
          </div>
          <div className="trust">
            <span>Voluntary Opt-In</span>
            <span>Custom Fields</span>
            <span>Branded Experience</span>
            <span>Privacy Focused</span>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <GoogleReviewsTicker />

      {/* The Transformation */}
      <section className="section split" id="transformation">
        <div>
          <p className="eyebrow">TRADITIONAL PHOTO BOOTH</p>
          <h2>
            The Moment <em>Ends.</em>
          </h2>
          <ul className="checks">
            <li>Guests take photos</li>
            <li>Guests receive prints or digital links</li>
            <li>You have no record of who attended</li>
            <li>The moment ends when the event ends</li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">DEMM LEAD-CAPTURE EXPERIENCE</p>
          <h2>
            The Relationship <em>Continues.</em>
          </h2>
          <ul className="checks">
            <li>Guests enjoy the photo booth experience</li>
            <li>Guests receive their photos via text or email</li>
            <li>Guests who choose to may share their contact info with you</li>
            <li>You leave with an organized list of willing contacts</li>
            <li>The relationship can continue after the event</li>
          </ul>
          <p style={{ marginTop: "20px", fontSize: "0.9rem", opacity: 0.8 }}>
            <strong>IMPORTANT:</strong> Guest opt-in is voluntary. This is a feature — not a guarantee that every guest will share their information. See our <a href="/privacy-policy" style={{ color: "inherit", textDecoration: "underline" }}>Privacy Policy</a>.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="process" id="how-it-works">
        <div className="section-title">
          <p className="eyebrow">THE GUEST EXPERIENCE</p>
          <h2>
            How It <em>Works.</em>
          </h2>
        </div>
        <div className="steps" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          {[
            ["01", "Approaches Booth", "Guest approaches the mirror photo booth."],
            ["02", "Photo Session", "Guest takes their photo session (fun, interactive, professionally hosted)."],
            ["03", "Photo Preview", "Guest sees their photo preview on screen."],
            ["04", "Delivery Choice", "Guest chooses how to receive their photo: text, email, or QR code / skip."],
            ["05", "Contact Info", "If text or email is chosen: guest enters their contact info."],
            ["06", "Optional Registration", "If enabled, a SEPARATE prompt appears — clearly identifying the host — asking the guest if they'd like to join the host's contact list (yes/no)."],
            ["07", "Instant Delivery", "Guest receives their photo immediately."],
            ["08", "Host Receives Data", "Event host receives an organized export of opted-in contacts after the event."]
          ].map((x) => (
            <article key={x[0]}>
              <b>{x[0]}</b>
              <h3>{x[1]}</h3>
              <p>{x[2]}</p>
            </article>
          ))}
        </div>
      </section>

      {/* What Information Can Be Collected */}
      <section className="section split" style={{ alignItems: "center" }}>
        <div>
          <p className="eyebrow">CUSTOMIZABLE FIELDS</p>
          <h2>What Information <em>Can Be Collected?</em></h2>
          <p className="large">
            The event host decides which fields appear. Fields are configured before the event.
          </p>
          <ul className="checks">
            <li>Name (optional)</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Optional custom questions configured by the event host (examples: "What brought you here tonight?", "Would you like to schedule a follow-up?", "Which product are you most interested in?")</li>
          </ul>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="area" id="who-its-for">
        <p className="eyebrow">IDEAL USE CASES</p>
        <h2>
          Who This Is <em>For.</em>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", marginTop: "2rem", textAlign: "left" }}>
          {[
            ["Corporate Networking Events", "Perfect for mixers where professionals want to connect. Easily gather attendee info for post-event follow-ups."],
            ["Grand Openings", "Capture the excitement of your launch. Build your initial customer mailing list with enthusiastic local attendees."],
            ["Trade Shows & Conferences", "Stand out on the exhibit floor. Engage visitors with a fun experience while organically growing your lead list."],
            ["Brand Activations", "Amplify your product launch. Create shareable branded content while collecting valuable consumer data."],
            ["Nonprofit Galas", "Keep your donors engaged. Provide a memorable photo keepsake and seamlessly grow your supporter database."],
            ["Church & Community Events", "Connect with visitors and members. Follow up effortlessly with those who choose to share their information."],
            ["Real Estate Open Houses", "Elevate the viewing experience. Stand out as an agent while effortlessly gathering prospective buyer contacts."],
            ["Business Anniversaries", "Celebrate milestones with your clients. Provide a fun experience and gather updated contact details from attendees."]
          ].map(([title, desc]) => (
            <div key={title} style={{ padding: "1.5rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", background: "rgba(0,0,0,0.2)" }}>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{title}</h3>
              <p style={{ opacity: 0.8, fontSize: "0.95rem" }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What's Available Now vs. In Development */}
      <section className="section" id="features">
        <div className="section-title">
          <p className="eyebrow">FEATURE ROADMAP</p>
          <h2>
            Available Now vs. <em>In Development</em>
          </h2>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", marginTop: "40px", maxWidth: "1000px", margin: "40px auto", textAlign: "left" }}>
          <div style={{ flex: "1 1 300px", padding: "30px", background: "rgba(255,255,255,0.05)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.2)" }}>
            <h3 style={{ marginBottom: "20px", color: "#fff", fontSize: "1.5rem" }}>Available Now</h3>
            <ul className="checks">
              <li>Guest photo delivery via text or email</li>
              <li>Optional guest-registration prompt (name, email, phone)</li>
              <li>Custom question fields configured before the event</li>
              <li>CSV export of opted-in contact list after the event</li>
              <li>Branded delivery screens and photo templates</li>
              <li>Privacy disclosure and consent language displayed at booth</li>
              <li>Link to privacy policy shown to guests</li>
            </ul>
          </div>
          <div style={{ flex: "1 1 300px", padding: "30px", background: "rgba(255,255,255,0.02)", borderRadius: "12px", border: "1px dashed rgba(255,255,255,0.2)" }}>
            <h3 style={{ marginBottom: "20px", color: "rgba(255,255,255,0.7)", fontSize: "1.5rem" }}>In Development / Coming Soon</h3>
            <ul className="checks" style={{ opacity: 0.7 }}>
              <li>Direct CRM integration (Salesforce, HubSpot, Mailchimp)</li>
              <li>Real-time dashboard for event hosts during the event</li>
              <li>Multi-event contact list management</li>
              <li>Automated follow-up email sequences</li>
            </ul>
          </div>
        </div>
        <p style={{ marginTop: "20px", fontSize: "0.9rem", opacity: 0.8, textAlign: "center" }}>
          DEMM will clearly communicate which features are live before you book. We do not charge for features that aren't ready.
        </p>
      </section>

      {/* Consent and Privacy */}
      <section className="host">
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          <p className="eyebrow">TRANSPARENCY FIRST</p>
          <h2>
            Guest Consent Is Always <em>Clear and Voluntary</em>
          </h2>
          <ul className="checks" style={{ textAlign: "left", marginTop: "2rem", display: "inline-block" }}>
            <li>The photo-delivery screen is separate from the contact-sharing prompt.</li>
            <li>Guests who don't want to share information can still receive their photos.</li>
            <li>The opt-in prompt clearly identifies the event host by name.</li>
            <li>A link to DEMM's privacy policy is displayed on screen.</li>
            <li>DEMM does not add guests to DEMM's own marketing list.</li>
            <li>The event host is responsible for their use of collected contacts.</li>
          </ul>
          <div style={{ marginTop: "2rem" }}>
            <a className="button secondary" href="/privacy-policy" style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.25)", color: "#fff" }}>
              Read Full Privacy Policy
            </a>
          </div>
        </div>
      </section>

      {/* Offline Mode */}
      <section className="section split">
        <div>
          <p className="eyebrow">EVENTS WITH LIMITED CONNECTIVITY</p>
          <h2>
            What Happens <em>Without Internet?</em>
          </h2>
        </div>
        <div>
          <ul className="checks">
            <li>The photo booth can operate in offline mode</li>
            <li>Guest contact info is stored locally and synced when connectivity is restored</li>
            <li>Photos can be delivered via QR code (no internet required for the guest to access)</li>
            <li>For events with no internet at all, CSV export is still available post-event after sync</li>
            <li>DEMM will confirm connectivity requirements and backup plans during event planning</li>
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="section split" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div>
          <p className="eyebrow">INVESTMENT</p>
          <h2>
            Pricing and <em>What's Included</em>
          </h2>
        </div>
        <div>
          <ul className="checks">
            <li>The guest-registration feature is included with qualifying corporate event packages</li>
            <li>CRM setup, custom integration work, and marketing services are separate</li>
            <li>A custom quote is prepared for each event based on event type, guest count, hours, and features</li>
          </ul>
          <p style={{ marginTop: "20px", fontWeight: "bold" }}>
            Note: We do not publish package pricing publicly. Every event gets a tailored recommendation.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="faq" id="faq">
        <div>
          <p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p>
          <h2>
            Everything You Need <em>To Know.</em>
          </h2>
        </div>
        <div>
          {leadCaptureFaqs.map((f, i) => (
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

      {/* Inquiry Form */}
      <section className="quote" id="inquiry">
        <div className="quote-copy">
          <p className="eyebrow">READY TO CONNECT?</p>
          <h2>
            Check Availability for <em>Your Event.</em>
          </h2>
          <p className="large">
            Tell us about your event and we'll confirm whether the lead-capture experience is the right fit.
          </p>
          <div className="promise">
            <b>114+ Google reviews · 5.0 stars · Serving Metro Atlanta</b>
            <span>
              Prefer to call? <a href="tel:8132148098" style={{ color: "inherit", textDecoration: "underline" }}>813-214-8098</a>
            </span>
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "center", width: "100%", padding: "2rem" }}>
          <form style={{ width: "100%", maxWidth: "500px", display: "flex", flexDirection: "column", gap: "1rem", background: "rgba(255,255,255,0.05)", padding: "2rem", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)", textAlign: "left" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <label htmlFor="name" style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Name *</label>
              <input type="text" id="name" name="name" required style={{ padding: "12px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.2)", background: "transparent", color: "#fff", fontSize: "1rem" }} />
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <label htmlFor="company" style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Company or organization *</label>
              <input type="text" id="company" name="company" required style={{ padding: "12px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.2)", background: "transparent", color: "#fff", fontSize: "1rem" }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <label htmlFor="email" style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Email *</label>
              <input type="email" id="email" name="email" required style={{ padding: "12px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.2)", background: "transparent", color: "#fff", fontSize: "1rem" }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <label htmlFor="phone" style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Phone</label>
              <input type="tel" id="phone" name="phone" style={{ padding: "12px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.2)", background: "transparent", color: "#fff", fontSize: "1rem" }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <label htmlFor="date" style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Event date *</label>
              <input type="date" id="date" name="date" required style={{ padding: "12px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.2)", background: "transparent", color: "#fff", fontSize: "1rem", colorScheme: "dark" }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <label htmlFor="type" style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Event type</label>
              <select id="type" name="type" style={{ padding: "12px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.2)", background: "#111", color: "#fff", fontSize: "1rem" }}>
                <option value="">Select an option...</option>
                <option value="Corporate Networking">Corporate Networking</option>
                <option value="Grand Opening">Grand Opening</option>
                <option value="Trade Show/Conference">Trade Show/Conference</option>
                <option value="Brand Activation">Brand Activation</option>
                <option value="Nonprofit Gala">Nonprofit Gala</option>
                <option value="Church/Community Event">Church/Community Event</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <label htmlFor="guests" style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Estimated guest count</label>
              <input type="text" id="guests" name="guests" style={{ padding: "12px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.2)", background: "transparent", color: "#fff", fontSize: "1rem" }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <label htmlFor="details" style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Additional details / questions</label>
              <textarea id="details" name="details" rows={4} style={{ padding: "12px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.2)", background: "transparent", color: "#fff", fontSize: "1rem", resize: "vertical" }}></textarea>
            </div>

            <button type="submit" className="button" style={{ marginTop: "10px", width: "100%", cursor: "pointer" }}>
              Send My Event Details
            </button>
            <p style={{ fontSize: "0.8rem", opacity: 0.7, textAlign: "center", marginTop: "10px" }}>
              We typically respond within one business day. Your information is used only to respond to your inquiry. See our <a href="/privacy-policy" style={{ color: "inherit", textDecoration: "underline" }}>Privacy Policy</a>.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="brand">
          <span>DEMM</span>
          <small>LEAD-CAPTURE EXPERIENCES • ATLANTA</small>
        </div>
        <p>
          More than pictures. We build unforgettable experiences that grow your network.
        </p>
        <div>
          <a href="/">Home</a>
          <a href="/weddings">Weddings</a>
          <a href="/event-planners">Event Planners</a>
          <a href="#faq">FAQ</a>
        </div>
        <small>© 2026 DEMM Photo Booths Atlanta. All rights reserved. • Lead Capture Photo Booth Rentals</small>
      </footer>
      <a className="mobile-cta" href="#inquiry">
        Check Availability
      </a>
    </main>
  );
}
