# Hướng dẫn upload ảnh sản phẩm

## 📁 Cấu trúc thư mục đã tạo:
```
soap-shop-client/
└── public/
    └── images/
        └── products/
            ← Đặt ảnh sản phẩm vào đây
```

## 📸 Tên file ảnh cần thiết:

1. **soap-lavender.jpg** - Xà phòng Lavender
2. **soap-honey.jpg** - Xà phòng Mật ong  
3. **soap-greentea.jpg** - Xà phòng Trà xanh
4. **soap-coffee.jpg** - Xà phòng Cà phê
5. **soap-goatmilk.jpg** - Xà phòng Sữa dê
6. **soap-shea.jpg** - Xà phòng Bơ hạt mỡ
7. **soap-rose.jpg** - Xà phòng Rose
8. **soap-charcoal.jpg** - Xà phòng Charcoal

## ✅ Cách sử dụng:

1. Copy các file ảnh vào thư mục: `d:\EXE201\soap-shop-client\public\images\products\`
2. Đặt tên file chính xác như danh sách trên
3. Chạy lại `npm run dev` (nếu đang chạy)
4. Ảnh sẽ tự động hiển thị!

## 💡 Tips:

- **Kích thước khuyến nghị**: 800x800px (vuông)
- **Format**: JPG hoặc PNG
- **Dung lượng**: < 500KB mỗi ảnh
- **Chất lượng**: Nên dùng ảnh có độ phân giải cao

## 🔧 Thêm ảnh mới:

Nếu muốn thêm sản phẩm mới:
1. Đặt ảnh vào `/public/images/products/`
2. Thêm product vào mock data với `imageUrl: '/images/products/ten-file.jpg'`

Đã cập nhật tất cả đường dẫn ảnh trong code! ✨
