import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Recommendation() {

    const [occasion, setOccasion] = useState("");
    const [recommendation, setRecommendation] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const getRecommendation = () => {

        if (!occasion) {
            return;
        }

        setLoading(true);
        setRecommendation(null);

        api.post("/makeup-looks/recommend", {
            occasion: occasion
        })
            .then((response) => {
                setRecommendation(response.data);
            })
            .catch((error) => {
                console.error("Recommendation error:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (

        <div className="min-h-screen bg-pink-50">

            <div className="max-w-5xl mx-auto px-6 py-16">

                {/* Header */}

                <div className="text-center mb-12">

                    <p className="text-pink-500 font-semibold uppercase tracking-widest text-sm">
                        Get The Look
                    </p>

                    <h1 className="text-5xl font-extrabold text-gray-800 mt-3">
                        Find Your Perfect Look
                    </h1>

                    <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
                        Tell us where you're going and we'll help you find a
                        makeup look that's perfect for the occasion.
                    </p>

                </div>


                {/* Recommendation Form */}

                <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 max-w-2xl mx-auto">

                    <label className="block text-lg font-semibold text-gray-800 mb-3">
                        What's the occasion?
                    </label>

                    <select
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        className="w-full border border-gray-200 rounded-xl p-4 text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    >

                        <option value="">
                            Select an occasion
                        </option>

                        <option value="party">
                             Party
                        </option>

                        <option value="wedding">
                             Wedding
                        </option>

                        <option value="office">
                             Office
                        </option>

                    </select>


                    <button
                        onClick={getRecommendation}
                        disabled={!occasion || loading}
                        className="mt-6 w-full bg-pink-500 text-white py-4 rounded-xl font-semibold text-lg hover:bg-pink-600 transition duration-300 disabled:opacity-50"
                    >

                        {loading
                            ? "Finding Your Look..."
                            : "Recommend My Look"
                        }

                    </button>

                </div>


                {/* Recommendation Result */}

                {recommendation && (

                    <div className="mt-10 bg-white rounded-3xl shadow-lg overflow-hidden max-w-2xl mx-auto">

                        <div className="p-8 md:p-10">

                            <p className="text-pink-500 font-semibold uppercase tracking-widest text-sm">
                                Your Recommended Look
                            </p>

                            <h2 className="text-4xl font-bold text-gray-800 mt-3">
                                {recommendation.name}
                            </h2>

                            <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                                {recommendation.description}
                            </p>


                            <div className="grid grid-cols-3 gap-4 mt-8">

                                <div className="bg-pink-50 rounded-xl p-4 text-center">
                                    <p className="text-sm text-gray-500">
                                        Difficulty
                                    </p>

                                    <p className="font-semibold text-gray-800 mt-1">
                                        {recommendation.difficulty}
                                    </p>
                                </div>


                                <div className="bg-pink-50 rounded-xl p-4 text-center">
                                    <p className="text-sm text-gray-500">
                                        Time
                                    </p>

                                    <p className="font-semibold text-gray-800 mt-1">
                                        {recommendation.timeRequired} mins
                                    </p>
                                </div>


                                <div className="bg-pink-50 rounded-xl p-4 text-center">
                                    <p className="text-sm text-gray-500">
                                        Category
                                    </p>

                                    <p className="font-semibold text-gray-800 mt-1">
                                        {recommendation.category}
                                    </p>
                                </div>

                            </div>


                            <button
                                onClick={() =>
                                    navigate(`/look/${recommendation.id}`)
                                }
                                className="mt-8 w-full bg-pink-500 text-white py-4 rounded-xl font-semibold hover:bg-pink-600 transition duration-300"
                            >
                                View Products
                            </button>

                        </div>

                    </div>

                )}

            </div>

        </div>

    );
}

export default Recommendation;