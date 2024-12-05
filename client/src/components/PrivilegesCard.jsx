export default function PrivilegesCard({ image, title, expiryDate }) {
    return (
      <div className="bg-white p-3 border rounded-lg shadow-sm w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-28 object-cover rounded-md"
        />
        <div className="mt-3">
          <h3 className="text-sm font-bold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">Exp. {expiryDate}</p>
        </div>
      </div>
    );
  }
  