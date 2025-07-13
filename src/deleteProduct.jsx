import React from 'react';

function DeleteProduct({ productId, onDeleteSuccess }) {
    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:3000/products/${productId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                alert('Product deleted successfully');
                onDeleteSuccess(productId); 
            } else {
                alert('Failed to delete the product');
            }
        } catch (error) {
            console.error('Error deleting product:', error);
            alert('Error deleting product');
        }
    };

    return (
        <button onClick={handleDelete} style={{ color: 'red' }}>
            Delete
        </button>
    );
}

export default DeleteProduct;
