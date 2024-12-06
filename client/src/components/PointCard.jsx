export default function PointCard() {
  return (
    <div className="max-w-lg w-full bg-white border border-gray-300 rounded-lg shadow-md p-6 mx-4 my-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">Bakmi GM Points</h2>
        <button className="text-xl text-gray-800 font-bold">40</button>
      </div>

      {/* Info */}
      <div className="mt-4">
        <p className="text-left text-sm text-gray-400">
          <span className="font-bold text-gray-400">40</span> will expire on{" "}
          <span className="font-bold text-gray-400">22 Feb 2024</span>.{" "}
          <span className="font-bold text-blue-500 underline cursor-pointer">
            See Details
          </span>
        </p>
      </div>
    </div>
  );
}
