import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-title">
                            <span className="logo-icon">🧼</span>
                            FORMÉ SOAP
                        </h3>
                        <p className="footer-text">
                            Xà phòng handmade chất lượng cao,
                            an toàn cho làn da của bạn.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Liên kết</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Trang chủ</Link></li>
                            <li><Link to="/products">Sản phẩm</Link></li>
                            <li><Link to="/about">Giới thiệu</Link></li>
                            <li><Link to="/contact">Liên hệ</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Hỗ trợ</h4>
                        <ul className="footer-links">
                            <li><Link to="/faq">Câu hỏi thường gặp</Link></li>
                            <li><Link to="/shipping">Vận chuyển</Link></li>
                            <li><Link to="/returns">Đổi trả</Link></li>
                            <li><Link to="/privacy">Chính sách bảo mật</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Liên hệ</h4>
                        <ul className="footer-contact">
                            <li>📧 info@soapheaven.com</li>
                            <li>📞 +84 123 456 789</li>
                            <li>📍 Hà Nội, Việt Nam</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 FORMÉ SOAP. Bản quyền thuộc về chúng tôi.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
