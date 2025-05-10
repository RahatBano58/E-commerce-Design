"use client";
import { ShoppingCart, User, Package, MessagesSquare } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="logo-symbol.png" alt="Logo" className="w-7 h-7" />
          <span className="text-xl font-bold text-blue-600">brand</span>
        </Link>

        {/* Search bar - visible on all screens now */}
        <div className="w-full md:flex-1 flex flex-col md:flex-row items-stretch md:items-center space-y-2 md:space-y-0 md:space-x-2">
          <input
            type="text"
            placeholder="Search products"
            className="w-full border border-gray-300 rounded-md md:rounded-l-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select className="w-full md:w-auto border border-gray-300 px-3 py-2 text-sm bg-white text-gray-700 focus:outline-none">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Home</option>
            <option>Books</option>
            <option>Beauty</option>
          </select>
          <button className="w-full md:w-auto bg-blue-600 text-white px-4 py-2 rounded-md md:rounded-r-md hover:bg-blue-700 text-sm">
            Search
          </button>
        </div>

        {/* Icons */}
        <div className="w-full md:w-auto flex justify-between md:justify-end items-center gap-4 text-sm flex-wrap">
          <Link href="/" className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
            <MessagesSquare className="w-5 h-5" />
            <span className="hidden xs:inline">Message</span>
          </Link>
          <Link href="/" className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
            <Package className="w-5 h-5" />
            <span className="hidden xs:inline">Order</span>
          </Link>
          <Link href="/Cart" className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden xs:inline">Cart</span>
          </Link>
          <Link href="/account" className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
            <User className="w-5 h-5" />
            <span className="hidden xs:inline">User</span>
          </Link>
        </div>
      </div>
    </header>
  );
}