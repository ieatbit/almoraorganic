'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, totalPrice } = useCart()

  if (cart.length === 0) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
          <p className="text-gray-600 mb-8">Your cart is empty</p>
          <Link 
            href="/shop" 
            className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center p-6 border-b border-gray-200 last:border-0">
              <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex-1 ml-6">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-amber-600 font-bold mt-1">${item.price}</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-1 text-gray-600 hover:text-amber-600 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 border-x">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 text-gray-600 hover:text-amber-600 transition-colors"
                  >
                    +
                  </button>
                </div>
                
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xl font-semibold">Total</span>
            <span className="text-2xl font-bold text-amber-600">${totalPrice.toFixed(2)}</span>
          </div>
          
          <button 
            className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors"
            onClick={() => alert('Checkout functionality coming soon!')}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </main>
  )
} 