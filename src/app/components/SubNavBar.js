'use client'

import { ChevronDown } from 'lucide-react'
import Link from "next/link";

export default function SubNavBar() {
  return (
    <div className="bg-white px-4 py-2 flex flex-wrap justify-between items-center text-sm text-gray-700">
      
      {/* Left Links */}
      <div className="flex gap-4 items-center flex-wrap sm:flex-nowrap">
        <Link href="/ProductDetails">
          <button className="hover:text-blue-600 font-medium">All category</button>
        </Link>
        <button className="hover:text-blue-600">Hot offers</button>
        <button className="hover:text-blue-600">Gift boxes</button>
        <button className="hover:text-blue-600">Projects</button>
        <button className="hover:text-blue-600">Menu item</button>
        <button className="hover:text-blue-600 text-center">
          <span className="block">Help</span>
        </button>
      </div>

      {/* Right Links (Language & Shipping) */}
      <div className="flex gap-4 items-center flex-wrap sm:flex-nowrap">
        <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
          English, USD <ChevronDown size={14} />
        </div>

        <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
          Ship to  <img src="/flags/icon1.png" alt="Germany Flag" className="h-4 w-5 object-cover rounded-sm" /><ChevronDown size={14} />
        </div>
      </div>
    </div>
  )
}
