import type { Metadata } from "next";
import AIEventConcierge from "../components/AIEventConcierge";
import GoogleReviewsTicker from "../components/GoogleReviewsTicker";

export const metadata: Metadata = {
  title: "Photo Booth Rental Sandy Springs GA | DEMM",
  description:
    "Luxury mirror photo booth rentals in Sandy Springs, GA. Perfect for corporate events, upscale weddings & galas near Buckhead. Serving all of North Fulton. Book today!",
  keywords: [
    "photo booth rental Sandy Springs GA",
    "Sandy Springs photo booth",
    "mirror photo booth Sandy Springs",
    "corporate photo booth Sandy Springs",
    "photo booth near Buckhead GA",
  ],
};

const sandySpringsFaqs = [
  [
    "Does DEMM Photo Booths serve corporate events in Sandy Springs and Perimeter Center?",
    "Yes, we are highly experienced in serving corporate events in Sandy Springs. With numerous Fortune 500 office parks along the GA-400 corridor and the Perimeter Center area, our premium mirror booths are a popular choice for corporate brand activations, holiday parties, and conferences.",
  ],
  [
    "What insurance coverage do you carry for Sandy Springs venue requirements?",
    "We understand that upscale venues and corporate events have strict requirements. We carry comprehensive $1M/$2M COI (Certificate of Insurance) coverage to meet the demands of premier venues in Sandy Springs and North Fulton County.",
  ],
  [
    "What wedding venues in Sandy Springs have you worked with?",
    "We frequently work with upscale venues in the area including The Estate Atlanta, Maggies Farm, and various luxury hotel ballrooms along Perimeter Center and near the Sandy Springs City Hall.",
  ],
  [
    "Can we customize the photo booth experience for a luxury corporate brand activation in Sandy Springs?",
    "Absolutely. We offer fully customized experiences, including branded photo overlays, custom start screens on the mirror booth, and digital sharing options that can highlight your corporate brand for maximum engagement and ROI.",
  ],
  [
    "Do you serve Dunwoody and Roswell in addition to Sandy Springs?",
    "Yes, we provide luxury photo booth rentals across all of North Fulton County, frequently serving events in neighboring Dunwoody, Roswell, and the broader Metro Atlanta area.",
  ],
];

