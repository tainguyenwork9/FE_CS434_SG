<template>
    <div>
        <!-- TopNavBar -->
        <!-- Main Content Area -->
        <main class="flex-grow pt-3xl pb-2xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full mt-16">
            <!-- Header Section -->
            <div class="mb-xl">
                <h1 class="font-headline-lg text-headline-lg text-on-surface mb-xs">Lịch sử thuê xe</h1>
                <p class="font-body-lg text-body-lg text-on-surface-variant">Quản lý các đơn đặt xe và trạng thái thuê xe của bạn trong hệ thống MotoRent Pro.</p>
            </div>
            <!-- Central Container -->
            <div class="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden">
                <!-- Utility Bar -->
                <div class="p-lg border-b border-outline-variant/20 flex flex-col md:flex-row md:items-center justify-between gap-md">
                    <div class="relative flex-grow max-w-md">
                        <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
                        <input v-model="searchQuery" class="w-full pl-11 pr-4 py-3 bg-surface-container-low border border-outline-variant/50 rounded-xl font-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-standard" placeholder="Tìm kiếm mã đơn, tên xe..." type="text"/>
                    </div>
                    <div class="flex items-center gap-md">
                        <div class="relative min-w-[200px]">
                            <select v-model="selectedStatus" class="w-full appearance-none bg-surface-container-low border border-outline-variant/50 rounded-xl px-4 py-3 font-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-standard cursor-pointer pr-10">
                                <option value="">Tất cả trạng thái</option>
                                <option value="ChoDuyet">Chờ duyệt</option>
                                <option value="DaDuyet">Đã duyệt</option>
                                <option value="DangThue">Đang thuê</option>
                                <option value="DaHoanThanh">Đã hoàn thành</option>
                                <option value="DaHuy">Đã hủy</option>
                            </select>
                            <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline">expand_more</span>
                        </div>
                    </div>
                </div>
                <!-- Data Table -->
                <div class="overflow-x-auto">
                    <table class="w-full border-collapse">
                        <thead class="bg-surface-container-low">
                            <tr>
                                <th class="text-left px-lg py-md font-label-md text-on-surface-variant uppercase tracking-wider">Mã đơn</th>
                                <th class="text-left px-lg py-md font-label-md text-on-surface-variant uppercase tracking-wider">Xe</th>
                                <th class="text-left px-lg py-md font-label-md text-on-surface-variant uppercase tracking-wider">Ngày thuê</th>
                                <th class="text-left px-lg py-md font-label-md text-on-surface-variant uppercase tracking-wider">Ngày trả</th>
                                <th class="text-left px-lg py-md font-label-md text-on-surface-variant uppercase tracking-wider">Tổng tiền</th>
                                <th class="text-left px-lg py-md font-label-md text-on-surface-variant uppercase tracking-wider">Trạng thái</th>
                                <th class="text-right px-lg py-md font-label-md text-on-surface-variant uppercase tracking-wider">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-outline-variant/10">
                            <tr v-for="order in filteredOrders" :key="order.ma_don_thue || order.id" class="hover:bg-primary/5 transition-standard group">
                                <td class="px-lg py-lg font-body-md font-semibold text-primary">#DH-{{ order.ma_don_thue || order.id }}</td>
                                <td class="px-lg py-lg">
                                    <div class="flex items-center gap-md">
                                        <div class="w-16 h-12 rounded-lg bg-surface-container overflow-hidden flex-shrink-0">
                                            <img class="w-full h-full object-cover" :src="order.xe_may?.hinh_anh || 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=150&q=80'" :alt="order.xe_may?.ten_xe"/>
                                        </div>
                                        <div>
                                            <div class="font-label-md text-on-surface">{{ order.xe_may?.ten_xe }}</div>
                                            <div class="font-label-sm text-outline">{{ order.xe_may?.bien_so }}</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-lg py-lg font-body-md text-on-surface-variant">{{ order.ngay_nhan_du_kien }}</td>
                                <td class="px-lg py-lg font-body-md text-on-surface-variant">{{ order.ngay_tra_du_kien }}</td>
                                <td class="px-lg py-lg font-body-md font-bold text-on-surface">{{ Number(order.tong_tien_thue).toLocaleString('vi-VN') }}đ</td>
                                <td class="px-lg py-lg">
                                    <span :class="getStatusBadgeClass(order.trang_thai_don)" class="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-bold">
                                        {{ getStatusText(order.trang_thai_don) }}
                                    </span>
                                </td>
                                <td class="px-lg py-lg text-right">
                                    <div class="flex items-center justify-end gap-md">
                                        <router-link :to="`/danh-gia?id=${order.ma_don_thue || order.id}`" class="text-primary font-label-md hover:underline transition-standard">
                                            Chi tiết
                                        </router-link>
                                        <button v-if="order.trang_thai_don === 'ChoDuyet'" @click="cancelOrder(order.ma_don_thue || order.id)" class="text-red-600 hover:text-red-800 font-label-md hover:underline transition-standard flex items-center gap-xs">
                                            <span class="material-symbols-outlined text-[18px]">cancel</span>
                                            Hủy
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr v-if="filteredOrders.length === 0 && !loading">
                                <td colspan="7" class="text-center py-xl text-on-surface-variant font-body-lg">
                                    Không có đơn thuê xe nào.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>

    </div>
