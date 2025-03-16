'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import { useState } from 'react'
import { ShoppingBagIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export default function ShopPage() {
  const { addToCart } = useCart()
  const [addedToCart, setAddedToCart] = useState<number | null>(null)

  const products = [
    {
      id: 1,
      name: 'Pisyun Loon (Pahadi Salt)',
      description: 'Traditional hand-ground flavored salt from Uttarakhand\'s mountain communities.',
      price: 12.99,
      image: '/images/products/himalayan-salt.png',
      link: '/products/pisyun-loon',
      weight: '500g',
      origin: 'Almora, Uttarakhand'
    },
    {
      id: 2,
      name: 'Wild Forest Honey',
      description: 'Raw, unfiltered honey harvested from the Himalayan forests.',
      price: 24.99,
      image: '/images/products/honey.png',
      link: '/products/honey',
      weight: '350g',
      origin: 'Kumaon Region'
    },
    {
      id: 3,
      name: 'Organic Turmeric',
      description: 'Premium organic turmeric powder from the foothills of the Himalayas.',
      price: 15.99,
      image: '/images/products/turmeric.png',
      link: '/products/turmeric',
      weight: '250g',
      origin: 'Almora Valley'
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
    <main className="bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-0">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 mt-0">
            Discover our selection of premium Himalayan products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Link href={product.link} className="block relative">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
              </Link>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <Link href={product.link}>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                        {product.name}
                      </h2>
                    </Link>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span className="mr-4">{product.weight}</span>
                      <span>{product.origin}</span>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-amber-600">
                    ${product.price}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <Link 
                    href={product.link}
                    className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium group/link"
                  >
                    View Details
                    <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`inline-flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                      addedToCart === product.id
                        ? 'bg-green-600 text-white'
                        : 'bg-amber-600 text-white hover:bg-amber-700'
                    }`}
                  >
                    <ShoppingBagIcon className="w-5 h-5 mr-2" />
                    {addedToCart === product.id ? 'Added!' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 