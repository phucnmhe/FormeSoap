import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

    const handleQuantityChange = (productId, newQuantity) => {
        if (newQuantity > 0) {
            updateQuantity(productId, newQuantity);
        }
    };

    if (cartItems.length === 0) {
        return (
            <div className="cart-page">
                <div className="container">
                    <div className="empty-cart">
                        <div className="empty-cart-icon">🛒</div>
                        <h2>Giỏ hàng trống</h2>
                        <p>Bạn chưa có sản phẩm nào trong giỏ hàng</p>
                        <Link to="/products" className="btn btn-primary">
                            Tiếp tục mua sắm
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <div className="container">
                <div className="cart-header">
                    <h1>Giỏ hàng của bạn</h1>
                    <button className="btn btn-outline" onClick={clearCart}>
                        Xóa tất cả
                    </button>
                </div>

                <div className="cart-content">
                    <div className="cart-items">
                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <img
                                    src={item.imageUrl || '/placeholder-soap.jpg'}
                                    alt={item.name}
                                    className="cart-item-image"
                                />

                                <div className="cart-item-details">
                                    <h3>{item.name}</h3>
                                    <p className="cart-item-category">{item.category}</p>
                                    <p className="cart-item-price">
                                        {item.price?.toLocaleString('vi-VN')}đ
                                    </p>
                                </div>

                                <div className="cart-item-actions">
                                    <div className="quantity-controls">
                                        <button
                                            className="quantity-btn"
                                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                        >
                                            -
                                        </button>
                                        <span className="quantity-value">{item.quantity}</span>
                                        <button
                                            className="quantity-btn"
                                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                        >
                                            +
                                        </button>
                                    </div>

                                    <p className="cart-item-subtotal">
                                        {(item.price * item.quantity).toLocaleString('vi-VN')}đ
                                    </p>

                                    <button
                                        className="remove-btn"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        🗑️
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h2>Tổng đơn hàng</h2>

                        <div className="summary-row">
                            <span>Tạm tính:</span>
                            <span>{cartTotal.toLocaleString('vi-VN')}đ</span>
                        </div>

                        <div className="summary-row">
                            <span>Phí vận chuyển:</span>
                            <span>30.000đ</span>
                        </div>

                        <div className="summary-divider"></div>

                        <div className="summary-row summary-total">
                            <span>Tổng cộng:</span>
                            <span>{(cartTotal + 30000).toLocaleString('vi-VN')}đ</span>
                        </div>

                        <Link to="/checkout" className="btn btn-primary btn-checkout">
                            Tiến hành thanh toán
                        </Link>

                        <Link to="/products" className="btn btn-outline">
                            Tiếp tục mua sắm
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
