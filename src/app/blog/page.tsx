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
      date: 'March 15, 2024',
      featured: true
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

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <main className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Stories from the Himalayas
          </h1>
          <p className="text-xl text-gray-600 mt-1">
            Exploring tradition, sustainability, and wellness in the heart of the mountains
          </p>
        </div>

        {featuredPost && (
          <div className="mb-12">
            <article className="bg-white rounded-2xl overflow-hidden shadow-xl lg:grid lg:grid-cols-2 lg:gap-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-64 lg:h-full">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden" />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center mb-6">
                  <span className="inline-block bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-4">{featuredPost.date}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <Link 
                  href={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium group"
                >
                  Read Full Story
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="inline-block bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <time className="text-gray-500 text-sm ml-4">{post.date}</time>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-6 flex-1">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium group mt-auto"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
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