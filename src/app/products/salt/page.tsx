'use client'

import Image from 'next/image'

export default function SaltPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="relative h-[600px] w-full rounded-2xl overflow-hidden">
        <Image
          src="/images/products/himalayan-salt.jpg"
          alt="Himalayan Rock Salt"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="mt-8">
        <h1 className="text-4xl font-bold mb-4">Himalayan Rock Salt</h1>
        <p className="text-gray-600 mb-4">
          Our Himalayan Rock Salt is hand-mined from ancient sea salt deposits in the 
          Himalayan mountains. This pure, mineral-rich salt is known for its distinctive 
          pink color and trace minerals that provide numerous health benefits.
        </p>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Key Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Rich in trace minerals</li>
            <li>100% natural and unrefined</li>
            <li>Distinctive pink color</li>
            <li>Hand-mined from ancient deposits</li>
            <li>Pure and chemical-free</li>
          </ul>
        </div>
      </div>
    </main>
  )
} 