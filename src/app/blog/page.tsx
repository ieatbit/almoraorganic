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
    <main className="bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-0">
            Stories from the Himalayas
          </h1>
          <p className="text-xl text-gray-600 mt-0">
            Exploring tradition, sustainability, and wellness in the heart of the mountains
          </p>
        </div>

        {featuredPost && (
          <div className="mb-16">
            <article className="bg-white rounded-2xl overflow-hidden shadow-xl lg:grid lg:grid-cols-2 lg:gap-0 hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-[400px] lg:h-full">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center relative">
                <div className="flex items-center mb-8">
                  <span className="inline-block bg-amber-100 text-amber-800 text-sm font-medium px-4 py-1.5 rounded-full">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-4">{featuredPost.date}</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <Link 
                  href={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium group text-lg"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {regularPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-64">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="inline-block bg-amber-100 text-amber-800 text-sm font-medium px-4 py-1.5 rounded-full">
                    {post.category}
                  </span>
                  <time className="text-gray-500 text-sm ml-4">{post.date}</time>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-amber-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-6 flex-1">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium group/link mt-auto"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform"
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