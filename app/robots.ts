import { MetadataRoute } from 'next'
export const dynamic = "force-static"
export const revalidate = 0

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/failed', '/success', '/sign-in', '/sign-up'],
        },
        sitemap: 'https://brundhavangarden.com/sitemap.xml',
    }
}
