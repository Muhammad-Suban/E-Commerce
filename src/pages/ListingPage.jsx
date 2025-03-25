import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ListingPage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();


  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Explore Our Products
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Top-rated products at the best prices.
        </p>
      </section>

      {/* Product Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-2xl bg-white flex flex-col items-start p-4"
          >
            {/* Image Container */}
            <div className="w-full h-56 overflow-hidden rounded-md flex items-center justify-center relative group">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl"
                onClick={() => navigate(`/product/${product.id}`)}
              />
            </div>

            {/* Wrapper div that centers content ONLY on small screens */}
            <div className="sm:flex sm:flex-col sm:items-center sm:text-center w-full md:flex md:flex-col md:items-start md:text-start ">
              {/* Title */}
              <h2 className="text-lg md:text-xl font-semibold mt-2">
                {product.title.length > 35
                  ? product.title.slice(0, 35) + "..."
                  : product.title}
              </h2>

              {/* Price */}
              <p className="text-gray-700 font-medium mt-2">${product.price}</p>

              {/* Rating Section */}
              <div className="flex items-center mt-2 sm:justify-center">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${
                      i < Math.round(product.rating?.rate)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
                <span className="ml-2 text-xs text-gray-600">
                  ({product.rating?.count} reviews)
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ListingPage;
