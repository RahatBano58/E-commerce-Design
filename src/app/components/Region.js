'use client'

export default function SupplierByRegion() {
  const suppliers = [
    { country: "Arabic Emirates", domain: "shopname.ae", flag: "/flags/icon.png" },
    { country: "Australia", domain: "shopname.au", flag: "/flags/AU@2x.png" },
    { country: "United States", domain: "shopname.us", flag: "/flags/US@2x.png" },
    { country: "Russia", domain: "shopname.ru", flag: "/flags/RU@2x.png" },
    { country: "Italy", domain: "shopname.it", flag: "/flags/IT@2x.png" },
    { country: "Denmark", domain: "denmark.com.dk", flag: "/flags/DK@2x.png" },
    { country: "France", domain: "shopname.com.fr", flag: "/flags/FR@2x.png" },
    { country: "China", domain: "shopname.ae", flag: "/flags/CN@2x.png" },
    { country: "Great Britain", domain: "shopname.co.uk", flag: "/flags/GB@2x.png" },
    { country: "Germany", domain: "shopname.co.uk", flag: "/flags/icon1.png" },
  ]

  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-[1180px] mx-auto ">
        <h2 className="text-2xl font-semibold mb-8">Suppliers by Region</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
          {suppliers.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <img src={item.flag} alt={item.country} className="w-5 h-5 object-contain w-10 h-auto" />
              <div>
                <p className="text-sm font-medium">{item.country}</p>
                <p className="text-xs text-gray-500">{item.domain}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
