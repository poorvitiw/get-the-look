import { useEffect, useState } from "react";
import api from "../services/api";
import MakeupCard from "../components/MakeupCard";
import { useNavigate } from "react-router-dom";

function Home() {

    const [looks, setLooks] = useState([]);
    const navigate = useNavigate();
   const exploreLooks = () => {
       document.getElementById("looks")?.scrollIntoView({
           behavior: "smooth",
           block: "start"
       });
   };

    useEffect(() => {

        api.get("/makeup-looks")
            .then((response) => {
                console.log("Makeup looks response:", response.data);

                if (Array.isArray(response.data)) {
                    setLooks(response.data);
                } else {
                    console.error("Expected an array but received:", response.data);
                    setLooks([]);
                }
            })
            .catch((error) => {

                console.error(error);

            });

    }, []);

    return (

        <div className="min-h-screen bg-pink-50">

            <div className="max-w-6xl mx-auto p-10">

               <div className="text-center py-16">

                   <h1 className="text-6xl font-extrabold text-pink-600 tracking-tight">
                       Get The Look
                   </h1>

                   <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">

                       Discover trending makeup looks and explore the products
                       you can use to recreate them.

                   </p>

                   <button
                       onClick={exploreLooks}
                       className="mt-8 bg-pink-500 text-white px-8 py-3 rounded-full
                                  hover:bg-pink-600 transition duration-300 shadow-lg"
                   >
                       Explore Looks
                   </button>

               </div>

                <div
                    id="looks"
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[300px]"
                >

                    {Array.isArray(looks) && looks.map((look) => (

                        <MakeupCard
                            key={look.id}
                            look={look}
                        />

                    ))}

                </div>

            </div>

        </div>

    );

}

export default Home;