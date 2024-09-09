import React from "react";
import ProductCard from "./components/ProductCard";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const fetchDetails = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = res.json();
  return data;
};

const HomePage = async () => {
  const products = await fetchDetails();

  return (
    <div>
      <NavBar />
      <div className="container mx-auto px-4 grid grid-cols-4">
        <div className="col-span-4">
          <h1 className="text-2xl font-bold text-center my-8 pt-14">
            Product Listing
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
