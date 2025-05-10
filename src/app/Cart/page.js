'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

const cartItems = [
  {
    id: 1,
    name: 'T-shirts with multiple colors, for men and lady',
    price: 19.99,
    image: '/Product/shirt.png',
    seller: 'Market',
    Size: 'medium, Color: blue, Material: Plastic',
  },
  {
    id: 2,
    name: 'Jeans with multiple colors, for men and lady',
    price: 39.98,
    image: '/Product/travel-bag.png',
    seller: 'Best factory LLC',
    Size: 'medium, Color: blue, Material: Plastic',
  },
  {
    id: 3,
    name: 'T-shirts with multiple colors, for men and lady',
    price: 29.95,
    image: '/products/lamp.png',
    seller: 'Artel Market',
    Size: 'medium, Color: blue, Material: Plastic',
  },
];

const savedItems = [
  {
    id: 1,
    name: 'Mobile Phone',
    price: 99.99,
    image: '/img.png',
    title: 'GoPro HERO6 4K Action',
    description: 'Camera - Black',
  },
  {
    id: 2,
    name: 'iPhone 12',
    price: 99.99,
    image: '/img1.png',
    title: 'GoPro HERO6 4K Action',
    description: 'Camera - Black',
  },
  {
    id: 3,
    name: 'Smart Watch',
    price: 99.99,
    image: '/img2.png',
    title: 'GoPro HERO6 4K Action',
    description: 'Camera - Black',
  },
];

export default function CartPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="max-w-6xl mx-auto bg-white px-4 sm:px-6 md:px-8 py-6 rounded-md shadow">
        <h2 className="text-2xl font-semibold mb-4">My cart (3)</h2>

        {/* Cart Items */}
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4  pb-4"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <Image src={item.image} alt={item.name} width={60} height={60} className="rounded" />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">Seller: {item.seller}</p>
                  <p className="text-sm text-gray-500">{item.Size}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <button className="text-red-500 text-sm border px-3 py-1 rounded">Remove</button>
                    <button className="text-blue-500 text-sm border px-3 py-1 rounded">Save for Later</button>
                  </div>
                </div>
              </div>
              <div>
                <select className="border px-2 py-1 rounded w-full sm:w-auto">
                  <option>Qty: 1</option>
                  <option>Qty: 3</option>
                  <option>Qty: 9</option>
                </select>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <button className="bg-gray-200 px-4 py-2 rounded w-full sm:w-auto">Back to shop</button>
          <button className="bg-white text-blue-600 border px-4 py-2 rounded w-full sm:w-auto">Remove All</button>
        </div>

        {/* Feature Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 text-center">
          <div className="flex flex-col items-center">
            <Image src="/secure.png" alt="Secure Payment" width={36} height={36} className="mb-2" />
            <p className="text-sm font-semibold text-gray-700">Secure payment</p>
            <p className="text-xs text-gray-400">Have you ever finally just</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/customer.png" alt="Customer Support" width={36} height={36} className="mb-2" />
            <p className="text-sm font-semibold text-gray-700">Customer support</p>
            <p className="text-xs text-gray-400">Have you ever finally just</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/delivery.png" alt="Free Delivery" width={36} height={36} className="mb-2" />
            <p className="text-sm font-semibold text-gray-700">Free delivery</p>
            <p className="text-xs text-gray-400">Have you ever finally just</p>
          </div>
        </div>

        {/* Saved for Later */}
        <h3 className="mt-10 text-xl font-semibold">Saved for later</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {savedItems.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded shadow">
              <Image src={item.image} alt={item.name} width={120} height={120} className="mx-auto" />
              <p className="mt-2 font-medium">${item.price.toFixed(2)}</p>
              <p className="font-medium">{item.name}</p>
              <p className="font-medium">{item.title}</p>
              <p className="font-medium">{item.description}</p>
              <div className="mt-2 flex justify-center gap-2">
                <img src="/shopping_cart.png" alt="Cart" />
                <button className="text-blue-600 text-sm rounded">Move to cart</button>
              </div>
            </div>
          ))}
        </div>

        {/* Discount Banner */}
        <div className="mt-10 bg-blue-600 text-white p-6 rounded-lg text-center">
          <p className="text-lg font-semibold">Super discount on more than 100 USD</p>
          <p>Have you ever finally just write dummy info?</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

