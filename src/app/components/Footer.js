"use client";
import Link from 'next/link';
import Image from 'next/image';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ChevronDown,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-10 text-sm bg-gray-300">
   
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-6 gap-8 bg-white p-8 rounded-t-xl shadow-sm border border-white">
     
      <div>
        <div className="text-2xl font-bold text-blue-600 flex items-center mb-2">
          <img src="logo-symbol.png" alt="Lock" className="w-7 h-7 inline-block" />
          <span>Brand</span>
        </div>
        <p className="text-gray-600 mb-4">
          Best information about the company goes here, but now lorem ipsum is
        </p>
        <div className="flex space-x-4 text-gray-500 text-lg mb-4">
          <Link href="#"><Facebook size={20} /></Link>
          <Link href="#"><Twitter size={20} /></Link>
          <Link href="#"><Linkedin size={20} /></Link>
          <Link href="#"><Instagram size={20} /></Link>
          <Link href="#"><Youtube size={20} /></Link>
        </div>
  
      
        <div>
          <h3 className="font-semibold mb-2">Get app</h3>
          <div className="flex space-x-2">
            <Link href="#">
              <Image src="/app-store.png" alt="App Store" width={130} height={40} />
            </Link>
            <Link href="#">
              <Image src="/google-play.png" alt="Google Play" width={130} height={40} />
            </Link>
          </div>
        </div>
      </div>
  
      
      <div>
        <h3 className="font-semibold mb-2">About</h3>
        <ul className="space-y-1 text-gray-600">
          <li><Link href="#">About Us</Link></li>
          <li><Link href="#">Find store</Link></li>
          <li><Link href="#">Categories</Link></li>
          <li><Link href="#">Blogs</Link></li>
        </ul>
      </div>
  
      <div>
        <h3 className="font-semibold mb-2">Partnership</h3>
        <ul className="space-y-1 text-gray-600">
          <li><Link href="#">About Us</Link></li>
          <li><Link href="#">Find store</Link></li>
          <li><Link href="#">Categories</Link></li>
          <li><Link href="#">Blogs</Link></li>
        </ul>
      </div>
  
      
      <div>
        <h3 className="font-semibold mb-2">Information</h3>
        <ul className="space-y-1 text-gray-600">
          <li><Link href="#">Help Center</Link></li>
          <li><Link href="#">Money Refund</Link></li>
          <li><Link href="#">Shipping</Link></li>
          <li><Link href="#">Contact us</Link></li>
        </ul>
      </div>
  
      
      <div>
        <h3 className="font-semibold mb-2">For users</h3>
        <ul className="space-y-1 text-gray-600">
          <li><Link href="#">Login</Link></li>
          <li><Link href="#">Register</Link></li>
          <li><Link href="#">Settings</Link></li>
          <li><Link href="#">My Orders</Link></li>
        </ul>
      </div>
    </div>
  
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center bg-gray-300 pt-6 pb-6">
      <div className="text-gray-600 text-sm">
        © 2023 Ecommerce.
      </div>
  
      <div className="flex items-center text-gray-600 mt-4 md:mt-0 space-x-1">
        <Image src="/US@2x.png" alt="US Flag" width={16} height={16} />
        <span>English</span>
        <ChevronDown size={16} />
      </div>
    </div>
  </footer>
  );
}
