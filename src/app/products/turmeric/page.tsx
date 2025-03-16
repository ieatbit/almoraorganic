'use client'

import Image from 'next/image'

export default function TurmericPage() {
  return (
    <main className="bg-gray-50 pt-8">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-0">
            Himalayan Turmeric
          </h1>
          <p className="text-xl text-gray-600 mt-0">
            Premium organic turmeric sourced from the foothills of the Himalayas
          </p>
        </div>

        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/6220709/pexels-photo-6220709.jpeg"
            alt="Himalayan Turmeric"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="mt-8">
          <p className="text-gray-600 mb-4">
            Our premium Himalayan turmeric is carefully sourced from the foothills of the Himalayas. 
            Known for its high curcumin content and exceptional quality, this turmeric powder adds 
            both flavor and health benefits to your dishes.
          </p>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Key Benefits</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>High curcumin content</li>
              <li>100% organic and natural</li>
              <li>Rich, vibrant color</li>
              <li>Traditional cultivation methods</li>
              <li>Anti-inflammatory properties</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
} 