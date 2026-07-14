const API_BASE_URL = 'http://127.0.0.1:8000/api';

async function request(method, path, body = null) {
    const token = localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token');
    const headers = {
        'Accept': 'application/json',
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    let options = {
        method,
        headers,
    };

    if (body) {
        if (body instanceof FormData) {
            // Fetch sets boundary automatically when header is not JSON
            options.body = body;
        } else {
            headers['Content-Type'] = 'application/json';
            options.body = JSON.stringify(body);
        }
    }

    try {
        const response = await fetch(`${API_BASE_URL}${path}`, options);
        
        // Auto-logout if token is expired
        if (response.status === 401) {
            localStorage.removeItem('auth_token');
            sessionStorage.removeItem('auth_token');
            localStorage.removeItem('user');
            sessionStorage.removeItem('user');
            if (window.location.pathname !== '/login') {
                window.location.href = '/login';
            }
        }

        const data = await response.json().catch(() => ({}));
        
        if (!response.ok) {
            throw new Error(data.message || 'Có lỗi xảy ra, vui lòng thử lại.');
        }

        return data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

export const api = {
    get: (path) => request('GET', path),
    post: (path, body) => request('POST', path, body),
    put: (path, body) => request('PUT', path, body),
    delete: (path) => request('DELETE', path),
    
    // Auth Helpers
    setToken: (token, remember = true) => {
        if (remember) {
            localStorage.setItem('auth_token', token);
        } else {
            sessionStorage.setItem('auth_token', token);
        }
    },
    getToken: () => localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token'),
    setUser: (user, remember = true) => {
        if (remember) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            sessionStorage.setItem('user', JSON.stringify(user));
        }
    },
    getUser: () => {
        const user = localStorage.getItem('user') || sessionStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    },
    logout: () => {
        localStorage.removeItem('auth_token');
        sessionStorage.removeItem('auth_token');
        localStorage.removeItem('user');
        sessionStorage.removeItem('user');
    }
};
