export default function ReferCard() {
  return (
    <div className="max-w-lg w-full bg-blue-500 text-white rounded-lg shadow-xl p-8 space-y-6">
      <div className="flex">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            className="w-32 h-32"
            src="https://cdn.pixabay.com/photo/2016/06/15/15/25/loudspeaker-1459128_640.png"
            alt="Refer Image"
          />
        </div>

        {/* Text Section */}
        <div className="ml-6 flex flex-col justify-between text-right">
          <h3 className="font-bold text-xl">
            Dapatkan 5 poin dengan mengajak teman kamu
          </h3>

          {/* Button */}
          <button className="mt-4 bg-white text-blue-500 font-bold py-3 px-3 rounded-lg hover:bg-blue-100">
            Refer Now
          </button>
        </div>
      </div>
    </div>
  );
}
