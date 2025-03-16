'use client'

import Image from 'next/image'

export default function HoneyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="relative h-[600px] w-full rounded-2xl overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg"
          alt="Wild Forest Honey"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="mt-8">
        <h1 className="text-4xl font-bold mb-4">Wild Forest Honey</h1>
        <p className="text-gray-600 mb-4">
          Our Wild Forest Honey is collected from the pristine forests of the Himalayas. 
          This raw, unprocessed honey retains all its natural enzymes and beneficial properties, 
          offering a pure and authentic taste of nature.
        </p>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Key Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>100% pure and natural</li>
            <li>Rich in antioxidants</li>
            <li>No artificial additives</li>
            <li>Collected from wild flowers</li>
            <li>Traditional harvesting methods</li>
          </ul>
        </div>
      </div>
    </main>
  )
} 