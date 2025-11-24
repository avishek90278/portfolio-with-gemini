import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://avisheksarkar.com' // Placeholder
    const projects = [
        'examlense',
        'devsaround',
        '1store',
        'seo-business',
        'shopify-optimization',
        'ai-workflow',
        'portfolio-template',
        'client-management'
    ]

    const projectUrls = projects.map((slug) => ({
        url: `${baseUrl}/projects/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        ...projectUrls,
    ]
}
