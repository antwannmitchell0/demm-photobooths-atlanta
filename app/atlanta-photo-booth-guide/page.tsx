import type { Metadata } from "next";
import GoogleReviewsTicker from "../components/GoogleReviewsTicker";

export const metadata: Metadata = {
  title: "The Complete Guide to Renting a Photo Booth in Atlanta (2025)",
  description:
    "Everything Atlanta event planners need to know before renting a photo booth — pricing factors, booth types, space requirements, lead capture, and what to ask any vendor.",
};

export default function AtlantaPhotoBoothGuide() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Complete Guide to Renting a Photo Booth in Atlanta",
    "description":
      "Everything you need to know before renting a photo booth in Atlanta — pricing, booth types, space, lead capture, and what to ask any vendor.",
    "author": { "@type": "Organization", "name": "DEMM Photo Booths" },
    "publisher": {
      "@type": "Organization",
      "name": "DEMM Photo Booths",
      "url": "https://www.demmphotobooths.com",
    },
    "mainEntityOfPage":
      "https://www.demmphotobooths.com/atlanta-photo-booth-guide",
  };

  return (
    <main className="guide-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .guide-page { background: #f8f9fa; color: #333; }
        .guide-hero { 
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          padding: 120px 24px 80px; 
          text-align: center; 
          color: #fff; 
        }
        .guide-hero h1 { font-size: clamp(32px, 5vw, 56px); max-width: 900px; margin: 0 auto 24px; line-height: 1.2; font-weight: 800; }
        .guide-layout {
          display: flex;
          flex-direction: column;
          max-width: 1200px;
          margin: 60px auto;
          padding: 0 24px;
          gap: 48px;
        }
        @media (min-width: 900px) {
          .guide-layout { flex-direction: row; }
        }
        .guide-sidebar {
          flex-shrink: 0;
          width: 100%;
        }
        @media (min-width: 900px) {
          .guide-sidebar { width: 280px; position: sticky; top: 100px; align-self: flex-start; }
        }
        .guide-sidebar h3 { font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 16px; font-weight: 700; color: #555; }
        .guide-sidebar ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; }
        .guide-sidebar a { color: #666; text-decoration: none; font-size: 15px; font-weight: 500; transition: color 0.2s; }
        .guide-sidebar a:hover { color: #7c3aed; }
        .guide-content {
          flex: 1;
          background: #fff;
          padding: 60px 48px;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.04);
          max-width: 900px;
        }
        @media (max-width: 767px) {
          .guide-content { padding: 32px 24px; }
        }
        .guide-content h2 { font-size: 28px; font-weight: 700; margin: 64px 0 24px; color: #111; line-height: 1.3; }
        .guide-content h2:first-child { margin-top: 0; }
        .guide-content p { font-size: 17px; line-height: 1.8; margin-bottom: 20px; color: #333; }
        .guide-content ul, .guide-content ol { font-size: 17px; line-height: 1.8; color: #333; margin-bottom: 24px; padding-left: 24px; }
        .guide-content li { margin-bottom: 12px; }
        .guide-content table { width: 100%; border-collapse: collapse; margin-bottom: 32px; font-size: 16px; border: 1px solid #eaeaea; }
        .guide-content th, .guide-content td { padding: 16px; text-align: left; border-bottom: 1px solid #eaeaea; }
        .guide-content th { font-weight: 700; color: #111; background: #f8f9fa; }
        .guide-content tr:last-child td { border-bottom: none; }
        .guide-content a { color: #7c3aed; font-weight: 600; text-decoration: none; }
        .guide-content a:hover { text-decoration: underline; }
        .guide-content hr { border: none; border-top: 1px solid #eaeaea; margin: 48px 0; }
        .cta-section { background: #111; color: #fff; padding: 64px 32px; border-radius: 12px; text-align: center; margin-top: 64px; }
        .cta-section h2 { color: #fff; margin: 0 0 16px; margin-top: 0; }
        .cta-section p { color: rgba(255,255,255,0.8); margin-bottom: 32px; }
        .cta-section .trust-signals { margin-top: 32px; font-size: 14px; opacity: 0.6; }
        `,
        }}
      />

      {/* Navigation */}
      <header className="nav">
        <a className="brand" href="/">
          <span>DEMM</span>
          <small>PHOTO BOOTHS • ATLANTA</small>
        </a>
        <nav aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/weddings">Weddings</a>
          <a href="/corporate-events">Corporate</a>
          <a href="/lead-capture">Lead Capture</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="button small" href="/#quote">
          Check My Date
        </a>
      </header>

      {/* Hero */}
      <section className="guide-hero">
        <div className="orb one" />
        <div className="orb two" />
        <h1 style={{ position: "relative", zIndex: 2 }}>
          The Complete Guide to Renting a Photo Booth in Atlanta
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "rgba(255,255,255,0.8)",
            maxWidth: "640px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
            lineHeight: 1.6,
          }}
        >
          Everything you need to know before booking — pricing factors, booth
          types, space requirements, lead capture, and what to ask any vendor.
        </p>
      </section>

      <GoogleReviewsTicker />

      {/* Main Layout */}
      <div className="guide-layout">
        <aside className="guide-sidebar">
          <h3>Jump to Section</h3>
          <ul>
            <li>
              <a href="#pricing">Pricing & Cost Factors</a>
            </li>
            <li>
              <a href="#booth-types">Booth Types Explained</a>
            </li>
            <li>
              <a href="#digital-vs-prints">Digital vs. Prints</a>
            </li>
            <li>
              <a href="#space-requirements">Space Requirements</a>
            </li>
            <li>
              <a href="#setup-breakdown">Setup & Breakdown</a>
            </li>
            <li>
              <a href="#custom-overlay">Custom Print Overlays</a>
            </li>
            <li>
              <a href="#attendant">The On-Site Attendant</a>
            </li>
            <li>
              <a href="#internet">Internet & Offline Events</a>
            </li>
            <li>
              <a href="#lead-capture">Lead Capture</a>
            </li>
            <li>
              <a href="#questions-to-ask">Questions to Ask Vendors</a>
            </li>
            <li>
              <a href="#mistakes">Common Mistakes to Avoid</a>
            </li>
            <li>
              <a href="#booking-timeline">Booking Timeline</a>
            </li>
            <li>
              <a href="#event-types">Event-Type Considerations</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </aside>

        <article className="guide-content">
          <p>
            The photo booth industry has changed significantly. What used to be a
            generic prop box in a corner is now a full experience — interactive
            mirrors, instant digital sharing, branded overlays, and for some
            events, optional guest-registration features.
          </p>
          <p>
            This guide will help you make a smart, informed decision for your
            Atlanta event.
          </p>

          <hr />

          <h2 id="pricing">
            What Does a Photo Booth Rental Actually Cost in Atlanta?
          </h2>
          <p>
            Do not expect a professional vendor to list a single, flat price
            range. Instead, look closely at the factors that affect pricing:
          </p>
          <ul>
            <li>Event duration (2 hours vs. 4 hours vs. 6 hours)</li>
            <li>Type of booth (open-air vs. enclosed vs. mirror vs. 360)</li>
            <li>Print options (prints vs. digital-only vs. both)</li>
            <li>Guest count and throughput needs</li>
            <li>Custom design work (overlay design, branded screens)</li>
            <li>Add-ons (guestbook, props, custom backdrop)</li>
            <li>Travel distance from the vendor's base</li>
            <li>Day of week (Saturday premium is common)</li>
            <li>Holiday weekends</li>
            <li>Last-minute booking</li>
          </ul>
          <p>
            The right way to shop for a photo booth isn't to find the cheapest
            quote — it's to get a quote that actually matches your event, then
            compare what's included.
          </p>
          <p>
            <a href="/">
              Tell us about your event and we'll build a custom quote →
            </a>
          </p>

          <h2 id="booth-types">What's the Difference Between Booth Types?</h2>
          <ul>
            <li>
              <strong>Open-Air Photo Booth</strong> — The most common type. A
              camera on a stand, a backdrop behind it, and a screen or tablet
              for guest interaction. Works for most events, easy to move around,
              guests can fit larger groups.
            </li>
            <li>
              <strong>Enclosed/Traditional Photo Booth</strong> — The classic
              curtained booth. Creates a private experience. Works well for
              intimate events but limits group sizes. Less common for large
              receptions.
            </li>
            <li>
              <strong>Mirror Photo Booth (Magic Mirror)</strong> — A
              floor-to-ceiling touchscreen mirror that guests interact with
              directly. Flattering angles, premium look, highly
              Instagram-worthy. Works well for weddings, galas, quinceañeras,
              and corporate events where presentation matters.
            </li>
            <li>
              <strong>360 Video Booth</strong> — Guests stand on a platform
              while a camera arm rotates around them capturing slow-motion video
              clips. Very popular for social media content. Requires more floor
              space (typically 10x10 ft). Higher throughput bottleneck — one
              group at a time.
            </li>
          </ul>
          <p>
            <em>
              Note: DEMM specializes in the Mirror Photo Booth experience. Not
              all booth types are available from every vendor — confirm what
              you're actually getting before you book.
            </em>
          </p>

          <h2 id="digital-vs-prints">
            Digital Photos vs. Prints — Which Should You Choose?
          </h2>
          <p>Here are the honest tradeoffs between your options:</p>

          <p>
            <strong>Prints:</strong>
          </p>
          <ul>
            <li>Guests take something physical home</li>
            <li>Setup requires a printer (adds cost, potential technical issues)</li>
            <li>Print quality and speed varies widely between vendors</li>
            <li>Paper quality matters — ask for examples</li>
            <li>Great for weddings where guests want a keepsake</li>
          </ul>

          <p>
            <strong>Digital-only:</strong>
          </p>
          <ul>
            <li>Guests receive photos instantly via text or email</li>
            <li>No printer = faster throughput (more guests served per hour)</li>
            <li>Guests can share directly to social media</li>
            <li>Nothing to carry or lose</li>
            <li>
              Better for corporate events, large conferences, brand activations
            </li>
          </ul>

          <p>
            <strong>Both:</strong>
          </p>
          <ul>
            <li>Most premium option</li>
            <li>
              Best for weddings with 100+ guests who want both a physical and
              digital copy
            </li>
            <li>Adds cost</li>
          </ul>
          <p>
            <strong>Conclusion:</strong> For weddings and milestone events,
            prints add emotional value. For corporate events focused on speed
            and data, digital-only often works better.
          </p>

          <h2 id="space-requirements">How Much Space Does a Photo Booth Need?</h2>
          <ul>
            <li>
              <strong>Open-air booth:</strong> minimum 8x8 ft recommended (10x10
              is comfortable)
            </li>
            <li>
              <strong>Mirror booth:</strong> typically 6x8 ft for the booth,
              plus backdrop space — total area ~10x8 ft
            </li>
            <li>
              <strong>360 booth:</strong> minimum 10x10 ft platform area, plus
              safety clearance
            </li>
            <li>
              <strong>Ceiling height:</strong> most mirror booths require at
              least 8 ft clearance
            </li>
            <li>
              <strong>Power:</strong> standard 20-amp circuit within 20 ft;
              avoid shared circuits with DJ or lighting
            </li>
            <li>
              <strong>Backdrop area:</strong> add 4–6 ft behind the guests for
              the backdrop to be fully visible
            </li>
            <li>
              <strong>Placement tip:</strong> avoid direct sunlight or bright
              windows (overexposes photos). Corner placement often works best.
            </li>
            <li>
              <strong>Indoor vs. outdoor:</strong> outdoor requires shade and
              weather plan; confirm with your vendor
            </li>
          </ul>
          <p>
            <a href="/">
              DEMM confirms all space and power requirements before your event →
            </a>
          </p>

          <h2 id="setup-breakdown">Setup and Breakdown — What Should You Expect?</h2>
          <ul>
            <li>
              A professional vendor should arrive 60–90 minutes before guests to
              complete full setup
            </li>
            <li>
              Breakdown should be quiet and efficient — this is especially
              important at wedding receptions
            </li>
            <li>
              You should NOT need to do anything related to the booth setup or
              breakdown
            </li>
            <li>
              Ask: "Do you handle all setup and breakdown, or is the venue
              responsible for anything?"
            </li>
            <li>
              Confirm the vendor will coordinate directly with your venue
              coordinator or wedding planner
            </li>
            <li>
              Ask about load-in logistics: elevator access, loading dock,
              parking, carry distance
            </li>
          </ul>

          <h2 id="custom-overlay">What Is a Custom Print Overlay?</h2>
          <p>
            It is the branded border, text, and design that appears on every
            photo strip printed from the booth. This is where your event's
            identity shows up.
          </p>
          <p>
            <strong>For weddings:</strong> typically includes the couple's names,
            wedding date, and a design that matches the wedding colors or
            invitation style.
          </p>
          <p>
            <strong>For corporate events:</strong> company logo, event name,
            hashtag, brand colors.
          </p>
          <p>
            <strong>For quinceañeras and sweet 16s:</strong> honoree's name,
            date, and theme.
          </p>
          <p>
            <strong>Timeline:</strong> a good vendor will need your design brief
            2–3 weeks before the event. They should provide a digital proof for
            your approval before printing begins. You should not be surprised by
            what the prints look like on your event day.
          </p>

          <h2 id="attendant">What Does an On-Site Attendant Actually Do?</h2>
          <p>
            This is one of the most underrated factors in photo booth quality.
          </p>
          <p>
            <strong>A good attendant:</strong>
          </p>
          <ul>
            <li>Invites guests over and encourages participation</li>
            <li>Helps groups arrange themselves for the best shot</li>
            <li>Troubleshoots any technical issues without involving you</li>
            <li>
              Maintains the prop area, backdrop, and booth appearance throughout
              the event
            </li>
            <li>Manages the guestbook if included</li>
            <li>Communicates professionally with venue staff</li>
            <li>Does not disappear for 20 minutes at a time</li>
          </ul>
          <p>
            <strong>What a bad attendant does:</strong> stands behind the booth
            staring at their phone while guests awkwardly figure out what to do.
          </p>
          <p>
            <strong>Ask every vendor:</strong> "Will the same person who sets up
            be the one operating the booth throughout my event?" And: "What
            training do your attendants receive?"
          </p>

          <h2 id="internet">Internet Requirements and Offline Events</h2>
          <ul>
            <li>
              Most modern photo booths require internet for digital sharing
              (SMS/email delivery)
            </li>
            <li>
              Check with your venue about WiFi strength and reliability in the
              specific event space
            </li>
            <li>
              Hotel ballrooms and large event centers often have spotty WiFi in
              specific rooms
            </li>
            <li>
              Ask your vendor: "What happens if the internet connection fails
              during the event?"
            </li>
            <li>
              A good vendor has an offline mode: photos are queued locally and
              sent when connectivity is restored
            </li>
            <li>
              QR code pickup is a reliable fallback that doesn't require strong
              real-time internet
            </li>
            <li>
              For corporate events with lead capture: offline data queuing is
              essential — guest contact info should never be lost due to
              connectivity
            </li>
          </ul>

          <h2 id="lead-capture">Lead Capture and Guest Registration</h2>
          <p>
            For personal celebrations (weddings, birthdays), the photo booth is
            purely about the experience and the keepsake. But for business
            events — networking events, grand openings, trade shows, brand
            activations, nonprofit galas — there's an additional option:
            voluntary guest registration.
          </p>
          <p>
            When a guest chooses to receive their photo via text or email, they
            enter their contact information. At events where the host has
            enabled an optional registration prompt, guests can choose to share
            that contact info with the event host. This always requires a clear,
            separate opt-in — guests are never automatically added to any list.
          </p>
          <p>
            The result: a photo booth experience that's fun and engaging, plus
            an organized list of willing contacts for the event host after the
            event.
          </p>
          <p>
            <a href="/lead-capture">
              Learn exactly how DEMM's lead-capture experience works →
            </a>
          </p>

          <h2 id="questions-to-ask">
            What Questions Should You Ask Before Booking Any Photo Booth Vendor?
          </h2>
          <ol>
            <li>
              <strong>What type of booth is this, exactly?</strong> (Confirm:
              open-air, mirror, 360, enclosed)
            </li>
            <li>
              <strong>
                Will you provide a physical sample of the print quality before I
                book?
              </strong>
            </li>
            <li>
              <strong>Who specifically will be the attendant at my event?</strong>
            </li>
            <li>
              <strong>
                What happens if you have an equipment failure the day of my
                event?
              </strong>
            </li>
            <li>
              <strong>
                Is the quoted price all-inclusive, or are setup, breakdown,
                travel, and design fees separate?
              </strong>
            </li>
            <li>
              <strong>What is your cancellation and rescheduling policy?</strong>
            </li>
            <li>
              <strong>
                Do you carry liability insurance, and can you provide a
                Certificate of Insurance for my venue?
              </strong>
            </li>
            <li>
              <strong>
                Will you coordinate directly with my venue coordinator/wedding
                planner?
              </strong>
            </li>
            <li>
              <strong>What are the exact space and power requirements?</strong>
            </li>
            <li>
              <strong>
                How do guests receive their photos, and what happens if the
                internet fails?
              </strong>
            </li>
            <li>
              <strong>
                Can I see examples of print overlays you've created for similar
                events?
              </strong>
            </li>
            <li>
              <strong>
                What is included in your base package, and what are the most
                common add-ons?
              </strong>
            </li>
          </ol>

          <h2 id="mistakes">Common Mistakes to Avoid</h2>
          <ol>
            <li>
              <strong>Booking based on price alone</strong> — The cheapest quote
              often means slower prints, lower photo quality, or no attendant.
              Ask what's actually included.
            </li>
            <li>
              <strong>Waiting too long to book</strong> — Atlanta wedding season
              (spring and fall) is competitive. Popular vendors book 6–12 months
              in advance for Saturday dates.
            </li>
            <li>
              <strong>Not confirming space before the event</strong> — Showing
              up with a booth that won't fit the space ruins everyone's day.
              Confirm dimensions and power with your vendor and your venue —
              separately.
            </li>
            <li>
              <strong>Assuming all mirror booths are the same</strong> — They're
              not. Camera quality, lighting, print quality, software, and
              attendant training vary dramatically between vendors.
            </li>
            <li>
              <strong>Forgetting about the backdrop</strong> — The backdrop is
              half the photo. A cheap or wrinkled backdrop makes even good
              photos look bad. Ask to see examples of the actual backdrop you'll
              be getting.
            </li>
            <li>
              <strong>Not asking what happens when things go wrong</strong> —
              Equipment fails occasionally. A professional vendor has backup
              plans. If a vendor can't explain their contingency process, that's
              a red flag.
            </li>
          </ol>

          <h2 id="booking-timeline">Booking Timeline — How Far in Advance?</h2>
          <table>
            <thead>
              <tr>
                <th>Event Type</th>
                <th>Recommended Advance Booking</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Saturday wedding (spring/fall)</td>
                <td>6–12 months</td>
              </tr>
              <tr>
                <td>Saturday wedding (off-peak)</td>
                <td>3–6 months</td>
              </tr>
              <tr>
                <td>Quinceañera or Sweet 16</td>
                <td>3–6 months</td>
              </tr>
              <tr>
                <td>Corporate event</td>
                <td>4–8 weeks</td>
              </tr>
              <tr>
                <td>Nonprofit gala</td>
                <td>6–12 weeks</td>
              </tr>
              <tr>
                <td>Birthday party</td>
                <td>2–6 weeks</td>
              </tr>
              <tr>
                <td>Grand opening / brand activation</td>
                <td>2–4 weeks</td>
              </tr>
            </tbody>
          </table>
          <p>
            <em>
              Note: availability varies. The safest move is always to reach out
              as soon as your date and venue are confirmed.
            </em>
          </p>

          <h2 id="event-types">Event-Type Considerations</h2>
          <p>
            <strong>Weddings:</strong> Prioritize print quality, guestbook
            option, attendant professionalism, and print design. The photo is a
            keepsake — it needs to be beautiful.
          </p>
          <p>
            <strong>Corporate events:</strong> Prioritize throughput (guests per
            hour), branding options, COI insurance, and lead-capture capability.
            The experience needs to feel professional, not just fun.
          </p>
          <p>
            <strong>Quinceañeras and Sweet 16s:</strong> Custom print overlay
            with the honoree's name is essential. Large family groups are common
            — confirm the booth handles 6–8 people per shot. Evening lighting
            and a premium presentation matter.
          </p>
          <p>
            <strong>Nonprofit galas:</strong> Budget matters, but don't
            compromise on attendant quality. These events often have VIP donors
            who notice when something feels cheap.
          </p>
          <p>
            <strong>Brand activations and grand openings:</strong> Speed and
            social sharing are priorities. Digital-only delivery with instant
            social share is usually more valuable than prints.
          </p>

          <h2 id="faq">FAQ</h2>
          <details style={{ marginBottom: "16px" }}>
            <summary
              style={{
                fontWeight: 600,
                fontSize: "17px",
                cursor: "pointer",
                padding: "16px",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              How do I know if a photo booth vendor is legitimate?
            </summary>
            <p style={{ padding: "16px", margin: 0 }}>
              Look for a verifiable web presence, real Google reviews, clear
              communication, proof of liability insurance (COI), and a formal
              booking process with a clear contract.
            </p>
          </details>

          <details style={{ marginBottom: "16px" }}>
            <summary
              style={{
                fontWeight: 600,
                fontSize: "17px",
                cursor: "pointer",
                padding: "16px",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              Is a mirror booth worth the extra cost over a standard open-air
              booth?
            </summary>
            <p style={{ padding: "16px", margin: 0 }}>
              Yes, if the presentation and experience matter. A mirror booth is
              highly interactive, visually impressive, and elevates the
              aesthetic of luxury events like weddings and galas.
            </p>
          </details>

          <details style={{ marginBottom: "16px" }}>
            <summary
              style={{
                fontWeight: 600,
                fontSize: "17px",
                cursor: "pointer",
                padding: "16px",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              What if my event venue doesn't have strong WiFi?
            </summary>
            <p style={{ padding: "16px", margin: 0 }}>
              A professional vendor will have offline queuing capabilities.
              Photos and data will be stored securely on the device and sent
              automatically as soon as an internet connection is restored.
            </p>
          </details>

          <details style={{ marginBottom: "16px" }}>
            <summary
              style={{
                fontWeight: 600,
                fontSize: "17px",
                cursor: "pointer",
                padding: "16px",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              Can I rent a photo booth for an outdoor event in Atlanta?
            </summary>
            <p style={{ padding: "16px", margin: 0 }}>
              Yes, but it requires planning. Electronic equipment needs full
              shade (no direct sunlight), a solid level surface, protection from
              rain/wind, and a reliable power source.
            </p>
          </details>

          <details style={{ marginBottom: "16px" }}>
            <summary
              style={{
                fontWeight: 600,
                fontSize: "17px",
                cursor: "pointer",
                padding: "16px",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              What's the difference between a photo booth rental and a photo
              booth service?
            </summary>
            <p style={{ padding: "16px", margin: 0 }}>
              A "rental" often implies a drop-off equipment delivery where you
              manage it. A "service" includes an attendant who handles the
              setup, manages the guest experience, troubleshoots, and packs up
              at the end.
            </p>
          </details>

          <div className="cta-section">
            <h2>Ready to Book a Photo Booth for Your Atlanta Event?</h2>
            <p>
              Tell us about your event and we'll confirm availability, recommend
              the right setup, and prepare a custom quote.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                className="button"
                href="/#quote"
                style={{
                  background: "#fff",
                  color: "#111",
                  padding: "16px 32px",
                  borderRadius: "50px",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Check My Date →
              </a>
            </div>
            <div style={{ marginTop: "24px" }}>
              <a
                href="/lead-capture"
                style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", textDecoration: "underline" }}
              >
                Or learn about our lead-capture feature for business events →
              </a>
            </div>
            <div className="trust-signals">
              <p style={{ marginBottom: "8px" }}>
                114+ Google reviews · 5.0 stars · Serving Metro Atlanta
              </p>
              <p>
                Call us: <a href="tel:813-214-8098" style={{ color: "#fff" }}>813-214-8098</a>
              </p>
            </div>
          </div>
        </article>
      </div>

      {/* Footer */}
      <footer>
        <div className="brand">
          <span>DEMM</span>
          <small>PHOTO BOOTHS • ATLANTA</small>
        </div>
        <p>
          More than pictures. We bring the energy, engagement, and professional
          experience that makes guests participate — and for business events,
          the tools to turn that participation into lasting connections.
        </p>
        <div
          style={{
            display: "flex",
            gap: "32px",
            flexWrap: "wrap",
            marginBottom: "12px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <strong
              style={{
                fontSize: "11px",
                letterSpacing: "0.1em",
                opacity: 0.5,
                textTransform: "uppercase",
              }}
            >
              Events
            </strong>
            <a href="/weddings">Weddings</a>
            <a href="/quinceaneras-sweet-16">Quinceañeras &amp; Sweet 16s</a>
            <a href="/corporate-events">Corporate &amp; Business Events</a>
            <a href="/celebrations">Birthday Parties</a>
            <a href="/lead-capture">Lead-Capture Photo Booth</a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <strong
              style={{
                fontSize: "11px",
                letterSpacing: "0.1em",
                opacity: 0.5,
                textTransform: "uppercase",
              }}
            >
              Resources
            </strong>
            <a href="/atlanta-photo-booth-guide">Atlanta Photo Booth Guide</a>
            <a href="#faq">FAQ</a>
            <a
              href="https://www.welcome2atlantaevents.com/find"
              target="_blank"
              rel="noopener noreferrer"
            >
              Find My Photos
            </a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/#quote">Book Now</a>
          </div>
        </div>
        <small>
          © 2026 DEMM Photo Booths Atlanta. All rights reserved. Serving Fulton,
          Cobb, Gwinnett, DeKalb &amp; Cherokee Counties.
        </small>
      </footer>
    </main>
  );
}
