'use client'

import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-12">
        <Image
          src="https://images.pexels.com/photos/4254252/pexels-photo-4254252.jpeg"
          alt="Himalayan Mountains"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Mission Section */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center">Our Story</h1>
        <div className="prose prose-lg mx-auto">
          <p className="text-gray-600 mb-6">
            Founded in the heart of Almora, a picturesque town nestled in the Kumaon region of Uttarakhand, 
            Almora Organic began with a simple mission: to bring the pure, natural goodness of the Himalayas 
            to homes around the world.
          </p>
          <p className="text-gray-600 mb-6">
            Our journey started with a deep appreciation for the traditional farming and harvesting methods 
            that have been practiced for generations in the Himalayan region. We work directly with local 
            farmers and artisans who share our commitment to quality and sustainability.
          </p>
          <p className="text-gray-600 mb-12">
            Today, we take pride in offering a carefully curated selection of organic products, each telling 
            its own story of tradition, purity, and the majestic Himalayas.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
            <p className="text-gray-600">Committed to environmental responsibility and sustainable practices.</p>
          </div>

          <div className="text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p className="text-gray-600">Uncompromising standards in every product we offer.</p>
          </div>

          <div className="text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-600">Supporting local farmers and traditional practices.</p>
          </div>
        </div>
      </div>
    </main>
  )
} 