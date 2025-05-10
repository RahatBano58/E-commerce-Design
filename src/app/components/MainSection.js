'use client'

export default function MainSection() {
  return (
    <section className="flex flex-col md:flex-row gap-4 p-4">
      {/* Sidebar - Mobile to Desktop */}
      <aside className="w-full md:w-1/5 bg-white shadow rounded p-4">
        <ul className="space-y-2 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Automobiles</li>
          <li>Clothes and wear</li>
          <li>Home interior</li>
          <li>Computer and tech</li>
          <li>Tools, equipments</li>
          <li>Sports and outdoor</li>
          <li>Animals and pets</li>
          <li>Machinery tools</li>
          <li>More categories</li>
        </ul>
      </aside>

      {/* Main Content - Background Image Section */}
      <div className="relative w-full md:w-3/5 bg-teal-100 rounded shadow p-6 flex items-center justify-between">
        <img
          src="hero-img.png"
          alt="Background Image"
          className="absolute inset-0 w-full h-full object-cover rounded-md max-w-full"
        />
        <div className="relative z-10 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Latest trending</h2>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Electronic items</h1>
          <button className="bg-white text-black px-4 py-2 rounded shadow hover:bg-blue-200">
            Learn more
          </button>
        </div>
      </div>

      {/* Right Section - Mobile to Desktop */}
      <div className="w-full md:w-1/5 flex flex-col gap-4">
        {/* Welcome Card */}
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="text-sm mb-2">Hi, user let’s get started</p>
          <button className="bg-blue-500 text-white px-4 py-1 rounded mb-2 hover:bg-blue-200">Join now</button>
          <button className="bg-gray-200 px-4 py-1 rounded hover:bg-blue-500">Log in</button>
        </div>

        {/* Discount Card */}
        <div className="bg-orange-400 text-white p-4 rounded shadow text-center">
          Get US $10 off with a new supplier
        </div>

        {/* Quote Card */}
        <div className="bg-teal-500 text-white p-4 rounded shadow text-center">
          Send quotes with supplier preferences
        </div>
      </div>
    </section>
  );
}
