<template>
    <div>
        <!-- SideNavBar (Prebuilt Logic) -->
        <!-- TopNavBar (Prebuilt Logic) -->
        <!-- Main Content Area -->
        <div class="space-y-xl">
            <!-- Page Title & Quick Actions -->
            <div class="flex justify-between items-end mb-xl">
                <div>
                    <h2 class="font-headline-lg text-headline-lg text-on-surface">Tổng quan hệ thống</h2>
                    <p class="font-body-md text-body-md text-outline">Cập nhật lúc 09:41 AM, Hôm nay</p>
                </div>
                <div class="flex gap-md">
                    <button @click="exportReport" class="flex items-center gap-2 px-md py-2 bg-surface border border-outline-variant rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high transition-all">
                        <span class="material-symbols-outlined text-[18px]" data-icon="download">download</span>
                        Xuất báo cáo
                    </button>
                </div>
            </div>
            <!-- Stats Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg mb-xl">
                <!-- Revenue -->
                <div class="glass-card p-lg rounded-2xl shadow-sm hover:translate-y-[-4px] transition-transform duration-200">
                    <div class="flex justify-between items-start mb-md">
                        <div class="p-3 bg-primary/10 rounded-xl text-primary">
                            <span class="material-symbols-outlined" data-icon="payments">payments</span>
                        </div>
                        <span class="text-[12px] font-bold text-primary bg-primary/5 px-2 py-1 rounded-full">+12%</span>
                    </div>
                    <p class="font-label-sm text-label-sm text-outline uppercase tracking-wider">Doanh thu</p>
                    <p class="font-display-sm text-display-sm text-on-surface mt-xs">{{ formatCurrency(stats.revenue) }}
                    </p>
                    <div class="mt-md h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                        <div class="h-full bg-primary rounded-full" style="width: 75%">
                        </div>
                    </div>
                </div>
                <!-- Customers -->
                <div class="glass-card p-lg rounded-2xl shadow-sm hover:translate-y-[-4px] transition-transform duration-200">
                    <div class="flex justify-between items-start mb-md">
                        <div class="p-3 bg-secondary/10 rounded-xl text-secondary">
                            <span class="material-symbols-outlined" data-icon="person_add">person_add</span>
                        </div>
                        <span class="text-[12px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+5%</span>
                    </div>
                    <p class="font-label-sm text-label-sm text-outline uppercase tracking-wider">Khách hàng</p>
                    <p class="font-display-sm text-display-sm text-on-surface mt-xs">{{ stats.customers }}</p>
                    <p class="text-[12px] text-outline mt-sm">Khách hàng mới trong tháng</p>
                </div>
                <!-- Vehicles -->
                <div class="glass-card p-lg rounded-2xl shadow-sm hover:translate-y-[-4px] transition-transform duration-200">
                    <div class="flex justify-between items-start mb-md">
                        <div class="p-3 bg-purple-100 rounded-xl text-purple-600">
                            <span class="material-symbols-outlined" data-icon="two_wheeler">two_wheeler</span>
                        </div>
                        <span class="text-[12px] font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-full">95%</span>
                    </div>
                    <p class="font-label-sm text-label-sm text-outline uppercase tracking-wider">Xe hoạt động</p>
                    <p class="font-display-sm text-display-sm text-on-surface mt-xs">{{ stats.vehicles.active }}</p>
                    <p class="text-[12px] text-outline mt-sm">Trên tổng số {{ stats.vehicles.total }} xe</p>
                </div>
                <!-- Rentals -->
                <div class="glass-card p-lg rounded-2xl shadow-sm hover:translate-y-[-4px] transition-transform duration-200">
                    <div class="flex justify-between items-start mb-md">
                        <div class="p-3 bg-orange-100 rounded-xl text-orange-600">
                            <span class="material-symbols-outlined" data-icon="assignment_turned_in">assignment_turned_in</span>
                        </div>
                        <span class="text-[12px] font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-full">+8%</span>
                    </div>
                    <p class="font-label-sm text-label-sm text-outline uppercase tracking-wider">Đơn thuê</p>
                    <p class="font-display-sm text-display-sm text-on-surface mt-xs">{{ stats.rentals_today }}</p>
                    <p class="text-[12px] text-outline mt-sm">Đơn hàng phát sinh hôm nay</p>
                </div>
            </div>
            <!-- Charts Section -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-lg mb-xl">
                <!-- Revenue Trend Chart -->
                <div class="glass-card p-xl rounded-2xl shadow-sm">
                    <div class="flex justify-between items-center mb-xl">
                        <h3 class="font-title-lg text-title-lg text-on-surface">Xu hướng doanh thu</h3>
                        <select v-model="selectedPeriod" @change="fetchDashboardData" class="bg-surface-container-low border-outline-variant rounded-lg text-label-sm focus:ring-primary outline-none">
                            <option value="7_days">7 ngày qua</option>
                            <option value="30_days">30 ngày qua</option>
                            <option value="year">Trong năm</option>
                        </select>
                    </div>
                    <div class="relative h-[280px] w-full flex items-end justify-between px-2 overflow-hidden">
                        <!-- Simple visualization representing a line chart with area fill -->
                        <div class="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent">
                        </div>
                        
                        <div v-for="(item, index) in revenueTrend" :key="index" class="flex-1 bg-primary/80 mx-1 rounded-t-lg relative group transition-all hover:bg-primary" :style="`height: ${Math.max((item.revenue / maxRevenue) * 100, 2)}%`">
                            <div class="absolute -top-10 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 text-center">
                                {{ formatCurrency(item.revenue) }}<br>{{ item.date }}
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between mt-md px-2 text-label-sm text-outline">
                        <span v-for="(item, index) in revenueTrend" :key="index" class="flex-1 text-center overflow-visible whitespace-nowrap">{{ item.day }}</span>
                    </div>
                </div>
                <!-- Vehicle Distribution Chart -->
                <div class="glass-card p-xl rounded-2xl shadow-sm">
                    <div class="flex justify-between items-center mb-xl">
                        <h3 class="font-title-lg text-title-lg text-on-surface">Phân bố loại xe</h3>
                        <button class="text-primary hover:underline text-label-sm">Xem chi tiết</button>
                    </div>
                    <div class="flex flex-col gap-lg h-[280px] justify-center">
                        <div v-for="(item, index) in vehicleDistribution" :key="index" class="space-y-sm">
                            <div class="flex justify-between font-label-md mb-1">
                                <span>{{ item.label }}</span>
                                <span class="font-bold">{{ item.percentage }}%</span>
                            </div>
                            <div class="w-full bg-surface-container-high h-3 rounded-full overflow-hidden">
                                <div :class="['h-full rounded-full transition-all duration-700', getVehicleCategoryClass(index)]" :style="`width: ${item.percentage}%`">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-md text-[12px] text-outline-variant italic">Dữ liệu tính trên số lượng đơn thuê thành công</div>
                </div>
            </div>
            <!-- Recent Orders Table -->
            <section class="glass-card rounded-2xl shadow-sm overflow-hidden mb-xl">
                <div class="p-xl border-b border-outline-variant flex justify-between items-center">
                    <h3 class="font-title-lg text-title-lg text-on-surface">Đơn hàng gần đây</h3>
                </div>
                <div class="overflow-x-auto scroll-hide">
                    <table class="w-full text-left">
                        <thead class="bg-surface-container-low/50">
                            <tr>
                                <th class="px-xl py-lg font-label-sm text-label-sm text-outline uppercase tracking-wider">Mã đơn</th>
                                <th class="px-xl py-lg font-label-sm text-label-sm text-outline uppercase tracking-wider">Khách hàng</th>
                                <th class="px-xl py-lg font-label-sm text-label-sm text-outline uppercase tracking-wider">Xe</th>
                                <th class="px-xl py-lg font-label-sm text-label-sm text-outline uppercase tracking-wider">Ngày thuê</th>
                                <th class="px-xl py-lg font-label-sm text-label-sm text-outline uppercase tracking-wider">Tổng tiền</th>
                                <th class="px-xl py-lg font-label-sm text-label-sm text-outline uppercase tracking-wider">Trạng thái</th>
                                <th class="px-xl py-lg font-label-sm text-label-sm text-outline uppercase tracking-wider">
                                </th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-outline-variant/30">
                            <tr v-for="order in recentOrders" :key="order.ma_don_thue" class="hover:bg-surface-container-low transition-colors group">
                                <td class="px-xl py-lg font-label-md text-label-md text-primary font-bold">{{ order.ma_don_thue }}</td>
                                <td class="px-xl py-lg">
                                    <div class="flex items-center gap-md">
                                        <div class="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden flex items-center justify-center text-primary font-bold">
                                            {{ order.khach_hang.charAt(0) }}
                                        </div>
                                        <span class="font-body-md text-body-md text-on-surface">{{ order.khach_hang }}</span>
                                    </div>
                                </td>
                                <td class="px-xl py-lg font-body-md text-body-md text-on-surface">{{ order.xe }}</td>
                                <td class="px-xl py-lg font-body-md text-body-md text-on-surface">{{ order.ngay_dat }}</td>
                                <td class="px-xl py-lg font-label-md text-label-md text-on-surface font-semibold">{{ formatCurrency(order.tong_tien) }}</td>
                                <td class="px-xl py-lg">
                                    <span :class="['px-3 py-1 rounded-full text-[12px] font-bold', getStatusClass(order.trang_thai)]">{{ order.trang_thai }}</span>
                                </td>
                                <td class="px-xl py-lg text-right">
                                    <button class="p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-surface-container-high rounded-lg">
                                        <span class="material-symbols-outlined text-outline" data-icon="more_vert">more_vert</span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="p-lg bg-surface-container-low/30 border-t border-outline-variant flex justify-between items-center" v-if="recentOrders.length > 0">
                    <span class="text-label-sm text-outline">Hiển thị {{ recentOrders.length }} đơn hàng gần đây nhất</span>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { api } from '../../services/api';

