'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Ancient Art of Pisyun Loon: Traditional Pahadi Salt',
      excerpt: 'Discover the time-honored tradition of hand-ground flavored salt from Uttarakhand, where generations of mountain communities have perfected this unique culinary heritage.',
      image: '/images/products/himalayan-salt.png',
      category: 'Heritage',
      date: 'March 15, 2024',
      featured: true,
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Health Benefits of Turmeric: A Golden Spice',
      excerpt: 'Explore the numerous health benefits of turmeric, from its anti-inflammatory properties to its role in traditional medicine.',
      image: '/images/products/turmeric.jpg',
      category: 'Wellness',
      date: 'March 10, 2024',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'Sustainable Beekeeping in the Himalayas',
      excerpt: 'Learn about our partnership with local beekeepers and their sustainable practices in harvesting wild forest honey.',
      image: '/images/products/honey.jpg',
      category: 'Sustainability',
      date: 'March 5, 2024',
      readTime: '3 min read'
    }
  ]

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <main className="bg-gray-50 pt-8 pb-16">
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
          <div className="mb-12">
            <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="lg:grid lg:grid-cols-2 lg:items-center">
                <div className="relative h-[300px] lg:h-[400px]">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <div className="flex items-center flex-wrap gap-2 mb-4">
                    <span className="inline-block bg-amber-100 text-amber-800 text-sm font-medium px-4 py-1.5 rounded-full">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center space-x-2 text-gray-500 text-sm">
                      <time>{featuredPost.date}</time>
                      <span>·</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium group"
                  >
                    Read Full Story
                    <ArrowRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group transform hover:-translate-y-1"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center flex-wrap gap-2 mb-4">
                  <span className="inline-block bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <time>{post.date}</time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-amber-600 transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 flex-1 line-clamp-2">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium group/link mt-auto"
                >
                  Read More
                  <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
} 