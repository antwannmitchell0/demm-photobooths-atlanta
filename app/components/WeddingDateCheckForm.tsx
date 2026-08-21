"use client";

import React, { useState } from "react";

interface WeddingFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  weddingDate: string;
  venueCity: string;
  guestCount: string;
  packageInterest: string;
  buyingIntent: string;
}

export default function WeddingDateCheckForm() {
  const [formData, setFormData] = useState<WeddingFormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    weddingDate: "",
    venueCity: "",
    guestCount: "",
    packageInterest: "Photo Booth Machine — $549",
    buyingIntent: "Ready now if my date is available",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg("Please provide your name, phone number, and email address.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      // Fire Google Ads conversion tracking ONLY on genuine form submission
      if (typeof window !== "undefined") {
        const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
        if (typeof gtag === "function") {
          gtag("event", "conversion", {
            send_to: "AW-17515840387/TLX5CK6txOQcEIOHmqBB",
            value: 1.0,
            currency: "USD",
          });
        }
      }

      // Collect URL attribution parameters
      let gclid = "";
      let source = "";
      try {
        const params = new URLSearchParams(window.location.search);
        gclid = params.get("gclid") || sessionStorage.getItem("demm_gclid") || "";
        source = params.get("utm_source") || sessionStorage.getItem("demm_utm_source") || "google-ads-weddings";
        if (params.get("gclid")) sessionStorage.setItem("demm_gclid", params.get("gclid")!);
        if (params.get("utm_source")) sessionStorage.setItem("demm_utm_source", params.get("utm_source")!);
      } catch {
        // storage fallback
      }

      const payload = {
        name: `${formData.firstName.trim()} ${formData.lastName.trim()}`.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        eventType: "Wedding",
        date: formData.weddingDate,
        venue: formData.venueCity,
        guests: formData.guestCount,
        vision: `Package: ${formData.packageInterest} | Intent: ${formData.buyingIntent}`,
        source: source || "google-ads-weddings",
        gclid,
      };

      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg("There was a temporary problem submitting your request. Please try again or call us.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  if (status === "success") {
    return (
      <div
        style={{
          background: "linear-gradient(135deg, rgba(20, 20, 30, 0.95), rgba(30, 25, 45, 0.95))",
          border: "1px solid rgba(167, 139, 250, 0.4)",
          borderRadius: "16px",
          padding: "40px 30px",
          textAlign: "center",
          maxWidth: "540px",
          width: "100%",
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
        }}
      >
        <div style={{ fontSize: "48px", marginBottom: "16px" }}>🎉</div>
        <h3 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: "12px" }}>
          We Received Your Wedding Date Check!
        </h3>
        <p style={{ color: "#e2e8f0", fontSize: "1.05rem", lineHeight: "1.6", marginBottom: "20px" }}>
          Thank you, <strong>{formData.firstName}</strong>. We are checking availability for{" "}
          <strong>{formData.weddingDate || "your wedding date"}</strong> in{" "}
          <strong>{formData.venueCity || "Metro Atlanta"}</strong>.
        </p>
        <div
          style={{
            background: "rgba(167, 139, 250, 0.1)",
            border: "1px solid rgba(167, 139, 250, 0.2)",
            borderRadius: "12px",
            padding: "16px",
            marginBottom: "24px",
            textAlign: "left",
            fontSize: "0.95rem",
            color: "#cbd5e1",
          }}
        >
          <div><strong>Selected Package:</strong> {formData.packageInterest}</div>
          <div style={{ marginTop: "6px" }}><strong>Deposit to Lock Date:</strong> $200 (Applied toward total)</div>
        </div>
        <p style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
          Our team will reach out directly via call/text to confirm your date and answer any questions.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "linear-gradient(135deg, rgba(18, 18, 26, 0.95), rgba(28, 22, 40, 0.95))",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        borderRadius: "16px",
        padding: "32px 28px",
        maxWidth: "540px",
        width: "100%",
        boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "16px", marginBottom: "4px" }}>
        <h3 style={{ fontSize: "1.4rem", color: "#fff", margin: "0 0 6px 0" }}>
          Check Your Wedding Date Availability
        </h3>
        <p style={{ color: "#94a3b8", fontSize: "0.9rem", margin: 0 }}>
          Lock in your date with a $200 deposit applied directly to your package total.
        </p>
      </div>

      {errorMsg && (
        <div style={{ background: "rgba(239, 68, 68, 0.15)", border: "1px solid #ef4444", color: "#fca5a5", padding: "10px 14px", borderRadius: "8px", fontSize: "0.9rem" }}>
          {errorMsg}
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        <div>
          <label style={{ display: "block", color: "#cbd5e1", fontSize: "0.85rem", marginBottom: "6px" }}>First Name *</label>
          <input
            type="text"
            name="firstName"
            required
            placeholder="Jane"
            value={formData.firstName}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={{ display: "block", color: "#cbd5e1", fontSize: "0.85rem", marginBottom: "6px" }}>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Doe"
            value={formData.lastName}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        <div>
          <label style={{ display: "block", color: "#cbd5e1", fontSize: "0.85rem", marginBottom: "6px" }}>Phone Number *</label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="(404) 555-0199"
            value={formData.phone}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={{ display: "block", color: "#cbd5e1", fontSize: "0.85rem", marginBottom: "6px" }}>Email Address *</label>
          <input
            type="email"
            name="email"
            required
            placeholder="jane@example.com"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        <div>
          <label style={{ display: "block", color: "#cbd5e1", fontSize: "0.85rem", marginBottom: "6px" }}>Wedding Date *</label>
          <input
            type="date"
            name="weddingDate"
            required
            value={formData.weddingDate}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={{ display: "block", color: "#cbd5e1", fontSize: "0.85rem", marginBottom: "6px" }}>Wedding City / Venue</label>
          <input
            type="text"
            name="venueCity"
            placeholder="Atlanta, GA"
            value={formData.venueCity}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        <div>
          <label style={{ display: "block", color: "#cbd5e1", fontSize: "0.85rem", marginBottom: "6px" }}>Approximate Guest Count</label>
          <select name="guestCount" value={formData.guestCount} onChange={handleChange} style={inputStyle}>
            <option value="">Select guest count</option>
            <option value="Under 75">Under 75 guests</option>
            <option value="75 - 150">75 – 150 guests</option>
            <option value="150 - 250">150 – 250 guests</option>
            <option value="250+">250+ guests</option>
          </select>
        </div>
        <div>
          <label style={{ display: "block", color: "#cbd5e1", fontSize: "0.85rem", marginBottom: "6px" }}>Package Choice</label>
          <select name="packageInterest" value={formData.packageInterest} onChange={handleChange} style={inputStyle}>
            <option value="Photo Booth Machine — $549">Photo Booth Machine — $549</option>
            <option value="Photo Booth + Unlimited Prints — $749">Photo Booth + Unlimited Prints — $749</option>
            <option value="Not Sure Yet">Not Sure Yet</option>
          </select>
        </div>
      </div>

      <div>
        <label style={{ display: "block", color: "#cbd5e1", fontSize: "0.85rem", marginBottom: "6px" }}>Buying Intent</label>
        <select name="buyingIntent" value={formData.buyingIntent} onChange={handleChange} style={inputStyle}>
          <option value="Ready now if my date is available">Ready now if my date is available</option>
          <option value="Within 30 days">Within 30 days</option>
          <option value="Still researching">Still researching</option>
        </select>
      </div>

      <div style={{ background: "rgba(167, 139, 250, 0.08)", border: "1px solid rgba(167, 139, 250, 0.2)", borderRadius: "8px", padding: "12px", fontSize: "0.85rem", color: "#cbd5e1" }}>
        <strong>Deposit Note:</strong> A $200 deposit reserves your wedding date and is applied directly toward your total package ($349 remaining on base / $549 remaining with unlimited prints).
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        style={{
          background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
          color: "#fff",
          fontWeight: 600,
          fontSize: "1.05rem",
          padding: "14px 24px",
          borderRadius: "8px",
          border: "none",
          cursor: status === "submitting" ? "not-allowed" : "pointer",
          boxShadow: "0 4px 14px rgba(124, 58, 237, 0.4)",
          transition: "transform 0.15s ease",
          marginTop: "6px",
        }}
      >
        {status === "submitting" ? "Checking Availability..." : "CHECK YOUR WEDDING DATE"}
      </button>
    </form>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: "8px",
  border: "1px solid rgba(255, 255, 255, 0.15)",
  background: "rgba(0, 0, 0, 0.4)",
  color: "#fff",
  fontSize: "0.9rem",
  boxSizing: "border-box",
  outline: "none",
};
