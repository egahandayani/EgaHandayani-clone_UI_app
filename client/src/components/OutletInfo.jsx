export default function OutletInfo({ name, address, distance }) {
  return (
    <div className="bg-white p-4 border rounded-lg shadow-sm w-full">
      <h3 className="text-lg font-bold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500 mt-1">{address}</p>
      <div className="flex items-center mt-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>

        <p className="text-sm text-gray-500">{distance} km</p>
      </div>
    </div>
  );
}
