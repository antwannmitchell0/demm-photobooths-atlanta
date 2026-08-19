import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

async function appendToLeadsSheet(row: string[]) {
  const saEmail = process.env.GOOGLE_SA_EMAIL;
  const saKey = process.env.GOOGLE_SA_PRIVATE_KEY;
  const sheetId = process.env.LEADS_SHEET_ID;
  if (!saEmail || !saKey || !sheetId) return;

  const now = Math.floor(Date.now() / 1000);
  const enc = (o: object) => Buffer.from(JSON.stringify(o)).toString("base64url");
  const unsigned = `${enc({ alg: "RS256", typ: "JWT" })}.${enc({
    iss: saEmail,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  })}`;
  const signature = crypto
    .createSign("RSA-SHA256")
    .update(unsigned)
    .sign(saKey.replace(/\\n/g, "\n"), "base64url");

  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${unsigned}.${signature}`,
  });
  const { access_token } = await tokenRes.json();
  if (!access_token) return;

  await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/A1:append?valueInputOption=RAW`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${access_token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ values: [row] }),
    }
  );
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, eventType, date, venue, guests, vision, source, gclid } = body;

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  const leadSource = gclid ? "google-ads" : source || "website";
  await appendToLeadsSheet([
    new Date().toISOString(),
    leadSource,
    name,
    phone || "",
    email,
    eventType || "",
    date || "",
    venue || "",
    guests || "",
    vision || "",
    gclid || "",
    "",
  ]).catch(() => {});

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    console.error("RESEND_API_KEY not set");
    return NextResponse.json({ ok: true }); // fail silently on frontend
  }

  const emailBody = `
New Quote Request — DEMM Photo Booths Atlanta

Name:       ${name}
Email:      ${email}
Phone:      ${phone || "Not provided"}
Event Type: ${eventType || "Not specified"}
Date:       ${date || "Not specified"}
Venue:      ${venue || "Not specified"}
Guests:     ${guests || "Not specified"}
Vision:     ${vision || "Not specified"}

Reply-To: ${email}
  `.trim();

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "DEMM Photo Booths <noreply@demmphotobooths.com>",
      to: ["bookings@demmphotobooths.com"],
      reply_to: email,
      subject: `New Quote Request — ${eventType || "Event"} on ${date || "TBD"} (${name})`,
      text: emailBody,
    }),
  });

  // ─── GHL Integration (uncomment when ready) ──────────────────────────────
  // const GHL_API_KEY = process.env.GHL_DEMM_API_KEY;
  // const GHL_LOCATION_ID = process.env.GHL_DEMM_LOCATION_ID || "C9kHiYdwiE9F20AP4Ufm";
  // if (GHL_API_KEY) {
  //   await fetch("https://rest.gohighlevel.com/v1/contacts/", {
  //     method: "POST",
  //     headers: {
  //       Authorization: `Bearer ${GHL_API_KEY}`,
  //       "Content-Type": "application/json",
  //       Version: "2021-07-28",
  //     },
  //     body: JSON.stringify({
  //       locationId: GHL_LOCATION_ID,
  //       firstName: name.split(" ")[0],
  //       lastName: name.split(" ").slice(1).join(" "),
  //       email,
  //       phone,
  //       customField: {
  //         event_type: eventType,
  //         event_date: date,
  //         venue,
  //         guest_count: guests,
  //         vision,
  //       },
  //       source: "website-concierge",
  //       tags: ["photo-booth-inquiry", eventType?.toLowerCase().replace(/\s+/g, "-")].filter(Boolean),
  //     }),
  //   });
  // }
  // ─────────────────────────────────────────────────────────────────────────

  return NextResponse.json({ ok: true });
}
