import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Products
export const productService = {
    getAll: () => api.get('/products'),
    getById: (id) => api.get(`/products/${id}`),
    create: (data) => api.post('/products', data),
    update: (id, data) => api.put(`/products/${id}`, data),
    delete: (id) => api.delete(`/products/${id}`),
};

// Auth
export const authService = {
    register: (data) => api.post('/auth/register', data),
    login: (data) => api.post('/auth/login', data),
    getCurrentUser: () => api.get('/auth/me'),
};

// Cart
export const cartService = {
    getCart: () => api.get('/cart'),
    addToCart: (data) => api.post('/cart', data),
    updateCartItem: (id, data) => api.put(`/cart/${id}`, data),
    removeFromCart: (id) => api.delete(`/cart/${id}`),
    clearCart: () => api.delete('/cart'),
};

// Orders
export const orderService = {
    getOrders: () => api.get('/orders'),
    getOrderById: (id) => api.get(`/orders/${id}`),
    createOrder: (data) => api.post('/orders', data),
};

export default api;
