'use client'

import Image from 'next/image'

export default function TurmericPage() {
  return (
    <main className="container mx-auto px-4 py-8">
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
        <h1 className="text-4xl font-bold mb-4">Himalayan Turmeric</h1>
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
    </main>
  )
} 