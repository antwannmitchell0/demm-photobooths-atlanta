"use client";

import { FormEvent, useState } from "react";
import AIEventConcierge from "./components/AIEventConcierge";
import GoogleReviewsTicker from "./components/GoogleReviewsTicker";

const events = [
  ["Weddings", "An elegant, interactive experience—and a keepsake from the celebration.", "/weddings"],
  ["Birthdays & Celebrations", "Bring the fun, capture the personalities, and keep every guest engaged.", "/celebrations"],
  ["Corporate & Brand Events", "Custom branding, professional setup, and optional guest-registration for business events.", "/corporate-events"],
  ["Quinceañeras & Sweet 16s", "A milestone deserves a luxury experience. Custom prints, warm hosting, bilingual attendant available.", "/quinceaneras-sweet-16"],
  ["Galas & Community Events", "Help guests connect, celebrate, and leave with a memory from the mission.", "/corporate-events"],
];

const faqs = [
  ["What is included with the DEMM Photo Booth Experience?", "Every event is customized. Your recommendation can include professional photo capture, flattering lighting, a custom photo design, instant digital sharing, an on-site attendant, and complete setup and breakdown. Prints, backdrops, props, and premium enhancements are available based on your event."],
  ["How far in advance should I reserve my date?", "The earlier you inquire, the better—especially for weekends and popular event seasons. Send your date and we'll confirm current availability without using false pressure or made-up deadlines."],
  ["Do you provide prints?", "Yes. Print options are available, or you can choose a digital experience. Tell us what you have in mind and we'll recommend the best fit."],
  ["Can the photo design match my event theme or company branding?", "Yes. We can customize the photo design to coordinate with your colors, theme, logo, or event identity."],
  ["How much space and power does the booth require?", "Requirements depend on the selected setup and venue. We'll confirm the space, power, access, and placement details before your event."],
  ["Does DEMM handle setup and breakdown?", "Yes. DEMM handles delivery, setup, operation, and breakdown so you can stay present with your guests."],
  ["How quickly do guests receive their photos?", "Guests can receive and share digital photos during the event, subject to venue connectivity. Print timing depends on the experience selected."],
  ["Can DEMM collect guest contact information at my event?", "Yes — for qualifying corporate and business events, DEMM offers an optional guest-registration feature. Guests voluntarily choose to share their contact information after receiving their photos. This is always a separate, clearly labeled opt-in — never automatic or hidden. Learn more on our lead-capture page."],
  ["Do you serve locations outside Atlanta?", "Yes, travel may be available throughout Metro Atlanta and surrounding communities. Any travel considerations are confirmed in your custom quote."],
  ["How is my custom quote calculated?", "Every event is different. Your quote is based on the event date, location, service time, guest count, print needs, customization, and selected enhancements."],
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); setLoading(true);
    window.setTimeout(() => { setLoading(false); setSubmitted(true); }, 700);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DEMM Photo Booths",
    "description": "Luxury mirror photo booth rentals for weddings, corporate events, quinceañeras, birthdays, and brand activations across Metro Atlanta, Georgia.",
    "telephone": "+1-813-214-8098",
    "url": "https://www.demmphotobooths.com",
    "areaServed": [
      "Atlanta, GA", "Buckhead", "Midtown Atlanta", "Alpharetta, GA",
      "Marietta, GA", "Sandy Springs, GA", "Duluth, GA", "Norcross, GA",
      "Roswell, GA", "Decatur, GA", "Smyrna, GA", "Kennesaw, GA",
      "Lawrenceville, GA", "Johns Creek, GA", "Metro Atlanta", "Fulton County",
      "Cobb County", "Gwinnett County", "DeKalb County"
    ],
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "115"
    }
  };

  return <main>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />

    <header className="nav"><a className="brand" href="#top"><span>DEMM</span><small>PHOTO BOOTHS • ATLANTA</small></a><nav aria-label="Main navigation"><a href="/weddings">Weddings</a><a href="/quinceaneras-sweet-16">Quinceañeras</a><a href="/corporate-events">Corporate</a><a href="/celebrations">Parties</a><a href="/lead-capture" style={{fontWeight:700}}>Lead Capture ✦</a><a href="https://www.welcome2atlantaevents.com/find" target="_blank" rel="noopener noreferrer">Find My Photos</a><a href="#faq">FAQ</a></nav><a className="button small" href="#quote">Check My Date</a></header>

    <section className="hero" id="top"><div className="orb one"/><div className="orb two"/><div className="hero-inner"><p className="eyebrow">ATLANTA <i/> METRO ATLANTA</p><h1>Atlanta Events Deserve More Than an <em>Ordinary</em> Photo Booth.</h1><p className="lead">Professional photos, custom event design, instant sharing, and the energy that gets your guests involved—all handled from setup to breakdown.</p><div className="actions"><a className="button" href="#quote">Check My Date &amp; Get a Custom Quote</a><a className="button secondary" href="https://www.welcome2atlantaevents.com/find" target="_blank" rel="noopener noreferrer" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.25)", color: "#fff", marginLeft: "12px" }}>Find My Photos ↗</a></div><div className="trust"><span>Professional Attendant</span><span>Custom Event Design</span><span>Instant Sharing</span><span>Optional Lead Capture</span><span>Complete Setup &amp; Breakdown</span></div></div><div className="hero-card" aria-hidden="true"><div className="flash">✦</div><div className="photo" style={{ backgroundImage: "url('/images/hero-energy.png')", backgroundSize: "cover", backgroundPosition: "center" }} /><p>YOUR MOMENT.<br/><b>BEAUTIFULLY CAPTURED.</b></p></div></div></section>

    <GoogleReviewsTicker />

    <section className="proof"><span>Elevated Guest Experiences</span><span>Professionally Hosted</span><span>115+ Google Reviews · 5.0 ★</span><span>Serving Metro Atlanta</span></section>

    <section className="section split" id="experience"><div><p className="eyebrow">THE DEMM EXPERIENCE</p><h2>We Don't Just Set Up a Booth. <em>We Bring the Energy.</em></h2></div><div><p className="large">Your event deserves more than equipment placed in a corner. DEMM creates an interactive photo experience that invites guests in, keeps the energy moving, and gives everyone something worth sharing and remembering.</p><ul className="checks"><li>Professional on-site attendant</li><li>High-quality photo capture and flattering lighting</li><li>Custom event-branded photo design</li><li>Instant digital sharing via text or email</li><li>Delivery, setup, operation, and breakdown</li><li>Optional prints, backdrops, props, and premium enhancements</li><li>Optional guest-registration for qualifying business events</li></ul></div></section>

    {/* Lead Capture Feature Callout */}
    <section style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)", padding: "80px 24px", textAlign: "center" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#a78bfa", textTransform: "uppercase", marginBottom: "16px", fontWeight: 700 }}>FOR BUSINESS EVENTS</p>
        <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: "#fff", margin: "0 0 20px", lineHeight: 1.2 }}>
          The Booth That Helps You <em style={{ color: "#c084fc" }}>Build Your Guest List.</em>
        </h2>
        <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.75)", maxWidth: "600px", margin: "0 auto 16px", lineHeight: 1.7 }}>
          At corporate events, networking events, grand openings, and brand activations, DEMM offers an optional guest-registration feature. Guests enjoy the photo booth experience, receive their photos — and if they choose, voluntarily share their contact information with you.
        </p>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", maxWidth: "560px", margin: "0 auto 36px" }}>
          Sharing information is always voluntary and clearly disclosed. Every guest receives their photos regardless of whether they opt in.
        </p>
        <a href="/lead-capture" style={{ display: "inline-block", background: "linear-gradient(135deg, #7c3aed, #a855f7)", color: "#fff", padding: "16px 36px", borderRadius: "50px", fontWeight: 700, fontSize: "16px", textDecoration: "none", boxShadow: "0 8px 32px rgba(124,58,237,0.4)" }}>
          Learn How Lead Capture Works →
        </a>
      </div>
    </section>

    <section className="gallery-section" id="gallery"><div className="section-title"><p className="eyebrow">SEE IT. FEEL IT.</p><h2>What the DEMM Experience <em>Feels Like.</em></h2><p>Real guest energy. Polished photos. A professional host keeping the moment moving.</p></div><div className="gallery"><div className="tile t1"><b>01</b><span>Guest reactions</span></div><div className="tile t2"><b>02</b><span>Branded moments</span></div><div className="tile t3"><b>03</b><span>Share-worthy photos</span></div><div className="tile t4"><b>04</b><span>Premium presentation</span></div></div><div style={{ textAlign: "center", marginTop: "32px" }}><a className="button" href="https://www.welcome2atlantaevents.com/find" target="_blank" rel="noopener noreferrer">Access Guest Event Gallery &amp; Find My Photos ↗</a></div></section>

    <section className="section" id="events"><div className="section-title left"><p className="eyebrow">FOR EVERY CELEBRATION</p><h2>Built for the Moments <em>Atlanta Celebrates.</em></h2></div><div className="event-grid">{events.map((e,i)=><article key={e[0]}><span>0{i+1}</span><h3>{e[0]}</h3><p>{e[1]}</p><a href={e[2]}>Plan your experience →</a></article>)}</div></section>

    <section className="host"><div className="host-visual" style={{ backgroundImage: "url('/images/mirror-booth..png')", backgroundSize: "cover", backgroundPosition: "center" }}><span>PROFESSIONAL PRESENCE</span></div><div><p className="eyebrow">WHY DEMM</p><h2>The Booth Matters. <em>The Person Running It Matters More.</em></h2><p className="large">A strong photo booth experience depends on more than a camera. DEMM brings professionalism, presence, and the ability to make guests feel comfortable enough to participate.</p><p>We manage the details so you can stay present and enjoy the event.</p><a className="button" href="#quote">Tell Us About Your Event</a></div></section>

    <section className="process" id="process"><div className="section-title"><p className="eyebrow">SIMPLE FROM START TO FINISH</p><h2>Your Event. <em>Handled.</em></h2></div><div className="steps">{[["01","Tell us about your event","Share the date, location, event type, and your vision."],["02","Receive your recommendation","We confirm availability and prepare the right custom quote."],["03","Secure your date","Approve your quote and complete the required retainer."],["04","Enjoy the experience","We handle setup, guest engagement, operation, and breakdown."]].map(x=><article key={x[0]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></section>

    <section className="area"><p className="eyebrow">LOCAL SERVICE • PROFESSIONAL EXPERIENCE</p><h2>Serving Atlanta and <em>Metro Atlanta Events.</em></h2><p>Atlanta • Buckhead • Midtown • <a href="/alpharetta" style={{color:"inherit"}}>Alpharetta</a> • <a href="/marietta" style={{color:"inherit"}}>Marietta</a> • <a href="/sandy-springs" style={{color:"inherit"}}>Sandy Springs</a> • <a href="/duluth" style={{color:"inherit"}}>Duluth</a> • <a href="/norcross" style={{color:"inherit"}}>Norcross</a> • Roswell • Decatur • Smyrna • Kennesaw • Lawrenceville • Johns Creek • and all of Metro Atlanta</p><small>Travel availability and any applicable fees are confirmed through your custom quote.</small></section>

    <section className="quote" id="quote"><div className="quote-copy"><p className="eyebrow">LET'S CREATE THE MOMENT</p><h2>Tell Us About Your <em>Atlanta Event.</em></h2><p className="large">Share a few details and we'll confirm availability, recommend the right experience, and prepare your custom quote.</p><div className="promise"><b>No public package pricing.</b><span>Your recommendation is built around your actual event.</span></div></div><div style={{ flex: 1, display: "flex", justifyContent: "center", width: "100%" }}><AIEventConcierge /></div></section>

    <section className="faq" id="faq"><div><p className="eyebrow">GOOD TO KNOW</p><h2>Frequently Asked <em>Questions.</em></h2></div><div>{faqs.map((f,i)=><details key={f[0]} open={i===0}><summary>{f[0]}<span>+</span></summary><p>{f[1]}</p></details>)}</div></section>

    <footer>
      <div className="brand"><span>DEMM</span><small>PHOTO BOOTHS • ATLANTA</small></div>
      <p>More than pictures. We bring the energy, engagement, and professional experience that makes guests participate — and for business events, the tools to turn that participation into lasting connections.</p>
      <div style={{display:"flex",gap:"32px",flexWrap:"wrap",marginBottom:"12px"}}>
        <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
          <strong style={{fontSize:"11px",letterSpacing:"0.1em",opacity:0.5,textTransform:"uppercase"}}>Events</strong>
          <a href="/weddings">Weddings</a>
          <a href="/quinceaneras-sweet-16">Quinceañeras &amp; Sweet 16s</a>
          <a href="/corporate-events">Corporate &amp; Business Events</a>
          <a href="/celebrations">Birthday Parties</a>
          <a href="/lead-capture">Lead-Capture Photo Booth</a>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
          <strong style={{fontSize:"11px",letterSpacing:"0.1em",opacity:0.5,textTransform:"uppercase"}}>Cities We Serve</strong>
          <a href="/alpharetta">Alpharetta</a>
          <a href="/marietta">Marietta</a>
          <a href="/sandy-springs">Sandy Springs</a>
          <a href="/duluth">Duluth</a>
          <a href="/norcross">Norcross</a>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
          <strong style={{fontSize:"11px",letterSpacing:"0.1em",opacity:0.5,textTransform:"uppercase"}}>Resources</strong>
          <a href="#faq">FAQ</a>
          <a href="https://www.welcome2atlantaevents.com/find" target="_blank" rel="noopener noreferrer">Find My Photos</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="#quote">Book Now</a>
        </div>
      </div>
      <small>© 2026 DEMM Photo Booths Atlanta. All rights reserved. Serving Fulton, Cobb, Gwinnett, DeKalb &amp; Cherokee Counties.</small>
    </footer>
    <a className="mobile-cta" href="#quote">Check My Date</a>
  </main>;
}
