<template>
    <div>
        <!-- SideNavBar Shell -->
        <!-- Main Content Area -->
        <div class="space-y-xl">
            <!-- TopAppBar Shell -->
            <!-- Content Canvas -->
            <section class="mt-16 p-margin-desktop space-y-lg">
                <!-- Page Header -->
                <div class="flex justify-between items-end">
                    <div class="space-y-1">
                        <h2 class="font-headline-lg text-headline-lg text-on-surface">Quản lý Đơn thuê xe</h2>
                        <p class="text-body-md text-on-surface-variant">Theo dõi, kiểm tra và phê duyệt các yêu cầu đặt xe từ khách hàng doanh nghiệp.</p>
                    </div>

                </div>
                <!-- Dashboard Stats Grid -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-gutter">
                    <div class="p-lg bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm hover:translate-y-[-2px] transition-all duration-200">
                        <div class="flex justify-between items-start mb-md">
                            <span class="material-symbols-outlined text-primary p-2 bg-primary/10 rounded-lg">receipt_long</span>
                            <span class="text-xs font-bold text-success flex items-center text-[#10b981]">+12% <span class="material-symbols-outlined text-xs">trending_up</span>
                        </span>
                    </div>
                    <p class="text-label-md text-on-surface-variant">Tổng đơn hàng</p>
                    <p class="text-headline-lg font-bold">{{ danhsachDonThue.length }}</p>
                </div>
                <div class="p-lg bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm hover:translate-y-[-2px] transition-all duration-200">
                    <div class="flex justify-between items-start mb-md">
                        <span class="material-symbols-outlined text-[#f59e0b] p-2 bg-yellow-100 rounded-lg">pending_actions</span>
                        <span class="text-xs font-bold text-[#ba1a1a]">8 mới</span>
                    </div>
                    <p class="text-label-md text-on-surface-variant">Chờ duyệt</p>
                    <p class="text-headline-lg font-bold">{{ danhsachDonThue.filter(d => d.trang_thai_don === 'ChoDuyet').length }}</p>
                </div>
                <div class="p-lg bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm hover:translate-y-[-2px] transition-all duration-200">
                    <div class="flex justify-between items-start mb-md">
                        <span class="material-symbols-outlined text-[#8b5cf6] p-2 bg-purple-100 rounded-lg">key</span>
                    </div>
                    <p class="text-label-md text-on-surface-variant">Đang thuê</p>
                    <p class="text-headline-lg font-bold">{{ danhsachDonThue.filter(d => d.trang_thai_don === 'DangThue').length }}</p>
                </div>
                <div class="p-lg bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm hover:translate-y-[-2px] transition-all duration-200">
                    <div class="flex justify-between items-start mb-md">
                        <span class="material-symbols-outlined text-[#10b981] p-2 bg-green-100 rounded-lg">task_alt</span>
                    </div>
                    <p class="text-label-md text-on-surface-variant">Hoàn thành</p>
                    <p class="text-headline-lg font-bold">{{ danhsachDonThue.filter(d => d.trang_thai_don === 'DaHoanThanh').length }}</p>
                </div>
            </div>
            <div class="flex gap-gutter items-start">
                <!-- Sidebar Filter Panel -->
                <!-- Order Table Panel -->
                <div class="flex-1 bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden">
                    <div class="p-lg border-b border-outline-variant flex justify-between items-center">
                        <h3 class="font-title-lg text-on-surface">Danh sách đơn hàng</h3>
                        <div class="flex gap-md">
                            <div class="relative">
                                <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
                                <input class="bg-surface-container-low border-none rounded-lg pl-9 pr-4 py-1.5 text-label-md w-64 focus:ring-1 focus:ring-primary" placeholder="Tìm ID, tên khách..." type="text"/>
                            </div>
                        </div>
                    </div>
                    <div class="overflow-x-auto custom-scrollbar">
                        <table class="w-full text-left">
                            <thead>
                                <tr class="bg-surface-container-low border-b border-outline-variant">
                                    <th class="px-lg py-md text-label-sm uppercase text-outline">Mã đơn</th>
                                    <th class="px-lg py-md text-label-sm uppercase text-outline">Khách hàng</th>
                                    <th class="px-lg py-md text-label-sm uppercase text-outline">Xe</th>
                                    <th class="px-lg py-md text-label-sm uppercase text-outline">Ngày đặt</th>
                                    <th class="px-lg py-md text-label-sm uppercase text-outline">Tổng tiền</th>
                                    <th class="px-lg py-md text-label-sm uppercase text-outline">Trạng thái</th>
                                    <th class="px-lg py-md text-label-sm uppercase text-outline text-right">Thao tác</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-outline-variant">
                                <!-- Row 1: Pending -->
                                <tr v-for="order in paginatedOrders" :key="order.ma_don_thue" class="hover:bg-surface-container transition-colors group">
                                    <td class="px-lg py-md font-label-md text-primary font-bold">#ORD-{{ order.ma_don_thue }}</td>
                                    <td class="px-lg py-md">
                                        <div class="flex items-center gap-md">
                                            <div class="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold text-xs uppercase">
                                                {{ order.khach_hang ? order.khach_hang.ho_ten.substring(0, 2) : 'KH' }}
                                            </div>
                                            <div>
                                                <p class="font-label-md text-on-surface">{{ order.khach_hang ? order.khach_hang.ho_ten : 'Khách hàng' }}</p>
                                                <p class="text-xs text-on-surface-variant">{{ order.khach_hang ? order.khach_hang.so_dien_thoai : 'N/A' }}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-lg py-md">
                                        <p class="font-label-md text-on-surface">{{ order.xe_may ? order.xe_may.ten_xe : 'Xe bị xóa' }}</p>
                                        <p class="text-xs text-on-surface-variant">Biển: {{ order.xe_may ? order.xe_may.bien_so_xe : 'N/A' }}</p>
                                    </td>
                                    <td class="px-lg py-md text-body-md text-on-surface-variant">{{ formatDate(order.ngay_dat) }}</td>
                                    <td class="px-lg py-md font-bold text-on-surface">{{ formatCurrency(order.tong_tien_thue) }}</td>
                                    <td class="px-lg py-md">
                                        <span :class="['px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider', getStatusStyle(order.trang_thai_don)]">{{ getStatusText(order.trang_thai_don) }}</span>
                                    </td>
                                    <td class="px-lg py-md text-right space-x-2">
                                        <template v-if="order.trang_thai_don === 'ChoDuyet'">
                                            <button @click="updateStatus(order, 'DaDuyet')" class="p-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-on-primary transition-all" title="Duyệt">
                                                <span class="material-symbols-outlined text-[20px]">check_circle</span>
                                            </button>
                                            <button @click="updateStatus(order, 'DaHuy')" class="p-1.5 rounded-lg bg-error/10 text-error hover:bg-error hover:text-on-primary transition-all" title="Từ chối">
                                                <span class="material-symbols-outlined text-[20px]">cancel</span>
                                            </button>
                                        </template>
                                        <template v-if="order.trang_thai_don === 'DaDuyet'">
                                            <button @click="updateStatus(order, 'DangThue')" class="px-4 py-1.5 rounded-lg bg-primary text-on-primary font-label-sm hover:brightness-110 transition-all">Giao xe</button>
                                        </template>
                                        <template v-if="order.trang_thai_don === 'DangThue'">
                                            <button @click="updateStatus(order, 'DaHoanThanh')" class="px-4 py-1.5 rounded-lg border border-purple-500 text-purple-600 hover:bg-purple-50 font-label-sm transition-all">Nhận xe</button>
                                        </template>
                                        <template v-if="['DaHoanThanh', 'DaHuy'].includes(order.trang_thai_don)">
                                            <button class="p-2 text-on-surface-variant hover:text-primary transition-colors">
                                                <span class="material-symbols-outlined">more_vert</span>
                                            </button>
                                        </template>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- Pagination -->
                    <div class="px-lg py-md border-t border-outline-variant flex items-center justify-between" v-if="danhsachDonThue.length > 0">
                        <p class="text-label-sm text-on-surface-variant">Hiển thị {{ displayedStart }} - {{ displayedEnd }} trên {{ danhsachDonThue.length }} đơn hàng</p>
                        <div class="flex gap-2">
                            <button @click="prevPage" :disabled="currentPage === 1" :class="{'opacity-50 cursor-not-allowed': currentPage === 1}" class="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant hover:bg-surface-container transition-all">
                                <span class="material-symbols-outlined text-sm">chevron_left</span>
                            </button>
                            <button v-for="page in totalPages" :key="page" @click="goToPage(page)" :class="{'bg-primary text-on-primary': currentPage === page, 'hover:bg-surface-container': currentPage !== page}" class="w-8 h-8 flex items-center justify-center rounded-lg font-bold text-xs">{{ page }}</button>
                            <button @click="nextPage" :disabled="currentPage === totalPages" :class="{'opacity-50 cursor-not-allowed': currentPage === totalPages}" class="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant hover:bg-surface-container transition-all">
                                <span class="material-symbols-outlined text-sm">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </div>
