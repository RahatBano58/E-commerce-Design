'use client'

export default function Service() {
  return (
    <section className="max-w-[1180px] mx-auto px-4 my-12 ">
      <h2 className="text-xl font-semibold mb-6">Our Extra Service</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <img src="/1.png" alt="Service 1" className="mx-auto" />
        <img src="/2.png" alt="Service 2" className="mx-auto" />
        <img src="/3.png" alt="Service 3" className="mx-auto" />
        <img src="/4.png" alt="Service 4" className="mx-auto" />
      </div>
    </section>
  )
}