</template>

<script>
import { api } from '../../services/api';

export default {
    name: 'LichSuThuXe',
    data() {
        return {
            orders: [],
            searchQuery: '',
            selectedStatus: '',
            loading: false,
        };
    },
    computed: {
        filteredOrders() {
            return this.orders.filter(order => {
                const matchSearch = order.ma_don_thue?.toString().includes(this.searchQuery) ||
                                    order.xe_may?.ten_xe?.toLowerCase().includes(this.searchQuery.toLowerCase());
                const matchStatus = this.selectedStatus ? order.trang_thai_don === this.selectedStatus : true;
                return matchSearch && matchStatus;
            });
        }
    },
    async mounted() {
        await this.fetchOrders();
    },
    methods: {
        async fetchOrders() {
            this.loading = true;
            try {
                this.orders = await api.get('/don-thue');
            } catch (error) {
                console.error('Lỗi tải danh sách đơn thuê:', error);
            } finally {
                this.loading = false;
            }
        },
        async cancelOrder(id) {
            if (!confirm('Bạn có chắc chắn muốn hủy đơn thuê xe này?')) return;
            try {
                await api.put(`/don-thue/${id}/huy`);
                alert('Hủy đơn thuê thành công!');
                await this.fetchOrders();
            } catch (error) {
                alert(error.message || 'Lỗi khi hủy đơn thuê.');
            }
        },
        getStatusText(status) {
            const statusMap = {
                'ChoDuyet': 'Chờ duyệt',
                'DaDuyet': 'Đã duyệt',
                'DangThue': 'Đang thuê',
                'DaHoanThanh': 'Đã trả',
                'DaHuy': 'Đã hủy',
            };
            return statusMap[status] || status;
        },
        getStatusBadgeClass(status) {
            const classMap = {
                'ChoDuyet': 'bg-yellow-100 text-yellow-700',
                'DaDuyet': 'bg-blue-100 text-blue-700',
                'DangThue': 'bg-green-100 text-green-700',
                'DaHoanThanh': 'bg-gray-100 text-gray-700',
                'DaHuy': 'bg-red-100 text-red-700',
            };
            return classMap[status] || 'bg-outline-variant/10 text-on-surface-variant';
        }
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
.active-nav-link {
    border-bottom: 2px solid #004ac6;
    color: #004ac6;
    font-weight: 600;
}
.transition-standard { transition: all 200ms ease-in-out; }
</style>
