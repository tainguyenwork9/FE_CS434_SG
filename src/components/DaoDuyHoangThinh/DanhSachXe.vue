<template>
    <div>
        <!-- TopNavBar -->
        <main class="pt-[96px] pb-3xl px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row gap-gutter">
            <!-- Left Sidebar Filter -->
            <!-- Right Content Area -->
            <section class="flex-grow">
                <!-- Search & Sort Bar -->
                <div class="flex flex-col md:flex-row gap-md mb-xl items-center">
                    <div class="relative flex-grow w-full">
                        <span class="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline">search</span>
                        <input v-model="searchQuery" class="w-full h-12 pl-12 pr-md bg-surface-container-lowest border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="Tìm kiếm mẫu xe, hãng xe..." type="text"/>
                    </div>
                    <div class="flex items-center gap-md w-full md:w-auto">
                        <div class="relative w-full md:w-48">
                            <select v-model="sortOrder" class="w-full h-12 px-md bg-surface-container-lowest border border-outline-variant rounded-xl outline-none focus:ring-2 focus:ring-primary cursor-pointer text-body-md">
                                <option value="">Sắp xếp theo</option>
                                <option value="Giá: Thấp đến Cao">Giá: Thấp đến Cao</option>
                                <option value="Giá: Cao đến Thấp">Giá: Cao đến Thấp</option>
                                <option value="Phổ biến nhất">Phổ biến nhất</option>
                            </select>
                        </div>

                    </div>
                </div>
                <!-- Category Filter Pills -->
                <div class="flex flex-wrap gap-sm mb-lg">
                    <button 
                        @click="selectedCategory = null; fetchVehicles()"
                        :class="[!selectedCategory ? 'bg-primary text-on-primary' : 'bg-surface-container hover:bg-surface-container-high text-on-surface']"
                        class="px-lg py-sm rounded-full font-bold text-label-md transition-colors"
                    >
                        Tất cả
                    </button>
                    <button 
                        v-for="cat in categories" 
                        :key="cat.ma_danh_muc"
                        @click="selectedCategory = cat.ma_danh_muc; fetchVehicles()"
                        :class="[selectedCategory === cat.ma_danh_muc ? 'bg-primary text-on-primary' : 'bg-surface-container hover:bg-surface-container-high text-on-surface']"
                        class="px-lg py-sm rounded-full font-bold text-label-md transition-colors"
                    >
                        {{ cat.ten_danh_muc }}
                    </button>
                </div>

                <!-- Vehicle Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
                    <div v-for="vehicle in vehicles" :key="vehicle.ma_xe || vehicle.id" class="glass-card rounded-xl overflow-hidden hover-lift flex flex-col">
                        <div class="relative h-56 w-full bg-surface-container">
                            <img class="w-full h-full object-cover" :src="vehicle.hinh_anh || 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80'" :alt="vehicle.ten_xe"/>
                            <div class="absolute top-md left-md">
                                <span class="px-sm py-1 bg-primary text-on-primary text-label-sm font-label-sm rounded-lg shadow-md">
                                    {{ vehicle.danh_muc_xe ? vehicle.danh_muc_xe.ten_danh_muc : 'Xe máy' }}
                                </span>
                            </div>
                        </div>
                        <div class="p-xl flex-grow flex flex-col">
                            <div class="flex justify-between items-start mb-sm">
                                <h3 class="text-title-lg font-title-lg text-on-surface">{{ vehicle.ten_xe }}</h3>
                                <span :class="[vehicle.tinh_trang_xe === 'SanSang' || vehicle.tinh_trang_xe === 'Sẵn Sàng' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700']" class="flex items-center gap-xs px-sm py-1 rounded-full text-label-sm font-label-sm">
                                    <span :class="[vehicle.tinh_trang_xe === 'SanSang' || vehicle.tinh_trang_xe === 'Sẵn Sàng' ? 'bg-green-500' : 'bg-orange-500']" class="w-2 h-2 rounded-full"></span>
                                    {{ vehicle.tinh_trang_xe === 'SanSang' || vehicle.tinh_trang_xe === 'Sẵn Sàng' ? 'Sẵn sàng' : 'Bận' }}
                                </span>
                            </div>
                            <p class="text-primary font-bold text-headline-lg-mobile mb-xl">
                                {{ Number(vehicle.gia_thue_ngay).toLocaleString('vi-VN') }}đ<span class="text-body-md font-normal text-on-surface-variant">/ngày</span>
                            </p>
                            <div class="mt-auto pt-lg border-t border-outline-variant flex gap-md">
                                <button @click="$router.push(`/chi-tiet-xe?id=${vehicle.ma_xe || vehicle.id}`)" class="flex-grow py-md px-lg bg-primary-container text-on-primary-container rounded-xl font-bold text-label-md hover:bg-primary hover:text-on-primary transition-colors flex items-center justify-center gap-sm">
                                    Xem chi tiết
                                    <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div v-if="vehicles.length === 0 && !loading" class="col-span-full py-5xl text-center text-on-surface-variant font-body-lg">
                        Không tìm thấy xe máy nào phù hợp với bộ lọc của bạn.
                    </div>
                </div>
            </section>
        </main>

    </div>
</template>

<script>
import { api } from '../../services/api';

export default {
    name: 'DanhSachXe',
    data() {
        return {
            vehicles: [],
            categories: [],
            selectedCategory: null,
            searchQuery: '',
            sortOrder: '',
            loading: false,
        };
    },
    async mounted() {
        await this.fetchCategories();
        await this.fetchVehicles();
        
        // Ripple-like scaling
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('mousedown', () => {
                btn.style.transform = 'scale(0.95)';
            });
            btn.addEventListener('mouseup', () => {
                btn.style.transform = 'scale(1)';
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'scale(1)';
            });
        });
    },
    watch: {
        searchQuery() {
            this.fetchVehicles();
        },
        sortOrder() {
            this.sortVehicles();
        }
    },
    methods: {
        sortVehicles() {
            if (this.sortOrder === 'Giá: Thấp đến Cao') {
                this.vehicles.sort((a, b) => a.gia_thue_ngay - b.gia_thue_ngay);
            } else if (this.sortOrder === 'Giá: Cao đến Thấp') {
                this.vehicles.sort((a, b) => b.gia_thue_ngay - a.gia_thue_ngay);
            } else if (this.sortOrder === 'Phổ biến nhất') {
                this.vehicles.sort((a, b) => (b.ma_xe || b.id) - (a.ma_xe || a.id));
            }
        },
        async fetchCategories() {
            try {
                this.categories = await api.get('/danh-muc-xe');
            } catch (error) {
                console.error('Lỗi tải danh mục xe:', error);
            }
        },
        async fetchVehicles() {
            this.loading = true;
            try {
                let path = '/xe-may';
                const params = [];
                if (this.selectedCategory) {
                    params.push(`ma_danh_muc=${this.selectedCategory}`);
                }
                if (this.searchQuery) {
                    params.push(`ten_xe=${encodeURIComponent(this.searchQuery)}`);
                }
                if (params.length > 0) {
                    path += `?${params.join('&')}`;
                }
                this.vehicles = await api.get(path);
            } catch (error) {
                console.error('Lỗi tải danh sách xe:', error);
            } finally {
                this.loading = false;
            }
        }
    }
}
</script>

<style scoped>
.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
.glass-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(229, 231, 235, 0.5);
}
.hover-lift {
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}
.hover-lift:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.1);
}
/* Custom range slider styling */
input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #2563eb;
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
}
</style>
