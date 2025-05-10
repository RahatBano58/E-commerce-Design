export default function MainSection(){
    return(
        <section className="flex flex-col md:flex-row gap-4 p-4">
            <aside className="w-full md:w-1/5 bg-white shadow rounded p-4">
                <ul className="space-y-2 text-gray-700 font-medium">
                    <li className="hover:text-blue-600 cursor-pointer">Automobiles</li>
                    <li >Clothes and wea</li>
                    <li >Home interior</li>
                    <li >Computer and tech</li>
                    <li >Tools, equipments</li>
                    <li >Sports and outdoo</li>
                    <li  >Animal and pets</li>
                    <li >Machinery tools</li>
                    <li >More category</li>

                </ul>

            </aside>
            <div className="relative w-full md:w-3/5 bg-teal-100 rounded shadow p-6 flex items-center justify-between">
  <img
    src="hero-img.png"
    alt="Background Image"
    className="absolute inset-0 w-full h-full object-cover rounded max-w-[800px] "
  />
  <div className="relative z-10">
    <h2 className="text-xl md:text-2xl font-semibold mb-2">Latest trending</h2>
    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Electronic items</h1>
    <button className="bg-white text-black px-4 py-2 rounded shadow hover:bg-blue-200">
      Learn more
    </button>
  </div>
</div>


            <div className="w-full md:w-1/5 flex flex-col gap-">
                <div className="bg-white p-4 rounded shadow text-center">
                    <p className="text-sm mb-2"> Hi, user let’s get started</p>
                    <button className="bg-blue-500 text-white px-4 py-1 rounded mb- hover:bg-blue-200">Join now </button>
                    <button className="bg-gray-200 px-4 py-1 rounded hover:bg-blue-500"> Log in</button>
                </div>
                <div className="bg-orange-400 text-white p-4 rounded shadow text-center">
                Get US $10 off with a new supplier
                </div>
                <div className="bg-teal-500 text-white p-4 rounded shadow text-cente">
                Send quotes with supplier preferences
                </div>
            </div>

        </section>
           
    )
}
//https://www.figma.com/design/LlOO473TtXN0NEdfXLb76i/Ecommerce-Web-Design--Community-?node-id=1-776&t=crvAuZ042zNOTHuM-0//