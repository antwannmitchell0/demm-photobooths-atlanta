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

    // ── Event / Audience Pages ────────────────────────────────────────
    {
      url: `${baseUrl}/weddings`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/quinceaneras`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/event-planners`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/birthdays`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },

    // ── Phase 1 City / Location Pages ────────────────────────────────
    {
      url: `${baseUrl}/alpharetta`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/marietta`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sandy-springs`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/duluth`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/norcross`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // ── Phase 2 City Pages (placeholders — activate when pages built) ─
    // { url: `${baseUrl}/roswell`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    // { url: `${baseUrl}/decatur`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    // { url: `${baseUrl}/kennesaw`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    // { url: `${baseUrl}/johns-creek`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    // { url: `${baseUrl}/sweet-16`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    // { url: `${baseUrl}/graduations`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
  ]
}
