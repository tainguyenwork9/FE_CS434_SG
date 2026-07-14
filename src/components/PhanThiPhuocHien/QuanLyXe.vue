<template>
    <div>
        <!-- SideNavBar (Authority: JSON) -->
        <!-- Main Content Area -->
        <div class="space-y-xl">
            <!-- TopNavBar (Authority: JSON) -->
            <!-- Page Content -->
            <div class="p-margin-desktop space-y-lg flex-1">
                <!-- Dashboard Header Section -->
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-md">
                    <div>
                        <nav class="flex items-center gap-xs text-label-sm text-on-surface-variant mb-xs">
                            <span>Hệ thống</span>
                            <span class="material-symbols-outlined text-[14px]">chevron_right</span>
                            <span class="text-primary font-semibold">Quản lý Xe</span>
                        </nav>
                        <h2 class="font-headline-lg text-headline-lg text-on-surface">Quản lý Xe</h2>
                        <p class="text-body-md text-on-surface-variant mt-xs">Quản lý đội xe MotoRent Pro của bạn từ một nơi duy nhất.</p>
                    </div>
                    <div class="flex items-center gap-sm">

                        <router-link to="/admin/them-xe" class="flex items-center gap-sm px-lg h-12 bg-primary text-on-primary rounded-xl font-label-md hover:shadow-lg hover:shadow-primary/20 transition-standard active:scale-95 text-decoration-none">
                            <span class="material-symbols-outlined">add</span>
                            Thêm Xe Mới
                        </router-link>
                    </div>
                </div>
                <!-- Vehicle Table Card -->
                <div class="glass-card rounded-2xl overflow-hidden shadow-sm">
                    <div class="overflow-x-auto hide-scrollbar">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="bg-surface-container-low border-b border-outline-variant/30">
                                    <th class="px-lg py-md font-label-md text-on-surface-variant">Ảnh</th>
                                    <th class="px-lg py-md font-label-md text-on-surface-variant">Tên Xe</th>
                                    <th class="px-lg py-md font-label-md text-on-surface-variant">Biển số</th>
                                    <th class="px-lg py-md font-label-md text-on-surface-variant">Danh mục</th>
                                    <th class="px-lg py-md font-label-md text-on-surface-variant">Giá thuê (ngày)</th>
                                    <th class="px-lg py-md font-label-md text-on-surface-variant">Trạng thái</th>
                                    <th class="px-lg py-md font-label-md text-on-surface-variant text-right">Hành động</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-outline-variant/20">
                                <tr v-for="xe in paginatedXe" :key="xe.ma_xe" class="hover:bg-surface-container-low/50 transition-standard group">
                                    <td class="px-lg py-md">
                                        <div class="w-16 h-12 rounded-lg bg-surface-container-high overflow-hidden">
                                            <img v-if="xe.hinh_anh" class="w-full h-full object-cover" :src="xe.hinh_anh"/>
                                            <div v-else class="w-full h-full flex items-center justify-center bg-gray-200">
                                                <span class="material-symbols-outlined text-gray-400">two_wheeler</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-lg py-md font-label-md text-on-surface">{{ xe.ten_xe }}</td>
                                    <td class="px-lg py-md font-body-md text-on-surface-variant">{{ xe.bien_so_xe }}</td>
                                    <td class="px-lg py-md">
                                        <span class="px-sm py-xs bg-secondary-container/30 text-on-secondary-container text-label-sm rounded-full">{{ xe.danh_muc_xe ? xe.danh_muc_xe.ten_danh_muc : 'Khác' }}</span>
                                    </td>
                                    <td class="px-lg py-md font-label-md text-on-surface">{{ formatCurrency(xe.gia_thue_ngay) }}</td>
                                    <td class="px-lg py-md">
                                        <span :class="['inline-flex items-center gap-xs px-sm py-xs text-label-sm rounded-full', getStatusClass(xe.tinh_trang_xe)]">
                                            <span :class="['w-1.5 h-1.5 rounded-full', getStatusDotClass(xe.tinh_trang_xe)]">
                                            </span>
                                            {{ getStatusText(xe.tinh_trang_xe) }}
                                        </span>
                                    </td>
                                    <td class="px-lg py-md text-right">
                                        <div class="flex items-center justify-end gap-xs">
                                            <button @click="editXe(xe.ma_xe)" class="p-2 text-outline hover:text-primary hover:bg-primary/10 rounded-lg transition-standard">
                                                <span class="material-symbols-outlined text-[20px]">edit</span>
                                            </button>
                                            <button @click="deleteXe(xe.ma_xe)" class="p-2 text-outline hover:text-error hover:bg-error/10 rounded-lg transition-standard">
                                                <span class="material-symbols-outlined text-[20px]">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- Pagination Footer -->
                    <div class="px-lg py-md bg-surface-container-lowest border-t border-outline-variant/30 flex items-center justify-between" v-if="danhSachXe.length > 0">
                        <p class="text-body-md text-on-surface-variant">Hiển thị <span class="font-semibold text-on-surface">{{ displayedStart }}-{{ displayedEnd }}</span> trong số <span class="font-semibold text-on-surface">{{ danhSachXe.length }}</span> xe</p>
                        <div class="flex items-center gap-xs">
                            <button @click="prevPage" :disabled="currentPage === 1" :class="{'opacity-30 cursor-not-allowed': currentPage === 1}" class="p-2 text-outline hover:bg-surface-container-high rounded-lg transition-standard">
                                <span class="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button v-for="page in totalPages" :key="page" @click="goToPage(page)" :class="{'bg-primary text-on-primary': currentPage === page, 'text-on-surface-variant hover:bg-surface-container-high': currentPage !== page}" class="w-10 h-10 flex items-center justify-center rounded-lg font-label-md">{{ page }}</button>
                            <button @click="nextPage" :disabled="currentPage === totalPages" :class="{'opacity-30 cursor-not-allowed': currentPage === totalPages}" class="p-2 text-outline hover:bg-surface-container-high rounded-lg transition-standard">
                                <span class="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Bento Stats Section -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-gutter">
                    <div class="glass-card p-lg rounded-2xl flex flex-col justify-between">
                        <div class="flex items-center justify-between">
                            <span class="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">motorcycle</span>
                            </span>
                            <span class="text-green-600 text-label-sm font-bold flex items-center gap-xs">+12% <span class="material-symbols-outlined text-[14px]">trending_up</span>
                        </span>
                    </div>
                    <div class="mt-md">
                        <h3 class="text-display-sm font-display-sm text-on-surface">{{ danhSachXe.length }}</h3>
                    </div>
                </div>
                <div class="glass-card p-lg rounded-2xl flex flex-col justify-between">
                    <div class="flex items-center justify-between">
                        <span class="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                        </span>
                    </div>
                    <div class="mt-md">
                        <h3 class="text-display-sm font-display-sm text-on-surface">{{ danhSachXe.filter(x => x.tinh_trang_xe === 'Sẵn sàng').length }}</h3>
                    </div>
                </div>
                <div class="glass-card p-lg rounded-2xl flex flex-col justify-between">
                    <div class="flex items-center justify-between">
                        <span class="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">key</span>
                        </span>
                    </div>
                    <div class="mt-md">
                        <h3 class="text-display-sm font-display-sm text-on-surface">{{ danhSachXe.filter(x => x.tinh_trang_xe === 'Đang cho thuê').length }}</h3>
                    </div>
                </div>
                <div class="glass-card p-lg rounded-2xl flex flex-col justify-between">
                    <div class="flex items-center justify-between">
                        <span class="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center">
                            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">build</span>
                        </span>
                    </div>
                    <div class="mt-md">
                        <h3 class="text-display-sm font-display-sm text-on-surface">{{ danhSachXe.filter(x => x.tinh_trang_xe === 'Bảo dưỡng').length }}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Mobile Bottom NavBar (Authority: CSS/Rule Logic) -->
    </div>
