import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { productService } from '../services/api';
import './Products.css';

const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');

    useEffect(() => {
        loadProducts();
    }, []);

    useEffect(() => {
        filterProducts();
    }, [products, searchQuery, selectedCategory]);

    const loadProducts = async () => {
        try {
            const response = await productService.getAll();
            setProducts(response.data);
        } catch (error) {
            console.error('Error loading products:', error);
            // Use mock data
            setProducts(getMockProducts());
        } finally {
            setLoading(false);
        }
    };

    const filterProducts = () => {
        let filtered = [...products];

        // Filter by category
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(p =>
                p.category.toLowerCase() === selectedCategory.toLowerCase()
            );
        }

        // Filter by search query
        if (searchQuery) {
            filtered = filtered.filter(p =>
                p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredProducts(filtered);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        if (category === 'all') {
            searchParams.delete('category');
        } else {
            searchParams.set('category', category);
        }
        setSearchParams(searchParams);
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
        },
        {
            id: 7,
            name: 'Xà phòng Rose',
            category: 'Natural',
            description: 'Làm sáng da với chiết xuất hoa hồng',
            price: 145000,
            imageUrl: '/images/products/soap-rose.jpg',
            stock: 40
        },
        {
            id: 8,
            name: 'Xà phòng Charcoal',
            category: 'Handmade',
            description: 'Thải độc và làm sạch sâu với than hoạt tính',
            price: 135000,
            imageUrl: '/images/products/soap-charcoal.jpg',
            stock: 28
        }
    ];

    const categories = [
        { value: 'all', label: 'Tất cả' },
        { value: 'handmade', label: 'Handmade' },
        { value: 'natural', label: 'Natural' },
        { value: 'premium', label: 'Premium' }
    ];

    return (
        <div className="products-page">
            <div className="products-header">
                <div className="container">
                    <h1>Sản phẩm của chúng tôi</h1>
                    <p>Khám phá bộ sưu tập xà phòng handmade cao cấp</p>
                </div>
            </div>

            <div className="container">
                <div className="products-controls">
                    <div className="search-box">
                        <input
                            type="text"
                            className="form-input"
                            placeholder="Tìm kiếm sản phẩm..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="category-filters">
                        {categories.map(cat => (
                            <button
                                key={cat.value}
                                className={`category-filter-btn ${selectedCategory === cat.value ? 'active' : ''}`}
                                onClick={() => handleCategoryChange(cat.value)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {loading ? (
                    <div className="flex-center" style={{ padding: '4rem' }}>
                        <div className="spinner"></div>
                    </div>
                ) : filteredProducts.length > 0 ? (
                    <div className="products-grid">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="no-products">
                        <p>Không tìm thấy sản phẩm nào</p>
                        <Link to="/products" onClick={() => {
                            setSearchQuery('');
                            setSelectedCategory('all');
                        }} className="btn btn-primary">
                            Xem tất cả sản phẩm
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;
