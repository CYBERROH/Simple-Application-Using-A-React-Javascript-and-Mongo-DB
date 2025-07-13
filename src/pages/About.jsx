import React, { useState, useEffect } from "react";
import ProductList from "../ProductList";
import AddProduct from "../AddProduct";

function About() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    async function fetchProducts() {
        const response = await fetch('http://localhost:3000/products');
        if (!response.ok) {
            console.error("error");
            return;
        }
        const products = await response.json();
        setProducts(products);
    }

    return (
        <div
            style={{
                backgroundImage: "url('/rej.jpg')", // replace with your image path
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh", // makes sure it covers full screen height
                padding: "20px",
                color: "#fff" // optional: make text visible on dark background
            }}
        >
            <h1>About shop database</h1>
            <ProductList products={products} fetchProducts={fetchProducts} />
            <br />
            <AddProduct fetchProducts={fetchProducts} />
        </div>
    );
}

export default About;
