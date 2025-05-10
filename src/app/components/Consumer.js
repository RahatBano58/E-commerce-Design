'use client'

export default function Consumer() {
    const items = [
        { title: "Smart Watches", price: "From USD 19", img: "/products/soft chair.png" },
        { title: "Camera", price: "From USD 19", img: "/products/camera.png" },
        { title: "HeadPhones", price: "From USD 19", img: "/products/headset.png" },
        { title: "Smart watches", price: "From USD 19", img: "/products/watch.png" },
        { title: "Gaming set", price: "From USD 100", img: "/products/Gaming set.png" },
        { title: "Laptop & PC", price: "From USD 39", img: "/products/laptop.png" },
        { title: "Smart Phones", price: "From USD 19", img: "/products/mobile.png" },
        { title: "electric Kettle", price: "From USD 10", img: "/products/Mug.png" },
    ]
   
    return (
        <div className="bg-white rounded shadow grid grid-cols-1 md:grid-cols-4 gap-4 p-4 my-6">
            {/* Consumer and Electronic Gadgets Section */}
            <div className="relative col-span-1">
                <img src="/products/consumer.png" alt="Home" className="rounded w-full h-full object-cover"/>
                <div className="absolute top-6 left-6 p-4">
                    <h2 className="text-xl md:text-2xl font-semibold text-white">Consumer and electronic gadgets</h2>
                    <button className="mt-2 bg-white text-black px-4 py-2 rounded text-sm shadow hover:bg-gray-200">
                        Shop now
                    </button>
                </div>
            </div>

            {/* Product Grid Section */}
            <div className="col-span-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {items.map((item, index) => (
                    <div key={index} className="text-center">
                        <img src={item.img} className="h-24 mx-auto mb-2 object-contain"/>
                        <p className="text-sm font-medium">{item.title}</p>
                        <p className="text-xs text-gray-500">{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
