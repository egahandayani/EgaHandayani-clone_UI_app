export default function ReferCard() {
  return (
    <div className="w-full bg-blue-500 text-white rounded-lg shadow-xl p-4 sm:p-6 md:p-8 m-4 sm:m-6 max-w-sm sm:max-w-md min-h-[220px] flex justify-center items-center">
      <div className="flex flex-row items-center space-x-4 sm:space-x-6">
        {/* Image Section */}
        <div className="flex-shrink-0 w-1/3">
          <img
            className="w-30 h-30 sm:w-24 sm:h-24 object-cover"
            src="https://cdn.pixabay.com/photo/2016/06/15/15/25/loudspeaker-1459128_640.png"
            alt="Refer Image"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-between text-right w-2/3">
          <h3 className="font-bold text-lg sm:text-xl">
            Dapatkan 5 poin dengan mengajak teman kamu
          </h3>

          {/* Button */}
          <button className="mt-4 bg-white text-blue-500 font-bold py-2 px-4 rounded-lg hover:bg-blue-100 w-auto">
            Refer Now
          </button>
        </div>
      </div>
    </div>
  );
}
