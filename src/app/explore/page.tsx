'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarIcon, HomeIcon, MapIcon } from '@heroicons/react/24/outline';

export default function ExplorePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px]">
        <Image
          src="https://via.placeholder.com/1920x1080/8B5E3C/FFFFFF?text=Almora+Landscape"
          alt="Almora Landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Experience Almora</h1>
            <p className="text-xl md:text-2xl">Where Nature Meets Tradition</p>
          </div>
        </div>
      </div>

      {/* Eco-Treks Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Eco-Treks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Jageshwar Trail",
                description: "Ancient temple complex surrounded by dense deodar forest",
                duration: "1 Day",
                difficulty: "Easy",
                image: "/images/jageshwar-trek.jpg"
              },
              {
                title: "Binsar Sanctuary",
                description: "Wildlife sanctuary with panoramic Himalayan views",
                duration: "2 Days",
                difficulty: "Moderate",
                image: "/images/binsar-trek.jpg"
              },
              {
                title: "Kasar Devi",
                description: "Spiritual trek to the famous Kasar Devi temple",
                duration: "Half Day",
                difficulty: "Easy",
                image: "/images/kasar-devi-trek.jpg"
              }
            ].map((trek) => (
              <div key={trek.title} className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={trek.image}
                    alt={trek.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{trek.title}</h3>
                  <p className="text-gray-600 mb-4">{trek.description}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{trek.duration}</span>
                    <span>{trek.difficulty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Festivals */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Cultural Festivals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Nanda Devi Fair",
                date: "September",
                description: "Ancient festival dedicated to Goddess Nanda Devi",
                image: "/images/nanda-devi-fair.jpg"
              },
              {
                name: "Uttarayani Mela",
                date: "January",
                description: "Traditional fair celebrating local culture and crafts",
                image: "/images/uttarayani-mela.jpg"
              },
              {
                name: "Phool Dei",
                date: "March",
                description: "Spring festival celebrating new harvest",
                image: "/images/phool-dei.jpg"
              }
            ].map((festival) => (
              <div key={festival.name} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={festival.image}
                    alt={festival.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <CalendarIcon className="h-5 w-5 text-amber-800 mr-2" />
                    <span className="text-amber-800">{festival.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{festival.name}</h3>
                  <p className="text-gray-600">{festival.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Homestays */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Local Homestays</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Mountain View Homestay",
                location: "Kasar Devi",
                features: ["Organic Farm", "Mountain Views", "Traditional Kitchen"],
                image: "/images/mountain-view-homestay.jpg"
              },
              {
                name: "Heritage House",
                location: "Almora Town",
                features: ["Historic Building", "Cultural Activities", "Local Cuisine"],
                image: "/images/heritage-homestay.jpg"
              }
            ].map((homestay) => (
              <div key={homestay.name} className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={homestay.image}
                      alt={homestay.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{homestay.name}</h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapIcon className="h-5 w-5 mr-2" />
                      <span>{homestay.location}</span>
                    </div>
                    <ul className="space-y-2">
                      {homestay.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-600">
                          <HomeIcon className="h-5 w-5 mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="#" className="mt-4 inline-block text-amber-800 hover:text-amber-700">
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Connected</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for updates on seasonal products, cultural events, and farmer stories.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                />
                <button
                  type="submit"
                  className="bg-amber-800 text-white px-6 py-2 rounded-md hover:bg-amber-700"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
} 