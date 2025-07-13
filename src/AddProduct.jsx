import React, { useState } from "react";

const AddProduct = ({ fetchProducts }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
  });

  async function hb() {
    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        console.log("error");
        return;
      }

      setNewProduct({ name: "", description: "", price: "" });
      fetchProducts();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }

  return (
    <>
      <h2>Add New Product</h2>
      <input style={{ backgroundColor: "white" , color: "black" }}
        type="text"
        placeholder="Name"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
      />
      <input style={{ backgroundColor: "white" , color: "black" }}
        type="text"
        placeholder="Description"
        value={newProduct.description}
        onChange={(e) =>
          setNewProduct({ ...newProduct, description: e.target.value })
        }
      />
      <input style={{ backgroundColor: "white" , color: "black" }}
        type="number"
        placeholder="Price"
        value={newProduct.price}
        onChange={(e) =>
          setNewProduct({ ...newProduct, price: e.target.value })
        }
      />
      <button onClick={hb}>Add Product</button>
    </>
  );
};

export default AddProduct;