</template>

<script>
import { api } from '../../services/api';

export default {
    name: 'QuanLyXe',
    data() {
        return {
            danhSachXe: [],
            loading: false,
            currentPage: 1,
            itemsPerPage: 10
        }
    },
    computed: {
        totalPages() {
            return Math.ceil(this.danhSachXe.length / this.itemsPerPage);
        },
        paginatedXe() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            return this.danhSachXe.slice(start, start + this.itemsPerPage);
        },
        displayedStart() {
            if (this.danhSachXe.length === 0) return 0;
            return (this.currentPage - 1) * this.itemsPerPage + 1;
        },
        displayedEnd() {
            return Math.min(this.currentPage * this.itemsPerPage, this.danhSachXe.length);
        }
    },
    methods: {
        prevPage() {
            if (this.currentPage > 1) this.currentPage--;
        },
        nextPage() {
            if (this.currentPage < this.totalPages) this.currentPage++;
        },
        goToPage(page) {
            this.currentPage = page;
        },
        async fetchXe() {
            try {
                this.loading = true;
                const response = await api.get('/xe-may');
                this.danhSachXe = response;
            } catch (error) {
                console.error("Failed to fetch xe:", error);
            } finally {
                this.loading = false;
                this.$nextTick(() => {
                    this.setupInteractions();
                });
            }
        },
        async deleteXe(id) {
            if (!confirm('Bạn có chắc chắn muốn xoá chiếc xe này?')) return;
            try {
                await api.delete(`/admin/xe-may/${id}`);
                this.fetchXe();
            } catch (error) {
                alert(error.message || 'Lỗi khi xoá xe');
            }
        },
        editXe(id) {
            // Note: Since this project may not have a dedicated edit route yet, let's assume /admin/sua-xe/:id
            // If the route doesn't exist, this will just update URL
            this.$router.push(`/admin/sua-xe/${id}`);
        },
        formatCurrency(value) {
            return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
        },
        getStatusText(status) {
            switch(status) {
                case 'SanSang': return 'Sẵn sàng';
                case 'DangChoThue': return 'Đang cho thuê';
                case 'BaoTri': return 'Bảo trì';
                default: return status;
            }
        },
        getStatusClass(status) {
            switch(status) {
                case 'SanSang': return 'bg-green-100 text-green-700';
                case 'DangChoThue': return 'bg-blue-100 text-blue-700';
                case 'BaoTri': return 'bg-orange-100 text-orange-700';
                default: return 'bg-surface-container-high text-on-surface';
            }
        },
        getStatusDotClass(status) {
            switch(status) {
                case 'SanSang': return 'bg-green-500';
                case 'DangChoThue': return 'bg-blue-500';
                case 'BaoTri': return 'bg-orange-500';
                default: return 'bg-gray-500';
            }
        },
        setupInteractions() {
            document.querySelectorAll('button').forEach(btn => {
                btn.addEventListener('mousedown', () => btn.classList.add('scale-95'));
                btn.addEventListener('mouseup', () => btn.classList.remove('scale-95'));
                btn.addEventListener('mouseleave', () => btn.classList.remove('scale-95'));
            });
            const rows = document.querySelectorAll('tbody tr');
            rows.forEach(row => {
                row.addEventListener('mouseenter', () => {
                    row.style.transform = 'translateX(4px)';
                });
                row.addEventListener('mouseleave', () => {
                    row.style.transform = 'translateX(0)';
                });
            });
        }
    },
    mounted() {
        this.fetchXe();
    }
}
</script>

<style scoped>
body {
    font-family: 'Inter', sans-serif;
    background-color: #faf8ff;
}
.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
.glass-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px);
    border: 1px solid #E5E7EB;
}
.transition-standard {
    transition: all 200ms ease-in-out;
}
/* Custom scrollbar */
::-webkit-scrollbar {
    width: 8px;
}
::-webkit-scrollbar-track {
    background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
    background: #c3c6d7;
    border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
    background: #737686;
}

.hide-scrollbar::-webkit-scrollbar {
    display: none;
}
.hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
