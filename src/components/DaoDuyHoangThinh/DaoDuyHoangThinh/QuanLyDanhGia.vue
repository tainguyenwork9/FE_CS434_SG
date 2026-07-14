<template>
    <div>
        <!-- Side Navigation Shell -->
        <!-- Top Navigation Bar -->
        <!-- Main Content Canvas -->
        <div class="space-y-xl">
            <!-- Header Section -->
            <div class="mb-xl">
                <h2 class="font-headline-lg text-headline-lg text-on-surface mb-xs">Quản lý Đánh giá</h2>
                <p class="font-body-lg text-on-surface-variant">Theo dõi và phản hồi ý kiến từ khách hàng để cải thiện chất lượng dịch vụ.</p>
            </div>
            <!-- Statistics Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg mb-xl">
                <div class="glass-card p-lg rounded-2xl shadow-sm hover:translate-y-[-2px] transition-all duration-200">
                    <div class="flex justify-between items-start mb-md">
                        <div class="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary">
                            <span class="material-symbols-outlined text-2xl">reviews</span>
                        </div>
                    </div>
                    <p class="font-label-md text-on-surface-variant">Tổng đánh giá</p>
                    <h3 class="font-display-sm text-display-sm text-on-surface mt-xs">{{ tongDanhGia }}</h3>
                </div>
                <div class="glass-card p-lg rounded-2xl shadow-sm hover:translate-y-[-2px] transition-all duration-200">
                    <div class="flex justify-between items-start mb-md">
                        <div class="w-12 h-12 rounded-xl bg-tertiary-fixed/30 flex items-center justify-center text-tertiary">
                            <span class="material-symbols-outlined text-2xl" style="font-variation-settings: 'FILL' 1;">star</span>
                        </div>
                    </div>
                    <p class="font-label-md text-on-surface-variant">Điểm trung bình</p>
                    <div class="flex items-baseline gap-xs mt-xs">
                        <h3 class="font-display-sm text-display-sm text-on-surface">{{ diemTrungBinh }}</h3>
                        <span class="text-outline font-body-md">/ 5.0</span>
                    </div>
                </div>
                <div class="glass-card p-lg rounded-2xl shadow-sm hover:translate-y-[-2px] transition-all duration-200">
                    <div class="flex justify-between items-start mb-md">
                        <div class="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                            <span class="material-symbols-outlined text-2xl">sentiment_very_satisfied</span>
                        </div>
                    </div>
                    <p class="font-label-md text-on-surface-variant">Đánh giá 5 sao</p>
                    <h3 class="font-display-sm text-display-sm text-on-surface mt-xs">{{ danhGia5Sao }}</h3>
                </div>
                <div class="glass-card p-lg rounded-2xl shadow-sm hover:translate-y-[-2px] transition-all duration-200">
                    <div class="flex justify-between items-start mb-md">
                        <div class="w-12 h-12 rounded-xl bg-error-container/20 flex items-center justify-center text-error">
                            <span class="material-symbols-outlined text-2xl">pending_actions</span>
                        </div>
                    </div>
                    <p class="font-label-md text-on-surface-variant">Đánh giá cần xử lý</p>
                    <h3 class="font-display-sm text-display-sm text-error mt-xs">{{ danhGiaCanXuLy }}</h3>
                </div>
            </div>

            <!-- Management Table -->
            <div class="glass-card rounded-2xl overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse whitespace-nowrap">
                        <thead>
                            <tr class="bg-surface-container-low border-b border-outline-variant/30">
                                <th class="px-lg py-lg font-label-md text-on-surface-variant">Khách hàng</th>
                                <th class="px-lg py-lg font-label-md text-on-surface-variant">Xe đã thuê</th>
                                <th class="px-lg py-lg font-label-md text-on-surface-variant">Đánh giá</th>
                                <th class="px-lg py-lg font-label-md text-on-surface-variant w-1/4">Nội dung</th>
                                <th class="px-lg py-lg font-label-md text-on-surface-variant">Ngày gửi</th>
                                <th class="px-lg py-lg font-label-md text-on-surface-variant">Trạng thái</th>
                                <th class="px-lg py-lg font-label-md text-on-surface-variant text-right">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-outline-variant/20">
                            <tr v-for="dg in paginatedDanhGias" :key="dg.ma_danh_gia" class="hover:bg-surface-container-lowest transition-colors group">
                                <td class="px-lg py-lg">
                                    <div class="flex items-center gap-md">
                                        <div class="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold">
                                            {{ dg.khach_hang?.ho_ten?.charAt(0) || 'K' }}
                                        </div>
                                        <div>
                                            <p class="font-label-md text-on-surface">{{ dg.khach_hang?.ho_ten || 'Khách hàng ẩn danh' }}</p>
                                            <p class="font-label-sm text-outline">ID: #{{ dg.ma_khach_hang }}</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-lg py-lg">
                                    <p class="font-body-md text-on-surface">{{ dg.xe_may?.ten_xe || 'Xe đã xoá' }}</p>
                                    <p class="font-label-sm text-outline">{{ dg.xe_may?.bien_so_xe }}</p>
                                </td>
                                <td class="px-lg py-lg">
                                    <div class="flex items-center gap-xs">
                                        <span v-for="i in 5" :key="i" class="material-symbols-outlined text-md" :class="i <= dg.diem_so ? 'star-fill' : 'text-outline-variant'">star</span>
                                    </div>
                                </td>
                                <td class="px-lg py-lg whitespace-normal min-w-[300px]">
                                    <p class="font-body-md text-on-surface truncate-2-lines">{{ dg.noi_dung }}</p>
                                </td>
                                <td class="px-lg py-lg font-body-md text-on-surface">{{ formatDate(dg.ngay_danh_gia) }}</td>
                                <td class="px-lg py-lg">
                                    <span class="px-sm py-1 bg-green-100 text-green-700 rounded-full font-label-sm">Hiển thị</span>
                                </td>
                                <td class="px-lg py-lg">
                                    <div class="flex justify-end gap-sm">
                                        <button @click="deleteDanhGia(dg.ma_danh_gia)" class="p-sm text-error hover:bg-error-container/10 rounded-lg transition-colors" title="Xóa">
                                            <span class="material-symbols-outlined">delete</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- Pagination -->
                <div class="flex justify-between items-center px-lg py-lg border-t border-outline-variant/30 bg-surface/50" v-if="danhGias.length > 0">
                    <p class="font-label-md text-on-surface-variant">Hiển thị {{ displayedStart }}-{{ displayedEnd }} trên {{ danhGias.length }} đánh giá</p>
                    <div class="flex items-center gap-sm">
                        <button @click="prevPage" :disabled="currentPage === 1" :class="{'opacity-30 cursor-not-allowed': currentPage === 1}" class="w-10 h-10 flex items-center justify-center rounded-xl border border-outline-variant hover:bg-surface-container-high transition-colors">
                            <span class="material-symbols-outlined">chevron_left</span>
                        </button>
                        <button v-for="page in totalPages" :key="page" @click="goToPage(page)" :class="{'bg-primary text-on-primary': currentPage === page, 'hover:bg-surface-container-high': currentPage !== page}" class="w-10 h-10 flex items-center justify-center rounded-xl font-label-md transition-colors">{{ page }}</button>
                        <button @click="nextPage" :disabled="currentPage === totalPages" :class="{'opacity-30 cursor-not-allowed': currentPage === totalPages}" class="w-10 h-10 flex items-center justify-center rounded-xl border border-outline-variant hover:bg-surface-container-high transition-colors">
                            <span class="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Floating Action Button (FAB) - Contextual -->
        <button class="fixed bottom-lg right-lg w-14 h-14 bg-primary text-on-primary rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center group">
            <span class="material-symbols-outlined text-3xl">add</span>
            <span class="absolute right-full mr-md px-md py-sm bg-inverse-surface text-on-primary rounded-lg font-label-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Phản hồi nhanh
            </span>
        </button>
    </div>
