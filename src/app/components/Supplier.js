export default function Supplier() {
  return (
    <section
      className="w-full max-w-[1180px] h-auto mx-auto bg-cover bg-center rounded-xl overflow-hidden relative"
      style={{ backgroundImage: "url('/your-background.jpg')" }}
    >
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 bg-blue-900/70 p-6 md:p-10 text-white">
        
        {/* Left Text Section */}
        <div className="flex flex-col justify-center mb-6 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
            An easy way to send <br />
            requests to all suppliers
          </h2>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
        </div>

        {/* Right Form Section */}
        <div className="bg-white text-gray-800 rounded-xl p-4 md:p-6 shadow-lg">
          <h3 className="text-lg md:text-xl font-semibold mb-4">Send quote to suppliers</h3>
          <form className="space-y-4">
            
            {/* Item Need Input */}
            <input
              type="text"
              placeholder="What item you need?"
              className="w-full p-3 border border-gray-300 rounded-lg text-sm"
            />
            
            {/* Details Textarea */}
            <textarea
              rows="2"
              placeholder="Type more details"
              className="w-full p-3 border border-gray-300 rounded-lg text-sm"
            ></textarea>

            {/* Quantity and Unit Select */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <input
                type="number"
                placeholder="Quantity"
                className="w-full sm:w-1/2 p-3 border border-gray-300 rounded-lg text-sm"
              />
              <select className="w-full sm:w-1/2 p-3 border border-gray-300 rounded-lg text-sm">
                <option>Pcs</option>
                <option>Boxes</option>
                <option>Kg</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition text-sm"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
