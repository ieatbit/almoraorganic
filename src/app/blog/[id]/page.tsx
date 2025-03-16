'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

// This would typically come from a database or API
const blogPosts = [
  {
    id: 1,
    title: 'The Ancient Art of Himalayan Salt Mining',
    excerpt: 'Discover the traditional methods of extracting pink salt from the heart of the Himalayas, passed down through generations.',
    content: `The extraction of Himalayan pink salt is an ancient art that dates back thousands of years. Deep within the salt mines of the Himalayas, skilled miners use traditional techniques passed down through generations to carefully extract this precious mineral.

    The salt deposits were formed over 500 million years ago when ancient seas evaporated, leaving behind these mineral-rich deposits. Today, the mining process remains largely unchanged, prioritizing quality and sustainability over mass production.

    Our salt is hand-mined using traditional methods that protect both the environment and the salt's natural properties. The miners use hand tools and age-old techniques to extract the salt in its purest form, free from modern industrial processes that might compromise its quality.

    We work directly with local mining communities, ensuring fair trade practices and supporting the preservation of this ancient craft. This partnership allows us to maintain the highest standards of quality while contributing to the sustainable development of the region.`,
    image: 'https://images.pexels.com/photos/6412519/pexels-photo-6412519.jpeg',
    category: 'Heritage',
    date: 'March 15, 2024'
  },
  {
    id: 2,
    title: 'Health Benefits of Turmeric: A Golden Spice',
    excerpt: 'Explore the numerous health benefits of turmeric, from its anti-inflammatory properties to its role in traditional medicine.',
    content: `Turmeric, often called the "golden spice," has been a cornerstone of traditional medicine for thousands of years. This remarkable root contains curcumin, a compound known for its powerful anti-inflammatory and antioxidant properties.

    Modern research continues to uncover the many health benefits of turmeric. From supporting joint health to boosting immune function, turmeric has proven itself to be more than just a culinary spice.

    Our turmeric is sourced from the foothills of the Himalayas, where the unique climate and soil conditions produce a spice of exceptional quality. We work with local farmers who use organic farming practices to ensure the highest quality turmeric while protecting the environment.

    Each batch of our turmeric is carefully tested for curcumin content and purity, ensuring you receive the maximum health benefits from this ancient superfood.`,
    image: 'https://images.pexels.com/photos/4226760/pexels-photo-4226760.jpeg',
    category: 'Wellness',
    date: 'March 10, 2024'
  },
  {
    id: 3,
    title: 'Sustainable Beekeeping in the Himalayas',
    excerpt: 'Learn about our partnership with local beekeepers and their sustainable practices in harvesting wild forest honey.',
    content: `In the remote valleys of the Himalayas, traditional beekeeping practices have been preserved for generations. Our partnership with local beekeepers helps maintain these sustainable practices while producing some of the world's finest wild forest honey.

    The unique flora of the Himalayan region, combined with traditional beekeeping methods, results in honey with exceptional flavor profiles and medicinal properties. Our beekeepers use sustainable practices that protect both the bees and their natural habitat.

    We work closely with local communities to maintain traditional beekeeping practices while implementing modern conservation techniques. This approach ensures the long-term sustainability of bee populations while supporting local livelihoods.

    Each jar of our honey can be traced back to specific valleys and flowering seasons, reflecting our commitment to transparency and quality. We regularly test our honey to ensure it meets the highest standards of purity and nutritional value.`,
    image: 'https://images.pexels.com/photos/213786/pexels-photo-213786.jpeg',
    category: 'Sustainability',
    date: 'March 5, 2024'
  }
]

export default function BlogPost() {
  const params = useParams()
  const post = blogPosts.find(post => post.id === Number(params.id))

  if (!post) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="text-amber-600 hover:text-amber-700">
            ← Back to Blog
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <Link href="/blog" className="text-amber-600 hover:text-amber-700 mb-8 inline-block">
          ← Back to Blog
        </Link>
        
        <div className="relative h-96 mb-8 rounded-2xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 800px"
          />
        </div>

        <div className="flex items-center mb-8">
          <span className="inline-block bg-amber-100 text-amber-600 text-sm px-3 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-gray-500 text-sm ml-4">{post.date}</span>
        </div>

        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        
        <div className="prose prose-lg max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-gray-600 leading-relaxed">
              {paragraph.trim()}
            </p>
          ))}
        </div>
      </article>
    </main>
  )
} 