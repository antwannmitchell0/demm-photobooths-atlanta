import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.demmphotobooths.com'
  // Fixed date — bump when page content materially changes so crawlers trust it
  const lastModified = new Date('2026-08-05')

  return [
    // ── Hub ──────────────────────────────────────────────────────────
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // ── Pillar Pages ─────────────────────────────────────────────────
    // Lead-capture is the primary differentiator — highest priority after homepage
    {
      url: `${baseUrl}/lead-capture`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.95,
    },

    // ── Core Event Pages ─────────────────────────────────────────────
    {
      url: `${baseUrl}/weddings`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/corporate-events`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/event-planners`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/quinceaneras-sweet-16`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/quinceaneras`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/birthdays`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/celebrations`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },

    // ── Educational Pillar ───────────────────────────────────────────
    {
      url: `${baseUrl}/atlanta-photo-booth-guide`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },

    // ── City Pages (local SEO) ───────────────────────────────────────
    {
      url: `${baseUrl}/alpharetta`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/marietta`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sandy-springs`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/duluth`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/norcross`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // ── Legal ────────────────────────────────────────────────────────
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
