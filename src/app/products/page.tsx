'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function ProductsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Our Products</h1>
        <p className="text-gray-600 text-lg">
          Discover our range of premium Himalayan products, carefully sourced and traditionally processed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Turmeric Card */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div className="relative h-80">
            <Image
              src="https://images.pexels.com/photos/6220709/pexels-photo-6220709.jpeg"
              alt="Himalayan Turmeric"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Himalayan Turmeric</h2>
            <p className="text-gray-600 mb-4">
              Premium quality turmeric powder with high curcumin content, sourced from the foothills of the Himalayas.
            </p>
            <Link 
              href="/products/turmeric"
              className="inline-block bg-amber-500 text-white px-6 py-2 rounded-full hover:bg-amber-600 transition-colors"
            >
              View Details
            </Link>
          </div>
        </div>

        {/* Honey Card */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div className="relative h-80">
            <Image
              src="https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg"
              alt="Wild Forest Honey"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Wild Forest Honey</h2>
            <p className="text-gray-600 mb-4">
              Pure, unprocessed honey collected from the pristine forests of the Himalayas.
            </p>
            <Link 
              href="/products/honey"
              className="inline-block bg-amber-500 text-white px-6 py-2 rounded-full hover:bg-amber-600 transition-colors"
            >
              View Details
            </Link>
          </div>
        </div>

        {/* Salt Card */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div className="relative h-80">
            <Image
              src="/images/products/himalayan-salt.jpg"
              alt="Himalayan Rock Salt"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Himalayan Rock Salt</h2>
            <p className="text-gray-600 mb-4">
              Mineral-rich pink salt, hand-mined from ancient sea deposits in the Himalayan mountains.
            </p>
            <Link 
              href="/products/salt"
              className="inline-block bg-amber-500 text-white px-6 py-2 rounded-full hover:bg-amber-600 transition-colors"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
} 