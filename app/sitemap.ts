import { MetadataRoute } from 'next'
import { fetchAllRoomCategories } from '@/lib/actions/users.actions'
export const dynamic = "force-static"
export const revalidate = 0

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://brundhavangarden.com'

    // Dynamic routes for rooms
    let rooms: any[] = []
    try {
        const response = await fetchAllRoomCategories()
        if (response.success && response.data) {
            rooms = response.data
        }
    } catch (error) {
        console.error('Sitemap: Failed to fetch rooms', error)
    }

    const roomEntries: MetadataRoute.Sitemap = rooms.map((room) => ({
        url: `${baseUrl}/room/${room.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/aboutus`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/allrooms`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        ...roomEntries,
    ]
}