</template>

<script>
import { api } from '../../services/api';

export default {
    name: 'QuanLyDanhGia',
    data() {
        return {
            danhGias: [],
            loading: false,
            currentPage: 1,
            itemsPerPage: 10
        }
    },
    computed: {
        tongDanhGia() {
            return this.danhGias.length;
        },
        diemTrungBinh() {
            if (this.danhGias.length === 0) return '0.0';
            const sum = this.danhGias.reduce((acc, curr) => acc + curr.diem_so, 0);
            return (sum / this.danhGias.length).toFixed(1);
        },
        danhGia5Sao() {
            return this.danhGias.filter(dg => dg.diem_so === 5).length;
        },
        danhGiaCanXuLy() {
            return this.danhGias.filter(dg => dg.diem_so <= 3).length;
        },
        totalPages() {
            return Math.ceil(this.danhGias.length / this.itemsPerPage) || 1;
        },
        paginatedDanhGias() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            return this.danhGias.slice(start, start + this.itemsPerPage);
        },
        displayedStart() {
            if (this.danhGias.length === 0) return 0;
            return (this.currentPage - 1) * this.itemsPerPage + 1;
        },
        displayedEnd() {
            return Math.min(this.currentPage * this.itemsPerPage, this.danhGias.length);
        }
    },
    methods: {
        async fetchDanhGias() {
            try {
                this.loading = true;
                const response = await api.get('/admin/danh-gia');
                this.danhGias = response;
            } catch (error) {
                console.error("Lỗi lấy danh sách đánh giá:", error);
            } finally {
                this.loading = false;
            }
        },
        async deleteDanhGia(id) {
            if (!confirm('Bạn có chắc chắn muốn xoá đánh giá này?')) return;
            try {
                await api.delete(`/admin/danh-gia/${id}`);
                this.fetchDanhGias();
            } catch (error) {
                alert(error.message || 'Lỗi khi xoá đánh giá');
            }
        },
        formatDate(dateStr) {
            if (!dateStr) return '';
            const date = new Date(dateStr);
            return date.toLocaleDateString('vi-VN');
        },
        prevPage() {
            if (this.currentPage > 1) this.currentPage--;
        },
        nextPage() {
            if (this.currentPage < this.totalPages) this.currentPage++;
        },
        goToPage(page) {
            this.currentPage = page;
        }
    },
    mounted() {
        this.fetchDanhGias();
    }
}
</script>

<style scoped>
body { font-family: 'Inter', sans-serif; background-color: #faf8ff; }
.glass-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px);
    border: 1px solid #E5E7EB;
}
.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    vertical-align: middle;
}
.star-fill {
    font-variation-settings: 'FILL' 1;
    color: #FFB596; /* Using tertiary related tone for stars */
}
.truncate-2-lines {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
