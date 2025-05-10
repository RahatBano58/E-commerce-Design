'use client'
export default function Consumer(){
    const items = [
        { title: "Smart Watches", price: "From USD 19", img: "/products/soft chair.png" },
        { title: "Camera", price: "From USD 19", img: "/products/camera.png" },
        { title: "HeadPhones", price: "From USD 19", img: "/products/headset.png" },
        { title: "Smart watches", price: "From USD 19", img: "/products/watch.png" },
        { title: "Gaming set", price: "From USD 100", img: "/products/Gaming set.png" },
        { title: "Laptop & PC", price: "From USD 39", img: "/products/laptop.png" },
        { title: "Smart Phones", price: "From USD 19", img: "/products/mobile.png" },
        { title: "electric Kattle", price: "From USD 10", img: "/products/Mug.png" },
      ]
       
       return (
        <div  className="bg-white rounded shadow grid grid-cols-1 md:grid-cols-4 gap-4 p-4 my-6">
            <div className="relative col-span-1">
                <img src="/products/consumer.png" alt="Home" className="rounded w-full h-full object-cover"/>
                <div  className="absolute top-6 left-6">
                    <h2 className="text-xl font-semibold text-white">Consumer and electronic gadgets</h2>
                  <button className="mt-2 bg-white text-black px-3 py-1 rounded text-sm shadow hover:bg-gray-200"> Source now</button>
                </div>
            </div>
            <div  className="col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
                {items.map((item ,index)=> (
                    <div key={index}>
                        <img src={item.img} className="h-16 mx-auto mb-2"/>
                        <p className="text-sm font-medium">{item.title}  </p>
                        <p className="text-xs text-gray-500">{item.price}</p>

                    </div>
                ))}

            </div>
        </div>
       )


}