'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCartIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function SeasonalProducts() {
  const seasonalProducts = [
    {
      id: 1,
      name: "Monsoon Harvest Turmeric",
      description: "Special edition turmeric harvested during the monsoon season, known for its higher curcumin content.",
      price: "₹799",
      image: "https://via.placeholder.com/800x800/FFA500/FFFFFF?text=Monsoon+Turmeric",
      availableUntil: "September 2024",
      badge: "Limited Edition"
    },
    {
      id: 2,
      name: "Festival Gift Box",
      description: "Curated collection of our finest products in a traditional hand-crafted box.",
      price: "₹1499",
      image: "https://via.placeholder.com/800x800/8B4513/FFFFFF?text=Festival+Gift+Box",
      availableUntil: "Diwali Special",
      badge: "Gift Pack"
    },
    {
      id: 3,
      name: "Spring Honey Collection",
      description: "Rare honey collected from spring mountain flowers, available in limited quantities.",
      price: "₹899",
      image: "https://via.placeholder.com/800x800/FFD700/FFFFFF?text=Spring+Honey",
      availableUntil: "While stocks last",
      badge: "Seasonal"
    }
  ];

  return (
    <div className="bg-amber-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Limited Edition Products</h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover our seasonal specialties and festival collections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {seasonalProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative">
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-amber-800 text-white px-3 py-1 rounded-full text-sm flex items-center">
                  <SparklesIcon className="h-4 w-4 mr-1" />
                  {product.badge}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold text-amber-800">{product.price}</span>
                  <span className="text-sm text-gray-500">Available until: {product.availableUntil}</span>
                </div>

                <button className="w-full bg-amber-800 text-white py-2 px-4 rounded-md hover:bg-amber-700 flex items-center justify-center">
                  <ShoppingCartIcon className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/products" 
            className="text-amber-800 hover:text-amber-700 font-semibold"
          >
            View All Products →
          </Link>
        </div>
      </div>
    </div>
  );
} 