</template>

<script>
import { api } from '../../services/api';

export default {
    name: 'QuanLyDonThue',
    data() {
        return {
            danhsachDonThue: [],
            loading: false,
            currentPage: 1,
            itemsPerPage: 10
        }
    },
    computed: {
        totalPages() {
            return Math.ceil(this.danhsachDonThue.length / this.itemsPerPage);
        },
        paginatedOrders() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            return this.danhsachDonThue.slice(start, start + this.itemsPerPage);
        },
        displayedStart() {
            if (this.danhsachDonThue.length === 0) return 0;
            return (this.currentPage - 1) * this.itemsPerPage + 1;
        },
        displayedEnd() {
            return Math.min(this.currentPage * this.itemsPerPage, this.danhsachDonThue.length);
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
        async fetchOrders() {
            try {
                this.loading = true;
                const response = await api.get('/don-thue');
                this.danhsachDonThue = response;
            } catch (error) {
                console.error("Failed to fetch orders:", error);
            } finally {
                this.loading = false;
            }
        },
        async updateStatus(order, newStatus) {
            try {
                await api.put(`/admin/don-thue/${order.ma_don_thue}`, {
                    ...order,
                    trang_thai_don: newStatus
                });
                this.fetchOrders();
            } catch (error) {
                alert("Lỗi khi cập nhật trạng thái");
                console.error(error);
            }
        },
        formatCurrency(value) {
            return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
        },
        formatDate(dateString) {
            if (!dateString) return 'N/A';
            const d = new Date(dateString);
            return d.toLocaleDateString('vi-VN');
        },
        getStatusStyle(status) {
            switch(status) {
                case 'ChoDuyet': return 'bg-yellow-100 text-yellow-700';
                case 'DaDuyet': return 'bg-blue-100 text-blue-700';
                case 'DangThue': return 'bg-purple-100 text-purple-700';
                case 'DaHoanThanh': return 'bg-green-100 text-green-700';
                case 'DaHuy': return 'bg-red-100 text-red-700';
                default: return 'bg-gray-100 text-gray-700';
            }
        },
        getStatusText(status) {
            switch(status) {
                case 'ChoDuyet': return 'Chờ duyệt';
                case 'DaDuyet': return 'Đã duyệt';
                case 'DangThue': return 'Đang thuê';
                case 'DaHoanThanh': return 'Hoàn thành';
                case 'DaHuy': return 'Đã huỷ';
                default: return status;
            }
        }
    },
    mounted() {
        this.fetchOrders();
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
    vertical-align: middle;
}
.glass-panel {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px);
    border: 1px solid #e7e7f3;
}
.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #c3c6d7;
    border-radius: 10px;
}
.active-nav-item {
    color: #004ac6;
    font-weight: 700;
}
</style>
