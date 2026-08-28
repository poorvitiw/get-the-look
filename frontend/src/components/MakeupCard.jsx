import { useNavigate } from "react-router-dom";

function MakeupCard({ look }) {

    const navigate = useNavigate();

    return (

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

            {/* Image Placeholder */}
            <img
                src={`/images/${look.imageUrl}`}
                alt={look.name}
                className="h-80 w-full object-cover"
            />
            {/* Card Content */}
            <div className="p-6">

                <h2 className="text-2xl font-bold text-gray-800">
                    {look.name}
                </h2>

                <p className="text-sm text-pink-500 font-medium mt-2">
                    {look.difficulty} • {look.timeRequired} mins
                </p>

                <p className="text-gray-600 mt-4 leading-relaxed">
                    {look.description}
                </p>

                <p className="mt-4 text-gray-700">
                    <span className="font-semibold">Category:</span> {look.category}
                </p>

                <button
                    onClick={() => navigate(`/look/${look.id}`)}
                    className="mt-6 w-full bg-pink-500 text-white py-3 rounded-xl hover:bg-pink-600 transition"
                >
                    View Products
                </button>

            </div>

        </div>

    );
}

export default MakeupCard;