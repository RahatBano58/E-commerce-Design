'use client'

import { Mail } from 'lucide-react'

export default function Email() {
  return (
    <div className="bg-gray-100 py-10 text-center px-4">
      <h1 className="text-lg font-semibold sm:text-xl md:text-2xl">Subscribe to our newsletter</h1>
      <p className="text-gray-500 mb-4 sm:text-sm md:text-base">
        Get daily news on upcoming offers from many suppliers all over the world
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
        <div className="relative w-full">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="email"
            placeholder="Email"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          Subscribe
        </button>
      </div>
    </div>
  )
}
