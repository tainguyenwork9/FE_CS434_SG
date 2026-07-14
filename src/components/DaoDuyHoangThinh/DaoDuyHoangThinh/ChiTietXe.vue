<template>
    <div>
        <!-- Top Navigation Bar -->
        <main class="pt-[100px] pb-3xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <!-- Breadcrumbs -->
            <!-- Breadcrumbs -->
            <nav class="flex items-center gap-xs text-on-surface-variant text-label-sm font-label-sm mb-lg">
                <router-link to="/" class="hover:underline">Home</router-link>
                <span class="material-symbols-outlined text-[16px]">chevron_right</span>
                <router-link to="/danh-sach-xe" class="hover:underline">Danh sách xe</router-link>
                <span class="material-symbols-outlined text-[16px]">chevron_right</span>
                <span class="text-primary font-bold">{{ vehicle ? vehicle.ten_xe : 'Chi tiết xe' }}</span>
            </nav>
            <!-- Main Product Section -->
            <div v-if="vehicle" class="grid grid-cols-1 lg:grid-cols-12 gap-xl items-start">
                <!-- Left: Image Gallery (7 Columns) -->
                <div class="lg:col-span-7 flex flex-col gap-lg">
                    <div class="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-surface-container-high image-gallery-shadow border border-outline-variant group">
                        <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" :src="vehicle.hinh_anh || 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80'" :alt="vehicle.ten_xe"/>
                        <div class="absolute top-lg left-lg">
                            <span class="bg-primary px-md py-xs text-on-primary text-label-sm font-label-sm rounded-full shadow-lg">Premium</span>
                        </div>
                    </div>
                </div>
                <!-- Right: Vehicle Information (5 Columns) -->
                <div class="lg:col-span-5 flex flex-col gap-xl lg:sticky lg:top-[100px]">
                    <div class="flex flex-col gap-sm">
                        <div class="flex justify-between items-start">
                            <span class="text-primary font-label-sm text-label-sm tracking-wider">MOTO RENTAL</span>
                            <div class="flex items-center gap-xs text-on-surface-variant">
                                <span class="material-symbols-outlined text-[18px] text-yellow-500" style="font-variation-settings: 'FILL' 1;">star</span>
                                <span class="text-label-md font-label-md">4.8 (Đánh giá)</span>
                            </div>
                        </div>
                        <h1 class="text-display-sm font-display-sm text-on-surface leading-tight">{{ vehicle.ten_xe }}</h1>
                        <div class="flex items-center gap-md mt-sm">
                            <span :class="[vehicle.tinh_trang_xe === 'SanSang' || vehicle.tinh_trang_xe === 'Sẵn Sàng' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700']" class="px-md py-xs rounded-full text-label-sm font-label-sm flex items-center gap-xs">
                                <span :class="[vehicle.tinh_trang_xe === 'SanSang' || vehicle.tinh_trang_xe === 'Sẵn Sàng' ? 'bg-green-500' : 'bg-orange-500']" class="w-2 h-2 rounded-full"></span>
                                {{ vehicle.tinh_trang_xe === 'SanSang' || vehicle.tinh_trang_xe === 'Sẵn Sàng' ? 'Sẵn sàng' : 'Bận' }}
                            </span>
                            <span class="text-on-surface-variant text-label-md font-label-md">Biển số: {{ vehicle.bien_so || 'Đang cập nhật' }}</span>
                        </div>
                    </div>
                    <div class="p-lg bg-surface-container rounded-2xl border border-outline-variant">
                        <div class="flex items-baseline gap-xs">
                            <span class="text-display-sm font-display-sm text-primary">{{ Number(vehicle.gia_thue_ngay).toLocaleString('vi-VN') }}đ</span>
                            <span class="text-on-surface-variant text-label-md font-label-md">/ ngày</span>
                        </div>
                        <p class="text-on-surface-variant text-body-md font-body-md mt-xs">Bao gồm bảo hiểm cơ bản &amp; 2 mũ bảo hiểm</p>
                    </div>
                    <div class="grid grid-cols-2 gap-md">
                        <div class="p-md bg-surface-container-low rounded-xl border border-outline-variant/30 flex items-center gap-md">
                            <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                <span class="material-symbols-outlined">motorcycle</span>
                            </div>
                            <div>
                                <p class="text-on-surface-variant text-label-sm font-label-sm">Phân loại</p>
                                <p class="text-on-surface font-label-md text-label-md">{{ vehicle.danh_muc_xe ? vehicle.danh_muc_xe.ten_danh_muc : 'N/A' }}</p>
                            </div>
                        </div>
                        <div class="p-md bg-surface-container-low rounded-xl border border-outline-variant/30 flex items-center gap-md">
                            <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                <span class="material-symbols-outlined">palette</span>
                            </div>
                            <div>
                                <p class="text-on-surface-variant text-label-sm font-label-sm">Màu sắc</p>
                                <p class="text-on-surface font-label-md text-label-md">{{ vehicle.mau_sac || 'N/A' }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-md">
                        <button @click="$router.push(`/dat-thu-xe?id=${vehicle.ma_xe || vehicle.id}`)" :disabled="vehicle.tinh_trang_xe !== 'SanSang' && vehicle.tinh_trang_xe !== 'Sẵn Sàng'" class="w-full h-[56px] bg-primary text-on-primary font-label-md text-label-md rounded-xl shadow-lg hover:shadow-primary/20 hover:translate-y-[-2px] transition-all flex items-center justify-center gap-md group disabled:opacity-50 disabled:cursor-not-allowed">
                            Đặt thuê ngay
                            <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                        <div class="flex gap-md">
                            <button class="flex-1 h-[48px] border border-outline text-on-surface font-label-md text-label-md rounded-xl hover:bg-surface-container-high transition-soft flex items-center justify-center gap-sm">
                                <span class="material-symbols-outlined">chat</span>
                                Nhắn tin
                            </button>
                            <button class="w-[48px] h-[48px] border border-outline text-on-surface rounded-xl hover:bg-surface-container-high transition-soft flex items-center justify-center">
                                <span class="material-symbols-outlined">favorite</span>
                            </button>
                        </div>
                    </div>
                    <div class="pt-md border-t border-outline-variant">
                        <p class="flex items-center gap-sm text-on-surface-variant text-label-sm font-label-sm">
                            <span class="material-symbols-outlined text-[18px]">verified_user</span>
                            Bảo hiểm sự cố &amp; Cứu hộ 24/7 toàn quốc
                        </p>
                    </div>
                </div>
            </div>
            <!-- Details & Reviews Section -->
            <div class="mt-3xl grid grid-cols-1 lg:grid-cols-12 gap-xl">
                <!-- Left Column: Description & Specs -->
                <div class="lg:col-span-8 flex flex-col gap-2xl">
                    <section>
                        <h2 class="text-headline-lg font-headline-lg text-on-surface mb-lg">Thông tin mô tả</h2>
                        <div class="bg-surface-container-lowest p-xl rounded-2xl border border-outline-variant leading-relaxed text-on-surface-variant font-body-lg text-body-lg">
                            <p class="mb-md">
                                Trải nghiệm đỉnh cao công nghệ cùng Honda SH 160i phiên bản 2026. Đây là dòng xe ga cao cấp nhất được thiết kế dành riêng cho những khách hàng tìm kiếm sự sang trọng và hiệu suất vượt trội. Động cơ eSP+ thế hệ mới giúp xe vận hành êm ái nhưng cực kỳ mạnh mẽ, lý tưởng cho những chuyến dạo quanh phố phường hay di chuyển đường dài.
                            </p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-xl mt-xl">
                                <div class="flex gap-md">
                                    <span class="material-symbols-outlined text-primary">speed</span>
                                    <div>
                                        <h4 class="font-bold text-on-surface">Động cơ mạnh mẽ</h4>
                                        <p class="text-label-md">160cc eSP+, 4 van mang lại khả năng tăng tốc vượt trội và tiết kiệm nhiên liệu.</p>
                                    </div>
                                </div>
                                <div class="flex gap-md">
                                    <span class="material-symbols-outlined text-primary">security</span>
                                    <div>
                                        <h4 class="font-bold text-on-surface">An toàn tối đa</h4>
                                        <p class="text-label-md">Hệ thống phanh ABS hai kênh và kiểm soát lực kéo HSTC hiện đại.</p>
                                    </div>
                                </div>
                                <div class="flex gap-md">
                                    <span class="material-symbols-outlined text-primary">smartphone</span>
                                    <div>
                                        <h4 class="font-bold text-on-surface">Kết nối Bluetooth</h4>
                                        <p class="text-label-md">Đồng bộ với ứng dụng My Honda+ để theo dõi lịch trình và bảo dưỡng.</p>
                                    </div>
                                </div>
                                <div class="flex gap-md">
                                    <span class="material-symbols-outlined text-primary">luggage</span>
                                    <div>
                                        <h4 class="font-bold text-on-surface">Cốp xe rộng rãi</h4>
                                        <p class="text-label-md">Dung tích lớn chứa được 2 mũ bảo hiểm nửa đầu và nhiều vật dụng khác.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div class="flex justify-between items-center mb-lg">
                            <h2 class="text-headline-lg font-headline-lg text-on-surface">Đánh giá khách hàng</h2>
                        </div>
                        <div class="space-y-md" v-if="reviews.length > 0">
                            <div v-for="review in reviews" :key="review.ma_danh_gia" class="p-lg bg-surface-container-lowest rounded-2xl border border-outline-variant transition-soft hover:shadow-md">
                                <div class="flex justify-between items-start mb-md">
                                    <div class="flex items-center gap-md">
                                        <div class="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed font-bold">{{ getInitials(review.khach_hang) }}</div>
                                        <div>
                                            <p class="font-bold text-on-surface">{{ review.khach_hang ? review.khach_hang.ho_ten : 'Khách hàng' }}</p>
                                            <p class="text-label-sm font-label-sm text-on-surface-variant">{{ formatReviewDate(review.ngay_danh_gia) }}</p>
                                        </div>
                                    </div>
                                    <div class="flex gap-[2px]">
                                        <span v-for="s in 5" :key="s" class="material-symbols-outlined text-[18px]" :class="s <= review.diem_so ? 'text-yellow-500' : 'text-outline'" :style="s <= review.diem_so ? 'font-variation-settings: \'FILL\' 1;' : ''">star</span>
                                    </div>
                                </div>
                                <p class="text-on-surface-variant font-body-md text-body-md">{{ review.noi_dung }}</p>
                            </div>
                        </div>
                        <div v-else class="p-xl text-center text-on-surface-variant bg-surface-container-lowest rounded-2xl border border-outline-variant">
                            <span class="material-symbols-outlined text-[48px] text-outline mb-md">rate_review</span>
                            <p class="font-body-lg">Chưa có đánh giá nào cho xe này.</p>
                        </div>
                    </section>
                </div>
                <!-- Right Column: Sidebar / Additional Info -->
                <div class="lg:col-span-4 flex flex-col gap-lg">


                </div>
            </div>
        </main>

        <!-- Micro-interaction Script -->
    </div>
</template>

<script>
import { api } from '../../services/api';

export default {
    name: 'ChiTietXe',
    data() {
        return {
            vehicle: null,
            reviews: [],
            loading: false,
        };
    },
    async mounted() {
        const id = this.$route.query.id;
        if (id) {
            await this.fetchVehicle(id);
            await this.fetchReviews(id);
        }
    },
    methods: {
        async fetchVehicle(id) {
            this.loading = true;
            try {
                this.vehicle = await api.get(`/xe-may/${id}`);
            } catch (error) {
                console.error('Lỗi tải chi tiết xe:', error);
            } finally {
                this.loading = false;
            }
        },
        async fetchReviews(maXe) {
            try {
                this.reviews = await api.get(`/danh-gia/xe/${maXe}`);
            } catch (error) {
                console.error('Lỗi tải đánh giá:', error);
                this.reviews = [];
            }
        },
        getInitials(khachHang) {
            if (!khachHang || !khachHang.ho_ten) return 'KH';
            const parts = khachHang.ho_ten.split(' ');
            if (parts.length >= 2) {
                return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
            }
            return parts[0].substring(0, 2).toUpperCase();
        },
        formatReviewDate(dateString) {
            if (!dateString) return '';
            const now = new Date();
            const date = new Date(dateString);
            const diffMs = now - date;
            const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
            if (diffDays === 0) return 'Hôm nay';
            if (diffDays === 1) return 'Hôm qua';
            if (diffDays < 7) return `${diffDays} ngày trước`;
            if (diffDays < 30) return `${Math.floor(diffDays / 7)} tuần trước`;
            return date.toLocaleDateString('vi-VN');
        }
    }
}
</script>

<style scoped>
body { font-family: 'Inter', sans-serif; }
.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
.glass-panel {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
}
.image-gallery-shadow {
    box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.05);
}
.transition-soft {
    transition: all 200ms ease-in-out;
}
</style>
