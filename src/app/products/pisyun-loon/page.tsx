'use client'

import Image from 'next/image'

export default function PisyunLoonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="relative h-[600px] w-full rounded-2xl overflow-hidden">
        <Image
          src="/images/products/himalayan-salt.png"
          alt="Pisyun Loon (Pahadi Salt)"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="mt-8">
        <h1 className="text-4xl font-bold mb-4">Pisyun Loon (Pahadi Salt)</h1>
        <p className="text-gray-600 mb-4">
          Our Pisyun Loon is a traditional hand-ground flavored salt from the mountain 
          communities of Uttarakhand. This unique salt blend combines carefully selected 
          local herbs and spices with rock salt, creating a distinctive flavor that has 
          been cherished for generations.
        </p>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Hand-ground using traditional stone grinders</li>
            <li>Blend of local herbs and rock salt</li>
            <li>Made by local women's self-help groups</li>
            <li>Preserves traditional culinary heritage</li>
            <li>100% natural and authentic</li>
          </ul>
        </div>
      </div>
    </main>
  )
} 