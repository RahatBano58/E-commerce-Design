'use client'

export default function DealsSection() {
    const deals = [
        { name: "Smart watches", discount: "-25%", img: "/products/watch.png" },
        { name: "Laptops", discount: "-15%", img: "/products/laptop.png" },
        { name: "GoPro cameras", discount: "-40%", img: "/products/camera.png" },
        { name: "Headphones", discount: "-25%", img: "/products/headphone.png" },
        { name: "Canon cameras", discount: "-25%", img: "/products/mobile.png" },
    ]
    
    return (
        <div className="bg-white rounded shadow grid grid-cols-1 md:grid-cols-6 gap-4 p-4 my-6">
            {/* Deals Heading and Countdown */}
            <div className="col-span-1 p-4">
                <h2 className="font-semibold text-lg sm:text-xl">Deals and offers</h2>
                <p className="text-sm text-gray-500 mb-4">Hygiene equipment</p>
                <div className="flex gap-2 text-center">
                    {["04", "13", "34", "56"].map((val, idx) => (
                        <div key={idx} className="bg-gray-800 text-white px-2 py-1 rounded text-xs sm:text-sm">
                            <p className="font-bold">{val}</p>
                            <p>{["Days", "Hour", "Min", "Sec"][idx]}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Deals Grid */}
            {deals.map((item, index) => (
                <div key={index} className="col-span-1 flex flex-col items-center justify-center p-4 border-2 border-white last:border-none">
                    <img src={item.img} alt={item.name} className="h-16 sm:h-20 mb-2 object-contain"/>
                    <p className="text-sm sm:text-base font-medium">{item.name}</p>
                    <span className="text-red-500 text-xs sm:text-sm font-bold mt-1">{item.discount}</span>
                </div>
            ))}
        </div>
    )
}
