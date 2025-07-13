import React, { useState, useEffect } from 'react';
import EditProduct from './editProduct';
import DeleteProduct from './DeleteProduct';
import './App.css'; 

function ProductList({ products }) {
    const [localProducts, setLocalProducts] = useState(products);

    useEffect(() => {
        setLocalProducts(products);
    }, [products]);

    const handleDeleteSuccess = (deletedId) => {
        setLocalProducts(prev => prev.filter(p => p._id !== deletedId));
    };

    const handleEditSuccess = (updatedProduct) => {
        setLocalProducts(prev =>
            prev.map(p => (p._id === updatedProduct._id ? updatedProduct : p))
        );
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Product List</h2>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th >Name</th>
                        <th >Description</th>
                        <th >Price</th>
                        <th >Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {localProducts.map(product => (
                        <tr key={product._id}>
                            <td >{product.name}</td>
                            <td >{product.description}</td>
                            <td >{product.price}</td>
                            <td >
                                <EditProduct product={product} onEditSuccess={handleEditSuccess} />
                                <DeleteProduct productId={product._id} onDeleteSuccess={handleDeleteSuccess} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}



export default ProductList;
