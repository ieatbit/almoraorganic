'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useCart } from '@/context/CartContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { totalItems } = useCart()

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-9">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5">
            <div className="w-6 h-6 relative">
              <svg
                viewBox="0 0 24 24"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background Circle */}
                <circle cx="12" cy="12" r="12" className="fill-amber-100" />
                
                {/* Mountains */}
                <path
                  d="M4 16L8.5 9L12 14L15.5 7L20 16H4Z"
                  className="fill-amber-600"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                {/* Snow Caps */}
                <path
                  d="M8.5 9L10 11L11 10L12 14L13 11L14 12L15.5 7"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                {/* Sun */}
                <circle cx="18" cy="6" r="2" className="fill-amber-500" />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-amber-600 tracking-wide">ALMORA</span>
              <span className="text-[17px] text-gray-600 tracking-wider -mt-2 font-['Montserrat']">ORGANIC</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-5">
            <Link href="/" className="text-gray-600 hover:text-amber-600 transition-colors text-base">
              Home
            </Link>
            <Link 
              href="/shop" 
              className="text-gray-600 hover:text-amber-600 transition-colors text-base"
            >
              Products
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-amber-600 transition-colors text-base">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-amber-600 transition-colors text-base">
              Contact
            </Link>
            <Link 
              href="/shop" 
              className="bg-amber-600 text-white px-3 py-1 rounded hover:bg-amber-700 transition-colors text-base"
            >
              Shop Now
            </Link>
            <Link href="/cart" className="relative">
              <svg
                className="w-6 h-6 text-gray-600 hover:text-amber-600 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-sm font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <Link href="/cart" className="relative">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-sm font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button 
              className="p-0.5"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg 
                className="w-4 h-4 text-gray-600" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg">
              <nav className="flex flex-col">
                <Link 
                  href="/" 
                  className="text-gray-600 hover:text-amber-600 transition-colors px-4 py-0.5 text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/shop" 
                  className="text-gray-600 hover:text-amber-600 transition-colors px-4 py-0.5 text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </Link>
                <Link 
                  href="/about" 
                  className="text-gray-600 hover:text-amber-600 transition-colors px-4 py-0.5 text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/contact" 
                  className="text-gray-600 hover:text-amber-600 transition-colors px-4 py-0.5 text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link 
                  href="/shop" 
                  className="bg-amber-600 text-white px-3 py-1 rounded hover:bg-amber-700 transition-colors mx-4 my-2 text-center text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Shop Now
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
} 