export default function SandySpringsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Luxury Mirror Photo Booth Rental in Sandy Springs, GA",
    "provider": {
      "@type": "LocalBusiness",
      "name": "DEMM Photo Booths Atlanta",
      "telephone": "+1-813-214-8098",
      "url": "https://www.demmphotobooths.com/sandy-springs",
    },
    "areaServed": "Sandy Springs, GA, Dunwoody, Roswell, Perimeter Center, North Fulton County, Metro Atlanta",
    "description": "Luxury mirror photo booth rentals in Sandy Springs, GA. Perfect for corporate events, upscale weddings & galas near Buckhead.",
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
          <small>PHOTO BOOTHS • SANDY SPRINGS</small>
        </a>
        <nav aria-label="Sandy Springs navigation">
          <a href="/">Home</a>
          <a href="#experience">The Experience</a>
          <a href="/corporate">Corporate</a>
          <a href="/weddings">Weddings</a>
          <a href="https://www.welcome2atlantaevents.com/find" target="_blank" rel="noopener noreferrer">
            Find My Photos
          </a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="button small" href="#quote">
          Check Availability in Sandy Springs
        </a>
      </header>

      {/* Hero */}
      <section className="hero" id="top">
        <div className="orb one" />
        <div className="orb two" />
        <div className="hero-inner">
          <p className="eyebrow">NORTH FULTON'S PREMIER CHOICE</p>
          <h1>
            Luxury Mirror Photo Booth Rental in <em>Sandy Springs, GA.</em>
          </h1>
          <p className="lead">
            Elevate your corporate events, upscale weddings, and community galas near Buckhead with our premium mirror photo booth experience designed for Sandy Springs' sophisticated clientele.
          </p>
          <div className="actions">
            <a className="button" href="#quote">
              Check Availability in Sandy Springs
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
            <span>$1M/$2M COI Insurance</span>
            <span>Corporate Brand Activations</span>
            <span>Upscale Wedding Experts</span>
            <span>White-Glove Service</span>
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
            YOUR SANDY SPRINGS EVENT.<br />
            <b>BEAUTIFULLY CAPTURED.</b>
          </p>
        </div>
      </section>

      {/* Social Proof */}
      <GoogleReviewsTicker />

      <section className="proof">
        <span>5.0 Star Rated Luxury Entertainment</span>
        <span>Trusted by Fortune 500 Companies & Planners</span>
        <span>Serving The Estate Atlanta & Perimeter Center</span>
      </section>

      {/* Split Experience */}
      <section className="section split" id="experience">
        <div>
          <p className="eyebrow">THE SANDY SPRINGS EXPERIENCE</p>
          <h2>
            Refined Entertainment for <em>Upscale Events.</em>
          </h2>
        </div>
        <div>
          <p className="large">
            Whether you are hosting a high-profile corporate gala along the GA-400 corridor or an elegant wedding at The Estate Atlanta, our luxury photo booth aligns perfectly with your high standards.
          </p>
          <ul className="checks">
            <li>Floor-to-ceiling interactive Magic Mirror design</li>
            <li>Studio-grade DSLR photos with flattering beauty lighting</li>
            <li>Customized print layouts matching your brand or wedding theme</li>
            <li>Instant SMS/Email photo sharing for your guests</li>
            <li>Fully insured with $1M/$2M COI for venue compliance</li>
            <li>Dressed-for-the-occasion professional on-site attendant</li>
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="process" id="process">
        <div className="section-title">
          <p className="eyebrow">4 EASY STEPS</p>
          <h2>
            Booking Your Sandy Springs Booth <em>Made Simple.</em>
          </h2>
        </div>
        <div className="steps">
          {[
            ["01", "Share Your Event Details", "Tell us your date, venue (e.g., Perimeter Center), and vision."],
            ["02", "Receive Custom Recommendation", "We provide a tailored package matching your corporate or wedding needs."],
            ["03", "Design Your Print Template", "Our team creates custom branding or monograms for your prints."],
            ["04", "Execute Flawlessly", "Enjoy a seamless, fully-insured luxury experience at your event."],
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
        <p className="eyebrow">NORTH FULTON COVERAGE</p>
        <h2>
          Serving Events Across <em>Sandy Springs & Beyond.</em>
        </h2>
        <p>
          Sandy Springs • Perimeter Center • The Estate Atlanta • GA-400 Corridor • Dunwoody • Roswell • Buckhead • Alpharetta • Metro Atlanta
        </p>
      </section>

      {/* Interactive AI Concierge Quote Form */}
      <section className="quote" id="quote">
        <div className="quote-copy">
          <p className="eyebrow">PLAN YOUR SANDY SPRINGS EVENT</p>
          <h2>
            Check Availability in <em>Sandy Springs.</em>
          </h2>
          <p className="large">
            Answer a few quick questions to receive a custom proposal for your North Fulton event.
          </p>
          <div className="promise">
            <b>No Public Pricing Lists.</b>
            <span>Every corporate or wedding package is custom-tailored to your specific needs.</span>
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "center", width: "100%" }}>
          <AIEventConcierge />
        </div>
      </section>

      {/* FAQs */}
      <section className="faq" id="faq">
        <div>
          <p className="eyebrow">SANDY SPRINGS EVENT FAQs</p>
          <h2>
            Everything You Need <em>To Know.</em>
          </h2>
        </div>
        <div>
          {sandySpringsFaqs.map((f, i) => (
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
          <small>PHOTO BOOTHS • SANDY SPRINGS</small>
        </div>
        <p>
          More than pictures. We bring luxury entertainment to the most sophisticated events in Sandy Springs.
        </p>
        <div>
          <a href="/">Home</a>
          <a href="/corporate">Corporate</a>
          <a href="/weddings">Weddings</a>
          <a href="#faq">FAQ</a>
        </div>
        <small>© 2026 DEMM Photo Booths Atlanta. All rights reserved. • Photo Booth Rental Sandy Springs GA</small>
      </footer>
      <a className="mobile-cta" href="#quote">
        Check Availability in Sandy Springs
      </a>
    </main>
  );
}
