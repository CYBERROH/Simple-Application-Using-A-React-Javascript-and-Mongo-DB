import React, { useState } from 'react';

function EditProduct({ product, onEditSuccess }) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: product.name,
        description: product.description,
        price: product.price,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/products/${product._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const updatedProduct = await response.json();
                alert('Product updated successfully');
                onEditSuccess(updatedProduct);
                setIsEditing(false);
            } else {
                alert('Failed to update product');
            }
        } catch (error) {
            console.error('Error updating product:', error);
            alert('Error updating product');
        }
    };

    return (
        <div>
            {isEditing ? (
                <form onSubmit={handleEdit} style={{ display: 'flex', gap: '5px' }}>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                    />
                    <input
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Description"
                        required
                    />
                    <input
                        name="price"
                        type="number"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Price"
                        required
                    />
                    <button type="submit">Save</button>
                    <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
            ) : (
                <button onClick={() => setIsEditing(true)}>Edit</button>
            )}
        </div>
    );
}

export default EditProduct;
