'use client'
import Link from "next/link";

export default function RecommendationItems() {
  const products = [
    { id: 1, price: "$10.30", title: "T-shirts with multiple colors, for men", image: "/Product/shirt.png" },
    { id: 2, price: "$10.30", title: "Jeans shorts for men blue color", image: "/Product/shorts.png" },
    { id: 3, price: "$12.50", title: "Brown winter Jacket medium size", image: "/Product/jacket.png" },
    { id: 4, price: "$34.00", title: "Pot", image: "/Product/pot.png" },
    { id: 5, price: "$99.00", title: "Coat for men", image: "/Product/coat.png" },
    { id: 6, price: "$9.99", title: "Mug", image: "/Product/Mug.png" },
    { id: 7, price: "$8.99", title: "Headset for gaming with mic", image: "/Product/headset.png" },
    { id: 8, price: "$10.30", title: "Smartwatch silver color modern", image: "/Product/watch.png" },
    { id: 9, price: "$10.30", title: "Blue wallet for men leather material", image: "/Product/bag.png" },
    { id: 10, price: "$80.95", title: "Jeans bag for travel for men", image: "/Product/travel-bag.png" },
  ];

  return (
    <section className="max-w-[1180px] mx-auto px-4 my-12">
      <h1 className="text-xl font-semibold mb-6">Recommended Items</h1>
      {/* Responsive grid layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <Link href="/product" key={product.id}>
            <div className="border-2 border-white p-3 hover:shadow-md transition bg-white cursor-pointer">
              <img src={product.image} alt={product.title} className="w-full h-32 object-contain mb-3" />
              <p className="text-sm font-semibold">{product.price}</p>
              <p className="text-sm text-gray-600">{product.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
