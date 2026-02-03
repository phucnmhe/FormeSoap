import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
    const { user, logout, isAuthenticated } = useAuth();
    const { cartCount } = useCart();

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-content">
                    <Link to="/" className="navbar-logo">
                        <span className="logo-icon">🧼</span>
                        <span className="logo-text">FORMÉ SOAP</span>
                    </Link>

                    <div className="navbar-links">
                        <Link to="/" className="nav-link">Trang chủ</Link>
                        <Link to="/products" className="nav-link">Sản phẩm</Link>
                        <Link to="/about" className="nav-link">Giới thiệu</Link>
                    </div>

                    <div className="navbar-actions">
                        {isAuthenticated ? (
                            <>
                                <Link to="/cart" className="cart-btn">
                                    <span className="cart-icon">🛒</span>
                                    {cartCount > 0 && <span className="badge">{cartCount}</span>}
                                </Link>
                                <div className="user-menu">
                                    <button className="user-btn">
                                        <span className="user-icon">👤</span>
                                        <span>{user?.username || 'User'}</span>
                                    </button>
                                    <div className="user-dropdown">
                                        <Link to="/profile" className="dropdown-item">Tài khoản</Link>
                                        <Link to="/orders" className="dropdown-item">Đơn hàng</Link>
                                        {user?.role === 'admin' && (
                                            <Link to="/admin" className="dropdown-item">Quản trị</Link>
                                        )}
                                        <button onClick={logout} className="dropdown-item logout-btn">
                                            Đăng xuất
                                        </button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <Link to="/cart" className="cart-btn">
                                    <span className="cart-icon">🛒</span>
                                    {cartCount > 0 && <span className="badge">{cartCount}</span>}
                                </Link>
                                <Link to="/login" className="btn btn-outline">Đăng nhập</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
