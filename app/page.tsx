"use client";

import { FormEvent, useState } from "react";
import AIEventConcierge from "./components/AIEventConcierge";
import GoogleReviewsTicker from "./components/GoogleReviewsTicker";

const events = [
  ["Weddings", "An elegant, interactive experience—and a keepsake from the celebration."],
  ["Birthdays & Private Events", "Bring the fun, capture the personalities, and keep every guest engaged."],
  ["Corporate & Brand Events", "Custom branding and a polished experience for company celebrations and activations."],
  ["Proms & School Events", "A high-participation experience with organized, professional support."],
  ["Galas & Community Events", "Help guests connect, celebrate, and leave with a memory from the mission."],
];

const faqs = [
  ["What is included with the DEMM Photo Booth Experience?", "Every event is customized. Your recommendation can include professional photo capture, flattering lighting, a custom photo design, instant digital sharing, an on-site attendant, and complete setup and breakdown. Prints, backdrops, props, and premium enhancements are available based on your event."],
  ["How far in advance should I reserve my date?", "The earlier you inquire, the better—especially for weekends and popular event seasons. Send your date and we’ll confirm current availability without using false pressure or made-up deadlines."],
  ["Do you provide prints?", "Yes. Print options are available, or you can choose a digital experience. Tell us what you have in mind and we’ll recommend the best fit."],
  ["Can the photo design match my event theme or company branding?", "Yes. We can customize the photo design to coordinate with your colors, theme, logo, or event identity."],
  ["How much space and power does the booth require?", "Requirements depend on the selected setup and venue. We’ll confirm the space, power, access, and placement details before your event."],
  ["Does DEMM handle setup and breakdown?", "Yes. DEMM handles delivery, setup, operation, and breakdown so you can stay present with your guests."],
  ["How quickly do guests receive their photos?", "Guests can receive and share digital photos during the event, subject to venue connectivity. Print timing depends on the experience selected."],
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

  return <main>
    <header className="nav"><a className="brand" href="#top"><span>DEMM</span><small>PHOTO BOOTHS • ATLANTA</small></a><nav aria-label="Main navigation"><a href="#experience">Experience</a><a href="https://www.welcome2atlantaevents.com/find" target="_blank" rel="noopener noreferrer">Find My Photos</a><a href="#gallery">Gallery</a><a href="#events">Events</a><a href="#process">How It Works</a><a href="#faq">FAQ</a></nav><a className="button small" href="#quote">Check My Date</a></header>

    <section className="hero" id="top"><div className="orb one"/><div className="orb two"/><div className="hero-inner"><p className="eyebrow">ATLANTA <i/> METRO ATLANTA</p><h1>Atlanta Events Deserve More Than an <em>Ordinary</em> Photo Booth.</h1><p className="lead">Professional photos, custom event design, instant sharing, and the energy that gets your guests involved—all handled from setup to breakdown.</p><div className="actions"><a className="button" href="#quote">Check My Date & Get a Custom Quote</a><a className="button secondary" href="https://www.welcome2atlantaevents.com/find" target="_blank" rel="noopener noreferrer" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.25)", color: "#fff", marginLeft: "12px" }}>Find My Photos ↗</a></div><div className="trust"><span>Professional Attendant</span><span>Custom Event Design</span><span>Instant Sharing</span><span>Complete Setup & Breakdown</span></div></div><div className="hero-card" aria-hidden="true"><div className="flash">✦</div><div className="photo" style={{ backgroundImage: "url('/images/hero-energy.png')", backgroundSize: "cover", backgroundPosition: "center" }} /><p>YOUR MOMENT.<br/><b>BEAUTIFULLY CAPTURED.</b></p></div></section>

    <GoogleReviewsTicker />

    <section className="proof"><span>Elevated Guest Experiences</span><span>Professionally Hosted</span><span>Serving Atlanta & Metro Atlanta</span></section>

    <section className="section split" id="experience"><div><p className="eyebrow">THE DEMM EXPERIENCE</p><h2>We Don’t Just Set Up a Booth. <em>We Bring the Energy.</em></h2></div><div><p className="large">Your event deserves more than equipment placed in a corner. DEMM creates an interactive photo experience that invites guests in, keeps the energy moving, and gives everyone something worth sharing and remembering.</p><ul className="checks"><li>Professional on-site attendant</li><li>High-quality photo capture and flattering lighting</li><li>Custom event-branded photo design</li><li>Instant digital sharing</li><li>Delivery, setup, operation, and breakdown</li><li>Optional prints, backdrops, props, and premium enhancements</li></ul></div></section>

    <section className="gallery-section" id="gallery"><div className="section-title"><p className="eyebrow">SEE IT. FEEL IT.</p><h2>What the DEMM Experience <em>Feels Like.</em></h2><p>Real guest energy. Polished photos. A professional host keeping the moment moving.</p></div><div className="gallery"><div className="tile t1"><b>01</b><span>Guest reactions</span></div><div className="tile t2"><b>02</b><span>Branded moments</span></div><div className="tile t3"><b>03</b><span>Share-worthy photos</span></div><div className="tile t4"><b>04</b><span>Premium presentation</span></div></div><div style={{ textAlign: "center", marginTop: "32px" }}><a className="button" href="https://www.welcome2atlantaevents.com/find" target="_blank" rel="noopener noreferrer">Access Guest Event Gallery & Find My Photos ↗</a></div></section>

    <section className="section" id="events"><div className="section-title left"><p className="eyebrow">FOR EVERY CELEBRATION</p><h2>Built for the Moments <em>Atlanta Celebrates.</em></h2></div><div className="event-grid">{events.map((e,i)=><article key={e[0]}><span>0{i+1}</span><h3>{e[0]}</h3><p>{e[1]}</p><a href="#quote">Plan your experience →</a></article>)}</div></section>

    <section className="host"><div className="host-visual" style={{ backgroundImage: "url('/images/mirror-booth..png')", backgroundSize: "cover", backgroundPosition: "center" }}><span>PROFESSIONAL PRESENCE</span></div><div><p className="eyebrow">WHY DEMM</p><h2>The Booth Matters. <em>The Person Running It Matters More.</em></h2><p className="large">A strong photo booth experience depends on more than a camera. DEMM brings professionalism, presence, and the ability to make guests feel comfortable enough to participate.</p><p>We manage the details so you can stay present and enjoy the event.</p><a className="button" href="#quote">Tell Us About Your Event</a></div></section>

    <section className="process" id="process"><div className="section-title"><p className="eyebrow">SIMPLE FROM START TO FINISH</p><h2>Your Event. <em>Handled.</em></h2></div><div className="steps">{[["01","Tell us about your event","Share the date, location, event type, and your vision."],["02","Receive your recommendation","We confirm availability and prepare the right custom quote."],["03","Secure your date","Approve your quote and complete the required retainer."],["04","Enjoy the experience","We handle setup, guest engagement, operation, and breakdown."]].map(x=><article key={x[0]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></section>

    <section className="area"><p className="eyebrow">LOCAL SERVICE • PROFESSIONAL EXPERIENCE</p><h2>Serving Atlanta and <em>Metro Atlanta Events.</em></h2><p>Atlanta • Midtown • Downtown • Buckhead • Decatur • Sandy Springs • Marietta • Smyrna • College Park • East Point • Alpharetta • Roswell • and surrounding communities</p><small>Travel availability and any applicable fees are confirmed through your custom quote.</small></section>

    <section className="quote" id="quote"><div className="quote-copy"><p className="eyebrow">LET’S CREATE THE MOMENT</p><h2>Tell Us About Your <em>Atlanta Event.</em></h2><p className="large">Share a few details and we’ll confirm availability, recommend the right experience, and prepare your custom quote.</p><div className="promise"><b>No public package pricing.</b><span>Your recommendation is built around your actual event.</span></div></div><div style={{ flex: 1, display: "flex", justifyContent: "center", width: "100%" }}><AIEventConcierge /></div></section>

    <section className="faq" id="faq"><div><p className="eyebrow">GOOD TO KNOW</p><h2>Frequently Asked <em>Questions.</em></h2></div><div>{faqs.map((f,i)=><details key={f[0]} open={i===0}><summary>{f[0]}<span>+</span></summary><p>{f[1]}</p></details>)}</div></section>

    <footer><div className="brand"><span>DEMM</span><small>PHOTO BOOTHS • ATLANTA</small></div><p>More than pictures. We bring the energy, engagement, and professional experience that makes guests participate.</p><div><a href="#experience">Experience</a><a href="#events">Events</a><a href="#process">How It Works</a><a href="#faq">FAQ</a></div><small>© 2026 DEMM Photo Booths Atlanta. All rights reserved. • Privacy • Terms</small></footer>
    <a className="mobile-cta" href="#quote">Check My Date</a>
  </main>;
}
