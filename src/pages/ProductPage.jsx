import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { fetchedProductById } from "../utils/api";

const ProductPage = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
       const data = await fetchedProductById(id)
        setProductData(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);

  if (!productData) {
    return <div className="text-center py-20 text-xl">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Product Image */}
        <div className="w-full max-w-md lg:max-w-lg h-96 bg-gray-100 rounded-lg overflow-hidden shadow-lg flex items-center justify-center relative group">
          <img
            src={productData.image}
            alt={productData.title}
            className="w-full h-full object-contain p-5 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl"
          />
        </div>

        {/* Product Details */}
        <div className="w-full max-w-xl space-y-4 text-center lg:text-left">
          <h1 className="text-3xl font-bold">{productData.title}</h1>
          <p className="text-xl text-gray-800 font-semibold">
            ${productData.price}
          </p>

          {/* Rating */}
          <div className="flex justify-center lg:justify-start items-center gap-1">
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={i}
                className={`text-xl ${
                  i < Math.round(productData.rating?.rate)
                    ? "text-yellow-500"
                    : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
            <span className="ml-2 text-gray-600 text-sm">
              ({productData.rating?.count} reviews)
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-800">{productData.description}</p>
 
          {/* Buy Button */}
          <button className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-800 to-gray-800 text-white rounded-md shadow-lg hover:opacity-90 transition-all">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
