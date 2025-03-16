import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[calc(90vh-2.25rem)] top-[2.25rem]">
        <Image
          src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg"
          alt="Himalayan Mountains"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Pure Himalayan Goodness</h1>
            <p className="text-xl md:text-2xl mb-6">Discover the authentic taste of the Himalayas</p>
            <Link 
              href="/products" 
              className="bg-amber-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-600 transition-colors"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Turmeric Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/6220709/pexels-photo-6220709.jpeg"
                  alt="Himalayan Turmeric"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Himalayan Turmeric</h3>
                <p className="text-gray-600 mb-4">Premium quality turmeric powder with high curcumin content.</p>
                <Link 
                  href="/products/turmeric"
                  className="text-amber-600 font-semibold hover:text-amber-700"
                >
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Honey Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg"
                  alt="Wild Forest Honey"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Wild Forest Honey</h3>
                <p className="text-gray-600 mb-4">Pure, unprocessed honey from the Himalayan forests.</p>
                <Link 
                  href="/products/honey"
                  className="text-amber-600 font-semibold hover:text-amber-700"
                >
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Salt Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/products/himalayan-salt.png"
                  alt="Pisyun Loon"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Pisyun Loon (Pahadi Salt)</h3>
                <p className="text-gray-600 mb-4">Traditional hand-ground flavored salt from Uttarakhand's mountain communities.</p>
                <Link 
                  href="/products/pisyun-loon"
                  className="text-amber-600 font-semibold hover:text-amber-700"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-8 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Story
          </h2>
          <div className="space-y-4 text-gray-600 text-xl">
            <p className="leading-relaxed">
              At Almora Organic, we bring you the finest organic products from the heart of the Himalayas. 
              Our commitment to quality, sustainability, and traditional practices ensures that you receive nature's best, 
              untouched by modern processing methods.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Add your features here */}
          </div>
        </div>
      </section>
    </main>
  )
}
