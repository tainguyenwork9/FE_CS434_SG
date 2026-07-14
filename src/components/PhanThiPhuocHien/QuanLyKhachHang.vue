<template>
    <div>
        <!-- Shell Container -->
        <div class="flex h-screen w-full">
            <!-- Sidebar (Shared Component) -->
            <!-- Main Content Area -->
            <div class="space-y-xl w-full">
                <!-- TopAppBar (Shared Component) -->
                <!-- Scrollable Content -->
                <div class="flex-1 overflow-y-auto p-margin-desktop custom-scrollbar bg-surface-container-lowest">
                    <!-- Page Header -->
                    <div class="mb-xl flex justify-between items-end">
                        <div>
                            <h2 class="font-headline-lg text-headline-lg text-on-surface mb-xs">Quản lý Khách hàng</h2>
                            <p class="font-body-md text-body-md text-on-surface-variant">Quản lý thông tin và trạng thái
                                tài khoản người dùng trong hệ thống.</p>
                        </div>

                    </div>
                    <!-- Stats Bento Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg mb-xl">
                        <div
                            class="glass-card p-lg rounded-2xl flex flex-col gap-sm shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="flex justify-between items-center">
                                <div
                                    class="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary">
                                    <span class="material-symbols-outlined">group</span>
                                </div>
                                <span
                                    class="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+12%</span>
                            </div>
                            <p class="text-on-surface-variant font-label-md text-label-md">Tổng Khách hàng</p>
                            <p class="text-3xl font-bold">{{ danhSachKhachHang.length }}</p>
                        </div>
                        <div
                            class="glass-card p-lg rounded-2xl flex flex-col gap-sm shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="flex justify-between items-center">
                                <div
                                    class="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                                    <span class="material-symbols-outlined">check_circle</span>
                                </div>
                                <span
                                    class="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">94%</span>
                            </div>
                            <p class="text-on-surface-variant font-label-md text-label-md">Đang Hoạt động</p>
                            <p class="text-3xl font-bold">{{danhSachKhachHang.filter(k => k.tai_khoan &&
                                k.tai_khoan.trang_thai === 'HoatDong').length}}</p>
                        </div>
                        <div
                            class="glass-card p-lg rounded-2xl flex flex-col gap-sm shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="flex justify-between items-center">
                                <div
                                    class="w-12 h-12 rounded-xl bg-error-container/20 flex items-center justify-center text-error">
                                    <span class="material-symbols-outlined">lock</span>
                                </div>
                                <span
                                    class="text-xs font-bold text-error bg-error-container/10 px-2 py-1 rounded-full">6%</span>
                            </div>
                            <p class="text-on-surface-variant font-label-md text-label-md">Đã Bị Khóa</p>
                            <p class="text-3xl font-bold">{{danhSachKhachHang.filter(k => k.tai_khoan &&
                                k.tai_khoan.trang_thai === 'Khoa').length}}</p>
                        </div>
                        <div
                            class="glass-card p-lg rounded-2xl flex flex-col gap-sm shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="flex justify-between items-center">
                                <div
                                    class="w-12 h-12 rounded-xl bg-tertiary-fixed/30 flex items-center justify-center text-tertiary">
                                    <span class="material-symbols-outlined">person_add</span>
                                </div>
                                <span
                                    class="text-xs font-bold text-tertiary bg-tertiary-fixed/10 px-2 py-1 rounded-full">New</span>
                            </div>
                            <p class="text-on-surface-variant font-label-md text-label-md">Tháng Này</p>
                            <p class="text-3xl font-bold">48</p>
                        </div>
                    </div>
                    <!-- Main Table Section -->
                    <div class="glass-card rounded-2xl shadow-sm border border-outline-variant overflow-hidden">

                        <!-- Table Container -->
                        <div class="overflow-x-auto">
                            <table class="w-full text-left border-collapse">
                                <thead>
                                    <tr
                                        class="bg-surface-container-low text-on-surface-variant uppercase tracking-wider font-bold text-[11px]">
                                        <th class="px-lg py-md border-b border-outline-variant">Avatar</th>
                                        <th class="px-lg py-md border-b border-outline-variant">Họ và tên</th>
                                        <th class="px-lg py-md border-b border-outline-variant">Số điện thoại</th>
                                        <th class="px-lg py-md border-b border-outline-variant">Email</th>
                                        <th class="px-lg py-md border-b border-outline-variant">Trạng thái</th>
                                        <th class="px-lg py-md border-b border-outline-variant text-right">Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-outline-variant/50">
                                    <!-- Render Customers -->
                                    <tr v-for="kh in danhSachKhachHang" :key="kh.ma_khach_hang"
                                        class="hover:bg-surface-container-lowest transition-colors group">
                                        <td class="px-lg py-lg">
                                            <div
                                                class="w-10 h-10 rounded-full overflow-hidden border border-outline-variant bg-surface-container flex items-center justify-center font-bold text-primary">
                                                {{ kh.ho_ten.substring(0, 2).toUpperCase() }}
                                            </div>
                                        </td>
                                        <td class="px-lg py-lg">
                                            <div class="font-body-md text-body-md font-bold text-on-surface">{{
                                                kh.ho_ten }}</div>
                                            <div class="text-xs text-on-surface-variant">ID: KH-{{ kh.ma_khach_hang }}
                                            </div>
                                        </td>
                                        <td class="px-lg py-lg font-body-md text-body-md">{{ kh.so_dien_thoai }}</td>
                                        <td class="px-lg py-lg font-body-md text-body-md">{{ kh.email ? kh.email : 'N/A' }}</td>
                                        <td class="px-lg py-lg">
                                            <span v-if="kh.tai_khoan && kh.tai_khoan.trang_thai === 'HoatDong'"
                                                class="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                                                <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                Hoạt động
                                            </span>
                                            <span v-else
                                                class="inline-flex items-center gap-1 px-3 py-1 bg-error-container/30 text-error rounded-full text-xs font-bold">
                                                <span class="w-1.5 h-1.5 rounded-full bg-error"></span>
                                                Bị khóa
                                            </span>
                                        </td>
                                        <td class="px-lg py-lg text-right">
                                            <div
                                                class="flex justify-end gap-sm">
                                                <button
                                                    @click="viewDetail(kh)"
                                                    class="p-2 text-on-surface-variant hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
                                                    title="Xem chi tiết">
                                                    <span class="material-symbols-outlined text-lg">visibility</span>
                                                </button>
                                                <button v-if="kh.tai_khoan && kh.tai_khoan.trang_thai === 'HoatDong'"
                                                    @click="toggleStatus(kh.ma_khach_hang)"
                                                    class="p-2 text-on-surface-variant hover:text-error hover:bg-error-container/20 rounded-lg transition-all"
                                                    title="Khóa tài khoản">
                                                    <span class="material-symbols-outlined text-lg">lock</span>
                                                </button>
                                                <button v-else-if="kh.tai_khoan" @click="toggleStatus(kh.ma_khach_hang)"
                                                    class="p-2 text-on-surface-variant hover:text-green-600 hover:bg-green-50 rounded-lg transition-all"
                                                    title="Mở khóa">
                                                    <span class="material-symbols-outlined text-lg">lock_open</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <!-- Pagination -->
                        <div
                            class="p-lg flex flex-col sm:flex-row justify-between items-center gap-lg bg-surface-container-low border-t border-outline-variant">
                            <p class="text-body-md text-on-surface-variant">Tổng <span
                                    class="font-bold text-on-surface">{{ danhSachKhachHang.length }}</span> khách hàng
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Detail Modal -->
        <div v-if="showDetailModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
            <div class="bg-surface rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
                <!-- Modal Header -->
                <div class="px-xl py-lg border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
                    <h3 class="text-title-lg font-bold text-on-surface flex items-center gap-2">
                        <span class="material-symbols-outlined text-primary">person</span>
                        Chi tiết Khách hàng
                    </h3>
                    <button @click="closeDetailModal" class="p-2 rounded-full hover:bg-surface-container-high transition-colors text-on-surface-variant">
                        <span class="material-symbols-outlined">close</span>
                    </button>
                </div>
                
                <!-- Modal Body -->
                <div class="p-xl overflow-y-auto custom-scrollbar flex-1 bg-surface">
                    <div v-if="selectedKhachHang" class="space-y-lg">
                        <!-- Basic Info Section -->
                        <div>
                            <h4 class="text-label-lg font-bold text-primary mb-md uppercase tracking-wider">Thông tin cá nhân</h4>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-md">
                                <div class="bg-surface-container-lowest p-md rounded-xl border border-outline-variant/50">
                                    <p class="text-label-md text-on-surface-variant mb-1">Họ và tên</p>
                                    <p class="text-body-lg font-medium text-on-surface">{{ selectedKhachHang.ho_ten }}</p>
                                </div>
                                <div class="bg-surface-container-lowest p-md rounded-xl border border-outline-variant/50">
                                    <p class="text-label-md text-on-surface-variant mb-1">Số điện thoại</p>
                                    <p class="text-body-lg font-medium text-on-surface">{{ selectedKhachHang.so_dien_thoai }}</p>
                                </div>
                                <div class="bg-surface-container-lowest p-md rounded-xl border border-outline-variant/50">
                                    <p class="text-label-md text-on-surface-variant mb-1">Email</p>
                                    <p class="text-body-lg font-medium text-on-surface">{{ selectedKhachHang.email || 'N/A' }}</p>
                                </div>
                                <div class="bg-surface-container-lowest p-md rounded-xl border border-outline-variant/50">
                                    <p class="text-label-md text-on-surface-variant mb-1">Số CCCD</p>
                                    <p class="text-body-lg font-medium text-on-surface">{{ selectedKhachHang.cccd || 'Chưa cập nhật' }}</p>
                                </div>
                                <div class="bg-surface-container-lowest p-md rounded-xl border border-outline-variant/50 md:col-span-2">
                                    <p class="text-label-md text-on-surface-variant mb-1">Địa chỉ</p>
                                    <p class="text-body-lg font-medium text-on-surface">{{ selectedKhachHang.dia_chi || 'Chưa cập nhật' }}</p>
                                </div>
                            </div>
                        </div>

                        <!-- Account Info Section -->
                        <div v-if="selectedKhachHang.tai_khoan">
                            <h4 class="text-label-lg font-bold text-primary mb-md uppercase tracking-wider">Thông tin tài khoản</h4>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-md">
                                <div class="bg-surface-container-lowest p-md rounded-xl border border-outline-variant/50">
                                    <p class="text-label-md text-on-surface-variant mb-1">Tên đăng nhập</p>
                                    <p class="text-body-lg font-medium text-on-surface">{{ selectedKhachHang.tai_khoan.ten_dang_nhap }}</p>
                                </div>
                                <div class="bg-surface-container-lowest p-md rounded-xl border border-outline-variant/50">
                                    <p class="text-label-md text-on-surface-variant mb-1">Trạng thái</p>
                                    <span v-if="selectedKhachHang.tai_khoan.trang_thai === 'HoatDong'" class="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold">
                                        <span class="w-2 h-2 rounded-full bg-green-500"></span> Hoạt động
                                    </span>
                                    <span v-else class="inline-flex items-center gap-1 px-3 py-1 bg-error-container/30 text-error rounded-full text-sm font-bold">
                                        <span class="w-2 h-2 rounded-full bg-error"></span> Bị khóa
                                    </span>
                                </div>
                                <div class="bg-surface-container-lowest p-md rounded-xl border border-outline-variant/50 md:col-span-2">
                                    <p class="text-label-md text-on-surface-variant mb-1">Ngày tạo tài khoản</p>
                                    <p class="text-body-lg font-medium text-on-surface">{{ new Date(selectedKhachHang.tai_khoan.ngay_tao).toLocaleString('vi-VN') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Modal Footer -->
                <div class="px-xl py-lg border-t border-outline-variant bg-surface-container-lowest flex justify-end gap-md">
                    <button @click="closeDetailModal" class="px-6 py-2.5 rounded-xl font-bold text-on-surface hover:bg-surface-container-high transition-colors">
                        Đóng
                    </button>
                    <button v-if="selectedKhachHang && selectedKhachHang.tai_khoan" @click="toggleStatus(selectedKhachHang.ma_khach_hang); closeDetailModal()" :class="selectedKhachHang.tai_khoan.trang_thai === 'HoatDong' ? 'bg-error text-white hover:bg-error/90' : 'bg-green-600 text-white hover:bg-green-700'" class="px-6 py-2.5 rounded-xl font-bold transition-colors shadow-sm">
                        {{ selectedKhachHang.tai_khoan.trang_thai === 'HoatDong' ? 'Khóa tài khoản' : 'Mở khóa tài khoản' }}
                    </button>
                </div>
            </div>
        </div>
        <!-- Micro-interactions Script -->
    </div>
</template>

<script>
import { api } from '../../services/api';
export default {
    name: 'QuanLyKhachHang',
    data() {
        return {
            danhSachKhachHang: [],
            loading: false,
            showDetailModal: false,
            selectedKhachHang: null
        }
    },
    methods: {
        async fetchKhachHang() {
            try {
                this.loading = true;
                const response = await api.get('/admin/khach-hang');
                this.danhSachKhachHang = response;
            } catch (error) {
                console.error("Failed to fetch khach hang:", error);
            } finally {
                this.loading = false;
            }
        },
        async toggleStatus(id) {
            if (!confirm('Bạn có chắc muốn thay đổi trạng thái tài khoản này?')) return;
            try {
                await api.put(`/admin/khach-hang/${id}/trang-thai`);
                this.fetchKhachHang();
            } catch (error) {
                alert(error.message || 'Lỗi khi thay đổi trạng thái');
            }
        },
        viewDetail(kh) {
            this.selectedKhachHang = kh;
            this.showDetailModal = true;
        },
        closeDetailModal() {
            this.showDetailModal = false;
            setTimeout(() => {
                this.selectedKhachHang = null;
            }, 300);
        }
    },
    mounted() {
        this.fetchKhachHang();
    }
}
</script>

<style scoped>
body {
    font-family: 'Inter', sans-serif;
}

.glass-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px);
    border: 1px solid #E5E7EB;
}

.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    vertical-align: middle;
}

.active-tab {
    background: #E5E7EB;
}

.custom-scrollbar::-webkit-scrollbar {
    width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 10px;
}
</style>
