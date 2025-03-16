'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Ancient Art of Himalayan Salt Mining',
      excerpt: 'Discover the traditional methods of extracting pink salt from the heart of the Himalayas, passed down through generations.',
      image: 'https://images.pexels.com/photos/6412519/pexels-photo-6412519.jpeg',
      category: 'Heritage',
      date: 'March 15, 2024'
    },
    {
      id: 2,
      title: 'Health Benefits of Turmeric: A Golden Spice',
      excerpt: 'Explore the numerous health benefits of turmeric, from its anti-inflammatory properties to its role in traditional medicine.',
      image: 'https://images.pexels.com/photos/4226760/pexels-photo-4226760.jpeg',
      category: 'Wellness',
      date: 'March 10, 2024'
    },
    {
      id: 3,
      title: 'Sustainable Beekeeping in the Himalayas',
      excerpt: 'Learn about our partnership with local beekeepers and their sustainable practices in harvesting wild forest honey.',
      image: 'https://images.pexels.com/photos/213786/pexels-photo-213786.jpeg',
      category: 'Sustainability',
      date: 'March 5, 2024'
    }
  ]

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center">Our Blog</h1>
        <p className="text-gray-600 text-lg text-center mb-12">
          Stories from the Himalayas: Exploring tradition, sustainability, and wellness
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="inline-block bg-amber-100 text-amber-600 text-sm px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-4">{post.date}</span>
                </div>
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-amber-600 hover:text-amber-700"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
} 