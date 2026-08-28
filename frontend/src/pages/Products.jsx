import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

function Products() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        api.get(`/products/look/${id}`)
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error("Error loading products:", error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [id]);

    return (

        <div className="min-h-screen bg-pink-50">

            <div className="max-w-6xl mx-auto px-6 py-10">

                {/* Back button */}

                <button
                    onClick={() => navigate(-1)}
                    className="text-pink-600 font-semibold hover:text-pink-800 transition mb-8"
                >
                    ← Back to Look
                </button>


                {/* Header */}

                <div className="text-center mb-12">

                    <p className="text-pink-500 font-semibold uppercase tracking-widest text-sm">
                        Get The Look
                    </p>

                    <h1 className="text-5xl font-extrabold text-gray-800 mt-3">
                        Recreate The Look
                    </h1>

                    <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
                        Here are the products you need to recreate this makeup look.
                    </p>

                </div>


                {/* Loading */}

                {loading && (

                    <div className="text-center py-20">

                        <div className="text-4xl mb-4">
                            💄
                        </div>

                        <p className="text-gray-500">
                            Finding the products...
                        </p>

                    </div>

                )}


                {/* Empty state */}

                {!loading && products.length === 0 && (

                    <div className="bg-white rounded-3xl shadow-md p-12 text-center max-w-xl mx-auto">

                        <div className="text-5xl mb-5">
                            💕
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800">
                            Products coming soon
                        </h2>

                        <p className="text-gray-500 mt-3">
                            We're still putting together the perfect product list
                            for this look.
                        </p>

                    </div>

                )}


                {/* Products */}

                {!loading && products.length > 0 && (

                    <>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                            {products.map((product) => (

                                <div
                                    key={product.id}
                                    className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
                                >

                                    {/* Product image */}

                                    <div className="h-52 bg-pink-50 flex items-center justify-center p-6">

                                        <img
                                            src={product.imageUrl}
                                            alt={product.name}
                                            className="h-full w-full object-contain group-hover:scale-105 transition duration-300"
                                        />

                                    </div>


                                    {/* Product information */}

                                    <div className="p-6">

                                        <p className="text-sm text-pink-500 font-semibold uppercase tracking-wide">
                                            {product.category}
                                        </p>

                                        <h2 className="text-xl font-bold text-gray-800 mt-2">
                                            {product.name}
                                        </h2>

                                        <p className="text-gray-500 mt-1">
                                            {product.brand}
                                        </p>


                                        <div className="flex items-center justify-between mt-6">

                                            <p className="text-xl font-bold text-gray-800">
                                                ₹{product.price}
                                            </p>

                                            <div className="mt-6">

                                                <p className="text-xl font-bold text-gray-800">
                                                    ₹{product.price}
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>


                        {/* Bottom note */}

                        <div className="text-center mt-12">

                            <p className="text-gray-500">
                                 These products were selected to help recreate the look.
                            </p>

                        </div>

                    </>

                )}

            </div>

        </div>

    );
}

export default Products;