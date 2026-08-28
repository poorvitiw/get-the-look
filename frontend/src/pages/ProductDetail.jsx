import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

function ProductDetail() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        api.get("/products")
            .then((response) => {

                const foundProduct = response.data.find(
                    (item) => item.id === Number(id)
                );

                setProduct(foundProduct);

            })
            .catch((error) => {

                console.error("Error loading product:", error);

            })
            .finally(() => {

                setLoading(false);

            });

    }, [id]);

    if (loading) {

        return (

            <div className="min-h-screen bg-pink-50 flex items-center justify-center">

                <div className="text-center">

                    <div className="text-5xl mb-4">
                        💄
                    </div>

                    <p className="text-gray-500">
                        Loading product...
                    </p>

                </div>

            </div>

        );

    }

    if (!product) {

        return (

            <div className="min-h-screen bg-pink-50 flex items-center justify-center">

                <div className="bg-white rounded-3xl shadow-md p-12 text-center">

                    <div className="text-5xl mb-5">
                        💕
                    </div>

                    <h2 className="text-2xl font-bold text-gray-800">
                        Product not found
                    </h2>

                    <button
                        onClick={() => navigate(-1)}
                        className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
                    >
                        ← Go Back
                    </button>

                </div>

            </div>

        );

    }

    return (

        <div className="min-h-screen bg-pink-50">

            <div className="max-w-5xl mx-auto px-6 py-10">

                {/* Back button */}

                <button
                    onClick={() => navigate(-1)}
                    className="text-pink-600 font-semibold hover:text-pink-800 transition mb-8"
                >
                    ← Back to Products
                </button>


                {/* Product detail */}

                <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

                    <div className="grid md:grid-cols-2">

                        {/* Product image */}

                        <div className="bg-pink-50 flex items-center justify-center p-12 min-h-[450px]">

                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="max-h-96 w-full object-contain"
                            />

                        </div>


                        {/* Product information */}

                        <div className="p-10 flex flex-col justify-center">

                            <p className="text-pink-500 font-semibold uppercase tracking-widest text-sm">
                                {product.category}
                            </p>

                            <h1 className="text-4xl font-extrabold text-gray-800 mt-3">
                                {product.name}
                            </h1>

                            <p className="text-lg text-gray-500 mt-3">
                                {product.brand}
                            </p>

                            <div className="w-16 h-1 bg-pink-500 rounded-full my-6"></div>

                            <p className="text-gray-600 leading-relaxed">
                                This product was selected as part of the
                                makeup products recommended for recreating
                                this look.
                            </p>

                            <p className="text-3xl font-extrabold text-gray-800 mt-8">
                                ₹{product.price}
                            </p>

                            <button
                                onClick={() => navigate(-1)}
                                className="mt-8 bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition duration-300"
                            >
                                ← Back to Products
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default ProductDetail;