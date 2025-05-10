'use client'

export default function HomeOutdoorSection() {
  const items = [
    { title: "Soft chairs", price: "From USD 19", img: "/products/soft Chair.png" },
    { title: "Sofa & chair", price: "From USD 19", img: "/products/lamp.png" },
    { title: "Kitchen dishes", price: "From USD 19", img: "/products/dish.png" },
    { title: "Smart watches", price: "From USD 19", img: "/products/watch.png" },
    { title: "Kitchen mixer", price: "From USD 100", img: "/products/juicer.png" },
    { title: "Blenders", price: "From USD 39", img: "/products/blender.png" },
    { title: "Home appliance", price: "From USD 19", img: "/products/rasm.png" },
    { title: "Coffee maker", price: "From USD 10", img: "/products/home decoration.png" },
  ];

  return (
    <div className="bg-white rounded shadow grid grid-cols-1 md:grid-cols-4 gap-4 p-4 my-6">
      {/* Main Image Section */}
      <div className="relative col-span-1">
        <img
          src="/products/home.png"
          alt="Home"
          className="rounded w-full h-auto object-cover"
        />
        <div className="absolute top-6 left-6">
          <h2 className="text-xl font-semibold text-white">Home and outdoor</h2>
          <button className="mt-2 bg-white text-black px-3 py-1 rounded text-sm shadow hover:bg-gray-200">
            Shop now
          </button>
        </div>
      </div>

      {/* Items Grid Section */}
      <div className="col-span-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={item.img} className="h-16 mx-auto mb-2" />
            <p className="text-sm font-medium">{item.title}</p>
            <p className="text-xs text-gray-500">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
