'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Star } from 'lucide-react';

export default function Iphone14ProPage() {
  return (
    <div className="bg-white">
      <Header />

      
      <div className="max-w-7xl mx-auto px-4 text-sm text-gray-500 py-4">
        Home / Smartphones / Apple / <span className="text-black font-medium">iPhone 14 Pro</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-1 md:grid-cols-12 gap-6">
       
        <div className="md:col-span-5">
          <img
            src="pic.png"
            alt="iPhone 14 Pro"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="md:col-span-7 space-y-4 md:mr-32">
          <h1 className="text-2xl font-bold">iPhone 14 Pro</h1>
          <p className="text-green-600 text-sm">In stock</p>
          <div className="text-gray-500 text-sm">
            SKU: IP14PRO |{' '}
            <span className="inline-flex items-center gap-1">
              4.8 <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" /> (120 reviews)
            </span>
          </div>

  
          <div className="space-y-1">
            <div className="text-3xl font-bold text-blue-600">
              $999 <span className="text-gray-400 line-through ml-2">$1099</span>
            </div>
            <p className="text-xs text-gray-500">Inclusive of VAT. Free Shipping Included.</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Color</label>
              <div className="flex gap-2 mt-1">
                <div className="w-6 h-6 bg-purple-800 rounded-full cursor-pointer "></div>
                <div className="w-6 h-6 bg-gray-800 rounded-full cursor-pointer"></div>
                <div className="w-6 h-6 bg-silver-400 rounded-full cursor-pointer"></div>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Storage</label>
              <div className="flex gap-2 mt-1 flex-wrap">
                <button className="border px-3 py-1 rounded hover:bg-gray-100">128GB</button>
                <button className="border px-3 py-1 rounded hover:bg-gray-100">256GB</button>
                <button className="border px-3 py-1 rounded hover:bg-gray-100">512GB</button>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Quantity</label>
              <input
                type="number"
                min={1}
                defaultValue={1}
                className="border px-3 py-1 rounded w-full md:w-20 mt-1"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-3 mt-4">
            <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded shadow">
              Buy Now
            </button>
            <button className="w-full md:w-auto bg-gray-200 text-black py-2 px-6 rounded hover:bg-gray-300">
              Add to Cart
            </button>
          </div>

          
          <div className="text-sm text-gray-600 mt-3">
            <p>🚚 Free delivery by <span className="font-semibold text-black">Friday, April 19</span></p>
            <p>✅ 7-Day Return Policy</p>
          </div>
        </div>
      </div>

     
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-12 gap-8">
        
        <div className="md:col-span-8">
          <div className="border-b flex gap-6 text-sm font-medium">
            <button className="pb-2 border-b-2 border-blue-600 text-blue-600">Description</button>
            <button className="pb-2 text-gray-500 hover:text-black">Specifications</button>
          </div>

          <div className="py-4 text-sm text-gray-700">
            <p>The iPhone 14 Pro features a stunning 6.1-inch Super Retina XDR display, powered by the new A16 Bionic chip. Capture life’s moments with a pro camera system featuring a 48MP main lens, and enjoy lightning-fast 5G connectivity.</p>
          </div>

          <table className="w-full text-sm border border-gray-200 mt-4">
            <tbody>
              <tr className="border-t">
                <td className="py-2 px-4 font-medium">Model</td>
                <td className="py-2 px-4">iPhone 14 Pro</td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4 font-medium">Storage</td>
                <td className="py-2 px-4">128GB / 256GB / 512GB / 1TB</td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4 font-medium">Camera</td>
                <td className="py-2 px-4">48MP + 12MP + 12MP</td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4 font-medium">Battery</td>
                <td className="py-2 px-4">Up to 23 hours video playback</td>
              </tr>
            </tbody>
          </table>
        </div>

  
        <div className="md:col-span-4">
          <div className="bg-gray-50 border p-4 rounded space-y-3 text-sm">
            <h3 className="font-semibold text-lg mb-2">Related Categories</h3>
            <ul className="space-y-1 text-blue-600">
              <li className="hover:underline cursor-pointer">iPhones</li>
              <li className="hover:underline cursor-pointer">Apple Accessories</li>
              <li className="hover:underline cursor-pointer">Wireless Chargers</li>
              <li className="hover:underline cursor-pointer">Screen Protectors</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-lg font-semibold mb-4">You may also like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { img: '/products/watch.png', title: 'Apple Watch SE', price: 249 },
            { img: '/products/camera.png', title: '4K Camera', price: 499 },
            { img: 'Mac.png', title: 'MacBook Pro', price: 2399 },
            { img: 'Iphone.png', title: 'iPhone 13', price: 799 },
          ].map((item, i) => (
            <div key={i} className="border p-2 rounded text-sm text-center hover:shadow">
              <img src={item.img} className="h-24 mx-auto mb-2 object-contain" />
              <p>{item.title}</p>
              <p className="text-blue-600 font-bold">${item.price}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}