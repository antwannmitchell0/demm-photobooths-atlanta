import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.demmphotobooths.com'
  const now = new Date().toISOString()

  return [
    // ── Hub ──────────────────────────────────────────────────────────
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // ── Pillar Pages ─────────────────────────────────────────────────
    // Lead-capture is the primary differentiator — highest priority after homepage
    {
      url: `${baseUrl}/lead-capture`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.95,
    },

    // ── Core Event Pages ─────────────────────────────────────────────
    {
      url: `${baseUrl}/weddings`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/corporate-events`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/quinceaneras-sweet-16`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/celebrations`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },

    // ── Educational Pillar ───────────────────────────────────────────
    {
      url: `${baseUrl}/atlanta-photo-booth-guide`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // ── Legal ────────────────────────────────────────────────────────
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },

    // ── Phase 2 City Pages (activate after foundation pages are solid) ─
    // Uncomment each when the page has been fully rewritten to meet quality standard
    // { url: `${baseUrl}/alpharetta`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    // { url: `${baseUrl}/marietta`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    // { url: `${baseUrl}/duluth-norcross`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
  ]
}
