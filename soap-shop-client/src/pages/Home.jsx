import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { productService } from '../services/api';
import './Home.css';

const Home = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadFeaturedProducts();
    }, []);

    const loadFeaturedProducts = async () => {
        try {
            const response = await productService.getAll();
            // Get first 6 products as featured
            setFeaturedProducts(response.data.slice(0, 6));
        } catch (error) {
            console.error('Error loading products:', error);
            // Use mock data if API fails
            setFeaturedProducts(getMockProducts());
        } finally {
            setLoading(false);
        }
    };

    const getMockProducts = () => [
        {
            id: 1,
            name: 'Xà phòng Lavender',
            category: 'Natural',
            description: 'Xà phòng thư giãn với tinh dầu lavender tự nhiên',
            price: 120000,
            imageUrl: '/images/products/soap-lavender.jpg',
            stock: 50
        },
        {
            id: 2,
            name: 'Xà phòng Mật ong',
            category: 'Handmade',
            description: 'Dưỡng ẩm sâu với mật ong nguyên chất',
            price: 150000,
            imageUrl: '/images/products/soap-honey.jpg',
            stock: 30
        },
        {
            id: 3,
            name: 'Xà phòng Trà xanh',
            category: 'Natural',
            description: 'Làm sạch sâu và kiểm soát dầu hiệu quả',
            price: 130000,
            imageUrl: '/images/products/soap-greentea.jpg',
            stock: 45
        },
        {
            id: 4,
            name: 'Xà phòng Cà phê',
            category: 'Handmade',
            description: 'Tẩy tế bào chết và sáng da tự nhiên',
            price: 140000,
            imageUrl: '/images/products/soap-coffee.jpg',
            stock: 25
        },
        {
            id: 5,
            name: 'Xà phòng Sữa dê',
            category: 'Premium',
            description: 'Dưỡng ẩm cao cấp cho da nhạy cảm',
            price: 180000,
            imageUrl: '/images/products/soap-goatmilk.jpg',
            stock: 20
        },
        {
            id: 6,
            name: 'Xà phòng Bơ hạt mỡ',
            category: 'Premium',
            description: 'Phục hồi và làm mềm da khô',
            price: 160000,
            imageUrl: '/images/products/soap-shea.jpg',
            stock: 35
        }
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title fade-in">
                        FORMÉ SOAP
                        <br />
                        <span className="hero-subtitle">Handmade</span>
                    </h1>
                    <p className="hero-description fade-in">
                        Khám phá bộ sưu tập xà phòng handmade cao cấp,
                        <br />
                        được làm thủ công với tình yêu và sự chăm sóc đặc biệt
                    </p>
                    <div className="hero-actions fade-in">
                        <Link to="/products" className="btn btn-primary btn-lg">
                            Khám phá ngay
                        </Link>
                        <Link to="/about" className="btn btn-outline btn-lg">
                            Tìm hiểu thêm
                        </Link>
                    </div>
                </div>
                <div className="hero-decoration">
                    <div className="decoration-circle circle-1"></div>
                    <div className="decoration-circle circle-2"></div>
                    <div className="decoration-circle circle-3"></div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="section categories-section">
                <div className="container">
                    <h2 className="section-title text-center">Danh mục sản phẩm</h2>
                    <div className="categories-grid">
                        <Link to="/products?category=handmade" className="category-card">
                            <div className="category-icon">🧼</div>
                            <h3>Handmade</h3>
                            <p>Xà phòng thủ công truyền thống</p>
                        </Link>
                        <Link to="/products?category=natural" className="category-card">
                            <div className="category-icon">🌿</div>
                            <h3>Natural</h3>
                            <p>Nguyên liệu thiên nhiên</p>
                        </Link>
                        <Link to="/products?category=premium" className="category-card">
                            <div className="category-icon">✨</div>
                            <h3>Premium</h3>
                            <p>Dòng sản phẩm cao cấp</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="section featured-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Sản phẩm nổi bật</h2>
                        <Link to="/products" className="view-all-link">
                            Xem tất cả →
                        </Link>
                    </div>

                    {loading ? (
                        <div className="flex-center" style={{ padding: '3rem' }}>
                            <div className="spinner"></div>
                        </div>
                    ) : (
                        <div className="products-grid">
                            {featuredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Features Section */}
            <section className="section features-section">
                <div className="container">
                    <div className="features-grid">
                        <div className="feature-item">
                            <div className="feature-icon">🌱</div>
                            <h3>100% Tự nhiên</h3>
                            <p>Nguyên liệu thiên nhiên, an toàn cho da</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">🤲</div>
                            <h3>Thủ công</h3>
                            <p>Được làm hoàn toàn bằng tay</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">🚚</div>
                            <h3>Giao hàng nhanh</h3>
                            <p>Giao hàng toàn quốc trong 2-3 ngày</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">💯</div>
                            <h3>Bảo đảm chất lượng</h3>
                            <p>Hoàn tiền 100% nếu không hài lòng</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
