<template>
    <aside class="fixed left-0 top-0 h-full w-[280px] flex flex-col bg-surface shadow-sm border-r border-outline-variant z-50">
            <div class="p-lg">
                <h1 class="font-display-sm text-display-sm font-bold text-primary">MotoRent Pro</h1>
                <p class="font-body-md text-body-md text-on-surface-variant">Bảng điều khiển</p>
            </div>
            <nav class="flex-1 px-md space-y-xs mt-md">
                <!-- Dashboard -->
                <router-link class="flex items-center gap-md p-md rounded-xl transition-all duration-200 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface" active-class="!bg-surface-container-high !text-primary !font-bold translate-x-1" to="/admin/dashboard">
                    <span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                    <span class="font-label-md text-label-md">Tổng quan</span>
                </router-link>
                <!-- Fleet -->
                <router-link class="flex items-center gap-md p-md rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all duration-200" active-class="!bg-surface-container-high !text-primary !font-bold translate-x-1" to="/admin/quan-ly-xe">
                    <span class="material-symbols-outlined" data-icon="motorcycle">motorcycle</span>
                    <span class="font-label-md text-label-md">Quản lý xe</span>
                </router-link>
                <!-- Bookings -->
                <router-link class="flex items-center gap-md p-md rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all duration-200" active-class="!bg-surface-container-high !text-primary !font-bold translate-x-1" to="/admin/quan-ly-don-thue">
                    <span class="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
                    <span class="font-label-md text-label-md">Đơn thuê</span>
                </router-link>
                <!-- Customers -->
                <router-link class="flex items-center gap-md p-md rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all duration-200" active-class="!bg-surface-container-high !text-primary !font-bold translate-x-1" to="/admin/quan-ly-khach-hang">
                    <span class="material-symbols-outlined" data-icon="group">group</span>
                    <span class="font-label-md text-label-md">Khách hàng</span>
                </router-link>
                <!-- Settings -->
                <router-link class="flex items-center gap-md p-md rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all duration-200" active-class="!bg-surface-container-high !text-primary !font-bold translate-x-1" to="/admin/quan-ly-danh-muc">
                    <span class="material-symbols-outlined" data-icon="category">settings</span>
                    <span class="font-label-md text-label-md">Danh mục</span>
                </router-link>
                <!-- Reviews -->
                <router-link class="flex items-center gap-md p-md rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all duration-200" active-class="!bg-surface-container-high !text-primary !font-bold translate-x-1" to="/admin/quan-ly-danh-gia">
                    <span class="material-symbols-outlined" data-icon="reviews">reviews</span>
                    <span class="font-label-md text-label-md">Đánh giá</span>
                </router-link>
            </nav>

            <footer class="p-md border-t border-outline-variant">
                <a href="#" class="flex items-center gap-md p-md text-error hover:opacity-80 transition-all text-decoration-none" @click.prevent="handleLogout">
                    <span class="material-symbols-outlined" data-icon="logout">logout</span>
                    <span class="font-label-md text-label-md">Đăng xuất</span>
                </a>
            </footer>
        </aside>
</template>

<script>
import { api } from '../../../services/api';

export default {
    name: 'AdminSidebar',
    methods: {
        async handleLogout() {
            try {
                await api.post('/auth/logout');
            } catch (error) {
                console.error('Logout error:', error);
            } finally {
                api.logout();
                this.$router.push('/login');
            }
        }
    }
}
</script>