export default {
    name: 'Dashboard',
    data() {
        return {
            loading: true,
            selectedPeriod: '7_days',
            stats: {
                revenue: 0,
                customers: 0,
                vehicles: {
                    active: 0,
                    total: 0,
                    percentage: 0
                },
                rentals_today: 0
            },
            vehicleDistribution: [],
            recentOrders: [],
            revenueTrend: []
        }
    },
    computed: {
        maxRevenue() {
            if (!this.revenueTrend || this.revenueTrend.length === 0) return 100;
            const max = Math.max(...this.revenueTrend.map(item => item.revenue));
            return max > 0 ? max : 100;
        }
    },
    methods: {
        async fetchDashboardData() {
            try {
                this.loading = true;
                const response = await api.get(`/admin/dashboard?period=${this.selectedPeriod}`);
                this.stats = response.stats;
                this.vehicleDistribution = response.vehicle_distribution;
                this.recentOrders = response.recent_orders;
                this.revenueTrend = response.revenue_trend || [];
            } catch (error) {
                console.error("Failed to fetch dashboard data:", error);
            } finally {
                this.loading = false;
                this.$nextTick(() => {
                    this.setupInteractions();
                });
            }
        },
        formatCurrency(value) {
            return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
        },
        getStatusClass(status) {
            switch(status) {
                case 'Đã trả xe': return 'bg-green-100 text-green-700';
                case 'Đã nhận xe': return 'bg-primary/10 text-primary';
                case 'Chờ giao xe': return 'bg-amber-100 text-amber-700';
                case 'Đã hủy': return 'bg-red-100 text-red-700';
                default: return 'bg-surface-container-high text-on-surface';
            }
        },
        exportReport() {
            if (!this.recentOrders || this.recentOrders.length === 0) {
                alert("Không có dữ liệu để xuất");
                return;
            }
            
            // Build CSV content
            let csvContent = "data:text/csv;charset=utf-8,\uFEFF"; // Include BOM for UTF-8 Excel support
            
            // Header
            csvContent += "Mã đơn,Khách hàng,Xe,Ngày thuê,Tổng tiền,Trạng thái\n";
            
            // Rows
            this.recentOrders.forEach(order => {
                const maDon = order.ma_don_thue;
                const khachHang = `"${order.khach_hang}"`; // Quote to handle commas
                const xe = `"${order.xe}"`;
                const ngayThue = order.ngay_dat;
                const tongTien = order.tong_tien;
                const trangThai = order.trang_thai;
                
                csvContent += `${maDon},${khachHang},${xe},${ngayThue},${tongTien},${trangThai}\n`;
            });
            
            // Trigger download
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            
            const dateStr = new Date().toISOString().split('T')[0];
            link.setAttribute("download", `bao_cao_doanh_thu_${dateStr}.csv`);
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        },
        getVehicleCategoryClass(index) {
            const colors = ['bg-primary', 'bg-secondary', 'bg-purple-500', 'bg-orange-500', 'bg-teal-500'];
            return colors[index % colors.length];
        },
        setupInteractions() {
            // Micro-interactions and effects
            document.querySelectorAll('.glass-card').forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-4px)';
                });
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateY(0)';
                });
            });
        }
    },
    mounted() {
        this.fetchDashboardData();
    }
}
</script>

<style scoped>
body { font-family: 'Inter', sans-serif; }
.glass-card {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(229, 231, 235, 0.5);
}
.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
.scroll-hide::-webkit-scrollbar { display: none; }
</style>
