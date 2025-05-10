'use client';
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubNavBar from "../components/SubNavBar";
import Email from "../components/Email";
import Link from 'next/link';

export default function ProductDetailsPage() {
  const [viewMode, setViewMode] = useState("grid");

  const products = [
    {
      id: 1,
      title: 'iPhone 14 Pro',
      category: 'Smartphones',
      price: 999,
      oldPrice: 1199,
      image: 'pic.png'
    },
    {
      id: 2,
      title: 'Canon Camera',
      category: 'Usable Tech',
      price: 399,
      oldPrice: 499,
      image: '/products/camera.png',
      rating: 5
    },
    {
      id: 3,
      title: 'iPhone 13',
      category: 'Smartphones',
      price: 799,
      oldPrice: 899,
      image: 'Iphone.png',
      rating: 3
    },
    {
      id: 4,
      title: 'MacBook Pro 16"',
      category: 'Laptops',
      price: 2399,
      oldPrice: 2599,
      image: 'Mac.png',
      rating: 5
    },
    {
      id: 5,
      title: 'Apple Watch SE',
      category: 'Wearables',
      price: 249,
      oldPrice: 299,
      image: '/product/watch.png',
      rating: 4
    },
    {
      id: 6,
      title: 'Laptop',
      category: 'Usable Tech',
      price: 599,
      oldPrice: 699,
      image: '/products/laptop.png',
      rating: 4
    },
    {
      id: 7,
      title: 'Phone',
      category: 'Smartphones',
      price: 599,
      oldPrice: 699,
      image: 'Phone.png',
      rating: 4
    },
  ];

  const renderStars = (count) => (
    <div className="flex text-yellow-400 mb-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < count ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div className="bg-[#f9f9f9]">
      <Header />
      <SubNavBar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full md:w-64 bg-white rounded-xl p-4 shadow-md text-gray-700 space-y-6">
            <FilterSection title="Category" items={['Mobile Accessory', 'Electronics', 'Smartphones', 'Modern Tech']} />
            <FilterSection title="Brands" items={['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo']} />
            <FilterSection title="Features" items={['Metallic', 'Plastic Corner', '8GB RAM', 'Super Power', 'Large Memory']} />
            
            {/* Price */}
            <div>
              <h4 className="font-semibold mb-2">Price Range</h4>
              <div className="flex gap-2 text-sm">
                <input type="number" placeholder="Min" className="w-1/2 p-1 border rounded" />
                <input type="number" placeholder="Max" className="w-1/2 p-1 border rounded" />
              </div>
              <button className="text-blue-600 text-xs mt-2 underline">Apply</button>
            </div>

            {/* Condition */}
            <div>
              <h4 className="font-semibold mb-2">Condition</h4>
              {['All', 'Refurbished', 'Used', 'Old Stock'].map(item => (
                <label key={item} className="block text-sm mb-1">
                  <input type="radio" name="condition" className="mr-2" />
                  {item}
                </label>
              ))}
            </div>

            {/* Rating */}
            <div>
              <h4 className="font-semibold mb-2">Rating</h4>
              {[5, 4, 3, 2, 1].map(r => (
                <label key={r} className="flex items-center text-sm gap-1 mb-1">
                  <input type="checkbox" />
                  {renderStars(r)}
                </label>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* View Toggle */}
            <div className="flex flex-wrap justify-end mb-4 gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`px-3 py-1 border ${viewMode === "grid" ? 'bg-blue-600 text-white' : 'bg-white'}`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`px-3 py-1 border ${viewMode === "list" ? 'bg-blue-600 text-white' : 'bg-white'}`}
              >
                List
              </button>
            </div>

            {/* Product Listing */}
            <div className={`${viewMode === 'grid' ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6' : 'space-y-6'}`}>
              {products.map((product, index) => (
                <div key={product.id} className={`bg-white rounded-xl shadow p-4 transition hover:shadow-lg ${viewMode === 'list' ? 'flex flex-col sm:flex-row items-start gap-6' : ''}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className={`${viewMode === 'list' ? 'w-32 h-32 md:w-40 md:h-40' : 'w-full h-40 md:h-48'} object-contain`}
                  />

                  <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <h3 className="text-lg font-bold">{product.title}</h3>
                    {renderStars(product.rating)}
                    <p className="text-sm text-gray-600">{product.category}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-blue-600 font-bold">${product.price}</span>
                      <span className="line-through text-gray-400 text-sm">${product.oldPrice}</span>
                    </div>
                    {viewMode === 'list' && (
                      <p className="text-xs text-gray-500 mt-1">Short description.</p>
                    )}

                    {/* Buy Button */}
                    <Link href={index === 0 ? "/ProductBuy" : "#"}>
                      <button
                        className="mt-3 w-full sm:w-32 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm"
                        disabled={index !== 0} // Disables button for products other than the first one
                      >
                        Buy
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      <Email />
      <Footer />
    </div>
  );
}

// 🔹 Helper Component for Filters
const FilterSection = ({ title, items }) => (
  <div>
    <h4 className="font-semibold mb-2">{title}</h4>
    {items.map(item => (
      <label key={item} className="block text-sm mb-1">
        <input type="checkbox" className="mr-2" />
        {item}
      </label>
    ))}
    <button className="text-blue-600 text-xs mt-1 hover:underline">See All</button>
  </div>
);
