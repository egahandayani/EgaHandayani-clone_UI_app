export default function RewardCard({ image, name, points }) {
    return (
      <div className="bg-white p-3 border rounded-lg shadow-sm w-full">
        <img
          src={image}
          alt={name}
          className="w-full h-28 object-cover rounded-md"
        />
        <div className="mt-3">
          <h3 className="text-sm font-bold text-gray-800">{name}</h3>
          <p className="text-sm font-bold text-orange-500 mt-1">{points} Pts</p>
        </div>
      </div>
    );
  }
  