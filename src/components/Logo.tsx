'use client'

import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="w-12 h-12 relative">
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
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-amber-600 leading-tight tracking-wide">ALMORA</span>
        <span className="text-sm font-medium text-gray-600 tracking-wider">ORGANIC</span>
      </div>
    </Link>
  )
} 