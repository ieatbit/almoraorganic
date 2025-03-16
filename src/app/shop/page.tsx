'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import { useState } from 'react'

export default function ShopPage() {
  const { addToCart } = useCart()
  const [addedToCart, setAddedToCart] = useState<number | null>(null)

  const products = [
    {
      id: 1,
      name: 'Himalayan Pink Salt',
      description: 'Pure, hand-mined pink salt from the heart of the Himalayas.',
      price: 12.99,
      image: '/images/products/himalayan-salt.png',
      link: '/products/salt'
    },
    {
      id: 2,
      name: 'Wild Forest Honey',
      description: 'Raw, unfiltered honey harvested from the Himalayan forests.',
      price: 24.99,
      image: 'https://images.pexels.com/photos/213786/pexels-photo-213786.jpeg',
      link: '/products/honey'
    },
    {
      id: 3,
      name: 'Organic Turmeric',
      description: 'Premium organic turmeric powder from the foothills of the Himalayas.',
      price: 15.99,
      image: 'https://images.pexels.com/photos/4226760/pexels-photo-4226760.jpeg',
      link: '/products/turmeric'
    }
  ]

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    })
    setAddedToCart(product.id)
    setTimeout(() => setAddedToCart(null), 2000)
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center">Our Products</h1>
        <p className="text-gray-600 text-lg text-center mb-12">
          Discover our selection of premium Himalayan products
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <Link href={product.link}>
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </Link>
              <div className="p-6">
                <Link href={product.link}>
                  <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                </Link>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-amber-600">${product.price}</span>
                  <div className="flex gap-2">
                    <Link 
                      href={product.link}
                      className="inline-block bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Details
                    </Link>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        handleAddToCart(product)
                      }}
                      className={`inline-block px-4 py-2 rounded-lg transition-colors ${
                        addedToCart === product.id
                          ? 'bg-green-600 text-white'
                          : 'bg-amber-600 text-white hover:bg-amber-700'
                      }`}
                    >
                      {addedToCart === product.id ? 'Added!' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 