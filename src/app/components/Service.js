'use client'

export default function Service() {
  return (
    <section className="max-w-[1180px] mx-auto px-4 my-12">
      <h2 className="text-xl font-semibold mb-6">Our Extra Service</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex justify-center">
          <img src="/1.png" alt="Service 1" className="w-full h-auto max-w-[200px]" />
        </div>
        <div className="flex justify-center">
          <img src="/2.png" alt="Service 2" className="w-full h-auto max-w-[200px]" />
        </div>
        <div className="flex justify-center">
          <img src="/3.png" alt="Service 3" className="w-full h-auto max-w-[200px]" />
        </div>
        <div className="flex justify-center">
          <img src="/4.png" alt="Service 4" className="w-full h-auto max-w-[200px]" />
        </div>
      </div>
    </section>
  )
}
