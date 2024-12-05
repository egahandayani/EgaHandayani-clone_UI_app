export default function LevelCard() {
  return (
    <div className="max-w-lg w-full bg-white rounded-lg shadow-2xl p-8 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Your level</h2>
        <button className="text-orange-500 text-base font-bold uppercase hover:text-orange-600">
          Learn More
        </button>
      </div>

      {/* Levels */}
      <div className="flex justify-between items-center mt-6">
        {/* Silver Level */}
        <div className="flex flex-col items-center space-y-3 mt-6">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-14 h-14 text-gray-400"
            >
              <path d="M12 2L9.5 6.5L5 7.5L8.5 11L7.5 15L12 13L16.5 15L15.5 11L19 7.5L14.5 6.5L12 2z" />
            </svg>
          </div>
          <p className="text-center text-lg font-bold text-gray-800">Silver</p>
        </div>

        {/* Divider */}
        <div className="border-b-2 border-gray-400 w-full"></div>

        {/* Gold Level */}
        <div className="flex flex-col items-center space-y-3 opacity-50 mt-6">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-14 h-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </div>
          <p className="text-center text-lg font-bold">Gold</p>
        </div>

        {/* Divider */}
        <div className="border-b-2 border-gray-400 w-full"></div>

        {/* Premium Level */}
        <div className="flex flex-col items-center space-y-3 opacity-50 mt-6">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-14 h-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </div>
          <p className="text-center text-lg font-bold">Platinum</p>
        </div>
      </div>

      {/* Info */}
      <div className="mt-6">
        <div className="border-b-2 border-gray-400"></div>
        <p className="text-left text-lg mt-4">
          Spend <span className="font-bold text-grey-500">3,000,000</span> by{" "}
          <span className="font-bold text-grey-500">23 Nov 2024</span> to reach{" "}
          <span className="font-bold text-grey-500">Gold</span>
        </p>
      </div>
    </div>
  );
}
