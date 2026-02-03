import React from 'react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product, 1);
    };

    return (
        <div className="product-card">
            <div className="product-image-container">
                <img
                    src={product.imageUrl || '/placeholder-soap.jpg'}
                    alt={product.name}
                    className="product-image"
                />
                {product.stock <= 0 && (
                    <div className="out-of-stock-badge">Hết hàng</div>
                )}
            </div>

            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-description">{product.description}</p>

                <div className="product-footer">
                    <span className="product-price">
                        {product.price?.toLocaleString('vi-VN')}đ
                    </span>
                    <button
                        className="btn btn-primary btn-add-cart"
                        onClick={handleAddToCart}
                        disabled={product.stock <= 0}
                    >
                        {product.stock <= 0 ? 'Hết hàng' : 'Thêm vào giỏ'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
