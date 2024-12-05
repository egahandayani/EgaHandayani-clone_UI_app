export default function PointCard() {
  return (
    <div className="max-w-lg w-full bg-white rounded-lg shadow-xl p-8 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Bakmi GM Points</h2>
        <button className="text-2xl text-gray-800 font-bold">40</button>
      </div>

      {/* Info */}
      <div className="mt-4">
        <p className="text-left text-lg text-gray-400">
          <span className="font-bold text-gray-400">40</span> will expire on{" "}
          <span className="font-bold text-gray-400">22 Feb 2024</span>. by{" "}
          <span className="font-bold text-blue-500 underline">See Details</span>
        </p>
      </div>
    </div>
  );
}
