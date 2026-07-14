<template>
    <header class="fixed top-0 w-full z-50 flex justify-between items-center px-margin-desktop h-[72px] bg-surface/80 backdrop-blur-xl border-b border-outline-variant shadow-sm transition-all duration-200">
            <div class="flex items-center gap-2">
                <router-link to="/" class="text-title-lg font-title-lg font-bold text-primary text-decoration-none">MotoRent Pro</router-link>
            </div>
            <nav class="hidden md:flex items-center gap-8">
                <router-link class="nav-link text-label-md font-label-md text-decoration-none" exact-active-class="nav-link-active" to="/">Trang chủ</router-link>
                <router-link class="nav-link text-label-md font-label-md text-decoration-none" active-class="nav-link-active" to="/danh-sach-xe">Danh sách xe</router-link>
                <router-link v-if="isLogged" class="nav-link text-label-md font-label-md text-decoration-none" active-class="nav-link-active" to="/profile">Hồ sơ</router-link>
                <router-link v-if="isLogged" class="nav-link text-label-md font-label-md text-decoration-none" active-class="nav-link-active" to="/lich-su-thu-xe">Lịch sử thuê</router-link>
            </nav>
            <div class="flex items-center gap-4">
                <template v-if="isLogged">
                    <span class="text-on-surface text-label-md font-label-md">Chào, {{ displayName }}</span>
                    <button @click="handleLogout" class="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg text-label-md font-label-md transition-colors">Đăng xuất</button>
                </template>
                <template v-else>
                    <router-link to="/login" class="px-4 py-2 text-on-surface-variant hover:bg-surface-container-low transition-all duration-200 rounded-lg text-label-md font-label-md scale-95 active:scale-90 text-decoration-none">Đăng nhập</router-link>
                    <router-link to="/register" class="px-6 py-2.5 bg-primary text-on-primary rounded-xl hover:bg-primary-container transition-all duration-200 text-label-md font-label-md shadow-sm scale-95 active:scale-90 text-decoration-none">Đăng ký</router-link>
                </template>
            </div>
        </header>
</template>

<script>
import { api } from '../../../services/api';

export default {
    name: 'CustomerHeader',
    data() {
        return {
            isLogged: !!api.getToken(),
            user: api.getUser()
        };
    },
    computed: {
        displayName() {
            if (this.user && this.user.khach_hang) {
                return this.user.khach_hang.ho_ten;
            }
            return this.user?.ten_dang_nhap || 'User';
        }
    },
    watch: {
        // Track route changes to update login state (useful if login updates state)
        $route() {
            this.isLogged = !!api.getToken();
            this.user = api.getUser();
        }
    },
    methods: {
        async handleLogout() {
            try {
                await api.post('/auth/logout');
            } catch (error) {
                console.error('Logout error:', error);
            } finally {
                api.logout();
                this.isLogged = false;
                this.user = null;
                this.$router.push('/login');
            }
        }
    }
}
</script>

<style scoped>
.nav-link {
    color: var(--md-sys-color-on-surface-variant, #49454f);
    transition: all 0.2s ease;
    padding-bottom: 4px;
    border-bottom: 2px solid transparent;
}

.nav-link:hover {
    color: var(--md-sys-color-primary, #1a73e8);
}

.nav-link-active {
    color: var(--md-sys-color-primary, #1a73e8) !important;
    font-weight: 700;
    border-bottom: 2px solid var(--md-sys-color-primary, #1a73e8);
}
</style>
