import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | DEMM Photo Booths Atlanta",
  description:
    "How DEMM Photo Booths collects, uses, stores, and protects information from guests, event hosts, and website visitors.",
};

export default function PrivacyPolicy() {
  const lastUpdated = "July 2025";

  return (
    <main style={{ maxWidth: "780px", margin: "0 auto", padding: "80px 24px 120px", fontFamily: "var(--font, system-ui, sans-serif)", color: "#1a1a2e", lineHeight: 1.75 }}>

      <header style={{ marginBottom: "48px" }}>
        <a href="/" style={{ display: "inline-block", marginBottom: "32px", color: "#6b46c1", textDecoration: "none", fontWeight: 600, fontSize: "14px", letterSpacing: "0.05em" }}>
          ← Back to DEMM Photo Booths
        </a>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 800, margin: "0 0 12px", lineHeight: 1.2 }}>
          Privacy Policy
        </h1>
        <p style={{ color: "#666", fontSize: "15px", margin: 0 }}>
          Last updated: {lastUpdated}
        </p>
      </header>

      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: 700, margin: "0 0 16px" }}>Who We Are</h2>
        <p>
          DEMM Photo Booths is a photo booth rental and event photography service operating
          throughout Metro Atlanta, Georgia. We are a service-area business — we travel to
          event venues and do not operate a public storefront. We can be reached at{" "}
          <a href="tel:+18132148098" style={{ color: "#6b46c1" }}>813-214-8098</a> or through the
          contact form at{" "}
          <a href="/" style={{ color: "#6b46c1" }}>demmphotobooths.com</a>.
        </p>
      </section>

      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: 700, margin: "0 0 16px" }}>Information We Collect</h2>

        <h3 style={{ fontSize: "17px", fontWeight: 700, margin: "24px 0 8px" }}>1. Website Visitors</h3>
        <p>
          When you visit our website, we may collect standard web analytics data such as pages
          viewed, time on site, device type, and general geographic region. This data is collected
          in aggregate and is not used to identify individual visitors. We use Google Analytics
          to understand how visitors use our site. You can opt out of Google Analytics
          tracking using{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: "#6b46c1" }}>
            Google's opt-out browser add-on
          </a>.
        </p>

        <h3 style={{ fontSize: "17px", fontWeight: 700, margin: "24px 0 8px" }}>2. Inquiry and Quote Forms</h3>
        <p>
          When you submit an inquiry form on our website, we collect your name, email address,
          phone number, event date, event type, and any details you choose to include. This
          information is used solely to respond to your inquiry and prepare a quote. We do not
          sell this information or add you to marketing lists without your explicit permission.
        </p>

        <h3 style={{ fontSize: "17px", fontWeight: 700, margin: "24px 0 8px" }}>3. Event Guests — Photo Booth Interactions</h3>
        <p>
          When you interact with a DEMM Photo Booth at an event, here is how your information
          may be handled:
        </p>
        <ul style={{ paddingLeft: "24px", marginTop: "12px" }}>
          <li style={{ marginBottom: "12px" }}>
            <strong>Photo delivery contact (email or phone):</strong> If you choose to receive
            your photos digitally, you will be asked to provide an email address or phone number.
            This is used only to deliver your photos. DEMM retains this contact information for
            up to 90 days after the event and then deletes it, unless you have separately
            consented to additional contact.
          </li>
          <li style={{ marginBottom: "12px" }}>
            <strong>Optional event-host contact list:</strong> At some events, the event host
            may choose to enable an optional guest registration feature. If this feature is
            active, you will see a clearly labeled, opt-in prompt on the booth screen asking
            whether you would like to share your information with the event host. This is
            always voluntary. You can receive your photos without opting in. The prompt will
            clearly identify the event host by name, describe how they may use your information,
            and include a link to this privacy policy.
          </li>
          <li style={{ marginBottom: "12px" }}>
            <strong>Photographs:</strong> Photos taken at the booth are stored temporarily to
            enable delivery and gallery access. DEMM may retain anonymized or watermarked
            example images for portfolio and marketing purposes. If you do not want your image
            used in DEMM's marketing materials, please inform the booth attendant at the time
            of your session.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: 700, margin: "0 0 16px" }}>Consent</h2>
        <p>
          DEMM does not add event guests to any promotional email or SMS list without explicit,
          clearly stated consent. Pre-checked consent boxes are not used. Consent is always a
          separate, voluntary action from receiving your photos.
        </p>
        <p>
          Event hosts who use our guest-registration feature are responsible for using collected
          contact information in accordance with applicable law, including CAN-SPAM, TCPA, and
          any state privacy laws. DEMM provides the collection mechanism; the event host is the
          data controller for information guests choose to share with them.
        </p>
      </section>

      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: 700, margin: "0 0 16px" }}>How We Use Your Information</h2>
        <ul style={{ paddingLeft: "24px" }}>
          <li style={{ marginBottom: "10px" }}>To respond to inquiries and provide quotes</li>
          <li style={{ marginBottom: "10px" }}>To deliver event photos to guests who request digital delivery</li>
          <li style={{ marginBottom: "10px" }}>To provide the guest-registration feature at events where it has been configured by the host</li>
          <li style={{ marginBottom: "10px" }}>To fulfill our contractual obligations with event clients</li>
          <li style={{ marginBottom: "10px" }}>To improve our website and services using aggregated, non-identifying analytics</li>
        </ul>
        <p>
          We do not sell, rent, or share your personal information with third parties for their
          marketing purposes.
        </p>
      </section>

      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: 700, margin: "0 0 16px" }}>Data Retention</h2>
        <ul style={{ paddingLeft: "24px" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>Guest photo-delivery contacts:</strong> Deleted within 90 days after the event, unless you have provided additional consent.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Event inquiry records:</strong> Retained for up to 2 years for business records purposes, then deleted.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Signed contracts and payment records:</strong> Retained for 7 years per standard business record requirements.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Event host guest-registration data:</strong> Delivered to the event host within 48 hours of the event and deleted from DEMM's systems within 30 days.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: 700, margin: "0 0 16px" }}>Your Rights</h2>
        <p>You have the right to:</p>
        <ul style={{ paddingLeft: "24px" }}>
          <li style={{ marginBottom: "10px" }}>Request a copy of any personal information DEMM holds about you</li>
          <li style={{ marginBottom: "10px" }}>Request correction of inaccurate information</li>
          <li style={{ marginBottom: "10px" }}>Request deletion of your information</li>
          <li style={{ marginBottom: "10px" }}>Opt out of any DEMM marketing communications at any time</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{" "}
          <a href="tel:+18132148098" style={{ color: "#6b46c1" }}>813-214-8098</a> or through
          our website contact form. We will respond within 30 days. If you shared your
          information with an event host through our guest-registration feature, please contact
          that event host directly regarding their use of your information.
        </p>
      </section>

      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: 700, margin: "0 0 16px" }}>Security</h2>
        <p>
          We take reasonable technical and organizational measures to protect the personal
          information we hold. Photo delivery links are unique and time-limited. Guest
          registration data is transmitted over encrypted connections and stored in access-controlled
          systems. No internet transmission is 100% secure, and we cannot guarantee absolute
          security.
        </p>
      </section>

      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: 700, margin: "0 0 16px" }}>Third-Party Services</h2>
        <p>
          Our website uses Google Analytics for visitor analytics and may use third-party form
          or CRM services to manage inquiries. These services have their own privacy policies.
          Our photo delivery system uses SMS and email delivery infrastructure provided by
          third-party platforms that process contact information on our behalf under appropriate
          data-processing agreements.
        </p>
      </section>

      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: 700, margin: "0 0 16px" }}>Children's Privacy</h2>
        <p>
          Our services are directed at adults planning events. We do not knowingly collect
          personal information from children under 13 through our website. At events where
          minors participate in the photo booth experience, photos are delivered to the address
          provided by the event host or the attending adult, not collected separately from the
          minor.
        </p>
      </section>

      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: 700, margin: "0 0 16px" }}>Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. When we do, we will update the
          "last updated" date at the top of this page. If changes are material, we will make
          reasonable efforts to notify active clients. Continued use of our services after
          changes constitutes acceptance of the updated policy.
        </p>
      </section>

      <section style={{ marginBottom: "48px", padding: "32px", background: "#f8f5ff", borderRadius: "16px", border: "1px solid #e9d8fd" }}>
        <h2 style={{ fontSize: "22px", fontWeight: 700, margin: "0 0 16px" }}>Contact Us</h2>
        <p style={{ margin: "0 0 8px" }}>
          For questions about this privacy policy or your personal information:
        </p>
        <p style={{ margin: "0 0 4px" }}><strong>DEMM Photo Booths</strong></p>
        <p style={{ margin: "0 0 4px" }}>Metro Atlanta, Georgia (Service-Area Business)</p>
        <p style={{ margin: "0 0 4px" }}>
          Phone:{" "}
          <a href="tel:+18132148098" style={{ color: "#6b46c1" }}>813-214-8098</a>
        </p>
        <p style={{ margin: 0 }}>
          Website:{" "}
          <a href="/" style={{ color: "#6b46c1" }}>demmphotobooths.com</a>
        </p>
      </section>

    </main>
  );
}
